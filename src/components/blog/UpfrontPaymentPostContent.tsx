import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  GOVTECH_POST,
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_FAQ,
  UPFRONT_PAYMENT_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  UPFRONT_PAYMENT_HEADINGS.map((h) => [h.text, h.id]),
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

export default function UpfrontPaymentPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Most GovTech vendors bill in arrears because they assume they have to.
          Often they don&apos;t.
        </strong>
      </p>
      <p>
        Often yes for federal buyers, with conditions. GSA guidance says upfront
        payment for a fixed price, fixed term SaaS license is not a prohibited
        advance payment because access starts when payment is made. Professional
        services and usage based cloud still get paid in arrears. State and
        local rules vary: some statutes expressly allow prepaying software
        subscriptions, while some state contracts prohibit prepayment. Check
        your contract and jurisdiction.
      </p>
      <p>
        <em>
          This post is general information, not legal or accounting advice.
          Confirm the rules for your contract with your contracting officer and
          counsel.
        </em>
      </p>

      <h2 id={H["Why billing in arrears hurts GovTech cash flow"]}>
        Why billing in arrears hurts GovTech cash flow
      </h2>
      <p>
        When you bill in arrears, you deliver first and invoice later. Your
        receivable cycle then sits on top of the delivery period, so a renewal
        you already won still costs you months of cash before it pays. Many
        government software vendors bill this way because they assume the buyer
        requires it. Sometimes it does. Often it is worth asking.
      </p>
      <p>
        The federal starting point is strict. Under 31 U.S.C. 3324, &quot;a
        payment under a contract to provide a service or deliver an article for
        the United States Government may not be more than the value of the
        service already provided or the article already delivered.&quot; An
        advance &quot;may be made only if it is authorized by&quot; a
        &quot;specific appropriation or other law.&quot; (
        <ExtLink href="https://uscode.house.gov/view.xhtml?req=%28title%3A31+section%3A3324+edition%3Aprelim%29">
          31 U.S.C. 3324
        </ExtLink>
        )
      </p>

      <h2
        id={
          H[
            "The federal rule: advance payments are restricted, but upfront SaaS is different"
          ]
        }
      >
        The federal rule: advance payments are restricted, but upfront SaaS is
        different
      </h2>
      <p>
        GSA puts it plainly: &quot;Advance payments to Government contractors
        for goods and services are generally prohibited unless specifically
        authorized.&quot; Its Acquisition Letter MV-2024-01, issued March 15,
        2024, then &quot;clarifies that under specific conditions, addressed
        below, an upfront payment is not considered an advance payment.&quot;
        The reasoning: &quot;The central distinction is the contemporaneous
        access.&quot; When your customer gets the software at the moment they
        pay, they have received what they paid for. (
        <ExtLink href="https://www.gsa.gov/policy-regulations/policy/acquisition-policy/acquisition-policy-library-and-resources/mv202401">
          GSA MV-2024-01
        </ExtLink>
        )
      </p>
      <p>
        The letter &quot;is effective immediately and remains in effect until
        rescinded or incorporated into the GSAM.&quot; Note one thing other
        write-ups get wrong: GSA does not say it &quot;approves advance
        payment.&quot; It says a qualifying upfront SaaS payment is not an
        advance payment at all. Use GSA&apos;s wording when you talk to a
        contracting officer.
      </p>

      <h2 id={H["The six GSA criteria: a checklist for your quote"]}>
        The six GSA criteria: a checklist for your quote
      </h2>
      <p>
        Per{" "}
        <ExtLink href="https://www.gsa.gov/system/files/MV-2024-01.pdf">
          GSA MV-2024-01
        </ExtLink>
        , upfront payment qualifies when:
      </p>
      <ol>
        <li>
          &quot;Access to the software is granted contemporaneously with
          payment.&quot;
        </li>
        <li>
          &quot;The license is acquired on a fixed-price or fixed-price with
          economic price adjustment basis.&quot;
        </li>
        <li>
          &quot;The license is priced at a single seat, multi-seat, unit, or
          subscription price covering a fixed term.&quot;
        </li>
        <li>
          &quot;The license&apos;s pricing/billing model allows for no
          utilization or consumption metric other than quantity to affect the
          costs incurred over the negotiated term.&quot;
        </li>
        <li>
          &quot;The license does not require any upfront payment other than the
          fixed seat, unit, or subscription cost as a prerequisite for access or
          a pricing discount.&quot;
        </li>
        <li>
          &quot;The license service is continuous and uninterrupted for the
          negotiated term of access to the license.&quot;
        </li>
      </ol>
      <p>
        Keep the license separate from everything else. GSA&apos;s MAS
        solicitation says &quot;All other cloud computing services (i.e., IaaS,
        PaaS, SaaS) and professional services must be paid in arrears in
        accordance with 31 U.S.C. § 3324 and 41 U.S.C. § 4505.&quot; (
        <ExtLink href="https://sws.gsa.gov/sws-search/viewSolDocument.do?method=view&solDoc=MDkwMDI5YjQ4Y2I5OTc4MQ%3D%3D&solNum=NDdRU01EMjBSMDAwMQ%3D%3D&solRefresh=MjY%3D">
          GSA MAS solicitation
        </ExtLink>
        ) Implementation, training, and usage based charges belong on their own
        lines.
      </p>

      <h2 id={H["What GSA's ordering guidance adds"]}>
        What GSA&apos;s ordering guidance adds
      </h2>
      <p>
        GSA&apos;s Cloud SIN ordering guidance says &quot;Upfront annual SaaS
        payments are not prohibited &apos;advance payments&apos; because the
        SaaS is &apos;delivered&apos; upon provisioning.&quot; It also warns
        that multi-year deals must respect the Bona Fide Needs rule:
        &quot;Agencies cannot obligate funds for future years without multi-year
        contracting authority.&quot; (
        <ExtLink href="https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/multiple-award-schedule-it/cloud-and-cloud-related-services/cloud-sin-ordering-guidance">
          GSA Cloud SIN ordering guidance
        </ExtLink>
        )
      </p>
      <p>
        The practical takeaway: ask for annual upfront billing for each option
        year, not a multi-year prepayment.
      </p>
      <p>
        One scope caveat. This is GSA guidance for GSA contracting activities
        and MAS cloud orders. It does not automatically bind every federal
        agency contract. Confirm with your contracting officer.
      </p>

      <h2 id={H["Federal, state and local rules compared"]}>
        Federal, state and local rules compared
      </h2>
      <p>
        The federal rules are fairly uniform, but state and local rules depend
        on the statute and the contract vehicle, so here is how they compare
        side by side.
      </p>

      <TableWrap
        caption="Upfront software payment rules by buyer, with conditions and primary sources."
        scrollable
      >
        <table className="blog-table blog-table--options">
          <caption>
            Upfront software payment rules by buyer, with conditions and primary
            sources.
          </caption>
          <thead>
            <tr>
              <th scope="col">Buyer</th>
              <th scope="col">Rule on paying software upfront</th>
              <th scope="col">Condition or limit</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Buyer">Federal (general statute)</td>
              <td data-label="Rule on paying software upfront">
                Payment &quot;may not be more than the value of the service
                already provided&quot; unless an advance is authorized
              </td>
              <td data-label="Condition or limit">
                Advance requires specific appropriation or other law
              </td>
              <td data-label="Source">
                <ExtLink href="https://uscode.house.gov/view.xhtml?req=%28title%3A31+section%3A3324+edition%3Aprelim%29">
                  31 U.S.C. 3324
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer">Federal, GSA contracting activities</td>
              <td data-label="Rule on paying software upfront">
                Upfront SaaS license payment meeting the criteria &quot;is not
                considered an advance payment&quot;
              </td>
              <td data-label="Condition or limit">
                Six criteria: contemporaneous access, fixed price, fixed term,
                no consumption metric, no extra upfront fee, continuous access
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.gsa.gov/policy-regulations/policy/acquisition-policy/acquisition-policy-library-and-resources/mv202401">
                  GSA MV-2024-01
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer">Federal, GSA MAS cloud SINs</td>
              <td data-label="Rule on paying software upfront">
                Upfront annual SaaS payments are not prohibited advance payments
              </td>
              <td data-label="Condition or limit">
                Other cloud and professional services paid in arrears; Bona Fide
                Needs rule for multi-year
              </td>
              <td data-label="Source">
                <ExtLink href="https://sws.gsa.gov/sws-search/viewSolDocument.do?method=view&solDoc=MDkwMDI5YjQ4Y2I5OTc4MQ%3D%3D&solNum=NDdRU01EMjBSMDAwMQ%3D%3D&solRefresh=MjY%3D">
                  MAS solicitation
                </ExtLink>
                ,{" "}
                <ExtLink href="https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/multiple-award-schedule-it/cloud-and-cloud-related-services/cloud-sin-ordering-guidance">
                  ordering guidance
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer">Minnesota counties</td>
              <td data-label="Rule on paying software upfront">
                County &quot;may make advance deposits or payments for software
                development or maintenance services&quot;
              </td>
              <td data-label="Condition or limit">
                Limited to county owned or leased data processing equipment; the
                separate subscription clause covers newspaper, magazine, and
                similar subscriptions
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.revisor.mn.gov/statutes/cite/375.84">
                  Minn. Stat. 375.84
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer">Minnesota state agencies</td>
              <td data-label="Rule on paying software upfront">
                Commissioner &quot;may allow an agency to make advance deposits
                or payments for software or software maintenance services&quot;
                and IT hosting
              </td>
              <td data-label="Condition or limit">
                Requires commissioner allowance
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.revisor.mn.gov/statutes/cite/16A.065">
                  Minn. Stat. 16A.065
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer">
                Florida counties, via clerk of circuit court
              </td>
              <td data-label="Rule on paying software upfront">
                Clerk &quot;is authorized to make advance payments on behalf of
                the county for goods and services, including, but not limited
                to, maintenance agreements and subscriptions&quot;
              </td>
              <td data-label="Condition or limit">
                Per Chief Financial Officer rules or procedures
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.flsenate.gov/Laws/Statutes/2025/28.235">
                  Fla. Stat. 28.235
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer">
                Massachusetts statewide IT contracts (ITS64, ITS86)
              </td>
              <td data-label="Rule on paying software upfront">
                &quot;No prepayment should be made for products not yet
                delivered or services not yet rendered&quot;
              </td>
              <td data-label="Condition or limit">
                Payment within 45 days per Massachusetts Bill Payment Policy
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.statewidecontractuserguide.mass.gov/CUG/Guide/ITS64/E?Category=ITS">
                  ITS64
                </ExtLink>
                ,{" "}
                <ExtLink href="https://www.statewidecontractuserguide.mass.gov/CUG/Guide/ITS86/E?Category=ITS">
                  ITS86
                </ExtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        <strong>Minnesota</strong> is the clearest example of a state that
        writes prepayment into law. Counties may prepay software development or
        maintenance services for county owned or leased data processing
        equipment (
        <ExtLink href="https://www.revisor.mn.gov/statutes/cite/375.84">
          Minn. Stat. 375.84
        </ExtLink>
        ), and the commissioner may allow state agencies to prepay software,
        software maintenance, and &quot;information technology hosting
        services&quot; (
        <ExtLink href="https://www.revisor.mn.gov/statutes/cite/16A.065">
          Minn. Stat. 16A.065
        </ExtLink>
        ).
      </p>
      <p>
        <strong>Florida</strong> lets the clerk of the circuit court make
        advance payments for the county, &quot;including, but not limited to,
        maintenance agreements and subscriptions, pursuant to rules or
        procedures adopted by the Chief Financial Officer.&quot; (
        <ExtLink href="https://www.flsenate.gov/Laws/Statutes/2025/28.235">
          Fla. Stat. 28.235
        </ExtLink>
        )
      </p>
      <p>
        <strong>Massachusetts</strong> goes the other way on its statewide IT
        contracts: &quot;No prepayment should be made for products not yet
        delivered or services not yet rendered.&quot; (
        <ExtLink href="https://www.statewidecontractuserguide.mass.gov/CUG/Guide/ITS64/E?Category=ITS">
          ITS64
        </ExtLink>
        ) Whether a SaaS term that starts on payment counts as
        &quot;delivered&quot; is a question for the buyer and counsel. I am
        raising it as a discussion point, not answering it.
      </p>
      <p>
        Before you ask, check three things: your state&apos;s statute, the
        cooperative or statewide contract you sell through, and the agency&apos;s
        own finance policy.
      </p>

      <h2 id={H["How to ask for upfront annual billing"]}>
        How to ask for upfront annual billing
      </h2>
      <ol>
        <li>
          <strong>
            Price the subscription as a fixed term, fixed price line,
          </strong>{" "}
          mirroring the GSA criteria.
        </li>
        <li>
          <strong>Start access on the payment or term start date,</strong> and
          state continuous access in your license terms.
        </li>
        <li>
          <strong>Keep services and usage on separate lines</strong> billed in
          arrears.
        </li>
        <li>
          <strong>On federal deals, cite GSA MV-2024-01</strong> to the
          contracting officer or your reseller.
        </li>
        <li>
          <strong>
            On state and local deals, find the prepayment statute or policy
          </strong>{" "}
          in that jurisdiction and reference it.
        </li>
        <li>
          <strong>Align renewals with the fiscal year and funding.</strong> Do
          not ask the agency to commit future year funds.
        </li>
        <li>
          <strong>Send a proper invoice</strong> so the payment clock starts. I
          covered{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            what makes an invoice proper
          </Link>{" "}
          in an earlier post.
        </li>
      </ol>

      <h2 id={H["When upfront billing is not available: closing the cash gap"]}>
        When upfront billing is not available: closing the cash gap
      </h2>
      <p>
        Some buyers will still pay in arrears. So most GovTech companies with
        long receivables end up with a financing tool next to the statute: an
        early payment program if their agency offers one, factoring on large
        one-time invoices, a credit line, or capital backed by the signed
        contract. I compared those options in detail in{" "}
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
        180 days, <Link href="/contact">tell us about it</Link>.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={UPFRONT_PAYMENT_FAQ} />
    </div>
  );
}
