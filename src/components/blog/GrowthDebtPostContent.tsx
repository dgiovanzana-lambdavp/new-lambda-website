import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  GOVTECH_POST,
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_POST,
  IMPLEMENTATION_MILESTONES_POST,
  VENTURE_DEBT_POST,
  GROWTH_DEBT_FAQ,
  GROWTH_DEBT_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GROWTH_DEBT_HEADINGS.map((h) => [h.text, h.id]),
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

export default function GrowthDebtPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          The right amount of debt is not the most a lender will give you. It is
          the amount your slowest paying agency cannot break.
        </strong>
      </p>
      <p>
        I get this question right after founders decide they would rather borrow
        than raise. Lenders that finance software companies usually size growth
        debt off recurring revenue, not profits, and the amount moves with the
        quality of that revenue: retention, customer concentration, contract
        length, and gross margin. Any specific multiple you hear is one
        lender&apos;s offer, not a market rule. For a GovTech company, large
        agency customers and slow government payments can shrink the number and
        make cash covenants the real constraint.
      </p>
      <p>
        This is the second post in a series on growth capital. The first
        compared{" "}
        <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
          venture debt and venture capital for GovTech
        </Link>
        .
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice.
        </em>
      </p>

      <h2
        id={
          H[
            "How lenders size growth debt: multiples of recurring revenue, not EBITDA"
          ]
        }
      >
        How lenders size growth debt: multiples of recurring revenue, not EBITDA
      </h2>
      <p>
        Start with the line most founders skip: your recurring revenue, not your
        profit, sets the size of the loan. Underridge describes the mechanics
        plainly: &quot;Recurring revenue loans are typically sized as a multiple
        of ARR or recurring revenue, with the multiple influenced by gross
        retention, growth, gross margin, customer concentration and the path to
        positive cash flow.&quot; (
        <ExtLink href="https://www.underridge.com/library/deferred-revenue-and-saas-metrics">
          Underridge
        </ExtLink>
        )
      </p>
      <p>
        Why revenue and not earnings? Growing software companies spend ahead of
        revenue, so EBITDA is often low or negative even when the customer base
        is valuable. That is exactly the gap these loans were built to fill, and
        the better your growth and retention, the larger the loan you can
        expect.
      </p>
      <p>
        The multiple itself is negotiated deal by deal. I would treat any number
        quoted before a lender has seen your customer data as a starting point,
        not a promise.
      </p>

      <h2 id={H["Why gross margin and services revenue matter"]}>
        Why gross margin and services revenue matter
      </h2>
      <p>
        Not all revenue counts the same in a lender&apos;s eyes, and services
        revenue counts least. Maxio&apos;s guide on evaluating debt puts it
        simply: &quot;The lower your gross margin, the lower your ARR debt
        ceiling should be.&quot; (
        <ExtLink href="https://www.maxio.com/blog/evaluating-debt-options-for-saas-companies">
          Maxio
        </ExtLink>
        )
      </p>
      <p>
        That matters for GovTech. Implementation work and hosting pass through
        costs pull margin down, and one time implementation fees are not
        recurring revenue at all. If your services revenue is large, see how to{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          get paid during implementation
        </Link>{" "}
        before you size a loan against it.
      </p>

      <h2 id={H["What lenders underwrite: retention, concentration, contract term"]}>
        What lenders underwrite: retention, concentration, contract term
      </h2>
      <p>
        Your strongest asset in a lender meeting is how rarely your customers
        leave, and you have to prove it on paper. Inflection CFO describes what
        lenders actually do with that: &quot;Lenders build renewal risk models.
        They ask for detailed customer contract schedules showing maturity
        dates, termination rights, and expansion potential.&quot; (
        <ExtLink href="https://inflectioncfo.co/blog/venture-debt-revenue-concentration-the-customer-risk-trap-lenders-wont-tell-you/">
          Inflection CFO
        </ExtLink>
        )
      </p>
      <p>
        Gross retention is the number I would lead with, because it shows how
        much revenue survives if new sales stop. Concentration is the number to
        get ahead of. A single large state agency can make your revenue look
        concentrated even when the relationship is decades old, so bring the
        renewal history that proves it is stable.
      </p>
      <p>
        Bring the positives with you: multiyear contracts, your renewal history,
        and your gross retention by year.
      </p>

      <h2 id={H["Government contract clauses lenders will ask about"]}>
        Government contract clauses lenders will ask about
      </h2>
      <p>
        Government contracts come with exit clauses that commercial contracts do
        not, and a lender will want to know which of yours carry them.
        JurisState explains that a non appropriation exit often limits what a
        contractor can recover, while a termination for convenience generally
        pays for work performed plus a reasonable profit, and that lenders view
        non appropriation clauses as political risk that can raise interest
        rates (
        <ExtLink href="https://jurisstate.blog/non-appropriation-clause-government-contracts">
          JurisState
        </ExtLink>
        ).
      </p>
      <p>
        My advice: map every contract by clause, funding source, and renewal
        date before the first lender call. It turns a vague worry into a
        schedule a lender can underwrite.
      </p>

      <h2 id={H["Covenants: the strings attached to growth debt"]}>
        Covenants: the strings attached to growth debt
      </h2>
      <p>
        The covenant I worry about most for GovTech founders is the minimum cash
        floor, because government payment timing is outside your control.
        Underridge describes the usual package: &quot;Covenants commonly include
        minimum liquidity, minimum recurring revenue or retention, and a
        scheduled conversion to leverage and coverage covenants once the company
        reaches profitability.&quot; (
        <ExtLink href="https://www.underridge.com/library/deferred-revenue-and-saas-metrics">
          Underridge
        </ExtLink>
        )
      </p>
      <p>
        The cash floor bites hardest early, while the business is still
        investing ahead of revenue. With receivables that can run for months,
        one slow agency can push your balance toward the floor while the
        business is fundamentally healthy. Three things I would negotiate:
      </p>
      <ol>
        <li>
          <strong>A trailing measurement.</strong> Test the covenant on an
          average balance over a rolling quarter, not on a single day.
        </li>
        <li>
          <strong>A cure period,</strong> so one late agency payment is not an
          immediate default.
        </li>
        <li>
          <strong>Carve outs and step downs.</strong> Ask for exceptions for one
          time events and for covenants that loosen as you hit milestones.
        </li>
      </ol>
      <p>
        Read the rest of the agreement too: cash sweeps and balloon payments can
        matter as much as the headline covenant.
      </p>
      <p>
        Shortening the payment wait helps too: see{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>{" "}
        and{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          government contract financing for software companies
        </Link>
        .
      </p>

      <h2
        id={
          H[
            "Term loan vs revenue based financing vs venture debt: which sizing model fits"
          ]
        }
      >
        Term loan vs revenue based financing vs venture debt: which sizing model
        fits
      </h2>
      <p>
        I would pick the structure that matches how your cash actually arrives.
        FinHelp puts the tradeoff simply: &quot;Term loans provide predictable
        monthly obligations. RBF payments vary with revenue, easing strain in
        slow months.&quot; (
        <ExtLink href="https://finhelp.io/glossary/term-loans-vs-revenue-based-financing-which-fits-your-business/">
          FinHelp
        </ExtLink>
        )
      </p>
      <p>
        Revenue based financing usually closes faster with fewer covenants, and
        you pay more for that flexibility. Classic venture debt is built for
        companies with VC backing, so for a bootstrapped GovTech company it is
        usually the wrong comparison.
      </p>

      <h2 id={H["A simple way to estimate your own number"]}>
        A simple way to estimate your own number
      </h2>
      <p>
        This is the worksheet I would run before talking to any lender. It uses
        no outside figures; plug in the terms you are actually quoted.
      </p>
      <ol>
        <li>
          <strong>Start with recurring revenue only.</strong> Leave out
          implementation and other one time fees.
        </li>
        <li>
          <strong>Discount concentration.</strong> Mark down any customer large
          enough that a lender would treat it as concentrated.
        </li>
        <li>
          <strong>Apply the multiple you are quoted</strong> to what is left.
        </li>
        <li>
          <strong>Model debt service and every covenant</strong> against a
          downside case and your slowest government payment cycle.
        </li>
        <li>
          <strong>Borrow only what you can justify</strong> with a clear return
          on the money.
        </li>
      </ol>
      <p>
        Upfront annual billing improves your cash position and covenant
        headroom; see whether{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          government customers can pay your SaaS subscription upfront
        </Link>
        .
      </p>

      <h2 id={H["Growth debt structures compared"]}>
        Growth debt structures compared
      </h2>
      <p>
        <em>Typical structures; terms vary by lender and deal.</em>
      </p>

      <TableWrap caption="Growth debt structures compared" scrollable>
        <table className="blog-table blog-table--options">
          <caption>Growth debt structures compared</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Revenue based financing</th>
              <th scope="col">Recurring revenue term loan</th>
              <th scope="col">Venture debt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Row">What drives the size</td>
              <td data-label="Revenue based financing">
                Recent revenue and gross margins
              </td>
              <td data-label="Recurring revenue term loan">
                Multiple of ARR, driven by retention, growth, margin, and
                concentration
              </td>
              <td data-label="Venture debt">Usually alongside VC backing</td>
            </tr>
            <tr>
              <td data-label="Row">Repayment</td>
              <td data-label="Revenue based financing">
                Percentage of revenue until a repayment cap
              </td>
              <td data-label="Recurring revenue term loan">
                Scheduled installments
              </td>
              <td data-label="Venture debt">
                Fixed schedule, often after an interest only period
              </td>
            </tr>
            <tr>
              <td data-label="Row">Typical covenants</td>
              <td data-label="Revenue based financing">Often fewer</td>
              <td data-label="Recurring revenue term loan">
                Minimum liquidity, minimum recurring revenue or retention
              </td>
              <td data-label="Venture debt">
                Liquidity covenants and material adverse change clauses
              </td>
            </tr>
            <tr>
              <td data-label="Row">Fits a bootstrapped GovTech company?</td>
              <td data-label="Revenue based financing">Yes, at higher cost</td>
              <td data-label="Recurring revenue term loan">
                If retention and margins are strong
              </td>
              <td data-label="Venture debt">Usually needs VC backing</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={GROWTH_DEBT_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
            Venture Debt vs Venture Capital for GovTech
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Laws for GovTech Vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can Government Customers Pay Your SaaS Subscription Upfront?
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Milestones and Holdbacks on Government Software Contracts
          </Link>
        </li>
      </ul>

      <h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>
      <p>
        Lambda Capital is a permanent capital holding company. We take a patient
        approach and invest for the long term. GovTech contract funding is one
        of our businesses.
      </p>
      <p>
        If you are working out how much debt your company can carry,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
