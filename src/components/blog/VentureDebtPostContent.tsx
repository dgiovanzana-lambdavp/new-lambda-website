import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  GOVTECH_POST,
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
        loan that usually comes with warrants, sized as a percentage of the
        loan. For a steadily growing GovTech company with sticky government
        contracts, debt often fits better than VC, provided the cash flow can
        carry the payments.
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
        <strong>Venture capital.</strong> You sell ownership shares; HubSpot for
        Startups notes there is no obligation to repay if the company fails, but
        every round dilutes your stake.
      </p>
      <p>
        <strong>Venture debt.</strong> HubSpot for Startups describes it as
        similar in structure to a bank loan, usually paired with warrants or
        other small equity kickers for the lender.
      </p>
      <p>
        <strong>Term loans and revenue based financing.</strong> Loans you repay
        with interest. HubSpot for Startups describes revenue based financing as
        repaid from a fixed percentage of future revenue, and notes it is still
        a loan that must be repaid.
      </p>

      <h2 id={H["How warrant coverage works: the minimal equity middle ground"]}>
        How warrant coverage works: the minimal equity middle ground
      </h2>
      <p>
        The warrant percentage is the number that scares founders, and in my
        experience it is usually misread. Venturemage is clear on this:
        &quot;Warrant coverage is expressed as a percentage of the loan amount,
        not the company valuation.&quot; (
        <ExtLink href="https://venturemage.com/warrant-coverage-venture-debt">
          Venturemage
        </ExtLink>
        )
      </p>
      <p>
        In the same guide&apos;s example, 10% coverage on a $2 million loan
        gives the lender warrants worth $200,000 at the agreed strike price. A
        warrant is a right, not an obligation, to buy shares at that fixed price
        before an expiration date. If it is never exercised, the guide notes, no
        dilution occurs.
      </p>
      <p>
        <strong>How much dilution?</strong> Venturemage says the average venture
        debt deal results in roughly 1 to 2 percent total equity dilution if the
        lender exercises, while its own FAQ puts the range at 1 to 3 percent;
        treat both as the publisher&apos;s estimate, not independent data.
      </p>
      <p>
        The real cost depends on what your company is worth later. Startup
        Fortune explains that the strike price is locked when the loan closes
        and never resets upward (
        <ExtLink href="https://startupfortune.com/how-does-venture-debt-warrant-coverage-work-and-why-it-costs-more/">
          Startup Fortune
        </ExtLink>
        ), so the better you do, the more the warrant is worth to the lender.
      </p>
      <p>
        <strong>Levers to negotiate:</strong>
      </p>
      <ol>
        <li>
          <strong>Coverage percentage.</strong> The same guide calls coverage a
          pricing lever that rises with risk, and says competing term sheets are
          the best way to push it down.
        </li>
        <li>
          <strong>Drawn vs committed.</strong> Startup Fortune warns against
          coverage priced on the full committed facility rather than what you
          actually draw (
          <ExtLink href="https://startupfortune.com/how-does-warrant-coverage-work-in-a-startup-venture-debt-loan/">
            Startup Fortune
          </ExtLink>
          ). The guide also describes splitting issuance between commitment and
          drawdown.
        </li>
        <li>
          <strong>Strike price and expiration.</strong> It suggests tying the
          strike to your most recent round and pushing for a shorter term.
        </li>
        <li>
          <strong>The share count, not just the percentage.</strong> Startup
          Fortune suggests having counsel walk through the actual share count
          the warrant produces under the document&apos;s definitions.
        </li>
        <li>
          <strong>Put options.</strong> The guide also flags clauses that let
          the lender sell the warrant back to you for cash after a set number of
          years. Negotiate them out or cap them.
        </li>
      </ol>

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
        is built for companies that already have VC backing. HubSpot for
        Startups says that after a Series A, you &quot;can unlock debt
        options,&quot; including venture debt, credit lines, and revenue based
        financing. (
        <ExtLink href="https://www.hubspot.com/startups/fundraising/equity-vs-debt-financing">
          HubSpot for Startups
        </ExtLink>
        )
      </p>
      <p>
        The same warrant guide adds that the best venture debt terms come within
        6 to 12 months of closing an equity round. If you have never raised one,
        that window does not exist for you.
      </p>
      <p>
        That does not close the door on debt. HubSpot for Startups notes that
        lenders generally want proven revenue and predictable cash flow. A
        GovTech company with years of renewals often has exactly that, which
        makes term loans and revenue based financing the more natural
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
        run, not the one a pitch deck describes. HubSpot for Startups puts it
        plainly: &quot;Choose debt when you have predictable revenue streams,
        want to maintain full ownership and control, prefer sustainable growth
        over hypergrowth, or have strong financials and credit history.&quot; (
        <ExtLink href="https://www.hubspot.com/startups/fundraising/equity-vs-debt-financing">
          HubSpot for Startups
        </ExtLink>
        )
      </p>
      <p>
        On the other side, HubSpot for Startups says equity fits companies
        chasing fast growth, industry dominance, or large liquidity events, and
        companies that are prerevenue or cannot handle regular debt payments.
      </p>

      <h2 id={H["Venture capital, venture debt and term loans compared"]}>
        Venture capital, venture debt and term loans compared
      </h2>
      <p>
        <em>
          Typical structures described by the sources cited; terms vary by
          lender and deal.
        </em>
      </p>

      <TableWrap
        caption="Venture capital, venture debt and term loans compared"
        scrollable
      >
        <table className="blog-table blog-table--options">
          <caption>
            Venture capital, venture debt and term loans compared
          </caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Venture capital round</th>
              <th scope="col">Venture debt with warrants</th>
              <th scope="col">Term loan or revenue based financing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Row">What the provider gets</td>
              <td data-label="Venture capital round">Ownership shares</td>
              <td data-label="Venture debt with warrants">
                Interest, repayment, and usually warrants
              </td>
              <td data-label="Term loan or revenue based financing">
                Interest and repayment
              </td>
            </tr>
            <tr>
              <td data-label="Row">Ownership effect</td>
              <td data-label="Venture capital round">
                Dilution at every round
              </td>
              <td data-label="Venture debt with warrants">
                Small and contingent; warrants may never be exercised
              </td>
              <td data-label="Term loan or revenue based financing">
                Ownership kept
              </td>
            </tr>
            <tr>
              <td data-label="Row">Repayment</td>
              <td data-label="Venture capital round">
                No obligation to repay
              </td>
              <td data-label="Venture debt with warrants">
                Required regardless of performance
              </td>
              <td data-label="Term loan or revenue based financing">
                Required regardless of performance
              </td>
            </tr>
            <tr>
              <td data-label="Row">Control</td>
              <td data-label="Venture capital round">
                Some control exchanged for support
              </td>
              <td data-label="Venture debt with warrants">
                Kept, as long as payments are timely
              </td>
              <td data-label="Term loan or revenue based financing">
                Kept, as long as payments are timely
              </td>
            </tr>
            <tr>
              <td data-label="Row">Typical stage</td>
              <td data-label="Venture capital round">
                Often the only option before revenue
              </td>
              <td data-label="Venture debt with warrants">After a Series A</td>
              <td data-label="Term loan or revenue based financing">
                Proven revenue and cash flow
              </td>
            </tr>
            <tr>
              <td data-label="Row">Best fit</td>
              <td data-label="Venture capital round">
                Fast growth, large liquidity events
              </td>
              <td data-label="Venture debt with warrants">
                Runway between equity rounds
              </td>
              <td data-label="Term loan or revenue based financing">
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
          If your growth problem is really a payment timing problem:{" "}
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
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
        Lambda Capital is a permanent capital holding company. We take a patient
        approach and invest for the long term. GovTech is one of our focus
        areas.
      </p>
      <p>
        If you are weighing how to fund your next stage of growth,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
