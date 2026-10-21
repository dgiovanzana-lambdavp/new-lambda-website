import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  FINANCING_STRATEGY_POST,
  GOVTECH_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_FAQ,
  REVOLVING_LINE_HEADINGS,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  REVOLVING_LINE_HEADINGS.map((h) => [h.text, h.id]),
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

export default function RevolvingLinePostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Most cash crunches in software are timing problems, not profit
          problems. A revolving line of credit is built for timing.
        </strong>
      </p>
      <p>
        A revolving line of credit gives a business a set maximum it can draw
        from, repay, and draw from again until the arrangement ends. Interest is
        charged only on the amount drawn, not on the whole line. Revolvers are
        generally treated as short term financing for operating needs,
        especially for businesses whose cash flow swings. That makes them a
        natural fit to consider for a software as a service (SaaS) company with
        uneven months, or a government technology (GovTech) company waiting on
        agencies to pay. The tradeoff is refinance risk: a balance can remain
        when the line comes up for renewal. For the full set of options, see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          series hub on software company financing strategy
        </Link>
        , and if you have already ruled out venture capital, see{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          when venture capital is the wrong choice for vertical SaaS
        </Link>
        .
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice. It describes how revolving credit works; it is not borrowing
          advice.
        </em>
      </p>

      <h2 id={H["How a revolving line of credit works"]}>
        How a revolving line of credit works
      </h2>
      <p>
        The mechanics are simpler than the name suggests. The Corporate Finance
        Institute defines it this way: &quot;A revolving credit facility is a
        line of credit that is arranged between a bank and a business.&quot; (
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/revolving-credit-facility/">
          Corporate Finance Institute
        </ExtLink>
        ) It comes with an established maximum, the business can draw at any
        time, interest is charged only on the amount withdrawn, and the business
        can withdraw, spend, and repay any number of times until the arrangement
        expires. That is what separates it from an installment loan, which is
        repaid on a fixed schedule and cannot be drawn again once paid off.
      </p>

      <h2 id={H["What a revolver is for, and what it is not for"]}>
        What a revolver is for, and what it is not for
      </h2>
      <p>
        The way I frame it, a revolver is for the gap between when money goes
        out and when it comes in. The same guide describes revolving credit as
        mostly useful for operating purposes, especially for businesses with
        sharp swings in cash flow, and gives the example of a seasonal business
        that may not be able to cover payroll in its slow months while it waits
        to collect receivables.
      </p>
      <p>
        In my judgment, a revolver is a poor match for a long term purchase that
        will take years to pay back. Installment debt, which repays on a fixed
        schedule, is built around that kind of need.
      </p>

      <h2 id={H["The risk: what happens at renewal"]}>
        The risk: what happens at renewal
      </h2>
      <p>
        A revolver smooths uneven months, but it carries a specific risk worth
        understanding. The Office of the Comptroller of the Currency, a federal
        bank regulator, defines it in a bulletin on commercial lending:
        &quot;Refinance risk is the risk that borrowers will not be able to
        replace existing debt at a future date under reasonable terms and
        prevailing market conditions.&quot; (
        <ExtLink href="https://www.occ.gov/news-issuances/bulletins/2024/bulletin-2024-29.html">
          Office of the Comptroller of the Currency
        </ExtLink>
        ) The same bulletin names revolving working capital lines among the loan
        types most affected by refinance risk.
      </p>
      <p>
        In plain terms, a line that is fully drawn when it comes up for renewal
        leaves a balance that still has to be repaid or replaced.
      </p>

      <h2 id={H["When you are waiting months on a government payment"]}>
        When you are waiting months on a government payment
      </h2>
      <p>
        This is where the revolver idea meets the GovTech reality. Amerifusion
        Bookkeeping, which works with government contractors, describes it this
        way: &quot;you deliver the work first, then wait 30, 60, or 90 days for
        the government to pay&quot; (
        <ExtLink href="https://amerifusionbookkeeping.com/cash-flow-government-contractors/">
          Amerifusion Bookkeeping
        </ExtLink>
        ). The firm adds that a rejected invoice, a government shutdown, or a
        continuing resolution can stretch a 45 day cycle to 90.
      </p>
      <p>
        Revolving structures also appear in federal small business programs. The{" "}
        <ExtLink href="https://www.sba.gov/partners/lenders/7a-loan-program/types-7a-loans">
          U.S. Small Business Administration (SBA)
        </ExtLink>{" "}
        describes a Contract CAPLine that finances the costs of one or more
        specific contracts, and notes that the loan may be revolving or not.
      </p>
      <p>
        Shortening the wait itself is a separate step from financing it. For
        more, see{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        ,{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          the Assignment of Claims Act explained
        </Link>
        ,{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          government contract financing for software companies
        </Link>
        ,{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront SaaS payment
        </Link>
        , and{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          implementation payment milestones
        </Link>
        .
      </p>

      <h2 id={H["Why growth makes the gap wider"]}>
        Why growth makes the gap wider
      </h2>
      <p>
        Growth tends to make the timing problem bigger, not smaller. As Cheryl
        Jefferson &amp; Associates, a certified public accounting firm for
        government contractors, puts it: &quot;So while revenue grows, cash lags
        behind.&quot; (
        <ExtLink href="https://www.cjeffersoncpa.com/govcon-cash-flow-problems/">
          Cheryl Jefferson &amp; Associates
        </ExtLink>
        ) The firm explains that contractors hire staff and incur costs before
        invoices are submitted, then wait weeks or months to be paid.
      </p>

      <h2 id={H["Lines tied to receivables"]}>Lines tied to receivables</h2>
      <p>
        Some revolving lines are tied directly to a company&apos;s receivables.
        The SBA describes its Working Capital CAPLine this way: &quot;Businesses
        continually draw from this line of credit, based on existing assets, and
        repay as their cash cycle dictates.&quot; (
        <ExtLink href="https://www.sba.gov/partners/lenders/7a-loan-program/types-7a-loans">
          SBA
        </ExtLink>
        ) Receivables financing for GovTech gets its own post later in this
        series.
      </p>

      <h2 id={H["Revolving line of credit vs installment loan"]}>
        Revolving line of credit vs installment loan
      </h2>
      <p>
        <em>A summary of the mechanics described above.</em>
      </p>
      <TableWrap
        caption="Revolving line of credit vs installment loan"
        scrollable
      >
        <table>
          <caption>Revolving line of credit vs installment loan</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Revolving line of credit</th>
              <th scope="col">Installment loan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">How you get the money</td>
              <td data-label="Revolving line of credit">
                Draw as needed up to an established maximum
              </td>
              <td data-label="Installment loan">Borrowed up front</td>
            </tr>
            <tr>
              <td data-label="">After you repay</td>
              <td data-label="Revolving line of credit">
                The line can be drawn again until it expires
              </td>
              <td data-label="Installment loan">
                A new loan is needed to borrow again
              </td>
            </tr>
            <tr>
              <td data-label="">Interest</td>
              <td data-label="Revolving line of credit">
                Charged only on the amount drawn
              </td>
              <td data-label="Installment loan">
                Charged on the loan balance
              </td>
            </tr>
            <tr>
              <td data-label="">Repayment</td>
              <td data-label="Revolving line of credit">
                Repay and redraw any number of times
              </td>
              <td data-label="Installment loan">
                Fixed payments over a set period
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={REVOLVING_LINE_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software Company Financing Strategy: Start With Your Exit
          </Link>
        </li>
        <li>
          <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
            When Venture Capital Is the Wrong Choice for Vertical SaaS
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Laws for GovTech Vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
      </ul>

      <h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>
      <p>
        Lambda Capital is a permanent capital holding company. We take a patient
        approach and invest for the long term. GovTech contract funding is one
        of our lines of business.
      </p>
      <p>
        If you have questions about financing your software company,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
