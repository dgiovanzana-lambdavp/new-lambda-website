import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {ASSIGNMENT_OF_CLAIMS_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST,
  GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_FAQ,
  GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_HEADINGS,
  GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST, GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_POST} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentCustomerConcentrationCashGapPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Count customers by level of government, not by agency. Accounting rules
        treat the federal government, each state government, and each local
        government (a county or municipality) as one customer. In our example, a
        company with four federal agencies may really have one customer at 70
        percent of revenue. When that customer&apos;s budget slows, every payment
        from that customer slows at once. Size a timing tool to a slowdown at your
        biggest payer. Fund the work of winning customers at other levels as
        growth.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder runs a GovTech software company with $5,000,000 in annual
        revenue. That figure is our example. The company sells to four federal
        agencies for $3,500,000 a year, one state for $1,000,000, and two
        counties for $500,000. Those figures are our example too. The CEO counts
        seven customers and says no customer is over 25 percent of revenue. Then
        invoices at all four federal agencies slow down in the same month.
      </p>
      <p>
        The reason that frame fails is simple. Those four agencies are one
        customer. They share one budget process. When that process slows, every
        federal payment slows together. The gap you must fund is the gap at your
        biggest customer, not your average one. Count the agencies as one. Plan
        cash that way.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Count customers by level of government. The federal government, each
            state government, and each local government (a county or municipality)
            is one customer.
          </li>
          <li>
            For public company disclosure, a customer at 10 percent or more of
            revenue is a major customer. That is a disclosure line, not a safety
            limit.
          </li>
          <li>
            When one government customer&apos;s budget slows, every payment from
            that customer can slow in the same month.
          </li>
          <li>
            Size a timing tool to a slowdown at your biggest payer, before the
            slowdown. Fund the work of winning customers on other budget calendars
            with growth capital.
          </li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        Size your cash for your biggest government customer, counted by level of
        government. The federal government, each state government, and each local
        government (a county or municipality) counts as one customer, so their
        payments tend to slow together. Fund the gap on signed work with a timing
        tool sized to that slowdown. Fund the effort to win customers on other
        budget calendars with growth capital.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Customer concentration: how much of your revenue comes from one
          customer, counted by level of government.
        </li>
        <li>
          FASB (Financial Accounting Standards Board): the body that sets the
          major customer disclosure rule for public companies.
        </li>
        <li>
          Major customer: for public company disclosure, a customer at 10 percent
          or more of revenue. That is a disclosure line, not a safety limit.
        </li>
        <li>
          Availability of Funds clause: a federal clause used when a contract is
          awarded before its funds are available. It applies only if it is in your
          contract. Nothing is owed until the funds are made available.
        </li>
        <li>
          Funding out clause: in Texas, a required term in a state agency contract
          if the contract term will cross a fiscal year. Texas agencies may not
          incur obligations in excess of amounts lawfully appropriated over the
          course of a biennium.
        </li>
        <li>
          Timing problem vs growth problem: a timing problem is cash you will
          collect on signed work that arrives late. A growth problem is cash you
          need to win or serve more customers.
        </li>
      </ul>
      <h2 id={H["Are four federal agencies four customers, or one?"]}>
        Are four federal agencies four customers, or one?
      </h2>
      <p>
        For accounting, one. The standard treats the federal government, each
        state government, and each local government (a county or municipality) as a
        single customer. Count that way for cash planning too, because every
        contract with one level of government shares one budget process.
      </p>
      <p>
        Customer concentration is the share of revenue that comes from one
        customer. The rule that says how to count a government customer comes from
        the Financial Accounting Standards Board, or FASB. It is a public company
        disclosure rule. Most readers of this post are private. The rule is still a
        useful count.
      </p>
      <p>
        A 2013 SEC staff comment letter to a public technology company spelled the
        rule out. The company had treated each agency as its own customer. Staff
        asked for one federal total. They wrote:{" "}
        <em>
          &quot;Please tell us the amount of revenues attributable to the U.S.
          federal government, its departments and agencies in the aggregate for the
          periods presented.&quot;
        </em>{" "}
        The standard is plain.{" "}
        <em>
          &quot;the federal government, a state government, a local government, or
          a foreign government each shall be considered as a single customer&quot;
        </em>
        . That is one customer, not four. And{" "}
        <em>
          &quot;a group of entities under common control shall be considered as a
          single customer&quot;
        </em>
        . The company then gave a federal total. It reported federal revenue{" "}
        <em>
          &quot;which represented 17%, 20% and 21% of total revenues&quot;
        </em>
        . Those shares are what the rule is for. The agencies were not counted one
        by one.
      </p>
      <p>
        A 2005 letter from a public company quoted the same rule.{" "}
        <em>
          &quot;An enterprise shall provide information about the extent of its
          reliance on its major customers.&quot;
        </em>{" "}
        That is the point of the rule. The line is this:{" "}
        <em>
          &quot;If revenues from transactions with a single external customer
          amount to 10 percent or more of an enterprise&apos;s revenues, the
          enterprise shall disclose that fact&quot;
        </em>
        . That 10 percent test is a public company disclosure line, not a safety
        limit. It is not a cap. It is not a target. It does not tell you how much
        cash to hold.
      </p>
      <p>
        The same letter defines a local government. It is{" "}
        <em>
          &quot;a local government (for example, a county or municipality)&quot;
        </em>
        . Each county or city is its own customer. A state and its counties are not
        one customer. Count each one on its own.
      </p>
      <p>
        Our reading: this is a public company disclosure rule. It is still the right
        way to count customers for a private company&apos;s cash plan. One
        government is one budget. Use it as your count.
      </p>
      <h2
        id={H["Why does one big government customer make your cash gap bigger?"]}
      >
        Why does one big government customer make your cash gap bigger?
      </h2>
      <p>
        Because every contract with that customer depends on the same
        appropriation, the same fiscal year, and the same rules. When one of those
        slows, all of your payments from that customer can slow in the same month.
        The gap you must fund is the gap at your biggest customer, not your average
        one.
      </p>
      <p>
        Some federal contracts carry an Availability of Funds clause. That clause is
        used when a contract is awarded before its funds are available. It applies
        only if it is in your contract. The text is direct.{" "}
        <em>
          &quot;The Government&apos;s obligation under this contract is contingent
          upon the availability of appropriated funds from which payment for
          contract purposes can be made.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.232-18">
          FAR 52.232-18
        </ExtLink>
        ) And this:{" "}
        <em>
          &quot;No legal liability on the part of the Government for any payment
          may arise until funds are made available to the Contracting Officer for
          this contract&quot;
        </em>
        . If the clause is in your contract, nothing is owed until the funds show
        up. Not every federal contract has this clause. Read yours. The funds have
        to arrive first. Until then, no payment is due.
      </p>
      <p>
        The same federal budget process can move many invoices at once.{" "}
        <em>
          &quot;So continuing resolutions, funding gaps and year end all shift
          when invoices get paid.&quot;
        </em>{" "}
        That shift can hit every federal contract you have. We walked through that
        calendar in our{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          government fiscal year 2027
        </Link>{" "}
        post.
      </p>
      <p>
        On a commercial federal contract, the government may also end the work for
        its convenience.{" "}
        <em>
          &quot;The Government reserves the right to terminate this contract, or
          any part hereof, for its sole convenience.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.212-4">
          FAR 52.212-4
        </ExtLink>
        ) If it does, you are paid for work performed plus reasonable charges. Then
        that revenue stops. The clause says{" "}
        <em>
          &quot;the Contractor shall be paid a percentage of the contract price
          reflecting the percentage of the work performed prior to the notice of
          termination&quot;
        </em>
        . That is pay for work done, plus reasonable charges. Then the cash from
        that contract ends. The work is over. We covered the payment step in our{" "}
        <Link href={`/blog/${GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_POST.slug}`}>
          termination for convenience
        </Link>{" "}
        post.
      </p>
      <p>
        State rules can cut a concentrated book from another direction. In Texas, a
        funding out clause{" "}
        <em>
          &quot;is an Essential Provision that must be included in a contract if
          the contract term will cross a fiscal year.&quot;
        </em>{" "}
        (Texas Comptroller, Procurement and Contract Management Guide, version 4.0,
        page 110) That rule is for state agency contracts that cross a fiscal year.
        Texas rules also{" "}
        <em>
          &quot;prohibit an agency from incurring obligations in excess of amounts
          lawfully appropriated by the Legislature over the course of a
          biennium.&quot;
        </em>{" "}
        The agency cannot promise more than the funds it has for that span. Other
        states and local governments likely have similar clauses. Read your
        contract.
      </p>
      <p>
        A big contract that lapses between terms hits concentrated revenue
        hardest. One lapse can take a large share of the book with it. We covered
        that gap in our{" "}
        <Link href={`/blog/${GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug}`}>
          renewal lapse
        </Link>{" "}
        post.
      </p>
      <TableWrap caption="What happens, who it hits, what it does to your cash, and source">
        <table>
          <thead>
            <tr>
              <th>What happens</th>
              <th>Who it hits</th>
              <th>What it does to your cash</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="What happens">
                Funds for the contract are not yet available (Availability of Funds
                clause, used when a contract is awarded before its funds are
                available, and only if it is in your contract)
              </td>
              <td data-label="Who it hits">
                Federal contracts awarded before funds arrive
              </td>
              <td data-label="What it does to your cash">
                Nothing is owed until the funds are made available
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.acquisition.gov/far/52.232-18">
                  FAR 52.232-18
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="What happens">
                A continuing resolution, funding gap, or fiscal year end
              </td>
              <td data-label="Who it hits">All federal agencies</td>
              <td data-label="What it does to your cash">
                Shifts when invoices get paid
              </td>
              <td data-label="Source">
                <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>FY2027 post</Link>
              </td>
            </tr>
            <tr>
              <td data-label="What happens">
                The legislature does not fund the next fiscal year (funding out
                clause)
              </td>
              <td data-label="Who it hits">
                Texas state agency contracts that cross a fiscal year
              </td>
              <td data-label="What it does to your cash">
                The contract can end for lack of funds
              </td>
              <td data-label="Source">
                Texas Comptroller guide, page 110
              </td>
            </tr>
            <tr>
              <td data-label="What happens">Termination for convenience</td>
              <td data-label="Who it hits">Commercial federal contracts</td>
              <td data-label="What it does to your cash">
                Paid for work performed plus reasonable charges, then revenue stops
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.acquisition.gov/far/52.212-4">
                  FAR 52.212-4(l)
                </ExtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2
        id={
          H[
            "How much cash should you plan for a slowdown at your biggest payer?"
          ]
        }
      >
        How much cash should you plan for a slowdown at your biggest payer?
      </h2>
      <p>
        Take your biggest customer&apos;s monthly billing and multiply by the
        number of months its payments could slip. In our example, a two month
        federal slip ties up about $580,000 at 70 percent federal, and about
        $290,000 at 35 percent federal. Plan that amount before the slowdown, not
        during it.
      </p>
      <p>
        Here is our example. The company has $5,000,000 in revenue. Four federal
        agencies bring in $3,500,000, or 70 percent. One state brings in
        $1,000,000, or 20 percent. Two counties bring in $500,000, or 10 percent.
        That is 5 percent each. Federal billing is about $290,000 a month. A two
        month federal slip then ties up about $580,000. Now cut the federal share
        in half. At 35 percent, monthly federal billing would be about $146,000. The
        same two month slip would tie up about $290,000. That is half the cash
        bind. A two month slip at the state customer would tie up about $170,000.
        These figures are our example. They are not a forecast of any delay. Use
        your own billings for the live plan.
      </p>
      <TableWrap caption="Item, 70 percent federal, and 35 percent federal">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>70 percent federal</th>
              <th>35 percent federal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Annual federal revenue (our example)</td>
              <td data-label="70 percent federal">$3,500,000</td>
              <td data-label="35 percent federal">$1,750,000</td>
            </tr>
            <tr>
              <td data-label="Item">Monthly federal billing, in arrears</td>
              <td data-label="70 percent federal">About $290,000</td>
              <td data-label="35 percent federal">About $146,000</td>
            </tr>
            <tr>
              <td data-label="Item">Customers counted by agency</td>
              <td data-label="70 percent federal">Seven</td>
              <td data-label="35 percent federal">Seven</td>
            </tr>
            <tr>
              <td data-label="Item">Customers counted by level of government</td>
              <td data-label="70 percent federal">
                Federal at 70 percent, state at 20, two counties at 5 each
              </td>
              <td data-label="35 percent federal">
                Federal at 35 percent, rest spread across state and local
              </td>
            </tr>
            <tr>
              <td data-label="Item">
                Extra cash tied up if federal payments slip two months
              </td>
              <td data-label="70 percent federal">About $580,000</td>
              <td data-label="35 percent federal">About $290,000</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Add this stress number on top of your normal gap.{" "}
        <em>
          &quot;Every new award adds cost days before it adds collected cash.&quot;
        </em>{" "}
        That is the everyday gap. Size it with the method in our{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          government contractor cash flow gap
        </Link>{" "}
        post. Then add the stress number on top.
      </p>
      <p>
        A second customer on a different calendar can help. It still has its own
        clock.{" "}
        <em>&quot;State and local buyers each set their own timing.&quot;</em> Our
        reading: a state or county slowdown likely does not line up with a federal
        one. The calendars are not the same. The slips may not land in the same
        month.
      </p>
      <p>
        Interest for late payment may apply on a proper invoice. It does not fund
        the gap while you wait. You still need cash in the meantime. Interest does
        not fill the hole. We covered those rules in our{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws
        </Link>{" "}
        post.
      </p>
      <h2
        id={H["Is customer concentration a timing problem or a growth problem?"]}
      >
        Is customer concentration a timing problem or a growth problem?
      </h2>
      <p>
        Both, and they need different money. The cash tied up when your biggest
        payer slows is a timing problem on signed work. The concentration itself is
        a growth problem. The fix is winning customers on other budget calendars,
        which takes years of sales and delivery work.
      </p>
      <p>
        The test for the first part is simple.{" "}
        <em>
          &quot;If the cash leaves to deliver an already signed contract and
          returns when the agency pays, you have a timing problem.&quot;
        </em>{" "}
        The cash goes out. Then it comes back. That is timing. Fund that gap as
        timing. We set that test out in our{" "}
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          working capital vs growth capital
        </Link>{" "}
        post.
      </p>
      <p>
        The second part is not a payment gap. It is a multi year plan. You sell and
        deliver to other states, counties, and cities. That takes time. It is not a
        short cash bind.{" "}
        <em>
          &quot;Use growth capital if the need is a multi year investment, not a
          payment gap.&quot;
        </em>
      </p>
      <p>
        In our reading, a 20 percent grower can still get more concentrated. That
        happens if it adds only more agencies at the same level of government.
        That grows the book. It does not grow resilience. New agencies at the same
        level still share one budget process. They still move as one book.
      </p>
      <h2
        id={H["How should you fund the gap when one government customer dominates?"]}
      >
        How should you fund the gap when one government customer dominates?
      </h2>
      <p>
        Split it. Use a timing tool sized to a slowdown at your biggest payer for
        the gap on signed work. Shrink the gap with the payment terms your contracts
        allow. Use growth capital for the sales and delivery capacity to win
        customers at other levels of government.
      </p>
      <p>
        Financing the contract is normally your job. The agency will not cover a
        slowdown as a matter of course. In the FAR&apos;s rules on contract
        financing for purchases other than commercial ones, there is a set order.
        The contracting officer must consider an{" "}
        <em>
          &quot;order of preference when a contractor requests contract
          financing&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/32.106">FAR 32.106</ExtLink>
        ) First on that list is{" "}
        <em>&quot;Private financing without Government guarantee.&quot;</em> You
        fund the work first. The same part tells the officer to{" "}
        <em>
          &quot;Provide Government financing only to the extent actually needed for
          prompt and efficient performance, considering the availability of
          private financing&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/32.104">FAR 32.104</ExtLink>
        ) It is not the default plan.
      </p>
      <p>
        Use a{" "}
        <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
          revolving line of credit
        </Link>{" "}
        if your biggest payer&apos;s slowdowns repeat. Use it when the gap opens and
        closes as receivables turn.
      </p>
      <p>
        Use an{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          assignment of contract payments
        </Link>{" "}
        if a financing provider needs to be paid directly by the agency on a signed
        federal contract.
      </p>
      <p>
        Shrink the gap first where the contract allows it. Some software contracts
        with government buyers allow{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront annual billing
        </Link>
        . Some build work can be billed on{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          payment milestones
        </Link>
        . Ask for those payment terms in the contract.
      </p>
      <p>
        Use growth capital if the real problem is concentration. That means the bid
        team, sales, and delivery capacity to win state and local customers on
        different calendars. That is a growth plan. Fund it as growth. We mapped
        that choice in our{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>{" "}
        post.
      </p>
      <TableWrap caption="Timing or growth tools">
        <table>
          <thead>
            <tr>
              <th>If you have</th>
              <th>It is likely</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="If you have">
                Signed work at your biggest payer whose payments slow, then catch up
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                A revolving line of credit sized to the stress number, or loans with
                bullet payments for a one time slowdown
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A financing provider that needs to be paid directly by the agency on
                a signed federal contract
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Assignment of contract payments</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Contracts that allow upfront annual billing or implementation
                milestones
              </td>
              <td data-label="It is likely">A shorter gap</td>
              <td data-label="Use">
                Ask for those payment terms in the contract
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                Most revenue from one level of government
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">
                Growth capital for sales and delivery capacity on other budget
                calendars
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2
        id={
          H[
            "What should you do this quarter if one customer is most of your revenue?"
          ]
        }
      >
        What should you do this quarter if one customer is most of your revenue?
      </h2>
      <p>
        Recount your customers by level of government and find your biggest one.
        Read those contracts for funding clauses and fiscal year lines. Then size
        the gap a slowdown would open. Line up a timing tool for it. Plan the
        growth that brings the share down. Do the count first.
      </p>
      <ol>
        <li>
          Recount revenue by level of government. Count the federal government,
          each state government, and each local government (a county or
          municipality).
        </li>
        <li>
          For your biggest customer, make a short list. Note contracts that carry
          an Availability of Funds clause. That clause is used when a contract is
          awarded before its funds are available, and only if it is in the
          contract. Note contracts that cross a fiscal year with a funding out
          clause. In Texas, that clause is a required term for state agency
          contracts whose term crosses a fiscal year. Texas agencies may not incur
          obligations past amounts lawfully appropriated over the course of a
          biennium. Note contracts that come up for renewal.
        </li>
        <li>
          Multiply that customer&apos;s monthly billing by the months its payments
          could slip. That is your stress number. In our example, a two month
          federal slip at 70 percent of revenue ties up about $580,000.
        </li>
        <li>
          Arrange a timing tool sized to the stress number before you need it. Do
          this ahead of the slowdown. Have the tool in place first.
        </li>
        <li>
          Set a growth plan to win customers on other budget calendars, and fund it
          as growth.
        </li>
      </ol>
      <p>
        Our view: count customers by level of government, not by agency. Size a
        timing tool to a slowdown at your biggest payer, before the slowdown, not
        after. Concentration itself is a growth problem. Fund the work of winning
        customers on other budget calendars with growth capital. Keep the base of
        the business from depending on a single customer&apos;s calendar.
      </p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug}`}>
            Government contract renewal lapse payment
          </Link>
        </li>
        <li>
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Upfront annual billing for government SaaS
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt payment laws for GovTech software vendors
          </Link>
        </li>
      </ul>

      <p>
        <strong>Your next step:</strong> If a slowdown at your biggest government
        customer would tie up cash you need to grow,{" "}
        <Link href="/contact/founder">
          talk with us about financing your growth
        </Link>
        .
      </p>

      <p>
        <em>
          This post is general education, not financial, legal, accounting, or tax
          advice.
        </em>
      </p>

      
      <FounderCtaBlock position="bottom" postSlug={GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_POST.slug} />

<h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>

      <p>
        Lambda Capital provides growth capital to profitable software companies in
        GovTech and other vertical markets. We take a patient approach and invest
        for the long term.
      </p>
      <p>
        <Link href="/contact">Contact Lambda Capital</Link>
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}