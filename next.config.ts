import type { NextConfig } from "next";

/**
 * Dead slug from the reverted growth-debt post (commit e58b29c / revert
 * 5277057). Still indexed; permanent redirect to the live venture debt
 * vs VC GovTech post. statusCode 301 (not permanent:true / 308) so
 * crawlers treat it as a classic permanent move.
 *
 * Hosted on Railway via `next start`, so Next.js redirects are what
 * the runtime actually applies (not Netlify `_redirects`).
 *
 * Trailing-slash requests first hit Next's built-in 308 strip
 * (trailingSlash: false), then this 301. Both hops are permanent.
 */
const DEAD_GROWTH_DEBT_PATH =
  "/blog/how-much-growth-debt-govtech-software-company";
const VENTURE_DEBT_VS_VC_PATH =
  "/blog/venture-debt-vs-venture-capital-govtech";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: DEAD_GROWTH_DEBT_PATH,
        destination: VENTURE_DEBT_VS_VC_PATH,
        statusCode: 301,
      },
      {
        source: `${DEAD_GROWTH_DEBT_PATH}/`,
        destination: VENTURE_DEBT_VS_VC_PATH,
        statusCode: 301,
      },
      {
        source: "/blog/warrant-coverage-explained-govtech",
        destination: VENTURE_DEBT_VS_VC_PATH,
        statusCode: 301,
      },
      {
        source: "/blog/warrant-coverage-explained-govtech/",
        destination: VENTURE_DEBT_VS_VC_PATH,
        statusCode: 301,
      },
      {
        source: "/blog/warrant-coverage-venture-debt",
        destination: VENTURE_DEBT_VS_VC_PATH,
        statusCode: 301,
      },
      {
        source: "/blog/warrant-coverage-venture-debt/",
        destination: VENTURE_DEBT_VS_VC_PATH,
        statusCode: 301,
      },
      {
        source: "/blog/term-loan-vs-amortizing-loan-software-companies",
        destination: "/blog/bullet-loan-vs-amortizing-loan-software-companies",
        statusCode: 301,
      },
      {
        source: "/blog/term-loan-vs-amortizing-loan-software-companies/",
        destination: "/blog/bullet-loan-vs-amortizing-loan-software-companies",
        statusCode: 301,
      },
      {
        source: "/blog/non-convertible-preferred-stock",
        destination: "/blog/capital-stack-seniority-govtech-software",
        statusCode: 301,
      },
      {
        source: "/blog/non-convertible-preferred-stock/",
        destination: "/blog/capital-stack-seniority-govtech-software",
        statusCode: 301,
      },
      {
        source: "/blog/preferred-stock-financing-govtech",
        destination: "/blog/capital-stack-seniority-govtech-software",
        statusCode: 301,
      },
      {
        source: "/blog/preferred-stock-financing-govtech/",
        destination: "/blog/capital-stack-seniority-govtech-software",
        statusCode: 301,
      },
      {
        source: "/blog/how-much-can-a-saas-company-borrow",
        destination: "/blog/working-capital-vs-growth-capital-govtech-software",
        statusCode: 301,
      },
      {
        source: "/blog/how-much-can-a-saas-company-borrow/",
        destination: "/blog/working-capital-vs-growth-capital-govtech-software",
        statusCode: 301,
      },
      {
        source: "/financing-toolbelt",
        destination: "/blog/software-company-financing-strategy",
        statusCode: 301,
      },
      {
        source: "/financing-toolbelt/",
        destination: "/blog/software-company-financing-strategy",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
