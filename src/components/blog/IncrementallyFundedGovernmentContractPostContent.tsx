import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FISCAL_YEAR_2027_POST,
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST,
  GOVERNMENT_VENDOR_REGISTRATION_POST,
  INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_FAQ,
  INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_HEADINGS,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_ORDER_BALANCE_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
  FINANCING_STRATEGY_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function IncrementallyFundedGovernmentContractPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A signed contract ceiling is not funded cash. On an incrementally funded
        federal cost reimbursement contract, funds are committed only to the
        allotted amount. The government is not required to pay costs above that
        amount until more is allotted in writing. California sample budget
        language also limits payment to funds that are actually available. Texas
        multi year rules do the same. Ask what is funded now. Size cash to that
        amount, not the unfunded remainder.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A founder signs a large government contract. The team plans cash as if
        the full ceiling is already owed. Then invoices approach the funded
        limit. The next allotment is not in writing yet. Payroll still runs.
        Hosting still bills.
      </p>

      <p>
        The useful question is simple. How much is funded now? The rest of the
        ceiling is not, by itself, money you can collect.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            On these federal cost reimbursement contracts, only the allotted
            amount is committed.
          </li>
          <li>
            Further allotments may be contemplated. That is not a promise to fund
            the ceiling.
          </li>
          <li>
            California sample budget language and Texas multi year rules also
            limit payment to available funds.
          </li>
          <li>
            Ask what is funded now, in writing. Size cash to that amount, not the
            unfunded remainder.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Usually no. On this kind of federal contract, only the allotted amount
        is committed. The government is not required to pay costs above that
        amount until more funds are allotted in writing. California sample
        budget language lets the state cancel or amend if funding is reduced.
        Texas limits multi year agency duties to funds already set aside. Size
        cash to what is funded now.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Contract ceiling: the estimated cost or total price written in the
          contract. It is not, by itself, money the agency has set aside.
        </li>
        <li>
          Allotted amount: the amount now available for payment on this kind of
          federal contract.
        </li>
        <li>
          Incremental funding: the agency commits funds in parts. It does not
          fund the full ceiling at award.
        </li>
        <li>
          Appropriation limit: a state or local rule. It limits what the agency
          must pay to funds already set aside by law.
        </li>
      </ul>

      <h2 id={H["What does it mean if your government contract is only partly funded?"]}>
        What does it mean if your government contract is only partly funded?
      </h2>

      <p>
        It means the agency has committed only the allotted or set aside amount.
        It has not committed the full ceiling. In these federal contracts, funds
        cover the amount allotted. The unfunded remainder is not, by itself,
        money you can invoice.
      </p>

      <p>
        Consider our example. A software company signs a $1,200,000 incrementally
        funded federal cost reimbursement contract. This is an illustration, not a
        real company. The schedule allots $300,000 for the current period. The CEO
        staffs as if the full $1,200,000 is already funded. The team plans cash the
        same way. That is the wrong cash frame.
      </p>

      <p>
        The federal general rule is clear. If the contract is incrementally funded,
        funds cover the amount allotted, and any matching increment of fee. (
        <ExtLink href="https://www.acquisition.gov/far/32.703-1">
          FAR 32.703-1
        </ExtLink>
        )
      </p>

      <p>
        The Limitation of Funds clause also speaks to further allotments. The
        parties contemplate more funds up to the estimated cost, exclusive of any
        fee. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-22">
          FAR 52.232-22
        </ExtLink>
        )
      </p>

      <p>
        Contemplate is not a promise. That word is easy to overread. It is a plan,
        not a check. Until more is allotted in writing, the unfunded $900,000 in
        our example is not committed cash.
      </p>

      <h2 id={H["Can you invoice more than the agency has allotted?"]}>
        Can you invoice more than the agency has allotted?
      </h2>

      <p>
        Most of the time, no. It is not an enforceable claim until the allotment
        is increased in writing. Under the Limitation of Funds clause, you perform
        only up to the allotment. Amounts paid and payable may not exceed that
        amount. The government is not required to cover costs above that amount
        without the specified notice.
      </p>

      <p>
        The clause also says this. The government is not required to cover costs
        above the total amount allotted to the contract. You also agree to stop
        short of the allotment on amounts paid and payable.
      </p>

      <TableWrap caption="Incremental funding example">
        <table>
          <caption>Incremental funding example</caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Estimated cost (contract ceiling)</td>
              <td data-label="Amount">$1,200,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount allotted now</td>
              <td data-label="Amount">$300,000</td>
            </tr>
            <tr>
              <td data-label="Item">Amount not yet funded</td>
              <td data-label="Amount">$900,000</td>
            </tr>
            <tr>
              <td data-label="Item">Default 75 percent notice point</td>
              <td data-label="Amount">$225,000</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        This is our example under FAR 32.703-1 and FAR 52.232-22. Two figures
        matter here. One is funded. One is not. Only the $300,000 allotment is
        committed now. Only that amount is payable until more is allotted in
        writing. Size a timing tool to the funded increment and its payment lag.
        Do not size it to $1,200,000.
      </p>

      <p>
        This clause is written for incrementally funded federal cost reimbursement
        contracts that include it. Do not assume it applies to every firm fixed
        price software contract. Do not assume it applies to every SaaS contract.
        Read your contract.
      </p>

      <h2 id={H["Do you have to keep working if the funded amount is almost gone?"]}>
        Do you have to keep working if the funded amount is almost gone?
      </h2>

      <p>
        Under the federal clause, you do not have to keep working past the allotted
        amount. You also do not incur costs past that amount. That changes when you
        get written notice that the allotment has been increased. Send the default
        75 percent and 60 day notice if that is what your clause says. Work beyond
        the limit is at your risk. Talk to counsel before you stop or continue.
      </p>

      <p>
        FAR 32.704 states: <em>&quot;Any work beyond the funding or cost limit will be at the contractor&apos;s risk.&quot;</em> (
        <ExtLink href="https://www.acquisition.gov/far/32.704">
          FAR 32.704
        </ExtLink>
        )
      </p>

      <p>
        The same part of the FAR also says the contractor is entitled by the
        contract terms to stop work when the funding or cost limit is reached. That
        is not advice to stop work as a tactic. Talk to a lawyer first.
      </p>

      <p>
        The default notice has a simple test. Add costs you expect in the next 60
        days to costs already incurred. If that sum will go above 75 percent of the
        allotment, the notice is due. In our example, that point is $225,000. The
        60 day period may be set from 30 to 90 days. The 75 percent mark may be set
        from 75 to 85 percent. Use the figures in your clause.
      </p>

      <p>
        If more funds will not be allotted, the contracting officer must give
        written notice of that decision. No notice from anyone other than the
        contracting officer, in the form the clause specifies, changes the allotted
        amount.
      </p>

      <h2 id={H["What do California and Texas require?"]}>
        What do California and Texas require?
      </h2>

      <p>
        They do not copy the federal allotment formula. They also limit payment to
        funds that are actually available. California&apos;s manual gives sample budget
        language for missing or reduced funds. Texas requires multi year contracts
        to limit what the agency owes to funds already set aside.
      </p>

      <p>
        California&apos;s text is sample language in the State Contracting Manual. It
        is not a statute. Do not assume every California contract uses this exact
        clause. Ask your agency.
      </p>

      <p>
        The sample says this. If the Budget Act does not set aside enough funds,
        the agreement has no further force. In that event, the state has no duty to
        pay. The contractor does not have to perform. If funding is reduced or
        deleted, the state may cancel the agreement. Or it may offer an amendment
        to the reduced amount. (
        <ExtLink href="https://www.dgs.ca.gov/-/media/Divisions/OLS/Resources/SCM-VI---06-2025-Update/SCM-V1-Chapter-4-June-2025-Edition.pdf">
          California State Contracting Manual, Volume 1, Chapter 4
        </ExtLink>
        )
      </p>

      <p>
        Texas is different again. It is an appropriation limit on multi year state
        contracts, not a 75 percent notice rule.
      </p>

      <p>
        The Comptroller says a multi year contract must include a set provision.
        That provision limits what the agency owes to enough available funds. (
        <ExtLink href="https://fmx.cpa.texas.gov/fm/pubs/purchase/contract/index.php?page=extended_contracts&section=contract">
          Texas Comptroller guidance on contracts that extend past available funds
        </ExtLink>
        )
      </p>

      <p>
        The same page adds:{" "}
        <em>
          &quot;The provision is necessary to avoid the creation of an unconstitutional
          debt.&quot;
        </em>
      </p>

      <p>
        This guidance is for Texas state agencies. Local rules differ. Ask your
        agency which rule applies. Read your contract.
      </p>

      <h2 id={H["The ceiling is not the cash"]}>The ceiling is not the cash</h2>

      <p>Start with two numbers, not one.</p>

      <p>
        Write down the contract ceiling. Then write down the amount allotted or set
        aside now. The second number is the one you can plan on, until more is
        added in writing.
      </p>

      <p>
        The ceiling is a plan number. The funded amount is a cash number. Treat them
        as two files, not one. Do not mix them.
      </p>

      <p>
        If the second number is missing, ask for it. Without it, you cannot size
        the gap. Without the gap, you cannot pick the right cash tool.
      </p>

      <h2 id={H["What should you do this week?"]}>What should you do this week?</h2>

      <ol>
        <li>
          Read the funding clause. Write down the amount presently allotted or set
          aside, and the ceiling. If no funds were available at award, that may be a
          different issue. See{" "}
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            government fiscal year 2027
          </Link>
          .
        </li>
        <li>
          Ask the contracting officer or pay office whether a further allotment or
          new funding has been issued in writing. Track status with{" "}
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            invoice payment status tools
          </Link>
          .
        </li>
        <li>
          Invoice only against the funded amount. If an invoice is already on hold
          because a purchase order ran out of money, that is a different fix. Do not
          treat it as the same problem. See{" "}
          <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
            purchase order balance and invoice holds
          </Link>
          .
        </li>
        <li>
          If the issue is an expired term or an unsigned renewal, see{" "}
          <Link href={`/blog/${GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug}`}>
            contract renewal lapse
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
        . That post owns the interest mechanics. This one owns the funded amount.
      </p>

      <p>
        Our view: a partly funded contract is a timing problem on a defined,
        funded amount.
      </p>

      <p>
        Ask what is allotted or set aside now, in writing. Fund the funded
        increment. Do not raise growth capital against a ceiling the agency has not
        committed.
      </p>

      <h2 id={H["Should you finance the unfunded remainder?"]}>
        Should you finance the unfunded remainder?
      </h2>

      <p>
        Usually no. The unfunded remainder is not committed cash. If you have a
        payment lag on amounts already allotted, that is a timing problem. If you
        need cash to build or sell more, that is a growth problem. Size the tool to
        the funded increment. Do not size it to the ceiling.
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
                A payment lag on an amount already allotted
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">A timing tool sized to that increment</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Recurring funded increments with a payment lag each cycle
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
                One funded increment with a dated collection date
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
                A need to build or sell more, not an unfunded ceiling
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use growth capital only if the real problem is building or selling more. An
        unfunded ceiling is not that problem by itself. For how claims stack, see{" "}
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

      <Faq items={INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            Government fiscal year 2027 for software vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PURCHASE_ORDER_BALANCE_POST.slug}`}>
            Purchase order balance and invoice holds
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug}`}>
            Contract renewal lapse
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
