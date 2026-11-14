import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_FAQ,
  EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_HEADINGS,
  FISCAL_YEAR_2027_POST,
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST,
  GOVERNMENT_VENDOR_REGISTRATION_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_ORDER_BALANCE_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
  FINANCING_STRATEGY_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_HEADINGS.map((h) => [
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

export default function ExtraWorkGovernmentContractModificationPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A program manager email is not a contract modification. On federal
        contracts, only a contracting officer can execute a written change. On
        many federal commercial software contracts, changes may be made only by
        written agreement of the parties. Federal policy says those changes
        should be priced before they are signed, if that can be done without harm
        to the government&apos;s interest. If a significant cost increase is at
        stake and time does not permit a price, they should at least be given a
        ceiling price, unless impractical. A ceiling price is not cash already
        owed. California&apos;s purchasing manual says verbal notices cannot
        modify a contract. It also says an amendment must be issued before
        performance. Texas will not pay added amounts on a modified state agency
        contract without an added benefit. Ask for a written, priced change.
        Size cash to signed work, not to unsigned extras.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A founder has a signed $480,000 government software contract. Mid period,
        a program manager emails a request for extra setup work. The CEO prices it
        at $80,000. The team staffs the work and sends an $80,000 invoice. The
        invoice comes back. No written change has been signed. Payroll still runs.
        Hosting still bills.
      </p>

      <p>
        The reason is simple. An email is not a contract change. The request may
        be real. The cash is not. Not yet. Until a written, priced change is
        signed, the extra work is not contracted cash. The signer must have the
        right to bind the agency.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            On federal contracts, only a contracting officer can execute a written
            change.
          </li>
          <li>
            On many federal commercial software contracts, changes need written
            agreement of the parties.
          </li>
          <li>
            California&apos;s purchasing manual and Texas state agency rules also
            require a formal change before extra work is payable.
          </li>
          <li>
            Ask for a written, priced change. Size cash to signed work, not to
            unsigned extras.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Usually no. On many federal commercial software contracts, changes may be
        made only by written agreement of the parties. Only a contracting officer
        can sign a federal written change. California&apos;s purchasing manual says
        verbal notices cannot modify a contract. It also says an amendment must be
        issued before performance. Texas limits added payments on a modified state
        agency contract to cases with an added benefit. Size cash to signed, priced
        work.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Contract modification: a written change to a signed contract. It must
          be signed by someone with the power to bind the agency. An email is not
          one.
        </li>
        <li>
          Contracting officer: the federal official with the power to enter, run,
          or change the contract. A program manager usually cannot sign that
          change.
        </li>
        <li>
          Written agreement of the parties: both sides must agree in writing before
          terms change.
        </li>
        <li>
          Unpriced change order: a written change issued without a settled price.
          It still needs a later priced agreement. It is not, by itself, a finished
          amount you can collect.
        </li>
      </ul>

      <h2
        id={
          H[
            "What counts as extra work on a signed government contract?"
          ]
        }
      >
        What counts as extra work on a signed government contract?
      </h2>

      <p>
        Extra work is added scope, added outputs, or changed terms that are not
        already in the signed contract. A customer&apos;s request does not, by
        itself, change the contract. Until a written, priced change is signed, that
        work is not contracted cash. The signer must have the right to bind the
        agency.
      </p>

      <p>
        Consider our example. A software company has a signed $480,000 government
        software contract. This is an example, not a real company. Mid period, a
        program manager emails a request for extra setup work. The company prices it
        at $80,000. No written, priced change has been signed. The $80,000 is not,
        by itself, a payable contract change.
      </p>

      <p>
        Federal policy is clear. Only a contracting officer, acting within the scope
        of that role, can sign a contract change for the government. (
        <ExtLink href="https://www.acquisition.gov/far/43.102">FAR 43.102</ExtLink>
        )
      </p>

      <p>
        On many federal commercial software contracts, the rule is just as plain.{" "}
        <em>
          &quot;Changes in the terms and conditions of this contract may be made
          only by written agreement of the parties.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.212-4">
          FAR 52.212-4
        </ExtLink>
        )
      </p>

      <p>
        That clause applies to federal commercial product and commercial service
        contracts that include it. It does not apply to every government software
        contract. Read your contract.
      </p>

      <h2 id={H["Can you invoice before the modification is signed?"]}>
        Can you invoice before the modification is signed?
      </h2>

      <p>
        Most of the time, no. You cannot collect the extra work as a claim until a
        written, priced change is in place. Federal policy says those changes
        should be priced before they are signed, if that can be done without harm to
        the government&apos;s interest. If a change order is issued without a
        price, it still needs a later priced agreement. That officer must also
        secure any added funds before adjusting the contract.
      </p>

      <p>
        If a significant cost increase could result, and time does not permit a
        price, at least a ceiling price should be set unless impractical. (
        <ExtLink href="https://www.acquisition.gov/far/43.102">FAR 43.102</ExtLink>
        ) A ceiling price is not cash already owed.
      </p>

      <p>
        These next rules apply only once a change order has actually been issued
        and is not yet priced. They do not apply to a commercial contract that
        requires written agreement of the parties. They also do not apply if that
        contract has no one sided change order. When change orders are not priced in
        advance, they need two documents. One is the change order. The other is a
        later priced agreement that sets the resulting change in contract terms. If
        more funds are required because of the change, that officer shall secure the
        funds first. No adjustment to the contract comes before that. (
        <ExtLink href="https://www.acquisition.gov/far/43.204">FAR 43.204</ExtLink>
        )
      </p>

      <p>An unpriced change order is not a finished amount you can collect.</p>

      <TableWrap caption="Unsigned extra work example">
        <table>
          <caption>Unsigned extra work example</caption>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Signed contract</td>
              <td data-label="Amount">$480,000</td>
            </tr>
            <tr>
              <td data-label="Item">Extra work requested by email</td>
              <td data-label="Amount">$80,000</td>
            </tr>
            <tr>
              <td data-label="Item">
                Amount payable for that extra work until a written, priced
                modification is signed
              </td>
              <td data-label="Amount">$0</td>
            </tr>
            <tr>
              <td data-label="Item">Amount to size a timing tool to now</td>
              <td data-label="Amount">
                The $480,000 signed work and its payment lag
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        This is our example under FAR 43.102 and FAR 52.212-4. Two figures matter
        here. One is signed. One is not. Size a timing tool to the $480,000 signed
        work and its payment lag. Do not size it to the unsigned $80,000. If a
        written, priced change is later signed for $80,000, that sum can then be a
        timing problem. So can its payment lag.
      </p>

      <h2
        id={
          H["Does an email from the program manager authorize payment?"]
        }
      >
        Does an email from the program manager authorize payment?
      </h2>

      <p>
        Usually no. On federal contracts, only a contracting officer acting within
        that role can sign a written change. Other government staff shall not sign
        those changes. They also shall not act in a way that causes the contractor
        to believe they can bind the government. They shall not direct or encourage
        the contractor to perform work that should be the subject of a contract
        modification. (
        <ExtLink href="https://www.acquisition.gov/far/43.102">FAR 43.102</ExtLink>
        )
      </p>

      <p>
        Ask the contracting officer whether a written, priced change has been
        issued. Talk to counsel before you start or continue unsigned work. Work
        done without a signed change is at the company&apos;s risk. That is not
        advice to start the extra work as a tactic.
      </p>

      <h2 id={H["What do California and Texas require?"]}>
        What do California and Texas require?
      </h2>

      <p>
        They do not copy the federal contracting officer rule. They also require a
        formal change before extra work is treated as payable. California&apos;s
        purchasing manual says verbal notices cannot be used to modify a contract.
        It also says an amendment must be issued before the contractor performs.
        Texas says a state agency may modify a contract. It may not agree to make
        added payments without an added benefit. It also may not pay more for work
        the existing contract already required.
      </p>

      <p>
        The California text is DGS manual guidance. It is not a statute. Do not
        assume every contract in the state uses this exact page. It does not, by
        itself, cover every city or county contract. Ask your agency.
      </p>

      <p>
        The purchasing manual says:{" "}
        <em>
          &quot;Verbal notifications between buyers and suppliers cannot be used to
          modify a contract.&quot;
        </em>{" "}
        It also says an amendment must be issued in advance of contractor
        performance. That includes receiving any goods or services before an
        approved amendment. (
        <ExtLink href="https://www.dgs.ca.gov/PD/Resources/SCM/TOC/18/18-05">
          California DGS purchasing manual, section 18.05
        </ExtLink>
        )
      </p>

      <p>
        Texas is different again. This is a payment limit on Texas state agency
        contract changes. It is not the federal contracting officer rule. It does
        not cover every city or county contract.
      </p>

      <p>
        The Comptroller says a state agency may modify a contract. It may not agree
        to make added payments without an added benefit in return. The same page
        adds this. Added funds for performance already required by an existing
        contract may not be paid by a state agency. (
        <ExtLink href="https://fmx.cpa.texas.gov/fm/pubs/purchase/contract/index.php?page=modified_contracts&section=contract">
          Texas Comptroller guidance on payments under modified contracts
        </ExtLink>
        )
      </p>

      <p>Ask your agency which rule applies. Local rules differ. Read your contract.</p>

      <h2 id={H["The email is not the cash"]}>The email is not the cash</h2>

      <p>Start with two numbers, not one.</p>

      <p>
        Write down the amount already under the signed, priced contract. Then write
        down the extra work that is only in an email. The first number is the one
        you can plan on, until a written, priced change is signed.
      </p>

      <p>
        The signed amount is a cash number. The email amount is a request. Treat
        them as two files, not one. Do not mix them.
      </p>

      <p>
        If a written, priced change is missing, ask for it. Without it, the extra
        work is not contracted cash. Do not bill the email. Do not fund the email.
      </p>

      <h2 id={H["What should you do this week?"]}>
        What should you do this week?
      </h2>

      <ol>
        <li>
          Read the changes clause. Write down who can sign the change, and whether
          changes require written agreement of the parties. If the issue is an
          expired term or an unsigned renewal, that is a different problem. See{" "}
          <Link href={`/blog/${GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug}`}>
            contract renewal lapse
          </Link>
          .
        </li>
        <li>
          Ask the contracting officer, not only the program manager, whether a
          written, priced change has been issued. Ask whether funds for it have been
          secured. Track status with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          Invoice only against signed, priced work. If an invoice is already on hold
          because a purchase order ran out of money on work already in the contract,
          that is a different fix. See{" "}
          <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
            purchase order balance and invoice holds
          </Link>
          .
        </li>
        <li>
          If the agency still has to put money against a new change, that can follow
          the fiscal calendar. See{" "}
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            government fiscal year 2027
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
      </ol>

      <p>
        Interest clocks after a late payment are covered in{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . That post owns the interest mechanics. This one owns signed work versus
        unsigned extras.
      </p>

      <p>
        Our view: unsigned extra work is not a bill you can size to.
      </p>

      <p>
        Ask the contracting officer, not only the program manager, whether a
        written, priced change has been issued. Fund signed, priced work. Do not
        raise growth capital against an email.
      </p>

      <h2 id={H["Should you finance unsigned extra work?"]}>
        Should you finance unsigned extra work?
      </h2>

      <p>
        Usually no. Unsigned extra work is not contracted cash. If you have a
        payment lag on amounts already under a signed, priced contract or change,
        that is a timing problem. If you need cash to build or sell more, that is a
        growth problem. Size the tool to signed work. Do not size it to an email.
      </p>

      <p>Start with a basic line from our working capital post.</p>

      <p>
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
        <em>
          &quot;Your cash flow gap is a number, not a feeling.&quot;
        </em>{" "}
        (
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
              <th>If you have</th>
              <th>It is likely</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="If you have">
                A payment lag on work already under a signed, priced contract or
                modification
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">A timing tool sized to that amount</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Recurring signed modifications with a payment lag each cycle
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
                One signed, priced modification with a dated collection date
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
                A need to build or sell more, not a wait on unsigned extra work
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling more.
        Unsigned extra work is not that problem by itself. For how claims stack, see{" "}
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

      <Faq items={EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug}`}>
            Contract renewal lapse
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
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            Government fiscal year 2027 for software vendors
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