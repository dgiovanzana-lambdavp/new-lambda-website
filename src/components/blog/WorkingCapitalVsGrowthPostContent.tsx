import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  COMMON_STOCK_FINANCING_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  REVENUE_BASED_FINANCING_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
  WORKING_CAPITAL_VS_GROWTH_FAQ,
  WORKING_CAPITAL_VS_GROWTH_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  WORKING_CAPITAL_VS_GROWTH_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function WorkingCapitalVsGrowthPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Signed government contracts that pay slowly create a timing problem more
        often than a growth problem. Working capital funds the gap between
        delivery and collection. Growth capital funds a lasting expansion.
        Diagnose the problem first, then pick the tool that matches it. Our
        view: do not sell ownership to bridge a receivable you have already
        earned.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Awards land. Payroll runs every two weeks. Cash arrives weeks or months
        later. The operating account looks empty while the backlog looks strong.
        Many CEOs reach for a large equity raise. That may be the wrong tool.
      </p>

      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue. Their
          state, local, or federal customers can take 90 to 180 days to pay.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Working capital is cash for day to day operations. Growth capital
            funds a multi year expansion.
          </li>
          <li>
            Slow pay on a signed contract is usually a timing problem, not proof
            you need a growth round.
          </li>
          <li>
            Our view: match the tool to the cash flow shape. Fund the receivable
            cycle with timing tools. Fund lasting expansion with growth tools.
          </li>
        </ul>
      </blockquote>

      <h2
        id={
          H["The problem: a signed contract and an empty operating account"]
        }
      >
        The problem: a signed contract and an empty operating account
      </h2>

      <p>
        In September, we spoke with a GovTech company that had a bunch of signed
        three year government contracts. About $300,000 of those deals were
        renewing in January, and the company needed about $250,000 to get through
        the end of the year.
      </p>

      <p>
        A receivable is money a customer owes you for work already delivered.
        Cash conversion is the wait from spending cash on delivery to collecting
        cash from the customer. In government work, that wait can last for
        months.
      </p>

      <p>
        The Virginia Department of Small Business and Supplier Diversity puts the
        squeeze plainly.{" "}
        <em>
          &quot;This is one reason a business can have strong sales and still
          feel short on cash.&quot;
        </em>{" "}
        (
        <ExtLink href="https://sbsd.virginia.gov/5-questions-to-ask-before-you-start-growing-your-small-business/">
          Virginia SBSD
        </ExtLink>
        )
      </p>

      <p>
        Federal payment rules help explain the lag. Under{" "}
        <ExtLink href="https://www.acquisition.gov/far/32.904">
          FAR 32.904
        </ExtLink>
        , many invoices are due on the later of two dates. One is the 30th day
        after the billing office gets a proper invoice. The other is the 30th day
        after the government accepts the work. An improper invoice can be
        returned. The due date then runs from receipt of a proper invoice. Agency
        process can make the wait longer still.
      </p>

      <p>
        When agency money is available also shapes the receivable. See the{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          government fiscal year 2027 calendar for software vendors
        </Link>
        .
      </p>

      <h2 id={H["Choice one: what working capital is"]}>
        Choice one: what working capital is
      </h2>

      <p>
        Working capital is the cash that runs day to day operations. OpenStax
        states it this way:{" "}
        <em>
          &quot;Working capital describes the resources that are needed to meet
          the daily, weekly, and monthly operating cash flow needs.&quot;
        </em>{" "}
        (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax Principles of Finance
        </ExtLink>
        )
      </p>

      <p>
        <em>
          &quot;Whenever additional resources are needed, working capital is also
          needed.&quot;
        </em>{" "}
        (
        <ExtLink href="https://openstax.org/books/principles-finance-2e/pages/19-1-what-is-working-capital">
          OpenStax
        </ExtLink>
        )
      </p>

      <p>
        Virginia SBSD describes the same timing squeeze:{" "}
        <em>
          &quot;When you’re growing, you may need to spend money before you
          receive the revenue associated with that growth.&quot;
        </em>{" "}
        Then:{" "}
        <em>
          &quot;That creates a timing issue and money may be going out faster
          than it’s coming in.&quot;
        </em>{" "}
        (
        <ExtLink href="https://sbsd.virginia.gov/5-questions-to-ask-before-you-start-growing-your-small-business/">
          Virginia SBSD
        </ExtLink>
        )
      </p>

      <p>
        Federal small business lending rules treat working capital as a real use
        of proceeds.{" "}
        <ExtLink href="https://www.law.cornell.edu/cfr/text/13/120.120">
          13 CFR 120.120
        </ExtLink>{" "}
        lists working capital among eligible 7(a) and microloan uses, separate
        from buying buildings and fixed assets. The{" "}
        <ExtLink href="https://www.sba.gov/loans/7a-loans/">
          SBA 7(a) loans page
        </ExtLink>{" "}
        also lists short and long term working capital as a use of proceeds.
      </p>

      <h2 id={H["Choice two: what growth capital is"]}>
        Choice two: what growth capital is
      </h2>

      <p>
        Growth capital is money raised so a mature company can expand. For a
        GovTech software CEO, it pays for a change that should return cash over
        years. That can be a new product, a new market, lasting capacity, or a
        large buy. It is not next month&apos;s payroll against invoices already
        in process.
      </p>

      <p>
        Firms that seek growth capital can often earn revenue and profit. They
        still may lack the cash for a big expansion from operations alone. That
        differs from a receivable that will clear once a proper invoice is paid.
      </p>

      <p>
        If the growth path is not venture scale, start with{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          Is venture capital right for my startup?
        </Link>
        . When common equity is the growth tool under discussion, see{" "}
        <Link href={`/blog/${COMMON_STOCK_FINANCING_POST.slug}`}>
          common stock financing for GovTech software companies
        </Link>
        .
      </p>

      <h2
        id={
          H[
            "Working capital vs growth capital: diagnose timing versus investment"
          ]
        }
      >
        Working capital vs growth capital: diagnose timing versus investment
      </h2>

      <p>
        Our view: timing versus growth is the first fork to run before any raise.
        Slow pay on a signed government contract is usually a timing problem. It
        is not proof you need a growth round. Raise growth capital when the cash
        funds a multi year investment. Do not use it to bridge payroll until a
        proper invoice clears.
      </p>

      <p>
        The September company had a timing problem, not a growth problem. In our
        view, it was a true bridge: the deals were signed, and the cash was
        expected in January. Selling ownership to cover it would have meant
        giving up equity to bridge money the company expected to collect.
      </p>

      <p>
        <em>Timing problem or growth problem?</em>
      </p>

      <TableWrap caption="Timing problem or growth problem">
        <table>
          <caption>Timing problem or growth problem</caption>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Likely timing</th>
              <th>Likely growth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Signal">
                Cash leaves to deliver a signed award and returns when the agency
                pays
              </td>
              <td data-label="Likely timing">Yes</td>
              <td data-label="Likely growth">No</td>
            </tr>
            <tr>
              <td data-label="Signal">
                Bank balance is low while sales and backlog look strong
              </td>
              <td data-label="Likely timing">Yes</td>
              <td data-label="Likely growth">Maybe both</td>
            </tr>
            <tr>
              <td data-label="Signal">
                Spend is a new product, new market, acquisition, or lasting
                capacity
              </td>
              <td data-label="Likely timing">No</td>
              <td data-label="Likely growth">Yes</td>
            </tr>
            <tr>
              <td data-label="Signal">
                You need cash until invoices on a new award collect
              </td>
              <td data-label="Likely timing">Yes</td>
              <td data-label="Likely growth">No</td>
            </tr>
            <tr>
              <td data-label="Signal">
                You cannot fund a multi year expansion from operating cash alone
              </td>
              <td data-label="Likely timing">No</td>
              <td data-label="Likely growth">Yes</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>Decision rules</h3>

      <ul>
        <li>
          If the cash leaves to deliver an already signed contract and returns
          when the agency pays, you have a timing problem.
        </li>
        <li>
          If the cash leaves to build capacity, a product, a market, or an
          acquisition that pays back over years, you have a growth problem.
        </li>
        <li>If both are true, separate the amounts.</li>
      </ul>

      <p>
        Virginia SBSD advises:{" "}
        <em>&quot;Know your financing options before you need them.&quot;</em> It
        lists possibilities that may include a commercial loan, line of credit,
        equipment financing, equity investment or other financing tools. (
        <ExtLink href="https://sbsd.virginia.gov/5-questions-to-ask-before-you-start-growing-your-small-business/">
          Virginia SBSD
        </ExtLink>
        ) Diagnose first. Then match the tool.
      </p>

      <h2 id={H["Why each side of the market acts as it does"]}>
        Why each side of the market acts as it does
      </h2>

      <h3>Why a timing capital provider focuses on invoices</h3>

      <p>
        The likely reason: they are underwriting whether the receivable will
        convert to cash. Invoice acceptance, funding status and payment history
        matter more than a new market story.
      </p>

      <h3>Why a growth capital investor focuses on expansion evidence</h3>

      <p>
        Their focus: whether the new spend creates durable value. Product,
        market and margin trajectory matter more than a single unpaid invoice.
      </p>

      <h3>Why CEOs blur the two</h3>

      <p>
        The reason: a low bank balance feels the same in both cases. The CEO
        reaches for the largest familiar raise instead of the tool that matches
        the cash flow shape.
      </p>

      <p>
        Our view: match the instrument to the cash flow shape and the exit. See{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>
        .
      </p>

      <h2 id={H["Lesson: wrong tool, real damage"]}>
        Lesson: wrong tool, real damage
      </h2>

      <p>
        Wrong tool for timing: sell a large equity slice to bridge payroll until
        a proper invoice clears. The ownership is gone after the receivable
        lands.
      </p>

      <p>
        Wrong tool for growth: put short cycle repayment on a multi year
        investment. The investment has not returned cash yet. Every payment then
        competes with the build.
      </p>

      <p>
        Neither tool is bad on its own. The harm comes from a bad fit. When more
        than one claim sits on the company, see{" "}
        <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
          capital stack seniority for GovTech software companies
        </Link>
        .
      </p>

      <h2 id={H["Bridging the gap: use X if you have Y problem"]}>
        Bridging the gap: use X if you have Y problem
      </h2>

      <p>
        Each option fits one problem. We do not rank them by cost or risk.
      </p>

      <ul>
        <li>
          Use prompt payment interest rights if a proper invoice on a funded
          contract is past its due date. See{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
          .
        </li>
        <li>
          Use upfront annual billing, where the rules allow it, if cash arrives
          after you have already delivered a year of service. See{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can government customers pay your SaaS subscription upfront?
          </Link>
          .
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
          Use an assignment of contract payments if a financing provider needs to
          be paid directly by the agency on a signed federal contract. See{" "}
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act explained
          </Link>
          .
        </li>
        <li>
          Use a revolving line of credit if the timing gap repeats as receivables
          turn. A revolving line of credit is a reusable credit line you draw and
          repay as receivables turn. See{" "}
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
          Use revenue based financing if collections are lumpy and you want
          repayment tied to revenue rather than a fixed amortization path. See{" "}
          <Link href={`/blog/${REVENUE_BASED_FINANCING_POST.slug}`}>
            Revenue based financing for government contractors
          </Link>
          .
        </li>
        <li>
          Use common stock financing if you are raising growth capital and common
          equity fits the ownership and status rules you need. See{" "}
          <Link href={`/blog/${COMMON_STOCK_FINANCING_POST.slug}`}>
            Common stock financing for GovTech software companies
          </Link>
          .
        </li>
        <li>
          Use the venture capital fit check if someone is pushing a venture scale
          raise onto a non venture scale GovTech company. See{" "}
          <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
            Is venture capital right for my startup?
          </Link>
          .
        </li>
        <li>
          For how these pieces fit a long term plan, see{" "}
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            software company financing strategy
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={WORKING_CAPITAL_VS_GROWTH_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
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
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
        </li>
        <li>
          <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
            Capital stack seniority for GovTech software companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            Government fiscal year 2027 calendar for software vendors
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
