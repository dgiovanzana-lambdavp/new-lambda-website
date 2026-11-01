import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CASH_FLOW_GAP_POST,
  EARLY_PAYMENT_DISCOUNT_POST,
  INVOICE_ACCEPTANCE_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_CARD_FAQ,
  PURCHASE_CARD_HEADINGS,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  PURCHASE_CARD_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PurchaseCardPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Yes. Federal agencies can pay you with a government purchase card, and
        the card issuer is authorized to pay you immediately. The card fits
        small orders, add ons and renewals. Before a large contract goes on the
        card, weigh the fee, the loss of Prompt Payment Act cover and the block
        on assigning that contract&apos;s payments.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a program office that wants to buy ten more seats. The buyer
        asks a simple question: can we just put it on the card? For years, our
        CEO has said no.
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
            Federal rules let agencies pay contractors with the purchase card.
            The card issuer pays you, and the agency repays the issuer later.
          </li>
          <li>
            The card is not limited to small purchases. Larger payments work
            when you agree.
          </li>
          <li>
            Card payments carry your normal card fee and sit outside the Prompt
            Payment Act.
          </li>
          <li>
            If any payment on a contract goes on the card under the clause, that
            contract&apos;s payments cannot be assigned.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Yes. A government purchase card is a government issued charge card that
        agency staff use to buy and pay for goods and services. GSA SmartPay is
        the federal program that runs these cards.
      </p>

      <p>
        When the card pays, the card issuer can{" "}
        <em>&quot;make immediate payment to the contractor&quot;</em>. (
        <ExtLink href="https://www.acquisition.gov/far/32.1108">
          FAR 32.1108
        </ExtLink>
        ) The card issuer is the bank that issued the agency&apos;s card. The
        trade offs are a fee, no Prompt Payment Act cover and no assignment of
        claims on that contract.
      </p>

      <h2 id={H["The problem: the swipe and the contract"]}>
        The problem: the swipe and the contract
      </h2>

      <p>
        Our CEO runs a $4M software company. This is an illustration, not a real
        company. The company sells to federal and county buyers.
      </p>

      <p>
        Two kinds of money are slow. A stream of small orders waits 45 to 60
        days per invoice. These are extra seats, training and add on modules, at
        $3,000 to $12,000 each.
      </p>

      <p>
        One $600,000 federal contract is billed quarterly. Each $150,000 bill
        waits about 75 days.
      </p>

      <p>
        Now a program office offers to pay the small orders by purchase card.
        The likely reason: the fee looked like lost margin.
      </p>

      <h3>Why the agency wants the card</h3>

      <p>
        The FAR states its own reasons. Agencies use the card{" "}
        <em>
          &quot;to facilitate accelerated payment, to earn refunds, and to
          reduce invoice processing costs.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/32.009-1">
          FAR 32.009-1
        </ExtLink>
        ) GSA puts it plainly:{" "}
        <em>
          &quot;The federal government prefers to use GSA SmartPay® solutions to
          pay merchants.&quot;
        </em>{" "}
        (
        <ExtLink href="https://smartpay.gsa.gov/merchants/">
          GSA SmartPay, Merchants
        </ExtLink>
        )
      </p>

      <p>
        So the likely reason a program office offers the card first is that it
        saves the agency paperwork and earns refunds. Both sides can gain. You
        get paid sooner, and the agency cuts its own invoice work.
      </p>

      <h3>Three choices</h3>

      <ol>
        <li>Keep saying no to cards and invoice everything.</li>
        <li>
          Move everything onto the card, including the big contract.
        </li>
        <li>
          Take the card for small orders and renewals. Keep the big contract on
          invoice and electronic funds transfer, and fund its wait with a tool
          built for timing.
        </li>
      </ol>

      <p>
        Our view: the card is a way to fix the days, not a financing tool, so
        take it for small orders, add ons and renewals, and decide each large
        contract on its own before any payment goes on the card.
      </p>

      <h2 id={H["How a purchase card payment works"]}>
        How a purchase card payment works
      </h2>

      <p>
        A card payment is a payment by a third party. The issuer pays you. Then,{" "}
        <em>
          &quot;The Government reimburses the third party at a later date for
          the third party’s payment to the contractor.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/32.1108">
          FAR 32.1108
        </ExtLink>
        )
      </p>

      <p>
        How fast the money lands in your bank depends on your own card
        processing setup. It is likely a matter of days, not weeks. Check with
        your processor.
      </p>

      <p>
        The card does not change what you may bill. Under the Payment by Third
        Party clause, you charge the card at the time, and for the amount, the
        contract already lets you bill. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-36">
          FAR 52.232-36
        </ExtLink>
        )
      </p>

      <h2 id={H["Is the purchase card only for small purchases?"]}>
        Is the purchase card only for small purchases?
      </h2>

      <p>
        No. The micro purchase threshold is the dollar level under which a
        federal buyer can buy with very little paperwork. It is generally
        $15,000, with lower amounts for some construction and services buys. (
        <ExtLink href="https://www.acquisition.gov/far/2.101">
          FAR 2.101
        </ExtLink>
        )
      </p>

      <p>
        The FAR tells agencies not to limit the card to micro purchases. It
        encourages larger card use to place orders and pay under contracts, when
        the contractor agrees. (
        <ExtLink href="https://www.acquisition.gov/far/13.301">
          FAR 13.301
        </ExtLink>
        )
      </p>

      <p>
        Written contracts paid by card should include FAR 52.232-36, Payment by
        Third Party. A card can also pay under a contract without that clause if
        you agree. (
        <ExtLink href="https://www.acquisition.gov/far/32.1108">
          FAR 32.1108
        </ExtLink>
        )
      </p>

      <p>
        Ask your buyer what card limits apply to your orders. State and local
        buyers run their own card programs. We did not review state or local
        rules for this post, so ask each buyer how it pays.
      </p>

      <h2 id={H["What you give up when the card pays"]}>
        What you give up when the card pays
      </h2>

      <h3>A fee</h3>

      <p>
        GSA says the card fees you already agreed with your bank for private
        sector cards also apply to government purchases. (
        <ExtLink href="https://smartpay.gsa.gov/merchants/">
          GSA SmartPay, Merchants
        </ExtLink>
        ) So the government does not pay a special rate. You pay your normal fee
        on every dollar charged.
      </p>

      <h3>Prompt Payment Act cover</h3>

      <p>
        The Prompt Payment Act is the federal law that sets payment due dates
        and late interest on proper invoices. Card payments are not payments by
        the government, so the Act does not cover them. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-36">
          FAR 52.232-36
        </ExtLink>
        ) If the charge goes through, you are paid, so no late interest is
        needed. Our{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          Prompt Payment Act: what GovTech vendors can collect
        </Link>{" "}
        covers the invoice side.
      </p>

      <h3>Assignment of claims on that contract</h3>

      <p>
        Assignment of claims is a legal transfer of your right to be paid on a
        federal contract to a bank or other financing institution, so the
        government pays that institution. If any payment on a contract is made
        by card under the clause, no payment on that contract may be assigned. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-36">
          FAR 52.232-36
        </ExtLink>
        ) This is the key financing trade off. See{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          The Assignment of Claims Act explained
        </Link>
        .
      </p>

      <h3>Card or invoice at a glance</h3>

      <p>
        <em>Card or invoice? (summary of the rules above)</em>
      </p>

      <TableWrap caption="Card or invoice? (summary of the rules above)">
        <table>
          <caption>Card or invoice? (summary of the rules above)</caption>
          <thead>
            <tr>
              <th scope="col">Question</th>
              <th scope="col">Purchase card</th>
              <th scope="col">Invoice and EFT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Question">Who pays you</td>
              <td data-label="Purchase card">Card issuer</td>
              <td data-label="Invoice and EFT">Agency payment office</td>
            </tr>
            <tr>
              <td data-label="Question">Speed</td>
              <td data-label="Purchase card">Likely days, by your setup</td>
              <td data-label="Invoice and EFT">
                Set by the contract and payment rules
              </td>
            </tr>
            <tr>
              <td data-label="Question">Fee</td>
              <td data-label="Purchase card">Your normal card fee</td>
              <td data-label="Invoice and EFT">None</td>
            </tr>
            <tr>
              <td data-label="Question">Prompt Payment Act</td>
              <td data-label="Purchase card">Not covered</td>
              <td data-label="Invoice and EFT">Covered</td>
            </tr>
            <tr>
              <td data-label="Question">Assignment of claims</td>
              <td data-label="Purchase card">Blocked on that contract</td>
              <td data-label="Invoice and EFT">Possible</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["When the card is worth the fee"]}>
        When the card is worth the fee
      </h2>

      <p>
        The fee is a one time cost of speed. It is not a loan, and nothing is
        repaid.
      </p>

      <p>
        Our math uses an example fee of 2.5%. It is an example number for
        illustration, not a market rate or a fact. Use your own processor&apos;s
        rate.
      </p>

      <p>
        <em>
          What the example fee costs on each charge (our math; example 2.5% fee;
          illustration, not data)
        </em>
      </p>

      <TableWrap caption="What the example fee costs on each charge (our math; example 2.5% fee; illustration, not data)">
        <table>
          <caption>
            What the example fee costs on each charge (our math; example 2.5%
            fee; illustration, not data)
          </caption>
          <thead>
            <tr>
              <th scope="col">Charge</th>
              <th scope="col">Example fee</th>
              <th scope="col">Wait the card replaces</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Charge">$3,000 small order</td>
              <td data-label="Example fee">$75</td>
              <td data-label="Wait the card replaces">45 to 60 days</td>
            </tr>
            <tr>
              <td data-label="Charge">$12,000 add on</td>
              <td data-label="Example fee">$300</td>
              <td data-label="Wait the card replaces">45 to 60 days</td>
            </tr>
            <tr>
              <td data-label="Charge">$150,000 quarterly bill</td>
              <td data-label="Example fee">$3,750</td>
              <td data-label="Wait the card replaces">about 75 days</td>
            </tr>
            <tr>
              <td data-label="Charge">$600,000 full contract year</td>
              <td data-label="Example fee">$15,000</td>
              <td data-label="Wait the card replaces">
                about 75 days per bill
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        On a $10,000 order, the example fee is $250, and you receive $9,750 in
        days instead of 45 to 60 days. The fee grows with every dollar charged.
        On the big contract, the card would also end Prompt Payment Act cover
        and block assignment.
      </p>

      <p>
        An early payment discount is another way to buy speed on one invoice.
        See{" "}
        <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
          Early payment discounts on government contracts
        </Link>
        .
      </p>

      <h2 id={H["The decision"]}>The decision</h2>

      <p>
        Our CEO picks the third choice. The small orders go on the card. The
        $600,000 contract stays on invoice and electronic funds transfer.
      </p>

      <h3>Why it fits</h3>

      <ul>
        <li>
          On small orders, the card turns a 45 to 60 day wait into days. The fee
          is known up front, order by order.
        </li>
        <li>
          On the big contract, the fee applies to every dollar, and one card
          payment would end Prompt Payment Act cover and block assignment of
          that contract&apos;s payments. That matters if the company may want to
          finance against it. (
          <ExtLink href="https://www.acquisition.gov/far/52.232-36">
            FAR 52.232-36
          </ExtLink>
          )
        </li>
      </ul>

      <p>
        The quarterly wait is still real. As our working capital guide says,{" "}
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

      <h2 id={H["How to get set up (agency facing steps)"]}>
        How to get set up (agency facing steps)
      </h2>

      <ol>
        <li>
          Make sure your company can take card payments, and that your SAM
          record is current and clear.
        </li>
        <li>
          Tell your contracting officer and program office that you accept the
          purchase card.
        </li>
        <li>
          Put card eligible items on their own orders: seats, training, add ons
          and renewals.
        </li>
        <li>
          Keep the contract&apos;s billing rules. Charge only when, and what,
          the contract says you may bill.
        </li>
        <li>
          Keep large contracts you may finance on invoice and electronic funds
          transfer.
        </li>
      </ol>

      <p>
        On step 1: A SAM debt flag matters here. SAM, the System for Award
        Management, is the federal registry for contractors. If it shows
        delinquent federal debt subject to Treasury offset, the program that can
        take payments owed to you to cover debts you owe the government, the
        card is not authorized, and payment goes by electronic funds transfer
        instead. The flag cannot be used to deny you the award. (
        <ExtLink href="https://www.acquisition.gov/far/32.1108">
          FAR 32.1108
        </ExtLink>
        )
      </p>

      <p>
        The contracting officer is the government official with authority over
        the contract&apos;s terms.
      </p>

      <h2 id={H["Lesson: the card fixes days, it does not finance them"]}>
        Lesson: the card fixes days, it does not finance them
      </h2>

      <p>
        Back to our CEO. The small orders now clear in days. The big contract
        still waits about 75 days per bill, and that wait gets planned, not
        swiped.
      </p>

      <p>
        The card is a fix for the days on small tickets. Large contracts are a
        separate decision, made one contract at a time.
      </p>

      <h2 id={H["Bridging what remains: use X if you have Y problem"]}>
        Bridging what remains: use X if you have Y problem
      </h2>

      <p>
        Each option fits one problem. We do not rank them by cost or risk.
      </p>

      <ul>
        <li>
          Use the purchase card if you have small orders, add ons or renewals
          that wait weeks for payment.
        </li>
        <li>
          Use clean invoices and clear acceptance terms if you have a large
          contract that stalls before the payment clock starts. See{" "}
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            Government invoice acceptance
          </Link>
          .
        </li>
        <li>
          Use an early payment discount if the agency offers one and you need
          speed on one invoice. See{" "}
          <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
            Early payment discounts on government contracts
          </Link>
          .
        </li>
        <li>
          Use a revolving line of credit if you have recurring timing gaps
          across many receivables. See{" "}
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit for SaaS
          </Link>
          .
        </li>
        <li>
          Use loans with bullet payments if you have a large signed contract and
          want to repay principal once the contract cash arrives. See{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet loan vs amortizing loan
          </Link>
          .
        </li>
        <li>
          Use assignment of claims if you have a large federal contract that a
          bank or other financing institution will finance. Keep that contract
          off the card.
        </li>
      </ul>

      <p>
        To size the whole gap first, see{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        . For every lever in one place, see How to get paid faster on government
        contracts.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={PURCHASE_CARD_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: what GovTech vendors can collect
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act explained
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
