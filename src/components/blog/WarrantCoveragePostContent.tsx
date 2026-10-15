import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  GOVTECH_POST,
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_POST,
  IMPLEMENTATION_MILESTONES_POST,
  VENTURE_DEBT_POST,
  GROWTH_DEBT_POST,
  WARRANT_COVERAGE_FAQ,
  WARRANT_COVERAGE_HEADINGS,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  WARRANT_COVERAGE_HEADINGS.map((h) => [h.text, h.id]),
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

export default function WarrantCoveragePostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          A warrant costs you nothing on signing day. That is exactly why
          founders underprice it.
        </strong>
      </p>
      <p>
        Warrant coverage is the size of the equity option a lender takes
        alongside a loan, expressed as a percentage of the loan amount, not of
        your company. The warrant gives the lender the right, but not the
        obligation, to buy shares at a fixed strike price before it expires.
        Lenders typically exercise around a sale or IPO, and only if the shares
        are worth more than the strike. For a bootstrapped GovTech company that
        has not priced a round in years, how the strike is set can matter as
        much as the coverage percentage itself.
      </p>
      <p>
        This is the third post in our growth capital series, after{" "}
        <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
          venture debt vs venture capital for GovTech
        </Link>{" "}
        and{" "}
        <Link href={`/blog/${GROWTH_DEBT_POST.slug}`}>
          how much growth debt a GovTech software company can take on
        </Link>
        .
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice.
        </em>
      </p>

      <h2 id={H["What warrant coverage is, in one example"]}>
        What warrant coverage is, in one example
      </h2>
      <p>
        I think of a warrant as the lender&apos;s ticket to your upside. The
        lender takes more risk than a bank would, accepts a lower interest rate
        than that risk alone would justify, and asks for a small share of the
        upside if you win. That trade is fine when you price it on purpose and
        costly when you sign it as boilerplate.
      </p>
      <p>
        Nothing is issued when you sign. New shares are created only if the
        lender exercises, and that is when the dilution actually lands.
      </p>

      <h2 id={H["The five terms that decide what a warrant really costs"]}>
        The five terms that decide what a warrant really costs
      </h2>
      <p>
        The coverage percentage gets all the attention, but in my experience it
        is only one of five levers. Here is how I would read the warrant line in
        any term sheet:
      </p>
      <ol>
        <li>
          <strong>Coverage percentage.</strong> Check whether it applies to the
          full commitment or only to what you actually draw. If you never draw
          the whole facility, coverage on the commitment means paying for capital
          you never used.
        </li>
        <li>
          <strong>Strike price.</strong> The higher the strike, the less the
          warrant is worth to the lender.
        </li>
        <li>
          <strong>Term.</strong> A longer term gives the lender more time for an
          exit, so it makes the warrant more valuable.
        </li>
        <li>
          <strong>Exercise method.</strong> Cooley GO explains the cashless
          option: &quot;Since the value of the exercise price is &lsquo;netted
          out&rsquo; from the shares that the holder receives upon exercise, this
          is sometimes called a &lsquo;net exercise.&rsquo;&quot; (
          <ExtLink href="https://www.cooleygo.com/what-you-should-know-about-warrants/">
            Cooley GO
          </ExtLink>
          )
        </li>
        <li>
          <strong>Share class and sale treatment.</strong> Know exactly which
          stock the warrant buys and what happens to it if you sell the company.
        </li>
      </ol>

      <h2 id={H["Why the headline percentage is not your dilution"]}>
        Why the headline percentage is not your dilution
      </h2>
      <p>
        The number on the term sheet is not the share of the company you give
        up, and I would never let a founder read it that way. Coverage is a
        percentage of the loan. The lender still has to pay the strike or net it
        out, so your real cost is the gap between what your shares are worth at
        exit and the strike price. A higher coverage at a higher strike can cost
        you less than a lower coverage at a low one.
      </p>
      <p>
        If you want a sense of what lenders ask for, treat any published range
        as a starting point. Underridge&apos;s venture debt underwriting guide
        says coverage &quot;often runs in a range of about 5% to 15% of the loan
        amount&quot; (
        <ExtLink href="https://www.underridge.com/underwriting/venture-debt">
          Underridge
        </ExtLink>
        ). That is one publisher&apos;s observation, not a rule for your deal.
      </p>

      <h2 id={H["Warrants when you have not raised a priced round"]}>
        Warrants when you have not raised a priced round
      </h2>
      <p>
        This is the part almost every guide skips, and it is the part that
        matters most for the founders I work with. Most explanations assume the
        strike is simply set at your last round&apos;s price. If you are
        bootstrapped, or have not raised in years, there is no such price, so
        the strike has to be negotiated.
      </p>
      <p>
        ValueAdd VC&apos;s glossary notes that lender warrants &quot;aren&apos;t
        subject to the same vesting or 409A pricing rules&quot; as employee
        options, because &quot;the strike price is negotiated directly as part
        of the underlying deal.&quot; (
        <ExtLink href="https://valueaddvc.com/vc-glossary/warrant">
          ValueAdd VC
        </ExtLink>
        ) The strike could be fair market value at grant, a formula, or the
        price of a future series of preferred stock. That last option deserves
        care: if the future round never happens, you need to know what the
        warrant converts into.
      </p>
      <p>
        For a steadily growing GovTech company, it is also worth asking whether
        you need a warrant at all. Some growth debt structures carry none; see{" "}
        <Link href={`/blog/${GROWTH_DEBT_POST.slug}`}>
          how much growth debt a GovTech software company can take on
        </Link>{" "}
        before you compare offers.
      </p>

      <h2 id={H["What to negotiate"]}>What to negotiate</h2>
      <p>
        I treat every warrant term as negotiable, and the best time to push is
        when you have more than one term sheet. Start with coverage, then the
        strike, then the term.
      </p>
      <p>
        On the share class, I want the warrant to name exactly which stock it
        buys. If it is vague, or lets the lender pick the class later, your cap
        table gets murky and pricing your next financing gets harder. I also ask
        for the warrant to terminate automatically in a sale, so a lender whose
        loan is already repaid cannot hold up the deal.
      </p>
      <p>
        Finally, have counsel compute the actual share count the warrant
        produces under the document&apos;s own definitions, not just the stated
        percentage.
      </p>

      <h2 id={H["Ways to fund growth, by equity given up"]}>
        Ways to fund growth, by equity given up
      </h2>
      <p>
        <em>Structures described by the sources cited; terms vary by deal.</em>
      </p>

      <TableWrap caption="Ways to fund growth, by equity given up" scrollable>
        <table className="blog-table blog-table--options">
          <caption>Ways to fund growth, by equity given up</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Debt with no warrants</th>
              <th scope="col">Venture debt with warrant coverage</th>
              <th scope="col">Equity round</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Row">Equity given up at signing</td>
              <td data-label="Debt with no warrants">None</td>
              <td data-label="Venture debt with warrant coverage">
                None; a right to buy later
              </td>
              <td data-label="Equity round">Shares issued at closing</td>
            </tr>
            <tr>
              <td data-label="Row">Equity given up later</td>
              <td data-label="Debt with no warrants">None</td>
              <td data-label="Venture debt with warrant coverage">
                Only if exercised, typically around a sale or IPO
              </td>
              <td data-label="Equity round">Already given</td>
            </tr>
            <tr>
              <td data-label="Row">What sets the cost</td>
              <td data-label="Debt with no warrants">Interest and fees</td>
              <td data-label="Venture debt with warrant coverage">
                Coverage, strike, term, exercise method
              </td>
              <td data-label="Equity round">
                Valuation and investor rights
              </td>
            </tr>
            <tr>
              <td data-label="Row">Needs a priced round?</td>
              <td data-label="Debt with no warrants">No</td>
              <td data-label="Venture debt with warrant coverage">
                Strike is often set from one; negotiable without
              </td>
              <td data-label="Equity round">Is the priced round</td>
            </tr>
            <tr>
              <td data-label="Row">Negotiable items</td>
              <td data-label="Debt with no warrants">Rate and covenants</td>
              <td data-label="Venture debt with warrant coverage">
                Coverage, strike, term, share class, sale treatment
              </td>
              <td data-label="Equity round">
                Valuation, board, and terms
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={WARRANT_COVERAGE_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
            Venture Debt vs Venture Capital for GovTech
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GROWTH_DEBT_POST.slug}`}>
            How Much Growth Debt Can a GovTech Software Company Take On?
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Laws for GovTech Vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            Can Government Customers Pay Your SaaS Subscription Upfront?
          </Link>
        </li>
        <li>
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            Milestones and Holdbacks on Government Software Contracts
          </Link>
        </li>
      </ul>

      <h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>
      <p>
        Lambda Capital is a permanent capital holding company. We take a patient
        approach and invest for the long term. GovTech contract funding is one
        of our businesses.
      </p>
      <p>
        If you are weighing a term sheet with a warrant attached,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
