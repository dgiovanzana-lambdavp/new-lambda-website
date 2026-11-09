import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_POST,
  PURCHASE_ORDER_BALANCE_FAQ,
  PURCHASE_ORDER_BALANCE_HEADINGS,
  REVOLVING_LINE_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  PURCHASE_ORDER_BALANCE_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PurchaseOrderBalancePostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Government agencies can only pay what the purchase order has reserved. If
        your invoice is larger than the PO balance, the excess waits for a change
        order, which needs the same approvals as the original PO. Ask for the
        covered amount now and bill the rest separately. Track the PO balance like
        a credit limit, and treat the wait as a timing problem, not a growth
        problem.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a software company whose customer is using more every quarter.
        That should be good news. Then one invoice stalls, and the agency says the
        purchase order is out of money. Often, the program manager wants to pay
        you. The PO system will not let them pay more than was reserved.
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue,
          bootstrapped or venture backed under about $25M raised, with state, local
          or federal customers and long receivables.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>An agency can only pay what the purchase order has reserved.</li>
          <li>
            When an invoice is larger than the PO balance, the excess needs a
            change order.
          </li>
          <li>
            Some states tell agencies to pay the covered part now and take a second
            invoice for the rest.
          </li>
          <li>
            Watch the PO balance like a credit limit. Fund the dated wait. Use
            growth capital for growth.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        The agency can only pay what the purchase order has reserved. When an
        invoice is larger than the remaining PO balance, the excess waits for a
        change order, and that needs the same approvals as the original order.
        Some states tell agencies to pay the covered part now and take a second
        invoice for the rest. Ask for that.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Purchase order (PO): the agency&apos;s document that sets aside money to
          pay you.
        </li>
        <li>Encumbrance: money reserved on the agency&apos;s books for a PO.</li>
        <li>PO balance: what is left on the PO after past invoices.</li>
        <li>Change order: the document that raises or lowers a PO.</li>
        <li>
          Partial payment: paying the part of an invoice the PO still covers.
        </li>
      </ul>

      <h2 id={H["Why the purchase order caps what an agency can pay"]}>
        Why the purchase order caps what an agency can pay
      </h2>

      <p>
        Delaware, for example, uses encumbrance accounting to prevent over
        committing funds. The agency reserves money on a PO before it spends. An
        invoice that exceeds what is left needs a change order before the excess
        can be paid.
      </p>

      <p>
        That is why a hold often feels personal when it is not. The system blocks
        payment over the reserve.
      </p>

      <p>
        If the money itself is not appropriated yet, that is a different delay,
        covered in our fiscal year timing posts. For local customers, a PO increase
        may also need the board. See{" "}
        <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
          local government board approval and vendor payments
        </Link>
        .
      </p>

      <h2 id={H["What the state manuals say"]}>What the state manuals say</h2>

      <p>
        Delaware&apos;s Budget and Accounting Policy Manual puts the rule this
        way:{" "}
        <em>
          &quot;When an invoice is submitted that exceeds the remaining balance on
          the PO, the Organization must complete a Change Order, unless the amount
          that exceeds the remaining balance meets a Direct Claim exception.&quot;
        </em>{" "}
        (
        <ExtLink href="https://budget.delaware.gov/accounting-manual/documents/chapter07.pdf">
          Delaware Budget and Accounting Policy Manual, Chapter 7
        </ExtLink>
        )
      </p>

      <p>
        It also says the approvals do not get lighter:{" "}
        <em>
          &quot;The same approvals required to approve the original encumbrance are
          necessary to adjust the PO.&quot;
        </em>
      </p>

      <p>
        And it tells agencies not to wait for a full fix:{" "}
        <em>
          &quot;Organizations should not hold back payments until the PO can be paid
          in total. Organizations should encourage partial billing by
          suppliers.&quot;
        </em>
      </p>

      <p>
        Pennsylvania&apos;s DGS Procurement Handbook says the same for a change that
        needs a second invoice:{" "}
        <em>
          &quot;If a change order is needed to increase the contract or purchase
          order and a second invoice is required from a supplier, a partial payment
          should be made for items properly received and approved based on the
          original invoice amount.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.pa.gov/content/dam/copapwp-pagov/en/dgs/documents/documents/procurement-forms/handbook/pt2/pt%20ii%20ch%2024%20dgs%20change%20orders.pdf">
          Pennsylvania DGS Procurement Handbook, Change Orders
        </ExtLink>
        )
      </p>

      <p>
        Under that handbook, the agency tells you a partial payment is coming and
        asks for a second invoice for the increase.
      </p>

      <p>Other states and localities differ. Ask your agency how it handles invoices over the PO.</p>

      <h2 id={H["The invoice that outgrew its PO"]}>
        The invoice that outgrew its PO
      </h2>

      <p>
        <strong>Problem:</strong> our CEO runs a $5M software company. This is an
        illustration, not a real company. It sells a usage priced platform to a
        state agency. The PO for the year is $120,000. Usage grows. By Q4 the
        company has billed $95,000 and sends a $40,000 invoice. Only $25,000 is
        left on the PO. The whole invoice stalls. The board asks whether to raise a
        growth round. More cash feels like a fix for every gap.
      </p>

      <p>
        <em>Table 1: One invoice over the PO, illustrative</em>
      </p>

      <TableWrap caption="Table 1: One invoice over the PO, illustrative">
        <table>
          <caption>Table 1: One invoice over the PO, illustrative</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Split at the balance</th>
              <th scope="col">One invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">PO balance</td>
              <td data-label="Split at the balance">$25,000</td>
              <td data-label="One invoice">$25,000</td>
            </tr>
            <tr>
              <td data-label="">Invoice</td>
              <td data-label="Split at the balance">$25,000 now, $15,000 later</td>
              <td data-label="One invoice">$40,000</td>
            </tr>
            <tr>
              <td data-label="">Paid on the normal cycle</td>
              <td data-label="Split at the balance">$25,000</td>
              <td data-label="One invoice">$0</td>
            </tr>
            <tr>
              <td data-label="">Waits for the change order</td>
              <td data-label="Split at the balance">$15,000</td>
              <td data-label="One invoice">$40,000</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        <strong>Choices:</strong> there are three paths.
      </p>

      <ol>
        <li>Raise growth capital and accept the hold.</li>
        <li>Wait for the agency to sort it out.</li>
        <li>
          Ask for partial payment of the $25,000 now, send a second invoice for
          $15,000, help the program manager start the change order, and fund the
          dated wait with a tool built for timing.
        </li>
      </ol>

      <p>
        <strong>Decision:</strong> path 3.
      </p>

      <p>
        <strong>Why it fits:</strong>
      </p>

      <ul>
        <li>
          Delaware&apos;s manual says an invoice over the PO balance needs a change
          order, with the same approvals as the original. That takes time.
        </li>
        <li>
          Delaware tells agencies not to hold payment until the PO can be paid in
          full and to encourage partial billing. Pennsylvania says to pay the
          original amount and request a second invoice for the increase.
        </li>
        <li>
          Split, only $15,000 (37.5 percent) waits. Unsplit, all $40,000 likely
          waits.
        </li>
        <li>
          The overage itself is good news: the customer is using more. That is a
          growth signal. The held $15,000 is a timing problem with a known fix.
        </li>
      </ul>

      <p>
        <strong>Lesson:</strong> watch the PO balance like a credit limit. Warn the
        agency before you hit it. Split invoices at the balance. Fund the dated
        wait with timing tools.
      </p>

      <p>
        Our view: a PO overage is one of the most fixable delays in government
        billing, so see it coming, ask for partial payment, and fund only the dated
        wait.
      </p>

      <p>
        If overages happen every year, that is growth. Price the next PO for it. If
        it happens once, it is timing.
      </p>

      <h2 id={H["A PO balance routine"]}>A PO balance routine</h2>

      <ol>
        <li>Track the PO balance after every invoice.</li>
        <li>
          Tell the program manager when the balance will run out, a quarter ahead if
          you can.
        </li>
        <li>Ask whether a change order is needed and who approves it.</li>
        <li>
          If an invoice crosses the balance, bill the covered amount on one invoice
          and the excess on a second.
        </li>
        <li>When renewing, size the next PO for expected usage.</li>
        <li>Put the expected pay date for the excess in your cash forecast.</li>
      </ol>

      <p>
        The agency&apos;s{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          payment status
        </Link>{" "}
        tools show whether an invoice is on hold. If the PO is funded by a grant,
        the claim rules can add another clock: see{" "}
        <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
          grant funded government customers and vendor payments
        </Link>
        .
      </p>

      <h2 id={H["Timing or growth? Use X if you have Y problem"]}>
        Timing or growth? Use X if you have Y problem
      </h2>

      <p>
        Start with the point our working capital post makes.{" "}
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
              <td data-label="If you have">One invoice over the PO balance</td>
              <td data-label="It is likely">Timing you can fix</td>
              <td data-label="Use">The PO balance routine</td>
            </tr>
            <tr>
              <td data-label="If you have">Recurring dated waits across POs</td>
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
                One large held amount with a dated release
              </td>
              <td data-label="It is likely">Timing to fund</td>
              <td data-label="Use">
                <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
                  Loans with bullet payments
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">Usage growing faster than every PO</td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        A growth problem means demand you cannot serve without more people, product
        or reach. That is what growth capital is for.
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

      <Faq items={PURCHASE_ORDER_BALANCE_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
            Local government board approval and vendor payments
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
            Grant funded government customers and vendor payments
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            How do I check when the government will pay my invoice?
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
          <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
            When does the prime have to pay a subcontractor?
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
