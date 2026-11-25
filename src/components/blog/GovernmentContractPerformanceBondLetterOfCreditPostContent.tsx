import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  FINANCING_STRATEGY_POST,
  GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST,
  GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_FAQ,
  GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_HEADINGS,
  IMPLEMENTATION_MILESTONES_POST,
  REVOLVING_LINE_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST, GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_POST} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_HEADINGS.map((h) => [
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

export default function GovernmentContractPerformanceBondLetterOfCreditPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Performance security can tie up cash on a signed government contract before you send the first invoice. Federal non construction contracts generally do not require a bond. But when a solicitation does, the security is due before work starts. It comes back only when the bond obligation ends. For a federal letter of credit on a non construction contract, that period runs at least 90 days past final payment, or the end of any warranty, whichever is later. Read the solicitation before you bid. Put the security amount and its release date next to the payment lag. Fund that combined gap as a timing problem. Keep growth capital for growth. Do not use growth cash to post the amount.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder wins a signed $2,000,000 state information technology contract. The solicitation required performance security of 10 percent of the contract price. That is our example&apos;s figure. It is not a typical or required percentage. The security is $200,000, due before work starts. The first invoice is 60 to 120 days out. The CEO planned the hiring budget off the signed contract value and forgot the security.
      </p>
      <p>
        The reason that frame fails is simple. The security is not spent. The cash comes back. It comes back when the bond obligation ends. It is cash tied up for the life of the contract, plus the release period. That cash is not gone. The cash is still yours. You get it back later. That is the point. It sits on top of the normal payment lag. That is a timing problem. It is not a growth problem. The date is in the contract. Size the gap now.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>Federal non construction contracts generally do not require a performance bond. A solicitation may still require one. Read it before you bid.</li>
          <li>When security is required, it is due before work starts. It comes back only when the bond obligation ends. It does not come back at go live.</li>
          <li>A federal letter of credit on a non construction contract must cover at least 90 days after final payment, or the end of any warranty, whichever is later.</li>
          <li>Size the security and the payment lag as one gap. Fund that gap as a timing problem. Keep growth capital for growth.</li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        As much as the penal sum, for as long as the contract requires it. If you post a cashier&apos;s check or currency, that amount leaves the business until the bond obligation ends. A federal letter of credit on a non construction contract must cover at least 90 days after final payment, or the end of any warranty, whichever is later. Size it with the payment lag before you sign.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Performance bond: a promise that the contract will be performed, backed by a surety or by other security. If the contractor defaults, the government can collect up to the bond amount.
        </li>
        <li>
          Penal sum: the dollar amount of the bond. It is the most the government can collect under it.
        </li>
        <li>
          Irrevocable letter of credit: a promise from a financial institution to pay the government on written demand. It can be used instead of a surety bond.
        </li>
      </ul>
      <h2 id={H["Will your government contract require a performance bond?"]}>Will your government contract require a performance bond?</h2>
      <p>
        On a federal non construction contract, usually not. Bonds may be required above the simplified acquisition threshold when needed to protect the government&apos;s interest. States decide differently, so read the solicitation before you bid.
      </p>
      <p>
        One case is substantial progress payments before delivery. Most software awards will not need one. This is the usual case. A bond is not always required. Read the papers first. Do this before you bid. Do not wait. Check the papers now. Ask first.
      </p>
      <p>
        <em>&quot;Generally, agencies shall not require performance and payment bonds for other than construction contracts.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/28.103-1">FAR 28.103-1</ExtLink>)
      </p>
      <p>
        A bond may be required above that threshold when needed to protect the government&apos;s interest. (<ExtLink href="https://www.acquisition.gov/far/28.103-2">FAR 28.103-2</ExtLink>) One case is when substantial progress payments are made before delivery of end items starts. Other cases can include government property or funds given to the contractor. They can also include a sale of assets or a merger, if the government wants assurance the successor can perform. They can also include dismantling, demolition, or removal of improvements. (<ExtLink href="https://www.acquisition.gov/far/28.103-2">FAR 28.103-2</ExtLink>)
      </p>
      <p>
        The construction bond statute is not the rule for a software contract. Bonds are generally not required, but a solicitation may still require one. Read the contract.
      </p>
      <p>
        California uses a different path. Public Contract Code section 12112 tells the state&apos;s information technology risk analysis to determine the need for financial protection. The menu includes a performance bond. It also includes a letter of credit, contract terms, or another form of security.
      </p>
      <p>
        <em>&quot;Protection in the form of contract terms.&quot;</em> (<ExtLink href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PCC&sectionNum=12112">California Public Contract Code section 12112</ExtLink>)
      </p>
      <p>
        This is a menu the state&apos;s risk analysis chooses from. It is not a rule that every California IT contract carries a bond. The state may choose plain contract terms instead.
      </p>
      <p>
        Texas takes still another path. The Texas Comptroller guide is agency guidance, not a statute. Local governments vary. Read the solicitation. This is guidance only.
      </p>
      <p>
        The three most common forms of surety bonds used in the process are bid bonds, performance bonds, and payment bonds. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">Texas Comptroller Procurement and Contract Management Guide, Version 4.0</ExtLink>)
      </p>
      <p>
        The solicitation must provide notice if a bond is required. It must also say what forms are acceptable, for example an irrevocable letter of credit or a cashier&apos;s check. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">Texas Comptroller guide, Version 4.0</ExtLink>)
      </p>
      <p>
        <em>&quot;SPD discourages the use of performance bonds unless there is a compelling need or statutory requirement.&quot;</em> (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">Texas Comptroller guide, Version 4.0</ExtLink>)
      </p>
      <p>
        SPD here means the Statewide Procurement Division at the Texas Comptroller.
      </p>
      <p>
        A bond shall not be required after award if it was not required in the contract, except as needed for a contract change. (<ExtLink href="https://www.acquisition.gov/far/28.103-1">FAR 28.103-1</ExtLink>) The requirement shows up in the bid request and the contract. You can see it before you bid. Look before you sign. The ask is in writing. You can read it now.
      </p>
      <h2 id={H["How much cash does the security tie up, and for how long?"]}>How much cash does the security tie up, and for how long?</h2>
      <p>
        Up to the full penal sum, from before work starts until the bond ends. If you post a cashier&apos;s check or currency, that is cash out of the business the whole time. A federal letter of credit on a non construction contract must cover at least 90 days past final payment, or the end of any warranty, whichever is later.
      </p>
      <p>
        <em>&quot;The contractor shall furnish all bonds before receiving a notice to proceed with the work.&quot;</em> (<ExtLink href="https://www.acquisition.gov/far/28.103-1">FAR 28.103-1</ExtLink>)
      </p>
      <p>
        The federal clause leaves the bond percentage blank for each contract. There is no standard percentage for a software contract. Executed bonds are required before starting work. (<ExtLink href="https://www.acquisition.gov/far/52.228-16">FAR 52.228-16</ExtLink>)
      </p>
      <p>
        On a federal contract, you may post a certified or cashier&apos;s check, bank draft, money order, or currency equal to the penal sum, instead of a surety. (<ExtLink href="https://www.acquisition.gov/far/28.204-2">FAR 28.204-2</ExtLink>) You also may post a bond secured by an irrevocable letter of credit in that same amount. (<ExtLink href="https://www.acquisition.gov/far/28.204-3">FAR 28.204-3</ExtLink>) A letter of credit must be issued or confirmed by a federally insured financial institution rated investment grade. (<ExtLink href="https://www.acquisition.gov/far/28.204-3">FAR 28.204-3</ExtLink>)
      </p>
      <p>
        Agencies shall return the security, or its equivalent, to the contractor when the bond obligation has ceased. (<ExtLink href="https://www.acquisition.gov/far/28.204">FAR 28.204</ExtLink>) Do not plan on it coming back at go live. The cash comes back later. The contract sets that date. It does not come back at go live.
      </p>
      <p>
        For a letter of credit on a contract not subject to the construction bond statute, coverage lasts until a later date. That date is 90 days after final payment, or the end of any warranty period, whichever is later. The warranty piece applies to performance bonds. (<ExtLink href="https://www.acquisition.gov/far/28.204-3">FAR 28.204-3</ExtLink>) Final payment timing therefore sets the release date. See <Link href={`/blog/${GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST.slug}`}>closeout and the final invoice</Link>. If an acceptable replacement is not furnished at least 30 days before the letter of credit is set to expire, the contracting officer shall immediately draw on it. The same is true for any other acceptable substitute. (<ExtLink href="https://www.acquisition.gov/far/28.204-3">FAR 28.204-3</ExtLink>)
      </p>
      <p>
        The government may require more bond protection when a contract price is increased. (<ExtLink href="https://www.acquisition.gov/far/28.103-2">FAR 28.103-2</ExtLink>) A larger change can raise the security.
      </p>
      <p>
        Consider our example. A company signs a $2,000,000 state information technology contract. This is an example, not a real company. The solicitation required performance security of 10 percent of the contract price. That 10 percent is our example&apos;s figure. It is not a typical or required percentage. The security is $200,000, due before work starts. The first invoice is 60 to 120 days out. The cash plan has two layers. One is the $200,000 of security that comes back only when the bond ends. The other is the normal payment lag on invoices. Size both layers. Count the lag too. Size both before signing. Do not treat the $200,000 as spent. Do not plan to use it for hiring. Do not use it to hire. Do not spend it.
      </p>
      <TableWrap caption="Performance security example">
        <table>
          <thead>
            <tr>
                  <th>Item</th>
                  <th>Amount or date</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td data-label="Item">Signed state IT implementation contract</td>
                  <td data-label="Amount or date">$2,000,000</td>
                </tr>
                <tr>
                  <td data-label="Item">Performance security required in our example (10 percent, our example&apos;s figure)</td>
                  <td data-label="Amount or date">$200,000, due before work starts</td>
                </tr>
                <tr>
                  <td data-label="Item">First invoice paid</td>
                  <td data-label="Amount or date">60 to 120 days after work starts (our example)</td>
                </tr>
                <tr>
                  <td data-label="Item">When the security comes back</td>
                  <td data-label="Amount or date">When the bond obligation ends, per the contract</td>
                </tr>
                <tr>
                  <td data-label="Item">Gap to fund before signing</td>
                  <td data-label="Amount or date">The $200,000 security plus the payment lag on early invoices</td>
                </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        This is our example. The $200,000 is not an expense you write off. It is cash, or credit, that comes back on a date the contract sets. Plan for that date. Write the date down. Put it on the calendar. Put the date on paper.
      </p>
      <p>
        Holdbacks the agency withholds from progress payments are a different item. That is money owed to you that the agency keeps until acceptance. California&apos;s section 12112(a) sets a floor on that withholding for information technology made or performed especially for the state. It does not apply to an ordinary SaaS subscription. See <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>implementation milestones and holdbacks</Link>.
      </p>
      <h2 id={H["Does the cost of the bond come back to you?"]}>Does the cost of the bond come back to you?</h2>
      <p>
        The security itself comes back when the bond ends. The cost of a surety bond is a different question. Texas guidance says that cost is typically passed to the agency by the vendor. That means it shows up in your price. Treat the posted amount as cash that returns. Treat the bond cost as a line in your bid. These are two different items.
      </p>
      <p>
        The Texas guide says the use of a bond should be carefully considered. A bond requirement may restrict competition. It may delay the award. It may also raise the cost of the contract, as the cost of the bond is typically passed to the agency by the vendor. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">Texas Comptroller guide, Version 4.0</ExtLink>) &quot;Typically&quot; is not a promise that the agency reimburses you. It is not a repayment rule. The same guide points agencies to keep bond dollar values consistent with the risk of nonperformance. This is guidance, not a statute. It is not a law.
      </p>
      <p>
        A payment bond is required only when a performance bond is required, and only if the use of a payment bond is in the government&apos;s interest. (<ExtLink href="https://www.acquisition.gov/far/28.103-3">FAR 28.103-3</ExtLink>) Payment bonds protect suppliers of labor and material. See <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>subcontractor payment from a prime</Link>.
      </p>
      <p>
        The Texas guide tells agency staff that questions on bonding should go to agency legal counsel. (<ExtLink href="https://comptroller.texas.gov/purchasing/docs/96-1809-4.0.pdf">Texas Comptroller guide, Version 4.0</ExtLink>) For the vendor, ask the procurement contact during the question period. Talk to your own counsel. Do not treat that line as a playbook for removing the requirement. Ask the contact. Then talk to counsel.
      </p>
      <h2 id={H["What should you do before you bid?"]}>What should you do before you bid?</h2>
      <p>
        Find out whether a bond is required and which forms the bid request accepts. Write down the security amount, when it is due, and what releases it. Then put it in the cash plan next to the payment lag, before you sign.
      </p>
      <ol>
        <li>
          Read the bid request and the contract for a bond requirement, the accepted forms, and the percentage. The solicitation must provide notice if a bond is required and what forms are acceptable.
        </li>
        <li>
          Ask the procurement contact, during the question period, any open questions on forms and release. Do not invent a script.
        </li>
        <li>
          Calendar the release: final payment plus the period the contract requires, or the end of the warranty. See <Link href={`/blog/${GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST.slug}`}>closeout and the final invoice</Link>.
        </li>
        <li>
          Size the combined gap, the security plus the payment lag, and decide how to fund it. Talk to counsel on the bond documents.
        </li>
        <li>
          Plan the next step on capital before signing, not after the first invoice is late.
        </li>
      </ol>
      <p>
        Our view: performance security is a timing item, not a cost of growth. Size it with the payment lag as one gap, and fund that gap with a tool that matches its release date.
      </p>
      <p>
        Read the bid request before you bid. Federal non construction contracts generally do not require a bond. California decides through a risk analysis. Texas guidance discourages performance bonds unless there is a compelling need. If one is required, the bid request tells you the forms it accepts.
      </p>
      <h2 id={H["How should you fund a performance bond on a signed contract?"]}>How should you fund a performance bond on a signed contract?</h2>
      <p>
        As a timing problem, because the security comes back on a date the contract sets. Add the security to the payment lag. Size the combined gap. Fund it with a tool that matches the release date. Keep growth capital for hiring and selling. Keep growth capital for growth. This is not a growth cost.
      </p>
      <p>
        Start with a basic line from our working capital post.
      </p>
      <p>
        <em>&quot;Signed government contracts that pay slowly create a timing problem more often than a growth problem.&quot;</em> (<Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>Working capital vs growth capital for GovTech software</Link>)
      </p>
      <p>
        Size the gap first. The posted amount is a second layer on that gap. Count both. This is a timing gap. Size it before you sign.
      </p>
      <p>
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em> (<Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>The government contractor cash flow gap</Link>)
      </p>
      <p>
        You can shrink the lag layer where the contract allows annual upfront billing on SaaS. See <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>upfront government SaaS payment</Link>.
      </p>
      <p>
        Use a revolving line of credit if security requirements and payment lags recur across several contracts. Use loans with bullet payments if one security amount has a dated release, such as 90 days after a known final payment. Use growth capital if the real problem is building or selling more. A pipeline of larger contracts that will each need security and a bigger team is that kind of problem. For how claims stack, see <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>capital stack seniority for GovTech software</Link>.
      </p>
      <p>
        Assigning contract payments to a financing institution is a separate tool, and the notice goes to any surety too. See <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>the Assignment of Claims Act for GovTech software</Link>. Strategy hub: <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>software company financing strategy</Link>.
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
                  <td data-label="If you have">Security on one signed contract with a dated release, plus a payment lag</td>
                  <td data-label="It is likely">Timing</td>
                  <td data-label="Use">A timing tool sized to the security plus the lag, matched to the release date</td>
                </tr>
                <tr>
                  <td data-label="If you have">Security and payment lags that recur across several contracts</td>
                  <td data-label="It is likely">Timing</td>
                  <td data-label="Use">A <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>revolving line of credit</Link></td>
                </tr>
                <tr>
                  <td data-label="If you have">One security amount with a dated release, such as 90 days after a known final payment</td>
                  <td data-label="It is likely">Timing</td>
                  <td data-label="Use"><Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>Loans with bullet payments</Link></td>
                </tr>
                <tr>
                  <td data-label="If you have">A pipeline of larger contracts that need a bigger team and more sales</td>
                  <td data-label="It is likely">Growth</td>
                  <td data-label="Use">Growth capital</td>
                </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
        </li>
        <li>
          <Link
            href={`/blog/${GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST.slug}`}
          >
            Closeout and the final invoice
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Implementation milestones and holdbacks
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital
          </Link>
        </li>
      </ul>

      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      
      <FounderCtaBlock position="bottom" postSlug={GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_POST.slug} />

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
