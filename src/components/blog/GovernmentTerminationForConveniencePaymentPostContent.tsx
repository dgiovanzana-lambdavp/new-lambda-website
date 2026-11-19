import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST,
  GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_FAQ,
  GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_HEADINGS,
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
  GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_HEADINGS.map((h) => [
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

export default function GovernmentTerminationForConveniencePaymentPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A termination for convenience can end remaining work on a signed government
        contract. It does not, by itself, cancel payment for work already performed.
        On a federal commercial contract, you must stop work at once. You are to be
        paid a share of the contract price for work done before the notice, plus
        reasonable charges you can show, and not for costs you could have avoided.
        Ask the payment office. Submit the proposal the clause requires. Size cash to
        amounts that are still collectible. Do not raise growth capital against work
        that will not be performed.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A founder is mid performance on a signed federal commercial software contract.
        $75,000 in invoices for work already accepted is unpaid. The agency issues a
        written termination for convenience covering the remaining work. The CEO treats
        the $75,000 as lost. Or the next thought is to raise growth capital against the
        remaining work. That treats the work as if the contract will continue on the old
        schedule.
      </p>

      <p>
        The reason that frame fails is simple. The ending can stop remaining work. It
        does not, by itself, cancel payment for work already done. It also does not make
        the leftover work a sure amount you can collect on the old schedule. The
        leftover work will not be paid as if it had been finished. Ask the payment
        office what is still collectible.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            If the clause is in your contract, the government may end all or part of
            the work for its sole convenience. You must stop the covered work at once.
          </li>
          <li>
            You are to be paid a share of the contract price for work done before the
            notice, plus reasonable charges you can show, and not for costs you could
            have avoided.
          </li>
          <li>
            Federal, California, and Texas clocks differ. Do not mix them. A termination
            proposal is not a scheduled invoice.
          </li>
          <li>
            Size cash to amounts that are still collectible. Do not raise growth capital
            against work that will not be performed.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Maybe, for work already done, under the ending clause in the contract. On a
        federal commercial contract, you must stop work at once. You are to be paid a
        share of the price for work done before the notice, plus reasonable charges you
        can show, and not for costs you could have avoided. Size cash to amounts that
        are still collectible.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Termination for convenience: the government&apos;s right, under the clause,
          to end all or part of the contract for its sole convenience. It is not a
          default.
        </li>
        <li>
          Termination proposal: the settlement submission the clause or the notice
          requires. It is a separate path from a scheduled invoice.
        </li>
      </ul>

      <h2
        id={H["What is a termination for convenience, and do you have to stop work?"]}
      >
        What is a termination for convenience, and do you have to stop work?
      </h2>

      <p>
        Yes, if the clause is in your contract. The government may end all or part of
        the work for its sole convenience. You must stop the covered work at once. You
        must also cause suppliers and subcontractors to cease that work. This is not a
        default. It is not a stop work order.
      </p>

      <blockquote>
        <p>
          <em>
            &quot;The Government reserves the right to terminate this contract, or any
            part hereof, for its sole convenience.&quot;
          </em>{" "}
          (
          <ExtLink href="https://www.acquisition.gov/far/52.212-4">
            FAR 52.212-4(l)
          </ExtLink>
          )
        </p>
      </blockquote>

      <p>
        On a federal contract that includes this commercial clause, you must stop all
        work under the ending at once. You must also cause suppliers and subcontractors
        to cease work at once. (
        <ExtLink href="https://www.acquisition.gov/far/52.212-4">
          FAR 52.212-4(l)
        </ExtLink>
        )
      </p>

      <p>
        Do not keep working on the covered work after a written notice of this kind
        covers that work. Stop now. Do not wait.
      </p>

      <p>
        This commercial clause is common on software contracts. It is not in every
        federal contract. Read the contract. Check the clause first. FAR 52.212-4
        permits the government to end a contract for commercial products or commercial
        services either for convenience or for cause. (
        <ExtLink href="https://www.acquisition.gov/far/12.403">FAR 12.403</ExtLink>
        )
      </p>

      <p>
        If you have subcontractors on the covered work, they must stop too. See{" "}
        <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
          subcontractor payment from a prime
        </Link>
        .
      </p>

      <p>
        A stop work order is a pause, not a termination. It is a different path.
      </p>

      <h2 id={H["When do you get paid after a termination for convenience?"]}>
        When do you get paid after a termination for convenience?
      </h2>

      <p>
        Not on the old invoice calendar for the leftover work. On a federal commercial
        contract, payment is a percentage of the contract price. That percentage
        reflects the work performed before the notice. You may also be paid reasonable
        charges you can demonstrate have resulted from the termination. You are not paid
        for work or costs that reasonably could have been avoided. A termination
        proposal is a separate path from a scheduled invoice. The commercial rule does
        not set a single official due date.
      </p>

      <p>
        Subject to the terms of the contract, that is the rule in FAR 52.212-4(l). You
        may show those charges with your standard record keeping system. (
        <ExtLink href="https://www.acquisition.gov/far/52.212-4">
          FAR 52.212-4(l)
        </ExtLink>
        )
      </p>

      <blockquote>
        <p>
          <em>
            &quot;The Contractor shall not be paid for any work performed or costs
            incurred which reasonably could have been avoided.&quot;
          </em>{" "}
          (
          <ExtLink href="https://www.acquisition.gov/far/52.212-4">
            FAR 52.212-4(l)
          </ExtLink>
          )
        </p>
      </blockquote>

      <p>
        You are not required to use cost accounting standards or contract cost principles
        for this purpose. This paragraph does not give the government a right to audit
        your records. (
        <ExtLink href="https://www.acquisition.gov/far/52.212-4">
          FAR 52.212-4(l)
        </ExtLink>
        ) The same point holds in the commercial ending rule. The government does not
        have a right to audit solely because of this kind of ending. (
        <ExtLink href="https://www.acquisition.gov/far/12.403">FAR 12.403</ExtLink>
        )
      </p>

      <p>
        The percentage formula is the fixed price path. Time and materials work uses a
        different path. You are paid for hours spent before the effective date, times the
        contract hourly rates, plus those charges. Do not apply only the share formula to
        every contract. (
        <ExtLink href="https://www.acquisition.gov/far/12.403">FAR 12.403</ExtLink>
        )
      </p>

      <blockquote>
        <p>
          <em>
            &quot;Any charges the contractor can demonstrate directly resulted from
            the termination.&quot;
          </em>{" "}
          (
          <ExtLink href="https://www.acquisition.gov/far/12.403">FAR 12.403</ExtLink>
          )
        </p>
      </blockquote>

      <p>
        The parties should mutually agree on what the termination proposal needs. They
        should balance the need for enough records to support payment against the goal
        of a simple and expeditious settlement. That is a goal, not a payment deadline.
        Do not invent a due date. (
        <ExtLink href="https://www.acquisition.gov/far/12.403">FAR 12.403</ExtLink>
        ) That is a goal. It is not a clock.
      </p>

      <p>
        For commercial products or commercial services, the requirements of part 49 do
        not apply. Contracting officers follow FAR 12.403. Do not treat a part 49 one
        year proposal rule as the lead deadline for a typical commercial software
        contract. If the contract uses a different, noncommercial ending clause, the path
        may differ. Read the contract and talk to counsel.
      </p>

      <p>
        Consider our example. A software company is mid performance on a signed federal
        commercial software contract. This is an example, not a real company. $75,000 in
        invoices for work already accepted is unpaid. The agency issues a written
        termination for convenience covering the remaining work. The $75,000 is not, by
        itself, canceled. Payment follows the clause. Size a timing tool to the $75,000,
        to allowable charges you can show, and to the lag. Do not raise growth capital
        against the leftover work that will not be performed.
      </p>

      <TableWrap caption="Termination for convenience payment example">
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
                Invoices for work already accepted on a signed federal commercial
                contract
              </td>
              <td data-label="Amount">$75,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount still unpaid</td>
              <td data-label="Amount">$75,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount to size a timing tool to</td>
              <td data-label="Amount">
                The $75,000, plus reasonable charges you can show, and the lag until
                those amounts are paid
              </td>
            </tr>
            <tr>
              <td data-label="Item">Remaining work that will not be performed</td>
              <td data-label="Amount">
                Do not size growth capital to this work as if the contract will
                continue
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        This is our example. The $75,000 is not automatically lost. The leftover work is
        not automatically paid. Size cash to what can still be paid. Do not plan on the
        leftover work.
      </p>

      <p>
        If the delay is acceptance of the work, that is a different issue. See{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>invoice acceptance</Link>
        . Prompt payment interest, where it applies, still depends on a proper invoice
        and the contract rules. See{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . Track what the payment office will still process. See{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          invoice payment status tools
        </Link>
        .
      </p>

      <h2
        id={
          H[
            "Is this the same as a default, a funding cutoff, or ordinary closeout?"
          ]
        }
      >
        Is this the same as a default, a funding cutoff, or ordinary closeout?
      </h2>

      <p>
        No. A termination for convenience is the government&apos;s choice to end the
        work. It is not a default. It is not a finding that you failed to perform. Do
        not treat it as a default. It is also not a non appropriation exit. It is not a
        funded limit. It is not a contract that lapsed before renewal. See{" "}
        <Link href={`/blog/${GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug}`}>
          contract renewal lapse
        </Link>
        . It is not a wait for a final invoice after ordinary completion. Read the
        notice and the clause.
      </p>

      <p>
        State terms can use different clocks. Do not apply those clocks to the federal
        commercial clause, or the reverse.
      </p>

      <TableWrap caption="Federal vs California vs Texas termination timing">
        <table>
          <thead>
            <tr>
              <th>Rule</th>
              <th>Notice</th>
              <th>Proposal</th>
              <th>Payment idea</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Rule">Federal commercial clause</td>
              <td data-label="Notice">A written ending</td>
              <td data-label="Proposal">
                The parties should agree on what the proposal needs. There is no single
                official due date
              </td>
              <td data-label="Payment idea">
                A share of the price for work done before the notice, plus charges you
                can show, not avoided costs
              </td>
            </tr>
            <tr>
              <td data-label="Rule">
                California information technology cloud terms, where they apply
              </td>
              <td data-label="Notice">At least 15 days</td>
              <td data-label="Proposal">
                A proposal due no later than 30 days after the ending date, unless the
                notice says otherwise
              </td>
              <td data-label="Payment idea">
                If the parties do not agree, amounts are capped at the full performance
                amount
              </td>
            </tr>
            <tr>
              <td data-label="Rule">Texas agency guidance</td>
              <td data-label="Notice">Written notice with a date</td>
              <td data-label="Proposal">
                The contract controls the settlement basis
              </td>
              <td data-label="Payment idea">
                Generally, allowable costs up to the ending date. That is not a
                guarantee
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        California&apos;s standard information technology cloud terms, where they apply,
        require a notice of at least 15 days. The effective date shall be no less than
        15 days from the notice date. (
        <ExtLink href="https://www.dgs.ca.gov/-/media/Divisions/PD/Acquisitions/Solicitation-Document-Attachments/IT-General-Provisions-Cloud-DGS-PD-402ITGP-Revised-02202025.pdf">
          California information technology general provisions for cloud computing
          services, Section 16
        </ExtLink>
        )
      </p>

      <p>
        After the ending, the company shall submit a final termination settlement
        proposal in the form and with the facts the State asks for.
      </p>

      <blockquote>
        <p>
          <em>
            &quot;Contractor shall submit the proposal promptly, but no later than 30
            Days after the Termination Date, unless otherwise provided in the
            Termination Notice.&quot;
          </em>{" "}
          (
          <ExtLink href="https://www.dgs.ca.gov/-/media/Divisions/PD/Acquisitions/Solicitation-Document-Attachments/IT-General-Provisions-Cloud-DGS-PD-402ITGP-Revised-02202025.pdf">
            California information technology general provisions for cloud computing
            services, Section 16
          </ExtLink>
          )
        </p>
      </blockquote>

      <p>
        If the parties do not agree on the amount, and unless the statement of work says
        otherwise, the State will pay the contract price for deliverables accepted, used,
        or kept by the State and not previously paid for. It will also pay reasonable
        costs of the ended work. That can include certain initial and preparatory costs,
        but not costs tied to deliverables already paid or to be paid. It can also include
        reasonable costs of settling properly chargeable subcontract termination
        proposals, and reasonable wind down costs. Total payments will not exceed the
        amount payable if the contract had been fully performed. These terms apply only
        when this California document is part of the contract. They are not in every
        California contract.
      </p>

      <p>
        A non appropriation exit is a different clause with a different payment result.
        Under California Section 16.1, when funding is not appropriated, the State may end
        the contract with no added damage or further duty. Do not apply that sentence to
        a termination for convenience. A funding calendar issue is a different path. See{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          government fiscal year 2027 calendars for software vendors
        </Link>
        .
      </p>

      <p>
        This is also not the same as reaching the funded amount on an incrementally
        funded contract. See{" "}
        <Link href={`/blog/${INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST.slug}`}>
          incrementally funded government contracts
        </Link>
        .
      </p>

      <p>
        Texas agency guidance takes a different path. The Texas Comptroller guide is
        agency guidance, not a statute. Individual Texas contracts vary. Read the
        contract. The contract controls here.
      </p>

      <p>
        The agency must give written notice. The notice must say whether all or part of
        the contract is ended. The notice must give the date of the ending. The contract
        must set the settlement basis, and the agency must follow those terms. (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          Texas Comptroller Procurement and Contract Management Guide, Version 4.0
        </ExtLink>
        )
      </p>

      <blockquote>
        <p>
          <em>
            &quot;The contractor will generally be paid for allowable costs incurred up
            to the date of termination.&quot;
          </em>{" "}
          (
          <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
            Texas Comptroller Procurement and Contract Management Guide, Version 4.0
          </ExtLink>
          )
        </p>
      </blockquote>

      <p>
        &quot;Generally&quot; is not a guarantee. The contract controls the settlement
        basis. Do not invent a Texas statewide formula that matches the federal share
        rule.
      </p>

      <p>
        The agency will not be liable for the ended portion of the work. It will also not
        be liable for work or costs after the effective date. The leftover work is not
        cash. (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          Texas Comptroller Procurement and Contract Management Guide, Version 4.0
        </ExtLink>
        )
      </p>

      <p>
        Waiting for a final invoice after ordinary completion is a different path. That
        path is not this ending.
      </p>

      <h2 id={H["What should you do this week?"]}>What should you do this week?</h2>

      <p>
        Read the written notice and the contract clause. Confirm what work is ended and
        on what date. Read the notice today. Stop the covered work at once. Then ask the
        payment office which invoices for work already done can still be processed. Talk
        to counsel about the termination proposal. Write down the dates. Do not guess.
      </p>

      <ol>
        <li>
          Read the notice and the clause. Confirm the date of the ending and whether the
          whole contract, or only part, is ended.
        </li>
        <li>
          Stop the covered work at once, and tell subcontractors to stop that work. See{" "}
          <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
            subcontractor payment from a prime
          </Link>
          .
        </li>
        <li>
          Ask the payment office which invoices can still be processed, and track status
          with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          Ask what facts the agency wants in the termination proposal, and calendar any
          deadline in the clause or the notice. For example, 30 days after the ending
          date under California information technology cloud terms, where they apply.
          Talk to counsel. Do not invent a proposal template. Do not keep working on
          covered work. Do not treat amounts for work already done as forfeited.
        </li>
      </ol>

      <p>
        Our view: amounts for work already performed may still be collectible, but
        remaining work that will not be performed is not money you can plan on the old
        schedule.
      </p>

      <p>
        Stop the covered work. Ask the payment office what can still be processed. Submit
        the proposal the clause requires. Size cash to amounts that are still
        collectible. Do not raise growth capital against work that will not be performed.
        Keep growth capital for growth.
      </p>

      <h2
        id={H["Should you finance invoices after a termination for convenience?"]}
      >
        Should you finance invoices after a termination for convenience?
      </h2>

      <p>
        If the $75,000, and any reasonable charges you can show, are still collectible
        under the clause, the wait is a timing problem. It is not a growth problem. Size
        the lag. Do not treat it as a growth raise. Size a timing tool to those amounts
        and the lag. Do not raise growth capital against leftover work that will not be
        performed.
      </p>

      <p>Start with a basic line from our working capital post.</p>

      <p>
        <em>
          &quot;Signed government contracts that pay slowly create a timing problem more
          often than a growth problem.&quot; (
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
                Unpaid amounts for work already done, plus allowable charges you can
                show, that can still be paid under the clause
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                A timing tool sized to those amounts and the lag
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
                A need to build or sell more, not amounts waiting on a termination
                settlement
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling more.
        Amounts waiting on a termination settlement are not that problem by themselves.
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

      <Faq items={GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_FAQ} />

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
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            Government fiscal year 2027 calendars
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