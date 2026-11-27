import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  EARLY_PAYMENT_DISCOUNT_POST,
  IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST,
  IMPLEMENTATION_MILESTONES_POST,
  INVOICE_PAYMENT_STATUS_POST,
  PROMPT_PAYMENT_POST,
  SELF_FUNDED_GROWTH_GOVERNMENT_CONTRACTORS_FAQ,
  SELF_FUNDED_GROWTH_GOVERNMENT_CONTRACTORS_HEADINGS,
  SELF_FUNDED_GROWTH_GOVERNMENT_CONTRACTORS_POST,
  UNDISPUTED_INVOICE_PORTION_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  SELF_FUNDED_GROWTH_GOVERNMENT_CONTRACTORS_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function SelfFundedGrowthGovernmentContractorsPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Profit alone may not pay for growth when the government takes months to pay.
        Two numbers set how fast you can grow on your own cash: the profit you keep
        and the days your cash is tied up. Above that rate, the difference has to come
        from somewhere. Work out your rate, cut the days you control, and fund the rest
        of the growth on purpose.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder runs a GovTech software company with $5,000,000 in annual revenue.
        Those figures are our example. The company keeps about 10 percent as cash profit
        and pays half of that to its owners. Government customers pay about 120 days
        after an invoice, so cash is tied up about 135 days. That 135 is about 15 days
        from work to invoice on monthly billing, plus about 120 days for the agency to
        pay. The CEO plans 20 percent growth and assumes the profits will pay for it.
      </p>
      <p>
        The reason that plan comes up short is simple. Every new dollar of revenue
        first ties up cash for as many days as your customers take to pay. Two numbers
        set a ceiling on how fast you can grow on your own cash: the cash profit you
        keep, and the cash tied up in unpaid work. We call that ceiling your self
        funded growth rate. It is our rule of thumb, not a formula from a source. Grow
        faster than that rate, and the difference has to come from outside the
        business. The government sets a floor on the days. The days you control, the
        profit you keep, and the outside capital you arrange are the levers. The growth
        plan and the capital plan are the same number.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            New revenue ties up cash before it brings cash in. Slow pay makes that wait
            longer.
          </li>
          <li>
            Your self funded growth rate is roughly the cash profit you keep divided by
            the cash tied up.
          </li>
          <li>
            The government pays on its due date, not early, as a rule. The days above
            that floor are yours to cut.
          </li>
          <li>
            Keeping more profit in the business and cutting days both lift your rate.
          </li>
          <li>
            Fund growth above your rate on purpose, with capital that fits the shape of
            the shortfall.
          </li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        Divide the cash profit you keep each year by the cash tied up in unpaid work.
        That is roughly how fast you can grow without outside money. In our example, a
        $5,000,000 company keeping $250,000 with 135 days of cash tied up can grow about
        15 percent. To grow 20 percent, it needs about $83,000 more this year.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Self funded growth rate: our rule of thumb. The cash profit you keep each
          year, divided by the cash tied up in unpaid work. It is rough planning math,
          not a formula from a source.
        </li>
        <li>
          Cash tied up: your yearly cash costs times the days from paying for work to
          collecting for it, divided by 365 days.
        </li>
        <li>
          Paper clock: the due date in the contract or in the payment clause. For
          federal invoices, that due date is the later of 30 days after a proper
          invoice or 30 days after acceptance, unless the contract sets a date (FAR
          52.232-25).
        </li>
        <li>
          Growth capital: money for growth that sits above your self funded rate, not a
          timing tool for one invoice.
        </li>
      </ul>
      <h2
        id={H["Why does a profitable company run short of cash when it grows?"]}
      >
        Why does a profitable company run short of cash when it grows?
      </h2>
      <p>
        Because each new dollar of revenue ties up cash before it pays. You pay your
        team and your hosting now, and the customer pays months later. The faster you
        grow, the more cash sits in unpaid work.
      </p>
      <p>
        Take our example. Revenue is $5,000,000. Cash costs are about 90 percent of
        revenue, or about $12,300 a day. That is $4,500,000 divided by 365 days,
        rounded. Cash stays tied up about 135 days, from paying for the work to
        collecting for it. Yearly cash costs times 135, divided by 365, is about
        $1,664,000. That balance has to sit somewhere.
      </p>
      <p>
        Your cash flow gap is a number you can size.{" "}
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em>{" "}
        <em>
          &quot;Part of the gap is a permanent base that grows with revenue.&quot;
        </em>{" "}
        We walked through that sizing in our{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>cash flow gap</Link> post.
      </p>
      <p>
        The income statement still shows profit. Growth still feels like good news. The
        cash tied up shows only on the balance sheet. That is why a profitable company
        can still run short.
      </p>
      <h2 id={H["How fast can you grow on your own cash?"]}>
        How fast can you grow on your own cash?
      </h2>
      <p>
        Divide the cash profit you keep each year by the cash tied up in unpaid work.
        That rough rate is your self funded growth rate, our rule of thumb. Grow faster
        than it, and you need money from outside the business.
      </p>
      <p>
        Here is our math, step by step. The company in our example keeps about 10
        percent as cash profit, or $500,000. Owners take half, so about $250,000 stays
        in the business. Cash tied up is about $1,664,000, as above. Now divide.
        $250,000 divided by $1,664,000 is about 15 percent. That is the self funded
        growth rate in our example.
      </p>
      <p>
        A 20 percent growth target adds to the cash tied up too. Twenty percent of
        $1,664,000 is about $333,000. The company keeps only about $250,000, so it is
        about $83,000 short this year.
      </p>
      <p>
        Keep the same margin and the same payout split, and the short grows with
        revenue. Next year, at $6,000,000 in revenue, the short is about $99,000. The
        year after, at $7,200,000, it is about $119,000. Over three years that is about
        $302,000. The company is profitable every year, and short every year.
      </p>
      <p>
        If the owners keep all of the $500,000 profit, divide $500,000 by $1,664,000.
        The rate rises to about 30 percent. If the company cuts the days from 135 to
        90, cash tied up falls to about $1,110,000. $250,000 divided by $1,110,000 is
        about 22.5 percent. Cutting those days also frees about $555,000 once. That is
        $1,664,000 minus $1,110,000, rounded.
      </p>
      <p>
        This ignores tax timing, debt payments, product spend, hiring ahead of revenue,
        and seasonal peaks. Real needs are likely higher. Treat the result as a floor
        for planning, not a forecast. All of these figures are our example and our math.
      </p>
      <TableWrap caption="Number, what sets it, and who controls it">
        <table>
          <caption>Number, what sets it, and who controls it</caption>
          <thead>
            <tr>
              <th>Number</th>
              <th>What sets it</th>
              <th>Who controls it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Number">Cash profit you keep</td>
              <td data-label="What sets it">Your margin and your distributions</td>
              <td data-label="Who controls it">You</td>
            </tr>
            <tr>
              <td data-label="Number">Days cash is tied up</td>
              <td data-label="What sets it">
                Due dates, acceptance, your invoices
              </td>
              <td data-label="Who controls it">
                Partly the government, partly you
              </td>
            </tr>
            <tr>
              <td data-label="Number">Growth target</td>
              <td data-label="What sets it">Your plan</td>
              <td data-label="Who controls it">You</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <TableWrap caption="Days cash is tied up and self funded growth rate by profit kept">
        <table>
          <caption>
            Days cash is tied up and self funded growth rate by profit kept
          </caption>
          <thead>
            <tr>
              <th>Days cash is tied up</th>
              <th>Keep 10 percent of revenue</th>
              <th>Keep 5 percent of revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Days cash is tied up">90</td>
              <td data-label="Keep 10 percent of revenue">About 45 percent</td>
              <td data-label="Keep 5 percent of revenue">About 22.5 percent</td>
            </tr>
            <tr>
              <td data-label="Days cash is tied up">135</td>
              <td data-label="Keep 10 percent of revenue">About 30 percent</td>
              <td data-label="Keep 5 percent of revenue">About 15 percent</td>
            </tr>
            <tr>
              <td data-label="Days cash is tied up">180</td>
              <td data-label="Keep 10 percent of revenue">About 22.5 percent</td>
              <td data-label="Keep 5 percent of revenue">About 11 percent</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        The second table is our example. Cash costs are 90 percent of revenue. Keep 10
        percent of revenue means keeping all of the cash profit. Keep 5 percent of
        revenue means owners take half, as in the story. At 180 days, the lower rate is
        about 11 percent. The exact figure in our math is about 11.3 percent.
      </p>
      <h2 id={H["Can you get the government to pay you faster?"]}>
        Can you get the government to pay you faster?
      </h2>
      <p>
        Not by asking it to pay early. As a rule, federal and Texas state payments come
        on the due date, not before. You can make the clock start sooner and run
        cleaner, and that is where your days come from.
      </p>
      <p>
        The federal paper clock is in FAR 52.232-25. Unless the contract sets a date,{" "}
        <em>
          &quot;the due date for making invoice payments by the designated payment
          office is the later of the following two events:&quot;
        </em>{" "}
        <em>
          &quot;The 30th day after the designated billing office receives a proper
          invoice from the Contractor&quot;
        </em>{" "}
        and{" "}
        <em>
          &quot;The 30th day after Government acceptance of supplies delivered or
          services performed.&quot;
        </em>{" "}
        That is the paper clock, not a typical wait. Your customers may take 90 to 180
        days. Those longer waits come from experience, not from a cited figure.
      </p>
      <p>
        The federal government also does not pay early as a rule.{" "}
        <em>
          &quot;The Government will not make invoice payments earlier than 7 days prior
          to the due dates specified in the contract unless the agency head
          determines&quot;
        </em>{" "}
        otherwise. (
        <ExtLink href="https://www.acquisition.gov/far/32.906">
          FAR 32.906
        </ExtLink>
        ) The exceptions, in paraphrase, are a case by case decision to pay earlier, or
        a decision that accelerated payment methods are necessary.
      </p>
      <p>
        Texas state agencies follow a similar line.{" "}
        <em>
          &quot;The State&apos;s policy on payment scheduling prohibits agencies from
          making payments earlier than the payment due date unless it is required by
          law, contract, or other obligation to the contractor to process the payment
          before the payment due date.&quot;
        </em>{" "}
        (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          Texas Comptroller Procurement and Contract Management Guide, Version 4.0,
          printed page 57
        </ExtLink>
        ) And{" "}
        <em>
          &quot;A contractor&apos;s request on an invoice that the invoice is to be paid
          immediately upon receipt is not an obligation to make an early payment to the
          contractor.&quot;
        </em>{" "}
        (same guide, printed page 57)
      </p>
      <p>
        State and local clocks differ. In Minnesota,{" "}
        <em>
          &quot;If there is no early payment discount period, the state agency must pay
          the vendor within 30 days following the receipt of the invoice for the
          completed delivery of the product or service.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.revisor.mn.gov/statutes/cite/16A.124">
          Minnesota Statutes 16A.124
        </ExtLink>
        ) For municipalities whose boards meet at least monthly,{" "}
        <em>
          &quot;the standard payment period is defined as within 35 days of the date of
          receipt.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.revisor.mn.gov/statutes/cite/471.425">
          Minnesota Statutes 471.425
        </ExtLink>
        ) Other states are likely different. Read your contract. We covered those rules
        in our{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws
        </Link>{" "}
        post. If a federal payment is late, prompt payment interest may be due after
        the due date and when the clause&apos;s conditions are met.
      </p>
      <p>
        Why does the government act this way? Likely, it manages its own cash and
        follows its payment rules, so it pays when payment is due. Paying early is the
        exception, not a favor you can request on the invoice.
      </p>
      <p>
        The gap between the paper clock and a 90 to 180 day wait is likely acceptance,
        returned invoices, approvals, and contract terms. Our reading: that gap is where
        the days you control live.
      </p>
      <h2 id={H["Which days can you actually cut?"]}>
        Which days can you actually cut?
      </h2>
      <p>
        The days before the clock starts and the days lost to errors. Send proper
        invoices on day one, get acceptance on smaller pieces of work, and bill
        subscriptions upfront where the rules allow. In our example, cutting 135 days to
        90 frees about $555,000 once and lifts the self funded rate from about 15 to
        about 22.5 percent.
      </p>
      <p>
        Smaller pieces help, when the work allows it. Contracting officers must,{" "}
        <em>
          &quot;write contract statements of work and pricing arrangements that allow
          contractors to deliver and receive invoice payments for discrete portions of
          the work as soon as completed and found acceptable by the Government&quot;
        </em>
        , where the nature of the work permits. (
        <ExtLink href="https://www.acquisition.gov/far/32.906">
          FAR 32.906
        </ExtLink>
        ) That is a duty where the work permits it, not a promise that every contract
        will be split. <em>&quot;Acceptance usually gates the invoice.&quot;</em> We
        covered that in our{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          implementation payment milestones
        </Link>{" "}
        post. Smaller accepted pieces, billed more often, mean fewer days.
      </p>
      <p>
        Some subscriptions can be billed before the work is delivered, when the rules
        allow it. In Texas,{" "}
        <em>
          &quot;An agency may not pay for goods or services before their delivery to the
          agency unless the advance payment is necessary and serves a public
          purpose.&quot;
        </em>{" "}
        (
        <ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">
          Texas Comptroller guide, Version 4.0, printed page 57
        </ExtLink>
        ){" "}
        <em>
          &quot;Exceptions include, but are not limited to, lease costs, subscriptions,
          and maintenance contracts.&quot;
        </em>{" "}
        (same guide, printed page 57) That is not a rule that every Texas software
        subscription can be paid upfront.{" "}
        <em>
          &quot;When you bill in arrears, you deliver first and invoice later.&quot;
        </em>{" "}
        We covered the upfront path in our{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront SaaS billing
        </Link>{" "}
        post.
      </p>
      <p>
        If you qualify as a small business, you can ask about accelerated payment.
        Agencies other than the Department of Defense{" "}
        <em>
          &quot;shall provide accelerated payments, to the fullest extent permitted by
          law, with a goal of 15 days after receipt of a proper invoice and all other
          required documentation, if a specific payment date is not established by
          contract, to&quot;
        </em>{" "}
        small business contractors, among others. (
        <ExtLink href="https://www.acquisition.gov/far/32.009-1">
          FAR 32.009-1
        </ExtLink>
        ) That wording is the non Defense rule. It is a goal, not a guarantee.{" "}
        <em>
          &quot;If you qualify as a small business, it is fair to ask your contracting
          officer whether accelerated payment applies to your invoices.&quot;
        </em>{" "}
        We covered that ask in our{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws
        </Link>{" "}
        post.
      </p>
      <p>
        Find stuck invoices sooner.{" "}
        <em>
          &quot;It finds problems sooner, and it gives you a date to plan around.&quot;
        </em>{" "}
        We covered that in our{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          invoice status
        </Link>{" "}
        post. If part of an invoice is in dispute, ask for payment of the undisputed
        portion. We covered that in our{" "}
        <Link href={`/blog/${UNDISPUTED_INVOICE_PORTION_POST.slug}`}>
          undisputed invoice portion
        </Link>{" "}
        post.
      </p>
      <p>
        An early payment discount is a different lever.{" "}
        <em>&quot;An early payment discount trades revenue for speed.&quot;</em> We
        covered that in our{" "}
        <Link href={`/blog/${EARLY_PAYMENT_DISCOUNT_POST.slug}`}>
          early payment discounts
        </Link>{" "}
        post. Our reading: it lowers the profit you keep, which also lowers your self
        funded growth rate.
      </p>
      <h2
        id={H["Should you keep more profit in the business or pay it out?"]}
      >
        Should you keep more profit in the business or pay it out?
      </h2>
      <p>
        That is your call, but both come from the same cash. In our example, keeping all
        of the profit lifts the self funded rate from about 15 to about 30 percent.
        Decide the split on purpose, with the growth target in front of you.
      </p>
      <p>
        Owners take distributions for good reasons. The company is profitable. Owners
        carry the risk. Many bootstrapped founders want income from the business.{" "}
        <em>&quot;Venture investors usually want cash reinvested.&quot;</em> We covered
        that model in our{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          when venture capital is wrong for vertical SaaS
        </Link>{" "}
        post. Not every company wants that model.
      </p>
      <p>Talk to your accountant about taxes on profits you keep.</p>
      <p>
        Our reading: neither choice is wrong. The mistake is making it by default and
        finding the shortfall later.
      </p>
      <h2
        id={H["How should you fund growth above your self funded rate?"]}
      >
        How should you fund growth above your self funded rate?
      </h2>
      <p>
        Match the money to the shape of the shortfall. A lump on signed work that clears
        is a timing problem. A shortfall that comes back every year and grows with
        revenue is a capital structure decision, and real expansion takes growth
        capital.
      </p>
      <p>
        The government expects you to arrange private financing first. That point sits in
        the FAR&apos;s contract financing part for purchases other than commercial ones.
        Most software is bought commercially, and government financing is likely
        uncommon there.{" "}
        <em>
          &quot;Provide Government financing only to the extent actually needed for
          prompt and efficient performance, considering the availability of private
          financing&quot;
        </em>
        . (
        <ExtLink href="https://www.acquisition.gov/far/32.104">
          FAR 32.104
        </ExtLink>
        ) The first item in the order of preference is{" "}
        <em>&quot;Private financing without Government guarantee.&quot;</em> (
        <ExtLink href="https://www.acquisition.gov/far/32.106">
          FAR 32.106
        </ExtLink>
        ){" "}
        <em>
          &quot;If the contractor is a small business concern, the contracting officer
          must give special attention to meeting the contractor&apos;s contract financing
          need.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.acquisition.gov/far/32.104">
          FAR 32.104
        </ExtLink>
        ) Our reading: plan to fund your own gap.
      </p>
      <p>
        <em>
          &quot;A long wait on a signed contract is a cash flow problem, and it has its
          own tools.&quot;
        </em>{" "}
        We covered that in our{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          when venture capital is wrong for vertical SaaS
        </Link>{" "}
        post.
      </p>
      <p>
        Use loans with bullet payments if a large new award ramps on signed work and the
        cash clears on a known date.
      </p>
      <p>
        Use a revolving line of credit if invoices on signed work open and close a gap
        every cycle.
      </p>
      <p>
        Use longer dated capital, chosen with your whole capital stack in mind, if the
        shortfall comes back every year and grows with revenue, as in our example.
      </p>
      <p>
        Use growth capital if you plan to grow well above your self funded rate for
        several years, or to build something new such as a product or a market.
      </p>
      <p>
        Plan on signed work, not on a ceiling.{" "}
        <em>&quot;Count signed orders, not ceilings.&quot;</em> We covered that in our{" "}
        <Link href={`/blog/${IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST.slug}`}>
          IDIQ task orders
        </Link>{" "}
        post.
      </p>
      <p>
        Size the outside capital to the difference between your target and your self
        funded rate, a year ahead, plus room for peaks. Whatever that capital costs,
        compare it to the growth it pays for.
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
                A target at or below your self funded rate
              </td>
              <td data-label="It is likely">Funded by your own cash</td>
              <td data-label="Use">
                Keep reinvesting; recheck the days each quarter
              </td>
            </tr>
            <tr>
              <td data-label="If you have">Days you can still cut</td>
              <td data-label="It is likely">A days problem first</td>
              <td data-label="Use">
                Proper invoices, smaller accepted pieces, upfront subscriptions
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                A big new award ramp on signed work
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Loans with bullet payments</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Invoices that open and close a gap each cycle
              </td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">A revolving line of credit</td>
            </tr>
            <tr>
              <td data-label="If you have">
                A shortfall that returns every year and grows
              </td>
              <td data-label="It is likely">Capital structure</td>
              <td data-label="Use">
                Longer dated capital, chosen with your whole capital stack in mind
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                Growth well above your rate for years
              </td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2
        id={H["What should you do before you set next year's growth target?"]}
      >
        What should you do before you set next year&apos;s growth target?
      </h2>
      <p>
        Work out your self funded growth rate, cut the days you control, and decide how
        much profit stays in. Then fund the difference to your target on purpose, before
        the growth starts.
      </p>
      <ol>
        <li>Measure the days from paying for work to collecting for it, by customer type.</li>
        <li>Measure the cash profit you keep after distributions.</li>
        <li>
          Divide kept profit by cash tied up. That is your rough self funded growth rate.
        </li>
        <li>
          Compare it to your growth target. Multiply the difference by the cash tied up to
          size the shortfall for the year.
        </li>
        <li>
          Cut the days you control: proper invoices on day one, acceptance on smaller
          pieces, upfront subscriptions where allowed, accelerated payment if you are a
          small business.
        </li>
        <li>
          Put the shortfall, by year, in your capital plan, and arrange funding for each
          part before the work starts.
        </li>
      </ol>
      <p>
        Our view: work out your self funded growth rate, our rule of thumb for how much
        growth the cash profit you keep can fund. Cut the days you control, and decide on
        purpose how much profit stays in. Then fund the difference between your growth
        target and that rate on purpose, with capital that fits its shape, before the
        growth starts.
      </p>
      <p>
        Your growth target and your capital plan are the same number. If you want to
        talk through the capital for the growth above your self funded rate,{" "}
        <Link href="/contact/founder">talk with Lambda Capital</Link>.
      </p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={SELF_FUNDED_GROWTH_GOVERNMENT_CONTRACTORS_FAQ} />
      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt payment laws for GovTech software vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Government SaaS upfront payment
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST.slug}`}>
            IDIQ contract task order cash gap
          </Link>
        </li>
      </ul>
      <p>
        <em>
          This post is general education, not financial, legal, accounting, or tax
          advice.
        </em>
      </p>
      <FounderCtaBlock
        position="bottom"
        postSlug={SELF_FUNDED_GROWTH_GOVERNMENT_CONTRACTORS_POST.slug}
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