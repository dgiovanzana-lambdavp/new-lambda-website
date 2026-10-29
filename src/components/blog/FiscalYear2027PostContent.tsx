import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  FISCAL_YEAR_2027_FAQ,
  FISCAL_YEAR_2027_HEADINGS,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  FISCAL_YEAR_2027_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function FiscalYear2027PostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Your government customer&apos;s calendar decides when you get paid, not
          your invoice date.
        </strong>
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A fiscal year is the budget year a government uses. The federal fiscal
        year 2027 runs from October 1, 2026 to September 30, 2027. Forty six
        states start theirs on July 1, and counties and cities use July, January
        or October.
      </p>

      <p>
        An agency can only obligate and pay from money that is available for that
        year. To obligate money means to legally commit it, for example by signing
        a contract. So continuing resolutions, funding gaps and year end all shift
        when invoices get paid.
      </p>

      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <p>
        <em>
          Who this is for: chief executive officers (CEOs) of government
          technology (GovTech) software companies with $1M to $10M in revenue.
          Their state, local, or federal customers can take 90 to 180 days to
          pay.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Federal fiscal year 2027 runs from October 1, 2026 to September 30,
            2027.
          </li>
          <li>
            At the time of writing, a continuing resolution funds federal
            agencies through December 11, 2026.
          </li>
          <li>
            Forty six states start their fiscal year on July 1. Counties and
            cities vary, so ask each one.
          </li>
          <li>
            Annual money expires. Once its period ends, it cannot fund new
            obligations.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["Why the customer's fiscal year sets your cash calendar"]}>
        Why the customer&apos;s fiscal year sets your cash calendar
      </h2>

      <p>
        Every signed contract is paid out of a specific year&apos;s money. When
        that money arrives and when it expires shape your receivable more than
        your invoice date does.
      </p>

      <h3>No money, no contract</h3>

      <p>
        A government agency cannot commit money it has not been given. An
        appropriation is the law that gives an agency money to spend.
      </p>

      <p>
        A contract signed before an appropriation would commit money that does
        not exist yet.
      </p>

      <p>
        Under{" "}
        <ExtLink href="https://www.govinfo.gov/content/pkg/USCODE-2023-title31/html/USCODE-2023-title31-subtitleII-chap13-subchapIII-sec1341.htm">
          31 United States Code (U.S.C.) 1341
        </ExtLink>
        , an officer or employee may not &quot;involve either government in a
        contract or obligation for the payment of money before an appropriation
        is made unless authorized by law.&quot;
      </p>

      <p>
        The Federal Acquisition Regulation (FAR) is the main rulebook for federal
        buying. It applies the same rule to contracts. Under{" "}
        <ExtLink href="https://www.acquisition.gov/far/32.702">
          FAR 32.702
        </ExtLink>
        , a federal contracting officer must act before signing any contract.
      </p>

      <p>
        The officer must either get written assurance that &quot;adequate funds
        are available&quot; or expressly condition the contract &quot;upon
        availability of funds.&quot;
      </p>

      <p>
        What happens once a proper invoice is paid late is a separate set of
        rules. We cover them in{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          Prompt Payment Act: What GovTech Vendors Can Collect When Government
          Pays Late
        </Link>
        .
      </p>

      <h2 id={H["Federal fiscal year 2027 and where funding stands"]}>
        Federal fiscal year 2027 and where funding stands
      </h2>

      <p>
        Federal fiscal year (FY) 2027 runs from October 1, 2026 to September 30,
        2027. The law is short: &quot;The fiscal year of the Treasury begins on
        October 1 of each year and ends on September 30 of the following
        year.&quot; (
        <ExtLink href="https://www.govinfo.gov/content/pkg/USCODE-2023-title31/html/USCODE-2023-title31-subtitleII-chap11-sec1102.htm">
          31 U.S.C. 1102
        </ExtLink>
        )
      </p>

      <h3>A continuing resolution funds agencies for now</h3>

      <p>
        At the time of writing, federal agencies are running on a continuing
        resolution (CR). A CR is a temporary funding law.
      </p>

      <p>
        This one started as House bill H.R. 6500. It was signed on September 2,
        2026, and became Public Law (P.L.) 119-103.
      </p>

      <p>
        The Congressional Research Service (CRS) is Congress&apos;s research
        office. It explains that the CR funds agencies covered by all 12 regular
        appropriations bills.
      </p>

      <p>
        Funding runs from October 1 through December 11, 2026. That is roughly
        the first 10 weeks of the fiscal year (
        <ExtLink href="https://www.congress.gov/crs-product/R49353">
          CRS overview of the FY2027 CR
        </ExtLink>
        ).
      </p>

      <p>
        The same report spells out what comes next: &quot;Congress must enact
        regular appropriations bills for FY2027 or an additional CR prior to the
        expiration of this CR to avoid a funding gap beginning on December 12,
        2026, that may result in a shutdown of affected government
        activities.&quot;
      </p>

      <h3>Where the full year bills stand</h3>

      <p>
        As of the last update of the{" "}
        <ExtLink href="https://www.congress.gov/crs-appropriations-status-table/2027">
          CRS appropriations status table
        </ExtLink>
        , none of the 12 regular FY2027 bills had become law. The House had
        passed three, and the Senate had passed none. The{" "}
        <ExtLink href="https://www.govinfo.gov/content/pkg/CCAL-119hcal-2026-10-22/html/CCAL-119hcal-2026-10-22-pt22.htm">
          House Calendar of October 22, 2026
        </ExtLink>{" "}
        shows the same picture.
      </p>

      <p>
        This is normal. CRS notes that &quot;Congress has enacted one or more CRs
        in all but three of the 49 fiscal years since the start of the fiscal
        year was changed to October 1 beginning in FY1977.&quot; (
        <ExtLink href="https://www.everycrsreport.com/reports/R46595.html">
          CRS report on continuing resolutions
        </ExtLink>
        )
      </p>

      <p>
        We will update this post after December 11, 2026. This post does not
        predict what Congress will do.
      </p>

      <h2 id={H["State fiscal years: most start July 1, with exceptions"]}>
        State fiscal years: most start July 1, with exceptions
      </h2>

      <p>
        For most state customers, the year end that matters for renewals and
        invoices is June 30, not December 31.
      </p>

      <p>
        Most states start on July 1. The National Association of State Budget
        Officers (NASBO) counts 46 of them (
        <ExtLink href="https://budgetblog.nasbo.org/blogs/brian-sigritz/2026/07/01/states-enact-fiscal-2027-budgets-amid-continued-fi">
          NASBO budget update, July 2026
        </ExtLink>
        ). The exceptions:
      </p>

      <ul>
        <li>New York begins on April 1.</li>
        <li>Texas begins on September 1.</li>
        <li>Alabama and Michigan begin on October 1.</li>
      </ul>

      <p>
        The budget officers&apos; update adds: &quot;Puerto Rico begins its
        fiscal year on July 1, while the District of Columbia, Guam, and the U.S.
        Virgin Islands begin their fiscal year on October 1.&quot;
      </p>

      <h3>Some states budget two years at a time</h3>

      <p>
        A biennial budget covers two years. According to the state budget
        officers&apos; association, &quot;three states (Kentucky, Virginia, and
        Wyoming) are enacting biennial budgets for both fiscal 2027 and fiscal
        2028.&quot;
      </p>

      <h3>Some states start the year without a final budget</h3>

      <p>
        The National Conference of State Legislatures (NCSL) took a snapshot on
        July 1, 2026. It said: &quot;Massachusetts is operating under an interim
        budget, and South Carolina passed a continuing resolution while
        negotiations continue.&quot;
      </p>

      <p>
        North Carolina was &quot;operating under a provision that automatically
        continues funding at the previous year&apos;s levels.&quot; (
        <ExtLink href="https://www.ncsl.org/fiscal/fy-2027-state-budget-status">
          NCSL state budget status
        </ExtLink>
        ) That is a July 2026 snapshot, not the current status of those states.
      </p>

      <h2 id={H["County and city fiscal years"]}>
        County and city fiscal years
      </h2>

      <p>
        Local governments do not share one calendar. So ask each local customer
        which one it uses.
      </p>

      <h3>Counties</h3>

      <p>
        The National Association of Counties (NACo) says: &quot;County budgets
        typically follow one of three budget cycles: January to December
        (calendar year), July to June or October to September (federal government
        fiscal year).&quot; (
        <ExtLink href="https://www.naco.org/sites/default/files/documents/CountyEconomiesAndFinances.pdf">
          NACo report on county finances
        </ExtLink>
        )
      </p>

      <h3>Cities</h3>

      <p>
        Cities vary too. A survey by the National League of Cities (NLC)
        describes a fiscal year &quot;that ended by June 30, 2025 for most cities
        and will end by December 31, 2025 for others&quot; (
        <ExtLink href="https://www.nlc.org/wp-content/uploads/2025/11/2025-City-Fiscal-Conditions-ReportwebA.pdf">
          NLC city fiscal conditions report
        </ExtLink>
        ). Both cycles are in use.
      </p>

      <p>
        A new year can also change how you invoice. Here is what New York City
        told its vendors: &quot;Purchase Orders (POs) will be activated once
        budgets are approved and once services for FY27 have begun, vendors can
        start submitting invoices.&quot; (
        <ExtLink href="https://home4.nyc.gov/assets/mocs/downloads/About/about-mocs/news-notices/VendorNewsletter_202601.pdf">
          New York City vendor newsletter
        </ExtLink>
        )
      </p>

      <p>
        The same notice asked vendors to make sure their prior year invoicing was
        up to date.
      </p>

      <h3>Three questions for each local customer</h3>

      <ul>
        <li>Which fiscal year cycle do you use?</li>
        <li>When does the new year&apos;s purchase order or encumbrance open?</li>
        <li>What is the last date to submit invoices for the prior year?</li>
      </ul>

      <h2 id={H["How continuing resolutions and funding gaps delay payment"]}>
        How continuing resolutions and funding gaps delay payment
      </h2>

      <p>
        CRs create uncertainty and can delay awards. Funding gaps can also delay
        how invoices are processed and paid.
      </p>

      <h3>CRs create uncertainty</h3>

      <p>
        The Government Accountability Office (GAO) studied how CRs affect the
        Department of Defense (DOD). Here is what it found: &quot;Under CRs,
        there is uncertainty for agencies about when they will receive their
        final appropriation and what amount of funding will be available for a
        fiscal year that has already begun.&quot; (
        <ExtLink href="https://www.gao.gov/products/gao-26-107065">
          GAO study of CRs at DOD
        </ExtLink>
        )
      </p>

      <p>
        In short, an agency does not know its full budget yet. The likely reason
        new awards slow down: it is hard to commit to something new without
        knowing the final amount.
      </p>

      <p>
        CRs usually fund activities for the same purposes as the prior year. CRS
        says: &quot;In practice, this is often characterized as a prohibition on
        &apos;new starts.&apos;&quot;
      </p>

      <p>
        So a new product purchase or a new program may wait for full year
        funding. The CR keeps last year&apos;s work going. New work often waits.
      </p>

      <h3>Award timing can slip</h3>

      <p>
        In the same DOD study, GAO found: &quot;About half (36 of 74) of
        acquisition programs GAO surveyed reported experiencing schedule effects,
        such as delays in awarding contracts.&quot; Those were DOD acquisition
        programs. In plain terms, about half saw contract awards or other steps
        slip.
      </p>

      <h3>Funding gaps can slow invoices</h3>

      <p>
        A funding gap, often called a shutdown, is different. It means no funding
        law is in effect for the affected agencies.
      </p>

      <p>
        A{" "}
        <ExtLink href="https://www.everycrsreport.com/reports/R47693.html">
          CRS shutdown FAQ
        </ExtLink>{" "}
        explains: &quot;If a contract continues during a shutdown because it is
        funded by prior year or multiyear appropriations, work under that
        contract would be paid from those funds. Agency processing and payment of
        contractor invoices may be delayed, however, as the federal personnel
        responsible for these activities may be furloughed.&quot;
      </p>

      <p>
        Why the delay? The same FAQ explains that a shutdown furlough places
        employees in &quot;a temporary, nonduty, nonpay status.&quot; So fewer
        people are there to process invoices.
      </p>

      <p>
        It also warns: &quot;Contractors whose contracts were paused or
        terminated due to a lapse in appropriations are limited in the
        reimbursement they may receive from the government.&quot;
      </p>

      <h3>Gaps are recent history, not theory</h3>

      <p>
        According to{" "}
        <ExtLink href="https://www.congress.gov/crs-product/RS20348">
          CRS data on funding gaps
        </ExtLink>
        , the FY2026 gap that affected the whole government ended on November 12,
        2025, after 42 full days. A later gap affecting the Department of
        Homeland Security (DHS) &quot;concluded on April 30, 2026, after lasting
        75 full days.&quot;
      </p>

      <p>
        In our view, for a vendor whose receivables already run 90 to 180 days, a
        CR mostly hurts new awards and renewals. A funding gap can also stall
        invoices on contracts that are already funded, because the people who
        process them may be furloughed.
      </p>

      <h2 id={H['Year end and "use it or lose it" timing']}>
        Year end and &quot;use it or lose it&quot; timing
      </h2>

      <p>
        Annual money expires. Under{" "}
        <ExtLink href="https://www.govinfo.gov/content/pkg/USCODE-2023-title31/html/USCODE-2023-title31-subtitleII-chap15-subchapI-sec1502.htm">
          31 U.S.C. 1502
        </ExtLink>
        , it &quot;is available only for payment of expenses properly incurred
        during the period of availability or to complete contracts properly made
        within that period of availability.&quot;
      </p>

      <p>
        In plain terms, once the period ends, that money cannot fund new
        obligations. That is why agencies watch the year end so closely.
      </p>

      <h3>Long CRs push spending later</h3>

      <p>
        In its DOD study, GAO wrote: &quot;CRs can lead to uneven spending over
        the course of the fiscal year.&quot;
      </p>

      <p>
        The Defense Department study also found that programs have limited time
        left in the year to obligate their full year funds. This is especially
        true after longer CR periods. The full budget arrives late, but the
        deadline does not move.
      </p>

      <p>
        Bottlenecks include &quot;the capacity of contracting offices to solicit
        and issue contracts or the ability of vendors to complete projects.&quot;
      </p>

      <p>
        In our view, that is why federal awards and renewals tend to bunch up
        before September 30, and state awards before June 30 in most states. The
        money must be obligated within the year, but payment still follows
        delivery and a proper invoice.
      </p>

      <h2 id={H["Annual vs multi year money for software subscriptions"]}>
        Annual vs multi year money for software subscriptions
      </h2>

      <p>
        Most federal money is annual. But a common exception lets a 12 month
        software subscription cross fiscal years.
      </p>

      <h3>Most money is annual</h3>

      <p>
        Here is how CRS puts it: &quot;The program activities of most federal
        agencies are generally funded on an annual basis through the enactment of
        regular appropriations acts.&quot; The same report also notes that some
        budget authority is available for more than one year (multiyear) or with
        no time limit (no year).
      </p>

      <p>
        The FAR sets the default for annual money: &quot;A contract that is
        funded by annual appropriations may not cross fiscal years, except in
        accordance with statutory authorization&quot; (
        <ExtLink href="https://www.acquisition.gov/far/32.703-3">
          FAR rule on contracts crossing fiscal years
        </ExtLink>
        ).
      </p>

      <h3>The exception for severable services</h3>

      <p>
        One exception matters for software as a service (SaaS) subscriptions and
        support. It covers severable services. These are services delivered over
        a period of time, rather than as one finished product.
      </p>

      <p>
        An agency may award or renew &quot;for severable services for a period
        that begins in one fiscal year and ends in the next fiscal year if the
        period of the contract awarded, option exercised, or order placed does
        not exceed one year.&quot; The regulation adds: &quot;Funds made
        available for a fiscal year may be obligated for the total amount of an
        action entered into under this authority.&quot;
      </p>

      <p>
        In plain terms, a 12 month federal SaaS period that starts in March can
        usually be funded in full with this year&apos;s money. The reason: the
        rule lets the agency obligate the total amount of that action from one
        year&apos;s money.
      </p>

      <p>
        Whether the agency can pay you up front is a separate question, covered
        in{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          Can Government Customers Pay Your SaaS Subscription Upfront? A GovTech
          Vendor&apos;s Guide
        </Link>
        .
      </p>

      <h3>Contracts signed before the money arrives</h3>

      <p>
        Some contracts are signed before the money arrives. The{" "}
        <ExtLink href="https://www.acquisition.gov/far/52.232-18">
          Availability of Funds clause
        </ExtLink>
        , FAR 52.232-18, states: &quot;Funds are not presently available for this
        contract.&quot;
      </p>

      <p>
        It continues: &quot;No legal liability on the part of the Government for
        any payment may arise until funds are made available to the Contracting
        Officer for this contract and until the Contractor receives notice of
        such availability, to be confirmed in writing by the Contracting
        Officer.&quot;
      </p>

      <p>
        A related{" "}
        <ExtLink href="https://www.acquisition.gov/far/32.703-2">
          FAR rule on contracts conditioned on funds
        </ExtLink>
        , FAR 32.703-2(c), says the government may not accept supplies or
        services &quot;under a contract conditioned upon the availability of
        funds until the contracting officer has given the contractor notice, to
        be confirmed in writing, that funds are available.&quot;
      </p>

      <p>
        Why? The contract was signed before the money existed. So the government
        is not bound to pay until the money arrives and you get written notice.
      </p>

      <p>
        If your contract or order includes that clause, the written funds notice
        is the trigger. Keep it on file. Until it arrives, do not count that work
        as a receivable.
      </p>

      <h2 id={H["Practical steps for invoices and renewals"]}>
        Practical steps for invoices and renewals
      </h2>

      <p>
        Line up your invoicing and renewals with each customer&apos;s fiscal
        year.
      </p>

      <ol>
        <li>
          <strong>Build a customer calendar.</strong> List each customer&apos;s
          fiscal year start and year end. Note whether each budgets for one year
          or two.
          <ul>
            <li>Federal starts October 1.</li>
            <li>Most states start July 1, with the exceptions above.</li>
            <li>Ask counties and cities.</li>
          </ul>
        </li>
        <li>
          <strong>
            Set renewal dates with the customer&apos;s calendar in mind.
          </strong>{" "}
          Ask the contracting officer or budget office which year&apos;s money
          will fund the renewal. Also ask when the new year&apos;s order or
          purchase order opens.
        </li>
        <li>
          <strong>Ask about funds before you start work.</strong> &quot;Is this
          order funded now, or conditioned on availability of funds?&quot; For
          federal work, look for FAR 52.232-18 and wait for the written notice.
        </li>
        <li>
          <strong>
            Clear prior year invoices before the customer&apos;s year end.
          </strong>{" "}
          Submit proper invoices promptly and keep proof of acceptance.
        </li>
        <li>
          <strong>Track the federal CR expiration.</strong> It is December 11,
          2026 at the time of writing. Ask federal customers if your renewal or
          new order is funded under the CR.
          <ul>
            <li>
              If it needs full year funding, it may count as a new start.
            </li>
          </ul>
        </li>
        <li>
          <strong>Plan for a possible funding gap.</strong> Invoices on contracts
          that are already funded may still be paid, but processing may be slow.
          Model a delay on federal receivables rather than assuming nonpayment.
        </li>
      </ol>

      <h2 id={H["Bridging the gap: which option fits which problem"]}>
        Bridging the gap: which option fits which problem
      </h2>

      <p>Each option below fits one problem. They are not ranked.</p>

      <ul>
        <li>
          <strong>Use prompt payment interest rights if</strong> a proper invoice
          on a funded contract is past its due date. See{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: What GovTech Vendors Can Collect When Government
            Pays Late
          </Link>
          .
        </li>
        <li>
          <strong>
            Use upfront annual billing, where the rules allow it, if
          </strong>{" "}
          cash arrives only after you have delivered a year of service. See{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can Government Customers Pay Your SaaS Subscription Upfront? A
            GovTech Vendor&apos;s Guide
          </Link>
          .
        </li>
        <li>
          <strong>Use milestone billing if</strong> a long implementation leaves
          you unpaid for months. See{" "}
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Getting Paid During Implementation: Milestones and Holdbacks on
            Government Software Contracts
          </Link>
          .
        </li>
        <li>
          <strong>Use an assignment of contract payments if</strong> a lender or
          financing provider needs to be paid directly by the agency on a signed
          federal contract. See{" "}
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained for GovTech Software Companies
          </Link>
          .
        </li>
        <li>
          <strong>Use a revolving line of credit if</strong> the gap repeats
          every year around the same fiscal year turns.
        </li>
        <li>
          <strong>Use loans with bullet payments if</strong> the gap is one known
          stretch before a large, expected payment, such as an award or renewal
          delayed under a CR. Principal is repaid at the end, when the receivable
          lands. See{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet Loan vs Amortizing Loan for Software Companies
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["Government fiscal year 2027 calendar"]}>
        Government fiscal year 2027 calendar
      </h2>

      <p>Here are the key dates in one place.</p>

      <h3>Federal and state</h3>

      <TableWrap caption="Federal and state fiscal year 2027 dates">
        <table>
          <caption>Federal and state fiscal year 2027 dates</caption>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Fiscal year 2027</th>
              <th>Year ends</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Customer">Federal agencies</td>
              <td data-label="Fiscal year 2027">
                October 1, 2026 to September 30, 2027
              </td>
              <td data-label="Year ends">September 30</td>
            </tr>
            <tr>
              <td data-label="Customer">Most states (46)</td>
              <td data-label="Fiscal year 2027">
                July 1, 2026 to June 30, 2027
              </td>
              <td data-label="Year ends">June 30</td>
            </tr>
            <tr>
              <td data-label="Customer">New York State</td>
              <td data-label="Fiscal year 2027">Starts April 1</td>
              <td data-label="Year ends">March 31</td>
            </tr>
            <tr>
              <td data-label="Customer">Texas</td>
              <td data-label="Fiscal year 2027">Starts September 1</td>
              <td data-label="Year ends">August 31</td>
            </tr>
            <tr>
              <td data-label="Customer">Alabama, Michigan</td>
              <td data-label="Fiscal year 2027">Start October 1</td>
              <td data-label="Year ends">September 30</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>Counties and cities</h3>

      <TableWrap caption="County and city fiscal year cycles">
        <table>
          <caption>County and city fiscal year cycles</caption>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Fiscal year</th>
              <th>Year ends</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Customer">Counties</td>
              <td data-label="Fiscal year">
                Calendar year, July to June, or October to September
              </td>
              <td data-label="Year ends">Varies; ask</td>
            </tr>
            <tr>
              <td data-label="Customer">Cities</td>
              <td data-label="Fiscal year">
                June 30 for most; December 31 for some
              </td>
              <td data-label="Year ends">Varies; ask</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>What to watch for</h3>

      <ul>
        <li>
          <strong>Federal agencies:</strong> a CR through December 11, 2026 at
          the time of writing, with a possible funding gap after.
        </li>
        <li>
          <strong>Most states:</strong> late budgets, interim budgets or state
          CRs. Some states have biennial budgets.
        </li>
        <li>
          <strong>New York State and Texas:</strong> ask the agency which budget
          period funds the order.
        </li>
        <li>
          <strong>Alabama and Michigan:</strong> same calendar as federal.
        </li>
        <li>
          <strong>Counties:</strong> which cycle the county uses.
        </li>
        <li>
          <strong>Cities:</strong> when new year purchase orders open.
        </li>
      </ul>

      <p>
        <em>
          Sources: 31 U.S.C. 1102 and CRS for federal; NASBO and NCSL for states;
          NACo for counties; NLC and New York City for cities.
        </em>
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={FISCAL_YEAR_2027_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: What GovTech Vendors Can Collect When Government
            Pays Late
          </Link>
        </li>
        <li>
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can Government Customers Pay Your SaaS Subscription Upfront? A
            GovTech Vendor&apos;s Guide
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Getting Paid During Implementation: Milestones and Holdbacks on
            Government Software Contracts
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
