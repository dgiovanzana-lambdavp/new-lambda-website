import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CAPITAL_STACK_SENIORITY_POST,
  FINANCING_STRATEGY_POST,
  META_EL_PASO_FAQ,
  META_EL_PASO_HEADINGS,
  META_HYPERION_POST,
  NEOCLOUD_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  META_EL_PASO_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function MetaElPasoTexasVentureSpvPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Meta financed its El Paso AI campus through a joint venture with funds
        managed by BlackRock. It did not use ordinary Meta debt. BlackRock funds
        own 80% and Meta owns 20%. Meta leases the campus back. It backs part of
        its value. It keeps the venture off its balance sheet. The same shape
        appeared earlier at Hyperion with a different partner. For a GovTech
        founder, the lesson is simple: match the financing tool to who pays you
        and when.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Meta needed another giant AI campus. This time the site was El Paso,
        Texas. It did not want the full build sitting as ordinary debt on its
        own books. So it reused a playbook it had already run once, with a new
        capital partner.
      </p>

      <p>
        <em>
          Who this is for: founders who want a sourced walkthrough of a public
          AI data center deal. It is also for GovTech CEOs with about $1M to
          $10M in revenue who match financing tools to who pays them and when.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Funds managed by BlackRock own 80% of the Texas Venture. Meta owns
            20%.
          </li>
          <li>
            About $14 billion of development costs. Part of BlackRock&apos;s
            capital comes from a $12.5 billion debt financing.
          </li>
          <li>
            Meta leases the campus back starting in 2028 and backs about $13
            billion of residual value on this campus.
          </li>
          <li>
            Meta does not consolidate the venture. The same shape appeared
            earlier at Hyperion with Blue Owl.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        In July 2026 Meta and funds managed by BlackRock formed a venture for
        Meta&apos;s El Paso data center. BlackRock funds own 80% and Meta owns
        20%. They plan about $14 billion of development costs. Part of
        BlackRock&apos;s capital comes from a $12.5 billion debt financing.
        Meta will lease the campus starting in 2028. Meta does not consolidate
        the venture.
      </p>

      <h3>A few words you will hear</h3>
      <ul>
        <li>
          SPV (special purpose vehicle): a company set up for one project. Its
          assets and debt sit apart from the parent.
        </li>
        <li>
          Joint venture / Venture: the shared company that owns the campus.
          Meta&apos;s filings call this one the Texas Venture.
        </li>
        <li>
          VIE (variable interest entity): an accounting label for an entity the
          parent may have to consolidate. Meta says it does not consolidate
          these ventures.
        </li>
        <li>
          Off balance sheet: the venture&apos;s debt does not appear as
          Meta&apos;s own debt on Meta&apos;s balance sheet.
        </li>
        <li>
          Lease back: Meta contributes the site into the venture, then rents the
          finished campus from it.
        </li>
        <li>
          Residual value guarantee (RVG): a promise to cover a value shortfall.
          It applies if Meta ends or does not renew a lease and the campus is
          worth less than a set threshold.
        </li>
        <li>
          Pro rata: each owner funds its ownership share of costs (here, 20% Meta
          and 80% BlackRock funds).
        </li>
      </ul>

      <h2 id={H["The deal at a glance"]}>The deal at a glance</h2>
      <ul>
        <li>
          Who: Meta and funds managed by BlackRock. (
          <ExtLink href="https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Announces-New-Strategic-Venture-with-BlackRock-to-Develop-Data-Center-in-El-Paso/default.aspx">
            Meta investor press release, July 28, 2026
          </ExtLink>
          )
        </li>
        <li>Where: El Paso, Texas campus, 1 gigawatt of compute capacity.</li>
        <li>
          Ownership:{" "}
          <em>
            &quot;Funds managed by BlackRock will own an 80% interest in the
            venture, while Meta will retain the remaining 20% ownership.&quot;
          </em>
        </li>
        <li>Total cost: about $14 billion of development costs.</li>
        <li>
          Debt:{" "}
          <em>
            &quot;A portion of BlackRock&apos;s investment will be funded with
            proceeds from a $12.5 billion debt financing.&quot;
          </em>
        </li>
        <li>
          Lease:{" "}
          <em>
            &quot;Meta will enter into lease agreements with the venture for use
            of the entire data center campus.&quot;
          </em>{" "}
          The Texas lease starts in 2028.
        </li>
        <li>
          RVG:{" "}
          <em>
            &quot;Meta also will provide residual value guarantees (RVG) which
            have an aggregate threshold of approximately $13 billion that
            decreases over time.&quot;
          </em>
        </li>
        <li>
          Accounting: Meta does not consolidate the VIEs. (
          <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026066773/meta-20260930.htm">
            Meta Form 10-Q, Note 5, quarter ended September 30, 2026
          </ExtLink>
          )
        </li>
      </ul>

      <h2 id={H["Do not confuse three Meta headlines"]}>
        Do not confuse three Meta headlines
      </h2>
      <p>
        Three Meta headlines sit close together. They are not the same deal.
      </p>
      <p>
        On October 15, 2025 Meta broke ground on the El Paso campus. That post
        was about the site and jobs. It named no joint venture partner and no
        SPV debt.
      </p>
      <p>
        On October 21, 2025 Meta announced the Hyperion joint venture with funds
        managed by Blue Owl Capital in Louisiana. We walked that deal through
        here:{" "}
        <Link href={`/blog/${META_HYPERION_POST.slug}`}>
          Meta Hyperion data center financing
        </Link>
        .
      </p>
      <p>
        On July 28, 2026 Meta announced the BlackRock venture for El Paso.
        Meta&apos;s Form 10-Q calls it the Texas Venture. This post is about
        that financing.
      </p>

      <h2 id={H["Who is who"]}>Who is who</h2>
      <TableWrap caption="Table 1: Who is who">
        <table>
          <thead>
            <tr>
              <th>Party</th>
              <th>Role</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Party">Meta</td>
              <td data-label="Role">
                20% owner, contributes site, manages construction and property,
                leases campus back, provides RVG
              </td>
              <td data-label="Source">Meta IR, Form 10-Q</td>
            </tr>
            <tr>
              <td data-label="Party">Funds managed by BlackRock</td>
              <td data-label="Role">
                80% owner, investment funded in part by $12.5B debt
              </td>
              <td data-label="Source">Meta IR</td>
            </tr>
            <tr>
              <td data-label="Party">Texas Venture</td>
              <td data-label="Role">
                Owns the El Paso campus; Meta does not consolidate it
              </td>
              <td data-label="Source">Meta IR, Form 10-Q</td>
            </tr>
            <tr>
              <td data-label="Party">Debt investors</td>
              <td data-label="Role">
                Provide the $12.5B; not named in Meta&apos;s release or Form
                10-Q
              </td>
              <td data-label="Source">Meta IR</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["How the money and the lease flow"]}>
        How the money and the lease flow
      </h2>
      <p>Here is the flow in plain order.</p>
      <ol>
        <li>
          Debt investors behind the $12.5 billion (not named in Meta&apos;s
          sources) fund part of BlackRock&apos;s investment.
        </li>
        <li>
          At close, BlackRock puts in about $4.9 billion in cash. Over the
          build, both sides fund their pro rata 80/20 shares of the roughly $14
          billion cost.
        </li>
        <li>
          Meta contributes land and construction in progress. The Form 10-Q says
          $2.26 billion of held for sale assets, net of liabilities, at
          formation. The press release says about $2.3 billion.
        </li>
        <li>
          The venture pays Meta a one time distribution. The Form 10-Q says
          $1.04 billion. The press release says about $1 billion. That sets the
          80/20 split.
        </li>
        <li>
          The Texas Venture owns and builds the campus. Meta provides
          construction management, administrative and property management
          services.
        </li>
        <li>
          Meta leases the whole campus. The Texas lease starts in 2028. The
          initial term is four years, with options that can extend the total to
          20 years.
        </li>
        <li>Meta pays rent to the venture.</li>
        <li>
          Meta also provides a residual value guarantee, with about a $13
          billion threshold on this campus.
        </li>
      </ol>

      <h2 id={H["Same playbook as Hyperion, different partner"]}>
        Same playbook as Hyperion, different partner
      </h2>
      <p>
        Meta&apos;s Form 10-Q puts the link in one line:{" "}
        <em>
          &quot;The Ventures are similar in purpose, design, and risk and reward
          characteristics.&quot;
        </em>
      </p>
      <TableWrap caption="Table 2: Two Meta data center ventures">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Hyperion (Louisiana)</th>
              <th>Texas Venture (El Paso)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">Partner</td>
              <td data-label="Hyperion (Louisiana)">
                Funds managed by Blue Owl Capital
              </td>
              <td data-label="Texas Venture (El Paso)">
                Funds managed by BlackRock
              </td>
            </tr>
            <tr>
              <td data-label="">Announced</td>
              <td data-label="Hyperion (Louisiana)">Oct 2025</td>
              <td data-label="Texas Venture (El Paso)">July 2026</td>
            </tr>
            <tr>
              <td data-label="">Development costs</td>
              <td data-label="Hyperion (Louisiana)">About $27B</td>
              <td data-label="Texas Venture (El Paso)">About $14B</td>
            </tr>
            <tr>
              <td data-label="">Debt piece</td>
              <td data-label="Hyperion (Louisiana)">
                $27.3B bond (see Hyperion post)
              </td>
              <td data-label="Texas Venture (El Paso)">$12.5B debt financing</td>
            </tr>
            <tr>
              <td data-label="">Meta ownership</td>
              <td data-label="Hyperion (Louisiana)">20%</td>
              <td data-label="Texas Venture (El Paso)">20%</td>
            </tr>
            <tr>
              <td data-label="">Lease start</td>
              <td data-label="Hyperion (Louisiana)">2029</td>
              <td data-label="Texas Venture (El Paso)">2028</td>
            </tr>
            <tr>
              <td data-label="">Meta consolidates?</td>
              <td data-label="Hyperion (Louisiana)">No</td>
              <td data-label="Texas Venture (El Paso)">No</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Meta&apos;s maximum exposure across the ventures rose to $68.404 billion
        at September 30, 2026. It was $45.952 billion at December 31, 2025,
        when only Louisiana existed. The September total is combined, not Texas
        alone. It counts equity value, lease and funding commitments, and
        maximum residual value guarantees.
      </p>
      <p>
        When the only revenue is the asset itself, capital partners ask harder
        questions. That contrast is the point of our{" "}
        <Link href={`/blog/${NEOCLOUD_POST.slug}`}>neocloud financing</Link>{" "}
        post.
      </p>

      <h2 id={H["Why each party said yes"]}>Why each party said yes</h2>

      <h3>Meta</h3>
      <p>
        Meta says the venture gives it room to adapt as AI shifts. The likely
        reason under that: keep most of the build cost and project debt off
        Meta&apos;s own debt line. Meta stays the tenant and construction
        manager.
      </p>
      <p>
        The one time distribution also matters. Meta put in the site, then took
        cash out so the ownership split matched 20%. That is how the venture was
        sized at formation.
      </p>

      <h3>BlackRock funds</h3>
      <p>
        BlackRock calls itself a long term partner for AI buildouts. The likely
        reason its funds can back the deal: a lease and value guarantee tied to
        Meta as the sole initial occupant.
      </p>

      <h3>Debt investors behind the $12.5 billion</h3>
      <p>
        Meta&apos;s release and Form 10-Q do not name the buyers of the $12.5
        billion debt. Those buyers likely look first to the lease cash flows and
        the RVG package, not to Meta&apos;s other businesses.
      </p>

      <h2 id={H["The lease back and the residual value guarantee"]}>
        The lease back and the residual value guarantee
      </h2>
      <p>
        Meta leases the entire campus from the venture. The Form 10-Q says:{" "}
        <em>
          &quot;The lease agreement with the Louisiana Venture will commence in
          2029 and the lease agreement with the Texas Venture will commence in
          2028.&quot;
        </em>
      </p>
      <p>
        A four year initial lease on a multi decade campus looks short. The
        renewal options and the RVG change that picture. The financing matches a
        long lived asset to a patient capital partner, while Meta keeps the
        option to walk.
      </p>
      <p>
        Plain English on the RVG: if Meta ends or does not renew a lease in the
        first 16 years, and set conditions apply, Meta covers any gap below the
        threshold. Meta&apos;s Form 10-Q adds:{" "}
        <em>
          &quot;RVG payments are not probable, and therefore no liability has
          been recorded to date.&quot;
        </em>
      </p>

      <h2 id={H["Why Meta does not put this debt on its own balance sheet"]}>
        Why Meta does not put this debt on its own balance sheet
      </h2>
      <p>
        Meta&apos;s Form 10-Q says:{" "}
        <em>
          &quot;we are not the primary beneficiary for either Venture and,
          therefore, do not consolidate the variable interest entities
          (VIEs).&quot;
        </em>
      </p>
      <p>
        Plain English: Meta is not the primary beneficiary under the accounting
        tests it describes, so the venture stays off Meta&apos;s consolidated
        debt line. Meta still shows the exposure in a footnote table.
      </p>
      <p>
        That is disclosure, not hiding. Read the Note 5 table. Do not stop at
        the balance sheet.
      </p>

      <h2 id={H["What this means for software founders"]}>
        What this means for software founders
      </h2>
      <p>
        Start with the point our working capital post makes.{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing
          problem more often than a growth problem.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          Working capital vs growth capital for GovTech software
        </Link>
        )
      </p>
      <p>
        Meta matched a long lived campus to a partner who underwrites the lease.
        A GovTech founder matches a long receivable to a tool built for timing.
        Same idea at a different scale.
      </p>
      <ul>
        <li>
          Use contract aware timing tools if you have signed government
          contracts with known pay dates and a dated wait.
        </li>
        <li>
          Use a revolving line of credit if you have recurring dated waits
          across customers. (
          <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
            Revolving line of credit
          </Link>
          )
        </li>
        <li>
          Use loans with bullet payments if you have one large dated inflow and
          want to repay principal when it arrives. (
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet vs amortizing
          </Link>
          )
        </li>
        <li>
          Use growth capital if you have a growth problem: demand you cannot
          serve without more people, product or reach.
        </li>
      </ul>
      <p>
        Capital stack refresher:{" "}
        <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
          capital stack seniority
        </Link>
        . Strategy hub:{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>
        .
      </p>
      <p>
        Our view: the story is a repeatable SPV product, not one giant raise,
        so match your own tool to who pays you and when.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={META_EL_PASO_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${META_HYPERION_POST.slug}`}>
            Meta Hyperion data center financing
          </Link>
        </li>
        <li>
          <Link href={`/blog/${NEOCLOUD_POST.slug}`}>
            Neocloud financing and independent revenue
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
            Capital stack seniority for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software company financing strategy
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
        Lambda Capital provides growth capital to profitable software companies
        in GovTech and other vertical markets. We take a patient approach and
        invest for the long term.
      </p>
      <p>
        <Link href="/contact">Contact Lambda Capital</Link>
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
