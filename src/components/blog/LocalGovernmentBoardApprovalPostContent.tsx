import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_FAQ,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_HEADINGS,
  PROMPT_PAYMENT_POST,
  PURCHASE_CARD_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  LOCAL_GOVERNMENT_BOARD_APPROVAL_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function LocalGovernmentBoardApprovalPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Many local customers pay on a meeting calendar. An official checks your
        invoice, then a council or board approves the bills at a public meeting.
        Miss the cutoff and you can wait a full cycle. Learn each customer&apos;s
        cutoff, ask whether they pay before approval, and treat what remains as a
        timing problem, not a growth problem.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a software company whose county invoice is signed one day too
        late. Nothing is wrong with the invoice. It simply missed the list for
        the next council meeting, so it waits for the one after. Then it
        happens again next month.
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue that
          sell to cities, counties, districts and other local customers.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Some states let a council pay first and approve later. Washington is
            one example. Ask your customer if it does.
          </li>
          <li>
            In Minnesota, a board that meets less than monthly gets a longer
            default deadline when the contract is silent.
          </li>
          <li>
            A calendar delay has a known end. Fix the misses you can, and fund
            only the dated wait that remains.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Many cities, counties and districts approve bills at a public meeting.
        An auditing officer checks your invoice, then the council or board
        approves the claims list. If your invoice misses the cutoff, it waits
        for the next meeting. Some states let councils pay first and approve
        later. Ask your customer&apos;s finance office for its cutoff and its
        meeting calendar.
      </p>

      <p>
        This is not true of every local government. Rules differ by state and by
        customer. Washington and Minnesota are the examples here.
      </p>

      <h3>A few words you will hear</h3>

      <TableWrap caption="A few words you will hear">
        <table>
          <caption>A few words you will hear</caption>
          <thead>
            <tr>
              <th>Word</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Word">Claim</td>
              <td data-label="What it means">
                The local word for a bill it owes, such as your invoice
              </td>
            </tr>
            <tr>
              <td data-label="Word">Auditing officer</td>
              <td data-label="What it means">
                The official who checks that a claim is correct and due
              </td>
            </tr>
            <tr>
              <td data-label="Word">Claims list</td>
              <td data-label="What it means">
                The batch of bills a council or board approves at a meeting
              </td>
            </tr>
            <tr>
              <td data-label="Word">Cutoff</td>
              <td data-label="What it means">
                The last day an approved invoice can join the next list
              </td>
            </tr>
            <tr>
              <td data-label="Word">Warrant</td>
              <td data-label="What it means">
                A government check or payment order
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["How a local bill gets paid"]}>
        How a local bill gets paid
      </h2>

      <p>
        The path can run like this. You send the invoice. The program office
        signs off. The auditing officer checks it. It joins the claims list. The
        council or board approves the list. Then the customer pays by warrant,
        check or electronic payment.
      </p>

      <p>
        Washington&apos;s State Auditor puts the first step plainly:{" "}
        <em>
          &quot;Chapter 42.24 RCW requires the auditing officer of a municipality
          to audit all claims against the municipality prior to payment and
          certify that claims are just, true and unpaid.&quot;
        </em>{" "}
        (
        <ExtLink href="https://sao.wa.gov/bars-annual-filing/bars-cash-manual/accounting/expenditures/voucher-certification-and-approval">
          Washington State Auditor, BARS Cash Manual 3.8.5
        </ExtLink>
        )
      </p>

      <p>
        The same manual says the approval should be recorded in the meeting
        minutes. Claims include payments made by warrant, check or electronic
        payment.
      </p>

      <p>
        Why do it this way? The likely reason is control. A vote at a public
        meeting puts payments of public money on the record. The meeting is a
        safeguard, and it sets the pace.
      </p>

      <p>
        A clean invoice still matters. If the invoice is wrong, it can miss the
        cutoff no matter how the calendar falls. Our post on{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          government invoice acceptance
        </Link>{" "}
        covers what makes an invoice proper.
      </p>

      <h2 id={H["Pay first, approve later: the Washington example"]}>
        Pay first, approve later: the Washington example
      </h2>

      <p>
        Washington lets a council pay some bills before it approves them. The
        State Auditor says:{" "}
        <em>
          &quot;The municipality&apos;s legislative body may authorize the
          procedure for issuing warrants, checks, and/or electronic payments
          before the legislative body approves claims.&quot;
        </em>
      </p>

      <p>
        The council still votes on those payments later:{" "}
        <em>
          &quot;The legislative body must review and approve the claims paid at
          its next regularly scheduled public meeting (within one month of
          issuance for cities and towns).&quot;
        </em>{" "}
        (
        <ExtLink href="https://sao.wa.gov/bars-annual-filing/bars-cash-manual/accounting/expenditures/voucher-certification-and-approval">
          Washington State Auditor, BARS Cash Manual 3.8.5
        </ExtLink>
        )
      </p>

      <p>
        There is a cost. A State Auditor blog post says:{" "}
        <em>
          &quot;If your government pays bills before governing body approval,
          then you must bond your designated auditing officer and the person
          authorized to sign the checks or warrants&quot;
        </em>{" "}
        (
        <ExtLink href="https://sao.wa.gov/the-audit-connection-blog/2021/protect-yourself-against-losses-consider-bonding-today">
          Washington State Auditor blog
        </ExtLink>
        ). The manual sets that bond at $50,000 or more, and it requires internal
        control policies.
      </p>

      <p>
        So why would a council not use it? The likely reasons: the bond and the
        policies take time and money, and some boards want to see every bill
        before it is paid. A council can also keep certain kinds or amounts of
        claims for review first, under the manual.
      </p>

      <p>
        The law allows this. It does not require it. So ask your customer:{" "}
        <em>do you pay before approval, and does my invoice qualify?</em>
      </p>

      <h2
        id={
          H[
            "When the law ties the deadline to the meeting calendar: the Minnesota example"
          ]
        }
      >
        When the law ties the deadline to the meeting calendar: the Minnesota
        example
      </h2>

      <p>
        Minnesota&apos;s local prompt payment law links the default deadline to
        how often the board meets. For boards that meet at least monthly:{" "}
        <em>
          &quot;For municipalities who have governing boards which have
          regularly scheduled meetings at least once a month, the standard
          payment period is defined as within 35 days of the date of
          receipt.&quot;
        </em>
      </p>

      <p>
        For boards that meet less often:{" "}
        <em>
          &quot;For municipalities whose governing boards do not regularly
          meet at least once a month, the standard payment period is defined as
          45 days after receipt of the goods or services or the invoice for the
          goods or services, whichever is later.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.revisor.mn.gov/statutes/cite/471.425">
          Minnesota Statutes, section 471.425
        </ExtLink>
        )
      </p>

      <p>
        These periods apply only when the contract has no payment terms. If your
        contract sets terms, those govern. The same law says that if an invoice
        is wrong, the local government must tell you within ten days of receipt.
      </p>

      <p>
        Missing a cutoff does not make your invoice late by itself. The deadline
        comes from your contract and state law. For when interest applies, see
        our post on{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws
        </Link>
        . Other states differ, so check your state and your contract.
      </p>

      <h2 id={H["The problem: the invoice that missed the meeting"]}>
        The problem: the invoice that missed the meeting
      </h2>

      <p>
        Our CEO runs a $5M software company. This is an illustration, not a real
        company. Its customers include a Washington county and two Minnesota
        towns.
      </p>

      <p>
        The county council meets on the second and fourth Tuesday. Its claims
        cutoff is the Wednesday before each meeting. A $150,000 quarterly invoice
        gets program office sign off on Thursday, one day after the cutoff. It
        waits for the next meeting, at least 14 extra days.
      </p>

      <p>
        This happens about three times a quarter. The board suggests raising a
        growth round to get ahead of receivables. The likely reason: more cash
        in the bank feels like a fix for every gap.
      </p>

      <p>
        <em>Table 1: The missed cutoff, illustrative</em>
      </p>

      <TableWrap caption="The missed cutoff, illustrative">
        <table>
          <caption>The missed cutoff, illustrative</caption>
          <thead>
            <tr>
              <th>Step</th>
              <th>On time</th>
              <th>One day late</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Step">Program office sign off</td>
              <td data-label="On time">Tuesday</td>
              <td data-label="One day late">Thursday</td>
            </tr>
            <tr>
              <td data-label="Step">Claims cutoff</td>
              <td data-label="On time">Wednesday</td>
              <td data-label="One day late">Missed</td>
            </tr>
            <tr>
              <td data-label="Step">Council meeting</td>
              <td data-label="On time">Following Tuesday</td>
              <td data-label="One day late">At least two weeks later</td>
            </tr>
            <tr>
              <td data-label="Step">Extra days waiting</td>
              <td data-label="On time">0</td>
              <td data-label="One day late">At least 14</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        It is at least 14 days, not always 14. In a month with five Tuesdays,
        the gap from the fourth Tuesday to the next second Tuesday is 21 days.
      </p>

      <h3>Three choices</h3>

      <ol>
        <li>
          Raise growth capital, and let the calendar keep setting the pay date.
        </li>
        <li>Ask the county to pay faster on each invoice as it comes.</li>
        <li>
          Learn each customer&apos;s calendar, time invoices to the cutoff, ask
          about pay before approval, and fund only the dated wait that remains
          with a tool built for timing.
        </li>
      </ol>

      <p>
        Our view: a meeting calendar delay is a timing problem with a known end,
        so fix the cutoff misses, fund only the dated wait that remains, and keep
        growth capital for growth.
      </p>

      <h2 id={H["The decision: choice 3"]}>The decision: choice 3</h2>

      <p>
        The CEO picks choice 3 and keeps growth capital for growth.
      </p>

      <h3>Why it fits</h3>

      <ul>
        <li>
          The delay has a schedule. A schedule is a timing problem with a known
          end.
        </li>
        <li>
          Washington allows pay before approval. So the CEO asks whether the
          county uses it. The county does not. It likely has not set up the bond
          and the policies.
        </li>
        <li>
          The misses are fixable. Invoices now go out five days before each
          cutoff, with every field the auditing officer checks. That likely
          removes most of the cutoff misses.
        </li>
        <li>
          Minnesota has a default. One town board meets less than monthly. With
          no payment terms in the contract, its default is 45 days, not 35. At
          renewal, the CEO asks the town to put a payment term in the contract.
        </li>
        <li>
          Growth capital is built for growth. Using it to cover a calendar leaves
          the calendar problem in place, and the misses keep coming.
        </li>
      </ul>

      <h2 id={H["A meeting calendar routine (agency facing)"]}>
        A meeting calendar routine (agency facing)
      </h2>

      <ol>
        <li>
          For each local customer, ask the finance office for its meeting
          calendar and claims cutoff.
        </li>
        <li>
          Ask whether it pays before approval, and for which kinds or amounts of
          claims.
        </li>
        <li>
          Put every cutoff in your billing calendar. Send invoices a few days
          before it, with every field the customer asks for.
        </li>
        <li>Confirm the program office has signed off before the cutoff.</li>
        <li>At renewal, ask that the contract state payment terms.</li>
        <li>
          Record the expected pay date in your cash forecast: the meeting date
          plus the customer&apos;s payment run.
        </li>
      </ol>

      <h2 id={H["Lesson: find out whose delay it is, and when it ends"]}>
        Lesson: find out whose delay it is, and when it ends
      </h2>

      <p>
        Our post on acceptance put it this way:{" "}
        <em>
          &quot;before you finance a payment delay, find out whose delay it
          is.&quot;
        </em>{" "}
        For local customers, add one more question: when does it end? If the
        answer is the next meeting, you have a date. Fix the misses. Fund the
        dated wait with timing tools. Raise growth capital for growth.
      </p>

      <h2 id={H["Timing or growth? Use X if you have Y problem"]}>
        Timing or growth? Use X if you have Y problem
      </h2>

      <p>
        Our post on{" "}
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          working capital vs growth capital
        </Link>{" "}
        says:{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing
          problem more often than a growth problem.&quot;
        </em>
      </p>

      <p>
        Size the gap first.{" "}
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em> (
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        )
      </p>

      <ul>
        <li>
          Use the meeting calendar routine if you have invoices that miss
          cutoffs.
        </li>
        <li>
          Use a{" "}
          <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>purchase card</Link>{" "}
          if you have small orders and your customer pays by card. Ask whether
          card payments follow the same meeting.
        </li>
        <li>
          Use a{" "}
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            revolving line of credit
          </Link>{" "}
          if you have recurring dated waits across many local invoices.
        </li>
        <li>
          Use{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            loans with bullet payments
          </Link>{" "}
          if you have a large signed contract with a long, dated wait and want to
          repay principal when contract cash arrives.
        </li>
        <li>
          Use growth capital if you have a growth problem: demand you cannot
          serve without more people, product or reach.
        </li>
      </ul>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={LOCAL_GOVERNMENT_BOARD_APPROVAL_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            Government invoice acceptance
          </Link>
        </li>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt payment laws for GovTech vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>
            Can the government pay your software invoice by purchase card?
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            How do I check when the government will pay my invoice?
          </Link>
        </li>
      </ul>

      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>

      <p>
        Lambda Capital provides growth capital to profitable software companies
        in GovTech and other vertical markets. We take a patient approach and
        invest for the long term.
      </p>
      <p>
        <Link href="/contact">Contact Lambda Capital</Link>
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
