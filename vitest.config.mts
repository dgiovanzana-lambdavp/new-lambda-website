import { defineConfig } from "vitest/config";
import path from "node:path";

/**
 * `.mts`, not `.ts`.
 *
 * Vite's native config loader treats a `.ts` config as CommonJS unless
 * the nearest package.json declares `"type": "module"` — which this one
 * cannot, because Next.js expects CommonJS semantics for its own config
 * files. The `.mts` extension marks this single file as ESM without
 * changing anything else in the project.
 *
 * `import.meta.dirname` rather than `__dirname` for the same reason:
 * the CommonJS globals do not exist in an ES module.
 */
export default defineConfig({
  test: {
    // Node, not jsdom: the only thing under test is scoreLead, a pure
    // function with no DOM and no I/O. Pulling in jsdom would slow the
    // suite down for nothing.
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
  resolve: {
    alias: {
      // Mirror the tsconfig "@/*" alias so tests import the same way
      // application code does.
      "@": path.resolve(import.meta.dirname, "./src"),

      // The real `server-only` package throws unless resolved under
      // React's `react-server` condition, which a plain Node test
      // process does not set. Without this alias the suite cannot
      // import scoring.ts to test against the shipped defaults.
      // Scoped to tests — the app build still uses the real package.
      "server-only": path.resolve(
        import.meta.dirname,
        "./src/test/stubs/server-only.ts",
      ),
    },
  },
});
