import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  FISCAL_YEAR_2027_POST,
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_FAQ,
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_HEADINGS,
  INVOICE_PAYMENT_STATUS_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentContractRenewalLapsePostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        Possibly, but a signed renewal alone does not promise payment for the
        gap. First find out what authority covers the work and the invoice.
        Indiana and one Richmond audit show why the end date matters. Fix the
        authority question before treating the delay as a cash timing problem.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        The customer still needs the software. The old term has ended, and the
        renewal is not signed. An invoice is now on hold, and the team wants to
        know when cash will arrive.
      </p>

      <p>
        We would start with a different question: what covers that work? A cash
        forecast cannot answer a question about the right to do the work.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>Check the end date and the rules for the specific contract.</li>
          <li>
            Indiana&apos;s state manual says an expired contract cannot be renewed or
            amended.
          </li>
          <li>
            Richmond&apos;s audit describes a later approval called ratification. That
            is not a promise that every gap will be paid.
          </li>
          <li>
            Resolve authority first. Fund a dated wait only once there is a sound
            basis for payment.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        You may still be paid, but the answer depends on the contract and the
        rules that apply. Do not assume a later signature covers work after the
        old term ended. Ask the agency&apos;s contract official what authority applies
        to that work and its invoice.
      </p>

      <p>
        This is not advice to keep working past expiration. A plan to get paid is
        not permission to perform work.
      </p>

      <h2 id={H["Why the end date matters"]}>Why the end date matters</h2>

      <p>
        A current contract and a slow payment are not the same issue. One concerns
        authority for work. The other concerns when cash for covered work arrives.
      </p>

      <p>
        Indiana&apos;s professional services manual gives a clear state example. It says
        this. <em>&quot;An expired contract or grant cannot be renewed or amended.&quot;</em>{" "}
        See the{" "}
        <ExtLink href="https://www.in.gov/idoa/procurement/files/ProfessionalServicesContractManual_revJuly2024.pdf">
          Indiana contract manual
        </ExtLink>
        .
      </p>

      <p>
        The same manual says this.{" "}
        <em>
          &quot;If you want to renew or amend a contract or grant, you must have the
          contractor&apos;s (or grantee&apos;s) signature on the renewal or amendment prior
          to the expiration of the original contract.&quot;
        </em>
      </p>

      <p>
        That is guidance for Indiana state professional services contracts. It is
        not a rule for every city, state or federal customer. A straight renewal
        may need no contractor consent. The manual says the agency must still sign
        before the term ends.
      </p>

      <p>
        The likely reason the date matters: the agency needs valid approval. Proof
        that staff liked the service is not enough. The steps depend on the rules
        for that customer. Ask its contract official, not just the person who uses
        the software.
      </p>

      <h3 id="keep-other-clocks-separate">Keep other clocks separate</h3>

      <p>
        Available funds are another issue. Our{" "}
        <Link href={`/blog/${FISCAL_YEAR_2027_POST.slug}`}>
          government fiscal year guide
        </Link>{" "}
        covers that clock. A local approval process can also matter: see{" "}
        <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
          local government board approval and vendor payments
        </Link>
        .
      </p>

      <p>
        Neither a budget line nor a planned meeting tells you that work in a gap is
        approved. Check the actual contract status.
      </p>

      <h2 id={H["What one city's audit shows"]}>
        What one city&apos;s audit shows
      </h2>

      <p>
        Richmond, Virginia&apos;s procurement audit describes its process for tracking
        end dates. It says this.{" "}
        <em>
          &quot;DPS staff identifies contracts that are expiring within 180 days.&quot;
        </em>{" "}
        DPS means the city&apos;s procurement services staff. See the{" "}
        <ExtLink href="https://www.rva.gov/sites/default/files/2022-12/2023-07%20Procurement%20Services%2012.2.22.pdf">
          Richmond procurement audit
        </ExtLink>
        .
      </p>

      <p>
        The audit says a renewal form goes to the user agency 150 days before
        expiration. Those are Richmond&apos;s process dates, not a national notice rule.
      </p>

      <p>
        In its sample, the auditor found that one of nine contracts was renewed
        four days after expiration. Two reviewed renewals from before 2021 were
        completed months after expiration. Those findings describe that
        city&apos;s sample. They do not show how often this happens elsewhere.
      </p>

      <p>
        The report also says this.{" "}
        <em>
          &quot;On average, the contracts were renewed 40 days prior to the expiration
          dates.&quot;
        </em>{" "}
        That is a sample result. It is not a rule or a promise about your next
        renewal.
      </p>

      <h3 id="what-ratification-means-here">What ratification means here</h3>

      <p>
        The audit states this.{" "}
        <em>
          &quot;If the contract is not renewed prior to expiration, DPS must coordinate
          with the City Attorney to create a ratification.&quot;
        </em>
      </p>

      <p>
        Ratification means a later approval of work done without a current contract
        covering it. Richmond&apos;s process shows that a missed date can need a
        separate approval path. It does not prove that all such work will qualify
        or that approval will be granted.
      </p>

      <p>
        This is why we would not call every gap a normal receivable. A receivable is
        money owed to your company. First check why the amount is owed. Then plan
        its pay date.
      </p>

      <h2 id={H["Federal options have their own rule"]}>
        Federal options have their own rule
      </h2>

      <p>
        An option is a right in a contract to extend it under the stated
        conditions. FAR 17.207 covers the exercise of federal options, not every
        state or local renewal.
      </p>

      <p>
        It says this.{" "}
        <em>
          &quot;When exercising an option, the contracting officer shall provide written
          notice to the contractor within the time period specified in the
          contract.&quot;
        </em>{" "}
        See <ExtLink href="https://www.acquisition.gov/far/17.207">FAR 17.207</ExtLink>
        .
      </p>

      <p>
        The rule also requires findings that funds are available and the need still
        exists, among other conditions. A customer&apos;s wish to keep using the
        software is not the same as that written option notice. Read the option
        clause and confirm its status with the contracting officer.
      </p>

      <h2 id={H["The invoice with no clear contract behind it"]}>
        The invoice with no clear contract behind it
      </h2>

      <p>
        Consider an illustrative software company with $30,000 on hold after its
        old government contract ended. This is an example, not a real company or a
        sourced dollar amount. There is no assumed length for the gap.
      </p>

      <p>
        The team expects a renewal and asks whether to raise growth capital. The
        likely reason: more cash feels like an answer to the hold. But new cash
        would not establish authority for the work already billed.
      </p>

      <p>
        The team could treat the invoice as a normal late payment. Wait for a
        signature and assume it fixes the gap. Or first find out what approval the
        gap needs.
      </p>

      <p>
        The team checks authority first. It asks the agency&apos;s contract official
        which process applies to work already billed. It does not assume it has
        permission to keep working.
      </p>

      <p>
        Indiana&apos;s manual and Richmond&apos;s audit describe different paths. A generic
        promise that the renewal is coming does not tell the team which path
        applies. The team needs the answer for this contract.
      </p>

      <p>
        The $30,000 is a question to resolve, not a sure cash receipt. Once the
        basis for payment is clear, the team can plan when cash might come.
      </p>

      <p>
        Our view: a renewal lapse is an authority problem before it is a financing
        problem.
      </p>

      <h2 id={H["Do not let a cash plan stand in for approval"]}>
        Do not let a cash plan stand in for approval
      </h2>

      <p>
        A date in a cash plan is a forecast. It is not a right to work, and it is
        not proof that a bill is due. Keep those questions apart.
      </p>

      <p>
        Ask what covers the work. Ask what covers the bill. Then ask when the cash
        might come. If the first two answers are not clear, do not turn the third
        into a sure thing.
      </p>

      <h2 id={H["A calm renewal routine"]}>A calm renewal routine</h2>

      <p>
        Use the contract&apos;s dates, not a general rule copied from another state.
        Richmond&apos;s 180 day review window is a useful planning example, not a
        deadline that applies to everyone.
      </p>

      <ol>
        <li>Record the end date and any option notice dates from your contract.</li>
        <li>Ask the contract official which approvals and signatures are needed.</li>
        <li>
          Send the documents that official requests while there is still time to
          act.
        </li>
        <li>
          Confirm the required action happened before the deadline. Do not rely on
          an expected signature.
        </li>
        <li>
          If a lapse is possible, ask in writing what authority would cover any
          further work. Do not assume it exists.
        </li>
        <li>
          For gap invoices, check the approval path first. Do not treat a hoped for
          pay date as firm.
        </li>
      </ol>

      <p>
        Use{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          government invoice payment status tools
        </Link>{" "}
        to track a payment hold. A status screen is not a substitute for a contract
        official&apos;s answer on authority.
      </p>

      <h2 id={H["Timing or growth?"]}>Timing or growth?</h2>

      <p>
        Our working capital post draws the basic line.{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing problem more
          often than a growth problem.&quot;
        </em>{" "}
        See{" "}
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          working capital vs growth capital for GovTech software
        </Link>
        .
      </p>

      <p>
        A lapse adds a step before that test. You need to know that the payment has
        a valid basis. A hoped for approval is not the same as a dated wait on
        covered work.
      </p>

      <TableWrap caption="If you have a timing need or a growth need">
        <table>
          <caption>If you have a timing need or a growth need</caption>
          <thead>
            <tr>
              <th scope="col">If you have</th>
              <th scope="col">Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="If you have">Unclear authority for gap work</td>
              <td data-label="Use">Contract status review</td>
            </tr>
            <tr>
              <td data-label="If you have">Recurring dated waits on covered work</td>
              <td data-label="Use">
                <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
                  Revolving line of credit
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">One confirmed dated cash receipt</td>
              <td data-label="Use">
                <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
                  Loans with bullet payments
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">Demand you cannot serve</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Use a{" "}
        <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>revolving line of credit</Link>{" "}
        if you have recurring dated waits on covered work. Use{" "}
        <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
          loans with bullet payments
        </Link>{" "}
        if you have one large confirmed inflow and want principal repayment to
        match it.
      </p>

      <p>
        Use growth capital if demand calls for more people, product or reach. That
        is a different need from clearing a contract approval issue.
      </p>

      <p>
        Our cash flow gap post says this.{" "}
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em> See{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          the government contractor cash flow gap
        </Link>
        . Keep sums with unclear approval apart from cash you can date.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={GOVERNMENT_CONTRACT_RENEWAL_LAPSE_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            Government invoice payment status tools
          </Link>
        </li>
        <li>
          <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
            Local government board approval and vendor payments
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
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
