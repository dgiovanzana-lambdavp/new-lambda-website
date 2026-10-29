import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  FINANCING_STRATEGY_FAQ,
  FINANCING_STRATEGY_HEADINGS,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_POST,
  VENTURE_DEBT_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  FINANCING_STRATEGY_HEADINGS.map((h) => [h.text, h.id]),
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

export default function FinancingStrategyPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Most software founders pick their financing first and discover their
          exit later. We think that order is backwards.
        </strong>
      </p>
      <p>
        A software company financing strategy should start with the exit you
        want, then pick the capital that fits it. Venture capital fits companies
        aiming for very large outcomes. Companies that plan to stay profitable,
        sell at a modest valuation, or never sell often fit other tools better:
        loans with bullet payments or amortizing loans repaid from cash flow,
        revolving credit for uneven months, receivables financing when a large
        customer pays slowly, revenue based financing, or preferred stock. For
        GovTech vendors waiting on government payments, the shape of your cash
        flow matters as much as the exit.
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice.
        </em>
      </p>

      <h2 id={H["Why your exit comes before your financing"]}>
        Why your exit comes before your financing
      </h2>
      <p>
        We ask every founder the same first question: what does the end look like
        for you? Selling in five years, selling to a strategic buyer, or running
        the company for decades are three very different plans, and each one
        points toward different capital.
      </p>

      <h2 id={H["When venture capital fits, and when it does not"]}>
        When venture capital fits, and when it does not
      </h2>
      <p>
        Venture capital is the tool most founders hear about first, and for some
        companies it is the right one. The bar is high, though: venture capital
        is built for companies aiming for very large outcomes.
      </p>
      <p>
        For a vertical software company that is profitable and growing steadily,
        that higher bar is worth weighing before raising. For a side by side look
        at venture debt and equity, see{" "}
        <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
          venture debt vs venture capital for GovTech
        </Link>
        .
      </p>

      <h2 id={H["The financing toolbelt: what each tool is"]}>
        The financing toolbelt: what each tool is
      </h2>
      <p>
        Here is how we think about the toolbelt, one tool at a time. Each gets
        its own post later in this series.
      </p>
      <p>
        <strong>Common stock.</strong> The ownership founders and employees
        hold. It is the most junior claim on the company, paid after debt and
        preferred stock.
      </p>
      <p>
        <strong>Nonconvertible preferred stock.</strong> A class of ownership
        that ranks senior to common stock and below debt. Being nonconvertible,
        it does not turn into common stock.
      </p>
      <p>
        <strong>Loans with bullet payments and amortizing loans.</strong> A lump
        sum borrowed up front. With bullet payments, the principal is repaid in
        one lump sum at maturity, while each payment on an amortizing loan
        covers both interest and principal, so the balance falls over time (
        <ExtLink href="https://pressbooks.pub/introductiontofinancialanalysis/chapter/11-20-loans-the-conventional-mortgage/">
          Touro University open textbook
        </ExtLink>
        ). The FDIC notes that amortizing loans are repaid from business cash
        flow on a fixed schedule, and that a common use is financing business
        acquisitions.
      </p>
      <p>
        <strong>Revolving line of credit.</strong> Credit you can draw, repay,
        and draw again. The Corporate Finance Institute describes it as most
        useful for operating purposes, especially for a
        business with sharp swings in its cash flow.
      </p>
      <p>
        <strong>Receivables factoring and financing.</strong> The ICAEW, a
        professional accounting body, explains: &quot;Factoring involves selling
        accounts receivable or unpaid customer invoices to a debt factoring
        provider&quot; (
        <ExtLink href="https://www.icaew.com/technical/corporate-finance/business-finance-guide/debt-finance/asset-based-finance">
          ICAEW
        </ExtLink>
        ). Receivables financing is different: the invoices serve as collateral
        for a loan and you keep control over collection. For federal contracts,
        see{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          the Assignment of Claims Act explained
        </Link>
        .
      </p>
      <p>
        <strong>Revenue based financing and royalties.</strong> Capital repaid
        as a share of revenue until an agreed multiple or cap is reached,
        according to{" "}
        <ExtLink href="https://drexel.edu/nowak-lab/publications/newsletters/2024/the-rise-of-revenue-based-financing/">
          Drexel University&apos;s Nowak Metro Finance Lab
        </ExtLink>
        . It can be structured as a loan or as equity the company buys back over
        time.
      </p>
      <p>
        <strong>Venture debt.</strong> Debt for venture backed companies,
        covered in our post on venture debt vs venture capital.
      </p>

      <h2 id={H["Match the tool to your cash flow shape"]}>
        Match the tool to your cash flow shape
      </h2>
      <p>
        Once the exit is clear, the next question we ask is what your cash flow
        actually looks like month to month. The tool should fit that shape.
      </p>
      <p>
        <strong>Predictable cash flow.</strong> Amortizing repayment works when
        you can forecast what comes in. The FDIC&apos;s examination manual
        describes these loans as repaid through business cash flow on a fixed
        amortization schedule, which can vary with the cash flow expected from
        the asset financed or the business itself. (
        <ExtLink href="https://www.fdic.gov/risk-management-manual-examination-policies/commercial-and-industrial-lending.pdf">
          regulator&apos;s examination manual
        </ExtLink>
        )
      </p>
      <p>
        <strong>Uneven months.</strong> A revolver is built for cash that rises
        and falls.
      </p>
      <p>
        <strong>A big customer that pays slowly.</strong> The accounting body
        cited above notes that factoring improves cash flow by getting invoices
        paid much sooner.
      </p>
      <p>
        <strong>Revenue that rises and falls.</strong> Revenue based financing
        ties each repayment to revenue rather than a fixed schedule.
      </p>

      <h2 id={H["Where government payment timing fits"]}>
        Where government payment timing fits
      </h2>
      <p>
        This is the section that matters most for GovTech founders we talk to.
      </p>
      <p>
        Getting paid faster on a signed contract is a separate decision from
        raising growth capital. For the rules on federal invoice timing, see{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . For ways to shorten the wait, see{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront SaaS payment
        </Link>{" "}
        and{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          implementation payment milestones
        </Link>
        .
      </p>

      <h2 id={H["Who gets paid first: the capital stack in one paragraph"]}>
        Who gets paid first: the capital stack in one paragraph
      </h2>
      <p>
        If you remember one thing from this post, we would make it this order.
        Debt is repaid first, then preferred stock, then common stock. Every
        tool in this series sits somewhere in that stack.
      </p>

      <h2 id={H["The Financing Toolbelt series"]}>
        The Financing Toolbelt series
      </h2>
      <ol>
        <li>Start With Your Exit (this post)</li>
        <li>When Venture Capital Is the Wrong Choice for Vertical SaaS</li>
        <li>How to Build a VC Target List by Fit, Not Prestige</li>
        <li>Bullet Loans vs Amortizing Loans for Software Companies</li>
        <li>Revolving Line of Credit for SaaS: Smoothing Lumpy Cash Flow</li>
        <li>
          Receivables Financing for GovTech: Getting Paid While Government Takes
          90+ Days
        </li>
        <li>
          Nonconvertible Preferred Stock: Growth Capital Without Giving Up
          Control
        </li>
        <li>
          Revenue Based Financing and Royalties for Bootstrapped B2B Software
        </li>
      </ol>

      <h2 id={H["What each tool is and when it is commonly used"]}>
        What each tool is and when it is commonly used
      </h2>
      <p>
        <em>Based on the sources cited; definitions only.</em>
      </p>
      <TableWrap
        caption="What each financing tool is and when it is commonly used"
        scrollable
      >
        <table>
          <caption>
            What each financing tool is and when it is commonly used
          </caption>
          <thead>
            <tr>
              <th>Tool</th>
              <th>What it is</th>
              <th>Commonly described for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Tool">Venture capital</td>
              <td data-label="What it is">
                Equity from funds that need large exits to reach their target
                returns
              </td>
              <td data-label="Commonly described for">
                Companies aiming for very large exits
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Common stock</td>
              <td data-label="What it is">
                The most junior claim; paid last
              </td>
              <td data-label="Commonly described for">
                Founders&apos; and employees&apos; ownership
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Nonconvertible preferred stock</td>
              <td data-label="What it is">
                Ownership senior to common, below debt; does not convert
              </td>
              <td data-label="Commonly described for">
                Capital that sits between debt and common
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Loan</td>
              <td data-label="What it is">
                Lump sum repaid on a fixed schedule, either in one bullet
                payment at maturity or amortized over time
              </td>
              <td data-label="Commonly described for">
                A capital need funded up front
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Amortizing repayment</td>
              <td data-label="What it is">
                Repaid from cash flow on a fixed schedule
              </td>
              <td data-label="Commonly described for">
                Predictable cash flow; fixed assets and acquisitions
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Revolving line of credit</td>
              <td data-label="What it is">Draw, repay, and draw again</td>
              <td data-label="Commonly described for">
                Operating needs and uneven cash flow
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Receivables factoring</td>
              <td data-label="What it is">
                Selling unpaid invoices to a factor
              </td>
              <td data-label="Commonly described for">
                Customers that pay slowly
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Receivables financing</td>
              <td data-label="What it is">
                A loan with invoices as collateral
              </td>
              <td data-label="Commonly described for">
                Customers that pay slowly
              </td>
            </tr>
            <tr>
              <td data-label="Tool">Revenue based financing</td>
              <td data-label="What it is">
                Repaid as a share of revenue until an agreed cap is reached
              </td>
              <td data-label="Commonly described for">
                Revenue that rises and falls
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={FINANCING_STRATEGY_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Laws for GovTech Vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
            Venture Debt vs Venture Capital for GovTech
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained
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
