import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_FAQ,
  GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_HEADINGS,
  GOVERNMENT_VENDOR_REGISTRATION_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_CARD_POST,
  PURCHASE_ORDER_BALANCE_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST, GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_POST} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentPaymentOffsetWarrantHoldPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A short government payment may be an offset or a hold against a debt,
        not a late invoice. On eligible federal payments, the Treasury Offset
        Program can reduce a payment when the payee&apos;s name and tax
        identification number match a debt in its database. In this post, a
        warrant means a state payment warrant, which is the state&apos;s payment
        instrument. This post uses the word only in that sense. Texas can hold a
        state payment warrant and later apply it to a reported state debt.
        California&apos;s Controller may offset amounts the state owes you
        against amounts you owe a state agency. Read the notice. Talk to
        counsel. Size cash to what will still be paid, not to dollars already
        applied to a debt.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A founder invoices $120,000 on a signed government software contract.
        $70,000 arrives. $50,000 does not. The CEO treats the missing $50,000 as
        a late receivable. Payroll still runs. Raising against that gap starts
        to look like the next step.
      </p>

      <p>
        The reason that frame can fail is simple. The missing amount may already
        have been applied to a debt. Or it may only be held. It may also be a
        dispute, a purchase order shortfall, a partial payment, or a process
        error. Read the notice before you treat the gap as a late invoice.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            A short payment may be an offset or a hold against a debt. It is not
            always a late invoice.
          </li>
          <li>
            On eligible federal payments, the Treasury Offset Program can reduce
            a payment when name and tax records match a debt, and the payment is
            a type that can be offset.
          </li>
          <li>
            Texas can hold a state payment warrant and later apply it to a
            reported state debt. California&apos;s Controller may offset amounts
            the state owes you.
          </li>
          <li>
            Read the notice. Size cash to what will still be paid, not to dollars
            already applied to a debt.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Maybe, but not always. A short payment may be an offset or a hold
        against a debt. Treasury can reduce an eligible federal payment when the
        payee&apos;s name and tax identification number match a debt. Texas can
        hold a payment and later apply it to a reported state debt. California
        may offset amounts the state owes you. Size cash to what will still be
        paid.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Offset: the government reduces a payment you are owed and applies that
          amount to a debt you owe. The missing dollars may no longer be a
          receivable on the invoice.
        </li>
        <li>
          Hold: the government issues the payment but does not release it yet,
          often while a reported debt is unresolved. A hold can later be released
          or applied.
        </li>
        <li>
          Treasury Offset Program: the federal program that matches eligible
          payments against a database of overdue debts before the payment is
          sent.
        </li>
        <li>
          Warrant hold: a Texas process in which the Comptroller keeps a state
          payment warrant for a payee who has been reported as owing a state
          debt. A state payment warrant is the state&apos;s payment instrument.
        </li>
      </ul>

      <h2 id={H["What is a government payment offset?"]}>
        What is a government payment offset?
      </h2>

      <p>
        An offset is when the government reduces a payment you are owed and
        applies that amount to a debt. On eligible federal payments, a payment is
        reduced if the payee&apos;s name and tax identification number match a
        debtor in the Treasury Offset Program database, and the payment is a type
        that can be offset. Any amount that remains goes to the payee.
      </p>

      <p>
        Consider our example. A software company invoices $120,000 on a signed
        government software contract. This is an example, not a real company.
        $70,000 arrives. $50,000 does not. A notice later shows that $50,000 was
        offset or held against a reported debt. Those are not the same facts.
        Read the notice.
      </p>

      <p>
        The federal program is plain on the test. A payment is reduced to pay an
        overdue debt if two things are true. The payee&apos;s name and tax
        identification number match a debtor in the program database. And the
        payment is a type that can be offset. (
        <ExtLink href="https://fiscal.treasury.gov/debt-management/treasury-offset-program-top/how-top-works">
          Treasury Offset Program overview
        </ExtLink>
        )
      </p>

      <p>
        <em>
          &quot;If money remains in the payment after it is offset, the reduced
          payment goes to the payee.&quot;
        </em>
      </p>

      <p>
        Offset, in the federal rule, is when the government withholds part or all
        of a federal payment to satisfy a delinquent debt owed to the
        government. (
        <ExtLink href="https://www.ecfr.gov/current/title-31/subtitle-B/chapter-II/subchapter-A/part-285/subpart-A/section-285.5">
          31 CFR 285.5
        </ExtLink>
        )
      </p>

      <p>
        This is a federal payment rule. It does not, by itself, explain a state
        warrant hold. Not every short payment is an offset. Not every federal
        invoice is reduced this way. Some payment types have special rules, or
        are left out.
      </p>

      <h2
        id={
          H[
            "How can you tell if a short payment was an offset or something else?"
          ]
        }
      >
        How can you tell if a short payment was an offset or something else?
      </h2>

      <p>
        Start with the notice, not with a guess. If a federal payment was
        offset, Treasury sends a letter. That letter explains why the payment
        was less than expected, or that the entire expected payment went to
        satisfy an overdue debt. In Texas, the Comptroller mails a notice when a
        warrant is held. A short payment can also be a dispute, a purchase order
        shortfall, or a setup error. Do not assume it is an offset until you
        read what the agency sent.
      </p>

      <p>
        Look up payment status with{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          invoice payment status tools
        </Link>
        . If a purchase order ran out of money on work already in the contract,
        that is a different fix. See{" "}
        <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
          purchase order balance and invoice holds
        </Link>
        . If the payment was not offset and the invoice is still waiting on
        acceptance, that is a different delay. See{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          invoice acceptance
        </Link>
        . A dispute hold is a different cause too.
      </p>

      <h2
        id={H["If the payment was offset, is the invoice still unpaid?"]}
      >
        If the payment was offset, is the invoice still unpaid?
      </h2>

      <p>
        Not always in the way a late invoice is unpaid. Under the federal rule,
        amounts not offset still go to the payee. In the federal contractor
        example, a certified payment may be offset to collect a delinquent debt
        owed to another federal agency. If that amount is credited to the debt,
        the contractor has been paid in full for those services.
        California&apos;s statute says the amount due from the state is the net
        amount after the offset.
      </p>

      <p>
        This &quot;paid in full&quot; example applies only to that federal
        contractor case. Do not apply it to a Texas warrant that is only being
        held. Do not treat it as a claim that you have no rights on the
        underlying debt. Talk to counsel about that debt. This post is not tax
        advice.
      </p>

      <p>
        If, in our example, the $50,000 has been applied to a debt, do not treat
        it as a late receivable. Size a timing tool to the $70,000 that arrived,
        plus any other amounts that will still be paid, and their payment lag.
      </p>

      <TableWrap caption="Government payment offset example">
        <table>
          <caption>Government payment offset example</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Invoice on a signed contract</td>
              <td data-label="Amount">$120,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount that arrived</td>
              <td data-label="Amount">$70,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount missing</td>
              <td data-label="Amount">$50,000</td>
            </tr>
            <tr>
              <td data-label="Item">
                Amount to size a timing tool to if the $50,000 was applied to a
                debt
              </td>
              <td data-label="Amount">
                The $70,000 already collected, plus any other amounts that will
                still be paid and their payment lag
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        This is our example. Two figures matter here. One arrived. One may have
        been applied, or may only be held. They are not the same amount of cash.
      </p>

      <p>
        <em>
          &quot;The disbursing official shall pay any amounts not offset to the
          payee.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-31/subtitle-B/chapter-II/subchapter-A/part-285/subpart-A/section-285.5">
          31 CFR 285.5
        </ExtLink>
        ) California&apos;s rule is that the amount due from the state, or from
        a state agency, is the net amount owing after the offset. (
        <ExtLink href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=12419.5">
          California Government Code 12419.5
        </ExtLink>
        )
      </p>

      <h2 id={H["What do Texas and California do?"]}>
        What do Texas and California do?
      </h2>

      <p>
        They do not copy the federal Treasury Offset Program. They can also hold
        or reduce what the state pays you. Texas may hold a warrant when a payee
        is reported as having a state debt, and in certain circumstances later
        apply that payment to what is owed. California&apos;s Controller may, in
        the Controller&apos;s discretion, offset an amount you owe a state
        agency against an amount a state agency owes you.
      </p>

      <p>
        A Texas hold is not the same as an offset that has already been applied.
        If a payee is reported as owing a state debt, the Comptroller prepares
        and prints a held warrant. That office keeps the warrant until the payee
        pays what is owed, or until the reporting agency authorizes release. In
        certain cases, the law also lets that office apply the state payment to
        what is owed. The Comptroller calls that an offset. (
        <ExtLink href="https://fmx.cpa.texas.gov/fmx/payment/resources/svpr_all.php">
          Texas Comptroller guidance on payments on hold
        </ExtLink>
        )
      </p>

      <p>
        The notice says the payment will be applied to the amount owed 30 days
        after the issue date on the notice, if the debt is not paid or the
        reporting agency does not ask that the payment be released. That 30 day
        period is a Texas notice rule. It is not a federal Treasury Offset
        Program rule. This guidance is for Texas state payments through the
        Comptroller. It does not, by itself, cover every city or county
        contract.
      </p>

      <p>
        California&apos;s power is discretionary. The Controller may offset an
        amount due a state agency from a person or entity against an amount a
        state agency owes that person or entity. (
        <ExtLink href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=12419.5">
          California Government Code 12419.5
        </ExtLink>
        ) The Controller is not required to offset every payment. This is
        California state agency authority. It is not a copy of the federal
        program. It does not, by itself, cover every city or county payment.
      </p>

      <p>
        The notice tells you to contact the agency that reported the debt. Talk
        to counsel. Ask your agency which rule applies. Local rules differ.
      </p>

      <h2
        id={H["The missing amount is not always cash you can collect"]}
      >
        The missing amount is not always cash you can collect
      </h2>

      <p>Start with two questions, not one.</p>

      <p>
        Was the missing amount applied to a debt? Or is it only being held? If
        it has been applied, it is not sitting in a payment queue. If it is only
        being held, it may still be released. Or it may be applied after the
        notice period.
      </p>

      <p>
        Do not mix those facts. Size cash to what will still be paid.
      </p>

      <h2 id={H["What should you do this week?"]}>
        What should you do this week?
      </h2>

      <ol>
        <li>
          Read any offset or hold notice. Write down the amount applied or held,
          the agency named, and whether the payment was reduced or only
          retained. Track status with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          Do not treat the missing amount as a late invoice until you know what
          happened. If the hold is because a purchase order ran out of money,
          that is a different fix. See{" "}
          <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
            purchase order balance and invoice holds
          </Link>
          .
        </li>
        <li>
          If a government purchase card was refused because of a debt flag in
          the federal registry, that is a related but different path. See{" "}
          <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>
            purchase card payments
          </Link>
          .
        </li>
        <li>
          If pay setup is still incomplete, see{" "}
          <Link href={`/blog/${GOVERNMENT_VENDOR_REGISTRATION_POST.slug}`}>
            vendor registration and EFT payment
          </Link>
          .
        </li>
        <li>Contact the agency named on the notice, and talk to counsel.</li>
      </ol>

      <p>
        Interest clocks after a late payment are covered in{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . That post owns the interest mechanics. Use it only if a proper invoice
        remains unpaid past its due date for a reason other than a completed
        offset.
      </p>

      <p>
        Our view: a short payment shows only what arrived. It is not, by itself,
        proof of a late invoice.
      </p>

      <p>
        Read the notice. Find out whether the missing amount was applied or is
        only being held. Fund amounts that will still be paid. Do not raise
        growth capital against dollars already applied to a debt.
      </p>

      <h2 id={H["Should you finance the missing amount?"]}>
        Should you finance the missing amount?
      </h2>

      <p>
        Usually not, if that amount has already been applied to a debt. Those
        dollars are not a delayed receivable. If you have a payment lag on
        amounts that will still be paid, that is a timing problem. If you need
        cash to build or sell more, that is a growth problem. Size the tool to
        what will still be paid. Do not size it to an amount already applied.
      </p>

      <p>Start with a basic line from our working capital post.</p>

      <p>
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
                A payment lag on amounts that will still be paid
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">A timing tool sized to those amounts</td>
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
                A need to build or sell more, not a short payment already
                applied to a debt
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling
        more. Dollars already applied to a debt are not that problem. For how
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

      <Faq items={GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            Invoice payment status tools
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
            Purchase order balance and invoice holds
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>
            Purchase card payments
          </Link>
        </li>
      </ul>

      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      
      <FounderCtaBlock position="bottom" postSlug={GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_POST.slug} />

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