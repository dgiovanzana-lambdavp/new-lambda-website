import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_FAQ,
  GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_HEADINGS,
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  TERM_LOAN_AMORTIZING_POST,
  UNDISPUTED_INVOICE_PORTION_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_HEADINGS.map((h) => [
    h.text,
    h.id,
  ]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentContractCloseoutFinalInvoicePaymentPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A final government invoice can sit unpaid after the work is accepted. That
        can happen while the agency closes the contract file. Federal closeout time
        standards are written as should timelines for closing the file. They are not
        your payment due date. In Texas, agencies treat a contract as completed only
        after final payment, among other steps. In California, agencies are told to
        verify work is accepted. They are also told to perform contract close out
        activities, including notice when funds can be released. Confirm acceptance
        and receipt of the final invoice. Then size cash to a longer last invoice
        lag. Do not raise growth capital against a closeout delay.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A founder finishes a signed government software contract. The work is
        accepted. The company sends an $80,000 final invoice and expects payment in
        30 days. The invoice is still unpaid while the agency closes the contract
        file. The CEO starts to treat a 6 month or 20 month closeout standard as a
        payment date. Or the next thought is to raise growth capital against the
        wait. That is the wrong cash frame.
      </p>

      <p>
        The reason that frame fails is simple. Those figures are should timelines
        for closing the agency file. They are not your payment due date. The $80,000
        can still be an amount you can collect. The lag may just be longer than an
        ordinary invoice cycle.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Closeout is the agency&apos;s work to close the contract file after the
            work is physically complete.
          </li>
          <li>
            Federal 6, 20, and 36 month figures are should file standards, not
            vendor payment due dates.
          </li>
          <li>
            Texas and California closeout guidance is not a statute. It does not
            copy those federal file timelines.
          </li>
          <li>
            Confirm acceptance and receipt of the final invoice. Size cash to a
            longer last invoice lag, not to a closeout calendar.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Not if the work has already been accepted. Closeout is the agency&apos;s
        file closing work after physical completion. Federal time standards for
        closing those files are should timelines, not payment due dates. A final
        invoice can still wait while leftover funds or other closeout items are
        finished. Size cash to the last invoice and a realistically longer lag.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Closeout: the agency&apos;s work to close the contract file after the
          work is physically complete.
        </li>
        <li>
          Physical completion: the contractor has delivered or performed the
          required work, and the government has accepted it. Any option provisions
          have also expired, unless the contract was terminated.
        </li>
        <li>
          Time standards: should timelines for closing the agency file, not vendor
          payment due dates.
        </li>
        <li>
          Quick closeout: a federal procedure to settle remaining costs on a
          physically complete contract so the file can close sooner. It is not a
          vendor right to faster payment.
        </li>
      </ul>

      <h2 id={H["Is contract closeout the same as getting paid?"]}>
        Is contract closeout the same as getting paid?
      </h2>

      <p>
        No. Closeout is the agency&apos;s work to close the contract file after
        the work is physically complete. Submission of your final invoice is one
        item on that list. It is not the same event as the file being closed. A
        should timeline for closing the file is not your legal right to be paid by
        that date.
      </p>

      <p>
        Consider our example. A software company finishes a signed government
        software contract. This is an example, not a real company. The work has
        been accepted. The company sends an $80,000 final invoice. The invoice is
        still unpaid while the agency closes the contract file. The $80,000 is
        still an amount you can collect if the invoice is proper. The lag may be
        longer than an ordinary cycle.
      </p>

      <p>
        Federal time standards for closing out contract files are written as should.{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/4.804-1">FAR 4.804-1</ExtLink>
        ) The contract administration office starts closeout of the file after it
        receives evidence that the contract is physically complete. (
        <ExtLink href="https://www.acquisition.gov/far/4.804-5">FAR 4.804-5</ExtLink>
        ) One checklist item is that the contractor&apos;s final invoice has been
        submitted. That is not a promise the invoice will be paid on submission.
      </p>

      <p>
        Do not treat those file standards as a payment due date. Prompt payment
        rules, where they apply to a proper invoice, are a different clock.
      </p>

      <h2 id={H["When is a federal contract physically complete?"]}>
        When is a federal contract physically complete?
      </h2>

      <p>
        For services, when you have performed the required work and the government
        has accepted it. Any option provisions must also have expired. Physical
        completion is the starting point for closeout. It is not proof that the
        final invoice has been paid. If the work has not been accepted, the delay is
        an acceptance problem, not a closeout problem.
      </p>

      <p>
        The federal rule is that the contractor has performed all services and the
        government has accepted those services. For supplies, the contractor has
        completed the required deliveries. The government has inspected and accepted
        them. A contract can also be treated as physically complete when the
        government has given notice of complete contract termination. (
        <ExtLink href="https://www.acquisition.gov/far/4.804-4">FAR 4.804-4</ExtLink>
        )
      </p>

      <p>
        This definition is for federal contracts under the FAR. It does not, by
        itself, govern every state or local contract. If the work is still waiting
        on acceptance, that is a different delay. See{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          invoice acceptance
        </Link>
        .
      </p>

      <h2 id={H["How long can closeout delay a final invoice?"]}>
        How long can closeout delay a final invoice?
      </h2>

      <p>
        There is no single vendor payment deadline in the closeout time standards.
        Federal files for many contracts should be closed within 20 months after
        evidence of physical completion. Files that need indirect cost rate
        settlement should be closed within 36 months of that month. Those are agency
        file standards written as should, not clocks that make your invoice due.
      </p>

      <p>
        Files for firm fixed price contracts, other than those using simplified
        acquisition procedures, should be closed within 6 months. That clock starts
        after the date the contracting officer receives evidence of physical
        completion. Files for simplified acquisition contracts should be treated as
        closed when that officer has evidence of receipt and final payment. That is,
        unless agency rules say otherwise. (
        <ExtLink href="https://www.acquisition.gov/far/4.804-1">FAR 4.804-1</ExtLink>
        )
      </p>

      <p>
        Do not read those 6, 20, or 36 month figures as a legal right to be paid by
        then. A file is also not closed if the contract is in litigation or under
        appeal. It is not closed if termination work is still open.
      </p>

      <p>
        At the start of closeout, that office must review contract funds. It must
        notify the contracting office of unused funds that might be released. (
        <ExtLink href="https://www.acquisition.gov/far/4.804-5">FAR 4.804-5</ExtLink>
        ) Quick closeout procedures should be used, when appropriate, to reduce
        administrative costs and to enable release of unused funds. (
        <ExtLink href="https://www.acquisition.gov/far/4.804-1">FAR 4.804-1</ExtLink>
        ) Quick closeout lets a contracting officer settle remaining costs on a
        complete contract before final rates are set. That is only when the
        unsettled amount is relatively small and other conditions are met. It is not
        a vendor right to faster payment. The rates used there are not a binding
        precedent for other contracts. (
        <ExtLink href="https://www.acquisition.gov/far/42.708">FAR 42.708</ExtLink>
        ) Do not assume every firm fixed price software contract needs it.
      </p>

      <p>
        These federal file timelines do not apply to every state or local contract.
        Texas and California use their own guidance.
      </p>

      <p>
        The Texas procurement guide states the purpose of closeout. It is to verify
        that both parties have fulfilled their contractual obligations. A contract is
        completed when, among other steps, all goods or services have been received
        and accepted. Final payment must also have been made to the contractor. (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          Texas Procurement and Contract Management Guide
        </ExtLink>
        ) That describes when the agency treats the contract as complete. It is not a
        vendor payment deadline. This is statewide procurement guidance, not a
        statute. It does not, by itself, cover every city or county contract.
      </p>

      <p>
        California&apos;s contracting manual tells agencies to verify that all work
        is completed and accepted by the department. That check comes prior to the
        contract expiration date. Agencies are also told to perform contract close
        out activities. That includes{" "}
        <em>
          &quot;Notifying responsible parties when funds can be disencumbered.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.dgs.ca.gov/PD/Resources/SCM/TOC/21/21-2">
          California DGS contracting manual guidance
        </ExtLink>
        ) This is manual guidance, not a statute. It does not create a vendor payment
        due date. It does not, by itself, cover every city or county contract.
      </p>

      <p>
        Ask your agency which rule applies. Local rules differ. Grant closeout is a
        different clock, on the customer&apos;s grant, not a vendor payment right
        under FAR 4.804-1. See{" "}
        <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
          grant funded customers
        </Link>
        . Prompt payment interest clocks, where they apply, are a different rule from
        closeout time standards. See{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        .
      </p>

      <TableWrap caption="Final invoice closeout example">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">
                Final invoice on a signed, accepted contract
              </td>
              <td data-label="Amount">$80,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount still unpaid</td>
              <td data-label="Amount">$80,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount to size a timing tool to</td>
              <td data-label="Amount">
                The $80,000, plus a realistically longer lag than an ordinary invoice
                cycle
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        This is our example. The $80,000 is still an amount you can collect if the
        work was accepted and the invoice is proper. Size a timing tool to that
        amount and a longer lag. Do not treat the federal 6, 20, or 36 month file
        standards as payment due dates.
      </p>

      <h2 id={H["The calendar is not the due date"]}>
        The calendar is not the due date
      </h2>

      <p>
        Start with two facts, not one.
      </p>

      <p>
        The work was accepted. The last invoice is still unpaid. Those facts can
        both be true at once.
      </p>

      <p>
        The closeout calendar is a file plan. It is not a payment due date. Do not
        mix them. Size cash to the invoice. Do not size cash to the calendar.
      </p>

      <h2 id={H["What should you do this week?"]}>
        What should you do this week?
      </h2>

      <p>
        Confirm that the work was accepted and that the agency received the final
        invoice. Then ask whether closeout, unused funds, a closing statement, or
        unsettled subcontracts are holding payment. Write down the invoice number,
        the date it was sent, and what the agency says is still open.
      </p>

      <ol>
        <li>
          Confirm the work was accepted. If it was not, that is an acceptance issue.
          See{" "}
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            invoice acceptance
          </Link>
          .
        </li>
        <li>
          Confirm the agency received the final invoice, and write down the invoice
          number and date. Track status with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          Ask whether closeout or unused funds are holding the payment. If you are a
          subcontractor waiting on the prime, that is a different path. See{" "}
          <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
            subcontractor payment from a prime
          </Link>
          .
        </li>
        <li>
          If part of the final invoice is being held because of a dispute, that is a
          different cause. See{" "}
          <Link href={`/blog/${UNDISPUTED_INVOICE_PORTION_POST.slug}`}>
            undisputed invoice portion
          </Link>
          .
        </li>
        <li>
          If the customer is paying you from a grant, grant closeout is a different
          clock. See{" "}
          <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
            grant funded customers
          </Link>
          . Talk to counsel if a closeout hold continues. Do not treat file closing
          dates as payment due dates.
        </li>
      </ol>

      <p>
        Our view: a closeout calendar is a file closing standard, not a payment due
        date.
      </p>

      <p>
        Confirm acceptance and receipt of the final invoice. Fund the last invoice as
        a timing lag. Do not raise growth capital against a closeout delay.
      </p>

      <h2
        id={H["Should you finance a final invoice stuck in closeout?"]}
      >
        Should you finance a final invoice stuck in closeout?
      </h2>

      <p>
        If the work was accepted and the $80,000 is still due, the wait is a timing
        problem. It is not a growth problem. Size a timing tool to the final invoice
        and a longer lag. Do not treat a closeout calendar as a payment due date. Do
        not raise growth capital against that delay.
      </p>

      <p>Start with a basic line from our working capital post.</p>

      <p>
        <em>
          &quot;Signed government contracts that pay slowly create a timing problem
          more often than a growth problem.&quot; (
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
          )
        </em>
      </p>

      <p>Size the gap first.</p>

      <p>
        <em>
          &quot;Your cash flow gap is a number, not a feeling.&quot; (
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
          )
        </em>
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
                A last invoice that is still collectible but delayed by closeout
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                A timing tool sized to that invoice and a longer lag
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                Recurring clean invoices with a payment lag each cycle
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
                One remaining payable amount with a dated collection date
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
                A need to build or sell more, not a last invoice waiting on closeout
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling more. A
        last invoice waiting on closeout is not that problem by itself. For how
        claims stack, see{" "}
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

      <Faq items={GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            Invoice acceptance
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            Invoice payment status tools
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
            Grant funded government customers
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