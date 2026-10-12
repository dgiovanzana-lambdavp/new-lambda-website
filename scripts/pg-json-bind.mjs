/**
 * node-pg binding helpers for cross-database copies.
 *
 * When pg reads a json/jsonb column it returns a JS object or array.
 * Binding that value back without conversion is wrong for arrays:
 * pg encodes JS arrays as Postgres array literals (`{a,b}`), not JSON
 * (`["a","b"]`), which yields `invalid input syntax for type json` (22P02).
 *
 * Objects happen to work more often, but the same path should stringify
 * both so every json/jsonb value is sent as JSON text.
 */

/**
 * @param {unknown} value
 * @param {string} dataType  information_schema.columns.data_type
 * @returns {unknown}
 */
export function serializeBoundValue(value, dataType) {
  if (value == null) return value;

  if (dataType === "json" || dataType === "jsonb") {
    // Already JSON text — leave alone so we do not double-encode.
    if (typeof value === "string") return value;
    if (typeof value === "object") return JSON.stringify(value);
  }

  return value;
}

/**
 * @param {Record<string, unknown>} row
 * @param {string[]} columns
 * @param {Record<string, string>} columnTypes  column_name → data_type
 * @returns {unknown[]}
 */
export function prepareBoundValues(row, columns, columnTypes) {
  return columns.map((column) =>
    serializeBoundValue(row[column], columnTypes[column] ?? ""),
  );
}
