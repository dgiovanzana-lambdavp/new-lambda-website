import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  EARLY_PAYMENT_DISCOUNT_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_FAQ,
  INVOICE_PAYMENT_STATUS_HEADINGS,
  PROMPT_PAYMENT_POST,
  PURCHASE_CARD_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  INVOICE_PAYMENT_STATUS_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function InvoicePaymentStatusPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        You can see where many government invoices sit before the cash lands. If
        your federal contract uses Treasury&apos;s Invoice Processing Platform,
        each invoice shows a status, and a pay date once one is set. State rules
        and tools differ. In Texas, you can see payments once they are issued
        and get an email alert. Check status weekly, fix what is yours, follow
        up on approvals with specifics, and plan cash around the date.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a finance team that learns a government invoice was paid only
        when the money lands. If that invoice failed a check on day one, the
        weeks are already lost. The systems that would have shown it were there
        the whole time.
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue that
          sell to state, local, or federal customers.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            If your federal contract uses Treasury&apos;s IPP, sign in and search
            by invoice number to see its status. Not every federal agency uses
            IPP, so ask your billing office which system applies.
          </li>
          <li>
            The status tells you who holds the invoice. Some statuses are yours
            to fix. Others belong to the agency.
          </li>
          <li>
            In Texas, the state&apos;s own tool shows payments once issued. For
            pending payments, ask the paying agency.
          </li>
          <li>
            A status check does not make the government pay sooner by itself. It
            finds problems sooner, and it gives you a date to plan around.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Sign in to the system your contract uses and search by invoice number.
        In Treasury&apos;s IPP, the status tells you who holds the invoice. In
        Exception means you must fix it. Pending Approval means the agency is
        still approving it. Scheduled To Pay means a pay date is set. In Texas,
        the state&apos;s SSPI tool shows issued payments, and the paying agency
        can tell you about pending ones.
      </p>

      <h2 id={H["The problem: the invoice nobody was watching"]}>
        The problem: the invoice nobody was watching
      </h2>

      <p>
        Our CEO runs a $6M software company. This is an illustration, not a real
        company. One customer is a federal agency that takes invoices through
        IPP. Another is a Texas state agency.
      </p>

      <p>
        The finance team learns about payments only when cash lands. A $240,000
        quarterly federal invoice sits In Exception for 18 days before anyone
        notices. It failed a check on day one, and nobody looked.
      </p>

      <p>
        The CEO&apos;s first instinct is to draw more on the credit line and
        wait. The likely reason: waiting feels normal with government customers,
        so a slow payment did not look like a problem to solve.
      </p>

      <h3>Three choices</h3>

      <ol>
        <li>Keep waiting, and fund every delay as it comes.</li>
        <li>Call the agency every week about every invoice.</li>
        <li>
          Check every open invoice&apos;s status on a set day each week, act on
          each status, and plan cash around the dates the systems show.
        </li>
      </ol>

      <p>
        Our view: look before you finance, because a wait with a known date is a
        timing problem with an end, while an unknown wait often hides a problem
        you can fix.
      </p>

      <h2 id={H["Where to look: federal and state"]}>
        Where to look: federal and state
      </h2>

      <h3>Federal: Treasury&apos;s IPP, if your contract uses it</h3>

      <p>
        IPP, the Invoice Processing Platform, is a website run by Treasury&apos;s
        Bureau of the Fiscal Service. Federal agencies that use it receive
        invoices there, and vendors track them there.
      </p>

      <p>
        Not every federal agency uses IPP. Ask your billing office which system
        your contract uses. If it is IPP, you sign in as a Collector, which is
        IPP&apos;s name for a vendor user. Then you search by invoice number or
        purchase order number. (
        <ExtLink href="https://fiscal.treasury.gov/financial-management-solutions/invoice-processing-platform-ipp/finding-payment-status-invoices">
          Treasury&apos;s IPP payment status guide
        </ExtLink>
        )
      </p>

      <h3>Texas: SSPI shows payments once issued</h3>

      <p>
        The Texas Comptroller is the state office that runs SSPI.{" "}
        <em>
          &quot;The Search State Payments Issued (SSPI) web application provides
          vendors and other payees with access to their detailed payment
          information.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fmx.cpa.texas.gov/fmx/payment/resources/svpr_all.php">
          Texas Comptroller, State Payee Payment Resources
        </ExtLink>
        )
      </p>

      <p>
        SSPI does not show payments that are pending, unprocessed or not yet
        issued. For those, the Comptroller points you to the paying agency,
        which it calls the best source on outstanding payments. (
        <ExtLink href="https://fmx.cpa.texas.gov/fm/pubs/payment/gen_prov/index.php?p=ps_payees&s=pay_search">
          Texas Comptroller, SSPI help
        </ExtLink>
        )
      </p>

      <h3>Other states and local buyers</h3>

      <p>
        Each state, county and city runs its own payment system. We did not
        review them for this post. Ask each buyer&apos;s billing office what
        system it uses and who to call about a pending payment.
      </p>

      <h2 id={H["What each status means, and who acts"]}>
        What each status means, and who acts
      </h2>

      <p>
        An invoice status is the label a payment system shows for where your
        invoice sits right now. In IPP, each status points to the party that
        must act next.
      </p>

      <p>
        IPP describes Pending Approval this way:{" "}
        <em>
          &quot;These invoices have been received by the buyer and are still
          being routed for approval.&quot;
        </em>{" "}
        Approved to Pay is different:{" "}
        <em>
          &quot;These invoices have been approved to pay (and receipt confirmed
          if this is required for the invoice), but a payment date has not yet
          been set.&quot;
        </em>
      </p>

      <p>
        In Exception is the status to catch early:{" "}
        <em>
          &quot;These invoices did not pass the buyer&apos;s validation checks
          when they were submitted and need to be corrected before they can be
          submitted successfully.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fiscal.treasury.gov/financial-management-solutions/invoice-processing-platform-ipp/finding-payment-status-invoices">
          Treasury&apos;s IPP payment status guide
        </ExtLink>
        )
      </p>

      <p>
        <em>
          IPP status, what it means and who acts (summary of Treasury&apos;s
          guide)
        </em>
      </p>

      <TableWrap caption="IPP status, what it means and who acts (summary of Treasury's guide)">
        <table>
          <caption>
            IPP status, what it means and who acts (summary of Treasury&apos;s
            guide)
          </caption>
          <thead>
            <tr>
              <th>Status</th>
              <th>What it means</th>
              <th>Who acts next</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Status">In Exception</td>
              <td data-label="What it means">Failed the buyer&apos;s checks</td>
              <td data-label="Who acts next">You: fix and submit again</td>
            </tr>
            <tr>
              <td data-label="Status">Rejected</td>
              <td data-label="What it means">
                Buyer will not pay the amount as sent
              </td>
              <td data-label="Who acts next">You: find out why</td>
            </tr>
            <tr>
              <td data-label="Status">Pending Approval</td>
              <td data-label="What it means">
                Agency still routing it for approval
              </td>
              <td data-label="Who acts next">Agency approvers</td>
            </tr>
            <tr>
              <td data-label="Status">Approved to Pay</td>
              <td data-label="What it means">
                Approved, no pay date yet
              </td>
              <td data-label="Who acts next">Agency payment office</td>
            </tr>
            <tr>
              <td data-label="Status">Scheduled To Pay</td>
              <td data-label="What it means">Approved, pay date set</td>
              <td data-label="Who acts next">
                Payment office; you plan cash
              </td>
            </tr>
            <tr>
              <td data-label="Status">Paid</td>
              <td data-label="What it means">
                Payment issued and received
              </td>
              <td data-label="Who acts next">
                You: match the remittance
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Remittance is the detail that shows which invoices a payment covers. IPP
        keeps it for paid invoices, so you can download it at any time.
      </p>

      <p>
        Treasury&apos;s guide says a buyer may reject an invoice that is a
        duplicate, or one where none of the items were ordered. Some buyers
        reject the whole invoice and ask for a new one. The guide also says an
        inactive supplier registration stops payment until you update it and the
        agency restarts the payment.
      </p>

      <p>
        A proper invoice is one with every item the contract and billing office
        require, so the payment clock can start. Under federal rules, a billing
        office must return an invoice that is not proper within 7 days after
        receipt, with the reasons. (
        <ExtLink href="https://www.acquisition.gov/far/32.905">FAR 32.905</ExtLink>
        ) Our{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          guide to government invoice acceptance
        </Link>{" "}
        covers the rest.
      </p>

      <h2 id={H["Why Texas pays near day 30"]}>Why Texas pays near day 30</h2>

      <p>
        In Texas, the payment date is set by law, not by chance. The Comptroller
        says:{" "}
        <em>
          &quot;To maximize the time that funds are held by the state, agencies
          are required to schedule their payments in the statewide accounting
          system.&quot;
        </em>{" "}
        It adds:{" "}
        <em>
          &quot;Payments will automatically be made just before the payment
          becomes late unless the agency justifies a request to make the payment
          earlier.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fmx.cpa.texas.gov/fmx/payment/resources/svpr_all.php">
          Texas Comptroller, State Payee Payment Resources
        </ExtLink>
        )
      </p>

      <p>
        Under the Texas prompt payment law, a state agency&apos;s payment is due
        on the 30th day after the latest of three dates. Those are when the
        agency receives the goods, when you finish the services, and when the
        agency receives your invoice. (
        <ExtLink href="https://fmx.cpa.texas.gov/fmx/payment/resources/svpr_all.php">
          Texas Government Code Chapter 2251, as summarized by the Comptroller
        </ExtLink>
        )
      </p>

      <p>
        Texas allows earlier payment in some cases. Examples are an invoice under
        $5,000, or a business reason such as a substantial early payment discount
        or a contract that sets payment timelines. (
        <ExtLink href="https://fmx.cpa.texas.gov/fmx/payment/resources/svpr_all.php">
          Texas Government Code 2155.382, as summarized by the Comptroller
        </ExtLink>
        ) See our post on{" "}
        <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
          early payment discounts on government contracts
        </Link>
        .
      </p>

      <p>
        A payment near the due date is the system working as designed, not a
        problem with your account. This is one state&apos;s rule. Other states
        and local buyers differ, so check yours.
      </p>

      <h3>A held payment is a different case</h3>

      <p>
        If you owe Texas a debt that an agency reported, the state can hold your
        payment until the debt is cleared or released. The state can also apply
        the payment against what you owe. (
        <ExtLink href="https://fmx.cpa.texas.gov/fmx/payment/resources/svpr_all.php">
          Texas Comptroller, State Payee Payment Resources
        </ExtLink>
        )
      </p>

      <p>
        The federal side has a parallel. In IPP, an inactive supplier
        registration stops payment until you update it. (
        <ExtLink href="https://fiscal.treasury.gov/financial-management-solutions/invoice-processing-platform-ipp/finding-payment-status-invoices">
          Treasury&apos;s IPP payment status guide
        </ExtLink>
        )
      </p>

      <p>
        <em>What you can see before and at payment</em>
      </p>

      <TableWrap caption="What you can see before and at payment">
        <table>
          <caption>What you can see before and at payment</caption>
          <thead>
            <tr>
              <th></th>
              <th>Federal (IPP)</th>
              <th>Texas (SSPI)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">Before payment</td>
              <td data-label="Federal (IPP)">
                Status, and pay date once set
              </td>
              <td data-label="Texas (SSPI)">
                Not shown; ask the paying agency
              </td>
            </tr>
            <tr>
              <td data-label="">At payment</td>
              <td data-label="Federal (IPP)">Paid, with remittance</td>
              <td data-label="Texas (SSPI)">
                Payment details, optional email alert
              </td>
            </tr>
            <tr>
              <td data-label="">What sets the date</td>
              <td data-label="Federal (IPP)">
                Contract payment terms and approvals
              </td>
              <td data-label="Texas (SSPI)">
                Scheduled for just before due
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["The decision"]}>The decision</h2>

      <p>Our CEO picks the third choice. Every week, on the same day, the team checks every open invoice in the system its contract uses.</p>

      <h3>Why it fits</h3>

      <ul>
        <li>A status tells you who holds the invoice.</li>
        <li>
          The failed invoice is the clearest case. Caught on day one, it goes
          back out 17 days sooner than it did. The check does not make the agency
          pay faster. It stops your own invoice from waiting in silence.
        </li>
        <li>
          Calling about every invoice likely wears out the people you need. A
          call about the right invoice, with its status in hand, is the one
          worth making.
        </li>
        <li>
          In Texas, the CEO now knows why the state rarely pays early. Take a
          $90,000 invoice that the agency receives on the day the services are
          done. It is due on day 30 and will be paid just before then unless the
          agency justifies paying early. So the plan is cash around day 30, not
          sooner, and that window gets funded on purpose.
        </li>
      </ul>

      <h2 id={H["A weekly status routine (agency facing)"]}>
        A weekly status routine (agency facing)
      </h2>

      <ol>
        <li>Pick one day a week. List every open government invoice.</li>
        <li>Look up each status in the system the contract uses.</li>
        <li>
          In Exception or Rejected: find the reason, fix it and submit again the
          same day.
        </li>
        <li>
          Pending Approval for longer than your contract&apos;s normal approval
          time: call the program office or the person who accepts your work,
          with the invoice number and status.
        </li>
        <li>Scheduled To Pay: record the date in your cash forecast.</li>
        <li>Paid: match the remittance to your invoices.</li>
        <li>
          Sign up for any payment alert offered. In Texas, vendors can choose an
          Advance Payment Notification email from SSPI when a payment is sent.
        </li>
      </ol>

      <h2 id={H["Lesson: a status is a to do list"]}>
        Lesson: a status is a to do list
      </h2>

      <p>
        Back to our CEO. Invoices no longer sit unseen. Problems get fixed in
        days, and dated waits go into the cash forecast.
      </p>

      <p>
        A status is a to do list. Fix what is yours. Follow up on what is
        theirs, with specifics. Then fund the dated wait that remains.
      </p>

      <h2 id={H["Bridging what remains: use X if you have Y problem"]}>
        Bridging what remains: use X if you have Y problem
      </h2>

      <p>
        Each option fits one problem. We do not rank them by cost or risk. As our
        acceptance guide puts it,{" "}
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

      <ul>
        <li>
          Use a weekly status check if you have invoices that sit unseen or fail
          checks.
        </li>
        <li>
          Use clean invoices and clear acceptance terms if you have approvals
          that stall. See{" "}
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            Government invoice acceptance
          </Link>
          .
        </li>
        <li>
          Use the purchase card if you have small orders that wait weeks. See{" "}
          <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>
            Can the government pay your software invoice by purchase card?
          </Link>
        </li>
        <li>
          Use a revolving line of credit if you have recurring dated waits across
          many invoices. See{" "}
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
          .
        </li>
        <li>
          Use loans with bullet payments if you have a large signed contract with
          a long, dated wait and want to repay principal when the contract cash
          arrives. See{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet loan vs amortizing loan
          </Link>
          .
        </li>
      </ul>

      <p>
        Size the whole gap first.{" "}
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em> (
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        ) For late payment interest on federal invoices, see{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          Prompt Payment Act: what GovTech vendors can collect
        </Link>
        .
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={INVOICE_PAYMENT_STATUS_FAQ} />

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
          <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
            Early payment discounts on government contracts
          </Link>
        </li>
        <li>
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
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
