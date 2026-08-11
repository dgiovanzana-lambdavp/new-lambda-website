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
 */
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside
        aria-hidden="true"
        className="relative h-24 shrink-0 overflow-hidden bg-lambda-fg md:h-auto md:w-[30%]"
      >
        {/*
          Decorative only, hence aria-hidden — it carries no information
          a screen-reader user would otherwise miss.

          On merge this is where the site's existing hero media goes
          (the Defense-plus.mp4 still frame). Kept as a navy wash for
          now rather than shipping a placeholder image file that someone
          would have to remember to delete.
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-lambda-fg via-lambda-fg to-lambda-accent/40" />
      </aside>

      <main className="flex-1 bg-lambda-panel">
        <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-6 py-12 sm:px-10 sm:py-16">
          {children}
        </div>
      </main>
    </div>
  );
}
