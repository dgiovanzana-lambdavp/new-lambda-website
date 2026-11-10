import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import { slugifyHeading } from "@/lib/blog/slugify";
import {
  BIG_TECH_EQUITY_FAQ,
  BIG_TECH_EQUITY_HEADINGS,
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  COMMON_STOCK_FINANCING_POST,
  FINANCING_STRATEGY_POST,
  META_HYPERION_POST,
  NEOCLOUD_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  BIG_TECH_EQUITY_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function BigTechEquityRaisesPostContent() {
  return (
    <div className="blog-prose">
      <h2 id={H["Bottom line for founders"]}>Bottom line for founders</h2>

      <p>
        Alphabet did sell common stock in 2026. Its filing ties those proceeds
        to general uses that include AI infrastructure. Meta&apos;s filing for the
        first nine months shows no stock offering. Do not put every stock sale
        in the same capex bucket. AI companies do not all use the same funding
        plan.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A large AI build creates a simple question: who puts up the cash before
        the site earns it back? Selling stock is one answer. Cash from the
        business, bonds and project partners are others.
      </p>

      <p>
        The surprise is that Google and Meta took different paths in the filings
        reviewed here. To see why that matters, follow the type of money and its
        stated use. The size of a headline raise is not enough.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Alphabet raised $20.5 billion net in a public common stock offering
            and $10.0 billion net privately.
          </li>
          <li>
            Its separate $19.0 billion net preferred issue is not ordinary common
            stock. Its ATM sales mainly fund employee equity taxes.
          </li>
          <li>
            Meta&apos;s filing shows cash from operations, notes and data center
            ventures, not a stock offering in the period.
          </li>
          <li>
            Oracle, CoreWeave, Nebius and Crusoe show other routes. Keep the year,
            security and use of cash distinct.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["What Alphabet actually sold"]}>What Alphabet actually sold</h2>

      <p>
        Google&apos;s parent Alphabet did raise common equity. Common equity means a
        share of ownership in the company. Selling new shares brings cash in and
        adds owners with a claim on future value.
      </p>

      <p>
        In June 2026 Alphabet completed a public common stock offering and a
        private placement. A private placement is a sale directly to selected
        investors rather than a public sale. Its filing reports $20.5 billion net
        from the public offering and $10.0 billion net from the private placement.
      </p>

      <p>
        Net means the money left after the listed fees and expenses. These two net
        amounts total $30.5 billion. They are not the same as the separate
        preferred issue below.
      </p>

      <p>
        The{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1652044/000165204426000084/goog-20260930.htm">
          Alphabet quarterly filing, Note 11
        </ExtLink>{" "}
        states: <em>&quot;These proceeds will be used for general corporate purposes,
        including capital expenditures to scale AI infrastructure and global
        compute.&quot;</em>
      </p>

      <p>
        Capex, short for capital expenditures, is spending on assets such as
        buildings and equipment. The filing includes AI infrastructure among the
        uses. It does not say every dollar is reserved solely for data centers.
      </p>

      <h3
        id={slugifyHeading("The preferred issue belongs in its own bucket")}
      >
        The preferred issue belongs in its own bucket
      </h3>

      <p>
        Alphabet also issued mandatory convertible preferred stock in June 2026.
        This is a different class of stock that must later turn into common stock
        under its terms. It is not ordinary common equity when sold.
      </p>

      <p>
        The filing reports $19.0 billion net from that issue. It also includes AI
        infrastructure capex in the stated general corporate uses for those
        proceeds.
      </p>

      <p>
        Together, the common stock sales and preferred issue bring the listed net
        proceeds to $49.5 billion. That total mixes two types of security. Calling
        it all a common stock raise would lose a key part of the story.
      </p>

      <h3 id={slugifyHeading("The ATM is not the capex bucket")}>
        The ATM is not the capex bucket
      </h3>

      <p>
        An ATM is an at the market stock sale program. It lets a company sell
        shares into the market over time rather than in one large sale.
      </p>

      <p>
        Alphabet&apos;s stated purpose for that program is different. Its filing
        states this. <em>&quot;The proceeds from offerings under the ATM Program are
        primarily intended to be used to meet tax obligations associated with
        employee equity grants.&quot;</em>
      </p>

      <p>
        Do not add those sales to a tally of money earmarked for AI capex. The
        filing gives them a different main job. A stock sale alone does not tell
        you what the cash funds.
      </p>

      <h2 id={H["How Meta paid in the reported period"]}>
        How Meta paid in the reported period
      </h2>

      <p>
        Meta&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026066773/meta-20260930.htm">
          quarterly filing
        </ExtLink>{" "}
        shows no common stock offering for the first nine months of 2026. That is
        a reading of this filing and period. It is not a claim that Meta has never
        raised equity.
      </p>

      <p>
        Its liquidity discussion cites $96.87 billion of cash from operations and
        $24.91 billion net from notes issued in May 2026. Notes are debt: money
        raised with an obligation to repay it. Cash from operations is money
        generated by running the business.
      </p>

      <p>
        The same discussion lists $85.82 billion of capex, including finance lease
        principal. That measure includes more than purchases of property and
        equipment alone. Keep that definition when comparing it with another
        company&apos;s spending figure.
      </p>

      <p>
        Meta also uses partner owned data center ventures. Our{" "}
        <Link href={`/blog/${META_HYPERION_POST.slug}`}>
          Hyperion financing walkthrough
        </Link>{" "}
        explains one of those structures. It is not the same as Meta selling new
        common stock to fund the site.
      </p>

      <p>
        The likely reason this mix appeals to Meta is that it can combine business
        cash with outside capital. The sources show the mix. They do not prove a
        single motive for rejecting a stock sale.
      </p>

      <h2 id={H["Oracle used both stock and debt"]}>
        Oracle used both stock and debt
      </h2>

      <p>
        Oracle made its funding goal explicit in its{" "}
        <ExtLink href="https://investor.oracle.com/investor-news/news-details/2026/Oracle-announces-Equity-and-Debt-Financing-Plan-for-Calendar-Year-2026/">
          February 2026 financing plan
        </ExtLink>
        : <em>&quot;Oracle is raising money in order to build additional capacity to
        meet the contracted demand from our largest Oracle Cloud Infrastructure
        customers&quot;</em>.
      </p>

      <p>
        It planned $45 billion to $50 billion of gross cash proceeds in calendar
        2026. Gross means before the relevant fees and costs. A plan is not proof
        that the whole sum has closed.
      </p>

      <p>
        Oracle proposed a mix of bonds, mandatory convertible preferred and common
        stock sales through an ATM. Its stated aim included keeping an investment
        grade balance sheet. That means maintaining credit quality viewed as
        suitable for investment grade debt.
      </p>

      <p>
        Its{" "}
        <ExtLink href="https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Fiscal-Year-2026-Third-Quarter-Financial-Results/default.aspx">
          March results release
        </ExtLink>{" "}
        then reported $30 billion raised through a mix of bonds and mandatory
        convertible preferred. That was a combined amount, not $30 billion of
        common equity.
      </p>

      <p>
        The{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm">
          filing for the quarter ended August 31, 2026
        </ExtLink>{" "}
        reports that Oracle fully used its ATM. It sold 141 million common shares
        for $19.9 billion net.
      </p>

      <p>
        Oracle says those ATM proceeds are for general corporate purposes, which
        may include capex. That is broader than a promise to put all of the money
        into one AI campus. It is also not Alphabet&apos;s employee tax purpose.
      </p>

      <h2 id={H["Three AI builders, three different equity events"]}>
        Three AI builders, three different equity events
      </h2>

      <p>
        CoreWeave, Nebius and Crusoe add useful examples. But they do not belong
        in one undated list of 2026 public common stock offerings.
      </p>

      <TableWrap caption="Three AI builders, three different equity events">
        <table>
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Event</th>
              <th scope="col">Amount and basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Company">CoreWeave</td>
              <td data-label="Event">March 2025 IPO</td>
              <td data-label="Amount and basis">About $1.4B net, before offering costs</td>
            </tr>
            <tr>
              <td data-label="Company">Nebius</td>
              <td data-label="Event">September 2025 share pricing</td>
              <td data-label="Amount and basis">$1B offering; $979.5M estimated net</td>
            </tr>
            <tr>
              <td data-label="Company">Crusoe</td>
              <td data-label="Event">September 2026 private round</td>
              <td data-label="Amount and basis">
                Initial closing of anticipated $3.9B round
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3 id={slugifyHeading("CoreWeave went public in 2025")}>
        CoreWeave went public in 2025
      </h3>

      <p>
        An IPO is the first public stock offering. CoreWeave&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1769628/000176962825000014/R8.htm">
          IPO note
        </ExtLink>{" "}
        reports about $1.4 billion net from its March 2025 sale.
      </p>

      <p>
        There is a detail worth keeping. That figure is after underwriting
        discounts and commissions. It is before $31 million of offering costs. It
        is not a 2026 raise. Nor does this note alone establish that all proceeds
        went to new data centers.
      </p>

      <h3 id={slugifyHeading("Nebius priced shares alongside notes")}>
        Nebius priced shares alongside notes
      </h3>

      <p>
        The{" "}
        <ExtLink href="https://nebius.com/newsroom/nebius-group-announces-pricing-of-1-billion-public-offering-of-class-a-ordinary-shares">
          Nebius release
        </ExtLink>{" "}
        announced pricing of a $1 billion common share offering in September 2025.
        It estimated $979.5 million net, before any exercise of the additional
        purchase option.
      </p>

      <p>
        It described uses for the share and concurrent note proceeds together.
        These included compute hardware, land, data center expansion and general
        purposes. That is a stated use for a mixed funding package, not proof that
        the entire gross share amount became capex.
      </p>

      <h3
        id={slugifyHeading(
          "Crusoe announced a private round's initial closing",
        )}
      >
        Crusoe announced a private round&apos;s initial closing
      </h3>

      <p>
        The{" "}
        <ExtLink href="https://www.crusoe.ai/resources/newsroom/crusoe-announces-series-f-funding">
          Crusoe release
        </ExtLink>{" "}
        announced the initial closing of its anticipated $3.9 billion Series F in
        September 2026. Series F is the name of a private funding round. It is not
        an IPO or a public ATM.
      </p>

      <p>
        The stated purpose includes building its own AI factories and scaling its
        cloud. Keep the words initial closing and anticipated. They do not
        establish that the full expected round was already received.
      </p>

      <h2 id={H["Why the capital mix matters"]}>
        Why the capital mix matters
      </h2>

      <p>
        The likely appeal of equity for a builder is room to grow before cash
        returns on a set date. Investors take an ownership claim rather than a
        promise of principal repayment. The cost of that choice is shared ownership,
        not a free build.
      </p>

      <p>
        The likely appeal of debt is money matched to cash that can pay it back.
        But contracted demand does not mean a company must use debt alone.
        Oracle&apos;s stated plan pairs that demand with both debt and equity.
      </p>

      <p>
        The{" "}
        <Link href={`/blog/${NEOCLOUD_POST.slug}`}>
          neocloud financing discussion
        </Link>{" "}
        explores the cash source behind a project. That question is more useful
        than assuming every AI builder should copy a large platform&apos;s balance
        sheet.
      </p>

      <p>
        Our view: the use of proceeds matters as much as the word equity, because
        an employee tax stock sale and an AI build are different funding jobs.
      </p>

      <h2 id={H["Read the cash line before the headline"]}>
        Read the cash line before the headline
      </h2>

      <p>
        Ask three short questions. Is this a plan, a priced sale or cash already
        raised? Is the amount before fees or after them? What does the source say
        the cash is for?
      </p>

      <p>
        Those checks keep the story straight. A big number is not a budget for one
        site. A stock sale can pay a tax bill. A debt issue can sit next to an
        equity raise in the same plan.
      </p>

      <h2 id={H["What a software founder can take from this"]}>
        What a software founder can take from this
      </h2>

      <p>
        A GovTech software owner with $1M to $10M in revenue need not copy a
        billion dollar issue. Name the job the money must do. Then ask when cash
        comes back and what supports that view.
      </p>

      <p>
        Our working capital post puts it this way.{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing problem
          more often than a growth problem.&quot;
        </em>{" "}
        See{" "}
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          working capital vs growth capital
        </Link>
        .
      </p>

      <p>
        Use a{" "}
        <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
          revolving line of credit
        </Link>{" "}
        if you have recurring dated waits on signed contracts. Use{" "}
        <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
          loans with bullet payments
        </Link>{" "}
        if you have one large dated cash inflow.
      </p>

      <p>
        Use growth capital or equity if you need to build capacity whose payoff is
        not yet on a firm cash schedule. Our{" "}
        <Link href={`/blog/${COMMON_STOCK_FINANCING_POST.slug}`}>
          common stock financing guide
        </Link>{" "}
        explains that ownership choice at a smaller scale.
      </p>

      <p>
        Do not start with the biggest raise you saw in the news. Start with the
        cash need. As our{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          cash flow gap guide
        </Link>{" "}
        says: <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em>
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={BIG_TECH_EQUITY_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
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
        <li>
          <Link href={`/blog/${COMMON_STOCK_FINANCING_POST.slug}`}>
            Common stock financing for GovTech software
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
