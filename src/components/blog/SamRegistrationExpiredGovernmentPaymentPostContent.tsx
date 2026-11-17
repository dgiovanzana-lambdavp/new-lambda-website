import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  GOVERNMENT_VENDOR_REGISTRATION_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_CARD_POST,
  REVOLVING_LINE_POST,
  SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_FAQ,
  SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_HEADINGS,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_HEADINGS.map((h) => [
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

export default function SamRegistrationExpiredGovernmentPaymentPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A federal payment can wait mid contract if your SAM record is no longer
        Active. On a federal contract that includes the maintenance clause, you
        must maintain SAM registration during performance and through final
        payment. Official website guidance says you must renew it every 365 days
        to keep it active. If the EFT information in SAM is incorrect, the
        government need not pay until it is corrected. In that case, the invoice
        is not a proper invoice for prompt payment. A lapsed record is not
        automatically the same thing as incorrect EFT data. Renew the record. Ask
        the payment office. Size cash to invoices that will still be paid. Do not
        raise growth capital against a registration hold.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A founder is mid performance on a signed federal software contract.
        $90,000 in accepted invoices is unpaid. The SAM record is no longer
        Active. The CEO treats the $90,000 as lost. Or the next thought is to
        raise growth capital to replace it.
      </p>

      <p>
        The reason that frame fails is simple. A lapse can delay or hold payment.
        It does not, by itself, cancel work already accepted. The $90,000 can
        still be an amount you can collect. That is once the record is Active
        and the EFT data in SAM is correct.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            On a federal contract that includes the maintenance clause, you must
            keep SAM registration in place through final payment.
          </li>
          <li>
            Official SAM.gov guidance says you must renew the registration every
            365 days to keep it active. That line is not a payment statute.
          </li>
          <li>
            A lapsed record can hold payment because offices use EFT data in SAM.
            It is not automatically the same thing as incorrect EFT data. Ask the
            payment office.
          </li>
          <li>
            Renew the record. Size cash to invoices that will still be paid. Do
            not raise growth capital against a registration hold.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Maybe, on a federal contract, if your SAM record is no longer Active. You
        must maintain registration through final payment. You must also renew it
        every 365 days to keep it active. If EFT information in SAM is incorrect,
        the government need not pay until it is corrected. In that case, that
        invoice is not proper for prompt payment. Size cash to invoices that will
        still be paid.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          SAM: the System for Award Management. It is the federal system used to
          register for awards and to store payment data, including EFT
          information.
        </li>
        <li>
          Active record: a SAM registration the government has marked Active,
          which you must renew to keep.
        </li>
        <li>
          Proper invoice: an invoice that meets the contract and payment rules so
          the prompt payment clock can start. If EFT information in SAM is
          incorrect, the invoice is not a proper invoice for that purpose.
        </li>
      </ul>

      <h2 id={H["Do you have to keep SAM active after award?"]}>
        Do you have to keep SAM active after award?
      </h2>

      <p>
        Yes, on a federal contract that includes the maintenance clause. You must
        be registered when you submit an offer and at award. You must also
        maintain that registration during performance and through final payment.
        SAM.gov says you must renew the registration every 365 days to keep it
        active.
      </p>

      <p>
        An offeror is required to be registered in SAM when submitting an offer
        or quotation, and at time of award. (
        <ExtLink href="https://www.acquisition.gov/far/52.204-7">
          FAR 52.204-7
        </ExtLink>
        ) The maintenance clause then says the contractor shall maintain
        registration in SAM during contract performance and through final payment.
        That covers any contract, basic agreement, basic ordering agreement, or
        blanket purchasing agreement. (
        <ExtLink href="https://www.acquisition.gov/far/52.204-13">
          FAR 52.204-13
        </ExtLink>
        )
      </p>

      <p>
        That clause applies when it is in the contract. FAR 4.1102 lists
        exceptions, including certain purchase card micro purchases. Do not assume
        every federal payment requires an active SAM record. Ask your agency. Rules
        differ.
      </p>

      <p>
        To remain registered after the first signup, the contractor must review and
        update its information in SAM on an annual basis. That review runs from the
        date of first signup or later updates. The goal is to keep the data
        current, accurate, and complete. A registered record is one the government
        has marked Active.
      </p>

      <blockquote>
        <p>
          <em>
            &quot;You must renew your registration every 365 days to keep it
            active.&quot;
          </em>{" "}
          (
          <ExtLink href="https://sam.gov/content/entity-registration">
            SAM.gov entity registration
          </ExtLink>
          )
        </p>
      </blockquote>

      <p>
        You can also make updates anytime, or during renewal. That 365 day line is
        official website guidance for keeping a registration active. It is not
        itself a payment statute. It does not, by itself, say an invoice is
        forfeited.
      </p>

      <p>
        A unique entity identifier alone is not a full registration for a prime
        awardee. If you want to apply for federal awards as a prime awardee, you
        need a registration. That identifier alone is not enough. Updating
        information in SAM does not change the terms of the contract. It is not a
        substitute for a properly executed contract document. (
        <ExtLink href="https://www.acquisition.gov/far/52.204-13">
          FAR 52.204-13
        </ExtLink>
        )
      </p>

      <h2 id={H["Can a lapsed SAM registration hold your payment?"]}>
        Can a lapsed SAM registration hold your payment?
      </h2>

      <p>
        It can delay or hold a federal payment. Do not treat an expired record as
        automatically the same thing as incorrect EFT information. The government
        pays using the EFT information in SAM. If that EFT information is
        incorrect, the government need not pay until it is corrected. In that
        case, the invoice is not a proper invoice for prompt payment. Ask the
        payment office whether the hold is tied to your SAM record.
      </p>

      <p>
        The payment clause says the government shall make payment using the EFT
        information contained in SAM. If that EFT data is incorrect, the
        government need not make payment until correct EFT data is entered into SAM.
        Any invoice or contract financing request shall then be deemed not to be a
        proper invoice for prompt payment under the contract. The prompt payment
        terms on notice of an improper invoice still apply. So do the terms on
        delays in interest. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-33">
          FAR 52.232-33
        </ExtLink>
        )
      </p>

      <p>
        A lapsed or inactive record can delay or hold payment for a simpler reason.
        The contractor must stay registered and keep the record Active through
        final payment. Payment offices also use the EFT data in SAM. That is not
        the same claim as saying the expired record is itself incorrect EFT data.
        Ask the payment office.
      </p>

      <p>
        The contractor is also responsible for the currency, accuracy, and
        completeness of the data in SAM. That includes any liability that results
        if the government relies on inaccurate or incomplete data. (
        <ExtLink href="https://www.acquisition.gov/far/52.204-13">
          FAR 52.204-13
        </ExtLink>
        )
      </p>

      <p>
        Consider our example. A software company is mid performance on a signed
        federal software contract. This is an example, not a real company. $90,000
        in accepted invoices is unpaid. The SAM record is no longer Active. The
        $90,000 is not forfeited just because registration lapsed. Payment can
        wait until the record is Active and the EFT information in SAM is
        correct.
      </p>

      <TableWrap caption="SAM lapse payment example">
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
                Accepted invoices on a signed federal contract
              </td>
              <td data-label="Amount">$90,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount still unpaid</td>
              <td data-label="Amount">$90,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount to size a timing tool to</td>
              <td data-label="Amount">
                The $90,000, plus the lag until the SAM record is Active and the
                EFT information is correct
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        This is our example. Size a timing tool to the $90,000 and that lag. Do
        not treat the invoices as lost. Do not raise growth capital against a
        registration hold.
      </p>

      <p>
        If the invoice is waiting on acceptance instead, that is a different delay.
        See{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          invoice acceptance
        </Link>
        . Prompt payment interest, where it applies, does not run on an invoice
        that is not proper. See{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        .
      </p>

      <h2
        id={
          H[
            "Is this the same as state vendor setup or a purchase card issue?"
          ]
        }
      >
        Is this the same as state vendor setup or a purchase card issue?
      </h2>

      <p>
        No. First time state payee registration is a different system from federal
        SAM maintenance mid contract. A purchase card can also be blocked by a SAM
        debt flag. Some card micro purchases are excepted from the SAM registration
        policy. Those are different paths. If a payment is held, check which system
        the agency is using.
      </p>

      <p>
        First time state payee setup and EFT enrollment is a different fix. See{" "}
        <Link href={`/blog/${GOVERNMENT_VENDOR_REGISTRATION_POST.slug}`}>
          vendor registration and EFT payment
        </Link>
        . A purchase card SAM flag, or a card payment, is a different path. See{" "}
        <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>purchase card payments</Link>
        . If the right to payment was assigned, the assignee must be registered
        separately. See{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          assignment of claims
        </Link>
        . Ask your agency. Rules differ.
      </p>

      <h2 id={H["The record is not the invoice"]}>
        The record is not the invoice
      </h2>

      <p>Start with two facts, not one.</p>

      <p>
        The invoices may still be due. The SAM record may no longer be Active. Those
        facts can both be true at once.
      </p>

      <p>
        A lapse can hold the payment. It does not, by itself, cancel accepted work.
        Size cash to amounts that will still be paid. Do not size cash as if the
        invoices were gone.
      </p>

      <h2 id={H["What should you do this week?"]}>
        What should you do this week?
      </h2>

      <p>
        Check whether your SAM record is Active and whether the EFT information is
        current. Renew or update the registration if it is not. Then ask the
        payment office whether that is what is holding the invoice. Write down the
        invoice numbers, dates, and what the office says is still open.
      </p>

      <ol>
        <li>
          Check SAM status and renew if the record is not Active.{" "}
          <ExtLink href="https://www.sam.gov">SAM.gov</ExtLink> is the official
          place to renew. Contractors may obtain more information on registration
          and annual confirmation requirements there.
        </li>
        <li>
          Confirm the payment office received the invoices, and track status with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          If the delay is acceptance, not SAM, that is a different fix. See{" "}
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            invoice acceptance
          </Link>
          .
        </li>
        <li>
          If this is a first time state payee setup problem, that is a different
          path. See{" "}
          <Link href={`/blog/${GOVERNMENT_VENDOR_REGISTRATION_POST.slug}`}>
            vendor registration and EFT payment
          </Link>
          .
        </li>
        <li>
          Talk to counsel if a hold continues. Do not invent a new invoice number or
          a resubmission script. Do not treat the invoices as forfeited.
        </li>
      </ol>

      <p>
        Our view: an unpaid invoice after a SAM lapse shows only that payment has
        not arrived. It is not, by itself, proof the invoice is gone.
      </p>

      <p>
        Keep the record Active through final payment. Ask the payment office what is
        holding the payment. Fund amounts that will still be paid. Do not raise
        growth capital against a registration hold.
      </p>

      <h2 id={H["Should you finance invoices held by a SAM lapse?"]}>
        Should you finance invoices held by a SAM lapse?
      </h2>

      <p>
        If the $90,000 is still due once the record is Active and the EFT data is
        correct, the wait is a timing problem. It is not a growth problem. Size a
        timing tool to those invoices and the lag. Do not raise growth capital
        against a registration hold.
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
                Unpaid invoices that will still be paid once SAM is Active and EFT
                data is correct
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                A timing tool sized to those invoices and the lag
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
                A need to build or sell more, not invoices waiting on a SAM record
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling more.
        Invoices waiting on an Active SAM record are not that problem by themselves.
        For how claims stack, see{" "}
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

      <Faq items={SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${GOVERNMENT_VENDOR_REGISTRATION_POST.slug}`}>
            Vendor registration and EFT payment
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>
            Purchase card payments
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