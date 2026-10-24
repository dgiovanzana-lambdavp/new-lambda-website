/**
 * Canonical site origin (www). Must match sitemap locs and the
 * production host after the apex → www redirect.
 */
export const SITE_ORIGIN = "https://www.lambdavp.com";

/**
 * Absolute URL for a path, matching sitemap form and Next's emitted
 * canonicals (`trailingSlash: false`): no trailing slash, including
 * the homepage (`https://www.lambdavp.com`).
 */
export function absoluteUrl(path: string = "/"): string {
  if (path === "/" || path === "") return SITE_ORIGIN;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized.replace(/\/+$/, "")}`;
}
