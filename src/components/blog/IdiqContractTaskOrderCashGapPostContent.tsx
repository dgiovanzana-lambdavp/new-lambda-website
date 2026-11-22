import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  IMPLEMENTATION_MILESTONES_POST,
  INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST,
  REVOLVING_LINE_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
  IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_FAQ,
  IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function IdiqContractTaskOrderCashGapPostContent() {
  return (
    <div className="blog-prose">
      <p><strong>Bottom line for founders</strong></p>
      <p>Not until a task order is signed, the work is accepted, and the invoice is paid. An IDIQ award binds the government only to a stated minimum. The ceiling is a limit, not a promise. On multiple award contracts you usually compete again for each order. Count signed orders, not ceilings. Fund the ramp on each signed order as a timing problem. Fund the capacity to win orders with growth capital.</p>
      <p><em>By Domenic Giovanzana, Founder and General Partner</em></p>
      <p>A founder runs a GovTech software company with $5,000,000 in annual revenue. That figure is our example. The company wins a spot as one of five awardees on a five year federal multiple award IDIQ for case management software. The ceiling is $50,000,000. The minimum is $25,000. Those figures are our example too. The board celebrates the ceiling. The CEO plans to hire a six person delivery team, about $100,000 a month, on award day.</p>
      <p>The reason that frame fails is simple. The award is not signed work. The ceiling is not revenue. Cash spent before any order is signed is spent on work nobody has bought. Cash spent after an order is signed comes back when the agency pays. Only the second gap is a timing problem. Size that second gap. Fund it on purpose. The first gap is not timing. It is cash spent with no signed work.</p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            An IDIQ award binds the government only to a stated minimum. The
            ceiling is a limit, not a promise.
          </li>
          <li>
            Work starts only when a task order is issued. On multiple award
            contracts you usually compete again for each order.
          </li>
          <li>
            Hire against signed orders, not the ceiling. Fund the ramp on each
            signed order as a timing problem.
          </li>
          <li>
            Fund the team that competes for orders with growth capital.
          </li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>When orders arrive and get paid, not when the contract is awarded. Under the FAR, an IDIQ contract binds the government to order at least a stated minimum, and schedule quantities are estimates only. Work happens only through orders, which on multiple award contracts are usually competed among the awardees. Plan cash around signed task orders, not the ceiling.</p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>IDIQ (indefinite delivery, indefinite quantity) contract: a contract that sets the scope, a minimum, a maximum and an ordering period, with the actual work bought later through orders.</li>
        <li>Task order: the order that actually buys work under an IDIQ contract. It describes the work and its price.</li>
        <li>Minimum: the smallest amount the government must order over the contract.</li>
        <li>Ceiling (maximum): the most the government may order. Not a promise.</li>
        <li>Multiple award: the same contract awarded to several companies, which then compete for orders.</li>
        <li>Timing problem vs growth problem: a timing problem is cash you will collect on signed work that arrives late. A growth problem is cash you need to build or sell more.</li>
      </ul>
      <h2 id={H["Does winning an IDIQ contract mean the government has to buy from you?"]}>Does winning an IDIQ contract mean the government has to buy from you?</h2>
      <p>Only up to the minimum. The contract must bind the government to order a stated minimum, which must be more than a nominal quantity. Everything above it is bought through orders, if at all.</p>
      <p>The ceiling is the most the government may order, not what it will order. The ceiling is not the contract&apos;s value. It is not revenue. The ceiling is a cap. It is not sold work.</p>
      <p>An IDIQ contract is an indefinite delivery, indefinite quantity contract. Agencies use this form <em>&quot;when the exact times and/or exact quantities of future deliveries are not known at the time of contract award&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/16.501-2">FAR 16.501-2</ExtLink>).</p>
      <p><em>&quot;The Government places orders for individual requirements.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/16.504">FAR 16.504</ExtLink>)</p>
      <p><em>&quot;The contract must require the Government to order and the contractor to furnish at least a stated minimum quantity of supplies or services.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/16.504">FAR 16.504</ExtLink>)</p>
      <p><em>&quot;To ensure that the contract is binding, the minimum quantity must be more than a nominal quantity, but it should not exceed the amount that the Government is fairly certain to order.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/16.504">FAR 16.504</ExtLink>)</p>
      <p>The government&apos;s obligation is limited to that minimum. (<ExtLink href="https://www.acquisition.gov/far/16.501-2">FAR 16.501-2</ExtLink>)</p>
      <p><em>&quot;The quantities of supplies and services specified in the Schedule are estimates only and are not purchased by this contract.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/52.216-22">FAR 52.216-22</ExtLink>)</p>
      <p>The government shall order at least the quantity set in the Schedule as the minimum. The contractor must furnish, when and if ordered, up to the maximum. (<ExtLink href="https://www.acquisition.gov/far/52.216-22">FAR 52.216-22</ExtLink>) The ceiling is a cap. It is not a promise.</p>
      <p>Our reading: the minimum is a floor for the whole contract, not a start date. The FAR does not set a date by which the minimum must be ordered. It is a floor. It is not a start date. Read your Schedule for the minimum, the maximum and the ordering period.</p>
      <h2 id={H["Why can months pass before the first task order arrives?"]}>Why can months pass before the first task order arrives?</h2>
      <p>Because the award only opens the door. Work is performed only when an order is issued. On a multiple award contract, each order above a small threshold is generally competed among the awardees.</p>
      <p>The agency decides when it has a need and money for it. Winning the vehicle is not winning the work. The work comes later. It comes by order. No order, no work. No work, no invoice.</p>
      <p><em>&quot;Delivery or performance shall be made only as authorized by orders issued in accordance with the Ordering clause.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/52.216-22">FAR 52.216-22</ExtLink>)</p>
      <p><em>&quot;Any supplies and services to be furnished under this contract shall be ordered by issuance of delivery orders or task orders by the individuals or activities designated in the Schedule.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/52.216-18">FAR 52.216-18</ExtLink>)</p>
      <p>This contract type exists because <em>&quot;it is inadvisable for the Government to commit itself for more than a minimum quantity&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/16.504">FAR 16.504</ExtLink>). The agency does not know its future need at award.</p>
      <p>On multiple award contracts, contracting officers generally must give each awardee a fair opportunity to be considered for each order above a small threshold, with some exceptions. (<ExtLink href="https://www.acquisition.gov/far/16.505">FAR 16.505</ExtLink>) Do not assume every order is yours. You usually compete again. A win on the vehicle is not a win on the order. You still have to win the work.</p>
      <p><em>&quot;The contracting officer may exercise broad discretion in developing appropriate order placement procedures.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/16.505">FAR 16.505</ExtLink>) Each agency runs its own order process. Read how that process works. Ask early.</p>
      <p>Below a minimum order amount written into the contract, <em>&quot;the Government is not obligated to purchase, nor is the Contractor obligated to furnish, those supplies or services under the contract.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/52.216-19">FAR 52.216-19</ExtLink>)</p>
      <p>Orders also need available money, so the appropriations calendar matters. See <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>the government fiscal year 2027 calendar</Link>. If you are a sub on a prime&apos;s IDIQ, your cash also waits on the prime&apos;s orders and payments. See <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>subcontractor payment from a prime</Link>.</p>
      <h2 id={H["Do state and local contracts promise any minimum?"]}>Do state and local contracts promise any minimum?</h2>
      <p>Often not. Texas guidance recommends a &quot;No Quantity Guarantees&quot; clause. The sample text says the agency guarantees no minimum compensation or quantity and may buy elsewhere.</p>
      <p>Other states, local governments, and cooperative purchasing programs set their own terms. Read the contract. Do not assume every state or local contract lacks a minimum. The terms are in your document. Look there first.</p>
      <p><em>&quot;Agency makes no express or implied warranty whatsoever that any minimum compensation or minimum quantity will be guaranteed under the contract.&quot;</em> (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>)</p>
      <p><em>&quot;The contract is not exclusive to the Respondent.&quot;</em> (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>)</p>
      <p><em>&quot;Agency may obtain products and related services from other sources during the term of the contract.&quot;</em> (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>)</p>
      <p>Those lines come from a Recommended Clause with sample text in the Texas Comptroller Procurement and Contract Management Guide, Version 4.0. This is guidance, not a statute.</p>
      <p><em>&quot;Rather, the Recommended Clauses are provisions that are typically included in most contracts.&quot;</em> (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>)</p>
      <p><em>&quot;It is expected that the actual wording of a Recommended Clause may vary by agency and legal counsel will be consulted prior to use.&quot;</em> (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>)</p>
      <p>Wording varies by agency. A statewide or master contract is like an IDIQ award. It lets agencies buy from you. The purchase order is what buys. The master contract is the door. The order is the sale. Cash starts with the sale.</p>
      <h2 id={H["Should you hire your delivery team before the first task order?"]}>Should you hire your delivery team before the first task order?</h2>
      <p>Hire against signed orders, not against the ceiling. Payroll spent before an order exists is spent on work nobody has bought yet. Keep the team that wins orders, and plan the delivery ramp for the day an order is signed.</p>
      <p>Consider our example. A software company with $5,000,000 in annual revenue wins a spot as one of five awardees on a five year federal multiple award IDIQ for case management software. The ceiling is $50,000,000. The minimum is $25,000. This is an example, not a real company. The CEO can hire a six person delivery team at about $100,000 a month on award day. That is Plan A. Or the CEO can keep the bid team and hire when the first order is signed. That is Plan B.</p>
      <p>In this example, the first task order competition opens in month 3. The company wins a $1,800,000, twelve month order in month 5, billed monthly in arrears. The first payment arrives about month 7. All of those figures are our example&apos;s. They are not typical, required, or a forecast of order timing. Do the math for your own award. Do it now.</p>
      <p>Under Plan A, about $700,000 goes out before the first dollar comes in. About $500,000 of that is spent with no order signed, over the first five months. Under Plan B, about $200,000 goes out between the signed order and the first payment. That second gap is on signed work. The first gap is not. Plan A spends cash with no order in hand. That cash does not come back from an invoice. There is no invoice yet.</p>
      <TableWrap caption="Plan A vs Plan B example">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Plan A: hire on award day</th>
              <th>Plan B: hire when the order is signed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">IDIQ award (our example)</td>
              <td data-label="Plan A: hire on award day">Month 0, one of five awardees, $50,000,000 ceiling, $25,000 minimum</td>
              <td data-label="Plan B: hire when the order is signed">Same</td>
            </tr>
            <tr>
              <td data-label="Item">First task order signed</td>
              <td data-label="Plan A: hire on award day">Month 5, $1,800,000 over twelve months</td>
              <td data-label="Plan B: hire when the order is signed">Same</td>
            </tr>
            <tr>
              <td data-label="Item">First payment</td>
              <td data-label="Plan A: hire on award day">About month 7 (our example)</td>
              <td data-label="Plan B: hire when the order is signed">About month 7 (our example)</td>
            </tr>
            <tr>
              <td data-label="Item">Delivery team cost</td>
              <td data-label="Plan A: hire on award day">About $100,000 a month from month 0</td>
              <td data-label="Plan B: hire when the order is signed">About $100,000 a month from month 5</td>
            </tr>
            <tr>
              <td data-label="Item">Cash out before the first payment</td>
              <td data-label="Plan A: hire on award day">About $700,000</td>
              <td data-label="Plan B: hire when the order is signed">About $200,000</td>
            </tr>
            <tr>
              <td data-label="Item">Of that, spent with no order signed</td>
              <td data-label="Plan A: hire on award day">About $500,000</td>
              <td data-label="Plan B: hire when the order is signed">None</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>This is our example. Hire against signed orders. Keep the bid team funded so you can win the next one.</p>
      <p><em>&quot;Individual orders shall clearly describe all services to be performed or supplies to be delivered so the full cost or price for the performance of the work can be established when the order is placed.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/16.505">FAR 16.505</ExtLink>)</p>
      <p>The order, not the vehicle, sets the work and the price you will bill. An order can itself be partly funded. Plan to the funded amount. See <Link href={`/blog/${INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST.slug}`}>incrementally funded government contracts</Link>.</p>
      <h2 id={H["How should you fund the gap once a task order is signed?"]}>How should you fund the gap once a task order is signed?</h2>
      <p>Fund the gap between a signed order and its first payment as a timing problem. Use a timing tool sized to that ramp. Use growth capital for the team and capacity to compete for orders.</p>
      <p>Commercial financing is, as a rule, your job, not the agency&apos;s. The cash plan is yours. Plan it early. Set it up now. Do not wait.</p>
      <p><em>&quot;It is the responsibility of the contractor to provide all resources needed for performance of the contract.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/32.202-1">FAR 32.202-1</ExtLink>)</p>
      <p><em>&quot;However, in some markets the provision of financing by the buyer is a commercial practice.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/32.202-1">FAR 32.202-1</ExtLink>)</p>
      <p>Do not assume the government will finance an order. Ask whether the order&apos;s payment schedule can include milestones. Ways to shrink the lag, including commercial advance payments and performance based payments, are covered in <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>implementation milestones and holdbacks</Link>.</p>
      <p>Start with a basic line from our working capital post.</p>
      <p><em>&quot;If the cash leaves to deliver an already signed contract and returns when the agency pays, you have a timing problem.&quot;</em> (<Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>Working capital vs growth capital for GovTech software</Link>)</p>
      <p>Size the order&apos;s gap with the method in our cash flow gap post. Do the math on the order. Size it to the order, not the ceiling.</p>
      <p><em>&quot;Every new award adds cost days before it adds collected cash.&quot;</em> (<Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>The government contractor cash flow gap</Link>)</p>
      <p>Use a revolving line of credit if orders keep arriving and the gap repeats as receivables turn. See <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>a revolving line of credit</Link>. Use loans with bullet payments if one signed order has a ramp that ends in a known first payment. See <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>loans with bullet payments</Link>. Use an assignment of contract payments if a financing provider needs to be paid directly by the agency on a signed federal contract. See <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>the Assignment of Claims Act for GovTech software</Link>. Use growth capital if the real problem is the team, bids and capacity to compete for and deliver orders across several vehicles. For how claims stack, see <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>capital stack seniority for GovTech software</Link>. Strategy hub: <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>software company financing strategy</Link>.</p>
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
              <td data-label="If you have">One signed task order with a ramp that ends in a known first payment</td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Loans with bullet payments sized to the ramp</td>
            </tr>
            <tr>
              <td data-label="If you have">Orders that keep arriving, with a gap that repeats as receivables turn</td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Revolving line of credit</td>
            </tr>
            <tr>
              <td data-label="If you have">A financing provider that needs to be paid directly by the agency on a signed federal contract</td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Assignment of contract payments</td>
            </tr>
            <tr>
              <td data-label="If you have">A team, bids and capacity to compete for orders across several vehicles</td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["What should you do the week you win an IDIQ contract?"]}>What should you do the week you win an IDIQ contract?</h2>
      <p>Read the Schedule for the minimum, the maximum and the ordering period, and read how orders will be competed. Build your cash plan around orders you expect to win, not the ceiling. Then decide which part of the gap is timing and which part is growth, and line up the right money for each.</p>
      <ol>
        <li>Read the Schedule and ordering procedures for the minimum, the maximum, the ordering period, the fair opportunity criteria, and any minimum order amount.</li>
        <li>Ask the contracting officer or ordering office about expected order timing and the order process. Do not invent a script.</li>
        <li>Plan hiring against signed orders. Keep the bid and capture team funded.</li>
        <li>For each signed order, size the gap to its first payment with the method in <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>the government contractor cash flow gap</Link>, and arrange a timing tool for it.</li>
        <li>Fund capacity to compete across vehicles as growth, and plan that capital before the first order is late.</li>
      </ol>
      <p>Our view: except for the stated minimum, treat the IDIQ award as a hunting license and the task order as the signed contract. Fund the gap on a signed order as a timing problem. Fund the team that competes for orders with growth capital.</p>
      <p>Count signed orders, not ceilings. Hire against signed orders. Then you can answer the cash question before the first invoice is late. Be ready the week you win. Do not wait. Get the plan in place first.</p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST.slug}`}>
            Incrementally funded government contracts
          </Link>
        </li>
        <li>
          <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
            The government fiscal year 2027 calendar
          </Link>
        </li>
      </ul>

      <p>
        <em>
          This post is general education, not financial, legal, accounting, or tax
          advice.
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
