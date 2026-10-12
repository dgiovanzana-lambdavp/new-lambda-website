import { describe, expect, it } from "vitest";
import { prepareBoundValues, serializeBoundValue } from "./pg-json-bind.mjs";

/**
 * Regression for the prod copy failure: node-pg encodes JS arrays as
 * Postgres array literals, which jsonb rejects with 22P02
 * (`invalid input syntax for type json`, value like `{"focusArea",...}`).
 */
describe("serializeBoundValue for json/jsonb", () => {
  it("JSON.stringifies object-valued jsonb (answers-shaped)", () => {
    const answers = {
      focusArea: "govtech",
      revenue: "3m_10m",
      financials: ["ebitda_positive", "growing"],
    };
    expect(serializeBoundValue(answers, "jsonb")).toBe(JSON.stringify(answers));
    expect(serializeBoundValue(answers, "json")).toBe(JSON.stringify(answers));
  });

  it("JSON.stringifies array-valued jsonb (failed_gates-shaped)", () => {
    const failedGates = ["revenue", "profitability"];
    const bound = serializeBoundValue(failedGates, "jsonb");
    expect(bound).toBe(JSON.stringify(failedGates));
    // Must not look like a Postgres array literal.
    expect(bound).not.toMatch(/^\{/);
    expect(JSON.parse(/** @type {string} */ (bound))).toEqual(failedGates);
  });

  it("leaves null/undefined alone", () => {
    expect(serializeBoundValue(null, "jsonb")).toBeNull();
    expect(serializeBoundValue(undefined, "jsonb")).toBeUndefined();
  });

  it("does not double-encode JSON text already stored as a string", () => {
    const raw = '{"focusArea":"govtech"}';
    expect(serializeBoundValue(raw, "jsonb")).toBe(raw);
  });

  it("passes through non-json column values unchanged", () => {
    const tags = ["a", "b"];
    expect(serializeBoundValue(tags, "ARRAY")).toBe(tags);
    expect(serializeBoundValue("hello", "text")).toBe("hello");
    expect(serializeBoundValue(42, "integer")).toBe(42);
  });
});

describe("prepareBoundValues with mixed jsonb rows", () => {
  it("binds object answers and array failed_gates as JSON text", () => {
    const columns = ["id", "answers", "failed_gates", "email"];
    const columnTypes = {
      id: "uuid",
      answers: "jsonb",
      failed_gates: "jsonb",
      email: "text",
    };
    const row = {
      id: "11111111-1111-1111-1111-111111111111",
      answers: { focusArea: "govtech", capital: ["3m_10m"] },
      failed_gates: ["revenue"],
      email: "a@example.com",
    };

    const bound = prepareBoundValues(row, columns, columnTypes);

    expect(bound[0]).toBe(row.id);
    expect(bound[1]).toBe(JSON.stringify(row.answers));
    expect(bound[2]).toBe(JSON.stringify(row.failed_gates));
    expect(bound[3]).toBe(row.email);
    expect(JSON.parse(/** @type {string} */ (bound[1])).focusArea).toBe(
      "govtech",
    );
    expect(JSON.parse(/** @type {string} */ (bound[2]))).toEqual(["revenue"]);
  });
});
