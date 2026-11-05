import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_POST,
  PROMPT_PAYMENT_POST,
  REVOLVING_LINE_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_FAQ,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_HEADINGS,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function SubcontractorPaymentFromPrimePostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        As a subcontractor, you are usually paid after the government pays the
        prime. Some states expect the prime to pay you within 10 days of being
        paid. Federal rules ask primes to pass along faster payments to small
        business subs. Learn the prime&apos;s billing cutoff and the
        government&apos;s pay date, and treat what remains as a timing problem,
        not a growth problem.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a software company that sells through a prime. Some months the
        money comes in 50 days. Other months it takes 80. The CEO assumes the
        prime is sitting on the cash. Often, it is not. The invoice simply missed
        a cycle.
      </p>

      <p>
        <em>
          Who this is for: chief executive officers of government technology
          (GovTech) software companies with about $1M to $10M in revenue that
          sell as a subcontractor on state, local or federal contracts.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            Your pay date is the government&apos;s pay date plus the prime&apos;s
            pass down. Learn both.
          </li>
          <li>
            Maryland and Pennsylvania set 10 day clocks for some subs. Other
            states differ.
          </li>
          <li>
            On federal contracts, primes are asked to pass faster payments to
            small business subs. It is not a hard deadline.
          </li>
          <li>
            A missed billing cutoff can cost a full cycle. Fix the misses, and
            fund only the dated wait that remains.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Usually soon after the government pays the prime. Some states set a
        clock. Maryland expects primes to pay undisputed amounts within 10 days
        of receiving payment from the State. Pennsylvania sets 10 days for some
        small diverse and veteran owned business subcontractors. On federal
        contracts, primes are asked to pass faster payments to small business
        subs. Check your subcontract and your state.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Prime contractor (prime): the company that holds the contract with the
          government.
        </li>
        <li>
          Subcontractor (sub): a company the prime hires to do part of the work.
          Here, you.
        </li>
        <li>
          Flow down: a rule in the prime&apos;s contract that must also go into
          your subcontract.
        </li>
        <li>
          Undisputed amount: money owed to you that no one has a good faith
          reason to contest.
        </li>
        <li>Retainage: part of a payment held back until work is finished.</li>
        <li>
          Procurement officer: the government official who manages the contract.
        </li>
        <li>
          Accelerated payment: the government paying the prime faster than the
          standard deadline.
        </li>
      </ul>

      <h2 id={H["How money reaches a subcontractor"]}>
        How money reaches a subcontractor
      </h2>

      <p>
        The chain often runs like this. You invoice the prime. The prime bills
        the government on its own cycle. The government pays the prime. The
        prime pays you.
      </p>

      <p>Each link has its own clock. Your wait is the sum of all of them.</p>

      <p>
        The government&apos;s deadlines for paying the prime are covered in our
        post on{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws
        </Link>
        . The prime can also see when the government paid it, using the tools in
        our{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          payment status post
        </Link>
        . And a clean invoice still matters at every link: see{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          government invoice acceptance
        </Link>
        .
      </p>

      <p>
        Why do primes pay subs only after they are paid? The likely reason is
        cash. A prime with many subs would otherwise front the money for all of
        them.
      </p>

      <h2 id={H["When states set a clock: Maryland and Pennsylvania"]}>
        When states set a clock: Maryland and Pennsylvania
      </h2>

      <p>
        Maryland&apos;s small business office puts the rule this way:{" "}
        <em>
          &quot;Within 10 days of receiving a progress or final payment from the
          State, a contractor is expected to pay a subcontractor or supplier,
          and a subcontractor is expected to pay a lower tier subcontractor,
          any undisputed amount for work performed under a State procurement
          contract.&quot;
        </em>{" "}
        (
        <ExtLink href="https://gomdsmallbiz.maryland.gov/Documents/Resources/Prompt%20Payment%20Guide_09.2024_Finalv2.pdf">
          Maryland Governor&apos;s Office of Small, Minority &amp; Women Business
          Affairs, prompt payment guide
        </ExtLink>
        )
      </p>

      <p>
        The guide also defines the key term:{" "}
        <em>
          &quot;An “undisputed amount” is payment owed by a contractor to a
          subcontractor or supplier for which there is no good faith dispute,
          including any retainage withheld.&quot;
        </em>
      </p>

      <p>
        Note what starts the clock. It is the prime&apos;s payment from the
        State, not your invoice.
      </p>

      <p>
        Maryland also has a written process. A prime that holds back payment
        must tell you why in writing and send a copy to the procurement officer.
        The procurement officer then contacts you within two business days. If
        the amount is undisputed, the prime is told to pay within three business
        days. If it still goes unpaid, you report that in writing. The State
        then follows further steps and can suspend further payments to the
        prime.
      </p>

      <p>
        Pennsylvania has a similar rule for some contracts. Its Department of
        General Services says primes on state contracts for goods and services,
        other than construction, must pay small diverse and veteran owned
        business subs within 10 days of being paid by the state. That covers
        completed and accepted work that was properly invoiced, on contracts with
        small business goals. (
        <ExtLink href="https://www.pa.gov/agencies/dgs/newsroom/shapiro-administration-implements-prompt-pay-policy-so-small-diverse-veteran-owned-businesses-can-receive-payment-faster-on-state-contracts-">
          Pennsylvania Department of General Services, prompt pay policy
        </ExtLink>
        )
      </p>

      <p>Other states differ. Check your state and your subcontract.</p>

      <h2 id={H["Federal contracts: faster payments passed down"]}>
        Federal contracts: faster payments passed down
      </h2>

      <p>
        On federal contracts, a clause called FAR 52.232-40 can apply. When the
        government pays the prime early, the prime should pay its small business
        subs within 15 days, to the maximum extent practicable, once it has a
        proper invoice and the documents it needs. (
        <ExtLink href="https://www.acquisition.gov/far/52.232-40">
          FAR 52.232-40
        </ExtLink>
        )
      </p>

      <p>
        The clause adds:{" "}
        <em>
          &quot;The Contractor agrees to make such payments to its small
          business subcontractors without any further consideration from or fees
          charged to the subcontractor.&quot;
        </em>
      </p>

      <p>
        It also sets a limit:{" "}
        <em>
          &quot;The acceleration of payments under this clause does not provide
          any new rights under the Prompt Payment Act.&quot;
        </em>
      </p>

      <p>
        What that means: the clause helps, but it is not a hard deadline. Your
        subcontract terms still set your due date.
      </p>

      <h2 id={H["The invoice that missed the prime's cutoff"]}>
        The invoice that missed the prime&apos;s cutoff
      </h2>

      <p>
        <strong>Problem:</strong> our CEO runs a $4M software company. This is an
        illustration, not a real company. It is a sub to a prime on a Maryland
        state contract and bills $50,000 a month. Payments arrive anywhere from
        50 to 80 days after each invoice. The board suggests raising a growth
        round &quot;to carry the prime contract.&quot; The likely reason: more
        cash feels like a fix for every gap.
      </p>

      <p>
        <em>Table 1: One missed cutoff, illustrative</em>
      </p>

      <TableWrap caption="Table 1: One missed cutoff, illustrative">
        <table>
          <caption>Table 1: One missed cutoff, illustrative</caption>
          <thead>
            <tr>
              <th scope="col">Step</th>
              <th scope="col">Before the cutoff</th>
              <th scope="col">One day after</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Step">Prime bills the State</td>
              <td data-label="Before the cutoff">About day 10</td>
              <td data-label="One day after">About day 40</td>
            </tr>
            <tr>
              <td data-label="Step">State pays the prime</td>
              <td data-label="Before the cutoff">About day 40</td>
              <td data-label="One day after">About day 70</td>
            </tr>
            <tr>
              <td data-label="Step">Prime pays you (within 10 days)</td>
              <td data-label="Before the cutoff">By about day 50</td>
              <td data-label="One day after">By about day 80</td>
            </tr>
            <tr>
              <td data-label="Step">Extra days waiting</td>
              <td data-label="Before the cutoff">0</td>
              <td data-label="One day after">About 30</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        Our math assumes the prime bills the State about 10 days after your
        invoice, and the State pays the prime about 30 days later.
      </p>

      <p>
        <strong>Choices:</strong> there are three paths.
      </p>

      <ol>
        <li>Raise growth capital and accept the swings.</li>
        <li>Press the prime for faster terms on every invoice.</li>
        <li>
          Map the chain, hit the prime&apos;s billing cutoff, track when the
          State pays the prime, use the State&apos;s process only for undisputed
          amounts held past 10 days, and fund the dated wait that remains with a
          tool built for timing.
        </li>
      </ol>

      <p>
        <strong>Decision:</strong> path 3.
      </p>

      <p>
        <strong>Why it fits:</strong>
      </p>

      <ul>
        <li>
          The prime bills the State once a month. Invoices that reach it after
          its cutoff ride the next cycle, about 30 extra days. That, not the
          prime holding cash, explains most of the swings.
        </li>
        <li>
          Maryland expects the prime to pay undisputed amounts within 10 days of
          being paid. Once the CEO knows when the State paid, the CEO knows when
          the money is due.
        </li>
        <li>
          The State has a written process if an undisputed amount is held. The
          CEO keeps it in reserve and treats the prime as a partner first.
        </li>
        <li>
          The remaining wait is a known schedule. A schedule is a timing problem
          with a known end.
        </li>
        <li>
          Growth capital is built for growth. Using it to cover a billing cutoff
          leaves the cutoff problem in place every month.
        </li>
      </ul>

      <p>
        <strong>Lesson:</strong> as a sub, learn the government&apos;s pay date
        and the prime&apos;s pass down days, then invoice before the prime&apos;s
        cutoff.
      </p>

      <p>
        Our view: for a sub, the slow part is usually the chain, not the prime,
        so learn its dates, fix the cutoff misses, and fund only the dated wait.
      </p>

      <h2 id={H["A subcontractor payment routine"]}>
        A subcontractor payment routine
      </h2>

      <ol>
        <li>
          Ask the prime for its billing cutoff and how often it bills the
          government.
        </li>
        <li>
          Send your invoice before the cutoff, with every document the prime
          needs to bill.
        </li>
        <li>Ask the prime to tell you when the government pays it.</li>
        <li>
          Know which rule applies: your subcontract terms, your state&apos;s
          rule, and whether FAR 52.232-40 is in the prime contract.
        </li>
        <li>
          If an undisputed amount is held past your state&apos;s deadline, follow
          the state&apos;s written process. Use it as a last step.
        </li>
        <li>
          Record the expected pay date (government pay date plus pass down days)
          in your cash forecast.
        </li>
      </ol>

      <p>
        Selling to local or grant funded customers too?{" "}
        <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
          Local customers may pay on a meeting calendar
        </Link>
        , and{" "}
        <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
          grant funded customers often pay you first and claim the money back
          later
        </Link>
        .
      </p>

      <h2 id={H["Timing or growth? Use X if you have Y problem"]}>
        Timing or growth? Use X if you have Y problem
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
        Size the gap first.{" "}
        <em>&quot;Your cash flow gap is a number, not a feeling.&quot;</em> (
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        )
      </p>

      <p>
        <em>Table 2: Timing problem or growth problem</em>
      </p>

      <TableWrap caption="Table 2: Timing problem or growth problem">
        <table>
          <caption>Table 2: Timing problem or growth problem</caption>
          <thead>
            <tr>
              <th scope="col">If you have</th>
              <th scope="col">It is likely</th>
              <th scope="col">Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="If you have">
                Invoices that miss the prime&apos;s cutoff
              </td>
              <td data-label="It is likely">Timing you can fix</td>
              <td data-label="Use">The subcontractor payment routine</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Recurring dated waits across prime contracts
              </td>
              <td data-label="It is likely">Timing to fund</td>
              <td data-label="Use">
                A{" "}
                <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
                  revolving line of credit
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                One large subcontract with a long dated wait
              </td>
              <td data-label="It is likely">Timing to fund</td>
              <td data-label="Use">
                <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
                  Loans with bullet payments
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">Demand you cannot serve</td>
              <td data-label="It is likely">Growth</td>
              <td data-label="Use">Growth capital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        A growth problem means demand you cannot serve without more people,
        product or reach. That is what growth capital is for.
      </p>

      <p>
        As our acceptance post puts it:{" "}
        <em>
          &quot;before you finance a payment delay, find out whose delay it
          is.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          Government invoice acceptance
        </Link>
        )
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={SUBCONTRACTOR_PAYMENT_FROM_PRIME_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt payment laws for GovTech vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            How do I check when the government will pay my invoice?
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            Government invoice acceptance
          </Link>
        </li>
        <li>
          <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
            The government contractor cash flow gap
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
          </Link>
        </li>
        <li>
          <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
            Local government board approval and vendor payments
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
            Grant funded government customers and vendor payments
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
