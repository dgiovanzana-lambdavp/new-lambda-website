import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  GOVTECH_POST,
  PROMPT_PAYMENT_FAQ,
  PROMPT_PAYMENT_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  PROMPT_PAYMENT_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PromptPaymentPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          The law says the government owes you interest when it pays late. It
          does not say the government will make your payroll.
        </strong>
      </p>
      <p>
        Federal agencies generally must pay a proper invoice within 30 days and
        owe interest automatically if they pay late. State and local rules
        differ: some set 30, 45 or 60 day deadlines with statutory interest, and
        disputes or improper invoices usually stop the clock. Interest gives a
        vendor a small amount of compensation. It does not replace the cash
        while you wait.
      </p>
      <p>
        We talk with a lot of GovTech founders who run real businesses: a few
        million in revenue, growing steadily, government customers who renew.
        Many of them carry receivables of 90 to 180 days and assume there is a
        legal remedy that fixes it. There is a remedy. It is just smaller and
        narrower than most people expect. This post walks through what the
        federal and state prompt payment rules actually say, what they recover,
        and what they leave on your plate.
      </p>

      <h2 id={H["The federal rule in plain English"]}>
        The federal rule in plain English
      </h2>
      <p>
        Under the federal Prompt Payment Act, as implemented in the FAR payment
        clause, the due date is generally &quot;the later of&quot; two events:
        the 30th day after the billing office receives a proper invoice, or the
        30th day after the government accepts the goods or services. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-25">
          FAR 52.232-25
        </ExtLink>
        ) If your contract names a specific payment date, that date governs. (
        <ExtLink href="https://fiscal.treasury.gov/payments-from-government/prompt-payment/faqs">
          Bureau of the Fiscal Service FAQ
        </ExtLink>
        )
      </p>
      <p>Three things to know:</p>
      <ul>
        <li>
          <strong>Interest is automatic.</strong> The FAR clause says the
          payment office &quot;will pay an interest penalty automatically,
          without request from the Contractor, if payment is not made by the due
          date&quot; and the clause&apos;s conditions are met. (
          <ExtLink href="https://www.acquisition.gov/far/52.232-25">
            FAR 52.232-25
          </ExtLink>
          )
        </li>
        <li>
          <strong>Treasury sets the rate.</strong> The Bureau of the Fiscal
          Service publishes the rate by period. For July 1 through December 31,
          2026, it is 4.75%. (
          <ExtLink href="https://fiscal.treasury.gov/fsservices/gov/pmt/promptPayment/promptPayment_home.htm">
            Bureau of the Fiscal Service
          </ExtLink>
          ) Check the rate in effect when your invoice became late.
        </li>
        <li>
          <strong>Interest runs from the day after the due date.</strong>{" "}
          Treasury guidance says the penalty is paid &quot;starting on the day
          after the required payment date and ending on the date on which
          payment is made.&quot; (
          <ExtLink href="https://tfx.treasury.gov/tfm/volume1/part4a/chapter-5000-prompt-payment-act-ppa-guidance-heads-government-departments">
            Treasury Financial Manual, Chapter 5000
          </ExtLink>
          )
        </li>
      </ul>

      <h2 id={H['The "proper invoice" trap']}>
        The &quot;proper invoice&quot; trap
      </h2>
      <p>
        For software vendors, this is the section that matters most. The 30 day
        clock does not start until the agency has a proper invoice.
      </p>
      <p>
        Treasury puts it plainly: &quot;The payment period starts when the
        agency receives a proper invoice that includes all required
        information.&quot; If an invoice is improper, the agency must return it
        &quot;no later than 7 days after receipt,&quot; list the defects, and
        ask for a corrected invoice. No late payment interest is due until the
        payment period runs out after the corrected invoice arrives. (
        <ExtLink href="https://fiscal.treasury.gov/payments-from-government/prompt-payment/faqs">
          Bureau of the Fiscal Service FAQ
        </ExtLink>
        )
      </p>
      <p>
        Small details can make an invoice improper. Treasury notes that if a
        payment is rejected &quot;because the EFT information is not correct, it
        is an improper invoice.&quot; (
        <ExtLink href="https://fiscal.treasury.gov/payments-from-government/prompt-payment/faqs">
          Bureau of the Fiscal Service FAQ
        </ExtLink>
        )
      </p>
      <p>Invoice hygiene that starts the clock:</p>
      <ul>
        <li>
          Match every invoice to what your contract requires (contract and order
          numbers, line items, billing office address).
        </li>
        <li>
          Bill against the acceptance event your contract defines, such as
          go-live or a milestone sign-off, and keep the acceptance record.
        </li>
        <li>
          Keep your banking and taxpayer information current with the agency.
        </li>
        <li>
          Record the date each invoice was received. If an invoice comes back,
          resubmit fast and mark it as corrected.
        </li>
      </ul>
      <p>
        Your contract, not a blog post, defines what &quot;proper&quot; means
        for your agency. Read the invoicing clause before you send the first
        bill.
      </p>

      <h2 id={H["When interest does not apply: disputes and withholdings"]}>
        When interest does not apply: disputes and withholdings
      </h2>
      <p>
        The automatic interest has a large exception. Under the FAR, the
        government does not have to pay interest penalties &quot;if payment
        delays are due to disagreement between the Government and the Contractor
        over the payment amount or other issues involving contract compliance,
        or on amounts temporarily withheld or retained in accordance with the
        terms of the contract.&quot; Those claims are resolved under the
        Disputes clause. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-25">
          FAR 52.232-25
        </ExtLink>
        )
      </p>
      <p>
        If you believe you are owed an additional penalty because the interest
        itself was not paid properly, the clause requires a written demand
        &quot;postmarked not later than 40 days after the invoice amount is
        paid,&quot; with supporting documents including a copy of the invoice. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-25">
          FAR 52.232-25
        </ExtLink>
        ) Miss that window and you lose the claim.
      </p>

      <h2 id={H["Faster than 30 days: accelerated payment for small businesses"]}>
        Faster than 30 days: accelerated payment for small businesses
      </h2>
      <p>
        Treasury says agencies should pay early when they have a proper invoice,
        it is in the government&apos;s best interest, and one of three
        conditions is true: the invoice is under $2,500, the payment is to a
        small business, or the payment relates to an emergency, disaster, or
        military deployment. (
        <ExtLink href="https://fiscal.treasury.gov/fsservices/gov/pmt/promptPayment/promptPayment_home.htm">
          Bureau of the Fiscal Service
        </ExtLink>
        )
      </p>
      <p>
        &quot;Should&quot; is not &quot;must.&quot; If you qualify as a small
        business, it is fair to ask your contracting officer whether accelerated
        payment applies to your invoices.
      </p>

      <h2 id={H["State and local rules vary: five states compared"]}>
        State and local rules vary: five states compared
      </h2>
      <p>
        Most GovTech companies sell to states, counties, cities and school
        districts, not only federal agencies. There is no single rule. Here is
        what the statutes say in a few states, as of October 2026.
      </p>

      <TableWrap
        caption="State and local prompt payment rules compared"
        scrollable
      >
        <table className="blog-table blog-table--options">
          <caption>State and local prompt payment rules compared</caption>
          <thead>
            <tr>
              <th scope="col">Jurisdiction</th>
              <th scope="col">Payment deadline</th>
              <th scope="col">Interest on late payment</th>
              <th scope="col">Notable condition</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Jurisdiction">
                Federal (Prompt Payment Act)
              </td>
              <td data-label="Payment deadline">
                Later of 30 days after proper invoice or 30 days after
                acceptance, unless the contract sets a date
              </td>
              <td data-label="Interest on late payment">
                Automatic; Treasury rate, 4.75% for July 1 through December 31,
                2026
              </td>
              <td data-label="Notable condition">
                Improper invoice returned within 7 days; disputes and contract
                withholdings are excluded
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.acquisition.gov/far/52.232-25">
                  FAR 52.232-25
                </ExtLink>
                ,{" "}
                <ExtLink href="https://fiscal.treasury.gov/fsservices/gov/pmt/promptPayment/promptPayment_home.htm">
                  Treasury
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Jurisdiction">Minnesota state agencies</td>
              <td data-label="Payment deadline">
                30 days after receipt of the invoice for completed delivery, if
                no early payment discount period
              </td>
              <td data-label="Interest on late payment">
                1.5% per month on undisputed bills; $10 minimum monthly penalty
                on bills of $100 or more
              </td>
              <td data-label="Notable condition">
                Vendor must invoice the agency for the interest
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.revisor.mn.gov/statutes/cite/16A.124">
                  Minn. Stat. 16A.124
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Jurisdiction">Minnesota municipalities</td>
              <td data-label="Payment deadline">
                Per contract, else within 35 days of receipt (45 days if the
                governing board meets less than monthly)
              </td>
              <td data-label="Interest on late payment">
                1.5% per month or part of a month
              </td>
              <td data-label="Notable condition">
                No interest during a good faith dispute
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.revisor.mn.gov/statutes/2025/cite/471.425">
                  Minn. Stat. 471.425
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Jurisdiction">Virginia localities</td>
              <td data-label="Payment deadline">
                Per contract, else not more than 45 days after receipt of goods
                or services or the invoice, whichever is later
              </td>
              <td data-label="Interest on late payment">
                Finance charges assessed by the supplier, not to exceed 1% per
                month, unless the contract says otherwise
              </td>
              <td data-label="Notable condition">
                Locality must flag invoice defects within 20 days
              </td>
              <td data-label="Source">
                <ExtLink href="https://law.lis.virginia.gov/vacode/title2.2/chapter43/section2.2-4352/">
                  Va. Code 2.2-4352
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Jurisdiction">New Jersey state agencies</td>
              <td data-label="Payment deadline">
                60 days after receipt of goods or services or a properly
                executed invoice, whichever is later
              </td>
              <td data-label="Interest on late payment">
                3.0% for non-construction vendors in fiscal year 2027
              </td>
              <td data-label="Notable condition">
                Agency must notify defects within 30 calendar days
              </td>
              <td data-label="Source">
                <ExtLink href="https://nj.gov/infobank/circular/cir27-05-OMB.pdf">
                  NJ OMB Circular 27-05
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Jurisdiction">Texas governmental entities</td>
              <td data-label="Payment deadline">
                Overdue on the 31st day after the later of delivery, completed
                service, or invoice receipt (46th day for some political
                subdivisions)
              </td>
              <td data-label="Interest on late payment">
                Prime rate plus 1%, set each September 1
              </td>
              <td data-label="Notable condition">
                Vendor may suspend work for unpaid undisputed amounts after
                written notice, no earlier than the 10th day
              </td>
              <td data-label="Source">
                <ExtLink href="https://texas.public.law/statutes/tex._gov't_code_section_2251.021">
                  Tex. Gov&apos;t Code 2251.021
                </ExtLink>
                ,{" "}
                <ExtLink href="https://texas.public.law/statutes/tex._gov't_code_section_2251.025">
                  2251.025
                </ExtLink>
                ,{" "}
                <ExtLink href="https://texas.public.law/statutes/tex._gov't_code_section_2251.051">
                  2251.051
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Jurisdiction">
                Florida local governments (non-construction)
              </td>
              <td data-label="Payment deadline">
                45 days after the date set in s. 218.73
              </td>
              <td data-label="Interest on late payment">
                1% per month on the unpaid balance, starting 30 days after the
                due date
              </td>
              <td data-label="Notable condition">
                Vendor must invoice for the interest
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.flsenate.gov/Laws/Statutes/2025/218.74">
                  Fla. Stat. 218.74
                </ExtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>A few details are worth calling out.</p>
      <p>
        <strong>Minnesota</strong> is one of the stronger statutes for vendors.
        State agencies pay 1.5% per month on undisputed late bills, but
        &quot;before any interest payment is made, the vendor must invoice the
        state agency for such interest.&quot; (
        <ExtLink href="https://www.revisor.mn.gov/statutes/cite/16A.124">
          Minn. Stat. 16A.124
        </ExtLink>
        ) If you never ask, you never get paid.
      </p>
      <p>
        <strong>Virginia</strong> frames the local remedy as finance charges
        &quot;assessed by the supplier.&quot; (
        <ExtLink href="https://law.lis.virginia.gov/vacode/title2.2/chapter43/section2.2-4352/">
          Va. Code 2.2-4352
        </ExtLink>
        ) In practice that means you assess them; the locality is not obligated
        to volunteer them.
      </p>
      <p>
        <strong>Texas</strong> gives vendors a lever most states do not: the
        right to suspend performance on an undisputed unpaid amount after
        written notice, and not before &quot;the 10th day after the date the
        vendor gives notice.&quot; (
        <ExtLink href="https://texas.public.law/statutes/tex._gov't_code_section_2251.051">
          Tex. Gov&apos;t Code 2251.051
        </ExtLink>
        ) Suspending a live government software deployment is a serious step.
        Talk to counsel first.
      </p>
      <p>
        <strong>Florida</strong> counties and cities owe interest on late
        non-construction payments, but it starts &quot;from 30 days after the
        due date,&quot; and &quot;the vendor must invoice the local governmental
        entity for any interest accrued.&quot; (
        <ExtLink href="https://www.flsenate.gov/Laws/Statutes/2025/218.74">
          Fla. Stat. 218.74
        </ExtLink>
        )
      </p>
      <p>
        Always check your own state&apos;s statute and your contract. Coverage
        differs between state agencies, localities and school districts, and
        contracts can change the defaults.
      </p>

      <h2 id={H["What interest actually recovers"]}>
        What interest actually recovers
      </h2>
      <p>Here is the rough math. Statutory interest is approximately:</p>
      <p>
        <strong>
          unpaid principal × annual rate × (days late / 365)
        </strong>
      </p>
      <p>
        That is a simplified version; federal interest, for example, is
        calculated with Treasury&apos;s own calculator and conventions. As an
        illustration only, using made-up numbers: a $100,000 federal invoice
        paid 60 days late at 4.75% earns roughly $780 in interest.
      </p>
      <p>
        Now compare that with what the 60 days cost you. If your team, hosting
        and support cost tens of thousands of dollars a month, the interest is a
        rounding error against the cash you carried. And it arrives at the end,
        with the late payment, not while you are making payroll.
      </p>
      <p>
        State rates of 1% or 1.5% per month are higher than the federal rate, but
        the same two limits apply: you only get it after you are paid, and
        disputes usually pause it.
      </p>

      <h2 id={H["A practical playbook when an agency or city pays late"]}>
        A practical playbook when an agency or city pays late
      </h2>
      <ol>
        <li>
          <strong>Confirm the invoice was proper and received.</strong> Get the
          receipt date in writing.
        </li>
        <li>
          <strong>Ask in writing for status and any defects.</strong> A polite
          email to the billing office and your contracting officer creates a
          record.
        </li>
        <li>
          <strong>Document delivery, acceptance and any dispute notices.</strong>{" "}
          You will need these for any interest claim.
        </li>
        <li>
          <strong>
            Invoice for interest where the statute requires it.
          </strong>{" "}
          Minnesota state agencies and Florida local governments, for example,
          require the vendor to invoice for the interest; Virginia localities
          pay finance charges you assess.
        </li>
        <li>
          <strong>Know your suspension rights, if any.</strong> Texas has one;
          many states do not. Get legal advice before using it.
        </li>
        <li>
          <strong>
            On federal contracts, escalate through the contracting officer and
            the Disputes clause,
          </strong>{" "}
          and track the 40 day window for additional penalty demands.
        </li>
      </ol>

      <h2 id={H["What the law does not fix: the cash gap"]}>
        What the law does not fix: the cash gap
      </h2>
      <p>
        Prompt payment laws make late payment slightly more expensive for the
        government. They do not shorten the time between signature and payment,
        they do not cover the implementation months before you can invoice, and
        they stop working when there is a dispute.
      </p>
      <p>
        So most GovTech companies with long receivables end up with a financing
        tool next to the statute: an early payment program if their agency
        offers one, factoring on large one-time invoices, a credit line, or
        capital backed by the signed contract. We compared those options in
        detail in{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          Government Contract Financing for Software Companies
        </Link>
        .
      </p>
      <p>That last category is where Lambda Capital fits:</p>
      <ul>
        <li>
          <strong>We fund signed contracts.</strong> You repay us with interest
          when the government&apos;s payment comes in.
        </li>
        <li>
          <strong>We can underwrite multi-year renewals</strong> that your
          agency has signed. We do not underwrite forecasted retention.
        </li>
        <li>
          <strong>No VC is required.</strong>
        </li>
        <li>
          <strong>Your agency keeps paying your company directly.</strong>{" "}
          Nothing about how your customers pay you changes.
        </li>
        <li>
          <strong>When Lambda holds warrants,</strong> we bring our operating
          partners to help you grow.
        </li>
      </ul>
      <p>
        One closing note: a financing relationship with Lambda can also grow
        into an equity investment.
      </p>
      <p>
        If you have signed government contracts and receivables that run 90 to
        180 days,{" "}
        <Link href="/contact">tell us about it</Link>.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={PROMPT_PAYMENT_FAQ} />

      <p className="blog-disclaimer">
        This article is general information, not legal, tax, or financial
        advice. Statutes, rates and agency practices change, so confirm the
        current rule for your jurisdiction and contract with counsel.
      </p>
    </div>
  );
}
