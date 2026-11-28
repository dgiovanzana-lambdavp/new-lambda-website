import type { ReactNode } from "react";
import FounderCtaBlock from "./FounderCtaBlock";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_POST,
  OPTIONS_VS_WARRANTS_FAQ,
  OPTIONS_VS_WARRANTS_HEADINGS,
  OPTIONS_VS_WARRANTS_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  OPTIONS_VS_WARRANTS_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function OptionsVsWarrantsPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>
      <p>
        Options and warrants can look alike. Both can be a right to buy shares
        later at a set price. They usually go to different people, follow
        different rules, and both can dilute you if they are used and the company
        issues new shares. Learn the words. Then read the paper with your
        counsel.
      </p>
      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>
      <p>
        A founder sees the word option on an employee grant. The same founder
        sees the word warrant in a financing paper. Both talk about buying shares
        later at a set price. It is easy to treat them as the same ticket.
      </p>
      <p>
        The reason that mixup matters is simple. They usually do different jobs.
        Options usually go to employees as pay for work. Warrants usually go to
        investors when the company raises money. Both can dilute owners if they
        are exercised and the company issues new shares. We explain the words so
        you can read the paper.
      </p>
      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            An option and a warrant can both be a right to buy shares later at a
            set price.
          </li>
          <li>
            Options usually go to employees as pay for work. Warrants usually go
            to investors when the company raises money (likely).
          </li>
          <li>
            Employee options come with words like vesting, ISO or NSO, and 409A.
            A warrant is a contract with its own terms.
          </li>
          <li>
            Both can dilute owners if they are exercised and the company issues
            new shares (likely).
          </li>
          <li>
            Warrant coverage is a label for size, not a share of the company. A
            government payment warrant is not a stock warrant.
          </li>
        </ul>
      </blockquote>
      <h2 id={H["The direct answer"]}>The direct answer</h2>
      <p>
        Options and warrants can both let someone buy shares later at a set
        price. They usually go to different people and follow different rules.
        Both can dilute owners if they are exercised and the company issues new
        shares. Learn the words, then read the grant or the financing paper with
        your counsel.
      </p>
      <h3>A few words you will hear</h3>
      <ul>
        <li>
          Stock option (in this post): a right the company grants, usually for
          work, to buy its shares later at a set price.
        </li>
        <li>
          Warrant: a contract that gives the holder the right to buy shares from
          the company later at a set price.
        </li>
        <li>
          Listed option: an option traded on an exchange between market
          participants, not issued by your company as pay or as part of your
          financing.
        </li>
      </ul>
      <h2 id={H["What is a stock option?"]}>What is a stock option?</h2>
      <p>
        In this post, a stock option is a right the company grants. It is usually
        granted for work. It lets the holder buy shares later at a set price. It
        is not a promise that the shares will be worth more. It is also not an
        option traded on an exchange.
      </p>
      <p>
        The SEC draws a line between an employee stock ownership plan and an
        employee stock option plan.{" "}
        <em>
          &quot;This type of plan should not be confused with employee stock
          option plans, which give employees the right to buy their
          company&apos;s stock at a set price after a certain period of
          time.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.sec.gov/investor/pubs/employeestockownershipplans.htm">
          SEC, Employee Stock Ownership Plans
        </ExtLink>
        ) That is the official contrast. This post is about that kind of option.
        It is not about an employee stock ownership plan.
      </p>
      <p>
        If the option is pay for work, tax events can happen at more than one
        time. The IRS lists those times.{" "}
        <em>
          &quot;If you receive an option to buy stock as payment for your
          services, you may have income when you receive the option, when you
          exercise the option, or when you dispose of the option or stock
          received when you exercise the option.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/taxtopics/tc427">
          IRS Topic 427
        </ExtLink>
        ) That is a long official list. The point is simple. Income can arise at
        the grant, at exercise, or later.
      </p>
      <p>
        The SEC also describes listed options this way.{" "}
        <em>
          &quot;Options are contracts giving the owner the right to buy or sell
          an underlying asset, at a fixed price, on or before a specified future
          date.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.sec.gov/oiea/investor-alerts-bulletins/ib_options">
          SEC, An Introduction to Options, Investor Bulletin
        </ExtLink>
        ) That official line is about listed options. Those trade on exchanges.
        The traders are market participants, not your company. An employee
        option is issued by your company as pay for work. After this paragraph,
        option in this post means a company grant. We will say listed option if we
        mean the other kind.
      </p>
      <p>A grant is the day the option is given.</p>
      <h2 id={H["What is a warrant?"]}>What is a warrant?</h2>
      <p>
        A warrant is a contract. It gives the holder the right to buy shares from
        the company later at a set price. The company would issue those shares.
        Warrants usually show up when a company raises money (likely).
      </p>
      <p>
        The official definition we use comes from an SEC bulletin about SPACs.
        The idea is general.{" "}
        <em>
          &quot;A warrant is a contract that gives the holder the right to
          purchase from the company a certain number of additional shares of
          common stock in the future at a certain price, often a premium to the
          current stock price at the time the warrant is issued.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.sec.gov/oiea/investor-alerts-bulletins/ib_spacs">
          SEC, What You Need to Know About SPACs, Updated Investor Bulletin
        </ExtLink>
        ) That is a long official sentence. The core idea is a right to buy
        shares later at a set price.
      </p>
      <p>
        Terms can vary.{" "}
        <em>
          &quot;Terms of the warrants can include how many shares the investor
          has the right to purchase, the price at which and period during which
          shares may be purchased, the circumstances under which the SPAC may be
          able to redeem the warrants, and when the warrants will expire.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.sec.gov/oiea/investor-alerts-bulletins/ib_spacs">
          same bulletin
        </ExtLink>
        ) That is a list of possible terms. The key words are can include.
        Redemption is an example from that bulletin, not a rule for every
        warrant.
      </p>
      <h2 id={H["What is the difference between options and warrants?"]}>
        What is the difference between options and warrants?
      </h2>
      <p>
        They share a core idea. Both can be a right to buy shares later at a set
        price. They usually go to different people. They also follow different
        rules. Both can dilute existing owners if they are exercised and the
        company issues new shares (likely).
      </p>
      <TableWrap caption="Topic, options, and warrants">
        <table>
          <caption>Topic, options, and warrants</caption>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Options</th>
              <th>Warrants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Topic">What it is</td>
              <td data-label="Options">
                A right to buy shares later at a set price, usually granted for
                work
              </td>
              <td data-label="Warrants">
                A contract to buy shares from the company later at a set price
              </td>
            </tr>
            <tr>
              <td data-label="Topic">Who usually gets it</td>
              <td data-label="Options">
                Employees. ISOs only in connection with employment. Other service
                providers may get NSOs (likely).
              </td>
              <td data-label="Warrants">
                Investors or other capital providers when the company raises
                money (likely)
              </td>
            </tr>
            <tr>
              <td data-label="Topic">Why</td>
              <td data-label="Options">Pay and keep people (likely)</td>
              <td data-label="Warrants">Part of a financing (likely)</td>
            </tr>
            <tr>
              <td data-label="Topic">Rules you will hear</td>
              <td data-label="Options">Vesting, ISO or NSO, 409A</td>
              <td data-label="Warrants">
                Contract terms: number of shares, price, expiration
              </td>
            </tr>
            <tr>
              <td data-label="Topic">Dilution</td>
              <td data-label="Options">
                Yes, if exercised and new shares are issued (likely)
              </td>
              <td data-label="Warrants">
                Yes, if exercised and new shares are issued (likely)
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["Who usually gets each, and why?"]}>
        Who usually gets each, and why?
      </h2>
      <p>
        Options usually go to employees as pay for work. That helps the company
        hire and keep people (likely). Warrants usually go to investors when the
        company raises money (likely). The law is stricter for ISOs than for that
        everyday pattern.
      </p>
      <p>
        The Internal Revenue Code is direct on ISOs.{" "}
        <em>
          &quot;the term &quot;incentive stock option&quot; means an option
          granted to an individual for any reason connected with his employment
          by a corporation&quot;.
        </em>{" "}
        (
        <ExtLink href="https://www.govinfo.gov/content/pkg/USCODE-2024-title26/html/USCODE-2024-title26-subtitleA-chap1-subchapD-partII-sec422.htm">
          26 USC 422
        </ExtLink>
        )
      </p>
      <p>
        Statutory options also have a service period.{" "}
        <em>
          &quot;For either kind of option, you must be an employee of the
          company granting the option, or a related company, at all times during
          the period beginning on the date the option is granted and ending 3
          months before the date you exercise the option (for an ISO, 1 year
          before if you&apos;re disabled).&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/publications/p525">
          IRS Publication 525
        </ExtLink>
        ) That is a long official rule. The plain point is that statutory
        options go to employees for a set period.
      </p>
      <p>
        Other people who work with the company, such as consultants or directors,
        may receive NSOs rather than ISOs (likely). Warrants are not a form of
        employee pay in the usual case (likely).
      </p>
      <h2
        id={
          H[
            "What do strike price, vesting, exercise, and expiration mean?"
          ]
        }
      >
        What do strike price, vesting, exercise, and expiration mean?
      </h2>
      <p>
        These four words show up on both grants and warrants. There is one
        important split. Vesting is usual for employee options. A warrant is
        more often a contract that is ready to use under its own terms (likely).
        The other three words are shared.
      </p>
      <p>
        A strike price is the set price to buy a share. It is also called the
        exercise price. The listed option bulletin uses the same idea.{" "}
        <em>
          &quot;A call option is a contract that gives the buyer the right to buy
          shares of an underlying stock at the strike price (discussed below) for
          a specified period of time.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.sec.gov/oiea/investor-alerts-bulletins/ib_options">
          SEC, An Introduction to Options, Investor Bulletin
        </ExtLink>
        ) That official line is about a listed call. And{" "}
        <em>
          &quot;This is the price at which the buyer of the option contract may
          buy the underlying stock, if the option contract is a call, or sell the
          underlying stock, if the option contract is a put.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.sec.gov/oiea/investor-alerts-bulletins/ib_options">
          same bulletin
        </ExtLink>
        ) That official sentence covers both a call and a put. In a company grant
        or a warrant, you can ignore the put half. The strike is the set price
        to buy a share. That is the simple meaning.
      </p>
      <p>
        Grant and exercise have plain official meanings too.{" "}
        <em>
          &quot;If you receive an option to buy or sell stock or other property as
          payment for your services, you may have income when you receive the
          option (the grant), when you exercise the option (use it to buy or sell
          the stock or other property), or when you sell or otherwise dispose of
          the option or property acquired through exercise of the option.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/publications/p525">
          IRS Publication 525
        </ExtLink>
        ) That official sentence defines grant and exercise. Grant is the day you
        receive the option. Exercise is when you use it. Exercise means using the
        right. You use it to buy the shares.
      </p>
      <p>
        Vesting is our term. It is a schedule. It says when you have earned the
        right to exercise.
      </p>
      <p>
        Expiration is the last day the right can be used. After that day, it is
        gone. For an ISO, the statute says{" "}
        <em>
          &quot;such option by its terms is not exercisable after the expiration
          of 10 years from the date such option is granted&quot;.
        </em>{" "}
        (
        <ExtLink href="https://www.govinfo.gov/content/pkg/USCODE-2024-title26/html/USCODE-2024-title26-subtitleA-chap1-subchapD-partII-sec422.htm">
          26 USC 422
        </ExtLink>
        ) That is an ISO rule. It is not a rule for every option or warrant.
      </p>
      <TableWrap caption="Word and plain meaning">
        <table>
          <caption>Word and plain meaning</caption>
          <thead>
            <tr>
              <th>Word</th>
              <th>Plain meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Word">Strike price</td>
              <td data-label="Plain meaning">The set price to buy a share</td>
            </tr>
            <tr>
              <td data-label="Word">Vesting</td>
              <td data-label="Plain meaning">
                The schedule that says when you have earned the right to exercise
                (our term)
              </td>
            </tr>
            <tr>
              <td data-label="Word">Exercise</td>
              <td data-label="Plain meaning">
                Using the right to buy the shares
              </td>
            </tr>
            <tr>
              <td data-label="Word">Expiration</td>
              <td data-label="Plain meaning">
                The last day the right can be used
              </td>
            </tr>
            <tr>
              <td data-label="Word">Fair market value</td>
              <td data-label="Plain meaning">
                What the share is worth at a given time under the rules that apply
              </td>
            </tr>
            <tr>
              <td data-label="Word">Fully diluted</td>
              <td data-label="Plain meaning">
                Counting the shares as if outstanding options and warrants had
                already been exercised (our reading)
              </td>
            </tr>
            <tr>
              <td data-label="Word">Warrant coverage</td>
              <td data-label="Plain meaning">
                A label for how large a warrant is, often relative to the money in
                the deal, not a share of the company (our explanation)
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <h2 id={H["What are ISOs, NSOs, and 409A?"]}>
        What are ISOs, NSOs, and 409A?
      </h2>
      <p>
        ISO and NSO are tax names. They apply to employee or service options, not
        to warrants. 409A is a tax rule. It can apply to an option granted as
        pay. One test looks at whether the strike is at least fair market value
        on the grant date. These lines are general education, not tax advice.
      </p>
      <p>
        <em>&quot;There are two kinds of statutory stock options.&quot;</em> (
        <ExtLink href="https://www.irs.gov/publications/p525">
          IRS Publication 525
        </ExtLink>
        ) A statutory stock option is an option that follows special tax rules in
        the Internal Revenue Code.{" "}
        <em>
          &quot;Options granted under an employee stock purchase plan or an
          incentive stock option (ISO) plan are statutory stock options.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/taxtopics/tc427">
          IRS Topic 427
        </ExtLink>
        ){" "}
        <em>
          &quot;Stock options that are granted neither under an employee stock
          purchase plan nor an ISO plan are nonstatutory stock options.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/taxtopics/tc427">
          IRS Topic 427
        </ExtLink>
        ) An ISO is a statutory option. It can be granted only in connection with
        employment. An NSO is a stock option that is not a statutory stock option.
        Employee stock purchase plans get that one mention only.
      </p>
      <p>
        <em>
          &quot;If you receive a statutory stock option, don&apos;t include any
          amount in your income when the option is granted.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/publications/p525">
          IRS Publication 525
        </ExtLink>
        ){" "}
        <em>
          &quot;If you exercise a statutory stock option, don&apos;t include any
          amount in income when you exercise the option.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/publications/p525">
          IRS Publication 525
        </ExtLink>
        ){" "}
        <em>
          &quot;If your employer grants you a statutory stock option, you
          generally don&apos;t include any amount in your gross income when you
          receive or exercise the option.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/taxtopics/tc427">
          IRS Topic 427
        </ExtLink>
        ){" "}
        <em>
          &quot;However, you may be subject to alternative minimum tax in the year
          you exercise an ISO.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/taxtopics/tc427">
          IRS Topic 427
        </ExtLink>
        ) Talk to a tax advisor about that tax. We do not explain how to compute
        it. That is all we will say on it.
      </p>
      <p>
        The nonstatutory rule is different.{" "}
        <em>
          &quot;For nonstatutory options without a readily determinable fair
          market value, there&apos;s no taxable event when the option is granted
          but you must include in income the fair market value of the stock
          received on exercise, less the amount paid, when you exercise the
          option.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/taxtopics/tc427">
          IRS Topic 427
        </ExtLink>
        ) That is a long tax rule. The plain point is this. There may be no tax
        at the grant. There may be tax at exercise on the value you receive, less
        what you pay. Fair market value is what the share is worth at a given
        time. The valuation rules that apply set that value.
      </p>
      <p>
        <em>
          &quot;Your employer can tell you which kind of option you hold.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.irs.gov/publications/p525">
          IRS Publication 525
        </ExtLink>
        )
      </p>
      <p>
        For an ISO, the statute also says{" "}
        <em>
          &quot;the option price is not less than the fair market value of the
          stock at the time such option is granted&quot;.
        </em>{" "}
        (
        <ExtLink href="https://www.govinfo.gov/content/pkg/USCODE-2024-title26/html/USCODE-2024-title26-subtitleA-chap1-subchapD-partII-sec422.htm">
          26 USC 422
        </ExtLink>
        )
      </p>
      <p>
        The statute also limits how much ISO stock can first become exercisable in
        a calendar year. That limit is $100,000. It also has a holding period if
        the holder wants the statutory sale treatment. That period is 2 years from
        the grant. It is also 1 year after the share is transferred. See{" "}
        <ExtLink href="https://www.govinfo.gov/content/pkg/USCODE-2024-title26/html/USCODE-2024-title26-subtitleA-chap1-subchapD-partII-sec422.htm">
          26 USC 422
        </ExtLink>
        . Talk to a tax advisor. We do not offer planning around those rules.
      </p>
      <p>
        Founders often hear 409A when they grant options. For a compensatory stock
        right,{" "}
        <em>
          &quot;The exercise price may never be less than the fair market value of
          the underlying stock&quot;.
        </em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-26/chapter-I/subchapter-A/part-1/section-1.409A-1">
          Treas. Reg. 1.409A-1
        </ExtLink>
        ) And{" "}
        <em>
          &quot;the number of shares subject to the option is fixed on the
          original date of grant of the option&quot;.
        </em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-26/chapter-I/subchapter-A/part-1/section-1.409A-1">
          Treas. Reg. 1.409A-1
        </ExtLink>
        ) For a private company,{" "}
        <em>
          &quot;in the case of service recipient stock that is not readily
          tradable on an established securities market, the fair market value of
          the stock as of a valuation date means a value determined by the
          reasonable application of a reasonable valuation method.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-26/chapter-I/subchapter-A/part-1/section-1.409A-1">
          Treas. Reg. 1.409A-1
        </ExtLink>
        ) That official line is about private company stock. The value has to come
        from a reasonable method, used in a reasonable way. And{" "}
        <em>
          &quot;The determination whether a valuation method is reasonable, or
          whether an application of a valuation method is reasonable, is made
          based on the facts and circumstances as of the valuation date.&quot;
        </em>{" "}
        (
        <ExtLink href="https://www.ecfr.gov/current/title-26/chapter-I/subchapter-A/part-1/section-1.409A-1">
          Treas. Reg. 1.409A-1
        </ExtLink>
        ) The test looks at the facts on that date. 409A here is about
        compensatory stock rights. It is not about every warrant.
      </p>
      <h2
        id={
          H[
            "What is a cashless or net exercise, and what do dilution and fully diluted mean?"
          ]
        }
      >
        What is a cashless or net exercise, and what do dilution and fully diluted
        mean?
      </h2>
      <p>
        A cashless or net exercise is our term. The holder gets shares equal to
        the value of the right. The holder does not pay the strike in cash.
        Dilution is a smaller ownership slice when new shares are issued. Fully
        diluted is our reading. It means you count the shares as if outstanding
        options and warrants had already been exercised.
      </p>
      <p>
        In a cashless or net exercise, the company keeps some of the shares. It
        does not collect cash. The holder still receives shares. The holder does
        not get the full number written on the paper. We do not say whether a
        grant or a warrant should allow it.
      </p>
      <p>
        The SEC describes dilution as{" "}
        <em>
          &quot;the reduction in earnings per share and proportional ownership that
          occurs when, for example, holders of convertible securities convert
          those securities into common stock&quot;.
        </em>{" "}
        (
        <ExtLink href="https://www.investor.gov/introduction-investing/investing-basics/glossary/convertible-securities">
          SEC, Convertible Securities glossary
        </ExtLink>
        ) That official line is about dilution. Our reading: the same idea applies
        when an option or a warrant is exercised. It applies if the company issues
        new shares (likely). You own a smaller slice. The company may also have
        received cash. In a cashless exercise, the company may have issued fewer
        shares than the full grant.
      </p>
      <p>
        Fully diluted, in our reading, counts the shares as if those rights had
        already been used.
      </p>
      <h2 id={H["What does warrant coverage mean?"]}>
        What does warrant coverage mean?
      </h2>
      <p>
        Warrant coverage is a phrase some financings use. It describes how large
        a warrant is. It is often stated as a share of the money in the deal. It
        is not a share of the company. That is our explanation.
      </p>
      <p>
        The coverage label alone does not tell you the share of the company. That
        is our explanation.
      </p>
      <h2
        id={
          H["Is a stock warrant the same as a government payment warrant?"]
        }
      >
        Is a stock warrant the same as a government payment warrant?
      </h2>
      <p>
        No. A stock warrant is a right to buy shares. A government payment warrant
        is a payment instrument. If you sell software to a state, you may see the
        word warrant on a payment notice. That is a different meaning. It is not a
        right to buy shares.
      </p>
      <p>
        <em>
          &quot;In this post, a warrant means a state payment warrant, which is
          the state&apos;s payment instrument.&quot;
        </em>{" "}
        <em>
          &quot;A state payment warrant is the state&apos;s payment
          instrument.&quot;
        </em>{" "}
        We covered that other meaning in our{" "}
        <Link
          href={`/blog/${GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_POST.slug}`}
        >
          government payment offsets and warrant holds
        </Link>{" "}
        post.
      </p>
      <p>
        If you need to understand a grant or a warrant in a financing, read the
        paper. Use the words in this post. Talk to your counsel. If the question
        is the capital itself, that is a financing step. It is not a vocabulary
        step.
      </p>
      <p>
        Our view: explain those differences in plain words. Then you can read a
        grant or a financing paper without mixing up the tools. Coverage, strike,
        and expiration are words you will see on the paper. Learn the words, then
        read the paper with your counsel.
      </p>
      <p>
        If you want to talk through the capital you need to grow,{" "}
        <Link href="/contact/founder">talk with Lambda Capital</Link>.
      </p>
      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={OPTIONS_VS_WARRANTS_FAQ} />
      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
        <li>
          <Link
            href={`/blog/${GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_POST.slug}`}
          >
            Government payment offsets and warrant holds
          </Link>
        </li>
      </ul>
      <p>
        <em>
          This post is general education, not financial, legal, accounting, or
          tax advice.
        </em>
      </p>
      <FounderCtaBlock
        position="bottom"
        postSlug={OPTIONS_VS_WARRANTS_POST.slug}
      />
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