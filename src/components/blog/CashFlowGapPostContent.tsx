import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_FAQ,
  CASH_FLOW_GAP_HEADINGS,
  EARLY_PAYMENT_DISCOUNT_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  REVENUE_BASED_FINANCING_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  CASH_FLOW_GAP_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function CashFlowGapPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Your cash flow gap is a number, not a feeling. Multiply your daily cash
        cost by the days from paying for work to collecting for it. If you grow
        about 20% a year, part of that number never goes away and gets bigger
        every year. Size your capital to the peak, not the average, and fund the
        permanent part and the swings with different tools.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a GovTech CEO with the best bookings the company has ever had.
        Two new state contracts just closed. Yet the bank balance is thinner
        every quarter, and payroll runs every two weeks.
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
            Your gap in dollars is daily cash cost times the days from paying for
            work to collecting for it.
          </li>
          <li>
            Part of the gap is a permanent base that grows with revenue. The rest
            is a peak that comes and goes.
          </li>
          <li>Shrink the days first. Then size to the peak, not the average.</li>
          <li>
            Fund the base and the swings with tools that fit each shape.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The problem: record bookings, a thinner bank balance"]}>
        The problem: record bookings, a thinner bank balance
      </h2>

      <p>
        Our CEO runs a $6M software company growing about 20% a year. This is an
        illustration, not a real company. The team is paid every two weeks. The
        states pay about 120 days after each invoice.
      </p>

      <p>
        The CEO knows this is not a profit problem. The contracts are good, and
        the work is delivered. The question is harder: how much cash does the
        gap really need, and what kind?
      </p>

      <h3>Why growth eats cash</h3>

      <p>
        A finance textbook puts it plainly:{" "}
        <em>
          &quot;Growing companies, even if they are extremely profitable, need
          additional working capital as they ramp up operations by acquiring raw
          materials, component parts, supplies, or other forms of inventory;
          hiring temporary or additional employees; and taking on new
          projects.&quot;
        </em>{" "}
        (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax Principles of Finance 2e, 19.1
        </ExtLink>
        )
      </p>

      <p>
        Working capital is the cash a company needs to run its daily operations.
        For a software company, the &quot;inventory&quot; is your people and
        your hosting. You pay for both before you can bill.
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

      <h3>Why the CEO waits</h3>

      <p>
        Profit looks strong, and bookings look stronger. So the likely reason the
        CEO waits is simple. The gap reads as a temporary squeeze, not as a
        number that grows with the company.
      </p>

      <p>
        Growth deepens the squeeze. Every new award adds cost days before it
        adds collected cash. The team ramps, the hosting runs, and the first
        invoice is weeks away. Success raises the base before it raises the bank
        balance.
      </p>

      <p>
        When CEOs do act, they can undersize. One probable reason: they size to
        this quarter&apos;s balance. That misses next year&apos;s base, and it
        misses the peak.
      </p>

      <p>
        The CEO has three choices. Patch this quarter as a one time crunch. Raise
        one round sized to today&apos;s average gap. Or measure the gap, split
        it into a permanent base and a temporary peak, and fund each layer with
        a tool that fits its shape.
      </p>

      <p>
        Our view: take the third path. Measure the gap in dollars, treat the
        growing base as a capital structure decision, and size to the peak, not
        the average. The rest of this post shows how.
      </p>

      <h2 id={H["First, confirm it is a timing gap"]}>
        First, confirm it is a timing gap
      </h2>

      <p>
        If the cash need comes from delivered work on signed contracts waiting
        to be paid, it is a timing gap. If it comes from a multi year investment,
        read{" "}
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          Working capital vs growth capital for GovTech software
        </Link>{" "}
        first.
      </p>

      <h2 id={H["Step one: put a dollar figure on the gap"]}>
        Step one: put a dollar figure on the gap
      </h2>

      <p>
        The cash flow gap is the cash you have paid out for delivered work that
        the customer has not paid you for yet. Here is the formula in words:
      </p>

      <p>
        <strong>
          Daily cash cost to deliver × days from cost to collection = your gap.
        </strong>
      </p>

      <p>
        Daily cash cost means payroll, hosting and subcontractors, spread over
        each day of delivery. Days from cost to collection is how long it takes
        to get that cash back.
      </p>

      <h3>The days have three parts</h3>

      <p>
        Textbooks call this span the cash conversion cycle.{" "}
        <em>&quot;The cash cycle is measured in days&quot;</em>, and{" "}
        <em>
          &quot;Financial managers monitor and analyze each component of the cash
          conversion cycle.&quot;
        </em>{" "}
        (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax, 19.1
        </ExtLink>
        )
      </p>

      <p>For a software company, the components are:</p>

      <ul>
        <li>Days of work before you can bill.</li>
        <li>Days from invoice to acceptance.</li>
        <li>Days from acceptance to payment.</li>
      </ul>

      <h3>The federal part of the clock</h3>

      <p>
        On a typical federal invoice, the due date is the later of two dates. One
        is the 30th day after the billing office receives a proper invoice. The
        other is the 30th day after the government accepts the work. (
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        ) A proper invoice has everything the contract and payment office
        require, so the payment clock can start.
      </p>

      <p>
        State and local buyers each set their own timing. Our example uses a
        state buyer that pays about 120 days after the invoice. That figure is
        an illustration, not a typical or legal one. Budget calendars move those
        dates too, as our{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          Government fiscal year 2027 calendar for software vendors
        </Link>{" "}
        explains.
      </p>

      <h3>The worked example</h3>

      <p>
        Our CEO spends about $13,000 a day to deliver. Invoices go out at month
        end, about 15 days after the average cost. The states pay about 120 days
        after that. So the days from cost to collection are about 135.
      </p>

      <p>
        The math: $13,000 times 135 days is about $1,755,000 tied up. On a
        federal contract paid about 30 days after a proper invoice, the same
        company would wait about 45 days. That gap is about $585,000.
      </p>

      <p>
        <em>
          How payment timing sets the gap (our math, $13,000 a day; illustration,
          not data)
        </em>
      </p>

      <TableWrap caption="How payment timing sets the gap (our math, $13,000 a day; illustration, not data)">
        <table>
          <caption>
            How payment timing sets the gap (our math, $13,000 a day;
            illustration, not data)
          </caption>
          <thead>
            <tr>
              <th scope="col">Days from cost to collection</th>
              <th scope="col">Example buyer</th>
              <th scope="col">Cash tied up</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Days from cost to collection">45</td>
              <td data-label="Example buyer">
                Federal, pays 30 days after a proper invoice
              </td>
              <td data-label="Cash tied up">about $585,000</td>
            </tr>
            <tr>
              <td data-label="Days from cost to collection">90</td>
              <td data-label="Example buyer">Pays 75 days after the invoice</td>
              <td data-label="Cash tied up">about $1,170,000</td>
            </tr>
            <tr>
              <td data-label="Days from cost to collection">135</td>
              <td data-label="Example buyer">
                Pays 120 days after the invoice (our example)
              </td>
              <td data-label="Cash tied up">about $1,755,000</td>
            </tr>
            <tr>
              <td data-label="Days from cost to collection">180</td>
              <td data-label="Example buyer">Pays 165 days after the invoice</td>
              <td data-label="Cash tied up">about $2,340,000</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Each row adds about 15 days of work before the month end invoice. Only
        the federal row rests on a rule (FAR 32.904). The other rows are
        illustrations.
      </p>

      <h2 id={H["Step two: split the gap into a base and a peak"]}>
        Step two: split the gap into a base and a peak
      </h2>

      <p>
        The gap is not one number. The textbook says{" "}
        <em>
          &quot;working capital can be thought of as having a permanent base that
          is always needed and a total working capital amount that increases when
          activity levels (i.e., production and sales volume) are higher&quot;
        </em>
        . (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax, 19.1
        </ExtLink>
        )
      </p>

      <ul>
        <li>
          <strong>The permanent base</strong> is the gap on your steady book of
          contracts. It never goes away while you keep delivering.
        </li>
        <li>
          <strong>The temporary peak</strong> is the extra gap on top of the
          base. Think of a new award ramp, a fiscal year end slowdown, or a long
          implementation before the first milestone payment.
        </li>
      </ul>

      <p>
        The same textbook notes that the permanent base may need to be financed
        with longer dated sources of capital. (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax, 19.1
        </ExtLink>
        )
      </p>

      <h3>Growth moves the base every year</h3>

      <p>
        Now grow our CEO&apos;s company 20%. Daily cash cost rises from $13,000
        to about $15,600. Payment terms do not change at all.
      </p>

      <p>
        The base rises from about $1,755,000 to about $2,106,000 in one year.
        That $351,000 is not a crunch. It is part of the cost of growing. As
        OpenStax puts it,{" "}
        <em>
          &quot;Whenever additional resources are needed, working capital is also
          needed.&quot;
        </em>{" "}
        (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax, 19.1
        </ExtLink>
        )
      </p>

      <h3>The peak sits on top</h3>

      <p>
        Say the same year brings a new award ramp and a slow fiscal year end.
        Collection stretches to 180 days. At $15,600 a day, the total gap reaches
        about $2,808,000.
      </p>

      <p>
        The temporary layer above the base is about $702,000. It comes, and then
        it goes.
      </p>

      <h2 id={H["Step three: shrink the gap before you fund it"]}>
        Step three: shrink the gap before you fund it
      </h2>

      <p>
        Every day you cut from the cycle is a day you do not need to fund. These
        levers are agency facing, and each has its own guide.
      </p>

      <ul>
        <li>
          Bill on time with a proper invoice. Every day of billing delay adds a
          day of cost. See{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
          .
        </li>
        <li>
          Ask about accelerated payment. On a federal contract, agencies may pay
          a small business as quickly as possible once acceptance and the proper
          documents reach the payment office, before the due date. (
          <ExtLink href="https://www.law.cornell.edu/cfr/text/5/1315.5">
            5 CFR 1315.5
          </ExtLink>
          )
        </li>
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

      <p>
        Use these levers if days are lost before or after the invoice. In our
        example, each day saved frees about $13,000. Even 30 days saved would
        leave about $1,365,000 to fund.
      </p>

      <h3>Why the government pays on its own clock</h3>

      <p>
        On a federal contract, the payment clock is tied to paperwork and
        acceptance. The due date runs from the later of two events: the billing
        office receiving a proper invoice, or the government accepting the work.
        (
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        ) So a late invoice, an incomplete invoice or a slow acceptance can move
        the due date.
      </p>

      <h3>Why the government still cares about your cash</h3>

      <p>
        Defense rules expect a contractor to sustain enough cash flow to perform
        the contract. When a Defense contracting officer doubts it, the officer
        should require a cash flow forecast for the contract. (
        <ExtLink href="https://www.acquisition.gov/dfars/232.072-3-cash-flow-forecasts.">
          DFARS 232.072-3
        </ExtLink>
        ) This applies to Defense contracts, not every agency.
      </p>

      <p>
        The FAR treats prudent contract financing as a useful tool that can
        speed up the performance of essential contracts. It limits government
        financing to what is actually needed for prompt and efficient
        performance. When the contractor is a small business, the contracting
        officer must give special attention to its contract financing need. (
        <ExtLink href="https://www.acquisition.gov/far/32.104">
          FAR 32.104
        </ExtLink>
        )
      </p>

      <p>
        In plain words, ask your contracting officer what financing the contract
        allows. That conversation is with your customer, and it is a fair one to
        have.
      </p>

      <h2 id={H["Step four: how much to raise"]}>
        Step four: how much to raise
      </h2>

      <p>
        A raise sized to today&apos;s gap can run out at the first peak. In our
        example, the gap is about $1,755,000 today, while next year&apos;s peak
        reaches about $2,808,000. Looking a year ahead, to the base at next
        year&apos;s revenue plus the expected peak, gives these figures.
      </p>

      <ul>
        <li>Base next year: about $2.1M.</li>
        <li>Temporary layer: about $0.7M.</li>
        <li>Total need: about $2.8M.</li>
      </ul>

      <h2 id={H["Lesson: fund the floor and the swings differently"]}>
        Lesson: fund the floor and the swings differently
      </h2>

      <p>
        Back to our CEO. The gap was never one number. It has a floor of about
        $1.76M that grows with the company, and a peak that comes and goes.
      </p>

      <p>
        So the CEO stops patching quarter by quarter. The plan covers about
        $2.1M of base for next year with longer dated capital, and a timing tool
        sized to the roughly $0.7M peak. Then the CEO goes back to shrinking the
        135 days.
      </p>

      <p>
        Use longer dated capital, chosen with your whole capital stack in mind,
        if you have a growing base that never goes away. OpenStax notes that the
        permanent base may need to be financed with longer dated sources of
        capital. (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax, 19.1
        </ExtLink>
        ) As our financing strategy guide says,{" "}
        <em>
          &quot;For GovTech vendors waiting on government payments, the shape of
          your cash flow matters as much as the exit.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          Software company financing strategy
        </Link>
        )
      </p>

      <p>
        Use a tool built for timing if you have swings that come and go. As our
        revolver guide puts it,{" "}
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

      <h2 id={H["Bridging the gap: use X if you have Y problem"]}>
        Bridging the gap: use X if you have Y problem
      </h2>

      <p>
        Each option fits one problem. We do not rank them by cost or risk.
      </p>

      <ul>
        <li>
          Use billing fixes and proper invoices if days are lost before the
          government&apos;s clock even starts. See{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
          .
        </li>
        <li>
          Use a revolving line of credit if the gap swings up and down every
          billing cycle. See{" "}
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
          .
        </li>
        <li>
          Use loans with bullet payments if the peak is one known stretch before
          a large expected payment, such as a ramp before an acceptance
          milestone. See{" "}
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
          Use longer dated capital, chosen with your whole capital stack in mind,
          if the permanent base grows with revenue every year. See{" "}
          <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
            Capital stack seniority explained
          </Link>{" "}
          and{" "}
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software company financing strategy
          </Link>
          .
        </li>
        <li>
          Use growth capital if the need is a multi year investment, not a
          payment gap. See{" "}
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={CASH_FLOW_GAP_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
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
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software company financing strategy
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
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
