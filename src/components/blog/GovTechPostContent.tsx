import type { ReactNode } from "react";
import Link from "next/link";
import InlineCta from "./InlineCta";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import { GOVTECH_FAQ, POST_HEADINGS } from "@/lib/blog/posts";

const H = Object.fromEntries(POST_HEADINGS.map((h) => [h.text, h.id])) as Record<
  string,
  string
>;

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

export default function GovTechPostContent() {
  return (
    <div className="blog-prose">
      <p>
        Software companies that sell to government can bridge the gap between a
        signed contract and the first payment with four main tools: early
        payment programs on approved invoices, invoice factoring, working
        capital or recurring revenue credit lines, and contract-backed capital
        that funds delivery before you can invoice. Which one fits depends on
        three questions.
      </p>
      <p>
        Has the agency approved your invoice yet? Is the revenue recurring
        subscription or one-time implementation? Does your contract allow
        payments to be assigned to a lender?
      </p>
      <p>
        I spend a lot of my time with GovTech founders who have done the hard
        part. They won the RFP, signed the contract, and started delivery. Then
        they learn the agency&apos;s payment clock is not their payroll clock.
        This post is the guide I wish more of them had before they signed. At
        Lambda Capital we provide capital to vertical software companies, and
        GovTech is one of our focus areas, so I will tell you where we fit. Most
        of this post is about choosing the right tool, whoever provides it.
      </p>

      <h2 id={H["Why government customers pay late even with a signed contract"]}>
        Why government customers pay late even with a signed contract
      </h2>
      <p>
        Government customers pay slowly because of how public money moves, not
        because they do not intend to pay.
      </p>
      <p>
        Lunch, which runs early payment programs for cities and school
        districts, puts it well: &quot;Government payment timelines are
        structural, not personal. Budget cycles, multi-step approvals, and
        manual processes slow payments even when agencies intend to pay
        promptly.&quot; (
        <ExtLink href="https://www.lunchpayments.com/resources/net-30-vs-net-60-vs-net-90-payment-terms-explained">
          Lunch
        </ExtLink>
        )
      </p>
      <p>A few things stack up:</p>
      <ul>
        <li>
          <strong>Stated terms are a best case.</strong> Lunch writes that
          &quot;most municipalities operate on net-30 to net-60 terms, but
          actual payment can take 60-90+ days once internal approvals and
          processing are factored in.&quot; (
          <ExtLink href="https://www.lunchpayments.com/resources/cash-flow-management-government-contractors">
            Lunch
          </ExtLink>
          )
        </li>
        <li>
          <strong>Approval chains.</strong> One invoice can need sign-off from
          the department that bought your software, the budget office, and
          whoever cuts the check.
        </li>
        <li>
          <strong>Batch payment runs.</strong> In Lunch&apos;s words, &quot;an
          approved invoice might sit for days before a check is cut.&quot; (
          <ExtLink href="https://www.lunchpayments.com/resources/net-30-vs-net-60-vs-net-90-payment-terms-explained">
            Lunch
          </ExtLink>
          )
        </li>
        <li>
          <strong>Fiscal year boundaries.</strong> An invoice that lands at
          year end can wait for new appropriations.
        </li>
      </ul>
      <p>
        For software vendors there is one more delay that gets ignored: the
        time between signature and your first invoice. A typical sequence is
        award, kickoff, implementation, go-live or acceptance milestone,
        invoice, approval, payment. You are paying engineers and cloud bills
        through all of it.
      </p>
      <p>
        How long is that whole stretch? Be careful with the numbers you see
        online. FundBizPro, an educational site, states that on federal work
        &quot;the actual gap from award date to first dollar received is often
        90-180 days.&quot; (
        <ExtLink href="https://fundbizpro.com/government-contracts/guides/sba-payment-government-contract-cash-flow">
          FundBizPro
        </ExtLink>
        ) Verter, a blog focused on business-to-government startups, writes that
        &quot;payment delays of 90 to 180 days are standard operating
        procedure.&quot; (
        <ExtLink href="https://verter.studio/blog/venture-capital-accelerators-and-b2g-startups---the-infrastructure-gap-in-financial-planning-for-business-to-government-companies">
          Verter
        </ExtLink>
        ) Those are vendor and blog claims, not audited data, and the first one
        is about federal contracts, not state and local. I have not found a
        reliable published dataset on actual SLED days-to-pay for software
        vendors. The only number that matters for your plan is your own
        agency&apos;s real payment history.
      </p>

      <h2 id={H["How big is your cash gap? A worked example"]}>
        How big is your cash gap? A worked example
      </h2>
      <p>
        Your peak cash need is roughly your monthly delivery cost multiplied by
        the number of months until the first payment actually lands, minus any
        upfront payment the contract gives you.
      </p>
      <p>
        Here is an illustrative example. The company and figures are made up to
        show the math, not drawn from any real vendor.
      </p>
      <p>
        A GovTech SaaS company signs a county contract. Delivery (implementation
        team, support, hosting) costs <strong>$80,000 per month</strong>. The
        contract bills at go-live, which is planned for{" "}
        <strong>month 4</strong>. Stated terms are net 60.
      </p>

      <TableWrap caption="Illustrative cash need by payment scenario">
        <table className="blog-table blog-table--cash">
          <caption>Illustrative cash need by payment scenario</caption>
          <thead>
            <tr>
              <th scope="col">Scenario</th>
              <th scope="col">First payment arrives</th>
              <th scope="col">Months of cost carried</th>
              <th scope="col">Peak cash need</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Scenario">
                Paid on stated terms (60 days after invoice)
              </td>
              <td data-label="First payment arrives">Month 6</td>
              <td data-label="Months of cost carried">6</td>
              <td data-label="Peak cash need">$480,000</td>
            </tr>
            <tr>
              <td data-label="Scenario">Paid 90 days after invoice</td>
              <td data-label="First payment arrives">Month 7</td>
              <td data-label="Months of cost carried">7</td>
              <td data-label="Peak cash need">$560,000</td>
            </tr>
            <tr>
              <td data-label="Scenario">Paid 180 days after invoice</td>
              <td data-label="First payment arrives">Month 10</td>
              <td data-label="Months of cost carried">10</td>
              <td data-label="Peak cash need">$800,000</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>Two lessons from the math:</p>
      <ol>
        <li>
          <strong>
            The implementation period is often bigger than the payment delay.
          </strong>{" "}
          Four months of delivery before you can even invoice is a large part of
          the gap, and factoring or early payment cannot touch it.
        </li>
        <li>
          <strong>Growth makes it worse.</strong> Every new contract you sign
          starts its own gap. Lunch makes the same point: &quot;winning more
          work can actually make your cash position worse, not better.&quot; (
          <ExtLink href="https://www.lunchpayments.com/resources/net-30-vs-net-60-vs-net-90-payment-terms-explained">
            Lunch
          </ExtLink>
          )
        </li>
      </ol>
      <p>
        Build this as a weekly cash forecast by contract, use the payment
        history you actually have with each agency, and find the lowest balance.
        That number is how much financing you need, and when.
      </p>

      <h2 id={H["Your financing options, compared"]}>
        Your financing options, compared
      </h2>
      <p>
        The right tool depends mostly on whether you already have an approved
        invoice.
      </p>

      <TableWrap
        caption="Government contract financing options compared"
        scrollable
      >
        <table className="blog-table blog-table--options">
          <caption>Government contract financing options compared</caption>
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">What it funds</th>
              <th scope="col">Needs an approved invoice?</th>
              <th scope="col">Debt on your balance sheet?</th>
              <th scope="col">Cost signal (source, as of Oct 2026)</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Option">Municipal early payment program</td>
              <td data-label="What it funds">
                Approved invoices from agencies that participate
              </td>
              <td data-label="Needs an approved invoice?">Yes</td>
              <td data-label="Debt on your balance sheet?">
                No, per providers it is a sale of the receivable
              </td>
              <td data-label="Cost signal (source, as of Oct 2026)">
                Flat fee per invoice; Lunch cites &quot;typically 1-3%&quot; (
                <ExtLink href="https://www.lunchpayments.com/resources/what-is-municipal-early-payment-program">
                  Lunch
                </ExtLink>
                )
              </td>
              <td data-label="Best for">
                Vendors whose agency already offers a program
              </td>
            </tr>
            <tr>
              <td data-label="Option">Invoice factoring</td>
              <td data-label="What it funds">
                Submitted or accepted invoices
              </td>
              <td data-label="Needs an approved invoice?">Yes, generally</td>
              <td data-label="Debt on your balance sheet?">
                Usually structured as a sale; terms vary
              </td>
              <td data-label="Cost signal (source, as of Oct 2026)">
                &quot;1% to 4% of invoice value for each 30 days the invoice
                stays outstanding&quot; (
                <ExtLink href="https://flexent.com/government-contract-factoring/">
                  Flexent
                </ExtLink>
                )
              </td>
              <td data-label="Best for">
                Large one-time invoices: implementation, licenses, services
              </td>
            </tr>
            <tr>
              <td data-label="Option">Bank or SBA line of credit</td>
              <td data-label="What it funds">General working capital</td>
              <td data-label="Needs an approved invoice?">No</td>
              <td data-label="Debt on your balance sheet?">Yes</td>
              <td data-label="Cost signal (source, as of Oct 2026)">
                Lower cost, but CyberX Gov notes it is &quot;slow to approve;
                backward-looking underwriting&quot; (
                <ExtLink href="https://cyberxgovsolutions.com/government-contract-financing-cash-flow/">
                  CyberX Gov
                </ExtLink>
                )
              </td>
              <td data-label="Best for">
                Mature companies that set it up early
              </td>
            </tr>
            <tr>
              <td data-label="Option">ARR or MRR line</td>
              <td data-label="What it funds">
                Working capital against recurring revenue
              </td>
              <td data-label="Needs an approved invoice?">No</td>
              <td data-label="Debt on your balance sheet?">Yes</td>
              <td data-label="Cost signal (source, as of Oct 2026)">
                LaunchAdvisor calls it &quot;often the cheapest option if you
                qualify&quot; for pure SaaS (
                <ExtLink href="https://www.launchadvisor.co/guides/invoice-factoring-vs-accounts-receivable-financing-software-publishers-saas">
                  LaunchAdvisor
                </ExtLink>
                )
              </td>
              <td data-label="Best for">
                SaaS with steady subscription revenue
              </td>
            </tr>
            <tr>
              <td data-label="Option">Contract-backed capital</td>
              <td data-label="What it funds">
                Delivery costs before you can invoice
              </td>
              <td data-label="Needs an approved invoice?">
                No, it underwrites the signed contract
              </td>
              <td data-label="Debt on your balance sheet?">
                Usually yes, a loan
              </td>
              <td data-label="Cost signal (source, as of Oct 2026)">
                Varies; CyberX Gov notes it &quot;requires awarded contracts to
                underwrite&quot; (
                <ExtLink href="https://cyberxgovsolutions.com/government-contract-financing-cash-flow/">
                  CyberX Gov
                </ExtLink>
                )
              </td>
              <td data-label="Best for">
                Implementation-heavy contracts and multi-contract backlogs
              </td>
            </tr>
            <tr>
              <td data-label="Option">Grants and SBIR/STTR</td>
              <td data-label="What it funds">Research and development</td>
              <td data-label="Needs an approved invoice?">No</td>
              <td data-label="Debt on your balance sheet?">No</td>
              <td data-label="Cost signal (source, as of Oct 2026)">
                Non-dilutive, but tied to R&amp;D scope and timelines
              </td>
              <td data-label="Best for">
                Product R&amp;D, not working capital on a signed contract
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Cost figures in this table are marketing numbers from the providers
        themselves, as of Oct 2026, and can change. A few notes from the
        founder&apos;s side of the table.
      </p>
      <p>
        <strong>Early payment programs</strong> are hard to beat when they are
        available, but they only work on invoices your agency has already
        approved, and only if your agency participates. Ask your agency&apos;s
        finance office whether one exists. It costs nothing to ask.
      </p>
      <p>
        <strong>Factoring</strong> works best on a big implementation or license
        invoice. It is awkward for subscription revenue. LaunchAdvisor&apos;s
        view is that factoring &quot;has limited use for core subscription
        revenue but can be considered for large, non-recurring professional
        services or license fee invoices.&quot; (
        <ExtLink href="https://www.launchadvisor.co/guides/invoice-factoring-vs-accounts-receivable-financing-software-publishers-saas">
          LaunchAdvisor
        </ExtLink>
        ) Factors also usually need the agency to send payment to them, which
        brings up assignment (more below).
      </p>
      <p>
        <strong>Bank lines</strong> are cheap and slow. The time to open one is
        before you need it.
      </p>
      <p>
        <strong>ARR lines</strong> fit companies with a stable base of recurring
        revenue. If most of your near-term revenue is one large contract still
        in implementation, you may not have the recurring base these lenders
        size against yet.
      </p>
      <p>
        <strong>Contract-backed capital</strong> is the only option on this list
        built for the stretch before the first invoice. A lender underwriting a
        signed government contract typically looks at funded scope, your ability
        to deliver, gross margin, and where the repayment comes from. CyberX Gov
        describes this approach as one that &quot;underwrites your contract
        backlog, the awarded but not-yet-billed dollars, plus your past
        performance.&quot; (
        <ExtLink href="https://cyberxgovsolutions.com/government-contract-financing-cash-flow/">
          CyberX Gov
        </ExtLink>
        )
      </p>

      <InlineCta />

      <h2
        id={
          H["Can you assign a government contract's payments to a lender?"]
        }
      >
        Can you assign a government contract&apos;s payments to a lender?
      </h2>
      <p>
        For federal contracts, yes, if you meet the Assignment of Claims Act
        conditions. For state and local contracts, it depends on the
        jurisdiction and your contract.
      </p>
      <p>
        <strong>Federal.</strong> FAR 32.802 says &quot;a contractor may assign
        moneys due or to become due under a contract&quot; if all of its
        conditions are met. These include: the contract specifies payments of
        $1,000 or more, the assignment goes to &quot;a bank, trust company, or
        other financing institution,&quot; the contract does not prohibit
        assignment, and the assignee sends written notice to the contracting
        officer, any surety, and the disbursing officer. (
        <ExtLink href="https://www.acquisition.gov/far/32.802">
          FAR 32.802
        </ExtLink>
        )
      </p>
      <p>
        <strong>State and local.</strong> There is no single rule. Some
        factoring firms say SLED assignment rules are &quot;generally
        simpler&quot; (
        <ExtLink href="https://flexent.com/government-contract-factoring/">
          Flexent
        </ExtLink>
        ), but do not take that as a given. Read your contract&apos;s assignment
        clause and talk to counsel before you sign anything that changes where
        an agency sends payment.
      </p>
      <p>
        <strong>A practical point.</strong> Assignment also means asking the
        agency&apos;s finance team to change where it sends payment, which adds
        a step on their side. If you would rather leave the agency&apos;s
        process untouched, look for financing where the agency keeps paying you
        directly and you repay the lender from your own account.
      </p>
      <p>
        <strong>Subscription vs one-time invoices.</strong> Annual subscription
        invoices, implementation fees, and license fees behave differently.
        One-time invoices are easier to factor. Recurring and contracted revenue
        is better suited to a credit line or contract-backed loan.
      </p>

      <h2
        id={
          H[
            "Factoring vs early payment vs contract-backed capital: which should a GovTech vendor choose?"
          ]
        }
      >
        Factoring vs early payment vs contract-backed capital: which should a
        GovTech vendor choose?
      </h2>
      <p>
        Pick based on where you are in the contract&apos;s life, not on headline
        price alone.
      </p>
      <ul>
        <li>
          <strong>
            You have an approved invoice and your agency runs an early payment
            program.
          </strong>{" "}
          Start there.
        </li>
        <li>
          <strong>
            You have a large approved or submitted one-time invoice, no program,
            and your contract allows assignment.
          </strong>{" "}
          Factoring can work. Compare the total fee at the agency&apos;s real
          payment speed, not the stated term.
        </li>
        <li>
          <strong>
            You are mid-implementation and cannot invoice yet.
          </strong>{" "}
          Early payment and factoring do not help. You need a line of credit you
          already have, an ARR line if you have the recurring base, or
          contract-backed capital.
        </li>
        <li>
          <strong>
            You have several signed contracts and renewals coming and want one
            facility.
          </strong>{" "}
          A term loan sized to the contracted backlog is usually simpler than
          factoring invoice by invoice.
        </li>
        <li>
          <strong>You do not want to involve the agency at all.</strong> Favor
          structures where nothing about the agency&apos;s payment process
          changes.
        </li>
      </ul>
      <p>
        Whatever you choose, compare total cost in dollars over the period you
        will actually use the money, and read the term sheet for personal
        guarantees, minimums, warrants, and what happens if the agency pays
        later than expected.
      </p>

      <h2
        id={
          H["How to negotiate and structure contracts to shrink the gap"]
        }
      >
        How to negotiate and structure contracts to shrink the gap
      </h2>
      <p>The cheapest financing is the gap you never create.</p>
      <ul>
        <li>
          <strong>Bill by milestone or monthly, not at the end.</strong> Lunch
          notes that payment terms are often fixed by procurement, but &quot;you
          can negotiate the structure of payments,&quot; such as progress
          billing and more frequent invoicing. (
          <ExtLink href="https://www.lunchpayments.com/resources/cash-flow-management-government-contractors">
            Lunch
          </ExtLink>
          )
        </li>
        <li>
          <strong>Ask about early payment programs before you sign.</strong>
        </li>
        <li>
          <strong>Price the cost of waiting into your bid.</strong> If you know
          the agency pays in 120 days, the cost of carrying that should be in
          your price.
        </li>
        <li>
          <strong>Know your state&apos;s prompt payment rules.</strong> Many
          states require interest on late payments, with their own deadlines and
          claim steps. Two examples: New York State Finance Law §179-f (state
          agencies) requires the State to pay most vendors &quot;within 30
          days&quot; and 15 days for qualified small businesses, with interest
          possible after the due date (
          <ExtLink href="https://www.osc.ny.gov/state-agencies/gfo/chapter-xii/xii5i-prompt-payment-interest">
            NY Office of the State Comptroller
          </ExtLink>
          ). Minnesota Statute 471.425 sets a standard payment period of 35 days
          for municipalities whose boards meet at least monthly, and 45 days for
          those that do not (
          <ExtLink href="https://www.revisor.mn.gov/statutes/2025/cite/471.425">
            Minnesota Revisor of Statutes
          </ExtLink>
          ). Rules differ by state and by agency type, so check yours.
        </li>
        <li>
          <strong>Set up financing before you win.</strong> The worst time to
          look for capital is after you have signed and payroll is due.
        </li>
      </ul>

      <h2 id={H["What Lambda Capital offers GovTech software companies"]}>
        What Lambda Capital offers GovTech software companies
      </h2>
      <p>
        Lambda Capital is a permanent capital holding company that provides
        growth capital to vertical software companies, and GovTech is one of our
        focus areas. We take a patient approach, invest for the long term, and
        use flexible financial tools, not only equity.
      </p>
      <p>
        For GovTech founders with signed contracts and long payment cycles, that
        means capital built around the contract, not around a single invoice:
      </p>
      <ul>
        <li>
          <strong>We fund against your signed contract.</strong> We sign a
          financing agreement with you and fund it. The capital stays
          outstanding until the government&apos;s payment comes in, and then you
          repay us plus interest.
        </li>
        <li>
          <strong>
            We can fund during implementation, before your first invoice is
            paid.
          </strong>{" "}
          That is the stretch factoring and early payment programs cannot reach.
        </li>
        <li>
          <strong>We can underwrite multi-year renewals.</strong> If your agency
          has signed a multi-year renewal, we can underwrite that contracted
          revenue too.
        </li>
        <li>
          <strong>We do not require a lead VC.</strong>
        </li>
        <li>
          <strong>Your agency can keep paying you directly.</strong> Nothing
          about how your customers pay you has to change.
        </li>
        <li>
          <strong>Operating help when we share the upside.</strong> When Lambda
          holds warrants in your business, we bring our operating partners to
          help you grow.
        </li>
      </ul>
      <p>
        We do not publish standard rates or terms, because each structure
        depends on the contracts behind it. If you have signed government
        contracts and a cash gap between signature and payment,{" "}
        <Link href="/contact">tell us about it</Link>. Bring your contracts,
        your agencies&apos; actual payment history, and your weekly cash
        forecast, and we will tell you plainly whether we are a fit or which of
        the options above suits you better.
      </p>
      <p>
        One last note: a financing relationship with Lambda can also grow into
        an equity investment from Lambda alone.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={GOVTECH_FAQ} />

      <p className="blog-disclaimer">
        This article is general information, not legal, tax, or financial
        advice. Payment rules and financing terms vary by jurisdiction, agency,
        and provider.
      </p>
    </div>
  );
}
