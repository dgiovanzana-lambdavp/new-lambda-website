import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import { slugifyHeading } from "@/lib/blog/slugify";
import {
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  DATA_CENTER_LEASE_FAQ,
  DATA_CENTER_LEASE_HEADINGS,
  FINANCING_STRATEGY_POST,
  META_HYPERION_POST,
  NEOCLOUD_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  DATA_CENTER_LEASE_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function DataCenterLeaseCommitmentsPostContent() {
  return (
    <div className="blog-prose">
      <h2 id={H["Bottom line for founders"]}>Bottom line for founders</h2>

      <p>
        Alphabet, Meta and Oracle report large lease commitments that have not
        started yet. Our math adds their listed sums to about $774 billion, but
        the dates and asset scopes differ. This is not one clean total for data
        centers alone. Read what was signed, when it starts and what cash must
        meet it.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        A company can sign for years of space before it can use the site. The
        bill is real enough to plan for, but the lease has not started. If we
        look only at today&apos;s balance sheet, we miss that next chapter.
      </p>

      <p>
        The tension is not whether the figures are hidden. These companies show
        them in their notes. The useful question is how signed future costs line
        up with future cash.
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Alphabet reports $130.5 billion and Meta about $355.73 billion at
            September 30, 2026.
          </li>
          <li>
            Oracle reports $288 billion at August 31, 2026. Our sum is $774.23
            billion, rounded to about $774 billion.
          </li>
          <li>
            The scopes differ. Meta and Alphabet include infrastructure beyond
            data centers.
          </li>
          <li>
            Guarantees and future revenue are separate measures. Neither turns
            this sum into automatic debt or expected loss.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["Signed does not mean started"]}>Signed does not mean started</h2>

      <p>
        A lease commitment is a promise to make future payments under a lease. A
        lease starts when the tenant can use the asset. Signing can happen before
        that point.
      </p>

      <p>
        A recognized lease liability is the amount recorded on the balance sheet
        under lease accounting. It reflects the lease payments under those rules,
        including discounting. Discounting puts future cash payments into a value
        for today.
      </p>

      <p>
        That is different from simply adding every future rent check. The filings
        here list extra leases that have not started, apart from the lease
        liabilities already recorded. This is a timing distinction in the
        accounts, not proof of evasion.
      </p>

      <p>
        The likely reason a builder signs early is to secure capacity before the
        site is ready. But that motive is an inference, not a stated reason for
        every contract in these filings. The disclosed numbers tell us the size
        of the promise, not each site&apos;s business case.
      </p>

      <h2 id={H["Three filings, not one uniform measure"]}>
        Three filings, not one uniform measure
      </h2>

      <p>
        Here are the listed sums for leases not yet commenced. The table keeps
        the dates attached to each figure.
      </p>

      <TableWrap caption="Leases not yet commenced by company">
        <table>
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Reporting date</th>
              <th scope="col">Not yet commenced</th>
              <th scope="col">Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Company">Alphabet</td>
              <td data-label="Reporting date">Sep 30, 2026</td>
              <td data-label="Not yet commenced">$130.5B</td>
              <td data-label="Scope">Mainly data centers and energy</td>
            </tr>
            <tr>
              <td data-label="Company">Meta</td>
              <td data-label="Reporting date">Sep 30, 2026</td>
              <td data-label="Not yet commenced">About $355.73B</td>
              <td data-label="Scope">Several infrastructure types</td>
            </tr>
            <tr>
              <td data-label="Company">Oracle</td>
              <td data-label="Reporting date">Aug 31, 2026</td>
              <td data-label="Not yet commenced">$288B</td>
              <td data-label="Scope">Substantially all data centers</td>
            </tr>
            <tr>
              <td data-label="Company">Our math</td>
              <td data-label="Reporting date">Mixed dates</td>
              <td data-label="Not yet commenced">$774.23B</td>
              <td data-label="Scope">Mixed scopes</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Our math: $130.5 billion plus $355.73 billion plus $288 billion equals
        $774.23 billion. Rounded, that is about $774 billion. It is our sum of
        three disclosures, not a figure reported by one company.
      </p>

      <p>
        It is not a measure of all big tech commitments. Nor is it a total of
        future AI spending. It covers the lease sums below, with different dates
        and scopes.
      </p>

      <h3 id={slugifyHeading("Alphabet: mostly data centers and energy")}>
        Alphabet: mostly data centers and energy
      </h3>

      <p>
        Alphabet&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1652044/000165204426000084/goog-20260930.htm">
          September 2026 quarterly filing, lease note
        </ExtLink>{" "}
        says:{" "}
        <em>
          &quot;we have entered into leases, primarily related to data centers
          and energy infrastructure, that have not yet commenced with future lease
          payments of $ 130.5 billion that are not yet recorded.&quot;
        </em>
      </p>

      <p>
        The filing says those leases start between 2026 and 2031. Their terms
        range from one to 26 years. Mostly data centers and energy does not mean
        exclusively data center buildings.
      </p>

      <p>
        Alphabet separately reports recorded operating lease liabilities of
        $20.508 billion and finance lease liabilities of $3.705 billion.
        Operating and finance are two accounting classes of lease. Together they
        total $24.213 billion, or about $24.2 billion.
      </p>

      <p>
        Those recorded amounts are not an extra component in our $774 billion
        sum. They are a separate line. We do not treat a ratio between
        undiscounted future payments and recorded liabilities as a clean measure
        of debt growth.
      </p>

      <h3 id={slugifyHeading("Meta: a broader infrastructure scope")}>
        Meta: a broader infrastructure scope
      </h3>

      <p>
        Meta&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1326801/000162828026066773/meta-20260930.htm">
          September 2026 quarterly filing, leases and promises under contracts
        </ExtLink>{" "}
        describes operating and finance leases that have not started. It states:{" "}
        <em>&quot;These lease obligations were approximately $ 355.73 billion&quot;</em>.
      </p>

      <p>
        That scope includes data centers, energy infrastructure, colocations and
        network infrastructure. Colocation means space for equipment in a shared
        facility. It is broader than a count of stand alone AI campuses.
      </p>

      <p>
        These leases are due to start from the rest of 2026 through 2036. The
        terms range from more than one year to 30 years. We do not use those end
        points to guess an average rent bill.
      </p>

      <p>
        Meta also discloses other promises under contracts, separate from this
        lease discussion. A purchase commitment is a promise to buy goods or
        services, not necessarily a lease. Adding every such line to our lease
        sum would change what we were measuring.
      </p>

      <h3 id={slugifyHeading("Oracle: substantially all data center arrangements")}>
        Oracle: substantially all data center arrangements
      </h3>

      <p>
        Oracle&apos;s{" "}
        <ExtLink href="https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm">
          August 2026 quarterly filing, lease note
        </ExtLink>{" "}
        states:{" "}
        <em>
          &quot;we had $ 288 billion of additional lease commitments,
          substantially all related to data center arrangements&quot;
        </em>
        .
      </p>

      <p>
        The leases are generally expected to start between the second quarter of
        fiscal 2027 and fiscal 2029. Their terms run fifteen to nineteen years.
        These are fiscal year references from Oracle&apos;s filing, not a calendar
        year forecast we have made.
      </p>

      <p>
        Oracle separately lists recorded operating lease liabilities of $34.621
        billion and finance lease liabilities of $9.185 billion. Our addition
        gives $43.806 billion, or about $43.8 billion. Again, that recorded sum
        stays outside our total of leases not yet commenced.
      </p>

      <h2
        id={
          H["Meta's guarantee is another layer, not another rent total"]
        }
      >
        Meta&apos;s guarantee is another layer, not another rent total
      </h2>

      <p>
        Meta&apos;s venture note says:{" "}
        <em>
          &quot;In addition, we have provided residual value guarantees (RVG) to
          each of the Ventures.&quot;
        </em>
      </p>

      <p>
        A residual value guarantee is a promise to cover a value shortfall under
        specified conditions. Residual value is what an asset is worth at a later
        point. A maximum guarantee amount is a ceiling on exposure, not a
        forecast of cash that will be paid.
      </p>

      <p>
        Meta&apos;s table for its unconsolidated data center ventures lists
        $41.493 billion of maximum residual value guarantees at September 30,
        2026. Unconsolidated means the venture&apos;s accounts are not combined
        line by line into Meta&apos;s own accounts.
      </p>

      <p>
        The same table totals maximum exposure of $68.404 billion. It includes
        the guarantee amount, $18.476 billion of lease commitments, $3.703
        billion of future funding promises and $4.732 billion of equity carrying
        value. Carrying value is the investment amount on the books.
      </p>

      <p>
        Do not add $41.493 billion to $68.404 billion: the guarantee is already
        inside that total. Do not add either amount to our $774 billion lease sum.
        We have not established a separate bucket with no overlap that would
        support that addition.
      </p>

      <p>
        The table is maximum exposure across those ventures, not Texas alone. It
        is neither expected losses nor debt automatically due today. Our{" "}
        <Link href={`/blog/${META_HYPERION_POST.slug}`}>
          Hyperion financing walkthrough
        </Link>{" "}
        explains how a venture and a guarantee fit together.
      </p>

      <h2 id={H["Oracle's revenue promise is not cash in hand"]}>
        Oracle&apos;s revenue promise is not cash in hand
      </h2>

      <p>
        A cost commitment has another side: what will pay for it? Oracle&apos;s
        filing says:{" "}
        <em>
          &quot;Remaining performance obligations were $ 664 billion as of August
          31, 2026&quot;
        </em>
        .
      </p>

      <p>
        Remaining performance obligations, or RPO, means contracted revenue still
        to be earned under that accounting rule. It is not cash already collected.
        It is also not a label for revenue from just the leased sites in this
        table.
      </p>

      <p>
        Oracle expects about 13% to become revenue in the next twelve months. Most
        is expected later. That timing matters more than a simple claim that the
        revenue total exceeds the lease total.
      </p>

      <p>
        We do not divide $664 billion by $288 billion and call it coverage. One
        number is future revenue across Oracle&apos;s reported work still to be
        done. The other is a subset of future rent costs, with its own schedule.
        Revenue is not profit or cash available after all other costs.
      </p>

      <p>
        The likely attraction of signed demand is a clearer basis for planning
        than hoped for sales alone. But it does not remove build, timing or cash
        collection risk. Our{" "}
        <Link href={`/blog/${NEOCLOUD_POST.slug}`}>
          neocloud financing discussion
        </Link>{" "}
        explores why the source of cash matters.
      </p>

      <p>
        Our view: the useful story is not hidden debt, but the gap between
        signing a cost, starting to use the asset and collecting the cash to pay
        for it.
      </p>

      <h2 id={H["A promise is not a bill due today"]}>
        A promise is not a bill due today
      </h2>

      <p>
        The three lease sums do not tell us how much rent falls due next month.
        They do not tell us how much cash each site will earn. They do not tell us
        whether a guarantee will be called.
      </p>

      <p>
        Those are three separate questions. Keep them apart. A ceiling on loss is
        not a base case. A sales total is not cash after costs. A lease start date
        is not the day the lease was signed.
      </p>

      <p>
        We can learn from the scale of the deals without using one big sum to
        stand in for all of those facts.
      </p>

      <h2 id={H["Read the dates, not just the big number"]}>
        Read the dates, not just the big number
      </h2>

      <p>
        Try a plain cash test. When does rent start? When can the site be used?
        When will customers pay? A signed deal answers some questions, but it does
        not answer them all.
      </p>

      <p>
        If cash comes in before rent is due, that is one kind of plan. If rent
        comes first, the company needs a way to fund the gap. If the dates can
        change, the plan needs room for that too.
      </p>

      <p>
        This is not a claim about any one site in the filings. We have not mapped
        those sites or matched each lease to a customer. It is a way to read the
        notes without mistaking a promise to pay for a bill due now.
      </p>

      <h2 id={H["What a software founder can take from this"]}>
        What a software founder can take from this
      </h2>

      <p>
        A GovTech software owner need not copy a giant lease program to use the
        lesson. Keep promises to spend beside expected receipts. Then ask which
        dates are firm and which remain a forecast.
      </p>

      <p>
        Our working capital post says:{" "}
        <em>
          &quot;Signed government contracts that pay slowly create a timing
          problem more often than a growth problem.&quot;
        </em>{" "}
        See{" "}
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          working capital vs growth capital
        </Link>
        .
      </p>

      <p>
        That does not make every signed obligation a timing problem. A large build
        whose payoff is not yet scheduled can be a growth need. The size of the
        contract alone does not settle that choice.
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
        Use growth capital if demand calls for more people, product or reach
        before cash returns on a firm schedule. Do not call that merely a late
        invoice. Our{" "}
        <Link href={`/blog/${CAPITAL_STACK_SENIORITY_POST.slug}`}>
          capital stack guide
        </Link>{" "}
        explains how different claims fit together.
      </p>

      <p>
        Start with the cash gap, not the headline total. Our{" "}
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          cash flow gap guide
        </Link>{" "}
        puts it plainly:{" "}
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em>
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={DATA_CENTER_LEASE_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software company financing strategy
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
