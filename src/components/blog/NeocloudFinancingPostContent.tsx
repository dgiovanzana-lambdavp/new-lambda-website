import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  META_HYPERION_POST,
  NEOCLOUD_FAQ,
  NEOCLOUD_HEADINGS,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  NEOCLOUD_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function NeocloudFinancingPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          On a Sunday in October, Elon Musk said lenders have nearly stopped funding AI computing companies that live only on AI data center revenue. The next day, SpaceX filed the details of its own $40 billion GPU deal. The gap between those two stories is the lesson.
        </strong>
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        On October 25, 2026, Musk said debt markets have almost shut off money for companies without substantial revenue outside AI data centers. SpaceX, which has other revenue such as Starlink, signed a commitment for about $40 billion of GPU lease financing. Lenders want revenue that does not depend on the asset being financed.
      </p>

      <p>
        <em>This post is general education, not financial, legal, or tax advice.</em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Musk says lenders now shun AI computing firms that have no big revenue outside AI data centers.
          </li>
          <li>
            SpaceX signed a binding commitment for a GPU lease with about $40 billion of principal. It is expected to close before year end.
          </li>
          <li>
            Nebius, a neocloud, still raised a $3.5 billion bridge facility while pointing to long term customer contracts.
          </li>
          <li>
            The rule is old: lenders fund cash that does not depend on the thing they finance.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The neocloud financing problem: a reply that moved the market"]}>
        The neocloud financing problem: a reply that moved the market
      </h2>

      <p>
        It started with a post on X. Investor Chamath Palihapitiya wrote that &quot;Neoclouds are disorganized and poorly capitalized. Some are definitely better than others however.&quot; (<ExtLink href="https://x.com/chamath/status/2114389987563381004">Palihapitiya on X</ExtLink>)
      </p>

      <p>
        A neocloud is a company that rents out AI computing power instead of selling software. <ExtLink href="https://www.cnbc.com/2026/10/15/whats-behind-the-sell-off-in-ai-neocloud-stocks-like-coreweave-and-nebius-.html">CNBC</ExtLink> puts it this way: &quot;Neoclouds are specialized computing providers built for artificial intelligence and machine learning.&quot; Most of that power comes from GPUs, the chips that do the heavy math for AI.
      </p>

      <h3>Musk&apos;s reply</h3>

      <p>
        Musk, the chief executive of SpaceX, answered within hours. &quot;As of the past few weeks, debt markets have almost entirely shut off access to money for any company that doesn’t have substantial revenue independent of AI data centers.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114434646914068862">Musk on X</ExtLink>)
      </p>

      <p>
        He then predicted that most of the more than 200 neoclouds would fail or be absorbed by others. &quot;Some will make it through, but not many.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114434646914068862">Musk on X</ExtLink>)
      </p>

      <h3>The next morning</h3>

      <p>
        Neocloud shares fell on Monday. <ExtLink href="https://www.channelnewsasia.com/business/musks-warning-hits-neocloud-stocks-debt-concerns-mount-6493081">Reuters reported</ExtLink> that CoreWeave fell 1.6%, Nebius Group 4% and IREN 1.5%.
      </p>

      <p>
        Those shares had already fallen more than 30% in October, <ExtLink href="https://www.channelnewsasia.com/business/musks-warning-hits-neocloud-stocks-debt-concerns-mount-6493081">Reuters added</ExtLink>. As of the morning of October 26 (PT), <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink> reported a turn: &quot;Shares of Nebius, CoreWeave, and Iren fell early Monday, but rebounded and turned positive later in the day.&quot;
      </p>

      <h3>Why neoclouds are exposed</h3>

      <p>
        Reuters notes how neoclouds differ from the big cloud firms. Larger cloud firms serve many industries, <ExtLink href="https://www.channelnewsasia.com/business/musk-says-spacex-raised-40-billion-in-debt-deal-predicts-neocloud-shakeout-6491471">Reuters reported</ExtLink>, while neoclouds such as Nebius and CoreWeave mostly serve tech customers with capacity built for AI.
      </p>

      <p>
        So the problem is simple. Most of their revenue comes from renting the same chips they borrow to buy.
      </p>

      <h2 id={H["The options for paying for AI chips"]}>
        The options for paying for AI chips
      </h2>

      <p>
        A company that wants thousands of GPUs has a few ways to pay. Each one asks a different question about where the money will come from.
      </p>

      <h3>Borrow against the chips</h3>

      <p>
        A lender can lend against the GPUs and the rent they earn. That works while rental prices hold up. If prices fall, the chips are the main source of repayment.
      </p>

      <h3>Lease them</h3>

      <p>
        A lessor, the owner in a lease, can buy the chips and rent them to the company. The company pays rent over time. In a finance lease, those payments cover most of the cost, so it works a lot like a loan.
      </p>

      <h3>Borrow against the whole company</h3>

      <p>
        A lender can look past the chips to everything the company earns. That depends on revenue from other businesses or from signed customer contracts. This is the revenue Musk called independent.
      </p>

      <h2 id={H["What happened: SpaceX signs, Nebius borrows"]}>
        What happened: SpaceX signs, Nebius borrows
      </h2>

      <p>
        Two companies showed the options in action within a week. Both disclosed their deals to the Securities and Exchange Commission (SEC).
      </p>

      <h3>SpaceX&apos;s filing</h3>

      <p>
        SpaceX filed a Form 8-K. An 8-K is a report a U.S. public company files to tell investors about a major event. (<ExtLink href="https://www.sec.gov/Archives/edgar/data/1181412/000110465926118614/tm2628247d1_8k.htm">SpaceX Form 8-K</ExtLink>)
      </p>

      <p>
        It says SpaceX &quot;entered into a binding commitment letter to enter into a master finance lease with an entity managed by Apollo Global Management, Inc.&quot; A binding commitment letter is a signed promise to do a deal, with conditions still to be met.
      </p>

      <p>
        A master finance lease is one umbrella agreement. The lender buys equipment and rents it to the company, which pays it off over time.
      </p>

      <p>
        The filing says &quot;the Lessor will acquire and lease to the Company certain graphics processing unit pods and related equipment&quot;. It adds: &quot;The Company expects aggregate principal payments under the lease schedules over their respective terms to total approximately $40 billion.&quot; Principal is the amount financed, not counting interest.
      </p>

      <h3>The terms on record</h3>

      <p>
        The equipment arrives in batches. Each batch gets its own schedule under the umbrella.
      </p>

      <ul>
        <li>
          <strong>Start:</strong> &quot;The lease schedules are expected to commence during the first half of 2027 upon delivery of the GPUs.&quot;
        </li>
        <li>
          <strong>Length:</strong> each schedule runs about five to five and a quarter years from its start, per the filing.
        </li>
        <li>
          <strong>Rent:</strong> &quot;Rent under each lease schedule will be payable quarterly in advance&quot;. Each quarter&apos;s rent generally includes one twentieth of the financed cost, plus an amount at a fixed rate.
        </li>
        <li>
          <strong>Parties:</strong> a SpaceX <ExtLink href="https://ir.spacex.com/updates/releases-details/2026/SPACEX-SECURES-40-BILLION-IN-THE-LARGEST-GPU-FINANCING-EVER-2026-EnDqGhTAB3/default.aspx">release</ExtLink> says the deal was led by Apollo and Goldman Sachs. Funds and accounts managed by BlackRock and Goldman Sachs Asset Management, and capital accounts advised by KKR, made anchor commitments, meaning early large commitments.
        </li>
      </ul>

      <h3>Nebius&apos;s filing</h3>

      <p>
        Nebius, a neocloud, filed a Form 6-K. A 6-K is the report a foreign company listed in the U.S. files to share major news. (<ExtLink href="https://www.sec.gov/Archives/edgar/data/1513845/000110465926117978/tm2628078d1_6k.htm">Nebius Form 6-K</ExtLink>)
      </p>

      <p>
        On October 17, 2026, Nebius signed a $3.5 billion, 364 day secured bridge facility with Citibank, N.A. A bridge facility is short money that carries a company until longer funding arrives. Secured means the lender has a claim on assets if it is not repaid.
      </p>

      <p>
        The filing says the debt is &quot;secured by a security interest on substantially all of each Borrower’s assets&quot;. It also states: &quot;The maturity date of the Facility Agreement is October 16, 2027.&quot;
      </p>

      <h2 id={H["\"Closed,\" \"callable debt\" and what the filing says"]}>
        &quot;Closed,&quot; &quot;callable debt&quot; and what the filing says
      </h2>

      <p>
        Musk&apos;s posts and SpaceX&apos;s filing describe the deal in different words. Both are worth reading side by side.
      </p>

      <h3>&quot;Closed&quot; versus &quot;expected to close&quot;</h3>

      <p>
        Musk wrote: &quot;SpaceX closed $40B of debt for GPUs, but we’re investment grade and have Starlink &amp; launch revenue.&quot; The 8-K says the deal &quot;is subject to certain specified closing conditions and is expected to close prior to year end.&quot;
      </p>

      <p>
        Reuters raised the same question on Sunday, before the filing. <ExtLink href="https://www.channelnewsasia.com/business/musk-says-spacex-raised-40-billion-in-debt-deal-predicts-neocloud-shakeout-6491471">It reported</ExtLink> that it was not clear what Musk meant by &quot;closed,&quot; or whether investors had agreed to pricing for the debt.
      </p>

      <h3>&quot;Callable debt&quot; versus a lease</h3>

      <p>
        In a later reply, Musk wrote: &quot;This is primarily callable debt for GPU purchases that will arrive in Q1 and Q2.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114444535036321840">Musk on X</ExtLink>) Callable debt is debt the borrower can pay off early, before it is due.
      </p>

      <p>
        The filing describes a finance lease and does not use the word callable. A finance lease does work much like debt: you get the equipment now and pay for it over time. The filing is the formal record, so this post relies on it.
      </p>

      <h2 id={H["Why each party acts as it does"]}>
        Why each party acts as it does
      </h2>

      <p>
        Every party here has its own reasons. Some are stated in the sources. Where they are not, this post says &quot;likely.&quot;
      </p>

      <p>
        The table below sums up who can still borrow. The first two rows come from company filings. The third row is Musk&apos;s view plus Reuters reporting, not a filing.
      </p>

      <p>
        <em>Who can still borrow for AI chips, and what the lender looks to.</em>
      </p>

      <TableWrap caption="Who can still borrow for AI chips, and what the lender looks to">
        <table>
          <caption>Who can still borrow for AI chips, and what the lender looks to</caption>
          <thead>
            <tr>
              <th>Company</th>
              <th>What backs the money</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Company">SpaceX</td>
              <td data-label="What backs the money">Starlink and launch revenue, plus the leased GPUs</td>
              <td data-label="Source">Musk on X, Form 8-K</td>
            </tr>
            <tr>
              <td data-label="Company">Nebius</td>
              <td data-label="What backs the money">Signed contracts with investment grade customers, plus its assets</td>
              <td data-label="Source">Form 6-K, Nebius release</td>
            </tr>
            <tr>
              <td data-label="Company">Many neoclouds</td>
              <td data-label="What backs the money">Mostly the GPUs and the rent they earn</td>
              <td data-label="Source">Musk on X, Reuters</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>Why lenders said yes to SpaceX</h3>

      <p>
        Musk gives his own reason: investment grade status plus &quot;Starlink &amp; launch revenue.&quot; Investment grade means the big rating agencies see a low chance a company will fail to pay its debts. That label is Musk&apos;s claim.
      </p>

      <p>
        What is on record: S&amp;P Global Ratings, Moody&apos;s Ratings and Fitch Ratings gave SpaceX initial ratings with a stable outlook in June 2026, the <ExtLink href="https://www.wsj.com/business/spacexs-strength-in-space-connectivity-supports-initial-credit-ratings-firms-say-f0f1f264">Wall Street Journal</ExtLink> reported. They also &quot;noted risks tied to SpaceX’s capital needs and nascent artificial intelligence business&quot;.
      </p>

      <p>
        To be fair, SpaceX is not free of AI. <ExtLink href="https://www.channelnewsasia.com/business/musk-says-spacex-raised-40-billion-in-debt-deal-predicts-neocloud-shakeout-6491471">Reuters reported</ExtLink> that SpaceX revenue rose 161% from a year earlier to $14.58 billion for the three months ended September 30. AI revenue grew almost tenfold to $7.56 billion, it added.
      </p>

      <p>
        So about half of SpaceX&apos;s revenue that quarter came from AI. The other half, which includes Starlink and launch, is the independent revenue Musk points to.
      </p>

      <p>
        The lessor&apos;s likely comfort: the rent can be paid from Starlink and launch cash even if GPU rental prices fall. The lessor also buys the chips, so it likely holds real equipment, not just a promise to pay.
      </p>

      <h3>Why SpaceX leases instead of buying a neocloud</h3>

      <p>
        SpaceX&apos;s chief financial officer is Bret Johnsen, per the <ExtLink href="https://www.sec.gov/Archives/edgar/data/1181412/000110465926118614/tm2628247d1_8k.htm">filing</ExtLink>. The company&apos;s <ExtLink href="https://ir.spacex.com/updates/releases-details/2026/SPACEX-SECURES-40-BILLION-IN-THE-LARGEST-GPU-FINANCING-EVER-2026-EnDqGhTAB3/default.aspx">release</ExtLink> gives his reason for the lease: &quot;This lease diversifies our funding sources and addresses a notable portion of the funding required to deliver on our growth plans&quot;.
      </p>

      <p>
        Musk ruled out the other path. &quot;SpaceX is not buying any neoclouds. Pointless.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114462416721633501">Musk on X</ExtLink>)
      </p>

      <p>
        <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink> notes that SpaceX runs its own data centers and is &quot;a direct competitor to the neoclouds which also rent compute.&quot; So SpaceX likely gains little from buying a neocloud when it can finance chips directly.
      </p>

      <p>
        That also means Musk is talking about his rivals. Readers should weigh that.
      </p>

      <h3>Why Palihapitiya spoke up</h3>

      <p>
        Palihapitiya opened his post: &quot;As someone with a portfolio of energized land assets here is what I am seeing&quot;. Energized land is land with power hooked up for data centers. He likely sees this market from the land and power side.
      </p>

      <h3>Why lenders pulled back from neoclouds</h3>

      <p>
        <ExtLink href="https://www.channelnewsasia.com/business/musks-warning-hits-neocloud-stocks-debt-concerns-mount-6493081">Reuters reported</ExtLink> concerns over a widening gap between what is invested in AI infrastructure and the revenue it brings in. It also reported that CoreWeave and Nebius posted quarterly losses over the past year. IREN has not turned a profit in the past three quarters.
      </p>

      <p>
        <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink> sums up the mood. &quot;Investors have grown jittery over companies that are borrowing heavily to fund the purchase of expensive Nvidia chips, build data centers, and rent out computing power.&quot;
      </p>

      <p>
        The lender&apos;s likely fear is simple. If GPU rental prices drop, the GPU may be the only source of repayment.
      </p>

      <h3>Why Nebius could still borrow</h3>

      <p>
        Nebius&apos;s chief operating officer, Ophir Nave, said it can still raise money backed by more than $40 billion of long term contracts with customers that have investment grade credit. Its <ExtLink href="https://www.sec.gov/Archives/edgar/data/1513845/000110465926117978/tm2628078d1_ex99-1.htm">release</ExtLink> also says: &quot;It complements a funding base that includes customer prepayments and operating cash flows with other financing mechanisms.&quot;
      </p>

      <p>
        Its revenue chief, Marc Boroditsky, told <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink>: &quot;we&apos;re not carrying the kind of debt that they are&quot;. Lenders likely look past the GPU to the signed customer contracts. The contract is the independent revenue.
      </p>

      <h2 id={H["The risks"]}>
        The risks
      </h2>

      <p>
        None of this is settled. The SpaceX deal still has to meet its closing conditions. Its fixed rate will be set at pricing, before SpaceX enters the lease.
      </p>

      <p>
        Bond prices show the stress elsewhere. <ExtLink href="https://www.channelnewsasia.com/business/musks-warning-hits-neocloud-stocks-debt-concerns-mount-6493081">Reuters reported</ExtLink> that Nebius bonds due 2034 and CoreWeave bonds due 2033 have hit record lows.
      </p>

      <p>
        Musk also warned about chips with no home. &quot;I think we’re going to see a lot of stranded compute in partially complete data centers&quot; (<ExtLink href="https://x.com/elonmusk/status/2114168277882581486">Musk on X</ExtLink>). Palihapitiya described such capacity as &quot;bought and paid for but effectively underearning (below total cost of capital) or collecting dust.&quot;
      </p>

      <p>
        Even the borrowers with other revenue carry risk. The rating agencies flagged SpaceX&apos;s capital needs and its young AI business.
      </p>

      <h2 id={H["What a smaller company owner can take from it"]}>
        What a smaller company owner can take from it
      </h2>

      <p>
        The asset alone rarely carries the loan now. The cash behind it does. Contracts with strong customers turn future revenue into something a lender can count.
      </p>

      <p>
        In my view, a signed government contract is the small company version of what Musk described. The customer is a city, a state or a federal agency. The revenue does not depend on any one asset.
      </p>

      <h3>Your contracts are independent revenue</h3>

      <p>
        Once you deliver and invoice, the payment becomes a receivable. A receivable is money a customer owes you for work already delivered. An agency may pay slowly, but the receivable is still durable.
      </p>

      <p>
        Keep contracts, purchase orders, acceptance records and invoices clean and in one place. Learn each agency&apos;s payment process. The <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>Prompt Payment Act guide</Link> covers what you can collect when payment is late.
      </p>

      <h3>Which tool fits which problem</h3>

      <ul>
        <li>
          Use a <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>revolving line of credit</Link> if your problem is uneven timing between invoices and payment.
        </li>
        <li>
          Use financing tied to your government receivables if you have signed contracts but slow agency payment. The <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>Assignment of Claims Act</Link> explains how a federal contract payment can be assigned.
        </li>
        <li>
          Use loans with bullet payments if you expect a known future cash event and want to keep monthly cash free until then.
        </li>
      </ul>

      <p>
        For a bigger deal built on the same idea of outside revenue, see the Meta Hyperion post in the reading list below.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={NEOCLOUD_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${META_HYPERION_POST.slug}`}>
            Meta Hyperion Data Center Financing
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
