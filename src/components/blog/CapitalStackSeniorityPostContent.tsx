import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_FAQ,
  CAPITAL_STACK_SENIORITY_HEADINGS,
  FINANCING_STRATEGY_POST,
  GOVTECH_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  CAPITAL_STACK_SENIORITY_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function CapitalStackSeniorityPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          The price a buyer pays for your government technology (GovTech)
          company and the amount you take home are two different numbers. The
          capital stack decides the difference.
        </strong>
      </p>
      <p>
        Capital stack seniority is the order in which each source of capital is
        repaid. At a sale, debts and deal costs come out first, then preferred
        stock, then common stock. For a GovTech software company, seniority also
        decides which lender has first claim on government receivables. Each
        layer fits a different problem, and knowing the order helps you see how
        they fit together.
      </p>
      <p>
        <em>
          Who this is for: CEOs of GovTech software companies with $1M to $10M in
          revenue whose state, local, or federal customers can take 90 to 180
          days to pay.
        </em>
      </p>
      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <h2 id={H["What the capital stack is"]}>What the capital stack is</h2>
      <p>
        The capital stack is every source of money in a company, listed in the
        order each one is repaid. A standard corporate finance textbook,{" "}
        <ExtLink href="https://openstax.org/books/principles-finance/pages/17-6-alternative-sources-of-funds">
          OpenStax Principles of Finance
        </ExtLink>
        , puts the middle of that order plainly: &quot;In the order of
        claimants, preferred shareholders stand in line between bondholders and
        common shareholders.&quot;
      </p>
      <p>
        The same textbook notes that lenders are paid interest before preferred
        shareholders receive dividends, and that if a company goes through
        bankruptcy the same order applies: lenders first, then preferred
        stockholders, then common stockholders at the end of the line. Seniority
        is simply that order. It describes who is paid from what, and when.
      </p>
      <p>
        For the full menu of financing options and how each one connects to your
        exit, see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>{" "}
        guide.
      </p>

      <h2 id={H["The order of payment when a company is sold"]}>
        The order of payment when a company is sold
      </h2>
      <p>
        A sale is where the order becomes concrete.{" "}
        <ExtLink href="https://www.glencoyne.com/guides/exit-planning-acquisition-ipo">
          Glencoyne
        </ExtLink>
        , a startup finance firm, describes the first step: &quot;Before a
        single dollar reaches a shareholder, the company&apos;s debts and
        transaction costs are paid directly from the enterprise value.&quot;
      </p>
      <p>
        After debts and deal costs, shareholders are paid in their own order.
        Preferred stockholders often have the right to receive their investment
        back before common stockholders get any residual value. In a non
        participating structure, preferred shareholders typically receive the
        greater of their liquidation preference or what they would have received
        by converting their preferred shares to common stock, so the preference
        is not always the amount they take.
      </p>
      <p>
        That is why the price a buyer pays and the amount founders receive are
        two different numbers. Every layer above common stock is settled first,
        in order.
      </p>

      <h2 id={H["Seniority among lenders: liens on government receivables"]}>
        Seniority among lenders: liens on government receivables
      </h2>
      <p>
        Seniority also applies between lenders. A{" "}
        <ExtLink href="https://iclg.com/practice-areas/lending-and-secured-finance-laws-and-regulations/15-subordination-in-us-operating-company-capital-structures-a-primer/">
          law firm&apos;s primer on subordination
        </ExtLink>{" "}
        in United States operating companies puts it this way: &quot;Until this
        most senior group is repaid in full, proceeds cannot be used to repay
        more junior lenders.&quot;
      </p>
      <p>
        For secured lenders, the starting order comes from the Uniform
        Commercial Code (UCC), the state law that governs liens on business
        assets such as receivables. The same primer explains that lien
        subordination is a contract between two or more secured lenders, and
        that this contract can override the lien order the UCC would otherwise
        set. Lenders can agree on who comes first on which assets.
      </p>
      <p>
        Federal contracts add one more piece. Under the Federal Acquisition
        Regulation (FAR),{" "}
        <ExtLink href="https://www.acquisition.gov/far/32.802">
          section 32.802
        </ExtLink>{" "}
        allows a contractor to assign payments on a federal contract to a bank,
        trust company, or other financing institution when all of the
        regulation&apos;s conditions are met. The{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          Assignment of Claims Act explainer
        </Link>{" "}
        walks through how that works.
      </p>
      <p>
        Before you finance a slow government receivable, check whether an
        existing lender already holds a lien on all of your assets. If one does,
        that receivable may already be pledged.
      </p>

      <h2 id={H["Which layer fits which problem"]}>
        Which layer fits which problem
      </h2>
      <p>
        Each layer of the stack is the right fit for a specific problem.
        Seniority describes the order of payment, not which layer is better.
      </p>
      <ul>
        <li>
          <strong>
            Use receivables or contract financing if your problem is a signed
            government contract that pays in 90 to 180 days.
          </strong>{" "}
          It is tied to the receivable itself, and on federal contracts the
          assignment rules above apply. See{" "}
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            government contract financing for software companies
          </Link>
          .
        </li>
        <li>
          <strong>
            Use a bullet loan if your problem is a cash need now and you expect
            a sale or a big cash flow event later.
          </strong>{" "}
          The principal is repaid at the end. The{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            bullet loan vs amortizing loan guide
          </Link>{" "}
          covers how it works.
        </li>
        <li>
          <strong>
            Use an amortizing loan if your problem is funding growth while your
            collections are steady and recurring.
          </strong>{" "}
          Steady collections make a fixed monthly payment easier to plan around.
          The same guide covers when it fits.
        </li>
        <li>
          <strong>
            Use preferred stock if your problem is needing capital without fixed
            loan payments.
          </strong>{" "}
          The open textbook{" "}
          <ExtLink href="https://touro.pressbooks.pub/introductiontofinancialanalysis/chapter/2-6-interest-paid-on-bonds-and-dividends-paid-on-stock/">
            Introduction to Financial Analysis
          </ExtLink>{" "}
          explains that an unpaid preferred dividend is not treated as a default
          the way it would be with a loan, because preferred stock is an
          ownership interest rather than a liability. It also notes that most
          preferred shares are cumulative, so unpaid preferred dividends must be
          paid before common shareholders receive any dividends, and that
          preferred shares rarely carry voting rights.
        </li>
        <li>
          <strong>
            Use venture equity if your problem is funding a bet on a very large
            exit.
          </strong>{" "}
          See{" "}
          <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
            the signals that venture capital fits
          </Link>
          .
        </li>
        <li>
          <strong>
            Use the agency&apos;s billing structure if your problem is the
            payment schedule itself.
          </strong>{" "}
          See{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            upfront payment for government software
          </Link>
          ,{" "}
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            implementation milestones and holdbacks
          </Link>{" "}
          and{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            the Prompt Payment Act
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["How the layers compare"]}>How the layers compare</h2>
      <TableWrap
        caption="Capital stack layers compared by order, fit, and receivable tie"
        scrollable
      >
        <table>
          <caption>
            Capital stack layers compared by order, fit, and receivable tie
          </caption>
          <thead>
            <tr>
              <th>Layer</th>
              <th>Place in the order</th>
              <th>Fits this problem</th>
              <th>Tied to a specific government receivable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Layer">Receivables or contract financing</td>
              <td data-label="Place in the order">
                Secured by the receivables it finances
              </td>
              <td data-label="Fits this problem">
                Signed contract, slow agency payment
              </td>
              <td data-label="Tied to a specific government receivable">
                Yes
              </td>
            </tr>
            <tr>
              <td data-label="Layer">Bullet loan</td>
              <td data-label="Place in the order">
                Debt, repaid before any shareholder
              </td>
              <td data-label="Fits this problem">
                Cash now, sale or big cash flow event later
              </td>
              <td data-label="Tied to a specific government receivable">No</td>
            </tr>
            <tr>
              <td data-label="Layer">Amortizing loan</td>
              <td data-label="Place in the order">
                Debt, repaid before any shareholder
              </td>
              <td data-label="Fits this problem">
                Steady, recurring collections
              </td>
              <td data-label="Tied to a specific government receivable">No</td>
            </tr>
            <tr>
              <td data-label="Layer">Preferred stock</td>
              <td data-label="Place in the order">
                After debt, before common
              </td>
              <td data-label="Fits this problem">
                Capital without fixed loan payments; dividends paid before
                common
              </td>
              <td data-label="Tied to a specific government receivable">No</td>
            </tr>
            <tr>
              <td data-label="Layer">Common equity</td>
              <td data-label="Place in the order">Last in the order</td>
              <td data-label="Fits this problem">
                Funding a bet on a very large exit
              </td>
              <td data-label="Tied to a specific government receivable">No</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        <em>
          The order shown is the general order of payment. Contracts between
          lenders can change the order among lenders.
        </em>
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={CAPITAL_STACK_SENIORITY_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software Company Financing Strategy: Start With Your Exit
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained for GovTech Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet Loan vs Amortizing Loan for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: What GovTech Vendors Can Collect When Government
            Pays Late
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
