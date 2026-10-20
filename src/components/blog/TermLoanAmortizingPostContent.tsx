import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  FINANCING_STRATEGY_POST,
  GOVTECH_POST,
  PROMPT_PAYMENT_POST,
  TERM_LOAN_AMORTIZING_FAQ,
  TERM_LOAN_AMORTIZING_HEADINGS,
  VC_WRONG_CHOICE_POST,
  VENTURE_DEBT_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  TERM_LOAN_AMORTIZING_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function TermLoanAmortizingPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Two loans for the same amount can put very different pressure on your
          cash, depending on when the principal comes due.
        </strong>
      </p>
      <p>
        When should a software company use a bullet loan, and when should it use
        an amortizing loan? I start with the shape of the company&apos;s cash
        flow. An amortizing loan pays principal down with each scheduled
        payment, so it fits cash that arrives on a steady, recurring rhythm. A
        bullet loan keeps scheduled payments smaller, usually interest only, and
        leaves the principal due at the end, so it fits a company that expects a
        large inflow near maturity or plans to refinance. The price of those
        smaller payments is refinance risk: the chance the borrower cannot
        replace the debt when it matures. If you have already ruled out venture
        capital, this is one of the next questions; see{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          when venture capital is the wrong choice for vertical SaaS
        </Link>
        .
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice, and not individual borrowing advice. It describes how each
          structure fits different cash flow patterns.
        </em>
      </p>
      <h2 id={H["Where term loans fit"]}>Where term loans fit</h2>
      <p>
        Both structures are term loans. Haynes Boone, a law firm, notes that a
        term loan may require fixed payments over its term, known as
        amortization, or full repayment in one bullet payment at the end. (
        <ExtLink href="https://www.haynesboone.com/news/alerts/fund-finance-insights-term-tranche-components-in-subscription-secured-facilities.pdf">
          Haynes Boone
        </ExtLink>
        ) The difference is when the principal comes back.
      </p>
      <h2
        id={H["When to use a bullet loan and when to use an amortizing loan"]}
      >
        When to use a bullet loan and when to use an amortizing loan
      </h2>
      <p>
        When I map these structures to a company, I start with the shape of its
        cash flow, not the size of the loan.
      </p>
      <p>
        <strong>Use an amortizing loan when cash comes in steadily.</strong>{" "}
        Recurring revenue that arrives on a regular rhythm lines up with
        installment repayment, because each payment comes due on the same
        rhythm. Every payment includes principal, so the balance falls, and the{" "}
        <ExtLink href="https://www.occ.gov/news-issuances/bulletins/2024/bulletin-2024-29.html">
          Office of the Comptroller of the Currency (OCC)
        </ExtLink>{" "}
        says fully amortizing loans to sound borrowers generally have lower
        refinance risk than loans that are not fully amortizing.
      </p>
      <p>
        <strong>
          Use a bullet loan when a large inflow is expected near maturity.
        </strong>{" "}
        A bullet loan keeps payments smaller, usually interest only, and leaves
        the principal due at the end of the term. That lines up with a business
        that expects a large payment around the time the principal comes due, or
        one that plans to refinance then. The{" "}
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/bullet-loan/">
          Corporate Finance Institute (CFI)
        </ExtLink>{" "}
        notes that bullet loans are refinanced quite often when the final
        payment comes due. If the inflow you have in mind is an exit, I cover
        exit planning in the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          series hub on software company financing strategy
        </Link>
        .
      </p>
      <p>
        <strong>
          Name the refinance risk before you choose a bullet loan.
        </strong>{" "}
        A planned refinance depends on the rates and terms available at
        maturity. The OCC says refinance risk primarily affects loans with
        principal balances remaining at maturity, and that it increases when
        interest rates rise. I cover it in more detail in the tradeoff section
        below.
      </p>
      <p>
        <strong>
          If your customers are government agencies, map when the cash arrives.
        </strong>{" "}
        Government contractors often deliver the work first and wait 30, 60, or
        90 days to be paid, and growth can widen the gap between costs and cash,
        as I cover below. Scheduled loan payments come due on the loan&apos;s
        calendar regardless of when an agency pays.
      </p>
      <p>
        <strong>
          Short gaps in working capital call for a different tool.
        </strong>{" "}
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/revolving-credit-facility/">
          CFI
        </ExtLink>{" "}
        describes a revolving credit facility as mostly useful for operating
        purposes, especially for a business with sharp swings in its cash flow.
      </p>
      <h2 id={H["How an amortizing loan works"]}>
        How an amortizing loan works
      </h2>
      <p>
        The amortizing structure is the one most founders picture when they
        think of a loan. CFI explains: &quot;When a loan is repaid in
        installments, it&apos;s typically referred to as an amortizing loan (or
        a reducing loan).&quot; (
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/amortization-schedule/">
          Corporate Finance Institute
        </ExtLink>
        ) In its example of an equal payment loan, the interest share of each
        payment is higher early on and lower later.
      </p>
      <p>
        Because every payment includes principal, the balance falls steadily. If
        the loan fully amortizes, nothing is left to repay at maturity.
      </p>
      <h2 id={H["How a bullet loan works"]}>How a bullet loan works</h2>
      <p>
        The other structure flips the timing. CFI defines it: &quot;A bullet
        loan is a type of loan in which the principal that is borrowed is paid
        back at the end of the loan term.&quot; (
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/bullet-loan/">
          CFI
        </ExtLink>
        ) Until then, the scheduled payments usually cover only interest, and in
        some cases the interest is added to the balance and paid at the end as
        well.
      </p>
      <h2 id={H["How a balloon loan works"]}>How a balloon loan works</h2>
      <p>
        A balloon loan is the partial version: its scheduled payments pay down
        only part of the principal, leaving a large final payment. The Consumer
        Financial Protection Bureau explains the concept for mortgages: balloon
        loans &quot;are designed to have lower monthly payments that do not
        fully pay off the loan over the term, and then a large last payment,
        called the balloon.&quot; (
        <ExtLink href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-balloon-payment-when-is-one-allowed-en-104/">
          CFPB
        </ExtLink>
        ){" "}
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/balloon-payment/">
          CFI
        </ExtLink>{" "}
        adds that a fully amortized loan is a special case of a balloon loan
        where the balloon payment is zero. The word is used loosely, and some
        sources also call the final payment on a bullet loan a balloon payment.
      </p>
      <p>
        Some loans start with an interest only period. In its explanation of
        interest only mortgages, the CFPB notes that the amount owed does not go
        down with each payment, and that when the interest only period ends, the
        borrower may pay off the balance all at once, refinance if refinancing
        is available, or begin higher monthly payments. For how debt compares
        with equity more broadly, see{" "}
        <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
          venture debt vs venture capital for GovTech
        </Link>
        .
      </p>
      <h2 id={H["The tradeoff: lower payments now, a bigger obligation later"]}>
        The tradeoff: lower payments now, a bigger obligation later
      </h2>
      <p>
        This is the part of the comparison I would want every CEO to understand
        before anything else. The OCC defines it in a bulletin: &quot;Refinance
        risk is the risk that borrowers will not be able to replace existing
        debt at a future date under reasonable terms and prevailing market
        conditions.&quot; (
        <ExtLink href="https://www.occ.gov/news-issuances/bulletins/2024/bulletin-2024-29.html">
          OCC
        </ExtLink>
        )
      </p>
      <p>
        The same bulletin adds that refinance risk primarily affects loans with
        principal balances remaining at maturity, and it names interest only
        loans among the types most affected.
      </p>
      <h2 id={H["What slow government payment means for repayment"]}>
        What slow government payment means for repayment
      </h2>
      <p>
        For GovTech founders, the timing of customer payments is where repayment
        structure gets real. Amerifusion Bookkeeping puts the situation plainly:
        &quot;you deliver the work first, then wait 30, 60, or 90 days for the
        government to pay&quot; (
        <ExtLink href="https://amerifusionbookkeeping.com/cash-flow-government-contractors/">
          Amerifusion Bookkeeping
        </ExtLink>
        ).
      </p>
      <p>
        Growth adds to the strain.{" "}
        <ExtLink href="https://www.cjeffersoncpa.com/govcon-cash-flow-problems/">
          C. Jefferson CPA
        </ExtLink>
        , an accounting firm, writes that government contractors hire staff and
        incur costs before they are paid, so while revenue grows, cash lags
        behind.
      </p>
      <p>
        Shortening the wait on a signed contract is a separate decision from
        choosing a loan structure. For more, see{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          government contract financing for software companies
        </Link>
        ,{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          the Assignment of Claims Act explained
        </Link>
        , and{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        .
      </p>
      <h2 id={H["Bullet loan vs amortizing loan at a glance"]}>
        Bullet loan vs amortizing loan at a glance
      </h2>
      <p>
        <em>
          A summary of the structures described above. A balloon loan falls
          between the two columns.
        </em>
      </p>
      <TableWrap caption="Bullet loan vs amortizing loan" scrollable>
        <table>
          <caption>Bullet loan vs amortizing loan</caption>
          <thead>
            <tr>
              <th></th>
              <th>Bullet loan</th>
              <th>Amortizing loan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">How principal is repaid</td>
              <td data-label="Bullet loan">All at the end of the term</td>
              <td data-label="Amortizing loan">
                In installments over the life of the loan
              </td>
            </tr>
            <tr>
              <td data-label="">Scheduled payments</td>
              <td data-label="Bullet loan">Smaller; usually interest only</td>
              <td data-label="Amortizing loan">Interest plus principal</td>
            </tr>
            <tr>
              <td data-label="">Balance during the loan</td>
              <td data-label="Bullet loan">Does not fall before maturity</td>
              <td data-label="Amortizing loan">Falls with each payment</td>
            </tr>
            <tr>
              <td data-label="">Refinance risk</td>
              <td data-label="Bullet loan">
                Higher, because the full principal remains at maturity
              </td>
              <td data-label="Amortizing loan">
                Generally lower when fully amortizing
              </td>
            </tr>
            <tr>
              <td data-label="">When it fits</td>
              <td data-label="Bullet loan">
                A large inflow expected near maturity, or a planned refinance
              </td>
              <td data-label="Amortizing loan">Steady, recurring cash flow</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={TERM_LOAN_AMORTIZING_FAQ} />
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
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Laws for GovTech Vendors
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
