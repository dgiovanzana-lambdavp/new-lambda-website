import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  EARLY_PAYMENT_DISCOUNT_POST,
  GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST,
  GOVERNMENT_CONTRACT_TYPE_CASH_GAP_FAQ,
  GOVERNMENT_CONTRACT_TYPE_CASH_GAP_HEADINGS,
  GOVERNMENT_CONTRACT_TYPE_CASH_GAP_POST,
  IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST,
  IMPLEMENTATION_MILESTONES_POST,
  INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  UNDISPUTED_INVOICE_PORTION_POST,
  UPFRONT_PAYMENT_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CONTRACT_TYPE_CASH_GAP_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentContractTypeCashGapPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Usually you do not pick the type. Most software is bought commercially, so
        the price is usually firm fixed price, not always, and you get paid for
        accepted work. Time and materials is allowed for commercial services only
        under conditions, including a ceiling price. Cost reimbursement is
        prohibited for commercial products and services. What you can often shape is
        how often you bill. Smaller accepted pieces and more frequent invoices shrink
        the gap. Shape the billing pattern before you sign, then fund each part of
        what is left with the right money.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder runs a GovTech software company with $5,000,000 in annual revenue,
        growing about 20 percent. Those figures are our example. The company signs a
        $1,200,000 implementation. That figure is our example too. The CEO assumes the
        cash gap is set by how fast the agency pays. It is also set by how often the
        company is allowed to bill.
      </p>
      <p>
        The reason that frame fails is simple. The same work, with the same customer,
        can tie up very different cash. In our example the agency pays 60 days after a
        proper invoice in every case. One accepted milestone every 4 months ties up
        about $395,000 on average. Monthly billing ties up about $247,000. Billing
        every two weeks ties up about $220,000. Only the billing pattern changes.
        Whatever that capital costs, it comes out of the margin.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            You rarely choose the contract type. The agency does, based on how well
            the work can be defined.
          </li>
          <li>
            Fixed price pays on accepted work. The size of each accepted piece sets
            your wait.
          </li>
          <li>
            Commercial time and materials bills monthly, or more often if the
            contracting officer approves. That clause has no percentage withhold.
            Noncommercial time and materials can bill every two weeks, and a small
            business concern may be paid more often, but the contracting officer may
            require a 5 percent withhold, capped at $50,000.
          </li>
          <li>
            Cost reimbursement bills as work progresses. It is prohibited for
            commercial products and services. It needs an adequate accounting system.
            Interim payments earn no prompt payment interest. A reserve may be held, not
            to exceed 15 percent of the total fixed fee or $100,000, whichever is less.
          </li>
          <li>
            Shape the billing pattern before you sign. Fund lumps, the growing base,
            and holdbacks differently.
          </li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        On paper, cost reimbursement bills fastest, then time and materials, then
        fixed price. In practice, commercial software buys are usually firm fixed
        price, not always, and cost reimbursement is prohibited for commercial
        products and services. So the real lever is the billing pattern inside the
        contract you have. In our example, monthly billing instead of one milestone
        every 4 months frees about $148,000 on one contract.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Firm fixed price: a price that does not change with what the work costs you.
          You are paid for work the agency has accepted. Commercial software buys
          usually use this type. Usually, not always.
        </li>
        <li>
          Time and materials: you bill by the hour, up to a ceiling on commercial work.
          Commercial invoices may go out once each month, or more often if the
          contracting officer approves, with no withhold in that clause. Noncommercial
          vouchers may go out not more than once every two weeks, and the contracting
          officer may require a 5 percent withhold, capped at $50,000.
        </li>
        <li>
          Cost reimbursement: you bill allowable costs as work progresses. It is
          prohibited for commercial products and services and needs an adequate
          accounting system. Interim payments are contract financing payments and earn
          no prompt payment interest. A reserve not to exceed 15 percent of the total
          fixed fee or $100,000, whichever is less, can be held back.
        </li>
        <li>
          Billing pattern: how often you may invoice, and how big each accepted piece
          is. Payment speed is how long the agency takes after a proper invoice. Both
          set the gap.
        </li>
        <li>
          Withhold, retainage, and fee reserve: cash the agency can hold until a later
          date. Retainage applies only if the contract permits it.
        </li>
      </ul>
      <h2
        id={H["Which government contract type gets you paid fastest?"]}
      >
        Which government contract type gets you paid fastest?
      </h2>
      <p>
        On paper, cost reimbursement, then time and materials, then fixed price. But
        the type is the agency&apos;s choice, and for commercial software it is usually
        firm fixed price, not always. The billing pattern inside the contract matters
        more for your cash.
      </p>
      <p>
        A firm fixed price contract pays after the work is accepted. A time and
        materials contract pays by the hour on a set invoice cycle. A cost
        reimbursement contract pays as work progresses, then settles later. Those are
        the three patterns. None is &quot;best&quot; for every company. The type is a
        given. The billing pattern is the lever. Plan for both.
      </p>
      <p>
        Why does the agency often pick a firm fixed price? It wants to pay only for
        work it has accepted. It also puts cost risk on the vendor when the work is
        well defined. A firm fixed price contract{" "}
        <em>
          &quot;places upon the contractor maximum risk and full responsibility for all
          costs and resulting profit or loss.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/16.202-1">
          FAR 16.202-1
        </ExtLink>
        )
      </p>
      <p>
        The Texas guide describes the same three methods. For time and materials it
        notes{" "}
        <em>&quot;Payment based on quantity of work actually completed&quot;</em>. For
        cost reimbursement it notes{" "}
        <em>
          &quot;Payment to vendor of direct and indirect costs actually incurred&quot;
        </em>
        . For fixed price,{" "}
        <em>
          &quot;Vendor assumes most of the risk because vendor will be paid the same
          regardless of actual cost&quot;
        </em>
        . (Texas Comptroller, Procurement and Contract Management Guide, version 4.0,
        page 57) Other states and local governments likely have similar rules. Read
        your contract. The method in the contract is the one that counts.
      </p>
      <TableWrap caption="Contract type, when you can bill, what can be held back, and source">
        <table>
          <caption>
            Contract type, when you can bill, what can be held back, and source
          </caption>
          <thead>
            <tr>
              <th>Contract type</th>
              <th>When you can bill</th>
              <th>What can be held back</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Contract type">Firm fixed price</td>
              <td data-label="When you can bill">
                After the agency accepts the work
              </td>
              <td data-label="What can be held back">
                Retainage, if the contract permits it
              </td>
              <td data-label="Source">FAR 52.232-1, FAR 52.212-4</td>
            </tr>
            <tr>
              <td data-label="Contract type">Commercial time and materials</td>
              <td data-label="When you can bill">
                Monthly, or more often if the contracting officer approves
              </td>
              <td data-label="What can be held back">
                No withhold in that clause
              </td>
              <td data-label="Source">
                FAR 52.212-4, commercial time and materials alternate
              </td>
            </tr>
            <tr>
              <td data-label="Contract type">Noncommercial time and materials</td>
              <td data-label="When you can bill">
                Up to every two weeks; a small business concern may be paid more often
              </td>
              <td data-label="What can be held back">
                The contracting officer may require a 5 percent withhold, capped at
                $50,000
              </td>
              <td data-label="Source">FAR 52.232-7</td>
            </tr>
            <tr>
              <td data-label="Contract type">
                Cost reimbursement (prohibited for commercial products and services)
              </td>
              <td data-label="When you can bill">
                As work progresses, up to every two weeks; a small business concern
                may be paid more often
              </td>
              <td data-label="What can be held back">
                A reserve not to exceed 15 percent of the total fixed fee or $100,000,
                whichever is less; interim payments are contract financing and earn no
                prompt payment interest
              </td>
              <td data-label="Source">FAR 52.216-7, FAR 52.216-8</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["Do you get to choose the contract type?"]}>
        Do you get to choose the contract type?
      </h2>
      <p>
        Usually not. For commercial buys, agencies use firm fixed price unless
        conditions allow time and materials, and cost reimbursement is prohibited for
        commercial products and services. The agency chooses based on how well it can
        define the work.
      </p>
      <p>
        Commercial buys usually use firm fixed price contracts, or fixed price
        contracts with economic price adjustment. Usually, not always. Time and
        materials may be used for commercial services only under conditions. One of
        those conditions is this: the contract{" "}
        <em>
          &quot;Includes a ceiling price in the contract or order that the contractor
          exceeds at its own risk&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/12.207">
          FAR 12.207
        </ExtLink>
        )
      </p>
      <p>
        Here is the limit on time and materials. It{" "}
        <em>
          &quot;may be used only when it is not possible at the time of placing the
          contract to estimate accurately the extent or duration of the work or to
          anticipate costs with any reasonable degree of confidence.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/16.601">
          FAR 16.601
        </ExtLink>
        ) That is a high bar. Our reading: the agency picks hourly billing when it
        cannot define the work, not to help your cash. You cannot choose time and
        materials just to get paid faster.
      </p>
      <p>
        Cost reimbursement is prohibited for commercial products and services. It also
        needs this:{" "}
        <em>
          &quot;The contractor&apos;s accounting system is adequate for determining
          costs applicable to the contract or order&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/16.301-3">
          FAR 16.301-3
        </ExtLink>
        ) Our reading: this type is likely to show up only on noncommercial work. This
        post does not tell a software company to seek it.
      </p>
      <p>
        You do not choose the type to get paid faster. You learn which payment clause
        you have and plan for it.
      </p>
      <h2
        id={
          H[
            "How does a fixed price contract pay you, and how can you shorten the wait?"
          ]
        }
      >
        How does a fixed price contract pay you, and how can you shorten the wait?
      </h2>
      <p>
        You are paid for work the agency has accepted. So the wait is set by how big
        each accepted piece is. Smaller pieces, accepted more often, mean less cash
        out at any time.
      </p>
      <p>
        On a noncommercial fixed price contract, the payment rule is long.{" "}
        <em>
          &quot;The Government shall pay the Contractor, upon the submission of proper
          invoices or vouchers, the prices stipulated in this contract for supplies
          delivered and accepted or services rendered and accepted, less any deductions
          provided in this contract.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.232-1">
          FAR 52.232-1
        </ExtLink>
        ) You bill after acceptance. Then you wait for that invoice to be paid. The
        cash sits until both steps are done. That wait is real.
      </p>
      <p>
        The commercial clause is shorter. It still pays only after acceptance.{" "}
        <em>
          &quot;Payment shall be made for items accepted by the Government that have
          been delivered to the delivery destinations set forth in this contract.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.212-4">
          FAR 52.212-4
        </ExtLink>
        )
      </p>
      <p>
        Partial deliveries are a noncommercial rule. Under FAR 52.232-1,{" "}
        <em>
          &quot;payment shall be made on partial deliveries accepted by the Government
          if&quot;
        </em>{" "}
        the amount due on the deliveries is large enough. It also pays if{" "}
        <em>
          &quot;The Contractor requests it and the amount due on the deliveries is at
          least $1,000 or 50 percent of the total contract price.&quot;
        </em>{" "}
        That is a noncommercial rule. It does not make an agency split work on a
        commercial contract. It does not make an agency accept partial deliveries on a
        commercial contract. Our reading: on commercial contracts, the line items and
        acceptance points in the schedule do this work. Set them before you sign.
        Smaller accepted pieces mean a smaller wait.
      </p>
      <p>
        <em>&quot;Acceptance usually gates the invoice.&quot;</em> We covered that
        lever in our{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          implementation payment milestones
        </Link>{" "}
        post. And this:{" "}
        <em>
          &quot;When you bill in arrears, you deliver first and invoice later.&quot;
        </em>{" "}
        Upfront terms, where the contract allows them, change that sequence. We covered
        that in our{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront SaaS billing
        </Link>{" "}
        post.
      </p>
      <p>
        A contract may also hold back cash.{" "}
        <em>
          &quot;If permitted by the contract, an agency may withhold an amount or
          percentage of each payment due as retainage.&quot;
        </em>{" "}
        (Texas Comptroller, Procurement and Contract Management Guide, version 4.0,
        page 57) Retainage applies only if the contract permits it. Other states and
        local governments likely have similar rules. Read your contract.
      </p>
      <p>
        Before you sign, ask the contracting officer whether the work can be split into
        line items accepted and invoiced monthly. That is an agency facing step. It is
        not a tip on price or profit.
      </p>
      <h2 id={H["How does a time and materials contract pay you?"]}>
        How does a time and materials contract pay you?
      </h2>
      <p>
        By the hour, on a regular invoice cycle. On commercial contracts that is
        monthly, or more often if the contracting officer approves. On noncommercial
        contracts it can be every two weeks. A small business concern may be paid more
        often than every two weeks. The contracting officer may require a 5 percent
        withhold, capped at $50,000.
      </p>
      <p>
        The commercial clause is direct.{" "}
        <em>
          &quot;Invoices may be submitted once each month (or at more frequent
          intervals, if approved by the Contracting Officer) to the Contracting Officer
          or the authorized representative.&quot;
        </em>{" "}
        (FAR 52.212-4, commercial time and materials alternate) That clause has no
        percentage withhold.
      </p>
      <p>
        The noncommercial clause is tighter on timing.{" "}
        <em>
          &quot;Vouchers may be submitted not more than once every two weeks, to the
          Contracting Officer or authorized representative.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.232-7">
          FAR 52.232-7
        </ExtLink>
        ) And <em>&quot;A small business concern may receive more frequent payments than every two weeks.&quot;</em> The withhold is optional.{" "}
        <em>
          &quot;The Contracting Officer may require a withhold of 5 percent of the
          amounts due under paragraph (a) of this clause, but the total amount withheld
          for the contract shall not exceed $50,000.&quot;
        </em>{" "}
        &quot;May,&quot; not &quot;will.&quot; The amount stays held until the
        contractor signs and delivers the required release. In our example, 5 percent
        of $1,200,000 is $60,000. So the cap of $50,000 applies.
      </p>
      <p>
        Why hold money back? Hourly work has no fixed price. Our reading: the agency may
        keep a reserve until it is sure the hours were right. The Texas guide&apos;s
        drawback for this method is that the customer must monitor closely. Other states
        and local governments likely have similar rules. Read your contract.
      </p>
      <p>
        One more line on the rate itself.{" "}
        <em>
          &quot;The hourly rates shall include wages, indirect costs, general and
          administrative expense, and profit.&quot;
        </em>{" "}
        (FAR 52.232-7) Our reading: your margin is in the rate and arrives on the
        invoice cycle.
      </p>
      <h2
        id={H["Should you chase cost reimbursement work to get paid faster?"]}
      >
        Should you chase cost reimbursement work to get paid faster?
      </h2>
      <p>
        Usually not. It is prohibited for commercial products and services, it needs an
        accounting system built for it, and it is slow to settle. Billing fast and
        keeping the cash are not the same thing. Speed of billing is not speed of
        settlement. Keep those two ideas apart.
      </p>
      <p>
        The clause says{" "}
        <em>
          &quot;The Government will make payments to the Contractor when requested as
          work progresses&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/52.216-7">
          FAR 52.216-7
        </ExtLink>
        ) Those requests are not more often than every two weeks, except this:{" "}
        <em>
          &quot;A small business concern may receive more frequent payments than every
          2 weeks.&quot;
        </em>{" "}
        So the invoices can come sooner. The cash may not stay. Some of it can wait
        until the end.
      </p>
      <p>
        Interim payments before final payment are contract financing payments.{" "}
        <em>
          &quot;Contract financing payments are not subject to the interest penalty
          provisions of the Prompt Payment Act.&quot;
        </em>{" "}
        (FAR 52.216-7) They earn no prompt payment interest. We covered that interest,
        which starts only after the due date on a proper invoice when the clause&apos;s
        conditions are met, in our{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>prompt payment laws</Link>{" "}
        post. Do not treat an interim cost payment as the same thing.
      </p>
      <p>
        An audit can also slow a payment. When the government audits or reviews a
        specific request,{" "}
        <em>
          &quot;the designated payment office is not compelled to make payment by the
          specified due date.&quot;
        </em>{" "}
        (FAR 52.216-7)
      </p>
      <p>
        Part of the fee waits. The contracting officer{" "}
        <em>
          &quot;withholds a reserve not to exceed 15 percent of the total fixed fee or
          $100,000, whichever is less, to protect the Government&apos;s interest.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/52.216-8">
          FAR 52.216-8
        </ExtLink>
        ) That is a cap, not a typical amount. Most of that reserve is released only
        after a final indirect cost rate proposal. We covered that end stage in our{" "}
        <Link
          href={`/blog/${GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST.slug}`}
        >
          closeout and the final invoice
        </Link>{" "}
        post.
      </p>
      <p>
        The Texas guide&apos;s drawback for this method is the{" "}
        <em>&quot;Administrative burden of validating all costs&quot;</em>. (Texas
        Comptroller, Procurement and Contract Management Guide, version 4.0, page 57)
        The system has a cost. If your company does noncommercial work, treat that
        accounting system as a multi year investment. Fund it as growth, not as a fix
        for slow pay.
      </p>
      <h2 id={H["How much cash does each billing pattern tie up?"]}>
        How much cash does each billing pattern tie up?
      </h2>
      <p>
        In our example, the same $1,200,000 implementation ties up about $395,000
        with one milestone every 4 months, about $247,000 with monthly billing, and
        about $220,000 billing every two weeks. The agency pays at the same speed in
        every case. Only the billing pattern changes.
      </p>
      <p>
        Here is the math, all labeled our example. The agency pays 60 days after a
        proper invoice in every case. Many state and local customers take longer. That
        60 day figure is our example, not a typical delay. Average wait is half the
        billing period plus those 60 days. One milestone every 4 months is about 120
        days to cash, or about $395,000 tied up. Monthly billing is about 75 days, or
        about $247,000. Invoices every two weeks are about 67 days, or about $220,000.
        These figures are our example. They are not a forecast. Use your own billings
        for the live plan. Do the math on your book.
      </p>
      <p>
        <em>
          &quot;Your cash flow gap is a number, not a feeling.&quot;
        </em>{" "}
        Size the everyday gap with the method in our{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          government contractor cash flow gap
        </Link>{" "}
        post.
      </p>
      <p>
        The base does not stay still if you grow.{" "}
        <em>
          &quot;Part of the gap is a permanent base that grows with revenue.&quot;
        </em>{" "}
        Growth raises the base. In our example, at 20 percent growth the same pattern
        next year is on $1,440,000 of work. One milestone every 4 months then ties up
        about $473,000. Monthly billing then ties up about $296,000.
      </p>
      <p>
        Billing starts only on signed work.{" "}
        <em>&quot;Count signed orders, not ceilings.&quot;</em> We covered that limit
        in our{" "}
        <Link href={`/blog/${IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST.slug}`}>
          IDIQ task orders
        </Link>{" "}
        post.
      </p>
      <TableWrap caption="Billing pattern, average days work to cash, and average cash tied up">
        <table>
          <caption>
            Billing pattern, average days work to cash, and average cash tied up
          </caption>
          <thead>
            <tr>
              <th>Billing pattern</th>
              <th>Average days work to cash</th>
              <th>Average cash tied up</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Billing pattern">
                One accepted milestone every 4 months (our example)
              </td>
              <td data-label="Average days work to cash">About 120</td>
              <td data-label="Average cash tied up">About $395,000</td>
            </tr>
            <tr>
              <td data-label="Billing pattern">
                Monthly acceptance and invoice (our example)
              </td>
              <td data-label="Average days work to cash">About 75</td>
              <td data-label="Average cash tied up">About $247,000</td>
            </tr>
            <tr>
              <td data-label="Billing pattern">
                Invoices every two weeks (our example)
              </td>
              <td data-label="Average days work to cash">About 67</td>
              <td data-label="Average cash tied up">About $220,000</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["How should you fund what each billing pattern leaves?"]}>
        How should you fund what each billing pattern leaves?
      </h2>
      <p>
        Match the money to the shape of the gap. A lump that ends in a known accepted
        milestone is a timing problem on signed work. A steady base that grows with
        revenue belongs in your long term capital plan, and real growth takes growth
        capital.
      </p>
      <p>
        The FAR expects you to bring your own money first. That rule sits in the
        FAR&apos;s contract financing part for purchases other than commercial ones. The
        officer is told to{" "}
        <em>
          &quot;Provide Government financing only to the extent actually needed for
          prompt and efficient performance, considering the availability of private
          financing&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/32.104">
          FAR 32.104
        </ExtLink>
        ) Our reading: plan to fund the gap yourself. The agency will not cover the wait
        as a matter of course. Fund it on purpose. Match the money to the shape.
      </p>
      <p>
        Use loans with bullet payments if one large milestone lands on a known date on
        signed work.
      </p>
      <p>
        Use a revolving line of credit if monthly or biweekly invoices on signed work
        open and close a gap every cycle.
      </p>
      <p>
        Use longer dated capital, chosen with your whole capital stack in mind, if the
        base keeps growing with revenue year after year.
      </p>
      <p>
        Use growth capital if the need is a multi year build, such as the accounting
        system and team that noncommercial cost work requires.
      </p>
      <p>
        Withholds and fee reserves are a known amount with a release at the end. Plan
        them as part of the timing gap. Track the release date.
      </p>
      <p>
        Shrink the gap before you fund it, where the contract allows it. An early
        payment discount has a price you pay. We covered those discounts in our{" "}
        <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
          early payment discounts
        </Link>{" "}
        post. Check where an invoice stands. We covered that in our{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          invoice status
        </Link>{" "}
        post. Ask for payment of the undisputed part of an invoice. We covered that in
        our{" "}
        <Link href={`/blog/${UNDISPUTED_INVOICE_PORTION_POST.slug}`}>
          undisputed invoice portion
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
              <td data-label="If you have">A contract you have not signed yet</td>
              <td data-label="It is likely">A gap you can still shrink</td>
              <td data-label="Use">
                Ask for monthly acceptance and invoicing
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                One large milestone on a known date on signed work
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Loans with bullet payments</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Monthly or biweekly invoices on signed work
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">A revolving line of credit</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Withholds or fee reserves released at the end
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                Plan them in the timing gap; track the release
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A base of tied up cash that grows with revenue
              </td>
              <td data-label="It is likely">Capital structure</td>
              <td data-label="Use">
                Longer dated capital, chosen with your whole capital stack in mind
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A multi year build, such as systems for cost work
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2
        id={
          H["What should you do before you sign your next government contract?"]
        }
      >
        What should you do before you sign your next government contract?
      </h2>
      <p>
        Find the payment clause, map when each dollar can be billed, and put the result
        in your capital plan. Then fund each part of the gap on purpose before the work
        starts.
      </p>
      <ol>
        <li>
          Find the payment clause. Note whether it is firm fixed price, commercial
          time and materials, noncommercial time and materials, or cost reimbursement.
        </li>
        <li>
          Map each line item to its acceptance point and invoice date.
        </li>
        <li>
          Before signing, ask the contracting officer whether work can be accepted and
          invoiced monthly. On commercial time and materials, ask whether invoices more
          often than monthly are approved.
        </li>
        <li>
          Note any withhold, retainage, or fee reserve and when it releases. Retainage
          applies only if the contract permits it. On noncommercial time and materials,
          a 5 percent withhold, capped at $50,000, may be required. On cost
          reimbursement, a reserve may be not to exceed 15 percent of the total fixed
          fee or $100,000, whichever is less.
        </li>
        <li>
          If you are a subcontractor, map the prime&apos;s payment timing too. We
          covered that in our{" "}
          <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
            subcontractor payment from the prime
          </Link>{" "}
          post. If funding is partial, the obligated amount is the cap on what you can
          bill. We covered that in our{" "}
          <Link href={`/blog/${INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST.slug}`}>
            incrementally funded contracts
          </Link>{" "}
          post.
        </li>
        <li>
          Put the average tied up cash and the peak in your capital plan. Arrange funding
          for each part before the work starts.
        </li>
      </ol>
      <p>
        Our view: you rarely choose the contract type. You often can shape the billing
        pattern inside it, and the time to do that is before you sign. Smaller accepted
        pieces mean a smaller gap. Fund lumps on signed work with a timing tool, the
        growing base with longer dated capital, and real growth with growth capital. If
        you do noncommercial cost reimbursement work, treat the accounting system as a
        multi year growth investment, not as a fix for slow pay.
      </p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={GOVERNMENT_CONTRACT_TYPE_CASH_GAP_FAQ} />
      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Implementation payment milestones
          </Link>
        </li>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST.slug}`}>
            IDIQ contract task order cash gap
          </Link>
        </li>
        <li>
          <Link
            href={`/blog/${GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST.slug}`}
          >
            Government contract closeout and the final invoice
          </Link>
        </li>
      </ul>
      <p>
        <strong>Your next step:</strong> If your billing pattern on a signed government
        contract is tying up cash you need to grow,{" "}
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
        postSlug={GOVERNMENT_CONTRACT_TYPE_CASH_GAP_POST.slug}
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