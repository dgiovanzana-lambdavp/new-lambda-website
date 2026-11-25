import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_FAQ,
  GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_HEADINGS,
  IMPLEMENTATION_MILESTONES_POST,
  REVOLVING_LINE_POST,
  SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST, GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_POST} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_HEADINGS.map((h) => [
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

export default function GovernmentContractFinancialCapabilityPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Often, yes. A federal contract cannot be awarded until the contracting officer finds your company responsible. The first test is enough money to do the work, or a way to get it. State agencies can ask for your latest statements on large projects too. Size the gap between kickoff and the first payment before you bid. Have the financing for it arranged before award. Keep growth capital for growth. Keep growth capital for hiring and selling.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder runs a GovTech software company with $4,500,000 in annual revenue. That figure is our example. The company bids on a $3,000,000, three year state case management contract, plus a subscription. The solicitation asks for the latest financial statements. It also asks for proof that the company can handle a project of this size. The first milestone payment arrives about 120 days after kickoff. That lag is our example too. Added delivery costs run about $150,000 a month. So about $600,000 goes out before the first payment. Cash on hand at bid time is $350,000. The gap to show a plan for, before award, is about $250,000 plus a cushion for late acceptance. The CEO had planned to figure out the gap after award.
      </p>
      <p>
        The reason that frame fails is simple. The gap comes from delivering a signed contract before the first payment. The cash comes back when the agency pays. That is a timing problem. The cash is not gone. You get it back later. The agency may see it on the way in, before anyone has won. This is a timing gap. Size it first.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>On a federal award, the contracting officer must find your company responsible before awarding. The first standard is enough money, or a way to get it.</li>
          <li>You do not need all the cash in the bank on day one. The right proof is, as a rule, a commitment or an explicit arrangement that exists at award.</li>
          <li>Many state agencies ask for financial statements on large projects. Texas guidance describes that check for high dollar work.</li>
          <li>Size the gap to the first payment before you bid. Have the financing arranged before award. Keep growth capital for growth.</li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        Yes, on federal awards, and often on large state awards. Before a federal award, the officer must find that you have enough money to do the work, or a way to get it. The proof is, as a rule, a commitment or an explicit arrangement that exists at award. Texas guidance has agencies request your latest statements on high dollar work. Know your gap to the first payment before you bid.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Responsibility determination: the officer&apos;s yes or no finding, before a federal award, that a company can perform the contract, including having the money to do it.
        </li>
        <li>
          Preaward survey: a review of a company&apos;s capability, including its finances, done only when the information on hand is not enough.
        </li>
        <li>
          Certificate of Competency: an SBA certificate that a small business is responsible for a specific contract, after an officer found it was not.
        </li>
        <li>
          Financial capability, in Texas guidance: an agency&apos;s check that a respondent can handle a project of a given size, often through financial statements.
        </li>
      </ul>
      <h2 id={H["Will the government check whether you can afford to perform the contract?"]}>Will the government check whether you can afford to perform the contract?</h2>
      <p>
        On a federal award, yes. The contracting officer must find your company responsible before awarding. The first standard is enough money, or a way to get it.
      </p>
      <p>
        State agencies set their own rules. Many large bid requests ask for your latest statements.
      </p>
      <p>
        <em>&quot;Purchases shall be made from, and contracts shall be awarded to, responsible prospective contractors only.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/9.103">FAR 9.103</ExtLink>)
      </p>
      <p>
        No purchase or award shall be made unless the officer makes a yes finding of responsibility. (<ExtLink href="https://www.acquisition.gov/far/9.103">FAR 9.103</ExtLink>)
      </p>
      <p>
        <em>&quot;Have adequate financial resources to perform the contract, or the ability to obtain them&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/9.104-1">FAR 9.104-1</ExtLink>)
      </p>
      <p>
        You do not need all the cash in the bank on day one. The cash can come from a plan. The standard is the money, or a way to get it.
      </p>
      <p>
        If the facts on hand do not clearly show that the company is responsible, the officer shall make a no finding. (<ExtLink href="https://www.acquisition.gov/far/9.103">FAR 9.103</ExtLink>) The burden sits with the company. The company must show that it is responsible. When needed, that showing can include its proposed subcontractors. (<ExtLink href="https://www.acquisition.gov/far/9.103">FAR 9.103</ExtLink>) See <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>subcontractor payment from a prime</Link>.
      </p>
      <p>
        The check also looks at whether you can meet the delivery or performance schedule. It takes into account your other commercial and government work. (<ExtLink href="https://www.acquisition.gov/far/9.104-1">FAR 9.104-1</ExtLink>) Your other contracts count. That matters when one award lands on top of several. One award does not stand alone. Your other work counts too.
      </p>
      <p>
        Responsibility is a yes or no finding about the company for a specific contract. It is not a proposal score. Do not treat it as a score. It is a yes or a no.
      </p>
      <h2 id={H["What counts as proof that you can finance the contract?"]}>What counts as proof that you can finance the contract?</h2>
      <p>
        Cash on hand, or a way to get it. When you do not already have the money, FAR asks for proof that you can get it. That proof is, as a rule, a commitment or an explicit arrangement that exists at the time of award.
      </p>
      <p>
        For the cash gap, that means financing that is arranged, not hoped for.
      </p>
      <p>
        If you do not already have enough money, and you do not plan to subcontract the work, the officer shall require proof that you can get what you need. (<ExtLink href="https://www.acquisition.gov/far/9.104-3">FAR 9.104-3</ExtLink>)
      </p>
      <p>
        Proof is, as a rule, a commitment or an explicit arrangement. That arrangement must exist at the time of award. It can cover facilities, equipment, other resources, or people. (<ExtLink href="https://www.acquisition.gov/far/9.104-3">FAR 9.104-3</ExtLink>) The same proof rule applies to financial resources. The FAR does not say &quot;financing commitment letter.&quot; For the cash gap, we apply that rule this way. Financing should be arranged, not hoped for. Hope is not proof. A plan in place is proof.
      </p>
      <p>
        The officer shall get, or update, information on money and on performance as close to award as is feasible. (<ExtLink href="https://www.acquisition.gov/far/9.105-1">FAR 9.105-1</ExtLink>) The numbers are checked as close to award as they can be. A stale balance sheet does not help. Keep the numbers current. Fresh numbers help.
      </p>
      <p>
        Sources can include the company&apos;s own financial data and questionnaire replies. They can also include commercial sources of supplier information, and records such as FAPIIS, linked SAM information, and CPARS. (<ExtLink href="https://www.acquisition.gov/far/9.105-1">FAR 9.105-1</ExtLink>) Keep the SAM record current. Update it now. Do not let it lapse. See <Link href={`/blog/${SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_POST.slug}`}>expired SAM registration and government payment</Link>.
      </p>
      <p>
        A preaward survey is, as a rule, required only when the facts on hand are not enough to make a finding. That includes information from commercial sources that is ready to use. (<ExtLink href="https://www.acquisition.gov/far/9.106-1">FAR 9.106-1</ExtLink>) For commercial products or commercial services, the officer should not request a preaward survey unless the cost is justified. The same limit applies to a fixed price contract at or below the simplified acquisition threshold. (<ExtLink href="https://www.acquisition.gov/far/9.106-1">FAR 9.106-1</ExtLink>) For commercial software, a full survey is the exception. It is not the usual path. Do not assume every software award gets a full preaward survey. Most commercial software awards will not get a full survey. That is the usual case.
      </p>
      <p>
        Consider our example. A software company with $4,500,000 in annual revenue bids on a $3,000,000, three year state case management contract, plus a subscription. This is an example, not a real company. The first milestone payment arrives about 120 days after kickoff. Added delivery costs run about $150,000 a month. So about $600,000 goes out first. Cash on hand at bid time is $350,000. The gap to show a plan for, before award, is about $250,000 plus a cushion for late acceptance. All of those figures are from our example. They are not typical or required.
      </p>
      <TableWrap caption="Gap to first payment example">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount or date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Annual revenue (our example)</td>
              <td data-label="Amount or date">$4,500,000</td>
            </tr>
            <tr>
              <td data-label="Item">Signed state contract, three years</td>
              <td data-label="Amount or date">$3,000,000</td>
            </tr>
            <tr>
              <td data-label="Item">First milestone payment</td>
              <td data-label="Amount or date">About 120 days after kickoff (our example)</td>
            </tr>
            <tr>
              <td data-label="Item">Added delivery cost before that payment</td>
              <td data-label="Amount or date">About $150,000 a month, about $600,000 total (our example)</td>
            </tr>
            <tr>
              <td data-label="Item">Cash on hand at bid time</td>
              <td data-label="Amount or date">$350,000 (our example)</td>
            </tr>
            <tr>
              <td data-label="Item">Gap to show a plan for, before award</td>
              <td data-label="Amount or date">About $250,000, plus a cushion for late acceptance</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        This is our example. Size that gap before you bid. Have a plan for it that exists at award. Do the math now. Do not wait until after you win.
      </p>
      <h2 id={H["What happens if a contracting officer decides you are not responsible?"]}>What happens if a contracting officer decides you are not responsible?</h2>
      <p>
        You do not get that award. If you are a small business, the officer must refer the finding to the SBA for a possible certificate. Award is then held for at least 15 business days.
      </p>
      <p>
        A referral is a second look, not a guarantee.
      </p>
      <p>
        A Certificate of Competency is the certificate issued by the SBA stating that the holder is responsible. (<ExtLink href="https://www.acquisition.gov/far/19.601">FAR 19.601</ExtLink>)
      </p>
      <p>
        If the officer finds an apparent successful small business offeror to be nonresponsible, the officer shall refer that small business to the SBA for a possible certificate. That is true even if the next acceptable offer is from a small business. (<ExtLink href="https://www.acquisition.gov/far/19.601">FAR 19.601</ExtLink>) The referral can name elements such as capability, competency, capacity, credit, integrity, perseverance, tenacity, and limitations on subcontracting. (<ExtLink href="https://www.acquisition.gov/far/19.602-1">FAR 19.602-1</ExtLink>) The referral names the elements found lacking. So a money finding is specific.
      </p>
      <p>
        Award shall be withheld for 15 business days after a complete referral reaches the right SBA Area Office. The officer and the SBA can agree to a longer hold. (<ExtLink href="https://www.acquisition.gov/far/19.602-1">FAR 19.602-1</ExtLink>) A referral delays award. It is not a guarantee of award. You may still lose. Do not treat a referral as a win. The certificate program applies to government acquisitions, with a limited exception for 8(a) sole source awards. (<ExtLink href="https://www.acquisition.gov/far/19.601">FAR 19.601</ExtLink>) This is SBA&apos;s certificate program under the FAR. It is not a loan program.
      </p>
      <p>
        Have the financing arranged before award, rather than argue capacity after a finding. Arrange it first. Do not wait to argue later.
      </p>
      <h2 id={H["Do state and local agencies check your finances too?"]}>Do state and local agencies check your finances too?</h2>
      <p>
        Many do on large projects, under their own rules. Texas guidance describes asking respondents for proof of financial capability and for your latest statements on high risk or high dollar buys. Read the bid request.
      </p>
      <p>
        If it is a pass or fail test, it says so.
      </p>
      <p>
        The Texas Comptroller guide is agency guidance, not a statute. &quot;Best practice&quot; and &quot;recommended&quot; are its words, not mandates. For high risk or high dollar buys, the guide calls it best practice to require proof that each respondent can do the work. For capital intensive projects, the bid request should also require disclosure of any outside money the respondent will use. For high risk buys, agencies are advised to reserve the right to reject a response for lack of financial soundness. Local governments and other states vary. Read the bid. This is guidance only. It is not a law. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">Texas Comptroller Procurement and Contract Management Guide, Version 4.0</ExtLink>)
      </p>
      <p>
        If audited financial statements are not available, the guide allows unaudited statements. A CPA can compile, review, and attest those statements. A CPA firm can do that work too. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>) Depending on the procurement, the agency may accept statements certified as accurate by the firm&apos;s CFO. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>)
      </p>
      <p>
        <em>&quot;Financially capable of handling a project of this size and scope.&quot;</em> (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>)
      </p>
      <p>
        That line comes from a sample evaluation table. The sample submission is the latest statements and a commercial credit report.
      </p>
      <p>
        If certain vendor qualifications must be met for the response to be eligible, those qualifications must be clearly stated in the solicitation. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>) Those tests are reviewed on a pass or fail basis. The bid request must give notice of threshold conditions that will cause rejection.
      </p>
      <p>
        An employee from the agency&apos;s budget division may serve as a technical advisor during the review of the financial documents. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">the Texas guide</ExtLink>) Someone who reads balance sheets for a living may review yours. A real reader may see the gap. Plan for that.
      </p>
      <h2 id={H["Should you take on a contract bigger than your cash can carry?"]}>Should you take on a contract bigger than your cash can carry?</h2>
      <p>
        Often yes, if you fund the gap on purpose. The gap to the first payment on a signed contract is usually a timing problem. Size it, arrange a timing tool to cover it before award, and keep growth capital for growth.
      </p>
      <p>
        Commercial financing is, as a rule, your job, not the agency&apos;s.
      </p>
      <p>
        <em>&quot;It is the responsibility of the contractor to provide all resources needed for performance of the contract.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/32.202-1">FAR 32.202-1</ExtLink>)
      </p>
      <p>
        In some markets the provision of financing by the buyer is a commercial practice. (<ExtLink href="https://www.acquisition.gov/far/32.202-1">FAR 32.202-1</ExtLink>) Do not assume the government will finance a SaaS contract. Ways to shrink the gap, including commercial advance payments and performance based payments, are covered in <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>implementation milestones and holdbacks</Link>. Annual upfront billing can shrink the lag layer too. See <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>upfront government SaaS payment</Link>.
      </p>
      <p>
        Start with a basic line from our working capital post.
      </p>
      <p>
        <em>&quot;If the cash leaves to deliver an already signed contract and returns when the agency pays, you have a timing problem.&quot;</em> (<Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>Working capital vs growth capital for GovTech software</Link>)
      </p>
      <p>
        Size the gap first, using the method in our cash flow gap post.
      </p>
      <p>
        <em>&quot;Every new award adds cost days before it adds collected cash.&quot;</em> (<Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>The government contractor cash flow gap</Link>)
      </p>
      <p>
        Use a revolving line of credit if awards and ramps recur and the gap repeats as receivables turn. See <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>a revolving line of credit</Link>. Use loans with bullet payments if one ramp ends in a known first payment. See <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>loans with bullet payments</Link>. Use an assignment of contract payments if a financing provider needs to be paid directly by the agency on a signed federal contract. See <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>the Assignment of Claims Act for GovTech software</Link>. Use growth capital if the real problem is building capacity for a pipeline of larger contracts. For how claims stack, see <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>capital stack seniority for GovTech software</Link>. Strategy hub: <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>software company financing strategy</Link>.
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
              <td data-label="If you have">One new award with a ramp that ends in a known first payment</td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Loans with bullet payments sized to the ramp</td>
            </tr>
            <tr>
              <td data-label="If you have">Awards and ramps that recur as receivables turn</td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">
                A <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>revolving line of credit</Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">A financing provider that needs to be paid directly by the agency on a signed federal contract</td>
              <td data-label="It is likely">Timing</td>
              <td data-label="Use">Assignment of contract payments</td>
            </tr>
            <tr>
              <td data-label="If you have">A pipeline of larger contracts that needs a bigger team and more sales</td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["What should you do before you submit the bid?"]}>What should you do before you submit the bid?</h2>
      <p>
        Read the bid request for financial capability and pass or fail language, and size the gap to the first payment. Have current statements ready. Have the financing for the gap arranged so it exists at award.
      </p>
      <p>
        Then you can answer the question before anyone asks it. Be ready. Do this before you bid.
      </p>
      <ol>
        <li>
          Read the bid request for statement requirements, financial capability criteria, and any pass or fail test. If those tests must be met for the response to be eligible, they must be clearly stated in the bid request.
        </li>
        <li>
          Size the gap: monthly delivery cost times the months to the first payment, plus a cushion for late acceptance. Use the method in <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>the government contractor cash flow gap</Link>.
        </li>
        <li>
          Arrange the financing for that gap before award, and keep the documents current. The numbers are checked as close to award as feasible.
        </li>
        <li>
          Ask the procurement contact, during the question period, which documents they accept and whether statements certified by the CFO are accepted. Do not invent a script.
        </li>
        <li>
          Talk to your accountant about the statements the bid request calls for. Plan the next step on capital before you bid, not after the first payment is late.
        </li>
      </ol>
      <p>
        Our view: the financing for a signed contract&apos;s ramp belongs in the bid plan, not the post award plan. Arranged beats hoped for.
      </p>
      <p>
        The gap to the first payment is usually a timing problem. Fund it with a timing tool sized to it. Raise growth capital when the real need is capacity for a pipeline of larger contracts. Read the bid request for financial capability and pass or fail language before you decide to bid.
      </p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_FAQ} />

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
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Implementation milestones and holdbacks
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act for GovTech software
          </Link>
        </li>
      </ul>

      <p>
        <em>
          This post is general education, not financial, legal, accounting, or tax
          advice.
        </em>
      </p>

      
      <FounderCtaBlock position="bottom" postSlug={GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_POST.slug} />

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