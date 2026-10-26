import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  CAPITAL_STACK_SENIORITY_POST,
  FINANCING_STRATEGY_POST,
  META_HYPERION_FAQ,
  META_HYPERION_HEADINGS,
  TERM_LOAN_AMORTIZING_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  META_HYPERION_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function MetaHyperionPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          The $27.3 billion of bonds behind Meta&apos;s Hyperion data center are
          not Meta&apos;s debt. Meta owns 20% of the venture that owns the campus,
          will lease the campus back and guarantees part of its value, yet the
          venture stays off Meta&apos;s balance sheet.
        </strong>
      </p>
      <p>
        Meta financed its Hyperion data center in Richland Parish, Louisiana,
        through a joint venture with funds managed by Blue Owl Capital. Blue Owl
        funds own 80% and Meta owns 20%. A bond issuer on the Blue Owl side sold
        $27.3 billion of bonds. Meta will lease the campus starting in 2029 and
        guarantees part of its value, but does not consolidate the venture. A
        separate company set up to hold one project and its financing like this
        is often called a special purpose vehicle (SPV).
      </p>
      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <h2 id={H["The deal at a glance"]}>The deal at a glance</h2>
      <p>
        Meta announced the deal in a{" "}
        <ExtLink href="https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Announces-Joint-Venture-with-Funds-Managed-by-Blue-Owl-Capital-to-Develop-Hyperion-Data-Center/default.aspx">
          press release
        </ExtLink>{" "}
        dated October 21, 2025. The joint venture will develop and own the
        Hyperion data center campus. On ownership, the release says: &quot;Funds
        managed by Blue Owl Capital will own an 80% interest in the joint
        venture, while Meta will retain the remaining 20% ownership.&quot;
      </p>
      <ul>
        <li>
          <strong>Who:</strong> Meta and funds managed by Blue Owl Capital.
        </li>
        <li>
          <strong>Where:</strong> Richland Parish, Louisiana, according to
          Meta&apos;s{" "}
          <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828025047240/meta-20250930.htm">
            quarterly report for the quarter ended September 30, 2025
          </ExtLink>
          .
        </li>
        <li>
          <strong>Total cost:</strong> both owners committed to fund their pro
          rata share of approximately $27 billion in total estimated development
          costs, according to Meta&apos;s{" "}
          <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm">
            annual report for 2025
          </ExtLink>
          .
        </li>
        <li>
          <strong>Size:</strong> a 2.1 gigawatt, four million square foot facility
          slated for completion in June 2029, according to{" "}
          <ExtLink href="https://www.ifre.com/ifr-awards/2327933/financing-package-blue-owl-capitalbeignet-investors-us27.3bn-23.6-year-bond">
            International Financing Review (IFR)
          </ExtLink>
          .
        </li>
        <li>
          <strong>Debt:</strong> $27.3 billion of 6.581% senior secured bonds due
          May 2049, priced on October 16, 2025, per the same report, which named
          the bonds its Financing Package of the Year.
        </li>
        <li>
          <strong>Accounting:</strong> Meta does not consolidate the venture,
          which it treats as a variable interest entity, per its annual report.
        </li>
      </ul>

      <h2 id={H["Who is who in the deal"]}>Who is who in the deal</h2>
      <TableWrap caption="Parties and their roles in the Meta Hyperion deal">
        <table>
          <caption>Parties and their roles in the Meta Hyperion deal</caption>
          <thead>
            <tr>
              <th>Party</th>
              <th>Role in the deal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Party">Meta Platforms</td>
              <td data-label="Role in the deal">
                20% owner; construction and property manager; tenant; residual
                value guarantee provider
              </td>
            </tr>
            <tr>
              <td data-label="Party">Funds managed by Blue Owl Capital</td>
              <td data-label="Role in the deal">
                80% owner; contributed $7.0 billion in cash at closing
              </td>
            </tr>
            <tr>
              <td data-label="Party">Beignet Investor</td>
              <td data-label="Role in the deal">
                Issuer of the $27.3 billion bonds, on the Blue Owl funds side
              </td>
            </tr>
            <tr>
              <td data-label="Party">PIMCO</td>
              <td data-label="Role in the deal">
                Reported main anchor investor in the bonds
              </td>
            </tr>
            <tr>
              <td data-label="Party">BlackRock</td>
              <td data-label="Role in the deal">
                Reported buyer of more than $3 billion of the bonds
              </td>
            </tr>
            <tr>
              <td data-label="Party">Morgan Stanley</td>
              <td data-label="Role in the deal">
                Exclusive financial advisor to Meta and sole bookrunner on the
                bond offering
              </td>
            </tr>
            <tr>
              <td data-label="Party">S&amp;P Global Ratings</td>
              <td data-label="Role in the deal">
                Credit rating agency that rated the project and published its
                view of the structure
              </td>
            </tr>
            <tr>
              <td data-label="Party">Ernst &amp; Young</td>
              <td data-label="Role in the deal">
                Meta&apos;s auditor; listed the consolidation decision as a
                critical audit matter
              </td>
            </tr>
            <tr>
              <td data-label="Party">Advisers</td>
              <td data-label="Role in the deal">
                Latham &amp; Watkins (legal counsel to Meta), Eversheds
                Sutherland (Meta leasing matters), Kirkland &amp; Ellis (legal
                counsel to the Blue Owl funds), Milbank (legal counsel to Morgan
                Stanley on the securities offering), Arthur D. Little (commercial
                due diligence for Meta), Marsh (project risk analysis and
                insurance for Meta), Arup (technical and environmental independent
                engineer for Meta)
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        <em>
          Roles come from Meta&apos;s press release and filings, the bond award
          report and news reports, as cited in each section below.
        </em>
      </p>

      <h2 id={H["How the money and the lease flow"]}>
        How the money and the lease flow
      </h2>
      <figure className="blog-prose-figure">
        <img
          src="/blog/2026-10-26-diagram.svg"
          alt="Diagram of the Meta Hyperion financing: bond investors and Blue Owl funds put money in, Meta contributes the site, the venture builds the campus, Meta leases it back and its rent supports repaying the bonds."
          width={600}
          height={1040}
          className="blog-prose-figure__img"
        />
      </figure>
      <p>The diagram has six boxes.</p>
      <ul>
        <li>
          <strong>Box A, bond investors:</strong> PIMCO as main anchor investor,
          BlackRock and other investors.
        </li>
        <li>
          <strong>Box B, Beignet Investor:</strong> the bond issuer, on the Blue
          Owl funds side.
        </li>
        <li>
          <strong>Box C, funds managed by Blue Owl Capital:</strong> the 80%
          owner.
        </li>
        <li>
          <strong>Box D, the Venture:</strong> the joint venture that owns the
          campus. Meta&apos;s filings call it the Venture.
        </li>
        <li>
          <strong>Box E, Meta:</strong> the 20% owner, construction and property
          manager, and tenant.
        </li>
        <li>
          <strong>Box F, the Hyperion campus:</strong> the data center campus in
          Richland Parish, Louisiana.
        </li>
      </ul>
      <p>
        In the diagram, the dashed arrows 2 and 9 mark flows the public sources
        do not fully trace, and the dashed arrow 10 marks the residual value
        guarantee, which is paid only in certain cases. The arrows, in order:
      </p>
      <ol>
        <li>
          <strong>Bond investors to Beignet Investor (A to B):</strong> $27.3
          billion of 6.581% senior secured bonds due May 2049.
        </li>
        <li>
          <strong>Bonds fund part of the Blue Owl side (B to C):</strong>{" "}
          Meta&apos;s press release says: &quot;A portion of capital raised by
          Blue Owl will be funded by debt issued to PIMCO and select other bond
          investors through a private securities offering.&quot; The public
          sources do not show the exact path of the bond proceeds within the Blue
          Owl side.
        </li>
        <li>
          <strong>Blue Owl funds to the Venture (C to D):</strong> at closing,
          the Blue Owl affiliate contributed $7.0 billion in cash.
        </li>
        <li>
          <strong>Meta to the Venture (E to D):</strong> Meta contributed $4.30
          billion of assets, mostly land and construction in progress.
        </li>
        <li>
          <strong>The Venture to Meta (D to E):</strong> a distribution of $2.55
          billion to Meta at formation.
        </li>
        <li>
          <strong>The Venture to the campus (D to F):</strong> the Venture builds
          the campus. Meta provides construction management, administrative and
          property management services, and both owners fund their pro rata share
          of about $27 billion.
        </li>
        <li>
          <strong>The campus to Meta (F to E):</strong> Meta leases the finished
          campus. Leases start in 2029, each with an initial four year term and
          options to renew for up to 20 years in total.
        </li>
        <li>
          <strong>Meta to the Venture (E to D), rent:</strong> the aggregate
          initial lease commitment is approximately $12.31 billion.
        </li>
        <li>
          <strong>Rent and bond repayment (D to A):</strong> in the rating
          agency&apos;s view, the minimum rent level supports stable cash flows
          until the debt is fully repaid. The bonds amortize, which means
          principal is repaid over the life of the bonds. The public sources do
          not show the exact path of payments from the Venture to bondholders.
        </li>
        <li>
          <strong>
            Dashed line from Meta to the Venture (E to D), residual value
            guarantee:
          </strong>{" "}
          paid only if Meta ends or does not renew a lease and the property is
          worth less than an agreed threshold.
        </li>
      </ol>
      <p>
        Sources for the figures: Meta&apos;s press release, its quarterly and
        annual reports, the bond award report and the rating agency report, each
        cited in the sections below.
      </p>

      <h2 id={H["Who holds the debt"]}>Who holds the debt</h2>
      <p>
        The bonds were issued by Beignet Investor. IFR reports that funds managed
        by Blue Owl Capital priced the bonds through this subsidiary on October
        16, 2025. Meta&apos;s filings do not name Beignet Investor.
      </p>
      <p>
        The same report gives the public terms: $27.3 billion of 6.581% senior
        secured bonds due May 2049, rated A+, amortizing, and priced at 225 basis
        points over Treasuries. Meta&apos;s press release describes the sale as a
        private securities offering.
      </p>
      <p>
        Meta&apos;s press release names PIMCO and select other bond investors as
        buyers, and the bond award report says people familiar with the deal
        identified PIMCO as the main anchor investor.{" "}
        <ExtLink href="https://www.wsj.com/finance/investing/blackrock-etfs-among-biggest-investors-in-metas-giant-data-center-debt-deal-087fe671">
          The Wall Street Journal
        </ExtLink>{" "}
        reported: &quot;BlackRock bought more than $3 billion of bonds issued
        last week to finance the data center, which is called Hyperion, according
        to people familiar with the matter.&quot; Morgan Stanley was exclusive
        financial advisor to Meta and sole bookrunner on the offering.
      </p>
      <p>
        On the rating, the bond award report says S&amp;P Global Ratings put the
        issuer only one notch below Meta, because the joint venture contract
        passes substantial credit risk to Meta during both construction and
        operation.
      </p>
      <p>
        The bond award report also notes the contrast: weeks later, Meta raised
        $30 billion in its own regular, unsecured bond offering, which does
        appear on Meta&apos;s balance sheet. The Hyperion bonds are a separate
        issuer&apos;s debt. For background on secured debt and the order of
        repayment, see{" "}
        <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
          capital stack seniority explained
        </Link>
        .
      </p>

      <h2 id={H["The lease back"]}>The lease back</h2>
      <p>
        Meta signed operating leases with the joint venture for all of the campus
        facilities once construction is complete. According to the annual report,
        the leases will commence in 2029. Each property has an initial four year
        lease term, with options to renew for a total lease period of up to 20
        years. The aggregate initial lease commitment is approximately $12.31
        billion.
      </p>
      <p>
        Meta gives its reason for the structure, citing artificial intelligence
        (AI) markets, in its{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm">
          quarterly report for the quarter ended June 30, 2026
        </ExtLink>
        : &quot;This Venture provides strategic optionality and flexibility,
        which we expect will enable us to effectively meet future infrastructure
        capacity needs as AI markets and technologies develop.&quot;
      </p>

      <h2 id={H["The residual value guarantee"]}>
        The residual value guarantee
      </h2>
      <p>
        Meta also provided residual value guarantees (RVG) with an aggregate
        threshold of approximately $28 billion that decreases over time, per the
        annual report. The earlier quarterly report says the guarantee covers the
        first 16 years of operations.
      </p>
      <p>
        Meta describes how a payment would work: &quot;If we decide to terminate
        or not renew a lease, and if certain other conditions are met, our
        maximum RVG payment would equal any shortfall between the fair value at
        that time and the RVG threshold for that property.&quot;
      </p>
      <p>
        As of December 31, 2025, Meta said RVG payments were not probable, so no
        liability was recorded. In plain terms, the guarantee covers the gap if
        Meta walks away from a lease and the property is worth less than the
        threshold. It does not pay the bonds directly. The rating agency
        describes the guarantee as the part of the structure that addresses a
        lease that is not renewed or is terminated.
      </p>

      <h2 id={H["Construction sits with Meta"]}>Construction sits with Meta</h2>
      <p>
        Meta provides construction management, administrative and property
        management services to the Venture, according to its annual report. In
        the rating agency&apos;s view, the contract structure moves construction
        risk to Meta, including cost overruns beyond 105% of the initial budget,
        so the project does not carry it. The same rating report says the
        remaining 5% above budget was already built into the proposed financing.
      </p>

      <h2 id={H["Why the debt sits off Meta's balance sheet"]}>
        Why the debt sits off Meta&apos;s balance sheet
      </h2>
      <p>
        Under the accounting rules, a variable interest entity is consolidated by
        its primary beneficiary. Meta&apos;s auditor describes that party as the
        one with both the power to direct the activities that most significantly
        affect the entity&apos;s economic performance and a variable interest that
        could absorb significant losses or receive significant benefits.
      </p>
      <p>
        Meta&apos;s conclusion, from its annual report: &quot;We do not have the
        power to direct the activities that most significantly impact the
        Venture&apos;s economic performance. Therefore, we are not the primary
        beneficiary and do not consolidate the variable interest entity
        (VIE).&quot;
      </p>
      <p>
        Meta&apos;s later quarterly report identifies which activities mattered
        most: decisions on remarketing the data center campus, including talks
        with future lease tenants and individual property sales. Meta accounts
        for its 20% under the equity method, which means it records its share of
        the Venture&apos;s results rather than the Venture&apos;s assets and
        liabilities.
      </p>
      <p>
        Ernst &amp; Young, Meta&apos;s auditor, listed consolidation accounting
        for the variable interest entity as a critical audit matter in its report
        on the 2025 financial statements. It wrote that auditing Meta&apos;s
        determination of the primary beneficiary was especially challenging
        because of the significant judgment involved.
      </p>

      <h2 id={H["What Meta still carries"]}>What Meta still carries</h2>
      <p>
        Meta discloses the most it could lose on the Venture. From the annual
        report: &quot;Our maximum exposure to loss related to the Venture was
        $45.95 billion as of December 31, 2025, consisting of $1.83 billion
        carrying value of our equity investment, the lease commitments, our
        estimated future fundings, and the maximum RVG threshold.&quot;
      </p>
      <TableWrap caption="Meta maximum exposure to loss as of December 31, 2025">
        <table>
          <caption>
            Meta maximum exposure to loss as of December 31, 2025
          </caption>
          <thead>
            <tr>
              <th>Item, as of December 31, 2025</th>
              <th>Amount (in millions)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item, as of December 31, 2025">
                Carrying value of equity investment
              </td>
              <td data-label="Amount (in millions)">$1,826</td>
            </tr>
            <tr>
              <td data-label="Item, as of December 31, 2025">
                Lease commitments
              </td>
              <td data-label="Amount (in millions)">$12,311</td>
            </tr>
            <tr>
              <td data-label="Item, as of December 31, 2025">
                Future funding commitments
              </td>
              <td data-label="Amount (in millions)">$3,724</td>
            </tr>
            <tr>
              <td data-label="Item, as of December 31, 2025">
                Maximum residual value guarantees
              </td>
              <td data-label="Amount (in millions)">$28,091</td>
            </tr>
            <tr>
              <td data-label="Item, as of December 31, 2025">Total</td>
              <td data-label="Amount (in millions)">$45,952</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        <em>
          Source: Meta&apos;s{" "}
          <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026066773/meta-20260930.htm">
            quarterly report for the quarter ended September 30, 2026
          </ExtLink>
          , December 31, 2025 column, which covers only the Louisiana venture.
        </em>
      </p>
      <p>
        As of June 30, 2026, Meta reported a maximum exposure to loss of $46.03
        billion, with an equity investment carrying value of $2.92 billion.
      </p>
      <p>
        In my view, off balance sheet does not mean off the hook. Meta tells
        readers exactly what it could owe, and it is a large number.
      </p>

      <h2 id={H["Meta used the same model again in Texas"]}>
        Meta used the same model again in Texas
      </h2>
      <p>
        In July 2026, Meta formed a second venture in Texas, holds a 20% interest
        in it, and expects that lease to start in 2028, with about $14 billion in
        total estimated development costs. Meta&apos;s latest quarterly report
        says: &quot;The Ventures are similar in purpose, design, and risk and
        reward characteristics.&quot; Meta&apos;s exposure figures for later
        dates combine both ventures, so this post uses the Louisiana figures
        above.
      </p>

      <h2 id={H["Where the sources differ"]}>Where the sources differ</h2>
      <ul>
        <li>
          <strong>The distribution to Meta:</strong> Meta&apos;s press release
          said approximately $3 billion, and{" "}
          <ExtLink href="https://www.cnbc.com/2025/10/21/meta-blue-owl-capital-partner-on-27-billion-ai-data-center-project-.html">
            CNBC
          </ExtLink>{" "}
          reported a payout of $3 billion. Meta&apos;s quarterly report for the
          quarter ended September 30, 2025 said $2.6 billion. Meta&apos;s annual
          report says $2.55 billion, and its cash flow statement shows $2,554
          million. This post uses Meta&apos;s filing figure, $2.55 billion.
        </li>
        <li>
          <strong>Blue Owl&apos;s cash:</strong> the press release said
          approximately $7 billion, and the quarterly report says $7.0 billion.
          Same figure, different rounding. This post uses the filing figure, $7.0
          billion.
        </li>
        <li>
          <strong>The lease commitment:</strong> the earlier quarterly report
          rounds it to $12.3 billion. The annual report gives approximately $12.31
          billion, which this post uses.
        </li>
        <li>
          <strong>What Beignet Investor is:</strong> the bond award report
          describes it as a subsidiary of the Blue Owl funds, and the rating
          agency describes the financing as sitting at the joint venture partner
          level. Meta&apos;s filings do not name it. This post treats it as the
          bond issuer on the Blue Owl side.
        </li>
      </ul>

      <h2 id={H["What this means for software and infrastructure founders"]}>
        What this means for software and infrastructure founders
      </h2>
      <ol>
        <li>
          <strong>The bond buyers looked to the tenant.</strong> In my view,
          investors were underwriting Meta&apos;s lease, not a new company. The
          rating agency tied its project rating to Meta and said it would lower
          the project rating if Meta&apos;s credit quality declined. The same
          logic applies to a government technology (GovTech) company: contract
          based funding looks at the strength of the signed government contract.
          See{" "}
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            the Assignment of Claims Act explained
          </Link>
          .
        </li>
        <li>
          <strong>Off balance sheet still comes with disclosure.</strong> Meta
          reports $45.95 billion of maximum exposure. In my view, anyone reading a
          large company&apos;s financials should read the footnotes, not just the
          balance sheet.
        </li>
        <li>
          <strong>Repayment follows the cash.</strong> The Hyperion bonds
          amortize, and the rating agency sees the minimum rent as supporting
          repayment. Use an amortizing structure if your cash arrives steadily.
          Use a bullet payment loan if your cash arrives as a larger known payment
          later, such as a government receivable. Each fits a different cash
          pattern. See{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            bullet loan vs amortizing loan
          </Link>
          .
        </li>
      </ol>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={META_HYPERION_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software Company Financing Strategy: Start With Your Exit
          </Link>
        </li>
        <li>
          <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
            Capital Stack Seniority Explained for GovTech Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet Loan vs Amortizing Loan for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained for GovTech Software Companies
          </Link>
        </li>
      </ul>

      <h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>
      <p>
        Lambda Capital is a permanent capital holding company investing in
        vertical market technology that strengthens national security and core
        sectors of the economy. We take a patient approach and invest for the
        long term. GovTech contract funding is one of our lines of business.
      </p>
      <p>
        <Link href="/contact">Contact Lambda Capital</Link>
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
