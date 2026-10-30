import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  EARLY_PAYMENT_DISCOUNT_FAQ,
  EARLY_PAYMENT_DISCOUNT_HEADINGS,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  EARLY_PAYMENT_DISCOUNT_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function EarlyPaymentDiscountPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Our view: an early payment discount is financing you buy from your own
        customer, and you pay for it with revenue. Taking $10,000 off a $500,000
        invoice to get paid 20 days sooner costs about 36.7% a year. Use a
        discount for a one time, short gap when the agency can truly pay inside
        the window. If the wait repeats every cycle, match a financing tool to
        the receivable instead.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a GovTech CEO in this spot. The contract is signed. The software
        is live, and the invoice is accepted. Payroll is in two weeks, and the
        cash is still a month away. A small discount for faster payment looks
        like the easy fix.
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue. Their
          state, local, or federal customers often take 90 to 180 days to pay.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            An early payment discount trades revenue for speed. Price it like
            money before you offer it.
          </li>
          <li>
            On 2/10 net 30, you give up 2% to get paid 20 days early. That is
            about 36.7% a year.
          </li>
          <li>
            A federal agency will likely take almost any discount it can pay in
            time, so the choice sits with you.
          </li>
          <li>
            Use a discount for a one time, short gap. For repeat 90 to 180 day
            waits, match a financing tool to the receivable.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The problem: the contract is signed, the cash is not here"]}>
        The problem: the contract is signed, the cash is not here
      </h2>

      <p>
        Say this CEO has a $500,000 invoice on a federal contract. The work is
        delivered. The agency has accepted it. Under{" "}
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        , many federal invoices are due 30 days after a proper invoice or after
        acceptance, whichever is later. State and local buyers often take 90 to
        180 days.
      </p>

      <p>
        This squeeze is common well beyond GovTech. In a Federal Reserve survey
        of small employer firms,{" "}
        <em>
          &quot;More than half of firms cited paying operating expenses (56%) or
          uneven cash flows (51%) as challenges.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.fedsmallbusiness.org/reports/survey/2025/2025-report-on-employer-firms">
          Federal Reserve Banks, 2025 Report on Employer Firms
        </ExtLink>
        )
      </p>

      <p>
        So the CEO reaches for a discount. The likely reason: it is the simplest
        lever there is. It needs no third party and no new paperwork. It feels
        like a small price cut, not financing.
      </p>

      <h2 id={H["The example: $10,000 to get paid 20 days sooner"]}>
        The example: $10,000 to get paid 20 days sooner
      </h2>

      <p>
        Say the CEO offers terms of 2/10 net 30. The agency takes 2% off if it
        pays within 10 days. Otherwise, the full amount is due in 30 days. That
        is an early payment discount, also called a prompt payment discount. It
        is a price cut for paying inside a short window.
      </p>

      <p>
        On a $500,000 invoice, 2% is $10,000. The cash arrives 20 days sooner.
        Those two numbers do most of the work.
      </p>

      <h3>How $10,000 becomes about 36.7% a year</h3>

      <p>
        An annualized cost restates a fee as a yearly interest rate, so you can
        compare it with other ways to fund the same days. Here is the math in
        three steps:
      </p>

      <ol>
        <li>
          You give up $10,000 to receive $490,000 early. That is 2 divided by 98,
          or about 2.04%.
        </li>
        <li>
          You get the cash 20 days early. A 360 day year holds 18 periods of 20
          days.
        </li>
        <li>About 2.04% times 18 is about 36.7% a year.</li>
      </ol>

      <p>
        Our convention: we measure the discount on the cash you receive, over a
        360 day year. That matches the OpenStax textbook formula. With a 365 day
        year, the same terms come to about 37.2%.
      </p>

      <p>
        The OpenStax textbook makes the same point from the buyer&apos;s side. A
        buyer who skips 2/10 net 30 gives up what OpenStax calls an annualized{" "}
        <em>&quot;opportunity cost (36.73 percent)&quot;</em>. (
        <ExtLink href="https://openstax.org/books/principles-finance/pages/19-2-what-is-trade-credit">
          OpenStax Principles of Finance, 19.2
        </ExtLink>
        ) Flip it, and that is what the seller pays.
      </p>

      <p>
        The textbook also notes that trade credit is often treated as free
        financing. The discount is what puts a price on that time. (
        <ExtLink href="https://openstax.org/books/principles-finance/pages/19-2-what-is-trade-credit">
          OpenStax
        </ExtLink>
        )
      </p>

      <p>
        <em>
          What a discount costs per year (our math, 360 day year)
        </em>
      </p>

      <TableWrap caption="What a discount costs per year (our math, 360 day year)">
        <table>
          <caption>
            What a discount costs per year (our math, 360 day year)
          </caption>
          <thead>
            <tr>
              <th scope="col">Discount terms</th>
              <th scope="col">Cost per year</th>
              <th scope="col">Above the 4.00% bar?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Discount terms">0.5% in 10 days, net 30</td>
              <td data-label="Cost per year">about 9.0%</td>
              <td data-label="Above the 4.00% bar?">Yes</td>
            </tr>
            <tr>
              <td data-label="Discount terms">1% in 10 days, net 30</td>
              <td data-label="Cost per year">about 18.2%</td>
              <td data-label="Above the 4.00% bar?">Yes</td>
            </tr>
            <tr>
              <td data-label="Discount terms">2% in 10 days, net 30</td>
              <td data-label="Cost per year">about 36.7%</td>
              <td data-label="Above the 4.00% bar?">Yes</td>
            </tr>
            <tr>
              <td data-label="Discount terms">2% in 15 days, net 45</td>
              <td data-label="Cost per year">about 24.5%</td>
              <td data-label="Above the 4.00% bar?">Yes</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        The 4.00% bar is Treasury&apos;s Current Value of Funds Rate for 2026,
        explained below.
      </p>

      <h2 id={H["Choice one: free speed first"]}>
        Choice one: free speed first
      </h2>

      <p>
        A proper invoice has everything the contract and payment office require,
        so the payment clock can start. A clean invoice starts the clock. If an
        invoice is returned as improper, the due date runs from receipt of a
        proper one. (
        <ExtLink href="https://www.acquisition.gov/far/32.905">
          FAR 32.905
        </ExtLink>
        ,{" "}
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        )
      </p>

      <p>
        Small businesses on federal contracts may also get accelerated payment,
        which means paid before the normal due date. FAR 32.009-1 sets a goal for
        agencies other than the Department of Defense to pay{" "}
        <em>
          &quot;with a goal of 15 days after receipt of a proper invoice and all
          other required documentation&quot;
        </em>{" "}
        when the contract sets no specific payment date. (
        <ExtLink href="https://www.acquisition.gov/far/32.009-1">
          FAR 32.009-1
        </ExtLink>
        ) The full rules are in{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          Prompt Payment Act: what GovTech vendors can collect
        </Link>
        .
      </p>

      <p>
        Our view: if you qualify as a small business on a federal contract, check
        this path before you give up a cent.
      </p>

      <h2 id={H["Choice two: the discount, and how it works"]}>
        Choice two: the discount, and how it works
      </h2>

      <p>
        Treasury states it simply:{" "}
        <em>
          &quot;A vendor may offer the agency a discount if the agency pays
          within a specified shorter time.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fiscal.treasury.gov/payments-from-government/prompt-payment">
          Bureau of the Fiscal Service, Prompt Payment
        </ExtLink>
        )
      </p>

      <h3>In your proposal</h3>

      <p>
        The federal clause on discounts for prompt payment, FAR 52.232-8, says a
        discount in your offer is not weighed when the agency picks a winner.
        Once offered, though, it becomes part of the award, and the agency takes
        it whenever it pays inside the window. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-8">
          FAR 52.232-8
        </ExtLink>
        ) In plain words, a proposal discount does not help you win. It does bind
        you for the whole award.
      </p>

      <h3>On a single invoice</h3>

      <p>
        The same clause lets contractors put a discount on individual invoices
        after award instead. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-8">
          FAR 52.232-8
        </ExtLink>
        ) This is the flexible version, because you decide invoice by invoice.
      </p>

      <h3>When the clock starts and when cash lands</h3>

      <p>
        The discount period is the short window for paying at the lower price.
        Federally it runs from the date on your proper invoice, and the agency
        can take the discount only after acceptance. If the invoice has no date,
        the clock starts when the payment office receives it. (
        <ExtLink href="https://www.law.cornell.edu/cfr/text/5/1315.7">
          5 CFR 1315.7
        </ExtLink>
        )
      </p>

      <p>
        Expect the money near the end of the window, not on day one.{" "}
        <em>
          &quot;When a discount for prompt payment is taken, the designated
          payment office will make payment to the contractor as close as
          possible to, but not later than, the end of the discount period.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/32.906">
          FAR 32.906
        </ExtLink>
        )
      </p>

      <h2 id={H["The decision: price the discount like financing"]}>
        The decision: price the discount like financing
      </h2>

      <p>
        Our view: an early payment discount is financing you buy from your own
        customer. You repay it by giving up revenue, so price it like money
        before it goes on an invoice.
      </p>

      <ul>
        <li>Annualize the discount before you offer it.</li>
        <li>
          Compare it with your own other ways to fund the same days. We do not
          rank those options here.
        </li>
        <li>
          Offer it only if the payment office can actually pay inside the
          window.
        </li>
        <li>
          Know the scope. A proposal discount binds for the whole award; an
          invoice discount covers one invoice. (
          <ExtLink href="https://www.acquisition.gov/far/52.232-8">
            FAR 52.232-8
          </ExtLink>
          )
        </li>
      </ul>

      <h2 id={H["Why each party acts as it does"]}>
        Why each party acts as it does
      </h2>

      <h3>Why the agency will likely take it</h3>

      <p>
        Treasury&apos;s discount calculator gives agencies a simple test:{" "}
        <em>
          &quot;If the effective annual discount rate is larger than the current
          value of funds rate, accept the discount and pay early.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fiscal.treasury.gov/payments-from-government/prompt-payment/calculator">
          Bureau of the Fiscal Service, Formula and Calculator for Discounts
        </ExtLink>
        ) That rate is 4.00% for calendar year 2026. (
        <ExtLink href="https://fiscal.treasury.gov/payments-from-government/reports-statements/current-value-of-funds">
          Current Value of Funds Rate
        </ExtLink>
        )
      </p>

      <p>
        Every common discount in the table clears 4.00% by a wide margin. So a
        payment office will likely take it whenever it can process in time. The
        rule itself says an agency{" "}
        <em>&quot;may take the discount if economically justified&quot;</em>. (
        <ExtLink href="https://www.law.cornell.edu/cfr/text/5/1315.7">
          5 CFR 1315.7
        </ExtLink>
        ) That is why, in our view, the decision really sits with you.
      </p>

      <h3>Why discounts do not count in evaluation</h3>

      <p>
        The likely reason: it keeps price competition on the contract price, not
        on payment terms that may or may not be used.
      </p>

      <h3>Why state and local buyers differ</h3>

      <p>
        Each state and locality sets its own payment rules. Minnesota is one
        example:{" "}
        <em>
          &quot;State agencies must pay each valid vendor obligation so that the
          vendor receives payment within the vendor&apos;s early payment discount
          period.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.revisor.mn.gov/statutes/cite/16A.124">
          Minnesota Statutes 16A.124
        </ExtLink>
        ) Many buyers have no such rule, so check yours.
      </p>

      <p>
        When budget money is actually available matters too. See the{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          government fiscal year 2027 calendar for software vendors
        </Link>
        .
      </p>

      <h3>Why founders over offer</h3>

      <p>
        The likely reason: the discount looks like a small percentage of revenue.
        It gets judged against the invoice, not against the days of cash it buys.
      </p>

      <h2 id={H["Lesson: speed has a price, so buy only what you need"]}>
        Lesson: speed has a price, so buy only what you need
      </h2>

      <p>
        Back to our CEO with the $500,000 invoice. If this is a one time gap and
        the payment office can pay inside 10 days, $10,000 may be a fair price
        for making payroll. If every invoice waits like this one, the same 2%
        comes off every invoice, and the fix is a tool matched to the receivable.
      </p>

      <p>
        The same 2% can be a fair trade or money spent for nothing. It depends on
        the gap and the payment office.
      </p>

      <ul>
        <li>
          One time gap, and a payment office that can pay in 10 days: a discount
          can fit.
        </li>
        <li>
          A 90 to 180 day payment cycle: the short window will likely be missed,
          so the discount buys nothing. Fix the process or finance the
          receivable.
        </li>
        <li>
          A gap that repeats every invoice: a standing discount becomes a lasting
          price cut. Our view: treat a recurring gap as a working capital
          problem. See{" "}
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            working capital vs growth capital for GovTech software
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["Bridging the gap: use X if you have Y problem"]}>
        Bridging the gap: use X if you have Y problem
      </h2>

      <p>
        Each option fits one problem. We do not rank them by cost or risk.
      </p>

      <ul>
        <li>
          Use a clean, proper invoice and the small business accelerated payment
          path if your federal invoice is slow because of paperwork or
          processing. See{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
          .
        </li>
        <li>
          Use an early payment discount on a single invoice if you have a one
          time, short gap, the payment office can pay inside the window, and your
          margin can absorb the cut.
        </li>
        <li>
          Use milestone billing if a long implementation leaves you unpaid for
          months. See{" "}
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Getting paid during implementation
          </Link>
          .
        </li>
        <li>
          Use upfront annual billing, where the rules allow it, if you deliver a
          year of service before you are paid. See{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can government customers pay your SaaS subscription upfront?
          </Link>
          .
        </li>
        <li>
          Use an assignment of contract payments if a financing provider needs to
          be paid directly by the agency on a signed federal contract. See{" "}
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act explained
          </Link>
          .
        </li>
        <li>
          Use a revolving line of credit if the timing gap repeats as receivables
          turn. See{" "}
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
          .
        </li>
        <li>
          Use loans with bullet payments if the gap is one known stretch before a
          large expected payment. Principal is repaid at the end, when the
          receivable lands. See{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet loan vs amortizing loan
          </Link>
          .
        </li>
        <li>
          Use growth capital if the cash need is a multi year investment, not a
          payment timing gap. See{" "}
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            working capital vs growth capital for GovTech software
          </Link>
          .
        </li>
        <li>
          For how these fit a long term plan, see{" "}
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            software company financing strategy
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={EARLY_PAYMENT_DISCOUNT_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
        </li>
        <li>
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet loan vs amortizing loan
          </Link>
        </li>
        <li>
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            Government fiscal year 2027 calendar for software vendors
          </Link>
        </li>
      </ul>

      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

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
