/**
 * Test stub for the `server-only` package.
 *
 * The real package throws on import unless the bundler resolves it
 * under React's `react-server` condition. That is exactly the behaviour
 * we want in the app — it is what makes importing scoring.ts from a
 * client component a build error — but it also means a plain Node test
 * process cannot import scoring.ts at all.
 *
 * Vitest aliases `server-only` to this empty module so the suite can
 * exercise the real SCORING_CONFIG. Tests run on the server by
 * definition, so the guard has nothing to protect there.
 *
 * The alias is scoped to vitest.config.ts and has no effect on the
 * application build, where the genuine package still does its job.
 */
export {};
