import { redirect } from "next/navigation";

/**
 * Staging convenience only — DELETE THIS FILE ON MERGE.
 *
 * On lambdavp.com, `/` is the marketing homepage. This app is deployed
 * standalone for staging, so `/` would otherwise serve the default
 * Next.js starter page — which is what anyone opening the bare Railway
 * URL would see, including people being shown a demo.
 *
 * Redirecting to /contact makes the deployment land where the funnel
 * actually is. When this merges into the marketing site, the site's own
 * homepage takes this path back and this file goes away.
 */
export default function RootPage() {
  redirect("/contact");
}
