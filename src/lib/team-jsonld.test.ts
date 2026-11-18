import { describe, expect, it } from "vitest";
import { getTeamPageJsonLd } from "./team-jsonld";

describe("getTeamPageJsonLd", () => {
  it("exposes Person and Organization nodes in @graph", () => {
    const graph = getTeamPageJsonLd();
    expect(graph["@context"]).toBe("https://schema.org");
    const nodes = graph["@graph"];
    expect(nodes).toHaveLength(2);

    const person = nodes.find(
      (node) => node["@type"] === "Person",
    ) as Record<string, unknown>;
    const organization = nodes.find(
      (node) => node["@type"] === "Organization",
    ) as Record<string, unknown>;

    expect(person.name).toBe("Domenic Giovanzana");
    expect(person.jobTitle).toBe("Founder and General Partner");
    expect(person.url).toBe("https://www.lambdavp.com/team");
    expect(person.image).toBe(
      "https://www.lambdavp.com/headshots/domenic-giovanzana.webp",
    );
    expect(person.sameAs).toEqual(["https://www.linkedin.com/in/dgiovanzana"]);

    expect(organization.name).toBe("Lambda Capital");
    expect(organization.url).toBe("https://www.lambdavp.com");
    expect(organization.founder).toEqual({
      "@id": "https://www.lambdavp.com/team#domenic-giovanzana",
    });
  });
});