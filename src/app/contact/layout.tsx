/**
 * Split-screen shell, shared by the router screen and every step.
 *
 * Left ~30% carries the image; right 70% is the panel holding the
 * question. Below `md` the panel takes the full width and the image
 * collapses to a thin band — on a 375px screen a 30% image column would
 * leave roughly 260px for the question, which is not enough for a pill
 * option to render on one line.
 *
 * The panel is white and the rail is navy, matching the site rather
 * than inverting it. The contrast between the two is what gives the
 * flow its focus, without importing a dark theme the site doesn't have.
 *
 * ── Sitting inside the site chrome ──────────────────────────────────
 *
 * This used to be `min-h-screen` and stood alone on the staging deploy,
 * where nothing surrounded it. Now the root layout puts the site's
 * Navigation above and Footer below, so a full viewport height here
 * would push the footer off-screen on every step and guarantee a
 * scrollbar with nothing under it.
 *
 * Navigation is `position: fixed`, so it takes no layout space and the
 * content underneath needs its own offset — the same `pt-16 md:pt-20`
 * the marketing pages use. The height then targets the viewport minus
 * that nav, so the split fills the screen exactly once.
 */
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col pt-16 md:min-h-[calc(100vh-5rem)] md:flex-row md:pt-20">
      <aside
        aria-hidden="true"
        className="relative h-24 shrink-0 overflow-hidden bg-navy-blue md:h-auto md:w-[30%]"
      >
        {/*
          The site's hero footage, reused as a still-moving rail.

          Decorative only, hence aria-hidden — it carries no information
          a screen-reader user would otherwise miss, and the funnel is
          fully usable with it blocked or failed.

          Muted and playsInline so mobile browsers will start it without
          a gesture; if autoplay is refused the navy wash underneath is
          what shows, which is the design this replaced and perfectly
          acceptable on its own.
        */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/Defense-plus.mp4" type="video/mp4" />
        </video>

        {/* Darkening wash, so the footage reads as a rail rather than
            competing with the question for attention. */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/80 via-navy-blue/60 to-accent/40" />
      </aside>

      <main className="flex-1 bg-lambda-panel">
        <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-6 py-12 sm:px-10 sm:py-16">
          {children}
        </div>
      </main>
    </div>
  );
}
