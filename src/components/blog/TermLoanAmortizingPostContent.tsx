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
        The difference between a term loan and an amortizing loan comes down to
        how the principal is repaid. An amortizing loan pays principal down with
        each scheduled payment, so the balance falls over the life of the loan.
        A lump sum term loan keeps scheduled payments smaller, often interest
        only, and leaves most or all of the principal due at the end. That
        leftover balance creates refinance risk: the chance the borrower cannot
        replace the debt when it matures. Steady cash flow lines up naturally
        with installment repayment. A structure with a large payment at the end
        lines up with a large inflow expected at that time. If you have already
        ruled out venture capital, this is one of the next questions; see{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          when venture capital is the wrong choice for vertical SaaS
        </Link>
        .
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice. It describes loan structures; it is not borrowing advice.
        </em>
      </p>

      <h2 id={H['What "term loan" means, and why the word is confusing']}>
        What &quot;term loan&quot; means, and why the word is confusing
      </h2>
      <p>
        &quot;Term loan&quot; can mean two different things, so I want to define
        it up front. As I use the phrase, a term loan is a set amount borrowed
        for a set period and paid back with interest. That working label covers
        two very different ways of paying it back.
      </p>
      <p>So in this post I use two labels:</p>
      <p>
        <strong>Amortizing loan:</strong> a loan whose principal is repaid in
        installments over its life.
      </p>
      <p>
        <strong>Lump sum term loan:</strong> a loan whose principal is mostly or
        entirely repaid at the end, sometimes called a bullet or balloon loan.
      </p>

      <h2 id={H["How an amortizing loan works"]}>
        How an amortizing loan works
      </h2>
      <p>
        The amortizing structure is the one most founders picture when they
        think of a loan. The Corporate Finance Institute explains: &quot;When a
        loan is repaid in installments, it&apos;s typically referred to as an
        amortizing loan (or a reducing loan).&quot; (
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/amortization-schedule/">
          Corporate Finance Institute
        </ExtLink>
        ) In its example of an equal payment loan, the interest share of each
        payment is higher early on and lower later.
      </p>
      <p>
        Because every payment includes principal, the balance falls steadily. If
        the loan fully amortizes, nothing is left to repay at maturity, which is
        why the Office of the Comptroller of the Currency (OCC) says fully
        amortizing loans to sound borrowers generally have lower refinance risk
        than loans that are not fully amortizing. I cover refinance risk in the
        tradeoff section below.
      </p>

      <h2 id={H["How a lump sum term loan works"]}>
        How a lump sum term loan works
      </h2>
      <p>
        The other structure flips the timing. The Consumer Financial Protection
        Bureau explains the concept for mortgages: balloon loans &quot;are
        designed to have lower monthly payments that do not fully pay off the
        loan over the term, and then a large last payment, called the
        balloon.&quot; (
        <ExtLink href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-balloon-payment-when-is-one-allowed-en-104/">
          CFPB
        </ExtLink>
        )
      </p>
      <p>
        Some lump sum structures start with an interest only period. In its
        explanation of interest only mortgages, the CFPB notes that the amount
        owed does not go down with each payment, and that when the interest only
        period ends, the borrower may pay off the balance all at once, refinance
        if refinancing is available, or begin higher monthly payments. For how
        debt compares with equity more broadly, see{" "}
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

      <h2 id={H["How each structure lines up with cash flow"]}>
        How each structure lines up with cash flow
      </h2>
      <p>
        When I map these structures to a company, I start with the shape of its
        cash flow, not the size of the loan. This is a description of fit, not a
        recommendation.
      </p>
      <p>
        <strong>Steady, predictable cash flow.</strong> Installment repayment
        matches cash that arrives on a regular rhythm, because each payment
        comes due on the same rhythm.
      </p>
      <p>
        <strong>A large inflow expected later.</strong> A lump sum structure
        matches a business that expects a large payment around the time the
        principal comes due. The refinance risk above is the other side of that
        structure.
      </p>
      <p>
        <strong>Short gaps in working capital.</strong> That is usually a
        different tool. The{" "}
        <ExtLink href="https://corporatefinanceinstitute.com/resources/commercial-lending/revolving-credit-facility/">
          Corporate Finance Institute
        </ExtLink>{" "}
        describes a revolving credit facility as mostly useful for operating
        purposes, especially for a business with sharp swings in its cash flow.
        For the full set of tools, see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          series hub on software company financing strategy
        </Link>
        .
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

      <h2 id={H["Amortizing loan vs lump sum term loan"]}>
        Amortizing loan vs lump sum term loan
      </h2>
      <p>
        <em>A summary of the structures described above.</em>
      </p>
      <TableWrap
        caption="Amortizing loan vs lump sum term loan"
        scrollable
      >
        <table>
          <caption>Amortizing loan vs lump sum term loan</caption>
          <thead>
            <tr>
              <th></th>
              <th>Amortizing loan</th>
              <th>Lump sum term loan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">How principal is repaid</td>
              <td data-label="Amortizing loan">
                In installments over the life of the loan
              </td>
              <td data-label="Lump sum term loan">
                Mostly or entirely at the end
              </td>
            </tr>
            <tr>
              <td data-label="">Scheduled payments</td>
              <td data-label="Amortizing loan">Interest plus principal</td>
              <td data-label="Lump sum term loan">
                Smaller; often interest only at first
              </td>
            </tr>
            <tr>
              <td data-label="">Balance during the loan</td>
              <td data-label="Amortizing loan">Falls with each payment</td>
              <td data-label="Lump sum term loan">
                Stays high; does not fall during an interest only period
              </td>
            </tr>
            <tr>
              <td data-label="">Refinance risk</td>
              <td data-label="Amortizing loan">
                Generally lower when fully amortizing
              </td>
              <td data-label="Lump sum term loan">
                Higher, because principal remains at maturity
              </td>
            </tr>
            <tr>
              <td data-label="">Cash flow shape it lines up with</td>
              <td data-label="Amortizing loan">
                Steady, predictable cash flow
              </td>
              <td data-label="Lump sum term loan">
                A large inflow expected near maturity
              </td>
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
