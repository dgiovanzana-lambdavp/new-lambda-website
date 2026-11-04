import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_FAQ,
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_HEADINGS,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GrantFundedGovernmentCustomersPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Many state and local customers pay software vendors with grant money.
        Often they pay you first and claim the money back later. The grant can
        decide what your invoice must show, whether it can be prepaid and when
        the customer must pay. Ask how each customer is paying you, bill the way
        the grant accepts, and treat the wait as a timing problem, not a growth
        problem.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a county contract that looks routine. Then the grants office
        calls. The grant will not pay back an annual invoice sent up front. Can
        you bill each quarter instead, after the work is done? The contract did
        not change. The way the county pays for it did.
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue that
          sell to states, cities, counties and districts.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Your customer still owes you on your contract terms, grant or no
            grant.
          </li>
          <li>
            Some grant programs will not pay back prepaid invoices. Ask before
            you bill.
          </li>
          <li>
            A grant also sets an end date by which your customer must pay what it
            owes.
          </li>
          <li>
            A grant schedule has known dates. Fix what you can, and fund only the
            dated wait that remains.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        It can, but your customer still owes you on your contract terms. Many
        grant funded customers pay you first, then claim the money back. Some
        grant programs will not reimburse prepaid invoices, so you may bill after
        service instead. Grants also set an end date by which the customer must
        pay. Ask your customer how it is paying you.
      </p>

      <p>
        This is not true of every customer or every grant. Rules differ by
        program and by state. Colorado and Kentucky are the examples here.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Pass through entity: the state agency that receives federal grant money
          and passes it on to cities, counties and districts.
        </li>
        <li>
          Subrecipient: the city, county or district that gets the money from the
          state. Here, your customer.
        </li>
        <li>
          Reimbursement basis: your customer pays you first, then asks the grant
          for its money back.
        </li>
        <li>
          Advance basis: the grant sends your customer cash before it pays its
          bills, timed to near term needs.
        </li>
        <li>
          Period of performance: the dates the grant covers. Work must happen
          inside them.
        </li>
        <li>
          Liquidate: pay what is owed. Grant rules set a deadline for this after
          the grant ends.
        </li>
        <li>
          Prepaid invoice: a bill for service not yet delivered, such as an
          annual subscription billed up front.
        </li>
      </ul>

      <h2 id={H["How a grant funded customer pays you"]}>
        How a grant funded customer pays you
      </h2>

      <p>
        The path often runs like this. You deliver. You invoice. Your customer
        pays you. Your customer files a claim with the state agency. The state
        pays your customer back.
      </p>

      <p>
        Colorado&apos;s transportation department says it plainly:{" "}
        <em>
          &quot;All expenditures must be paid by the subrecipient, including
          payments to contractors/ subcontractors/ subawardees, before they are
          submitted to CDOT for reimbursement.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.codot.gov/programs/grants/assets/2025-december-cdot-request-for-reimbursement-guidance-docx-1.pdf">
          Colorado Department of Transportation, reimbursement guidance
        </ExtLink>
        )
      </p>

      <p>
        So your customer fronts the cash. That does not change what it owes you.
        The federal grant rule says:{" "}
        <em>
          &quot;The recipient or subrecipient must make timely payments to
          contractors in accordance with the contract provisions.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-2/section-200.305">
          2 CFR 200.305
        </ExtLink>
        )
      </p>

      <p>
        The same rule gives your customer a clock of its own. When the grant pays
        by reimbursement, the federal agency or the state passing the money
        through must pay a request within 30 calendar days, unless it believes
        the request is improper. That clock is for your customer&apos;s money,
        not yours.
      </p>

      <p>
        Why does this matter to you? A customer that must front the cash often
        pays fastest on invoices it knows the grant will pay back. An invoice
        that does not fit the claim can sit while someone asks questions.
      </p>

      <p>
        A clean invoice matters here as much as anywhere. Our post on{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          government invoice acceptance
        </Link>{" "}
        covers what makes an invoice proper.
      </p>

      <h2
        id={
          H["What the grant can change about your invoice: the Kentucky example"]
        }
      >
        What the grant can change about your invoice: the Kentucky example
      </h2>

      <p>
        Kentucky&apos;s Justice and Public Safety Cabinet runs grants through its
        Grants Management Division. Its guide says:{" "}
        <em>
          &quot;Grants administered by GMD operate on a reimbursement
          basis.&quot;
        </em>{" "}
        (
        <ExtLink href="https://justice.ky.gov/Departments-Agencies/GMD/Documents/Resources/Cost%20Documentation%20and%20Financial%20Reporting%20Reference%20Guide%202.0%20%28October%202026%29.pdf">
          Kentucky Justice and Public Safety Cabinet, cost documentation guide
        </ExtLink>
        )
      </p>

      <p>
        It also sets a bar for your invoice:{" "}
        <em>
          &quot;Invoices must be complete when received from the provider of the
          service&quot;
        </em>
        . And it rules out some bills outright:{" "}
        <em>
          &quot;Quotes, bids, proposals, or prepaid invoices are not acceptable
          for reimbursement&quot;
        </em>
        .
      </p>

      <p>For contract services, the guide lists what an invoice must show:</p>

      <ul>
        <li>your name as the vendor and the invoice date;</li>
        <li>the dates you did the work, inside the grant period;</li>
        <li>a purchase order number and your invoice number;</li>
        <li>what you delivered, with price and quantity.</li>
      </ul>

      <p>
        Your customer files its claims each quarter, due within 30 days after the
        quarter ends.
      </p>

      <p>
        What does that mean for you? An annual subscription billed up front may
        not fit some grants. This is one state division&apos;s rule. Other
        programs may allow it. Our post on{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront payment for government SaaS
        </Link>{" "}
        covers annual billing in general.
      </p>

      <p>
        Colorado makes the same point from the other side. Its guide says a
        complete billing packet is what lets it pay back its subrecipients
        quickly.
      </p>

      <p>
        So ask your customer:{" "}
        <em>
          is this contract grant funded, and what must my invoice show?
        </em>
      </p>

      <h2 id={H["The grant end date: a deadline that works for you"]}>
        The grant end date: a deadline that works for you
      </h2>

      <p>
        Grants end. When they do, the money owed must be paid within a set window.
        The federal rule says:{" "}
        <em>
          &quot;The recipient must liquidate all financial obligations incurred
          under the Federal award no later than 120 calendar days after the
          conclusion of the period of performance.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-2/section-200.344">
          2 CFR 200.344
        </ExtLink>
        )
      </p>

      <p>
        Your customer is usually a subrecipient. It gets 90 days after its part
        of the grant ends, or an earlier date agreed with the state. Colorado
        also wants reimbursement requests within 60 days of the contract or
        funding end date, unless the contract says otherwise.
      </p>

      <p>
        What does that mean for you? Near the end of a grant, your customer has a
        hard reason to pay what it owes. It is not your legal right to be paid by
        then. Your contract and state law set that. But an invoice that lands
        after the window can create trouble for your customer and for you. Invoice
        right after each service period so nothing lands late.
      </p>

      <h2 id={H["The grant that changed the invoice"]}>
        The grant that changed the invoice
      </h2>

      <p>
        <strong>Problem:</strong> Our CEO runs a $6M software company. This is an
        illustration, not a real company. It signs a $240,000 a year contract
        with a county. The county pays with federal money passed through a state
        agency, on a reimbursement basis.
      </p>

      <p>
        The CEO sends the usual annual invoice up front. The county&apos;s grants
        office says the grant will not pay back a prepaid invoice. It asks for
        quarterly invoices, sent after each quarter, with service dates and the
        purchase order number.
      </p>

      <p>
        The first $60,000 now arrives around day 120 instead of day 30. The board
        suggests raising a growth round &quot;to cover the grant customers.&quot;
        The likely reason: more cash in the bank feels like a fix for every gap.
      </p>

      <p>
        <em>
          Table 1: Annual up front vs quarterly after service, illustrative
        </em>
      </p>

      <TableWrap caption="Table 1: Annual up front vs quarterly after service, illustrative">
        <table>
          <caption>
            Table 1: Annual up front vs quarterly after service, illustrative
          </caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Annual up front</th>
              <th scope="col">Quarterly after service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">Invoices a year</td>
              <td data-label="Annual up front">1 of $240,000</td>
              <td data-label="Quarterly after service">4 of $60,000</td>
            </tr>
            <tr>
              <td data-label="">First cash arrives</td>
              <td data-label="Annual up front">About day 30</td>
              <td data-label="Quarterly after service">About day 120</td>
            </tr>
            <tr>
              <td data-label="">Average day cash arrives</td>
              <td data-label="Annual up front">About day 30</td>
              <td data-label="Quarterly after service">About day 255</td>
            </tr>
            <tr>
              <td data-label="">Fits a grant with no prepaid invoices</td>
              <td data-label="Annual up front">No</td>
              <td data-label="Quarterly after service">Yes</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Our math assumes the county pays each invoice about 30 days after it is
        sent. Quarterly cash arrives near days 120, 210, 300 and 390.
      </p>

      <p>
        <strong>Choices:</strong> there are three paths.
      </p>

      <ol>
        <li>
          Raise growth capital and treat grant customers as slow by nature.
        </li>
        <li>Bill the way the grant needs and accept the delay with no plan.</li>
        <li>
          Learn each grant&apos;s rules, bill in the form the grant accepts, time
          each invoice to the claim cycle, watch the end date, and fund only the
          dated wait with a tool built for timing.
        </li>
      </ol>

      <p>
        <strong>Decision:</strong> Path 3.
      </p>

      <p>
        <strong>Why it fits:</strong>
      </p>

      <ul>
        <li>
          The county still owes the CEO on the contract terms. The federal rule
          says so.
        </li>
        <li>
          The county pays first and claims later. With thin cash, it likely pays
          faster when the invoice is complete and fits its claim.
        </li>
        <li>
          Quarterly billing after service is a known schedule. A schedule is a
          timing problem with a known end.
        </li>
        <li>
          Near the end of the grant, the county must pay what it owes within a
          set window.
        </li>
        <li>
          Growth capital is built for growth. Using it to cover a billing
          schedule likely leaves the schedule in place for every grant customer.
        </li>
      </ul>

      <p>
        <strong>Lesson:</strong> Ask how the customer is paying you before you
        send the first invoice, then bill the way the grant accepts.
      </p>

      <p>
        Our view: a grant schedule is a timing problem with known dates, so bill
        the way the grant accepts, fund only the dated wait, and keep growth
        capital for growth.
      </p>

      <p>
        Grants offices are not being difficult. Their rules protect public money
        and their own reimbursement. An invoice that fits their claim is often
        the fastest one to get paid.
      </p>

      <h2 id={H["A grant customer routine"]}>A grant customer routine</h2>

      <ol>
        <li>
          Before the first invoice, ask whether the contract is grant funded, and
          by which program.
        </li>
        <li>
          Ask whether the grant pays your customer in advance or by reimbursement,
          and how often it files claims.
        </li>
        <li>
          Ask what your invoice must show: service dates, purchase order number,
          grant or project name.
        </li>
        <li>
          Ask whether the grant pays back annual or prepaid invoices. If not,
          agree on a billing schedule that fits the claim cycle.
        </li>
        <li>
          Send each invoice right after the service period, before your
          customer&apos;s claim deadline.
        </li>
        <li>
          Put the grant end date and the payment window in your billing calendar.
        </li>
        <li>Record the expected pay date in your cash forecast.</li>
      </ol>

      <h2 id={H["Timing or growth? Use X if you have Y problem"]}>
        Timing or growth? Use X if you have Y problem
      </h2>

      <p>
        Start with the question our working capital post asks.{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing
          problem more often than a growth problem.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          Working capital vs growth capital for GovTech software
        </Link>
        )
      </p>

      <p>
        Size the gap first.{" "}
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em> (
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        )
      </p>

      <p>
        <em>Table 2: Timing problem or growth problem</em>
      </p>

      <TableWrap caption="Table 2: Timing problem or growth problem">
        <table>
          <caption>Table 2: Timing problem or growth problem</caption>
          <thead>
            <tr>
              <th scope="col">If you have</th>
              <th scope="col">It is likely</th>
              <th scope="col">Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="If you have">
                Invoices the grant will not pay back as sent
              </td>
              <td data-label="It is likely">Timing you can fix</td>
              <td data-label="Use">The grant customer routine</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Recurring dated waits across grant customers
              </td>
              <td data-label="It is likely">Timing to fund</td>
              <td data-label="Use">
                A{" "}
                <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
                  revolving line of credit
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                One large contract billed after service
              </td>
              <td data-label="It is likely">Timing to fund</td>
              <td data-label="Use">
                <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
                  Loans with bullet payments
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">Demand you cannot serve</td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        A growth problem means demand you cannot serve without more people,
        product or reach. That is what growth capital is for.
      </p>

      <p>
        As our acceptance post puts it:{" "}
        <em>
          &quot;before you finance a payment delay, find out whose delay it
          is.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          Government invoice acceptance
        </Link>
        )
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={GRANT_FUNDED_GOVERNMENT_CUSTOMERS_FAQ} />

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
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Upfront payment for government SaaS
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            How do I check when the government will pay my invoice?
          </Link>
        </li>
        <li>
          <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
            Why local governments pay vendors after board approval
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
