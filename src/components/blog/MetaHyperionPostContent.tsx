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
      <h2 id={H["The bottom line for founders"]}>
        The bottom line for founders
      </h2>
      <p>
        Each piece of this deal answers one party&apos;s need. Meta wanted
        flexibility through short leases; investors wanted a guarantee and Meta
        on the build risk.
      </p>
      <p>
        Bond buyers looked to the tenant&apos;s credit, not to a new company
        alone. Off balance sheet does not mean hidden; read the footnotes.
      </p>

      <p>
        The $27.3 billion of bonds behind Meta&apos;s Hyperion data center are
        not Meta&apos;s debt. Meta owns 20% of the venture that owns the campus,
        will lease it back and guarantees part of its value. Yet the venture
        stays off Meta&apos;s balance sheet.
      </p>
      <p>
        Meta needed a giant data center in Louisiana. It got one without adding
        the build&apos;s debt to its own books. This is the story of how it did
        that, and why each side said yes.
      </p>
      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <blockquote>
        <p>The short version</p>
        <ul>
          <li>
            Funds managed by Blue Owl Capital own 80% of the venture that owns
            the campus. Meta owns 20%.
          </li>
          <li>
            Beignet Investor, on the Blue Owl side, sold $27.3 billion of bonds
            due May 2049.
          </li>
          <li>
            Meta will lease the campus starting in 2029 and guarantees part of
            its value.
          </li>
          <li>
            Meta does not consolidate the venture, but it reports a maximum
            exposure to loss of $45.95 billion.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["Meta's problem: a huge build and an uncertain future"]}>
        Meta&apos;s problem: a huge build and an uncertain future
      </h2>
      <p>
        Meta is building Hyperion in Richland Parish, Louisiana. It is a 2.1
        gigawatt, four million square foot campus slated for completion in June
        2029, according to{" "}
        <ExtLink href="https://www.ifre.com/ifr-awards/2327933/financing-package-blue-owl-capitalbeignet-investors-us27.3bn-23.6-year-bond">
          International Financing Review (IFR)
        </ExtLink>
        .
      </p>
      <p>
        The bill is about $27 billion in total estimated development costs, per
        Meta&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm">
          annual report for 2025
        </ExtLink>
        . So Meta needed tens of billions of dollars for one project.
      </p>
      <p>
        It also did not know how much space it would need later. On the{" "}
        <ExtLink href="https://s21.q4cdn.com/399680738/files/doc_financials/2025/q3/META-Q3-2025-Earnings-Call-Transcript.pdf">
          October 29, 2025 earnings call
        </ExtLink>
        , chief financial officer Susan Li pointed to{" "}
        <em>
          &quot;the magnitude, but also uncertainty of what the capacity outlook
          in future years looks like.&quot;
        </em>
      </p>

      <h2 id={H["Three ways to pay for it"]}>Three ways to pay for it</h2>
      <p>
        Meta had three broad choices. It could pay cash, borrow in its own name,
        or bring in a partner.
      </p>

      <h3>Pay cash</h3>
      <p>
        Paying cash would put the whole build in CapEx, as Meta&apos;s own
        spending on the site did before the venture existed. CapEx, or capital
        expenditure, is what a company spends on long lived assets such as
        buildings.
      </p>
      <p>
        Meta has not said why it passed on this. The likely reason: it did not
        want to carry all of a huge, uncertain bet alone.
      </p>

      <h3>Borrow in its own name</h3>
      <p>
        Meta could have sold its own bonds. Weeks after this deal, it did raise
        $30 billion in its own regular, unsecured bond sale. That debt does
        appear on Meta&apos;s balance sheet.
      </p>
      <p>
        The Hyperion bonds will not, IFR notes. Meta has not called that a goal.
      </p>
      <p>
        Most likely it mattered because Meta keeps its reported debt lower and
        its own borrowing room free. That can help protect its credit rating.
      </p>

      <h3>Bring in a partner</h3>
      <p>
        That&apos;s where Blue Owl came in. Li said the deal{" "}
        <em>
          &quot;enabled us to partner with external capital providers&quot;
        </em>{" "}
        to develop data centers together{" "}
        <em>
          &quot;in a way that gives us long term optionality in supporting our
          future capacity needs&quot;
        </em>
        .
      </p>
      <p>
        She added:{" "}
        <em>
          &quot;Going forward, the construction cost of the data center will not
          be recorded in CapEx.&quot;
        </em>{" "}
        So a partner pays most of the bill, and Meta keeps room to change course.
      </p>

      <h2 id={H["How the Meta Hyperion data center financing works"]}>
        How the Meta Hyperion data center financing works
      </h2>
      <p>
        Meta announced the deal in a{" "}
        <ExtLink href="https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Announces-Joint-Venture-with-Funds-Managed-by-Blue-Owl-Capital-to-Develop-Hyperion-Data-Center/default.aspx">
          press release
        </ExtLink>{" "}
        on October 21, 2025. It says:{" "}
        <em>
          &quot;Funds managed by Blue Owl Capital will own an 80% interest in the
          joint venture, while Meta will retain the remaining 20%
          ownership.&quot;
        </em>
      </p>
      <p>
        A joint venture is a company that two or more owners set up together.
        Both owners fund their pro rata share of the build, meaning a share in
        line with what each owns.
      </p>

      <h3>Who put in what</h3>
      <p>
        At closing, Blue Owl&apos;s side put in $7.0 billion in cash, per
        Meta&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828025047240/meta-20250930.htm">
          quarterly report for the quarter ended September 30, 2025
        </ExtLink>
        . Meta put in $4.30 billion of assets, net of liabilities, mostly land
        and construction in progress, per its annual report.
      </p>
      <p>
        Then the venture paid Meta a distribution of $2.55 billion. The next
        section explains why.
      </p>

      <h3>Where the bonds come in</h3>
      <p>
        Part of Blue Owl&apos;s money is borrowed. Beignet Investor, on the Blue
        Owl side, sold $27.3 billion of bonds. A bond is a loan from investors
        that the issuer pays back with interest.
      </p>
      <p>
        The press release says:{" "}
        <em>
          &quot;A portion of capital raised by Blue Owl will be funded by debt
          issued to PIMCO and select other bond investors through a private
          securities offering.&quot;
        </em>
      </p>
      <p>
        The two big numbers count different things. The roughly $27 billion is
        the total development cost for the campus buildings and infrastructure,
        per the press release. The $27.3 billion is the size of the bond sale
        that Blue Owl&apos;s funds made through their subsidiary Beignet Investor,
        per IFR. None of these sources says how the bond money and the equity are
        split, so this post does not guess.
      </p>

      <h3>Then Meta rents it back</h3>
      <p>
        Once the campus is built, Meta leases it from the venture. These are
        operating leases. An operating lease is a rental agreement: the tenant
        uses the property but does not own it.
      </p>
      <p>Meta&apos;s rent then supports paying back the bonds.</p>
      <figure className="blog-prose-figure">
        <img
          src="/blog/2026-10-26-diagram.svg"
          alt="Diagram of the Meta Hyperion financing: bond investors and Blue Owl funds put money in, Meta contributes the site, the venture builds the campus, Meta leases it back and its rent supports repaying the bonds."
          width={600}
          height={1040}
          className="blog-prose-figure__img"
        />
      </figure>

      <h3>The deal at a glance</h3>
      <ul>
        <li>
          <strong>Bonds:</strong> $27.3 billion of 6.581% senior secured bonds
          due May 2049, rated A+, priced on October 16, 2025. Senior secured
          bonds are backed by assets and are repaid ahead of other debt.
        </li>
        <li>
          <strong>Repayment:</strong> the bonds amortize, which means principal
          is repaid over the life of the bonds.
        </li>
        <li>
          <strong>Buyers:</strong> PIMCO was reported as the main anchor
          investor, or lead buyer.{" "}
          <ExtLink href="https://www.wsj.com/finance/investing/blackrock-etfs-among-biggest-investors-in-metas-giant-data-center-debt-deal-087fe671">
            The Wall Street Journal
          </ExtLink>{" "}
          reported:{" "}
          <em>
            &quot;BlackRock bought more than $3 billion of bonds issued last week
            to finance the data center, which is called Hyperion, according to
            people familiar with the matter.&quot;
          </em>
        </li>
        <li>
          <strong>Bank:</strong> Morgan Stanley was exclusive financial advisor
          to Meta and sole bookrunner, the bank that runs the bond sale.
        </li>
        <li>
          <strong>Leases:</strong> start in 2029, each with an initial four year
          term and options to renew for up to 20 years in total. The aggregate
          initial lease commitment is approximately $12.31 billion.
        </li>
        <li>
          <strong>Others:</strong> Ernst &amp; Young is Meta&apos;s auditor.
          Legal, diligence, insurance and engineering advisers are listed in
          Meta&apos;s press release.
        </li>
      </ul>
      <p>
        IFR named the bonds its Financing Package of the Year. A few figures vary
        by source, such as the distribution to Meta (approximately $3 billion in
        the press release, $2.55 billion in the annual report). This post uses
        Meta&apos;s filing figures throughout.
      </p>

      <h2 id={H["Why each party said yes"]}>Why each party said yes</h2>
      <p>
        Every party gave something up and got something back. Here is what each
        one got.
      </p>

      <h3>Meta: flexibility and its cash back</h3>
      <p>
        Short leases let Meta decide later how much space it needs. The press
        release says each lease starts with a four year term, with options to
        extend, which gives Meta strategic flexibility over the long term.
      </p>
      <p>
        Then there is the $2.55 billion. Meta had started building before the
        venture existed. Li said Meta&apos;s{" "}
        <em>
          &quot;prior CapEx reflected a portion of the data center build cost
          prior to the joint venture being established.&quot;
        </em>
      </p>
      <p>
        On Meta&apos;s own figures, the $4.30 billion of assets, net of
        liabilities, that it put in was more than its 20% share. Meta has not
        explained the amount, but evening out what each owner put in is the
        likely reason. Meta&apos;s own figures fit:
      </p>
      <ul>
        <li>$4.30 billion minus $2.55 billion leaves $1.75 billion.</li>
        <li>
          Add Blue Owl&apos;s $7.0 billion, and the total is $8.75 billion.
        </li>
        <li>$1.75 billion is 20% of that, matching Meta&apos;s stake.</li>
      </ul>
      <p>
        In effect, Meta most likely got back cash it had already spent on the
        site, beyond its 20% share.
      </p>

      <h3>Blue Owl: a big project with a strong tenant</h3>
      <p>
        The press release credits Blue Owl with{" "}
        <em>&quot;its ability to deliver substantial capital at scale&quot;</em>.
        Its funds get 80% of the venture that will collect Meta&apos;s rent.
      </p>
      <p>
        Blue Owl&apos;s leaders were also upbeat about AI infrastructure in
        general. On Blue Owl&apos;s second quarter 2025 earnings call, before
        this deal was announced, Marc Lipschultz, one of its two chief
        executives, said demand for capital to build AI infrastructure had
        created, for its real estate funds, the best setup of risk and reward
        that its leaders had seen in their careers,{" "}
        <ExtLink href="https://pitchbook.com/news/articles/meta-blue-owl-data-center-jv-puts-investor-protections-in-the-spotlight">
          PitchBook
        </ExtLink>{" "}
        reported. That remark was not about this deal.
      </p>
      <p>
        Why 80/20 and not 50/50? Meta has not said. Probably it is the accounting
        test covered below: to keep the venture off its books, Meta must not hold
        the power over the key decisions.
      </p>

      <h3>The bond buyers: Meta&apos;s credit and steady repayment</h3>
      <p>
        S&amp;P Global Ratings put the issuer only one notch below Meta, IFR
        reports. A notch is one step on the rating scale. The rating agency&apos;s
        reason: the contract passes substantial credit risk to Meta during both
        construction and operation.
      </p>
      <p>
        One investor called the amortizing feature{" "}
        <em>&quot;extremely attractive&quot;</em> in IFR&apos;s report. The
        person said:{" "}
        <em>
          &quot;The debt gets repaid over time even if AI/data centres have
          issues in the future.&quot;
        </em>
      </p>
      <p>
        The bonds also paid 225 basis points over Treasuries. A basis point is
        one hundredth of a percentage point, and Treasuries are U.S. government
        bonds.
      </p>

      <h3>Why bonds, not a bank loan</h3>
      <p>
        Morgan Stanley ran a competitive auction, over several rounds, to select
        equity and debt capital partners, IFR reports. Bank financing during
        construction was another option.
      </p>
      <p>
        The bond locked in the money early. Teddy Hodgson, one of the global
        heads of investment grade debt capital markets at Morgan Stanley, told
        IFR:{" "}
        <em>
          &quot;Meta&apos;s price and size outcome was derisked a significant
          number of months ahead of the pricing date in October&quot;
        </em>
        .
      </p>
      <p>
        Derisked here means the price and size were settled early, so market
        swings mattered less.
      </p>

      <h3>The construction side: Meta takes the build risk</h3>
      <p>
        Meta provides construction management, administrative and property
        management services to the venture. Its press release says{" "}
        <em>
          &quot;Meta has 15 years of experience developing, constructing and
          operating world class data center facilities.&quot;
        </em>
      </p>
      <p>
        In the rating agency&apos;s view, the contract moves construction risk to
        Meta, including cost overruns beyond 105% of the initial budget. Overruns
        up to 5% above budget were already built into the financing.
      </p>

      <h2 id={H["Here's the catch: the risks"]}>
        Here&apos;s the catch: the risks
      </h2>
      <p>
        The short leases help Meta and worry investors. The guarantee is how Meta
        closes that gap.
      </p>

      <h3>Short leases cut both ways</h3>
      <p>
        Short leases are a risk for the owners and bondholders. After the first
        four years, Meta could leave.
      </p>
      <p>
        PitchBook quoted a managing director at S&amp;P Global Ratings. In his
        view, Meta wants the option to walk away if its strategy or its approach
        to AI training changes, or if the AI market turns.
      </p>

      <h3>The guarantee is Meta&apos;s answer</h3>
      <p>
        The press release says Meta balanced this optionality in a cost efficient
        way: it{" "}
        <em>
          &quot;provided the joint venture with a residual value guarantee for
          the first 16 years of operations&quot;
        </em>
        .
      </p>
      <p>
        In plain terms, Meta covers the gap if it walks away from a lease, the
        property is worth less than an agreed threshold and certain other
        conditions are met. The guarantee does not pay the bonds directly. The
        aggregate threshold is approximately $28 billion and decreases over time.
      </p>
      <p>
        As of December 31, 2025, Meta said guarantee payments were not probable.
        So no liability was recorded.
      </p>

      <h3>Off the balance sheet, not off the hook</h3>
      <p>
        Under the accounting rules, a variable interest entity is consolidated by
        its primary beneficiary. To consolidate means to add the entity&apos;s
        assets and debts to your own financial statements.
      </p>
      <p>
        Meta&apos;s annual report says:{" "}
        <em>
          &quot;We do not have the power to direct the activities that most
          significantly impact the Venture&apos;s economic performance.
          Therefore, we are not the primary beneficiary and do not consolidate
          the variable interest entity (VIE).&quot;
        </em>
      </p>
      <p>
        Meta&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026066773/meta-20260930.htm">
          2026 quarterly reports
        </ExtLink>{" "}
        say the decisions that matter most are on remarketing the campus,
        including talks with future tenants and property sales. In the annual
        report, Meta&apos;s auditor called this consolidation question a critical
        audit matter because of the significant judgment involved.
      </p>

      <h3>What Meta could still owe</h3>
      <p>
        Meta still tells readers the most it could lose. Its maximum exposure to
        loss was $45.95 billion as of December 31, 2025. Carrying value is the
        amount shown on Meta&apos;s books.
      </p>
      <TableWrap caption="Meta maximum exposure to loss as of December 31, 2025">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount (millions)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Item">Equity investment, carrying value</td>
              <td data-label="Amount (millions)">$1,826</td>
            </tr>
            <tr>
              <td data-label="Item">Lease commitments</td>
              <td data-label="Amount (millions)">$12,311</td>
            </tr>
            <tr>
              <td data-label="Item">Future funding commitments</td>
              <td data-label="Amount (millions)">$3,724</td>
            </tr>
            <tr>
              <td data-label="Item">Maximum residual value guarantees</td>
              <td data-label="Amount (millions)">$28,091</td>
            </tr>
            <tr>
              <td data-label="Item">Total</td>
              <td data-label="Amount (millions)">$45,952</td>
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
          , December 31, 2025 column. That column covers only the Louisiana
          venture.
        </em>
      </p>
      <p>
        Meta has since done it again. In July 2026 it formed a second venture in
        Texas and holds 20% of it. Its latest quarterly report says:{" "}
        <em>
          &quot;The Ventures are similar in purpose, design, and risk and reward
          characteristics.&quot;
        </em>
      </p>

      <h2 id={H["What a smaller company owner can take from it"]}>
        What a smaller company owner can take from it
      </h2>
      <p>
        The same question works at any size. What does each party need, and what
        does it give up to get it? A smaller company owner can ask that before
        choosing how to fund a big project.
      </p>

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
