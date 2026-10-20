import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  FINANCING_STRATEGY_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PREFERRED_STOCK_FAQ,
  PREFERRED_STOCK_HEADINGS,
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  PREFERRED_STOCK_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PreferredStockPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          There is a form of equity that usually carries no vote and never takes
          a share of your upside.
        </strong>
      </p>
      <p>
        Nonconvertible preferred stock, often called straight preferred, is a
        class of ownership that receives its money back and its dividends ahead
        of common stock but never converts into common shares. It ranks behind
        all debt and ahead of common stock. Because it is equity, a missed
        dividend is not treated as a default the way a missed loan payment is.
        Many preferred shares are cumulative, meaning unpaid dividends carry
        forward until paid. Holders often have no vote. For a profitable software
        company with uneven cash flow, that can mean capital without monthly loan
        payments. The tradeoff is cost: preferred dividends are not tax
        deductible the way loan interest is. For where it fits among other tools,
        see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          series hub on software company financing strategy
        </Link>
        .
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, accounting, or
          investment advice. It describes how the instrument works; it does not
          describe or recommend any particular terms.
        </em>
      </p>

      <h2 id={H["What nonconvertible preferred stock is"]}>
        What nonconvertible preferred stock is
      </h2>
      <p>
        Start with preferred stock in general.{" "}
        <ExtLink href="https://carta.com/learn/equity/common-stock-vs-preferred-stock/">
          Carta
        </ExtLink>
        , an equity management platform, describes it this way: &quot;Preferred
        stock is a type of equity ownership that offers expanded rights and
        liquidation preferences to shareholders.&quot; In plain terms, preferred
        holders are paid before common holders.
      </p>
      <p>
        The nonconvertible kind is the simplest version.{" "}
        <ExtLink href="https://www.kirkland.com/publications/private-investment-and-family-office-insights/2020/07/family-investors-minority-equity-capital">
          Kirkland &amp; Ellis
        </ExtLink>
        , a law firm, describes &quot;straight preferred&quot; as preferred
        equity that receives a priority return of capital and yield, as distinct
        from participating or convertible preferred.
      </p>

      <h2 id={H["Nonconvertible vs convertible preferred"]}>
        Nonconvertible vs convertible preferred
      </h2>
      <p>
        The difference is what happens when the company is sold. With convertible
        preferred, the holder can switch into common shares.{" "}
        <ExtLink href="https://carta.com/learn/equity/liquidity-events/liquidation-preferences/">
          Carta&apos;s guide to liquidation preferences
        </ExtLink>{" "}
        puts it simply: &quot;Investors will convert their preferred shares to
        common shares when it&apos;s more advantageous.&quot;
      </p>
      <p>
        A straight preferred holder has no such switch. It receives its priority
        return of capital and yield, and the rest of the value belongs to common
        holders. Convertible preferred is the version venture investors typically
        hold.{" "}
        <ExtLink href="https://www.cravath.com/a/web/qtauHRtkL68hXNS4WE7Unz/91Paqo/chambers_venture-capital-2024_020_usa-lp.pdf">
          Cravath, Swaine &amp; Moore
        </ExtLink>
        , a law firm, writes in a guide to American venture capital practice that
        venture capital investors typically invest through convertible preferred
        stock or other convertible instruments, while common stock is generally
        reserved for founders, employees and a limited number of early investors.
        For when venture capital does and does not fit, see{" "}
        <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
          whether venture capital is right for a vertical software company
        </Link>
        .
      </p>

      <h2 id={H["Where it sits in the capital stack"]}>
        Where it sits in the capital stack
      </h2>
      <p>
        The order of who gets paid is the most useful way I know to understand
        any security.{" "}
        <ExtLink href="https://www.bonadio.com/article/debt-equity-or-preferred-equity-structuring-capital-to-match-business-strategy/">
          The Bonadio Group
        </ExtLink>
        , an accounting and advisory firm, describes it this way: &quot;preferred
        equity sits between debt and common equity in the capital stack.&quot; In
        a default, preferred holders are paid after lenders but before common
        shareholders.
      </p>

      <h2 id={H["How the dividends work, and why they can wait"]}>
        How the dividends work, and why they can wait
      </h2>
      <p>
        This is the feature that sets preferred stock apart from a loan. An open
        finance textbook from{" "}
        <ExtLink href="https://touro.pressbooks.pub/introductiontofinancialanalysis/chapter/2-6-interest-paid-on-bonds-and-dividends-paid-on-stock/">
          Touro University Press
        </ExtLink>{" "}
        explains: &quot;If the dividend is not paid, it is not considered a
        &apos;default&apos; as with a loan or debt; this is because preferred
        stock represents ownership interests and not a liability.&quot;
      </p>
      <p>
        Dividends can be cumulative or not.{" "}
        <ExtLink href="https://openstax.org/books/principles-finance/pages/11-4-preferred-stock">
          OpenStax Principles of Finance
        </ExtLink>
        , an open textbook from Rice University, explains that with cumulative
        preferred stock, a skipped dividend must eventually be paid to preferred
        holders before common holders receive dividends. With noncumulative
        preferred stock, a skipped dividend is lost to the holder for good.
      </p>

      <h2 id={H["What it means for control"]}>What it means for control</h2>
      <p>
        Ownership and control are not the same thing. The OpenStax textbook&apos;s
        comparison of the two classes lists voting rights for common stock and
        none for preferred stock. There is an exception, which{" "}
        <ExtLink href="https://openstax.org/books/principles-finance/pages/17-6-alternative-sources-of-funds">
          the same textbook notes
        </ExtLink>
        : &quot;in some cases, preferred shareholders receive voting rights until
        they are paid the dividends that are due.&quot;
      </p>
      <p>
        That is the sense in which preferred stock can be growth capital without
        giving up control: the holder has a priority claim on capital and
        dividends rather than a vote on how the company is run. The specific
        rights attached to any issue are set in its own documents.
      </p>

      <h2 id={H["How holders get their money back without a sale"]}>
        How holders get their money back without a sale
      </h2>
      <p>
        A straight preferred holder does not share in a sale the way a common
        holder does, so the question is how its capital comes back. Some
        structures include a redemption feature. The{" "}
        <ExtLink href="https://www.kirkland.com/publications/private-investment-and-family-office-insights/2020/07/family-investors-minority-equity-capital">
          same Kirkland &amp; Ellis publication
        </ExtLink>{" "}
        describes one form as &quot;a right to cause the company to redeem the
        preferred equity after some agreed to period&quot;.
      </p>

      <h2 id={H["Preferred stock vs a loan: cash flow and cost"]}>
        Preferred stock vs a loan: cash flow and cost
      </h2>
      <p>
        The comparison with a loan comes down to timing and cost. On timing,{" "}
        <ExtLink href="https://www.bonadio.com/article/debt-equity-or-preferred-equity-structuring-capital-to-match-business-strategy/">
          the same accounting firm writes
        </ExtLink>
        : &quot;Preferred equity can be an attractive option for business owners
        who want flexible capital without the pressure of monthly repayments,
        while also limiting dilution compared to common equity.&quot; The firm
        also notes it is higher risk than debt for the holder, because preferred
        equity is junior to all loans in a liquidation.
      </p>
      <p>
        On cost, the Touro University textbook explains that interest on debt is
        tax deductible to the corporation, while dividends on preferred and
        common stock are not, and that interest must be paid before any preferred
        dividend.
      </p>

      <h2 id={H["When it fits a government technology software company"]}>
        When it fits a government technology software company
      </h2>
      <p>
        For a government technology (GovTech) company, the timing of customer
        payments is the backdrop to any capital decision.{" "}
        <ExtLink href="https://amerifusionbookkeeping.com/cash-flow-government-contractors/">
          Amerifusion Bookkeeping
        </ExtLink>
        , which works with government contractors, describes the pattern:
        &quot;you deliver the work first, then wait 30, 60, or 90 days for the
        government to pay.&quot;
      </p>
      <p>
        In my judgment, that is where an instrument whose payouts can wait lines
        up with the business: a profitable or nearly profitable company, not
        raising venture rounds, whose owners want to keep control. It lines up
        less well when the lowest cost of capital matters most, because of the
        tax treatment above.
      </p>
      <p>
        Shortening the wait itself is a separate step. For more, see{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          the Assignment of Claims Act explained
        </Link>
        ,{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          what vendors can collect when government pays late
        </Link>
        ,{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront payment on government software subscriptions
        </Link>
        , and{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          implementation payment milestones
        </Link>
        .
      </p>

      <h2 id={H["Nonconvertible preferred, convertible preferred, and a loan"]}>
        Nonconvertible preferred, convertible preferred, and a loan
      </h2>
      <p>
        <em>A summary of the structures described above.</em>
      </p>
      <TableWrap
        caption="Nonconvertible preferred, convertible preferred, and a loan"
        scrollable
      >
        <table>
          <caption>
            Nonconvertible preferred, convertible preferred, and a loan
          </caption>
          <thead>
            <tr>
              <th></th>
              <th>Nonconvertible (straight) preferred</th>
              <th>Convertible preferred</th>
              <th>Loan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="">What it is</td>
              <td data-label="Nonconvertible (straight) preferred">
                Equity with a priority return of capital and yield
              </td>
              <td data-label="Convertible preferred">
                Equity that can convert into common stock
              </td>
              <td data-label="Loan">Debt that must be repaid</td>
            </tr>
            <tr>
              <td data-label="">Rank in a liquidation</td>
              <td data-label="Nonconvertible (straight) preferred">
                After debt, before common
              </td>
              <td data-label="Convertible preferred">Ahead of common</td>
              <td data-label="Loan">Ahead of preferred and common</td>
            </tr>
            <tr>
              <td data-label="">Share of upside in a sale</td>
              <td data-label="Nonconvertible (straight) preferred">
                Priority return of capital and yield only
              </td>
              <td data-label="Convertible preferred">
                Converts when that is more advantageous
              </td>
              <td data-label="Loan">None</td>
            </tr>
            <tr>
              <td data-label="">Missed payment</td>
              <td data-label="Nonconvertible (straight) preferred">
                Not a default
              </td>
              <td data-label="Convertible preferred">Not a default</td>
              <td data-label="Loan">Default on the loan</td>
            </tr>
            <tr>
              <td data-label="">Tax treatment of payments</td>
              <td data-label="Nonconvertible (straight) preferred">
                Dividends not deductible
              </td>
              <td data-label="Convertible preferred">
                Dividends not deductible
              </td>
              <td data-label="Loan">Interest deductible</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={PREFERRED_STOCK_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software Company Financing Strategy: Start With Your Exit
          </Link>
        </li>
        <li>
          <Link href={`/blog/${VC_WRONG_CHOICE_POST.slug}`}>
            Is Venture Capital Right for My Startup? Seven Signals for Vertical
            Software CEOs
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained for GovTech Software Companies
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
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
