import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  FINANCING_STRATEGY_POST,
  GOVTECH_POST,
  PROMPT_PAYMENT_POST,
  VC_WRONG_CHOICE_FAQ,
  VC_WRONG_CHOICE_HEADINGS,
  VENTURE_DEBT_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  VC_WRONG_CHOICE_HEADINGS.map((h) => [h.text, h.id]),
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

export default function VcWrongChoicePostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          Some of the best software companies we know would have been worse off
          with a venture check.
        </strong>
      </p>
      <p>
        Venture capital is right for a startup that can plausibly grow very
        large, very fast, and reach an exit within a venture fund&apos;s life.
        Venture investors look for companies that could return their whole fund,
        and each fund runs on a set life. Many good
        vertical software companies do not fit that model: their markets are
        focused, they plan to stay profitable or pay their owners, they have no
        plan to sell on a fund&apos;s timeline, or they wait months to get paid
        by government customers. For those companies, other kinds of capital
        often fit better. For the full set of options, see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
          series hub on software company financing strategy
        </Link>
        .
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice.
        </em>
      </p>

      <h2 id={H["How venture capital works, in one paragraph"]}>
        How venture capital works, in one paragraph
      </h2>
      <p>
        We find most of the confusion goes away once you see what venture capital
        is built to do. NYU&apos;s entrepreneurship program puts it plainly:
        &quot;Venture capital is a specific financial instrument designed for a
        specific type of business: one that can grow very large, very fast, in a
        way that generates returns large enough to justify the risk of the
        entire fund.&quot; (
        <ExtLink href="https://entrepreneur.nyu.edu/blog/2026/04/24/you-dont-have-a-fundraising-problem-you-have-a-business-problem/">
          NYU Entrepreneurship
        </ExtLink>
        ) The same piece explains that investors need outliers, companies that
        return many times the investment, to deliver what their own investors
        expect. That is not a judgment on your company. It is the math of the
        fund.
      </p>

      <h2 id={H["Seven signals venture capital is the wrong tool"]}>
        Seven signals venture capital is the wrong tool
      </h2>
      <p>
        When a founder asks us whether to raise, we walk through a short list.
      </p>
      <p>
        <strong>1. Your market is focused, not massive.</strong> Ask yourself
        honestly whether your market could support the kind of outcome a venture
        fund needs. If the honest answer is a strong niche, we treat that as a
        reason to look at other capital first.
      </p>
      <p>
        <strong>
          2. Your realistic ceiling is a healthy company, not a fund returner.
        </strong>{" "}
        Picture the realistic version of your company several years out. If what
        you see is a durable, profitable business rather than one that could
        return a fund, we count that as a signal.
      </p>
      <p>
        <strong>
          3. You want to pay yourself and other owners from profits.
        </strong>{" "}
        Venture investors usually want cash reinvested.
      </p>
      <p>
        <strong>
          4. You have no plan to sell within a fund&apos;s timeline.
        </strong>{" "}
        Ask whether you want to sell at all, and on what timeline. Venture funds
        run on a set life.
        If selling is not part of your plan, we count that as a mismatch.
      </p>
      <p>
        <strong>5. You want to keep control of big decisions.</strong> Ask how
        you would feel about a board seat, regular reporting, and outside
        investors weighing in on major choices. If keeping those decisions
        matters most to you, weigh that carefully.
      </p>
      <p>
        <strong>
          6. Your cash arrives on a government payment clock.
        </strong>{" "}
        Payment timing on government contracts matters here, which we cover in
        the GovTech section below.
      </p>
      <p>
        <strong>
          7. You need money just to keep the business alive.
        </strong>{" "}
        If the business needs a raise just to survive, we would slow down. We
        would rather fix the business first than raise money to cover the gap.
      </p>

      <h2 id={H["The vertical SaaS debate: is the market too small?"]}>
        The vertical SaaS debate: is the market too small?
      </h2>
      <p>
        Investors disagree about whether vertical markets are too small for a
        venture outcome.
      </p>
      <p>
        Our own read: the debate is about whether some vertical companies can be
        venture businesses. It does not mean every vertical company should be
        one.
      </p>

      <h2 id={H["What fund timelines mean for founders"]}>
        What fund timelines mean for founders
      </h2>
      <p>
        Fund life sounds like an investor detail, but in our experience it shapes
        the founder&apos;s options years later.
      </p>
      <p>
        Research suggests that pressure affects outcomes. A study in the
        Strategic Management Journal found that while exit pressure from venture
        investors did not change the odds of an IPO, &quot;the pressure
        significantly increases the hazard of M&amp;A and
        liquidation.&quot; (
        <ExtLink href="https://doi.org/10.1002/smj.3432">
          Strategic Management Journal
        </ExtLink>
        ) The authors found that independent directors moderated the effect.
      </p>

      <h2 id={H["What GovTech CEOs should weigh"]}>
        What GovTech CEOs should weigh
      </h2>
      <p>
        For the government software founders we talk to, payment timing is often
        the deciding factor.
      </p>
      <p>
        A long wait on a signed contract is a cash flow problem, and it has its
        own tools. Equity is not the only answer to it. For more, see{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          government contract financing for software companies
        </Link>
        ,{" "}
        <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
          the Assignment of Claims Act explained
        </Link>
        , and{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        .
      </p>

      <h2 id={H["If not venture capital, then what?"]}>
        If not venture capital, then what?
      </h2>
      <p>
        There is a whole toolbelt, and we would rather founders see all of it.
        The NYU piece names bootstrapping, revenue based financing, grants, and
        competitions as instruments better suited to many companies, and says
        choosing them is not a failure.
      </p>
      <p>
        For the full map, see the{" "}
        <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>series hub</Link>.
        For debt and equity side by side, see{" "}
        <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
          venture debt vs venture capital for GovTech
        </Link>
        .
      </p>

      <h2 id={H["Venture capital fit check"]}>Venture capital fit check</h2>
      <p>
        <em>A quick self check.</em>
      </p>
      <TableWrap caption="Venture capital fit check" scrollable>
        <table>
          <caption>Venture capital fit check</caption>
          <thead>
            <tr>
              <th>Question</th>
              <th>Points toward venture capital</th>
              <th>Points away from venture capital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Question">
                Could the business become large enough to return a venture fund?
              </td>
              <td data-label="Points toward venture capital">Yes</td>
              <td data-label="Points away from venture capital">
                Ceiling is a healthy, smaller business
              </td>
            </tr>
            <tr>
              <td data-label="Question">How big is the market?</td>
              <td data-label="Points toward venture capital">Very large</td>
              <td data-label="Points away from venture capital">
                A focused niche
              </td>
            </tr>
            <tr>
              <td data-label="Question">Do you plan to sell?</td>
              <td data-label="Points toward venture capital">
                Comfortable selling within a fund&apos;s life
              </td>
              <td data-label="Points away from venture capital">
                No plan to sell on that timeline
              </td>
            </tr>
            <tr>
              <td data-label="Question">Profits: reinvest or distribute?</td>
              <td data-label="Points toward venture capital">
                Reinvest to grow and scale
              </td>
              <td data-label="Points away from venture capital">
                Pay owners from profits
              </td>
            </tr>
            <tr>
              <td data-label="Question">Board and reporting?</td>
              <td data-label="Points toward venture capital">
                Comfortable with a board seat and reporting
              </td>
              <td data-label="Points away from venture capital">
                Want to keep big decisions
              </td>
            </tr>
            <tr>
              <td data-label="Question">
                Can the business survive without a raise?
              </td>
              <td data-label="Points toward venture capital">Yes</td>
              <td data-label="Points away from venture capital">No</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={VC_WRONG_CHOICE_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link href={`/blog/${FINANCING_STRATEGY_POST.slug}`}>
            Software Company Financing Strategy: Start With Your Exit
          </Link>
        </li>
        <li>
          <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
            Venture Debt vs Venture Capital for GovTech
          </Link>
        </li>
        <li>
          <Link href={`/blog/${GOVTECH_POST.slug}`}>
            Government Contract Financing for Software Companies
          </Link>
        </li>
        <li>
          <Link href={`/blog/${ASSIGNMENT_OF_CLAIMS_POST.slug}`}>
            The Assignment of Claims Act Explained
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt Payment Laws for GovTech Vendors
          </Link>
        </li>
      </ul>

      <h2 id={H["About Lambda Capital"]}>About Lambda Capital</h2>
      <p>
        Lambda Capital is a permanent capital holding company. We take a patient
        approach and invest for the long term. GovTech contract funding is one
        of our lines of business.
      </p>
      <p>
        If you are working through whether venture capital fits your company,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
