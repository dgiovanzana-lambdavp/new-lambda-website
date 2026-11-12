import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_ORDER_BALANCE_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UNDISPUTED_INVOICE_PORTION_FAQ,
  UNDISPUTED_INVOICE_PORTION_HEADINGS,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  UNDISPUTED_INVOICE_PORTION_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function UndisputedInvoicePortionPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        In some states, a dispute on part of an invoice does not freeze the whole
        payment. Texas caps the hold at 110 percent of the disputed amount.
        California pays undisputed invoices on a 45 day clock. It also bars
        disputes for minor defects. Virginia limits its interest exception to the
        portion in disagreement. Ask for a written notice that names the dollars.
        Fund only the disputed slice.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        An agency challenges one line on your invoice. The payment office then holds
        every dollar. Payroll still runs. Hosting still bills. The signed contract
        is not in doubt. Only one slice of one bill is.
      </p>

      <p>
        The useful move is to size the cash need to the disputed slice. First check
        the rules for that customer. Do not freeze cash for the full invoice by
        default.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>Texas may withhold no more than 110 percent of the disputed amount.</li>
          <li>
            California pays properly submitted undisputed invoices within 45 days.
          </li>
          <li>
            Virginia limits its interest exception to the portion in disagreement.
          </li>
          <li>
            Ask for the written notice. Collect the rest on schedule. Fund only the
            disputed slice.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Often no, but the rule depends on the state. In Texas, an agency may
        withhold no more than 110 percent of the disputed amount. It must detail
        the dispute within 21 days. California pays properly submitted undisputed
        invoices within 45 days. Virginia&apos;s interest exception covers only the
        portion in disagreement. Rules differ. Ask your agency. Size cash to the
        disputed slice.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Undisputed amount: the part of an invoice the agency has not challenged.
        </li>
        <li>
          Disputed amount: the part the agency says is wrong, incomplete or not yet
          earned.
        </li>
        <li>
          Dispute notice: the written notice that names the error and the dollars in
          dispute.
        </li>
        <li>
          Withhold cap: a legal limit on how much of an invoice the agency may hold
          while a dispute stays open.
        </li>
      </ul>

      <h2 id={H["A small dispute can freeze a large invoice"]}>
        A small dispute can freeze a large invoice
      </h2>

      <p>
        Consider our example. A software company invoices $80,000 for seats already
        in use. This is an illustration, not a real company. The agency says 10
        percent of the seats were never turned on and disputes $8,000.
      </p>

      <p>
        The payment office holds the full $80,000 while the program manager looks
        into it. Cash for payroll and hosting sits for weeks. The likely reason the
        office holds everything: it is easier than splitting the payment until the
        dispute is logged.
      </p>

      <p>
        That is the wrong cash frame. Under Texas rules, the open question is the
        disputed slice. It is not the whole invoice.
      </p>

      <h2 id={H["What Texas caps"]}>What Texas caps</h2>

      <p>
        Texas Government Code Sec. 2251.042 sets a clear withhold limit. It covers
        bodies named in that chapter. That includes state agencies and political
        units. This is Texas law. It is not a federal rule.
      </p>

      <p>
        Texas says the entity must notify the vendor by the 21st day after it
        receives the invoice. The notice must include a detailed statement of the
        dollars in dispute. (
        <ExtLink href="https://statutes.capitol.texas.gov/Docs/GV/htm/GV.2251.htm">
          Texas Government Code Chapter 2251
        </ExtLink>
        )
      </p>

      <p>
        It also caps the hold: <em>&quot;The governmental entity may withhold from
        payments required no more than 110 percent of the disputed amount.&quot;</em>
      </p>

      <p>
        The Texas Comptroller repeats the same cap for state agencies.
      </p>

      <p>
        <em>
          &quot;State agencies may withhold from required payments no more than 110
          percent of the disputed amount.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fmx.cpa.texas.gov/fm/pubs/purchase/prompt_pay/?page=disputes&section=overview">
          Texas Comptroller prompt payment disputes page
        </ExtLink>
        )
      </p>

      <p>The notice must also name the disputed dollars in detail.</p>

      <h3>Our example under the Texas cap</h3>

      <TableWrap caption="Texas withhold cap example">
        <table>
          <caption>Texas withhold cap example</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Invoice total</td>
              <td data-label="Amount">$80,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount in dispute</td>
              <td data-label="Amount">$8,000</td>
            </tr>
            <tr>
              <td data-label="Item">Maximum withhold (110 percent of disputed)</td>
              <td data-label="Amount">$8,800</td>
            </tr>
            <tr>
              <td data-label="Item">Amount that should still move on the normal clock</td>
              <td data-label="Amount">$71,200</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Under this Texas example, the maximum hold is $8,800. About $71,200 should
        still move on the normal clock. Size a timing tool to about $8,800. Do not
        size it to $80,000.
      </p>

      <p>
        If a dispute is later resolved for the vendor, interest can run from the
        original overdue date. If it is resolved for the agency, the vendor submits
        a corrected invoice. Then a new clock starts. Those are Texas process notes.
        They are not a reason to stop work. Do not suspend performance over a
        partial dispute without counsel and a clear contract right.
      </p>

      <h2 id={H["Keep the three states separate"]}>Keep the three states separate</h2>

      <p>
        Texas has the clearest withhold cap. California turns on undisputed invoices.
        Virginia limits its interest exception to the disputed portion.
      </p>

      <p>
        Do not blend those into one national rule. Ask the pay office which rule
        applies. Check the statute or local rule for your invoice.
      </p>

      <h2 id={H["What California and Virginia require"]}>
        What California and Virginia require
      </h2>

      <p>
        California and Virginia do not copy the Texas 110 percent formula. Keep
        their rules separate.
      </p>

      <h3>California: undisputed invoices</h3>

      <p>
        California&apos;s Prompt Payment Act turns on an undisputed invoice.
      </p>

      <p>
        State lawmakers say state agencies should pay properly submitted, undisputed
        invoices within 45 days, or pay late payment penalties. (
        <ExtLink href="https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=GOV&division=3.6.&title=1.&part=3.&chapter=4.5.">
          California Government Code Chapter 4.5
        </ExtLink>
        )
      </p>

      <p>
        The Act also sets a 45 calendar day maximum from receipt of an undisputed
        invoice to the date of payment, if the agency wants to avoid late payment
        penalties.
      </p>

      <p>
        And it bars a common dodge. No state employee may dispute an invoice for
        minor or technical defects just to dodge the Act.
      </p>

      <p>
        An agency may still dispute for reasonable cause. It must give notice within
        15 working days from receipt of the invoice, or delivery, whichever is later.
        Reasonable cause includes amount gaps. It also includes delivery or
        acceptance issues, need for more evidence, or improper invoice execution.
        This Act is written for California state agencies. Do not assume it covers
        every city or county.
      </p>

      <h3>Virginia: interest exception limited to the disputed portion</h3>

      <p>
        Virginia&apos;s clearest text limits the interest exception. It is not a Texas
        style withhold formula. The interest exception applies only to the portion
        in disagreement, and only while the disagreement lasts. (
        <ExtLink href="https://law.lis.virginia.gov/vacode/title2.2/partB/section2.2-4355/">
          Virginia Code Section 2.2-4355
        </ExtLink>
        )
      </p>

      <p>
        State agencies must also give notice of a defect that would prevent payment
        by the payment date. The notice must go out within fifteen days after
        receipt of the invoice or the goods or services.
      </p>

      <p>
        Local notice timing can differ. Do not read Virginia&apos;s interest exception
        as the same order Texas gives for a withhold cap. Ask the pay office how
        the undisputed dollars will move.
      </p>

      <h2 id={H["The dispute is not the whole bill"]}>
        The dispute is not the whole bill
      </h2>

      <p>
        Cash planning starts with the right number. If $8,000 is in dispute on an
        $80,000 invoice, do not plan as if $80,000 is frozen.
      </p>

      <p>
        Write down the disputed dollars. Write down what the notice says. Then ask
        what still pays on the normal clock.
      </p>

      <p>That small habit can change which cash tool you pick.</p>

      <h2 id={H["What to do this week"]}>What to do this week</h2>

      <ol>
        <li>
          Ask whether the hold is a dispute, an acceptance issue or a PO balance
          issue. Acceptance and returned invoices are covered in{" "}
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            government invoice acceptance
          </Link>
          . A PO that ran out of money is a different fix:{" "}
          <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
            purchase order balance and invoice holds
          </Link>
          .
        </li>
        <li>Ask for the written dispute notice and the dollar amount in dispute.</li>
        <li>Ask for payment of the undisputed portion on the normal clock.</li>
        <li>
          Track status with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          If a local board must clear a corrected invoice, see{" "}
          <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
            local government board approval and vendor payments
          </Link>
          .
        </li>
      </ol>

      <p>
        Interest clocks after a late payment are covered elsewhere. See{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . That post owns the interest mechanics. This one owns the size of the hold.
      </p>

      <p>
        Our view: a partial dispute is a timing problem on a defined amount.
      </p>

      <h2 id={H["Plain cash math"]}>Plain cash math</h2>

      <p>Start with three lines on a pad.</p>

      <p>One: the invoice total.</p>
      <p>Two: the dollars named in the dispute notice.</p>
      <p>Three: what still should pay on the normal clock.</p>

      <p>
        If the notice is missing, ask for it. Without the dollar figure, you cannot
        size the gap. Without the gap, you cannot pick the right cash tool.
      </p>

      <h2 id={H["Why the cash frame matters"]}>Why the cash frame matters</h2>

      <p>
        Founders often treat a disputed invoice as a total freeze. That can lead to
        the wrong cash tool.
      </p>

      <p>
        If the rules for your customer limit the hold, most of the invoice should
        still move. The open question is a slice. The financing mistake is to fund
        the whole bill.
      </p>

      <h2 id={H["Timing or growth?"]}>Timing or growth?</h2>

      <p>
        Start with a basic line from our working capital post.{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing problem
          more often than a growth problem.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          Working capital vs growth capital for GovTech software
        </Link>
        )
      </p>

      <p>Size the gap first.</p>

      <p>
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em> (
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        )
      </p>

      <TableWrap caption="Timing or growth tools">
        <table>
          <caption>Timing or growth tools</caption>
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
                A defined disputed slice with a dated fix
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">A timing tool sized to that slice</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Recurring small disputes across many invoices
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                A{" "}
                <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
                  revolving line of credit
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                One large disputed amount with a dated release
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
                  Loans with bullet payments
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A need to build or sell more, not a dispute hold
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling more. A
        seat count dispute on one invoice is not that problem by itself. It is a
        process issue with a dollar amount. For how claims stack, see{" "}
        <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
          capital stack seniority for GovTech software
        </Link>
        . Strategy hub:{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>
        .
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={UNDISPUTED_INVOICE_PORTION_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt payment laws for GovTech vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
            Purchase order balance and invoice holds
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            Government invoice acceptance
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
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
