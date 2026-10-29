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
          On the one question every lender asks, a small company with signed government contracts can look stronger than a company sitting on billions in AI chips.
        </strong>
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a company that owns a warehouse full of costly AI chips. Its only revenue is renting out those chips. Its lender has one question: if the rent stops, what pays us?
      </p>

      <p>
        That question just reached the biggest names in AI. On October 25, 2026, Elon Musk said debt markets have almost shut off money for companies without substantial revenue outside AI data centers. A day later, his own company filed the details of a $40 billion chip deal that answers the lender&apos;s question.
      </p>

      <p>
        We think this story is not really about AI. It is the oldest rule in lending, and it applies to a small GovTech company as much as to SpaceX.
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
            Lenders fund revenue the asset does not create. A chip that must earn its own repayment is a weak story.
          </li>
          <li>
            SpaceX signed a binding commitment for a GPU lease with about $40 billion of principal. SpaceX also earns large revenue outside AI.
          </li>
          <li>
            Nebius, a neocloud, still borrowed by pointing to signed customer contracts.
          </li>
          <li>
            A GovTech company with signed multiyear government contracts has the same kind of outside revenue. Slow payment is a timing gap, not a missing payer.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The neocloud financing problem: the asset has to pay for itself"]}>
        The neocloud financing problem: the asset has to pay for itself
      </h2>

      <p>
        A neocloud is a company that rents out AI computing power instead of selling software. <ExtLink href="https://www.cnbc.com/2026/10/15/whats-behind-the-sell-off-in-ai-neocloud-stocks-like-coreweave-and-nebius-.html">CNBC</ExtLink> puts it this way: &quot;Neoclouds are specialized computing providers built for artificial intelligence and machine learning.&quot; Most of that power comes from GPUs, the chips that do the heavy math for AI.
      </p>

      <p>
        Here is the trap. A neocloud borrows to buy GPUs, then rents those same GPUs to pay the loan back. The chip is the thing being financed and the thing paying for it.
      </p>

      <h3>Why that scares a lender</h3>

      <p>
        If rental prices fall, the revenue falls with the collateral. Collateral is the asset a lender can claim if a loan goes unpaid. Both sides of the lender&apos;s safety net drop at the same time.
      </p>

      <p>
        <ExtLink href="https://www.channelnewsasia.com/business/musks-warning-hits-neocloud-stocks-debt-concerns-mount-6493081">Reuters reported</ExtLink> concerns over a widening gap between what is invested in AI infrastructure and the revenue it brings in. It also reported that CoreWeave and Nebius posted quarterly losses over the past year. IREN has not turned a profit in the past three quarters.
      </p>

      <h2 id={H["The characters and what each one wants"]}>
        The characters and what each one wants
      </h2>

      <p>
        Every person in this story has a reason to say what they said. Some reasons are stated in the sources. Where they are not, we call it the likely reason.
      </p>

      <h3>The landowner</h3>

      <p>
        The first voice was investor Chamath Palihapitiya. He wrote that &quot;Neoclouds are disorganized and poorly capitalized. Some are definitely better than others however.&quot; (<ExtLink href="https://x.com/chamath/status/2114389987563381004">Palihapitiya on X</ExtLink>)
      </p>

      <p>
        He opened that post with his own stake: &quot;As someone with a portfolio of energized land assets here is what I am seeing&quot;. Energized land is land with power hooked up for data centers. The likely reason he is watching: he sees this market from the land and power side.
      </p>

      <h3>The rival with a warning</h3>

      <p>
        Musk, the chief executive of SpaceX, answered within hours. &quot;As of the past few weeks, debt markets have almost entirely shut off access to money for any company that doesn’t have substantial revenue independent of AI data centers.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114434646914068862">Musk on X</ExtLink>)
      </p>

      <p>
        He predicted that most of the more than 200 neoclouds would fail or be absorbed by others. &quot;Some will make it through, but not many.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114434646914068862">Musk on X</ExtLink>)
      </p>

      <p>
        Keep in mind who is talking. <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink> notes that SpaceX runs its own data centers and is &quot;a direct competitor to the neoclouds which also rent compute.&quot;
      </p>

      <h3>What the market did</h3>

      <p>
        <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink> sums up the mood. &quot;Investors have grown jittery over companies that are borrowing heavily to fund the purchase of expensive Nvidia chips, build data centers, and rent out computing power.&quot;
      </p>

      <p>
        <ExtLink href="https://www.channelnewsasia.com/business/musks-warning-hits-neocloud-stocks-debt-concerns-mount-6493081">Reuters reported</ExtLink> that shares of CoreWeave, Nebius and IREN fell more than 30% in October. Nebius bonds due 2034 and CoreWeave bonds due 2033 hit record lows. As of the morning of October 26 (PT), <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink> reported a turn: &quot;Shares of Nebius, CoreWeave, and Iren fell early Monday, but rebounded and turned positive later in the day.&quot;
      </p>

      <h3>The buyer who will not buy</h3>

      <p>
        Could SpaceX just buy a struggling neocloud? Musk shut that down. &quot;SpaceX is not buying any neoclouds. Pointless.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114462416721633501">Musk on X</ExtLink>)
      </p>

      <p>
        The likely reason: SpaceX already runs data centers, so it gains little from buying a rival when it can finance chips directly.
      </p>

      <h2 id={H["The exception: SpaceX borrows the same week"]}>
        The exception: SpaceX borrows the same week
      </h2>

      <p>
        In the same post, Musk named the exception: his own company.
      </p>

      <h3>What Musk said</h3>

      <p>
        &quot;SpaceX closed $40B of debt for GPUs, but we’re investment grade and have Starlink &amp; launch revenue.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114434646914068862">Musk on X</ExtLink>) Investment grade means the big rating agencies see a low chance a company will fail to pay its debts. That label is Musk&apos;s claim.
      </p>

      <p>
        What is on record: S&amp;P Global Ratings, Moody&apos;s Ratings and Fitch Ratings gave SpaceX initial ratings with a stable outlook in June 2026, the <ExtLink href="https://www.wsj.com/business/spacexs-strength-in-space-connectivity-supports-initial-credit-ratings-firms-say-f0f1f264">Wall Street Journal</ExtLink> reported. They also &quot;noted risks tied to SpaceX’s capital needs and nascent artificial intelligence business&quot;.
      </p>

      <h3>What the filing says</h3>

      <p>
        On Monday, SpaceX filed a Form 8-K. An 8-K is a report a U.S. public company files to tell investors about a major event. (<ExtLink href="https://www.sec.gov/Archives/edgar/data/1181412/000110465926118614/tm2628247d1_8k.htm">SpaceX Form 8-K</ExtLink>)
      </p>

      <p>
        It says SpaceX &quot;entered into a binding commitment letter to enter into a master finance lease with an entity managed by Apollo Global Management, Inc.&quot; A binding commitment letter is a signed promise to do a deal, with conditions still to be met.
      </p>

      <p>
        A master finance lease is one umbrella agreement. The lessor, the owner in a lease, buys equipment and rents it to the company, which pays it off over time.
      </p>

      <p>
        The filing says &quot;the Lessor will acquire and lease to the Company certain graphics processing unit pods and related equipment&quot;. It adds: &quot;The Company expects aggregate principal payments under the lease schedules over their respective terms to total approximately $40 billion.&quot; Principal is the amount financed, not counting interest.
      </p>

      <h3>The terms on record</h3>

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
          <strong>Parties:</strong> a SpaceX <ExtLink href="https://ir.spacex.com/updates/releases-details/2026/SPACEX-SECURES-40-BILLION-IN-THE-LARGEST-GPU-FINANCING-EVER-2026-EnDqGhTAB3/default.aspx">release</ExtLink> says Apollo and Goldman Sachs led the deal. Funds and accounts managed by BlackRock and Goldman Sachs Asset Management, and capital accounts advised by KKR, made anchor commitments, meaning early large commitments.
        </li>
      </ul>

      <h3>&quot;Closed&quot; and &quot;callable,&quot; side by side</h3>

      <p>
        The 8-K says the deal &quot;is subject to certain specified closing conditions and is expected to close prior to year end.&quot; Reuters raised the question on Sunday, before the filing. <ExtLink href="https://www.channelnewsasia.com/business/musk-says-spacex-raised-40-billion-in-debt-deal-predicts-neocloud-shakeout-6491471">It reported</ExtLink> that it was not clear what Musk meant by &quot;closed,&quot; or whether investors had agreed to pricing.
      </p>

      <p>
        Musk also wrote: &quot;This is primarily callable debt for GPU purchases that will arrive in Q1 and Q2.&quot; (<ExtLink href="https://x.com/elonmusk/status/2114444535036321840">Musk on X</ExtLink>) Callable debt is debt the borrower can pay off early. The filing describes a finance lease and does not use the word callable, so we rely on the filing.
      </p>

      <h2 id={H["Why the lenders said yes"]}>
        Why the lenders said yes
      </h2>

      <p>
        SpaceX gave its own reason for using a lease. Its chief financial officer is Bret Johnsen, per the <ExtLink href="https://www.sec.gov/Archives/edgar/data/1181412/000110465926118614/tm2628247d1_8k.htm">filing</ExtLink>. The company&apos;s <ExtLink href="https://ir.spacex.com/updates/releases-details/2026/SPACEX-SECURES-40-BILLION-IN-THE-LARGEST-GPU-FINANCING-EVER-2026-EnDqGhTAB3/default.aspx">release</ExtLink> gives his reason: &quot;This lease diversifies our funding sources and addresses a notable portion of the funding required to deliver on our growth plans&quot;.
      </p>

      <p>
        The lenders&apos; side is not stated. The likely reason they said yes: the rent can be paid from Starlink and launch cash even if GPU rental prices fall. The lessor also buys the chips, so it likely holds real equipment, not just a promise.
      </p>

      <h3>To be fair to the neoclouds</h3>

      <p>
        SpaceX is not free of AI. <ExtLink href="https://www.channelnewsasia.com/business/musk-says-spacex-raised-40-billion-in-debt-deal-predicts-neocloud-shakeout-6491471">Reuters reported</ExtLink> that SpaceX revenue rose 161% from a year earlier to $14.58 billion for the three months ended September 30. AI revenue grew almost tenfold to $7.56 billion, it added.
      </p>

      <p>
        So about half of that quarter&apos;s revenue came from AI. The other half, which includes Starlink and launch, is the outside revenue that changes the lender&apos;s answer.
      </p>

      <h2 id={H["The neocloud that still borrowed"]}>
        The neocloud that still borrowed
      </h2>

      <p>
        Not every neocloud was shut out. Nebius filed a Form 6-K. A 6-K is the report a foreign company listed in the U.S. files to share major news. (<ExtLink href="https://www.sec.gov/Archives/edgar/data/1513845/000110465926117978/tm2628078d1_6k.htm">Nebius Form 6-K</ExtLink>)
      </p>

      <p>
        On October 17, 2026, Nebius signed a $3.5 billion, 364 day secured bridge facility with Citibank, N.A. A bridge facility is short money that carries a company until longer funding arrives. Secured means the lender has a claim on assets if it is not repaid.
      </p>

      <p>
        The filing says the debt is &quot;secured by a security interest on substantially all of each Borrower’s assets&quot;. It also states: &quot;The maturity date of the Facility Agreement is October 16, 2027.&quot;
      </p>

      <h3>What Nebius pointed to</h3>

      <p>
        Nebius&apos;s chief operating officer, Ophir Nave, said it can still raise money backed by more than $40 billion of long term contracts with customers that have investment grade credit. Its <ExtLink href="https://www.sec.gov/Archives/edgar/data/1513845/000110465926117978/tm2628078d1_ex99-1.htm">release</ExtLink> adds: &quot;It complements a funding base that includes customer prepayments and operating cash flows with other financing mechanisms.&quot;
      </p>

      <p>
        Its revenue chief, Marc Boroditsky, told <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink>: &quot;we&apos;re not carrying the kind of debt that they are&quot;. The likely reason the lender said yes: it looked past the GPU to who signed the contracts.
      </p>

      <h2 id={H["Our take: lenders fund revenue the asset does not create"]}>
        Our take: lenders fund revenue the asset does not create
      </h2>

      <p>
        The coverage framed this as an AI shakeout. <ExtLink href="https://www.channelnewsasia.com/business/musk-says-spacex-raised-40-billion-in-debt-deal-predicts-neocloud-shakeout-6491471">Reuters</ExtLink> headlined Musk predicting a neocloud shakeout, and <ExtLink href="https://www.cnbc.com/2026/10/26/neocloud-stocks-today-coreweave-nebius-iren-elon-musk.html">CNBC</ExtLink> led with neoclouds that will collapse.
      </p>

      <p>
        Musk&apos;s own line states an older rule: money goes to companies with &quot;substantial revenue independent of AI data centers.&quot; In plain terms, lenders fund revenue the asset does not create. Every lender asks the same question, at every size: who pays if the thing you are buying stops earning?
      </p>

      <p>
        Here is the new part. That rule makes a small company with signed government contracts look more like SpaceX than a neocloud.
      </p>

      <p>
        The table below shows the answer for each borrower. The first two rows come from company filings.
      </p>

      <p>
        The third row is Musk&apos;s view plus Reuters reporting. The fourth row is our own view.
      </p>

      <p>
        <em>Who can still borrow, and what the lender looks to.</em>
      </p>

      <TableWrap caption="Who can still borrow, and what the lender looks to">
        <table>
          <caption>Who can still borrow, and what the lender looks to</caption>
          <thead>
            <tr>
              <th>Borrower</th>
              <th>What backs the money</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Borrower">SpaceX</td>
              <td data-label="What backs the money">Starlink and launch revenue, plus the leased GPUs</td>
              <td data-label="Source">Musk on X, Form 8-K</td>
            </tr>
            <tr>
              <td data-label="Borrower">Nebius</td>
              <td data-label="What backs the money">Signed contracts with investment grade customers, plus its assets</td>
              <td data-label="Source">Form 6-K, Nebius release</td>
            </tr>
            <tr>
              <td data-label="Borrower">Many neoclouds</td>
              <td data-label="What backs the money">Mostly the GPUs and the rent they earn</td>
              <td data-label="Source">Musk on X, Reuters</td>
            </tr>
            <tr>
              <td data-label="Borrower">A GovTech company with signed contracts</td>
              <td data-label="What backs the money">Payments owed by government agencies</td>
              <td data-label="Source">Our view</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>The GovTech company with a January problem</h3>

      <p>
        In September, we spoke with a GovTech company that had a bunch of signed three year government contracts. About $300,000 of those deals were renewing in January, and the company needed about $250,000 to get through the end of the year.
      </p>

      <p>
        In our view, that was a true bridge: the deals were signed, and the cash was going to come in.
      </p>

      <h3>Why that company looks more like SpaceX than a neocloud</h3>

      <p>
        Put the neocloud and that company side by side. The neocloud&apos;s revenue comes from the asset it financed.
      </p>

      <p>
        The company&apos;s revenue comes from government agencies that signed multiyear deals, outside anything being financed.
      </p>

      <p>
        In our view, a signed multiyear government contract is the small company version of Starlink revenue. It does not depend on one machine, one chip or one market price. The agency may pay slowly, but slow is a timing problem, not a missing payer.
      </p>

      <h3>How we read a deal like this</h3>

      <p>
        Many capital providers want a leading venture capital firm to back a company first. We would rather look at the signed contracts and renewals. Who signed, for how long, and what has to happen before the agency pays?
      </p>

      <p>
        We also weigh the founder&apos;s integrity and the company&apos;s record of paying its debts, not just the math. That is how we evaluate. It is not an offer or a promise of terms.
      </p>

      <h2 id={H["Which tool fits which problem"]}>
        Which tool fits which problem
      </h2>

      <p>
        Once you deliver and invoice, a contract payment becomes a receivable. A receivable is money a customer owes you for work already delivered. Keep contracts, purchase orders, acceptance records and invoices clean and in one place.
      </p>

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
        <li>
          Use the interest rules in the <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>Prompt Payment Act</Link> if your problem is a federal agency paying late.
        </li>
      </ul>

      <h2 id={H["The risks"]}>
        The risks
      </h2>

      <p>
        None of this is settled. The SpaceX deal still has to meet its closing conditions. Its fixed rate will be set at pricing, before SpaceX enters the lease.
      </p>

      <p>
        Musk warned about chips with no home. &quot;I think we’re going to see a lot of stranded compute in partially complete data centers&quot; (<ExtLink href="https://x.com/elonmusk/status/2114168277882581486">Musk on X</ExtLink>). Palihapitiya described such capacity as &quot;bought and paid for but effectively underearning (below total cost of capital) or collecting dust.&quot;
      </p>

      <p>
        A signed contract has risks too. Renewals can slip, and an agency can be slow. That is why we read the contract, not just the total.
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
