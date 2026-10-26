import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_POST,
  IMPLEMENTATION_MILESTONES_POST,
  VENTURE_DEBT_FAQ,
  VENTURE_DEBT_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  VENTURE_DEBT_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function VentureDebtPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          A VC round costs you ownership on the day it closes. A loan costs you
          cash every month after. The question is which one your business can
          actually afford.
        </strong>
      </p>
      <p>
        I think most GovTech founders frame this choice too narrowly. Venture
        capital gives you capital you never repay, in exchange for shares and
        some control. Debt lets you keep your ownership, but you repay it on
        schedule no matter how the quarter goes. Venture debt sits in between: a
        loan that often carries a small equity component for the lender. For a
        steadily growing GovTech company with sticky government contracts, debt
        often fits better than VC, provided the cash flow can carry the
        payments.
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice.
        </em>
      </p>

      <h2 id={H["The three options in one sentence each"]}>
        The three options in one sentence each
      </h2>
      <p>
        I find it helps to strip each option down to what you give and what you
        get. HubSpot for Startups puts the core tradeoff this way: debt
        &quot;preserves control but requires regular payments regardless of
        performance.&quot; (
        <ExtLink href="https://www.hubspot.com/startups/fundraising/equity-vs-debt-financing">
          HubSpot for Startups
        </ExtLink>
        )
      </p>
      <p>
        <strong>Venture capital.</strong> You sell ownership shares; the same
        guide notes there is no obligation to repay if the company fails, but
        every round dilutes your stake.
      </p>
      <p>
        <strong>Venture debt.</strong> The guide describes it as similar in
        structure to a bank loan, often paired with a small equity component for
        the lender. Warrants are rights to buy shares later, and they sometimes
        come attached to a loan.
      </p>
      <p>
        <strong>Loans with bullet payments and revenue based financing.</strong>{" "}
        Loans you repay with interest. With a bullet payment, the principal
        comes due in one lump sum at maturity (
        <ExtLink href="https://pressbooks.pub/introductiontofinancialanalysis/chapter/11-20-loans-the-conventional-mortgage/">
          Touro University open textbook
        </ExtLink>
        ). The startup guide quoted above describes revenue based financing as
        repaid from a fixed percentage of future revenue, and notes it is still
        a loan that must be repaid.
      </p>

      <h2
        id={
          H[
            "Why venture debt may not be available to a bootstrapped GovTech company"
          ]
        }
      >
        Why venture debt may not be available to a bootstrapped GovTech company
      </h2>
      <p>
        Here is the catch for the founders I talk to most: classic venture debt
        is built for companies that already have VC backing. The same guide says
        that after a Series A, you &quot;can unlock debt options,&quot;
        including venture debt, credit lines, and revenue based financing. (
        <ExtLink href="https://www.hubspot.com/startups/fundraising/equity-vs-debt-financing">
          equity vs debt guide
        </ExtLink>
        )
      </p>
      <p>
        That does not close the door on debt. The guide also notes that lenders
        generally want proven revenue and predictable cash flow. A GovTech
        company with years of renewals often has exactly that, which makes loans
        with bullet payments and revenue based financing the more natural
        comparison.
      </p>

      <h2 id={H["What lenders look at when your customers are governments"]}>
        What lenders look at when your customers are governments
      </h2>
      <p>
        In my experience, government customers tend to stick once a system is in
        place, but lenders will not take that on faith. When I review a
        government contract, I start with the exit doors. Federal contracts can
        be ended for convenience: the standard clause lets the government
        terminate &quot;if the Contracting Officer determines that a termination
        is in the Government&apos;s interest&quot; (
        <ExtLink href="https://www.acquisition.gov/far/52.249-2">
          FAR 52.249-2
        </ExtLink>
        ,{" "}
        <ExtLink href="https://www.acquisition.gov/far/49.101">
          FAR 49.101
        </ExtLink>
        ). Agencies also cannot commit money that has not been appropriated (
        <ExtLink href="https://www.law.cornell.edu/uscode/text/31/1341">
          31 U.S.C. 1341
        </ExtLink>
        ), which is why multi year deals often depend on each year&apos;s
        budget.
      </p>
      <p>
        Next, check whether the receivable can actually back a loan. Federal
        contract payments generally cannot be transferred, except through the
        Assignment of Claims Act, which lets a contractor assign payments to a
        bank or other financing institution when the contract allows it and the
        conditions are met (
        <ExtLink href="https://www.law.cornell.edu/uscode/text/41/6305">
          41 U.S.C. 6305
        </ExtLink>
        ,{" "}
        <ExtLink href="https://www.acquisition.gov/far/32.802">
          FAR 32.802
        </ExtLink>
        ).
      </p>
      <p>
        Then there is concentration and timing. If one agency is most of your
        revenue, a single budget fight or termination can stall the whole
        business, and long collection cycles make every month of runway more
        expensive. Walk into any lender conversation with your contract terms,
        renewal history, funded backlog, and how fast each customer actually
        pays. If payments run late, know your rights under{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws
        </Link>
        .
      </p>

      <h2 id={H["When debt fits and when VC fits"]}>
        When debt fits and when VC fits
      </h2>
      <p>
        I tell founders to decide based on the business they actually want to
        run, not the one a pitch deck describes. The equity vs debt guide quoted
        earlier puts it plainly: &quot;Choose debt when you have predictable
        revenue streams, want to maintain full ownership and control, prefer
        sustainable growth over hypergrowth, or have strong financials and
        credit history.&quot; (
        <ExtLink href="https://www.hubspot.com/startups/fundraising/equity-vs-debt-financing">
          equity vs debt guide
        </ExtLink>
        )
      </p>
      <p>
        On the other side, the guide says equity fits companies chasing fast
        growth, industry dominance, or large liquidity events, and companies
        that are prerevenue or cannot handle regular debt payments.
      </p>

      <h2
        id={
          H[
            "Venture capital, venture debt and loans with bullet payments compared"
          ]
        }
      >
        Venture capital, venture debt and loans with bullet payments compared
      </h2>
      <p>
        <em>
          Typical structures described by the sources cited; terms vary by
          lender and deal.
        </em>
      </p>

      <TableWrap
        caption="Venture capital, venture debt and loans with bullet payments compared"
        scrollable
      >
        <table className="blog-table blog-table--options">
          <caption>
            Venture capital, venture debt and loans with bullet payments compared
          </caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Venture capital round</th>
              <th scope="col">Venture debt</th>
              <th scope="col">
                Loan with bullet payments or revenue based financing
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Row">What the provider gets</td>
              <td data-label="Venture capital round">Ownership shares</td>
              <td data-label="Venture debt">
                Interest, repayment, and often a small equity component
              </td>
              <td data-label="Loan with bullet payments or revenue based financing">
                Interest and repayment
              </td>
            </tr>
            <tr>
              <td data-label="Row">Ownership effect</td>
              <td data-label="Venture capital round">
                Dilution at every round
              </td>
              <td data-label="Venture debt">Small and contingent</td>
              <td data-label="Loan with bullet payments or revenue based financing">
                Ownership kept
              </td>
            </tr>
            <tr>
              <td data-label="Row">Repayment</td>
              <td data-label="Venture capital round">
                No obligation to repay
              </td>
              <td data-label="Venture debt">
                Required regardless of performance
              </td>
              <td data-label="Loan with bullet payments or revenue based financing">
                Required, though revenue based payments move with revenue
              </td>
            </tr>
            <tr>
              <td data-label="Row">Control</td>
              <td data-label="Venture capital round">
                Some control exchanged for support
              </td>
              <td data-label="Venture debt">
                Kept, as long as payments are timely
              </td>
              <td data-label="Loan with bullet payments or revenue based financing">
                Kept, as long as payments are timely
              </td>
            </tr>
            <tr>
              <td data-label="Row">Typical stage</td>
              <td data-label="Venture capital round">
                Often the only option before revenue
              </td>
              <td data-label="Venture debt">After a Series A</td>
              <td data-label="Loan with bullet payments or revenue based financing">
                Proven revenue and cash flow
              </td>
            </tr>
            <tr>
              <td data-label="Row">Best fit</td>
              <td data-label="Venture capital round">
                Fast growth, large liquidity events
              </td>
              <td data-label="Venture debt">
                Runway between equity rounds
              </td>
              <td data-label="Loan with bullet payments or revenue based financing">
                Predictable revenue, owners who want control
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={VENTURE_DEBT_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          If an agency is paying late:{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Laws for GovTech Vendors
          </Link>
        </li>
        <li>
          Getting subscription revenue in advance:{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can Government Customers Pay Your SaaS Subscription Upfront?
          </Link>
        </li>
        <li>
          Getting paid during implementation:{" "}
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Milestones and Holdbacks on Government Software Contracts
          </Link>
        </li>
      </ul>

      <h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>
      <p>
        Lambda Capital is a permanent capital holding company investing in
        vertical market technology that strengthens national security and core
        sectors of the economy. We take a patient approach and invest for the
        long term. GovTech contract funding is one of our lines of business.
      </p>
      <p>
        <Link href="/contact">Contact Lambda Capital</Link>
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
