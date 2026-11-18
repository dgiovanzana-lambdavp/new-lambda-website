import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_POST,
  FINANCING_STRATEGY_POST,
  GOVERNMENT_STOP_WORK_ORDER_PAYMENT_FAQ,
  GOVERNMENT_STOP_WORK_ORDER_PAYMENT_HEADINGS,
  INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_STOP_WORK_ORDER_PAYMENT_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentStopWorkOrderPaymentPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A written stop work order can pause all or part of the remaining work on a
        signed government contract. It is not, by itself, a termination. It does
        not, by itself, cancel invoices for work already accepted. You must comply
        at once and take reasonable steps to minimize costs. Ask the payment office
        which invoices can still be processed. Size cash to amounts that are still
        collectible. Do not raise growth capital against work that is stopped.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A founder is mid performance on a signed federal software contract.
        $80,000 in invoices for work already accepted is unpaid. The agency issues
        a written stop work order covering the remaining work. The CEO treats the
        $80,000 as lost. Or the next thought is to raise growth capital against the
        remaining work. That treats the work as if it will continue on the old
        schedule.
      </p>

      <p>
        The reason that frame fails is simple. The order can pause remaining work.
        It does not, by itself, cancel invoices for work already accepted. It also
        does not make the stopped work a sure amount you can collect on the old
        schedule.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            If the clause is in your contract, a written stop work order can require
            you to stop all or part of the work for a stated period. You must comply
            at once.
          </li>
          <li>
            The order is not a termination. It does not, by itself, cancel invoices
            for work already accepted. Ask the payment office.
          </li>
          <li>
            Federal and California day counts differ. Do not mix them. An equitable
            adjustment, if you have a right to one, is a later written change, not a
            scheduled invoice.
          </li>
          <li>
            Size cash to amounts that are still collectible. Do not raise growth
            capital against work that is stopped.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Maybe, for work already accepted, under the payment terms in the contract. A
        written stop work order can pause all or part of the remaining work. It is
        not, by itself, a termination. It does not, by itself, cancel invoices for
        work already accepted. You must comply at once and take reasonable steps to
        minimize costs. Size cash to amounts that are still collectible.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Stop work order: a written order, identified as a stop work order under the
          contract clause. It requires the company to stop all or part of the work for
          a stated period.
        </li>
        <li>
          Equitable adjustment: a written contract change to the schedule, the price,
          or both. It applies if the order increased the time or the cost properly
          allocable to performance, and if the company asserts that right in time.
        </li>
      </ul>

      <h2
        id={H["What is a stop work order, and do you have to comply?"]}
      >
        What is a stop work order, and do you have to comply?
      </h2>

      <p>
        If your contract includes the clause, a written stop work order can require you
        to stop all or any part of the work for a stated period. The order shall be
        specifically identified as a stop work order issued under the clause. You
        must comply at once. You must also take reasonable steps to minimize costs
        allocable to the covered work.
      </p>

      <blockquote>
        <p>
          <em>
            &quot;Situations may occur during contract performance that cause the
            Government to order a suspension of work, or a work stoppage.&quot;
          </em>{" "}
          (
          <ExtLink href="https://www.acquisition.gov/far/subpart-42.13">
            FAR 42.1301
          </ExtLink>
          )
        </p>
      </blockquote>

      <p>
        On a federal contract that includes the clause, the contracting officer may,
        by written order, require the contractor to stop all or any part of the work.
        That pause can last 90 days after the order is delivered, and for any further
        period the parties agree. The period in the clause may be shorter than 90 days.
        The order shall be specifically identified as a stop work order issued under
        this clause. (
        <ExtLink href="https://www.acquisition.gov/far/52.242-15">
          FAR 52.242-15
        </ExtLink>
        )
      </p>

      <p>
        Upon receipt of the order, the contractor shall immediately comply with its
        terms. The contractor shall also take all reasonable steps to minimize the
        incurrence of costs allocable to the work covered by the order during the
        period of work stoppage. (
        <ExtLink href="https://www.acquisition.gov/far/52.242-15">
          FAR 52.242-15
        </ExtLink>
        )
      </p>

      <p>
        Do not keep working on the covered work after a written stop work order
        covers that work.
      </p>

      <p>
        This clause is not in every federal software contract. The contracting
        officer may insert it in contracts for supplies, services, or research and
        development. (
        <ExtLink href="https://www.acquisition.gov/far/42.1305">FAR 42.1305</ExtLink>
        ) Issuance should be approved at a level higher than the contracting officer. (
        <ExtLink href="https://www.acquisition.gov/far/42.1303">FAR 42.1303</ExtLink>
        ) Read the contract.
      </p>

      <h2 id={H["Can you still get paid for work already accepted?"]}>
        Can you still get paid for work already accepted?
      </h2>

      <p>
        A stop work order pauses covered work. It does not, by itself, cancel invoices
        for work already accepted. It also does not, by itself, promise that those
        invoices will be paid on the old date. Payment for accepted work follows the
        contract&apos;s payment terms. Ask the payment office which invoices can still
        be processed.
      </p>

      <p>
        Consider our example. A software company is mid performance on a signed
        federal software contract. This is an example, not a real company. $80,000 in
        invoices for work already accepted is unpaid. The agency issues a written stop
        work order covering the remaining work. The $80,000 is not, by itself, canceled
        by the order. Payment still follows the contract&apos;s payment terms. Ask the
        payment office which invoices can still be processed.
      </p>

      <TableWrap caption="Stop work order payment example">
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
                Invoices for work already accepted on a signed federal contract
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
                The $80,000, plus the lag until the payment office processes invoices
                that are still collectible under the contract
              </td>
            </tr>
            <tr>
              <td data-label="Item">Remaining stopped work</td>
              <td data-label="Amount">
                Do not size growth capital to this work as if it will continue on the
                old schedule
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        This is our example. Size a timing tool to the $80,000 and the lag. Do not
        treat those invoices as lost. Do not raise growth capital against the
        remaining work while it is stopped.
      </p>

      <p>
        If the delay is acceptance of the work, not a stop work order, that is a
        different issue. See{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>invoice acceptance</Link>
        . Prompt payment interest, where it applies, still depends on a proper invoice
        and the contract rules. See{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . Track status with the payment office. See{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          invoice payment status tools
        </Link>
        .
      </p>

      <h2
        id={
          H[
            "Is a stop work order the same as a termination, a funding stop, or a payment dispute?"
          ]
        }
      >
        Is a stop work order the same as a termination, a funding stop, or a payment
        dispute?
      </h2>

      <p>
        No. A stop work order is a pause, often while the government decides what to
        do next. It shall not be used in place of a termination notice after a
        decision to terminate has been made. If the order is canceled or expires, you
        resume work. If the covered work is later terminated, settlement is a
        different path.
      </p>

      <p>
        Federal policy says a stop work order shall not be used in place of a
        termination notice. That is after a decision to terminate has been made. (
        <ExtLink href="https://www.acquisition.gov/far/42.1303">FAR 42.1303</ExtLink>
        ) If the order is canceled or the period expires, the contractor shall resume
        work. If the order is not canceled and the covered work is later terminated
        for the convenience of the government, reasonable costs resulting from the
        order shall be allowed in the termination settlement. (
        <ExtLink href="https://www.acquisition.gov/far/52.242-15">
          FAR 52.242-15
        </ExtLink>
        ) That settlement path is not this post.
      </p>

      <p>
        An equitable adjustment, if you have a right to one, is not automatic. It is
        not the same thing as a scheduled invoice. Under the federal clause, the
        contractor asserts the right to the adjustment within 30 days after the end of
        the period of work stoppage. The contracting officer may act on a later claim
        before final payment. If the conditions in the clause are met, the contract is
        then modified in writing. Do not count on a set dollar amount or a set payment
        date for that change.
      </p>

      <p>Federal and California day counts are not the same. Do not mix them.</p>

      <TableWrap caption="Federal vs California stop work timing">
        <table>
          <thead>
            <tr>
              <th>Rule</th>
              <th>Stop period</th>
              <th>Window to cancel or terminate</th>
              <th>Window to assert an adjustment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Rule">Federal clause</td>
              <td data-label="Stop period">
                90 days, and that period may be shorter
              </td>
              <td data-label="Window to cancel or terminate">
                Within that period, or any agreed extension
              </td>
              <td data-label="Window to assert an adjustment">
                30 days after the stoppage ends, or later before final payment
              </td>
            </tr>
            <tr>
              <td data-label="Rule">
                California information technology cloud terms
              </td>
              <td data-label="Stop period">Up to 60 days</td>
              <td data-label="Window to cancel or terminate">
                45 days, or any agreed extension
              </td>
              <td data-label="Window to assert an adjustment">
                60 days after the stoppage ends
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Those California terms apply when that document is part of the contract,
        typically for California information technology cloud work. They are not a
        federal rule, and they are not in every California contract. Under those
        terms, the contractor asserts its right to that adjustment within 60 days
        after the end of the period of work stoppage. The State may act on a later
        proposal before final payment. The same terms also say:{" "}
        <em>
          &quot;The State shall not be liable to Contractor for loss of profits
          because of a Stop Work Order issued under this Section.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.dgs.ca.gov/-/media/Divisions/PD/Acquisitions/Solicitation-Document-Attachments/IT-General-Provisions-Cloud-DGS-PD-402ITGP-Revised-02202025.pdf">
          California information technology general provisions, Section 18
        </ExtLink>
        ) That loss of profits sentence is California only. Do not apply it to federal
        contracts that use FAR 52.242-15.
      </p>

      <p>
        This is not the same as reaching the funded amount on an incrementally funded
        contract. See{" "}
        <Link href={`/blog/${INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST.slug}`}>
          incrementally funded contracts
        </Link>
        . This is not the same as invoicing extra work before a modification is
        signed. See{" "}
        <Link href={`/blog/${EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_POST.slug}`}>
          extra work and modifications
        </Link>
        . A vendor&apos;s right in some states to suspend work because an undisputed
        invoice is unpaid is the opposite direction. See{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . Texas state contracts vary. Read the clause. Do not assume a single statewide
        stop work payment rule. Ask your agency. Rules differ.
      </p>

      <h2 id={H["The order pauses work. It does not settle the invoices."]}>
        The order pauses work. It does not settle the invoices.
      </h2>

      <p>Start with two questions, not one.</p>

      <p>
        Which invoices are for work already accepted? Which work is now stopped? Those
        are different cash questions.
      </p>

      <p>
        The first set may still be due under the contract&apos;s payment terms. The
        second set is not money you can plan on the old schedule. Do not mix them.
      </p>

      <h2 id={H["What should you do this week?"]}>What should you do this week?</h2>

      <p>
        Read the written order and the contract clause, and confirm the order is
        identified as a stop work order. Stop the covered work at once and take
        reasonable steps to minimize costs. Then ask the payment office which invoices
        for work already accepted can still be processed. Write down the dates. Talk
        to counsel about whether to assert an adjustment.
      </p>

      <ol>
        <li>
          Read the order and the clause. Confirm what work is covered, and what work,
          if any, is not. After issuing the order, the contracting officer should
          discuss it with the contractor and change the order if needed. Ask for that
          discussion. (
          <ExtLink href="https://www.acquisition.gov/far/42.1303">
            FAR 42.1303
          </ExtLink>
          )
        </li>
        <li>
          Comply at once and minimize costs allocable to the covered work. Do not keep
          working on covered work.
        </li>
        <li>
          Ask the payment office which invoices can still be processed, and track
          status with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          If you have subcontractors on the covered work, follow the order&apos;s
          guidance and your subcontract terms. See{" "}
          <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
            subcontractor payment from a prime
          </Link>
          .
        </li>
        <li>
          Track the period in the order, any extension, and the window to assert an
          adjustment. Under the federal clause, that window is 30 days after the end of
          the stoppage, unless the contracting officer acts later before final
          payment. Under the California cloud terms, where they apply, that window is
          60 days. Talk to counsel. Do not invent a claim template. Do not treat
          accepted invoices as forfeited.
        </li>
      </ol>

      <p>
        Our view: invoices for work already accepted may still be collectible, but
        stopped work is not money you can plan on the old schedule.
      </p>

      <p>
        Comply with the written order. Ask the payment office what can still be
        processed. Size cash to amounts that are still collectible. Do not raise growth
        capital against work that is stopped.
      </p>

      <h2 id={H["Should you finance invoices during a stop work order?"]}>
        Should you finance invoices during a stop work order?
      </h2>

      <p>
        If the $80,000 is still collectible under the contract&apos;s payment terms,
        the wait is a timing problem. It is not a growth problem. Size a timing tool to
        those invoices and the lag. Do not raise growth capital against remaining work
        that is stopped.
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
                Unpaid invoices for work already accepted that can still be paid under
                the contract
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
                A need to build or sell more, not invoices or work waiting on a stop
                work order
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling more.
        Invoices or stopped work waiting on a government decision are not that
        problem by themselves. For how claims stack, see{" "}
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

      <Faq items={GOVERNMENT_STOP_WORK_ORDER_PAYMENT_FAQ} />

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
          <Link href={`/blog/${INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST.slug}`}>
            Incrementally funded contracts
          </Link>
        </li>
        <li>
          <Link href={`/blog/${EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_POST.slug}`}>
            Extra work and modifications
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