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
  REVENUE_BASED_FINANCING_FAQ,
  REVENUE_BASED_FINANCING_HEADINGS,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
  VENTURE_DEBT_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  REVENUE_BASED_FINANCING_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function RevenueBasedFinancingPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Revenue based financing does not make an agency pay any sooner. It can
          still fit the right government technology (GovTech) company.
        </strong>
      </p>
      <p>
        Revenue based financing (RBF) gives a company cash now and takes
        repayment as a share of revenue until a fixed total is repaid. For a
        GovTech software company, it fits a short, clear need when collected
        revenue is steady. It fits poorly when the real problem is a slow
        government receivable.
      </p>
      <p>
        <em>
          Who this is for: CEOs of GovTech software companies with $1M to $10M in
          revenue whose state, local, or federal customers can take 90 to 180 days
          to pay.
        </em>
      </p>
      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <h2 id={H["What revenue based financing and royalty financing are"]}>
        What revenue based financing and royalty financing are
      </h2>
      <p>
        The{" "}
        <ExtLink href="https://www.federalreserve.gov/publications/2025-march-consumer-community-context.htm">
          Federal Reserve
        </ExtLink>{" "}
        groups merchant cash advances (MCAs) and similar products under the
        revenue based label, and describes them as products that are
        &quot;repaid as a percentage of sales or revenue rather than in fixed
        payment amounts.&quot;
      </p>
      <p>
        The two are not the same thing, though.{" "}
        <ExtLink href="https://drexel.edu/nowak-lab/publications/newsletters/2024/the-rise-of-revenue-based-financing/">
          Drexel University&apos;s Nowak Metro Finance Lab
        </ExtLink>{" "}
        explains that RBF can be set up as a loan or as an equity investment the
        company buys back as revenue grows, and that either way the company
        repays a share of its revenue until it reaches an agreed multiple or cap
        of the amount advanced. The lab contrasts this with MCAs, which draw
        repayments daily or weekly over less than a year, while RBF is usually
        repaid monthly. It also lists a state royalty fund among the early public
        RBF programs, which is one reason the names royalty financing and revenue
        based financing often travel together.
      </p>
      <p>
        For where RBF sits among other options, see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          series hub on software company financing strategy
        </Link>
        .
      </p>

      <h2 id={H["Why government receipts are lumpy"]}>
        Why government receipts are lumpy
      </h2>
      <p>
        Government money arrives on the government&apos;s schedule.
      </p>
      <p>
        Budgets add a second layer. Under the{" "}
        <ExtLink href="https://www.law.cornell.edu/uscode/text/31/1341">
          Antideficiency Act
        </ExtLink>
        , federal officials cannot commit the government to pay money before it
        has been appropriated, unless a law authorizes it. For state, local, and
        education (SLED) customers, check each customer&apos;s fiscal year and
        payment terms before forecasting when receipts will arrive.
      </p>
      <p>
        For more on payment timing, see{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          what vendors can collect when government pays late
        </Link>{" "}
        and{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          whether government customers can pay a subscription upfront
        </Link>
        .
      </p>

      <h2 id={H["When a revenue share fits a GovTech software company"]}>
        When a revenue share fits a GovTech software company
      </h2>
      <p>
        Repayment comes out of revenue as it is collected, so the payment moves
        with the business.{" "}
        <ExtLink href="https://drexel.edu/nowak-lab/publications/newsletters/2024/the-rise-of-revenue-based-financing/">
          The Drexel lab
        </ExtLink>{" "}
        lists &quot;Seasonal businesses with fluctuating cash flows&quot; among
        the firms that can benefit from RBF. A government quarter with few
        receipts is the GovTech version of a slow season.
      </p>
      <p>
        The same structure means RBF needs revenue already coming in. Before
        applying, check that the company already collects recurring revenue
        rather than waiting on a first award, and that the need is short and
        specific, not open ended. For owners weighing outside equity instead, see{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          whether venture capital is right for a vertical software company
        </Link>
        .
      </p>

      <h2
        id={
          H["Where a revenue share stops helping: slow government payments"]
        }
      >
        Where a revenue share stops helping: slow government payments
      </h2>
      <p>
        A revenue share pays out of revenue after it is collected. It is not tied
        to any single invoice, so it does nothing to speed up an agency payment.
        Invoice factoring works differently: the{" "}
        <ExtLink href="https://www.federalreserve.gov/publications/2025-march-consumer-community-context.htm">
          Federal Reserve
        </ExtLink>{" "}
        describes it as a product that &quot;involves the sale of unpaid invoices
        in exchange for a &apos;factor rate&apos; or fee.&quot;
      </p>
      <p>
        If the problem is the wait on a signed contract, the tools are different.
        See{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          government contract financing for software companies
        </Link>
        ,{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          the Assignment of Claims Act explained
        </Link>
        , and{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          milestones and holdbacks during implementation
        </Link>
        .
      </p>

      <h2 id={H["What you can ask an agency for instead"]}>
        What you can ask an agency for instead
      </h2>
      <p>
        The billing structure on a government contract is set before award, and
        that is when to raise it.
      </p>

      <h2 id={H["When another tool fits better"]}>
        When another tool fits better
      </h2>
      <p>
        Use a revenue share if collections are steady and the need is short. If
        the need is tied to a signed contract or a known future inflow,{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>contract financing</Link> or a
        loan with a bullet payment fits better.
      </p>
      <p>
        Every payment comes off the top. Before signing, model how much of each
        month&apos;s collections would go to repayment and how much cash would be
        left for payroll and vendors.
      </p>
      <p>
        Cost can also be hard to see.{" "}
        <ExtLink href="https://www.federalreserve.gov/publications/2025-march-consumer-community-context.htm">
          The same central bank report
        </ExtLink>{" "}
        notes that factoring offers, like MCAs, typically do not state their cost
        as an interest rate. Before signing, compare the total repaid with what
        the same money would cost as an annual rate on a loan.
      </p>

      <h2 id={H["How it compares with other sources"]}>
        How it compares with other sources
      </h2>
      <p>
        <em>
          A summary of the sources and posts cited above; each agreement differs.
        </em>
      </p>
      <TableWrap
        caption="Revenue based financing or royalty vs invoice factoring vs bullet loan vs equity"
        scrollable
      >
        <table>
          <caption>
            Revenue based financing or royalty vs invoice factoring vs bullet
            loan vs equity
          </caption>
          <thead>
            <tr>
              <th></th>
              <th>Revenue based financing or royalty</th>
              <th>Invoice factoring</th>
              <th>Bullet loan</th>
              <th>Equity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">How it is repaid</td>
              <td data-label="Revenue based financing or royalty">
                Share of revenue until an agreed multiple or cap
              </td>
              <td data-label="Invoice factoring">
                Provider buys unpaid invoices for a factor rate or fee
              </td>
              <td data-label="Bullet loan">
                Principal at the end of the term, usually with interest only
                payments until then
              </td>
              <td data-label="Equity">Not repaid; ownership is sold</td>
            </tr>
            <tr>
              <td data-label="">Tied to a specific government invoice</td>
              <td data-label="Revenue based financing or royalty">No</td>
              <td data-label="Invoice factoring">Yes</td>
              <td data-label="Bullet loan">No</td>
              <td data-label="Equity">No</td>
            </tr>
            <tr>
              <td data-label="">Payment in a slow quarter</td>
              <td data-label="Revenue based financing or royalty">
                Falls with revenue
              </td>
              <td data-label="Invoice factoring">
                No scheduled payment; the provider keeps its fee when the agency
                pays the invoice
              </td>
              <td data-label="Bullet loan">Interest only until maturity</td>
              <td data-label="Equity">None</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        For the loan side, see{" "}
        <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
          bullet loans vs amortizing loans for software companies
        </Link>
        . For how borrowing compares with selling equity, see{" "}
        <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
          venture debt vs venture capital
        </Link>
        . For financing tied to a signed contract, see the contract financing
        post linked above.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={REVENUE_BASED_FINANCING_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software Company Financing Strategy: Start With Your Exit
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained for GovTech Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet Loan vs Amortizing Loan for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Getting Paid During Implementation: Milestones and Holdbacks on
            Government Software Contracts
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
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
