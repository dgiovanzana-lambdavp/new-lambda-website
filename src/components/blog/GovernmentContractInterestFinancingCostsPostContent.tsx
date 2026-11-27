import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CASH_FLOW_GAP_POST,
  EARLY_PAYMENT_DISCOUNT_POST,
  FINANCING_STRATEGY_POST,
  GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_FAQ,
  GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_HEADINGS,
  GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_POST,
  IMPLEMENTATION_MILESTONES_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_HEADINGS.map((h) => [
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

export default function GovernmentContractInterestFinancingCostsPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Usually not. Under the federal cost principles, interest on borrowings
        and the costs of financing capital are unallowable. Those principles apply
        when cost analysis is performed or a contract clause requires them,
        including reimbursable costs on cost reimbursement contracts and the cost
        portion of time and materials contracts. A firm fixed price does not move
        with your costs. In Texas, agencies are not to pay before the due date
        unless law, contract, or another obligation requires it. Federal prompt
        payment interest starts only after the due date and when the clause&apos;s
        conditions are met. So the cost of carrying a slow government receivable is
        yours. It comes out of your margin. Plan for it. Price for it, shrink the
        gap where contracts allow, and fund each part of what is left with the
        right money.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder runs a GovTech software company with $4,000,000 in annual revenue
        and about a 20 percent operating margin. Those figures are our example. The
        company collects, on average, 120 days after it invoices. That figure is
        our example too. Unpaid invoices sit at about $1,315,000 at any time. The
        CEO adds a line for interest on the money used to cover the wait. The line
        comes back.
      </p>
      <p>
        The reason that frame fails is simple. No customer pays you to carry the
        invoice. The cost of waiting is yours. In our example, the company carries
        about $986,000 more than it would at 30 days. That is more than a full year
        of operating profit. Whatever that capital costs, it comes out of the
        margin.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Under the federal cost principles, interest on borrowings and the costs
            of financing capital are unallowable. Those principles apply when cost
            analysis is performed or a contract clause requires them, including
            reimbursable costs on cost reimbursement contracts and the cost portion
            of time and materials contracts.
          </li>
          <li>
            A firm fixed price does not move with your costs. The cost of waiting
            sits inside the price you bid.
          </li>
          <li>
            In Texas, agencies are not to pay before the due date unless law,
            contract, or another obligation requires it. A note on an invoice is not
            that obligation. Federal prompt payment interest starts only after the
            due date and when the clause&apos;s conditions are met.
          </li>
          <li>
            Price for the wait, shrink the gap where contracts allow, and fund each
            part of what is left on purpose.
          </li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        Usually not. Interest on borrowings and the costs of financing capital are
        unallowable under the federal cost principles, which apply when cost
        analysis is performed or a contract clause requires them, including
        reimbursable costs on cost reimbursement contracts and the cost portion of
        time and materials contracts. A firm fixed price does not change with your
        costs. Agencies generally pay on the due date. Federal prompt payment
        interest starts only after the due date and when the clause&apos;s
        conditions are met. Treat the cost of waiting as yours. Price for it,
        shrink the gap, and fund what is left on purpose.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Federal cost principles: rules that apply when cost analysis is performed
          or a contract clause requires them, including reimbursable costs on cost
          reimbursement contracts and the cost portion of time and materials
          contracts. They make interest on borrowings and the costs of financing
          capital unallowable. They do not set the price on a firm fixed price
          commercial contract.
        </li>
        <li>
          Firm fixed price: a price that does not change with what the work actually
          costs you. Commercial software buys usually use fixed price contracts.
          Usually, not always.
        </li>
        <li>
          Cost of money: an imputed charge for capital tied up in facilities, not
          interest. Our reading: cash tied up in unpaid invoices is not on that list.
        </li>
        <li>
          Prompt payment interest: federal interest that starts only after the due
          date and when the clause&apos;s conditions are met. It pays nothing for the
          normal days before the due date.
        </li>
        <li>
          Timing problem vs growth problem: a timing problem is cash you will
          collect on signed work that arrives late. A growth problem is cash you
          need to build or sell more. The unpaid base that grows with revenue is a
          capital structure choice.
        </li>
      </ul>
      <h2
        id={
          H[
            "Can you bill the government for interest on money you borrow to deliver a contract?"
          ]
        }
      >
        Can you bill the government for interest on money you borrow to deliver a
        contract?
      </h2>
      <p>
        Not under the federal cost principles. They make interest on borrowings and
        the costs of financing capital unallowable. So interest cannot be reimbursed
        on a cost reimbursement contract or accepted in a cost based price. Keep it
        off your invoices and cost proposals.
      </p>
      <p>
        The rule is short. It bars <em>&quot;Interest on borrowings (however represented)&quot;</em> and{" "}
        <em>&quot;costs of financing and refinancing capital&quot;</em>. (
        <ExtLink href="https://www.acquisition.gov/far/31.205-20">
          FAR 31.205-20
        </ExtLink>
        ) Bond discounts, fees to prepare prospectuses, and costs of preparing and
        issuing stock rights are unallowable too. Those are the main items. Certain
        interest assessed by state or local taxing authorities can be allowable.
        Interest does not go on the invoice.
      </p>
      <p>
        The cost principles have a set scope. They apply to{" "}
        <em>
          &quot;The pricing of contracts, subcontracts, and modifications to contracts
          and subcontracts whenever cost analysis is performed&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/31.000">
          FAR 31.000
        </ExtLink>
        ) They also apply to{" "}
        <em>
          &quot;The determination, negotiation, or allowance of costs when required by a contract clause.&quot;
        </em>{" "}
        They set reimbursable costs on cost reimbursement contracts and the cost
        portion of time and materials contracts. (FAR 31.103) They do not set the
        price on a firm fixed price commercial contract.
      </p>
      <p>
        A different clause covers cost of money. It{" "}
        <em>
          &quot;Is an imputed cost that is not a form of interest on borrowings&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/31.205-10">
          FAR 31.205-10
        </ExtLink>
        ) And this:{" "}
        <em>
          &quot;Actual interest cost in lieu of the calculated imputed cost of money is unallowable.&quot;
        </em>{" "}
        Cost of money is a facilities charge, not interest. It is for capital tied
        up in facilities and in assets being built. Our reading: money tied up in
        unpaid invoices is not on that list. This post does not tell you to claim
        it.
      </p>
      <h2
        id={
          H[
            "Does a fixed price contract let you build the cost of waiting into your price?"
          ]
        }
      >
        Does a fixed price contract let you build the cost of waiting into your
        price?
      </h2>
      <p>
        It puts the cost on you either way. A firm fixed price does not change with
        what the work actually costs you, so any cost of carrying the receivable sits
        inside the price you bid. Our reading: if your price does not cover the
        wait, your margin does.
      </p>
      <p>
        The federal description is plain. A firm fixed price contract provides{" "}
        <em>
          &quot;a price that is not subject to any adjustment on the basis of the contractor&apos;s cost experience in performing the contract&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/16.202-1">
          FAR 16.202-1
        </ExtLink>
        ) It also{" "}
        <em>
          &quot;places upon the contractor maximum risk and full responsibility for all costs and resulting profit or loss.&quot;
        </em>{" "}
        You own the wait. You own the cost.
      </p>
      <p>
        Commercial purchases, which is how software is usually bought, generally use
        fixed price contracts. Usually, not always. The Texas guide says the same
        about fixed price state work:{" "}
        <em>
          &quot;Vendor assumes most of the risk because vendor will be paid the same regardless of actual cost&quot;
        </em>
        . (Texas Comptroller, Procurement and Contract Management Guide, version
        4.0, page 57) The payment does not rise if your carrying cost rises.
      </p>
      <p>
        Know your expected days to collect when you price fixed price work. That is
        an internal step. It is how you see the cash you will carry.
      </p>
      <TableWrap caption="Rule, applies to, what it means for your carrying cost, and source">
        <table>
          <caption>
            Rule, applies to, what it means for your carrying cost, and source
          </caption>
          <thead>
            <tr>
              <th>Rule</th>
              <th>Applies to</th>
              <th>What it means for your carrying cost</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Rule">
                Interest on borrowings and costs of financing capital are
                unallowable (federal cost principles, which apply when cost analysis
                is performed or a contract clause requires them, including reimbursable
                costs on cost reimbursement contracts and the cost portion of time and
                materials contracts)
              </td>
              <td data-label="Applies to">
                Federal cost reimbursement work and cost based pricing
              </td>
              <td data-label="What it means for your carrying cost">
                The agency will not reimburse or accept it
              </td>
              <td data-label="Source">FAR 31.205-20</td>
            </tr>
            <tr>
              <td data-label="Rule">
                Cost of money is an imputed facilities charge, not interest
              </td>
              <td data-label="Applies to">
                Federal contracts priced on cost
              </td>
              <td data-label="What it means for your carrying cost">
                Not a way to recover interest on unpaid invoices (our reading)
              </td>
              <td data-label="Source">FAR 31.205-10</td>
            </tr>
            <tr>
              <td data-label="Rule">
                Firm fixed price puts full responsibility for all costs on the
                contractor
              </td>
              <td data-label="Applies to">
                Most federal commercial software buys (usually, not always)
              </td>
              <td data-label="What it means for your carrying cost">
                The cost of waiting sits inside your price
              </td>
              <td data-label="Source">FAR 16.202-1</td>
            </tr>
            <tr>
              <td data-label="Rule">
                Agencies are not to pay before the due date unless law, contract, or
                another obligation requires it; a note on an invoice is not an
                obligation
              </td>
              <td data-label="Applies to">Texas state agencies</td>
              <td data-label="What it means for your carrying cost">
                The normal wait is unpaid
              </td>
              <td data-label="Source">Texas Comptroller guide, page 57</td>
            </tr>
            <tr>
              <td data-label="Rule">
                Interest is automatic only after the due date and when the clause&apos;s
                conditions are met
              </td>
              <td data-label="Applies to">Federal proper invoices</td>
              <td data-label="What it means for your carrying cost">
                Nothing is paid for the days before the due date
              </td>
              <td data-label="Source">FAR 52.232-25</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["Will the agency pay early if you ask?"]}>
        Will the agency pay early if you ask?
      </h2>
      <p>
        Generally no. Texas tells its agencies not to pay before the due date unless
        law, contract, or another obligation requires it, and a note on your
        invoice that it is to be paid immediately upon receipt does not create that
        obligation. Federal prompt payment interest starts only after the due date
        and when the clause&apos;s conditions are met, so the normal wait is unpaid.
      </p>
      <p>
        The Texas guide{" "}
        <em>
          &quot;prohibits agencies from making payments earlier than the payment due date unless it is required by law, contract, or other obligation to the contractor&quot;
        </em>
        . (Texas Comptroller, Procurement and Contract Management Guide, version
        4.0, page 57) And this:{" "}
        <em>
          &quot;A contractor&apos;s request on an invoice that the invoice is to be paid immediately upon receipt is not an obligation to make an early payment to the contractor.&quot;
        </em>{" "}
        A note on the invoice does not move the date. We covered how to check the
        date in our{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          government invoice payment status
        </Link>{" "}
        post.
      </p>
      <p>
        Speed can have a price you pay.{" "}
        <em>
          &quot;When it is possible, an agency must negotiate a prompt payment discount with a vendor.&quot;
        </em>{" "}
        That is an agency rule, not a tool to push for early cash at any cost. We
        covered those discounts in our{" "}
        <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
          early payment discounts
        </Link>{" "}
        post.
      </p>
      <p>
        Late payment is a different question. The federal clause{" "}
        <em>
          &quot;will pay an interest penalty automatically, without request from the Contractor, if payment is not made by the due date&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/52.232-25">
          FAR 52.232-25
        </ExtLink>
        ) The interest starts only after the due date and when the clause&apos;s
        conditions are met. It pays nothing for the normal days before the due date.{" "}
        <em>
          &quot;The law says the government owes you interest when it pays late. It does not say the government will make your payroll.&quot;
        </em>{" "}
        We covered that line in our{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws
        </Link>{" "}
        post.
      </p>
      <p>Other states and local governments likely have similar rules. Read your contract.</p>
      <h2
        id={
          H[
            "How much does a slow government receivable cost a company with 20 percent margins?"
          ]
        }
      >
        How much does a slow government receivable cost a company with 20 percent
        margins?
      </h2>
      <p>
        It ties up cash equal to your daily billing times your days to collect, and
        whatever that capital costs comes out of your margin. In our example, a
        $4,000,000 company that collects in 120 days carries about $986,000 more
        than it would at 30 days. That is more than its full year operating profit of
        about $800,000.
      </p>
      <p>
        Here is our example. The company has $4,000,000 in revenue and about a 20
        percent operating margin, so about $800,000 a year. It collects in 120 days.
        Unpaid invoices then sit at about $1,315,000. If it collected in 30 days,
        that balance would be about $329,000. The extra cash carried is about
        $986,000. That is more than a year of profit. These figures are our example.
        They are not a forecast.
      </p>
      <TableWrap caption="Item, collect in 30 days, collect in 120 days">
        <table>
          <caption>Item, collect in 30 days, collect in 120 days</caption>
          <thead>
            <tr>
              <th>Item</th>
              <th>Collect in 30 days</th>
              <th>Collect in 120 days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Annual revenue (our example)</td>
              <td data-label="Collect in 30 days">$4,000,000</td>
              <td data-label="Collect in 120 days">$4,000,000</td>
            </tr>
            <tr>
              <td data-label="Item">Unpaid invoices at any time</td>
              <td data-label="Collect in 30 days">About $329,000</td>
              <td data-label="Collect in 120 days">About $1,315,000</td>
            </tr>
            <tr>
              <td data-label="Item">Extra cash carried for customers</td>
              <td data-label="Collect in 30 days">None</td>
              <td data-label="Collect in 120 days">About $986,000</td>
            </tr>
            <tr>
              <td data-label="Item">Operating profit at about 20 percent</td>
              <td data-label="Collect in 30 days">About $800,000</td>
              <td data-label="Collect in 120 days">About $800,000</td>
            </tr>
            <tr>
              <td data-label="Item">
                Unpaid invoices next year at 20 percent growth
              </td>
              <td data-label="Collect in 30 days">About $395,000</td>
              <td data-label="Collect in 120 days">About $1,578,000</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        The base does not stay still if you grow.{" "}
        <em>
          &quot;Part of the gap is a permanent base that grows with revenue.&quot;
        </em>{" "}
        And{" "}
        <em>
          &quot;Every new award adds cost days before it adds collected cash.&quot;
        </em>{" "}
        In our example, at 20 percent growth, unpaid invoices rise about $263,000
        next year. Size the everyday gap with the method in our{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          government contractor cash flow gap
        </Link>{" "}
        post. Then add this view of the cash you carry.
      </p>
      <h2
        id={
          H[
            "Is the cost of slow government payment a timing problem or a growth problem?"
          ]
        }
      >
        Is the cost of slow government payment a timing problem or a growth
        problem?
      </h2>
      <p>
        The swings on signed work are a timing problem. The base that never goes
        away, and grows as you grow, is a capital structure decision. Because no
        customer pays for either, both belong in your capital plan on purpose.
      </p>
      <p>
        The test for the swing is simple.{" "}
        <em>
          &quot;If the cash leaves to deliver an already signed contract and returns when the agency pays, you have a timing problem.&quot;
        </em>{" "}
        And this:{" "}
        <em>
          &quot;Slow pay on a signed contract is usually a timing problem, not proof you need a growth round.&quot;
        </em>{" "}
        We set that test out in our{" "}
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          working capital vs growth capital
        </Link>{" "}
        post. The cash goes out. Then it comes back. That is timing.
      </p>
      <p>
        Financing the contract is normally your job. The agency will not cover the
        wait as a matter of course. In the FAR&apos;s rules on contract financing for
        purchases other than commercial ones, the contracting officer must consider
        an <em>&quot;order of preference when a contractor requests contract financing&quot;</em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/32.106">
          FAR 32.106
        </ExtLink>
        ) First on that list is{" "}
        <em>&quot;Private financing without Government guarantee.&quot;</em> You fund
        the work first. The same part tells the officer to{" "}
        <em>
          &quot;Provide Government financing only to the extent actually needed for prompt and efficient performance, considering the availability of private financing&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/32.104">
          FAR 32.104
        </ExtLink>
        ) It is not the default plan.
      </p>
      <h2
        id={
          H["How should you fund the cost the government will not pay?"]
        }
      >
        How should you fund the cost the government will not pay?
      </h2>
      <p>
        Shrink it first, then split it. Use the payment terms your contracts allow
        to cut the days, a timing tool for the swings on signed work, and longer
        dated capital for the base that grows with you. Use growth capital for real
        growth, not for a payment gap.
      </p>
      <p>
        Shrink the gap first where the contract allows it. Some software contracts
        with government buyers allow{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront annual billing
        </Link>
        . Some build work can be billed on{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          payment milestones
        </Link>
        . Ask for those payment terms in the contract.
      </p>
      <p>
        Use a{" "}
        <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
          revolving line of credit
        </Link>{" "}
        if the gap opens and closes as invoices are paid.
      </p>
      <p>
        Use an{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          assignment of contract payments
        </Link>{" "}
        if a financing provider needs to be paid directly by the agency on a signed
        federal contract.
      </p>
      <p>
        Use longer dated capital, chosen with your whole capital stack in mind, if the
        base grows with revenue every year. That is the standing unpaid book, not a
        one time swing.
      </p>
      <p>
        Use growth capital if the need is a multi year investment.{" "}
        <em>
          &quot;Use growth capital if the need is a multi year investment, not a payment gap.&quot;
        </em>{" "}
        That line is from our{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          government contractor cash flow gap
        </Link>{" "}
        post. We mapped the growth choice in our{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>{" "}
        post.
      </p>
      <TableWrap caption="If you have, it is likely, use">
        <table>
          <caption>If you have, it is likely, use</caption>
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
                Contracts that allow upfront annual billing or implementation
                milestones
              </td>
              <td data-label="It is likely">A shorter gap</td>
              <td data-label="Use">
                Ask for those payment terms in the contract
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A gap on signed work that opens and closes as invoices are paid
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                A revolving line of credit, or loans with bullet payments for a one
                time gap
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A financing provider that needs to be paid directly by the agency on
                a signed federal contract
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Assignment of contract payments</td>
            </tr>
            <tr>
              <td data-label="If you have">
                A base of unpaid invoices that grows with revenue every year
              </td>
              <td data-label="It is likely">Capital structure</td>
              <td data-label="Use">
                Longer dated capital, chosen with your whole capital stack in mind
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A multi year plan to build or sell more
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2
        id={
          H[
            "What should you do this quarter if the government will not pay your carrying cost?"
          ]
        }
      >
        What should you do this quarter if the government will not pay your carrying
        cost?
      </h2>
      <p>
        Find out which contracts are fixed price and which are cost based, and take
        interest off any invoice or cost proposal. Measure your days to collect and
        the cash tied up. Then shrink what you can and fund the rest on purpose.
      </p>
      <ol>
        <li>
          List each contract&apos;s type. Note fixed price, time and materials, and
          cost reimbursement. Note each contract&apos;s payment terms and due dates.
        </li>
        <li>
          Keep interest off invoices and cost proposals. Interest on borrowings and
          the costs of financing capital are unallowable under the federal cost
          principles, which apply when cost analysis is performed or a contract
          clause requires them, including reimbursable costs on cost reimbursement
          contracts and the cost portion of time and materials contracts. Ask your
          accountant or counsel about anything unclear.
        </li>
        <li>
          Measure average days to collect and multiply by daily billing. That is the
          cash you carry. In our example, 120 days on $4,000,000 of revenue ties up
          about $1,315,000.
        </li>
        <li>
          Know your expected days to collect when you price fixed price work. A firm
          fixed price does not move with your costs, so the wait has to sit in the
          price.
        </li>
        <li>
          Shrink the gap where contracts allow. Fund the swings with a timing tool.
          Fund the base and real growth with longer dated capital.
        </li>
      </ol>
      <p>
        Our view: assume the agency will not pay for your money. Put the receivable
        balance in your capital plan as a number, not a surprise. Price for the wait,
        shrink the gap where contracts allow, fund the swings on signed work with
        timing tools, and fund the growing base and real growth with longer dated
        capital chosen with your whole capital stack in mind. Do not sell ownership to
        bridge a receivable you have already earned.
      </p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_FAQ} />
      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            Government invoice payment status
          </Link>
        </li>
        <li>
          <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
            Early payment discounts on government contracts
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital
          </Link>
        </li>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software company financing strategy
          </Link>
        </li>
      </ul>
      <p>
        <strong>Your next step:</strong> If slow government payment is tying up cash
        you need to grow,{" "}
        <Link href="/contact/founder">
          talk with us about financing your growth
        </Link>
        .
      </p>
      <p>
        <em>
          This post is general education, not financial, legal, accounting, or tax
          advice.
        </em>
      </p>
      <FounderCtaBlock
        position="bottom"
        postSlug={GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_POST.slug}
      />
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