import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {ASSIGNMENT_OF_CLAIMS_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_FAQ,
  GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_HEADINGS,
  GOVERNMENT_STOP_WORK_ORDER_PAYMENT_POST,
  GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_POST,
  GOVERNMENT_VENDOR_REGISTRATION_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST, GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_POST} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentContractBidProtestCashGapPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Not until the protest is resolved, the work starts, and the first invoice
        is paid. A federal protest that reaches the agency through GAO within 10
        days of award, or 5 days after a required debriefing, whichever is later,
        generally pauses the contract unless the agency overrides. GAO has up to 100
        days to decide. Treat award day as a conditional start. Fund the ramp after
        the pause as a timing problem. Decide about payroll during the pause on
        purpose.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder runs a GovTech software company with $6,000,000 in annual revenue.
        That figure is our example. The company wins a two year, $3,000,000 federal
        contract for a records management platform, billed monthly in arrears at
        about $125,000 a month. Those figures are our example too. The CEO hires
        five people, about $70,000 a month, the week of award. On day 9 a losing
        offeror files at GAO. The agency suspends performance.
      </p>
      <p>
        The reason that frame fails is simple. The award date is not the start date.
        Cash spent during the pause buys no work. It may not come back if the protest
        is sustained. Cash spent after the pause lifts, on signed work, comes back
        when the agency pays. Only the second gap is a timing problem. The first gap
        is a bet. Size both. Fund each on purpose.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            A timely federal protest at GAO generally pauses the award unless the
            agency overrides in writing. GAO has up to 100 days to decide. Not every
            protest stops work.
          </li>
          <li>
            California holds state IT awards while a timely protest is pending. Texas
            agencies follow their own protest rules.
          </li>
          <li>
            Make offers with start dates tied to the end of the protest window and
            any pause.
          </li>
          <li>
            Fund the ramp after the pause as a timing problem. Treat payroll during
            the pause as a bet you choose. Fund the capacity to win more awards with
            growth capital.
          </li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        Later than you planned. A timely federal protest at GAO makes the contracting
        officer suspend performance or terminate the award unless the agency
        overrides in writing, and GAO has up to 100 days to decide. California holds
        state IT awards while a timely protest is pending. Your first payment comes
        after the pause lifts, the work starts, and the invoice is paid.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Bid protest: a formal challenge by a losing bidder, or a would be bidder,
          to how a contract was competed or awarded.
        </li>
        <li>
          GAO (Government Accountability Office): the federal office that decides
          many federal bid protests.
        </li>
        <li>
          Stay (pause): the period when the agency may not let the winner perform,
          or may not award, while a protest is pending.
        </li>
        <li>Override: a written agency finding that lets performance continue despite the protest.</li>
        <li>
          Equitable adjustment: a change to the contract&apos;s price or schedule to
          cover added time or cost the government caused.
        </li>
        <li>
          Timing problem vs growth problem: a timing problem is cash you will collect
          on signed work that arrives late. A growth problem is cash you need to build
          or sell more. Payroll carried through a pause with an unknown outcome is
          neither. It is a bet.
        </li>
      </ul>
      <h2 id={H["Can a competitor's protest stop work on a contract you already won?"]}>
        Can a competitor&apos;s protest stop work on a contract you already won?
      </h2>
      <p>
        Yes, if it is filed in time. For a federal award, a protest that reaches the
        agency through GAO within 10 days after award, or within 5 days after a
        required debriefing, whichever is later, means the contracting officer must
        suspend performance or terminate the award. The agency can let work continue
        only with a written override.
      </p>
      <p>Not every protest stops work. The pause has a clock. A late protest generally does not force a pause.</p>
      <p>
        The trigger is notice{" "}
        <em>
          &quot;within 10 days after contract award or within 5 days after a
          debriefing date offered to the protester&quot;
        </em>
        , whichever is later. (
        <ExtLink href="https://www.acquisition.gov/far/33.104">FAR 33.104</ExtLink>) The
        debriefing in that rule is a required one offered to the protester.
      </p>
      <p>
        When that trigger is met,{" "}
        <em>
          &quot;the contracting officer shall immediately suspend performance or
          terminate the awarded contract&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.104">FAR 33.104</ExtLink>).
      </p>
      <p>
        The agency may still let work go on. The head of the contracting activity may
        override in writing, after GAO is told of the finding. One ground is that{" "}
        <em>
          &quot;Contract performance will be in the best interests of the United
          States&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.104">FAR 33.104</ExtLink>). The
        other is that{" "}
        <em>
          &quot;Urgent and compelling circumstances that significantly affect the
          interests of the United States will not permit waiting for the GAO&apos;s
          decision.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.104">FAR 33.104</ExtLink>) How
        often that happens is not in these sources.
      </p>
      <p>
        If the protest arrives later,{" "}
        <em>
          &quot;the contracting officer need not suspend contract performance or
          terminate the awarded contract unless the contracting officer believes that
          an award may be invalidated and a delay in receiving the supplies or
          services is not prejudicial to the Government&apos;s interest.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.104">FAR 33.104</ExtLink>)
      </p>
      <p>
        A protest filed with the agency itself has its own pause on the same trigger.
        When that trigger is met,{" "}
        <em>
          &quot;the contracting officer shall immediately suspend performance,
          pending resolution of the protest within the agency, including any review by
          an independent higher level official&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.103">FAR 33.103</ExtLink>).
        Before award,{" "}
        <em>
          &quot;a contract may not be awarded, pending agency resolution of the
          protest&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.103">FAR 33.103</ExtLink>).
      </p>
      <p>
        Protests of task orders under IDIQ contracts are limited and follow separate
        rules. (
        <ExtLink href="https://www.acquisition.gov/far/16.505">FAR 16.505</ExtLink>)
      </p>
      <h2 id={H["How long can a bid protest delay your first payment?"]}>
        How long can a bid protest delay your first payment?
      </h2>
      <p>
        At GAO, up to 100 days, or 65 under the express option, before you even start
        the normal ramp to a first invoice. An agency level protest aims for 35 days,
        and it can be followed by a GAO protest. Many protests end sooner, but plan
        for the longer case.
      </p>
      <p>
        <em>
          &quot;GAO issues its recommendation on a protest within 100 days from the
          date of filing of the protest with the GAO, or within 65 days under the
          express option.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.104">FAR 33.104</ExtLink>)
      </p>
      <p>
        <em>&quot;GAO shall issue a decision on a protest within 100 days after it is filed.&quot;</em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-4/part-21/section-21.9">
          4 CFR 21.9
        </ExtLink>
        ) Under the express option,{" "}
        <em>&quot;GAO shall issue a decision on a protest within 65 days after it is filed.&quot;</em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-4/part-21/section-21.9">
          4 CFR 21.9
        </ExtLink>
        )
      </p>
      <p>
        Those clocks are limits, not typical lengths. A protest can be withdrawn,
        dismissed, or resolved by agency corrective action sooner. Plan for up to 100
        days. Do not treat 100 days as the norm.
      </p>
      <p>
        <em>
          &quot;Agencies shall make their best efforts to resolve agency protests
          within 35 days after the protest is filed.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.103">FAR 33.103</ExtLink>)
      </p>
      <p>
        <em>
          &quot;Pursuing an agency protest does not extend the time for obtaining a
          stay at GAO.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.103">FAR 33.103</ExtLink>)
      </p>
      <p>
        Our reading: an agency protest followed by a GAO protest can make the pause
        longer. The first clock does not add days to the second stay. The two can
        still run in a row.
      </p>
      <p>
        <em>
          &quot;Every new award adds cost days before it adds collected cash.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        ) The pause adds days before any of the usual gap begins. Size that later gap
        with the method in that post.
      </p>
      <p>
        Once you invoice, the usual payment clock applies. The pause is not late
        payment. See{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech software vendors
        </Link>
        .
      </p>
      <TableWrap caption="Protest pause and decision clocks">
        <table>
          <thead>
            <tr>
              <th>Where</th>
              <th>Deadline that triggers the pause</th>
              <th>What pauses</th>
              <th>Decision clock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Where">Federal, protest at GAO</td>
              <td data-label="Deadline that triggers the pause">
                Within 10 days after award, or 5 days after a required debriefing,
                whichever is later (FAR 33.104)
              </td>
              <td data-label="What pauses">
                Performance suspended or award terminated, unless the agency overrides
                in writing (FAR 33.104)
              </td>
              <td data-label="Decision clock">
                Up to 100 days; 65 under the express option (FAR 33.104, 4 CFR 21.9)
              </td>
            </tr>
            <tr>
              <td data-label="Where">Federal, protest at the agency</td>
              <td data-label="Deadline that triggers the pause">
                Same 10 day or 5 day trigger (FAR 33.103)
              </td>
              <td data-label="What pauses">
                Performance suspended unless a written justification is approved above
                the contracting officer (FAR 33.103)
              </td>
              <td data-label="Decision clock">Best efforts within 35 days (FAR 33.103)</td>
            </tr>
            <tr>
              <td data-label="Where">California, state IT purchases</td>
              <td data-label="Deadline that triggers the pause">
                No later than five working days after the intent to award (PCC 12102.2)
              </td>
              <td data-label="What pauses">
                Award held until the protest is withdrawn or decided (PCC 12102.2)
              </td>
              <td data-label="Decision clock">Not set in the section</td>
            </tr>
            <tr>
              <td data-label="Where">Texas, state agencies</td>
              <td data-label="Deadline that triggers the pause">
                Set by each agency&apos;s rules (Texas Comptroller guide)
              </td>
              <td data-label="What pauses">
                Set by each agency&apos;s rules
              </td>
              <td data-label="Decision clock">Set by each agency&apos;s rules</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["Do state contracts pause for protests too?"]}>
        Do state contracts pause for protests too?
      </h2>
      <p>
        Often, but the rules are each state&apos;s own. California requires IT protests
        within five working days of the intent to award and holds the award until the
        protest is withdrawn or decided. Texas leaves the details to each agency&apos;s
        protest rules, and local governments set their own.
      </p>
      <p>
        Read the solicitation&apos;s protest section. Look for the deadline. Look for
        whether award or performance pauses.
      </p>
      <p>
        <em>
          &quot;The procedures shall provide that protests must be filed no later than
          five working days after the issuance of an intent to award.&quot;
        </em>{" "}
        (
        <ExtLink href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PCC&sectionNum=12102.2">
          California Public Contract Code section 12102.2
        </ExtLink>
        )
      </p>
      <p>
        Then{" "}
        <em>
          &quot;the contract shall not be awarded until either the protest has been
          withdrawn or the Department of General Services has made a final decision as
          to the action to be taken relating to the protest.&quot;
        </em>{" "}
        (
        <ExtLink href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PCC&sectionNum=12102.2">
          California Public Contract Code section 12102.2
        </ExtLink>
        )
      </p>
      <p>
        That rule is for California state information technology acquisitions. It is
        not a local government rule. The section sets no decision deadline. Our
        reading: California holds the award itself, so you may not have a signed
        contract yet. The gap can start earlier.
      </p>
      <p>
        <em>
          &quot;Each agency must adopt rules that provide an unsuccessful vendor with
          the opportunity to protest procurement actions.&quot;
        </em>{" "}
        (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          the Texas guide
        </ExtLink>
        )
      </p>
      <p>
        <em>
          &quot;When a protest is received, the agency must follow its rules to assess
          the merits of the vendor&apos;s protest and correct any unlawful procurement
          actions.&quot;
        </em>{" "}
        (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          the Texas guide
        </ExtLink>
        )
      </p>
      <p>
        <em>&quot;Agencies should never assume that protests are frivolous&quot;</em> (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          the Texas Comptroller Procurement and Contract Management Guide, Version 4.0
        </ExtLink>
        ). Agencies take protests seriously. Plan for the time. These pages do not
        state a Texas deadline or a Texas stay rule. Local governments and other states
        vary.
      </p>
      <h2 id={H["Should you hire your delivery team before the protest window closes?"]}>
        Should you hire your delivery team before the protest window closes?
      </h2>
      <p>
        Make offers, but tie start dates to the end of the protest window and any
        pause. Payroll spent during a pause buys no work and may not come back if the
        protest is sustained. Keep the bid team, and plan the delivery ramp for the
        day the pause lifts.
      </p>
      <p>
        Consider our example. A software company with $6,000,000 in annual revenue wins
        a two year, $3,000,000 federal contract for a records management platform,
        billed monthly in arrears at about $125,000 a month. This is an example, not a
        real company. The CEO can hire five people at about $70,000 a month the week of
        award. That is Plan A. Or the CEO can make signed offers with start dates tied
        to the end of the protest window and any stay, and keep the bid team. That is
        Plan B.
      </p>
      <p>
        In this example, a losing offeror files at GAO on day 9. The agency suspends
        performance. The protest runs the full 100 days and is denied. Work starts
        about month 4. The first invoice goes out at the end of the first month of work
        and is paid about 30 days later, about month 6. All of those figures are our
        example&apos;s. They are not typical, required, or a forecast of protest length
        or outcome.
      </p>
      <p>
        Under Plan A, about $390,000 goes out before the first payment. About $250,000
        of that is payroll carried during the pause, with no work allowed and the
        outcome unknown. Under Plan B, about $140,000 goes out between the real start
        and the first payment. That second gap is on signed, unpaused work.
      </p>
      <TableWrap caption="Plan A vs Plan B example">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Plan A: hire on award day</th>
              <th>Plan B: hire when the pause lifts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Award (our example)</td>
              <td data-label="Plan A: hire on award day">
                Month 0, two years, $3,000,000, billed monthly in arrears
              </td>
              <td data-label="Plan B: hire when the pause lifts">Same</td>
            </tr>
            <tr>
              <td data-label="Item">Protest</td>
              <td data-label="Plan A: hire on award day">
                GAO protest on day 9; performance suspended; denied at about day 100
              </td>
              <td data-label="Plan B: hire when the pause lifts">Same</td>
            </tr>
            <tr>
              <td data-label="Item">Work starts</td>
              <td data-label="Plan A: hire on award day">About month 4</td>
              <td data-label="Plan B: hire when the pause lifts">About month 4</td>
            </tr>
            <tr>
              <td data-label="Item">First payment</td>
              <td data-label="Plan A: hire on award day">About month 6 (our example)</td>
              <td data-label="Plan B: hire when the pause lifts">
                About month 6 (our example)
              </td>
            </tr>
            <tr>
              <td data-label="Item">New team cost</td>
              <td data-label="Plan A: hire on award day">
                About $70,000 a month from month 0
              </td>
              <td data-label="Plan B: hire when the pause lifts">
                About $70,000 a month from month 4
              </td>
            </tr>
            <tr>
              <td data-label="Item">Cash out before the first payment</td>
              <td data-label="Plan A: hire on award day">About $390,000</td>
              <td data-label="Plan B: hire when the pause lifts">About $140,000</td>
            </tr>
            <tr>
              <td data-label="Item">Of that, spent during the pause</td>
              <td data-label="Plan A: hire on award day">About $250,000</td>
              <td data-label="Plan B: hire when the pause lifts">None</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        This is our example. Do the math for your own award. Make offers. Tie start
        dates to the window and the pause. Keep the bid team funded so you can win the
        next one.
      </p>
      <p>
        Use the pause to finish payment setup so the first invoice is not held for a
        second reason. See{" "}
        <Link href={`/blog/${GOVERNMENT_VENDOR_REGISTRATION_POST.slug}`}>
          government vendor registration and EFT payment
        </Link>
        .
      </p>
      <h2 id={H["Can you recover costs if a protest stops your work?"]}>
        Can you recover costs if a protest stops your work?
      </h2>
      <p>
        Sometimes, and only part. If your contract has the Protest after Award clause
        and a stop work order issues under it, you must minimize costs, and you can ask
        for an equitable adjustment for time or cost properly allocable to the work if
        you assert it within 30 days after the stoppage ends. People hired before any
        work began may not qualify.
      </p>
      <p>
        That last point is our reading. Recovery is not guaranteed. The clause applies
        only if it is in your contract.
      </p>
      <p>
        The clause lets the contracting officer{" "}
        <em>
          &quot;direct the Contractor to stop performance of the work called for by
          this contract&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.233-3">FAR 52.233-3</ExtLink>).
        You must then{" "}
        <em>
          &quot;take all reasonable steps to minimize the incurrence of costs
          allocable to the work covered by the order&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.233-3">FAR 52.233-3</ExtLink>).
      </p>
      <p>
        <em>
          &quot;The Contracting Officer shall make an equitable adjustment in the
          delivery schedule or contract price, or both&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.233-3">FAR 52.233-3</ExtLink>).
        That adjustment applies if the stoppage increases time or cost properly
        allocable to performance, and{" "}
        <em>
          &quot;The Contractor asserts its right to an adjustment within 30 days after
          the end of the period of work stoppage&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.233-3">FAR 52.233-3</ExtLink>).
      </p>
      <p>
        Ask the contracting officer for the written decision on whether performance
        continues.{" "}
        <em>
          &quot;The contracting officer also shall give written notice of the decision
          to the protester and other interested parties.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/33.104">FAR 33.104</ExtLink>)
      </p>
      <p>
        <em>
          &quot;The Government&apos;s rights to terminate this contract at any time are
          not affected by action taken under this clause.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.233-3">FAR 52.233-3</ExtLink>)
        If the work is later terminated for convenience after a sustained protest,
        reasonable costs resulting from a stop work order issued under that clause may
        count in the settlement. See{" "}
        <Link href={`/blog/${GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_POST.slug}`}>
          termination for convenience payment
        </Link>
        .
      </p>
      <p>
        A stop work order for the agency&apos;s own reasons follows a different clause.
        See{" "}
        <Link href={`/blog/${GOVERNMENT_STOP_WORK_ORDER_PAYMENT_POST.slug}`}>
          government stop work order payment
        </Link>
        . Talk to your counsel about the protest itself.
      </p>
      <h2 id={H["How should you fund the gap a protest creates?"]}>
        How should you fund the gap a protest creates?
      </h2>
      <p>
        Split it into three parts. The ramp from the real start to the first payment is
        a timing problem on signed work. Payroll carried through the pause is a bet on
        the outcome. The capacity to win and deliver enough awards that one protest does
        not stall you is growth.
      </p>
      <p>
        Use different money for each. Commercial financing is, as a rule, your job, not
        the agency&apos;s. The agency does not cover pause costs as a matter of course.
        The agency does not finance the ramp.
      </p>
      <p>
        <em>
          &quot;If the cash leaves to deliver an already signed contract and returns
          when the agency pays, you have a timing problem.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          Working capital vs growth capital for GovTech software
        </Link>
        )
      </p>
      <p>
        That line applies after the pause lifts, on signed work. Size the ramp to the
        first payment. Fund pause payroll from cash on hand or growth capital, as a
        decision you make on purpose, not with money sized for timing gaps.
      </p>
      <p>
        Use a revolving line of credit if awards keep arriving and the ramp gap repeats
        as receivables turn. See{" "}
        <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>a revolving line of credit</Link>
        . Use{" "}
        <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>loans with bullet payments</Link>{" "}
        if one signed contract has a ramp that ends in a known first payment. Use an
        assignment of contract payments if a financing provider needs to be paid
        directly by the agency on a signed federal contract once work is under way. See{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          the Assignment of Claims Act for GovTech software
        </Link>
        . Use growth capital if the real problem is the bid team, pipeline and delivery
        capacity to win more awards. Strategy hub:{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>
        .
      </p>
      <p>
        A long pause can push the start into a later part of the agency&apos;s fiscal
        year. See{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          the government fiscal year 2027 calendar
        </Link>
        . Once the pause lifts, ask whether the payment schedule can include
        implementation milestones so the first payment comes sooner. See{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          implementation milestones and holdbacks
        </Link>
        .
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
                A signed contract whose pause has lifted, with a ramp that ends in a
                known first payment
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                Loans with bullet payments sized to the ramp, or a revolving line of
                credit if awards keep arriving
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A financing provider that needs to be paid directly by the agency on a
                signed federal contract
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Assignment of contract payments</td>
            </tr>
            <tr>
              <td data-label="If you have">
                A team on payroll during a pause with an unknown outcome
              </td>
              <td data-label="It is likely">A bet, not a timing gap</td>
              <td data-label="Use">Cash on hand or growth capital, chosen on purpose</td>
            </tr>
            <tr>
              <td data-label="If you have">
                A bid team, pipeline and delivery capacity to win more awards
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["What should you do the week you win a government contract?"]}>
        What should you do the week you win a government contract?
      </h2>
      <p>
        Mark the protest window on the calendar and plan hiring around it. If a protest
        lands, get the agency&apos;s written decision on whether work is paused, and
        check for the Protest after Award clause. Then split the gap into timing, pause
        risk, and growth, and line up the right money for each.
      </p>
      <ol>
        <li>
          Note the protest deadline: 10 days after award, or 5 days after a required
          debriefing, whichever is later, for a federal award; five working days after
          intent to award for California state IT; the agency&apos;s own rules in Texas.
        </li>
        <li>Make offers with start dates tied to the end of the window and any pause.</li>
        <li>
          If a protest is filed, ask the contracting officer whether performance is
          suspended, the award terminated, or an override considered, and ask for the
          written notice. Keep the questions short and factual.
        </li>
        <li>
          If a stop work order issues under the Protest after Award clause, minimize
          costs, track them, and assert any adjustment within 30 days after the
          stoppage ends.
        </li>
        <li>
          Size the gap from the real start to the first payment and arrange a timing
          tool for it. Fund the capacity to win more awards as growth, and plan that
          capital before the next protest.
        </li>
      </ol>
      <p>
        Our view: treat award day as a conditional start. Tie start dates to the end of
        the protest window and any pause. Fund the ramp after the pause as a timing
        problem. Treat payroll during the pause as a bet you choose on purpose, from
        cash on hand or growth capital, not with money meant for timing gaps.
      </p>
      <p>
        Count the real start, not the award date. Then you can answer the cash question
        before the first invoice is late.
      </p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVERNMENT_STOP_WORK_ORDER_PAYMENT_POST.slug}`}>
            Government stop work order payment
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt payment laws for GovTech software vendors
          </Link>
        </li>
      </ul>

      <p>
        <em>
          This post is general education, not financial, legal, accounting, or tax
          advice.
        </em>
      </p>

      
      <FounderCtaBlock position="bottom" postSlug={GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_POST.slug} />

<h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>

      <p>
        Lambda Capital provides growth capital to profitable software companies in
        GovTech and other vertical markets. We take a patient approach and invest for
        the long term.
      </p>
      <p>
        <Link href="/contact">Contact Lambda Capital</Link>
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}