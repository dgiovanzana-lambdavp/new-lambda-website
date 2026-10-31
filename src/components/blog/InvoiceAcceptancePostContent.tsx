import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CASH_FLOW_GAP_POST,
  EARLY_PAYMENT_DISCOUNT_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  IMPLEMENTATION_MILESTONES_POST,
  INVOICE_ACCEPTANCE_FAQ,
  INVOICE_ACCEPTANCE_HEADINGS,
  PROMPT_PAYMENT_POST,
  REVENUE_BASED_FINANCING_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  INVOICE_ACCEPTANCE_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function InvoiceAcceptancePostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A government invoice passes through several hands before it is paid. Some
        of the wait is yours, some sits in your contract, and some is set by the
        rules. Every day you remove frees cash in every billing cycle. The days
        that remain can be funded with a tool built for timing.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a GovTech CEO who expected a federal agency to pay in 30 days.
        The cash arrives about 76 days after the work starts. The CEO&apos;s
        first thought is to borrow against the wait.
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue that
          sell to state, local, or federal customers.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            A federal invoice is usually due 30 days after the later of a proper
            invoice or acceptance, so a late or returned invoice or slow
            acceptance starts that clock late.
          </li>
          <li>
            Fix the days you and your contract control, then fund the days that
            remain.
          </li>
          <li>
            Constructive acceptance on the 7th day counts only for interest. It
            does not make payment due sooner.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The problem: a 30 day promise that takes 76 days"]}>
        The problem: a 30 day promise that takes 76 days
      </h2>

      <p>
        Our CEO runs a $5M software company. This is an illustration, not a real
        company. The company bills a federal agency monthly for a services
        contract. Delivering that contract costs about $4,000 a day in cash.
      </p>

      <p>
        The CEO read that the government pays in 30 days. Yet cash lands about
        76 days after the work starts. At $4,000 a day, that is about $304,000
        tied up.
      </p>

      <p>
        The squeeze is common well beyond GovTech. In a Federal Reserve survey
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

      <h3>Why the CEO reaches for financing first</h3>

      <p>
        From the outside, the wait looks like one block of time. So the likely
        reason the CEO reaches for a loan first is simple. One block of time
        looks like one problem with one fix.
      </p>

      <p>
        Several of the steps sit inside the government. The likely reason
        founders finance the whole wait is that the delay looks fixed when part
        of it is not.
      </p>

      <p>
        It is a timing problem, not a growth problem. As our working capital
        guide says,{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing
          problem more often than a growth problem.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          Working capital vs growth capital for GovTech software
        </Link>
        )
      </p>

      <h3>Three choices</h3>

      <ol>
        <li>Finance the whole 76 days as they stand.</li>
        <li>Ask the agency to &quot;pay faster,&quot; with no specifics.</li>
        <li>
          Map every step from work to payment. Fix the steps the company or the
          contract can change. Finance only the days that remain.
        </li>
      </ol>

      <p>
        Our view: before you finance a payment delay, find out whose delay it
        is. Fix the days you and your contract control, then fund the days that
        remain with a tool built for timing, as a sound choice and not a
        fallback.
      </p>

      <h3>Why the other two choices fall short here</h3>

      <p>
        Financing all 76 days would fund the company&apos;s own process delays,
        cycle after cycle. Asking for speed with no specifics does not change
        what payment depends on: a proper invoice and a receiving report. (
        <ExtLink href="https://www.acquisition.gov/far/32.905">
          FAR 32.905
        </ExtLink>
        )
      </p>

      <h2 id={H["Map the clock, one handoff at a time"]}>
        Map the clock, one handoff at a time
      </h2>

      <p>
        A finance textbook notes that{" "}
        <em>&quot;The cash cycle is measured in days&quot;</em>, and that{" "}
        <em>
          &quot;Financial managers monitor and analyze each component of the cash
          conversion cycle.&quot;
        </em>{" "}
        (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax Principles of Finance 2e, 19.1
        </ExtLink>
        ) In plain words, break the wait into its parts before you act on it.
      </p>

      <p>Here are the handoffs on a federal invoice.</p>

      <h3>Your side: from work done to invoice sent</h3>

      <p>
        This is the time between the end of the billing period and the invoice
        leaving your office. It is fully yours. In our example, the invoice goes
        out about 10 days after the month closes.
      </p>

      <h3>The billing office: is the invoice proper?</h3>

      <p>
        The designated billing office is the government office named in the
        contract to receive your invoice. A proper invoice is one with every item
        the contract and billing office require, so the payment clock can start.
      </p>

      <p>
        The FAR lists those items. They include the contract number with order
        and line item numbers. They also include a description, quantity, unit
        and price of the services, and a payee name and address that match the
        contract. A contact for a defective invoice is on the list too. (
        <ExtLink href="https://www.acquisition.gov/far/32.905">
          FAR 32.905
        </ExtLink>
        )
      </p>

      <p>
        If the invoice is not proper, the billing office must return it within 7
        days, with the reasons. The clock then waits for the corrected invoice. (
        <ExtLink href="https://www.acquisition.gov/far/32.905">
          FAR 32.905
        </ExtLink>
        ) Our{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          Prompt Payment Act: what GovTech vendors can collect
        </Link>{" "}
        covers the full rule and late interest.
      </p>

      <p>
        The office must check each invoice against the contract&apos;s required
        items. (
        <ExtLink href="https://www.acquisition.gov/far/32.905">
          FAR 32.905
        </ExtLink>
        ) The likely reason a missing item sends the invoice back is that the
        office cannot fill it in for you.
      </p>

      <h3>Acceptance: the step that can set the clock</h3>

      <p>
        Acceptance is the agency&apos;s formal sign off that the work meets the
        contract. The typical due date is the later of two dates. One is the 30th
        day after the billing office receives a proper invoice. The other is the
        30th day after the government accepts the work. (
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        )
      </p>

      <p>
        So when acceptance comes after the invoice, each day of slower acceptance
        pushes the due date out a day.
      </p>

      <p>
        The program staff who accept the work likely have other duties. With no
        acceptance period named in the contract, they likely have no date to work
        to.
      </p>

      <h3>The 7 day rule that does not speed payment</h3>

      <p>
        Constructive acceptance is a rule that treats acceptance as happening on
        a set day. That day is the 7th day after you deliver or perform under the
        contract&apos;s terms. But it counts only when the government computes a
        late payment interest penalty. It does not apply when there is a
        disagreement over quantity, quality or compliance. (
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        )
      </p>

      <p>
        The same section says the rule does not compel officials to accept the
        work or make payment before they finish their own duties. In plain words,
        it can earn you interest. It does not move cash in sooner.
      </p>

      <h3>The receiving report and the payment office</h3>

      <p>
        A receiving report is the government document that confirms delivery and
        acceptance and authorizes payment. The designated payment office is the
        office that actually releases the money.
      </p>

      <p>
        Payment needs a receiving report or a similar government document. The
        receiving official should send it to the payment office by the 5th
        working day after acceptance, unless other arrangements were made. (
        <ExtLink href="https://www.acquisition.gov/far/32.905">
          FAR 32.905
        </ExtLink>
        ) That is a &quot;should,&quot; not a hard deadline, and it does not
        change the due date. Still, an invoice that is proper and accepted can
        wait on that paperwork.
      </p>

      <h3>State and local: steps before the first invoice</h3>

      <p>
        State and local buyers each set their own steps. Here is one city&apos;s
        example, from a vendor newsletter on human services contracts:{" "}
        <em>
          &quot;Purchase Orders (POs) will be activated once budgets are approved
          and once services for FY27 have begun, vendors can start submitting
          invoices.&quot;
        </em>{" "}
        (
        <ExtLink href="https://home4.nyc.gov/assets/mocs/downloads/About/about-mocs/news-notices/VendorNewsletter_202601.pdf">
          NYC Mayor&apos;s Office of Contract Services, Vendor Newsletter,
          January 2026
        </ExtLink>
        )
      </p>

      <p>
        At that buyer, no active purchase order means no invoice. As our{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          Government fiscal year 2027 calendar for software vendors
        </Link>{" "}
        puts it,{" "}
        <em>
          &quot;Your government customer&apos;s calendar decides when you get
          paid, not your invoice date.&quot;
        </em>
      </p>

      <h3>The map for our example</h3>

      <p>
        <em>
          Where the days go on one federal invoice (our math, $4,000 a day;
          illustration, not data)
        </em>
      </p>

      <TableWrap caption="Where the days go on one federal invoice (our math, $4,000 a day; illustration, not data)">
        <table>
          <caption>
            Where the days go on one federal invoice (our math, $4,000 a day;
            illustration, not data)
          </caption>
          <thead>
            <tr>
              <th scope="col">Step</th>
              <th scope="col">Who owns it</th>
              <th scope="col">Days before</th>
              <th scope="col">Days after fixes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Step">Work before the monthly bill</td>
              <td data-label="Who owns it">Billing cycle</td>
              <td data-label="Days before">15</td>
              <td data-label="Days after fixes">15</td>
            </tr>
            <tr>
              <td data-label="Step">Invoice sent</td>
              <td data-label="Who owns it">You</td>
              <td data-label="Days before">10</td>
              <td data-label="Days after fixes">2</td>
            </tr>
            <tr>
              <td data-label="Step">Acceptance</td>
              <td data-label="Who owns it">Contract and agency</td>
              <td data-label="Days before">21</td>
              <td data-label="Days after fixes">7</td>
            </tr>
            <tr>
              <td data-label="Step">Payment after acceptance</td>
              <td data-label="Who owns it">Rule (FAR 32.904)</td>
              <td data-label="Days before">30</td>
              <td data-label="Days after fixes">30</td>
            </tr>
            <tr>
              <td data-label="Step">Total</td>
              <td data-label="Who owns it"></td>
              <td data-label="Days before">76</td>
              <td data-label="Days after fixes">54</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Only the 30 day row rests on a rule. The other rows are illustrations.
      </p>

      <h2 id={H["Fix it: the days you can remove"]}>
        Fix it: the days you can remove
      </h2>

      <h3>Your days</h3>

      <ul>
        <li>
          Send the invoice on the first business day after the period closes.
        </li>
        <li>
          Build a checklist from the contract&apos;s invoice items, so no line
          item number is missing.
        </li>
      </ul>

      <p>
        In our example, one invoice came back for a missing line item number. Up
        to 7 days for the return, plus about 3 days to fix and resend, adds about
        10 days. At $4,000 a day, that is about $40,000 more tied up for that
        cycle.
      </p>

      <h3>Contract days</h3>

      <p>
        The contracting officer is the government official with authority over
        the contract&apos;s terms. At award, or in a modification, you can ask
        the contracting officer to name the accepting official. You can also ask
        that the contract state the acceptance period. Ask who files the
        receiving report, and when.
      </p>

      <p>
        This is a contract conversation with your customer. It is about process,
        not price.
      </p>

      <h3>Small business days</h3>

      <p>
        On a federal contract, agencies may pay a small business as quickly as
        possible once acceptance and the proper documents are in. (
        <ExtLink href="https://www.law.cornell.edu/cfr/text/5/1315.5">
          5 CFR 1315.5
        </ExtLink>
        ) The FAR also tells the contracting officer to give special attention to
        a small business&apos;s contract financing need. (
        <ExtLink href="https://www.acquisition.gov/far/32.104">
          FAR 32.104
        </ExtLink>
        ) In plain words, asking what the contract allows is reasonable.
      </p>

      <h3>Billing structure</h3>

      <ul>
        <li>
          Bill at milestones on long implementations. See{" "}
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Getting paid during implementation
          </Link>
          .
        </li>
        <li>
          Bill annual subscriptions upfront where the rules allow it. See{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can government customers pay your SaaS subscription upfront?
          </Link>
          .
        </li>
        <li>
          Price any early payment discount before you offer it. See{" "}
          <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
            Early payment discounts on government contracts
          </Link>
          .
        </li>
      </ul>

      <p>
        Every lever is collected in one place in How to get paid faster on
        government contracts.
      </p>

      <h3>What the fixes are worth</h3>

      <p>
        In our example, the invoice now goes out in 2 days instead of 10.
        Acceptance takes 7 days instead of 21. That cuts the cycle from 76 days
        to 54 days.
      </p>

      <p>
        The math: 22 days times $4,000 is about $88,000 freed. That cash stays
        freed for as long as the faster cycle holds.
      </p>

      <h2 id={H["Finance it: the days that remain"]}>
        Finance it: the days that remain
      </h2>

      <p>
        The 30 day window after acceptance is set by rule. (
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        ) The billing cycle and the shortened invoice and acceptance steps still
        take time too. In our example, the 54 days that remain, at $4,000 a day,
        are about $216,000 that still needs funding while you deliver.
      </p>

      <p>
        This need comes back every billing cycle. Use a tool built for timing if
        you have a wait like this that repeats. As our revolver guide says,{" "}
        <em>
          &quot;Most cash crunches in software are timing problems, not profit
          problems. A revolving line of credit is built for timing.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
          Revolving line of credit for SaaS
        </Link>
        )
      </p>

      <p>
        A revolving line of credit, or revolver, is a credit line you draw, repay
        and draw again as receivables turn.
      </p>

      <p>
        To size the gap across all your contracts, see{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        .
      </p>

      <h2
        id={
          H[
            "Lesson: own your days, shape the contract's days, fund the days that remain"
          ]
        }
      >
        Lesson: own your days, shape the contract&apos;s days, fund the days that
        remain
      </h2>

      <p>Back to our CEO. The 76 days were never one block.</p>

      <p>
        So the CEO fixes the invoice and gets a named acceptor into the contract.
        That cuts 22 days and frees about $88,000. Then the CEO funds the 54 days
        that remain, 30 of them set by rule, about $216,000, with a tool built
        for timing.
      </p>

      <p>
        Some days on a government invoice belong to you. Some belong to the
        contract. Some belong to the rules.
      </p>

      <h2 id={H["Bridging what remains: use X if you have Y problem"]}>
        Bridging what remains: use X if you have Y problem
      </h2>

      <p>
        Each option fits one problem. We do not rank them by cost or risk.
      </p>

      <ul>
        <li>
          Use invoice checklists and same week billing if days are lost before
          the billing office has a proper invoice. See{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
          .
        </li>
        <li>
          Use a named acceptor and a stated acceptance period if acceptance is
          the slow step. This is a contract conversation with the agency.
        </li>
        <li>
          Use a revolving line of credit if the remaining wait repeats every
          billing cycle. See{" "}
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
          .
        </li>
        <li>
          Use loans with bullet payments if the wait is one known stretch before
          a large expected payment, such as a final acceptance milestone. These
          are loans where the principal is repaid in one payment at the end. See{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet loan vs amortizing loan
          </Link>
          .
        </li>
        <li>
          Use assignment of claims if you finance the payments due on a signed
          federal contract with a bank or other financing institution, which the
          agency then pays directly. See{" "}
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act explained
          </Link>
          .
        </li>
        <li>
          Use revenue based financing if repayment should flex with collections.
          See{" "}
          <Link href={`/blog/${REVENUE_BASED_FINANCING_POST.slug}`}>
            Revenue based financing for government contractors
          </Link>
          .
        </li>
        <li>
          Use longer dated capital, planned with your whole strategy, if the
          remaining days add up to a base that grows with revenue. See{" "}
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software company financing strategy
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={INVOICE_ACCEPTANCE_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Getting paid during implementation
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
