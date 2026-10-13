import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  GOVTECH_POST,
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_POST,
  IMPLEMENTATION_MILESTONES_FAQ,
  IMPLEMENTATION_MILESTONES_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  IMPLEMENTATION_MILESTONES_HEADINGS.map((h) => [h.text, h.id]),
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

export default function ImplementationMilestonesPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          You can staff a government implementation for months, hit every
          deadline, and still not see the last of your money until long after
          go-live.
        </strong>
      </p>
      <p>
        In the government software contracts we reviewed, implementation is paid
        by milestone: you invoice only after the agency accepts a defined
        deliverable, and the agency keeps a holdback from each payment until
        final acceptance or the end of warranty. The holdbacks in those
        documents ranged from 5 to 20 percent. That range describes these
        specific contracts, not the market. Federal commercial contracts can
        include interim payments and advance payments capped at 15 percent of
        contract price. You can often propose your own schedule, so negotiate it
        before you sign.
      </p>
      <p>
        <em>
          This post is general information, not legal or accounting advice. Read
          your own contract and talk to counsel before you rely on any of it.
        </em>
      </p>

      <h2 id={H["Why implementation is where the cash gap is widest"]}>
        Why implementation is where the cash gap is widest
      </h2>
      <p>
        The subscription is the easy part. In an earlier post on{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront subscription billing
        </Link>{" "}
        I covered how a fixed term license can be billed in advance.
        Implementation is different. You staff the project for months, but
        payment waits on acceptance, then on the invoice cycle, then on a
        holdback release.
      </p>
      <p>
        Acceptance usually gates the invoice. The Tampa Hillsborough Expressway
        Authority&apos;s payment exhibit says the contractor may invoice for a
        payment milestone only &quot;once the Contractor completes and has
        received the Authority&apos;s approval of every deliverable associated
        with a payment milestone.&quot; (
        <ExtLink href="https://tampa-xway.com/wp-content/uploads/2025/03/T-2325-OBOS-BP-Exhibit-A-Project-Payment-Milestones-Addendum3-3.26.25.pdf">
          Tampa Hillsborough Expressway Authority, Exhibit A
        </ExtLink>
        )
      </p>
      <p>
        Then the payment clock starts. Connecticut&apos;s agreement says the
        Department pays &quot;within forty-five (45) days after Deliverables have
        been accepted by the Department and an invoice in accordance with the
        Project Implementation Schedule has been received.&quot; (
        <ExtLink href="https://www.biznet.ct.gov/SCP_Documents/Bids/24905/Attachment%204-Information%20Processing%20Systems%20Agreement.pdf">
          Connecticut agreement
        </ExtLink>
        ) A 2008 City of Los Angeles contract says the City &quot;will make
        payment within forty-five (45) calendar days after receipt of written
        invoice from Contractor.&quot; (
        <ExtLink href="https://cityclerk.lacity.org/onlinedocs/2007/07-2186-S1_misc_7-7-08.pdf">
          City of Los Angeles contract
        </ExtLink>
        ) If those clocks slip, see{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        .
      </p>

      <h2
        id={H["How state and local agencies structure implementation payments"]}
      >
        How state and local agencies structure implementation payments
      </h2>
      <p>
        Three building blocks show up again and again: milestone payments tied
        to accepted deliverables, a holdback withheld from each milestone, and a
        release trigger such as system acceptance, the end of warranty, or post
        go-live defect resolution.
      </p>
      <p>
        <strong>Examples from state and local contracts</strong> (each
        percentage belongs to the named document only):
      </p>

      <TableWrap
        caption="Examples from state and local contracts"
        scrollable
      >
        <table className="blog-table blog-table--options">
          <caption>Examples from state and local contracts</caption>
          <thead>
            <tr>
              <th scope="col">Buyer and document</th>
              <th scope="col">How implementation is paid</th>
              <th scope="col">Holdback</th>
              <th scope="col">Holdback release</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Buyer and document">
                Connecticut, Information Processing Systems Agreement
              </td>
              <td data-label="How implementation is paid">
                Within 45 days after deliverable accepted and invoiced
              </td>
              <td data-label="Holdback">10% of each accepted deliverable</td>
              <td data-label="Holdback release">
                Half after system acceptance period, half after warranty
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.biznet.ct.gov/SCP_Documents/Bids/24905/Attachment%204-Information%20Processing%20Systems%20Agreement.pdf">
                  CT agreement
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer and document">
                Colorado Dept. of State, SCORE II (2006 contract)
              </td>
              <td data-label="How implementation is paid">
                Per Payment and Delivery Schedule
              </td>
              <td data-label="Holdback">
                20% per deliverable (except hardware and third party software)
              </td>
              <td data-label="Holdback release">
                50% at each milestone, balance after 60 day onsite support
                period
              </td>
              <td data-label="Source">
                <ExtLink href="https://files.causeofamerica.org/docs/2006-sep-14-co-dept-of-state-score-ii-saber-software-contract-with-corrections-oct-2006-rev.pdf">
                  CO contract
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer and document">
                CCCERA (Contra Costa County Employees&apos; Retirement
                Association), Schedule D
              </td>
              <td data-label="How implementation is paid">
                At milestones specified in the schedule
              </td>
              <td data-label="Holdback">15% per milestone</td>
              <td data-label="Holdback release">
                7.5% of total project cost at Final System Acceptance, 7.5%
                after 6 month warranty
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.cccera.gov/sites/main/files/file-attachments/cccera_-_schedule_d_charges_final.pdf">
                  CCCERA Schedule D
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer and document">
                New York ITS, IES Tier II Lot 3 contract
              </td>
              <td data-label="How implementation is paid">
                On completion and acceptance of deliverables or milestones
              </td>
              <td data-label="Holdback">15% of each invoice</td>
              <td data-label="Holdback release">
                In stages, final 10% tied to defect resolution up to 18 months
                after go-live
              </td>
              <td data-label="Source">
                <ExtLink href="https://its.ny.gov/system/files/documents/2023/06/c000657_ies_tier-ii_lot-3_deloitte_contract.pdf">
                  NY ITS contract
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer and document">
                Tampa Hillsborough Expressway Authority, Exhibit A
              </td>
              <td data-label="How implementation is paid">
                Invoice only after every deliverable in the milestone is
                approved; 5% at mobilization
              </td>
              <td data-label="Holdback">5% of each milestone</td>
              <td data-label="Holdback release">At System Acceptance</td>
              <td data-label="Source">
                <ExtLink href="https://tampa-xway.com/wp-content/uploads/2025/03/T-2325-OBOS-BP-Exhibit-A-Project-Payment-Milestones-Addendum3-3.26.25.pdf">
                  Tampa Exhibit A
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Buyer and document">
                Mississippi Division of Medicaid, RFP cost form (proposed terms)
              </td>
              <td data-label="How implementation is paid">
                Deliverable schedule; vendor may propose an alternative
              </td>
              <td data-label="Holdback">15% on pre-implementation deliverables</td>
              <td data-label="Holdback release">After warranty period</td>
              <td data-label="Source">
                <ExtLink href="https://medicaid.ms.gov/wp-content/uploads/2022/09/REVISED-2-COST-INFORMATION-SUBMISSION-004.pdf">
                  MS cost form
                </ExtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        New York is the long tail example. Its contract says &quot;The State
        will withhold fifteen percent (15%) of each invoice submitted upon
        acceptance of a Deliverable/Milestone,&quot; and the last tranche is a
        &quot;Release of ten percent (10%) of the withheld payment for
        resolution of all new critical defects within a timeframe established in
        the Tier II Assignment, but up to within eighteen (18) months, of
        Go-Live.&quot; (
        <ExtLink href="https://its.ny.gov/system/files/documents/2023/06/c000657_ies_tier-ii_lot-3_deloitte_contract.pdf">
          NY ITS contract
        </ExtLink>
        ) Part of what you earned on that kind of contract can sit with the
        agency for a year and a half after launch.
      </p>

      <h2 id={H["What is negotiable: a vendor playbook"]}>
        What is negotiable: a vendor playbook
      </h2>
      <ol>
        <li>
          <strong>Propose your own schedule.</strong> Mississippi&apos;s
          Medicaid cost form says &quot;Vendor may propose an alternative
          payment schedule to be finalized during contract negotiations.&quot;
          (
          <ExtLink href="https://medicaid.ms.gov/wp-content/uploads/2022/09/REVISED-2-COST-INFORMATION-SUBMISSION-004.pdf">
            MS cost form
          </ExtLink>
          )
        </li>
        <li>
          <strong>Ask for an early mobilization milestone.</strong> The Tampa
          exhibit lists &quot;Mobilization (30 days after NTP) | 5%&quot;. (
          <ExtLink href="https://tampa-xway.com/wp-content/uploads/2025/03/T-2325-OBOS-BP-Exhibit-A-Project-Payment-Milestones-Addendum3-3.26.25.pdf">
            Tampa Exhibit A
          </ExtLink>
          )
        </li>
        <li>
          <strong>Weight payments to effort.</strong> Mississippi says amounts
          &quot;should correlate to the level of effort and criticality of the
          deliverable/milestone to the project.&quot; Front-loaded work
          deserves front-loaded payment.
        </li>
        <li>
          <strong>Counter a high holdback.</strong> In a Jefferson Parish,
          Louisiana procurement, the proposed terms called for &quot;a twenty
          percent (20%) holdback of each invoice for the implementation service
          costs.&quot; One vendor responded by suggesting &quot;a retainage
          amount of 5%&quot; of each implementation services invoice, &quot;to
          be released upon the successful completion of each phase of the
          implementation.&quot; (
          <ExtLink href="https://jp-appserver.jeffparish.net/AGENDA/12062023/related1262023/61kn01!.PDF">
            Jefferson Parish agenda attachment
          </ExtLink>
          ) That was one vendor&apos;s proposal. The document does not show the
          final term.
        </li>
        <li>
          <strong>Release the holdback per phase, not only at the end.</strong>{" "}
          Colorado&apos;s 2006 contract released half of each milestone&apos;s
          holdback at the milestone, and the Jefferson Parish vendor asked for
          release at each phase.
        </li>
        <li>
          <strong>Define acceptance periods in writing.</strong>{" "}
          Pennsylvania&apos;s IT terms say &quot;Unless otherwise agreed to by
          the Commonwealth in the Acceptance Plan, the acceptance period shall
          be 10 business days for interim items and 30 business days for final
          items.&quot; (
          <ExtLink href="https://www.emarketplace.state.pa.us/FileDownload.aspx?file=SJF%5C%5C49034%5C%5C49034_Terms+and+Conditions+IT.pdf">
            PA IT terms
          </ExtLink>
          ) A clear clock keeps silence from stalling payment.
        </li>
        <li>
          <strong>Keep subscription and support on separate lines.</strong>{" "}
          Price the license and support on their own lines so only services
          carry the holdback, and bill the subscription upfront where the rules
          allow (see{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            upfront subscription billing
          </Link>
          ).
        </li>
      </ol>

      <h2
        id={
          H[
            "Federal contracts: commercial interim and advance payments, and performance-based payments"
          ]
        }
      >
        Federal contracts: commercial interim and advance payments, and
        performance-based payments
      </h2>
      <p>
        <strong>Federal financing rules</strong> (these are financing terms, not
        holdbacks):
      </p>

      <TableWrap caption="Federal financing rules" scrollable>
        <table className="blog-table blog-table--options">
          <caption>Federal financing rules</caption>
          <thead>
            <tr>
              <th scope="col">Rule</th>
              <th scope="col">What it allows</th>
              <th scope="col">Limit or condition</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Rule">Commercial purchases (FAR 32.202)</td>
              <td data-label="What it allows">
                Commercial interim and advance payments when in the
                government&apos;s best interest
              </td>
              <td data-label="Limit or condition">
                Advance payments may not exceed 15% of contract price
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.acquisition.gov/far/32.202-1">
                  FAR 32.202-1
                </ExtLink>
                ,{" "}
                <ExtLink href="https://www.acquisition.gov/far/32.202-2">
                  32.202-2
                </ExtLink>
              </td>
            </tr>
            <tr>
              <td data-label="Rule">Noncommercial (FAR 32.10)</td>
              <td data-label="What it allows">
                Performance-based payments, preferred when practical and the
                contractor agrees
              </td>
              <td data-label="Limit or condition">
                Not for cost-reimbursement line items or sealed bid awards;
                fully recoverable on default
              </td>
              <td data-label="Source">
                <ExtLink href="https://www.acquisition.gov/far/32.1001">
                  FAR 32.1001
                </ExtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        On commercial purchases, FAR starts from the vendor&apos;s side:
        &quot;financing of the contract is normally the contractor&apos;s
        responsibility.&quot; But &quot;the contracting officer may include
        appropriate financing terms in contracts for commercial purchases when
        doing so will be in the best interest of the Government.&quot;
        Conditions include &quot;The contract price exceeds the simplified
        acquisition threshold&quot; and &quot;Adequate security is
        obtained.&quot; (
        <ExtLink href="https://www.acquisition.gov/far/32.202-1">
          FAR 32.202-1
        </ExtLink>
        )
      </p>
      <p>
        Commercial advance payments are payments &quot;made before any
        performance of work under the contract. The aggregate of these payments
        shall not exceed 15 percent of the contract price.&quot; They are
        &quot;not subject to the interest penalty provisions of the Prompt
        Payment Act.&quot; (
        <ExtLink href="https://www.acquisition.gov/far/32.202-2">
          FAR 32.202-2
        </ExtLink>
        ) That is a different tool from upfront subscription billing.
      </p>
      <p>
        For noncommercial work, &quot;Performance-based payments are the
        preferred Government financing method when the contracting officer finds
        them practical, and the contractor agrees to their use.&quot; They are
        not used for payments under cost-reimbursement line items or contracts
        awarded through sealed bids, and they &quot;are fully recoverable, in
        the same manner as progress payments, in the event of default.&quot; (
        <ExtLink href="https://www.acquisition.gov/far/32.1001">
          FAR 32.1001
        </ExtLink>
        )
      </p>
      <p>
        The practical point: none of this is automatic. These are contract terms
        you ask for during negotiation.
      </p>

      <h2 id={H["When the schedule still leaves a gap"]}>
        When the schedule still leaves a gap
      </h2>
      <p>
        Even a well negotiated schedule leaves months of delivery cost ahead of
        cash. So most GovTech companies with long receivables end up with a
        financing tool alongside their contract terms: an early payment program
        if their agency offers one, factoring on large one-time invoices, a
        credit line, or capital backed by the signed contract. I compared those
        options in detail in{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          government contract financing for software companies
        </Link>
        .
      </p>
      <p>
        Lambda Capital is a permanent capital holding company that provides
        growth capital to vertical software companies, and GovTech is one of our
        focus areas.
      </p>
      <p>
        One closing note: a financing relationship with Lambda can also grow
        into an equity investment.
      </p>
      <p>
        If you have signed government contracts and receivables that run 90 to
        180 days, <Link href="/contact">tell us about it</Link>.
      </p>
      <p>We read every note and reply to founders directly.</p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={IMPLEMENTATION_MILESTONES_FAQ} />
    </div>
  );
}
