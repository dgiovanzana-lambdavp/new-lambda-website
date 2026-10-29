import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  COMMON_STOCK_FINANCING_FAQ,
  COMMON_STOCK_FINANCING_HEADINGS,
  FINANCING_STRATEGY_POST,
  GOVTECH_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  COMMON_STOCK_FINANCING_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function CommonStockFinancingPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Selling common stock brings in cash with no loan to repay. Every sale
          is also a securities offering, and some sales can change your small
          business status or what you must report for a security clearance.
        </strong>
      </p>
      <p>
        Common stock financing means selling ordinary ownership shares for cash.
        There is no loan to repay and no required payment schedule, so it fits a
        company without the cash flow to pay an investor back. The cost is a
        smaller ownership share. For a government technology (GovTech) company, a
        stock sale also touches securities law, small business size status and
        foreign ownership review.
      </p>
      <p>
        <em>
          Who this is for: CEOs of GovTech software companies with $1M to $10M in
          revenue whose state, local, or federal customers can take 90 to 180
          days to pay.
        </em>
      </p>
      <p>
        <em>
          This post is general education, not financial, legal, or tax advice.
        </em>
      </p>

      <h2 id={H["What common stock financing is"]}>
        What common stock financing is
      </h2>
      <p>
        A company raises equity by selling new ownership shares to investors. The
        open textbook{" "}
        <ExtLink href="https://openstax.org/books/introduction-business-2e/pages/16-4-raising-long-term-financing">
          OpenStax Introduction to Business
        </ExtLink>{" "}
        describes equity as permanent financing and says: &quot;The firm is not
        required to pay dividends or repay the investment.&quot;
      </p>
      <p>
        The same textbook notes that equity has no maturity date and that common
        stockholders have voting rights, which give them a voice in management.
        Its{" "}
        <ExtLink href="https://openstax.org/books/introduction-business-2e/pages/16-5-equity-financing">
          section on equity financing
        </ExtLink>{" "}
        explains that a firm obtains equity by selling new ownership shares, by
        retaining earnings, or through venture capital. Common stock investors
        share in the company&apos;s future value in proportion to what they own.
      </p>
      <p>
        For the full menu of financing options and how each one connects to your
        exit, see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          software company financing strategy
        </Link>{" "}
        guide.
      </p>

      <h2 id={H["Which financing fits which problem"]}>
        Which financing fits which problem
      </h2>
      <p>
        Each option fits a specific problem. The open textbook{" "}
        <ExtLink href="https://openstax.org/books/entrepreneurship/pages/9-1-overview-of-entrepreneurial-finance-and-accounting-strategies">
          OpenStax Entrepreneurship
        </ExtLink>{" "}
        states the core fit for equity: &quot;The advantage of equity financing
        is that there is no immediate cash flow requirement to repay the funds,
        as there is with debt financing.&quot;
      </p>
      <ul>
        <li>
          <strong>
            Use common stock if your problem is needing capital without the cash
            flow to pay an investor back.
          </strong>{" "}
          Investors become owners instead of creditors, and there is no
          repayment schedule.
        </li>
        <li>
          <strong>
            Use contract financing if your problem is a signed government
            contract that pays in 90 to 180 days.
          </strong>{" "}
          It is tied to the receivable itself, and on federal contracts the{" "}
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            Assignment of Claims Act
          </Link>{" "}
          rules apply. See{" "}
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            government contract financing for software companies
          </Link>
          .
        </li>
        <li>
          <strong>
            Use the contract&apos;s payment terms if your problem is the billing
            schedule itself.
          </strong>{" "}
          See{" "}
          <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
            upfront payment for government software
          </Link>
          ,{" "}
          <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
            implementation milestones and holdbacks
          </Link>{" "}
          and{" "}
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            the Prompt Payment Act
          </Link>
          .
        </li>
        <li>
          <strong>
            Use a bullet loan if your problem is a cash need now and you expect a
            sale or a big cash flow event later.
          </strong>{" "}
          The principal is repaid at the end. The{" "}
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            bullet loan vs amortizing loan guide
          </Link>{" "}
          covers how it works.
        </li>
        <li>
          <strong>
            Use an amortizing loan if your problem is funding growth while your
            collections are steady and recurring.
          </strong>{" "}
          Steady collections make a fixed monthly payment easier to plan around.
          The same guide covers when it fits.
        </li>
        <li>
          <strong>
            Use preferred stock if your problem is needing capital without fixed
            loan payments.
          </strong>{" "}
          The open textbook{" "}
          <ExtLink href="https://touro.pressbooks.pub/introductiontofinancialanalysis/chapter/2-6-interest-paid-on-bonds-and-dividends-paid-on-stock/">
            Introduction to Financial Analysis
          </ExtLink>{" "}
          explains that an unpaid preferred dividend is not treated as a default
          the way it would be with a loan, because preferred stock is an
          ownership interest rather than a liability. It also notes that most
          preferred shares are cumulative and that preferred shares rarely carry
          voting rights.
        </li>
        <li>
          <strong>
            Use venture equity if your problem is funding a bet on a very large
            exit.
          </strong>{" "}
          See{" "}
          <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
            the signals that venture capital fits
          </Link>
          .
        </li>
      </ul>

      <h2 id={H["Every stock sale is a securities offering"]}>
        Every stock sale is a securities offering
      </h2>
      <p>
        Shares of stock are securities, so selling them is regulated. The
        Securities and Exchange Commission (SEC) says in its{" "}
        <ExtLink href="https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/private-companies-sec">
          guide for private companies
        </ExtLink>{" "}
        that &quot;every offer and sale of securities, even if to just one
        person, must be either registered with the SEC or conducted under an
        exemption from registration.&quot; That applies to sales to friends,
        family and angel investors too.
      </p>
      <p>
        An offer can start earlier than you might expect. The same guide lists
        examples that, depending on context, could be considered an offer:
        calling a friend to discuss your company&apos;s fundraising, a social
        media post about the company and specific investment opportunities, or
        statements by the CEO about a future raise during an interview. Regular,
        ordinary factual business communications are generally not considered an
        offer.
      </p>
      <p>
        The agency&apos;s{" "}
        <ExtLink href="https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/offering-pathways">
          overview of offering pathways
        </ExtLink>{" "}
        describes the exemptions available to small businesses. A Rule 506(b)
        private placement raises capital from investors the company has a
        relationship with who meet certain wealth thresholds or professional
        credentials, and a company cannot use general solicitation in that kind
        of offering. Other pathways include Rule 506(c) offerings, Rule 504
        limited offerings, Regulation Crowdfunding, intrastate offerings,
        Regulation A and a registered public offering. Each has its own
        conditions. Talk to securities counsel before you offer shares to anyone.
      </p>

      <h2 id={H["Outside owners and your small business size status"]}>
        Outside owners and your small business size status
      </h2>
      <p>
        If you hold or bid on small business set aside contracts, a stock sale
        can affect your size under Small Business Administration (SBA) rules.
      </p>
      <p>
        The affiliation rule itself is in the Code of Federal Regulations (CFR)
        at{" "}
        <ExtLink href="https://www.ecfr.gov/current/title-13/section-121.103">
          13 CFR 121.103
        </ExtLink>
        . Businesses are affiliates when one controls or has the power to control
        the other. It does not matter whether control is exercised, as long as
        the power to control exists. SBA looks at factors such as ownership,
        management, previous relationships and contractual relationships, and
        control can be affirmative or negative. Control matters, not only the
        percentage an investor owns.
      </p>
      <p>
        Size can also be tested again after you win. Under{" "}
        <ExtLink href="https://www.ecfr.gov/current/title-13/section-125.12">
          13 CFR 125.12
        </ExtLink>
        , recertification of size and small business program status is required
        within 30 calendar days of a merger, acquisition or sale of or by a
        concern or its affiliate that results in a change in controlling
        interest. Contracts longer than five years, including options, also
        require recertification near the end of the fifth year and before each
        later option, and a contracting officer can require it in a set aside
        solicitation. Review any outside investment with government contracts
        counsel before you close it.
      </p>

      <h2 id={H["Foreign investors and facility clearances"]}>
        Foreign investors and facility clearances
      </h2>
      <p>
        If your company holds a facility security clearance (FCL), foreign
        ownership, control or influence (FOCI) rules apply to foreign
        shareholders and other foreign interests. The Defense Counterintelligence
        and Security Agency (DCSA) oversees those clearances.
      </p>
      <p>
        If you hold or are seeking a clearance, talk to counsel before a foreign
        investor buys shares.
      </p>

      <h2 id={H["How the options compare"]}>How the options compare</h2>
      <TableWrap
        caption="Financing options compared by repayment, fit, and further reading"
        scrollable
      >
        <table>
          <caption>
            Financing options compared by repayment, fit, and further reading
          </caption>
          <thead>
            <tr>
              <th>Option</th>
              <th>Paid back on a schedule?</th>
              <th>Fits this problem</th>
              <th>Read more</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Option">Common stock</td>
              <td data-label="Paid back on a schedule?">No</td>
              <td data-label="Fits this problem">
                Capital without the cash flow to pay an investor back
              </td>
              <td data-label="Read more">This post</td>
            </tr>
            <tr>
              <td data-label="Option">Contract financing</td>
              <td data-label="Paid back on a schedule?">
                Tied to the government payment
              </td>
              <td data-label="Fits this problem">
                Signed contract, slow agency payment
              </td>
              <td data-label="Read more">
                <Link href={`/blog/${GOVTECH_POST.slug}`}>
                  Contract financing
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="Option">Contract payment terms</td>
              <td data-label="Paid back on a schedule?">
                Set by the contract
              </td>
              <td data-label="Fits this problem">The billing schedule itself</td>
              <td data-label="Read more">
                <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
                  Upfront payment
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="Option">Bullet loan</td>
              <td data-label="Paid back on a schedule?">
                Yes, principal at the end
              </td>
              <td data-label="Fits this problem">
                Cash now, sale or big cash flow event later
              </td>
              <td data-label="Read more">
                <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
                  Bullet vs amortizing
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="Option">Amortizing loan</td>
              <td data-label="Paid back on a schedule?">
                Yes, regular payments
              </td>
              <td data-label="Fits this problem">
                Steady, recurring collections
              </td>
              <td data-label="Read more">
                <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
                  Bullet vs amortizing
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="Option">Preferred stock</td>
              <td data-label="Paid back on a schedule?">
                No fixed loan payments
              </td>
              <td data-label="Fits this problem">
                Capital without fixed loan payments
              </td>
              <td data-label="Read more">See the list above</td>
            </tr>
            <tr>
              <td data-label="Option">Venture equity</td>
              <td data-label="Paid back on a schedule?">No</td>
              <td data-label="Fits this problem">
                Funding a bet on a very large exit
              </td>
              <td data-label="Read more">
                <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
                  Venture capital signals
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        <em>
          Each option fits a different problem. The table describes how each one
          works and does not rank them.
        </em>
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={COMMON_STOCK_FINANCING_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software Company Financing Strategy: Start With Your Exit
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained for GovTech Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${TERM_LOAN_AMORTIZING_POST.slug}`}>
            Bullet Loan vs Amortizing Loan for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Act: What GovTech Vendors Can Collect When Government
            Pays Late
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
