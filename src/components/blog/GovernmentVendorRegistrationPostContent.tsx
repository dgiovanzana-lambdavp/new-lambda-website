import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  CASH_FLOW_GAP_POST,
  GOVERNMENT_VENDOR_REGISTRATION_FAQ,
  GOVERNMENT_VENDOR_REGISTRATION_HEADINGS,
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_CARD_POST,
  REVOLVING_LINE_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  TERM_LOAN_AMORTIZING_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  GOVERNMENT_VENDOR_REGISTRATION_HEADINGS.map((h) => [h.text, h.id]),
) as Record<string, string>;

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function GovernmentVendorRegistrationPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>Bottom line for founders</strong>
      </p>

      <p>
        A signed contract is not enough. Washington and Texas will not pay until
        your company is active in their payee system. Electronic payment is often a
        second step after that. Start registration when you sign, not when you
        invoice. Treat the setup wait as a timing problem with a checklist, not as
        a growth problem.
      </p>

      <p>
        <em>By Domenic Giovanzana, Founder and General Partner</em>
      </p>

      <p>
        Picture a software company that just signed its first state contract. The
        team celebrates. It sends the first invoice. Nothing moves. The CEO assumes
        the agency is slow to accept the work. Often, the invoice is fine. The
        vendor file is not.
      </p>

      <p>
        <em>
          Who this is for: GovTech software CEOs with about $1M to $10M in revenue.
          Bootstrapped or venture backed under about $25M raised. State, local or
          federal customers. Long receivables.
        </em>
      </p>

      <blockquote>
        <p>
          <strong>The short version</strong>
        </p>
        <ul>
          <li>
            A signed contract does not put you in the state&apos;s payee system by
            itself.
          </li>
          <li>
            Washington says register with OFM as soon as you sign. Setup can take up
            to five business days.
          </li>
          <li>
            Texas will not pay through the Comptroller until a payee record exists.
            Direct deposit comes after that.
          </li>
          <li>
            Start setup at signing. Fund the dated wait. Use growth capital for
            growth.
          </li>
        </ul>
      </blockquote>

      <h2 id={H["The direct answer"]}>The direct answer</h2>

      <p>
        Often because you are not in the state&apos;s payee system yet. Washington
        says you must register with its Office of Financial Management to be paid.
        It recommends doing that as soon as you sign. Texas will not pay through
        the Comptroller until a payee record exists, and direct deposit comes after
        that. Ask your agency which form starts payee setup.
      </p>

      <h3>A few words you will hear</h3>

      <ul>
        <li>
          Payee registration: putting your company in the state&apos;s payment
          system so it can send you money.
        </li>
        <li>
          OFM (Washington): the Office of Financial Management, which runs vendor
          payee registration for state payments.
        </li>
        <li>
          TINS (Texas): the Texas Identification Number System, the
          Comptroller&apos;s payee database.
        </li>
        <li>
          Payee master and mail code: the Texas records that identify who you are
          and where payment goes.
        </li>
        <li>
          EFT / direct deposit: electronic payment to your bank instead of a paper
          check.
        </li>
        <li>
          Prenote: a small test the state uses to confirm your bank details before
          live payments.
        </li>
      </ul>

      <h2 id={H["Two different registrations"]}>Two different registrations</h2>

      <p>Selling registration and payee registration are not the same thing.</p>

      <p>
        In Washington, WEBS registration helps you see bid opportunities. Payee
        registration with OFM is what lets the state send money.
      </p>

      <p>
        Washington&apos;s Department of Enterprise Services puts it this way:{" "}
        <em>
          &quot;To receive payment from the state, you must register with the
          Office of Financial Management (OFM).&quot;
        </em>{" "}
        (
        <ExtLink href="https://des.wa.gov/sell/how-work-state">
          Washington state guidance
        </ExtLink>
        )
      </p>

      <p>
        It also says when to start:{" "}
        <em>
          &quot;We recommend registering with OFM as soon as you sign a contract
          with the state to avoid payment delays.&quot;
        </em>
      </p>

      <p>
        And how long it can take:{" "}
        <em>
          &quot;The registration process can take up to five business days to
          complete.&quot;
        </em>
      </p>

      <p>
        Payment method is separate too:{" "}
        <em>&quot;OFM issues payments by check or electronic funds transfer (EFT).&quot;</em>
      </p>

      <p>
        Federal work also needs an active federal registry record. That is separate
        from state payee setup. Purchase cards are another path:{" "}
        <Link href={`/blog/${PURCHASE_CARD_POST.slug}`}>
          government purchase card payments
        </Link>
        .
      </p>

      <h2 id={H["How Texas splits payee setup and direct deposit"]}>
        How Texas splits payee setup and direct deposit
      </h2>

      <p>
        Washington puts payee setup in one step under OFM. Texas splits it in two.
        First, the Comptroller will not pay until a payee TIN exists.
      </p>

      <p>
        <em>
          &quot;Before a payee can receive payments through the Comptroller&apos;s
          office, the paying agency must establish a Texas identification number
          (TIN) for its payee.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fmx.cpa.texas.gov/fm/pubs/payment/payee_setup/index.php?p=forms_payee_maint&s=forms_payee_maint">
          Texas Comptroller payee setup
        </ExtLink>
        )
      </p>

      <p>Direct deposit is not that first step. Texas says this next.</p>

      <p>
        <em>
          &quot;A payee must first be set up in TINS with a payee master and mail
          code before direct deposit information can be entered.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fmx.cpa.texas.gov/fm/pubs/payment/direct_dep/index.php?p=dd_setup&s=dd_setup">
          Texas Comptroller direct deposit
        </ExtLink>
        )
      </p>

      <p>
        Entering bank details then starts the Texas prenote period. The batch check
        that agencies see says the same thing. Code 700 tells the agency what to do
        next.
      </p>

      <p>
        <em>
          &quot;Submit a payee master and mail code setup before payments can be
          issued.&quot;
        </em>{" "}
        (
        <ExtLink href="https://fmx.cpa.texas.gov/fm/pubs/payment/batch_trans/index.php?p=mid_message&s=mid_valpro">
          Texas Comptroller message codes
        </ExtLink>
        )
      </p>

      <p>
        Forms go to the paying agency. The Comptroller will not take those setup
        forms straight from the payee.
      </p>

      <p>
        Other states differ. Ask the paying agency for its vendor packet the day the
        contract is signed.
      </p>

      <h2 id={H["Why the payment system blocks first"]}>
        Why the payment system blocks first
      </h2>

      <p>
        The likely reason agencies require payee setup before any disbursement: the
        payment system needs a verified payee record. Without that record, accounts
        payable has nowhere safe to send public money.
      </p>

      <p>
        That is why a perfect invoice can still sit. Acceptance and prompt pay clocks
        matter later. First the vendor file has to exist.
      </p>

      <p>
        Local customers can add another layer, such as board timing. See{" "}
        <Link href={`/blog/${LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug}`}>
          local government board approval and vendor payments
        </Link>
        . Grant funded customers can add claim rules of their own:{" "}
        <Link href={`/blog/${GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug}`}>
          grant funded government customers and vendor payments
        </Link>
        .
      </p>

      <h2 id={H["The invoice that beat the vendor file"]}>
        The invoice that beat the vendor file
      </h2>

      <p>
        Problem: our CEO runs a $3M software company. This is an illustration, not a
        real company. It signs a first $180,000 state contract. The team sends the
        first $45,000 invoice on day 30. Nothing moves. The board asks about a
        growth raise.
      </p>

      <TableWrap caption="Table 1: First invoice vs vendor file, illustrative">
        <table>
          <caption>Table 1: First invoice vs vendor file, illustrative</caption>
          <thead>
            <tr>
              <th scope="col">Step</th>
              <th scope="col">Setup started at signing</th>
              <th scope="col">Setup started at invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Step">Contract signed</td>
              <td data-label="Setup started at signing">Day 0</td>
              <td data-label="Setup started at invoice">Day 0</td>
            </tr>
            <tr>
              <td data-label="Step">Payee registration</td>
              <td data-label="Setup started at signing">Starts at signing</td>
              <td data-label="Setup started at invoice">Starts with the invoice</td>
            </tr>
            <tr>
              <td data-label="Step">WA style setup window</td>
              <td data-label="Setup started at signing">Up to 5 business days</td>
              <td data-label="Setup started at invoice">Same window, started late</td>
            </tr>
            <tr>
              <td data-label="Step">First invoice</td>
              <td data-label="Setup started at signing">
                Can meet an active payee file
              </td>
              <td data-label="Setup started at invoice">
                May land before the file is active
              </td>
            </tr>
            <tr>
              <td data-label="Step">Extra wait</td>
              <td data-label="Setup started at signing">Avoidable</td>
              <td data-label="Setup started at invoice">
                Setup finishes after the invoice
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>Choices: there are three paths.</p>

      <ol>
        <li>Raise growth capital and accept the stall.</li>
        <li>Chase acceptance and prompt pay clocks only.</li>
        <li>
          Ask whether the company is active in the state&apos;s payee system. Finish
          electronic payment enrollment if needed. Then fund only the dated wait that
          remains.
        </li>
      </ol>

      <p>Decision: path 3.</p>

      <p>Why it fits:</p>

      <ul>
        <li>
          Washington says you must register with OFM to be paid. It says to start as
          soon as you sign. Setup can take up to five business days.
        </li>
        <li>
          Texas will not pay through the Comptroller until a payee TIN exists. Direct
          deposit waits until the payee master and mail code are in TINS.
        </li>
        <li>The invoice can be fine while the vendor file is not.</li>
        <li>
          That wait is a timing problem with a checklist. Growth capital is for
          growth.
        </li>
      </ul>

      <p>
        Lesson: on a new government customer, start payee registration the day you
        sign. Electronic payment setup is often a second step. Fund the dated wait.
      </p>

      <p>
        <strong>Our view:</strong> the slowest first invoice is often a file problem,
        not a product problem.
      </p>

      <p>
        Agencies cannot pay a company that is not in the payee system. That is by
        design. Setup is predictable. Treat it as a dated task next to delivery, not
        as a reason to raise growth capital.
      </p>

      <h2 id={H["A vendor setup routine"]}>A vendor setup routine</h2>

      <ol>
        <li>
          The day you sign, ask which payee system the agency uses and which form
          starts setup.
        </li>
        <li>File payee registration before you deliver or invoice.</li>
        <li>
          Ask whether electronic payment is a second form after the payee record is
          active.
        </li>
        <li>Confirm the record is active before the first invoice goes in.</li>
        <li>
          Put the expected first pay date in your cash forecast. Use setup complete
          plus the agency&apos;s normal clock.
        </li>
        <li>
          If status tools show a hold, read whether it is setup, acceptance or
          something else.
        </li>
      </ol>

      <p>
        Use{" "}
        <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
          payment status tools
        </Link>{" "}
        to see what the hold says. Acceptance and prompt pay are separate clocks: see{" "}
        <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
          government invoice acceptance
        </Link>{" "}
        and{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        . Selling as a sub adds another link in the chain:{" "}
        <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
          subcontractor payment from the prime
        </Link>
        .
      </p>

      <h2 id={H["A simple checklist mindset"]}>A simple checklist mindset</h2>

      <p>
        Vendor setup is paperwork with a date. It is not a verdict on your product.
      </p>

      <p>
        Do the forms early. Confirm the payee file is live. Then send the invoice.
        That order saves the first payment from an avoidable stall.
      </p>

      <h2 id={H["Is this a timing gap or a growth gap?"]}>
        Is this a timing gap or a growth gap?
      </h2>

      <p>Start with the point our working capital post makes.</p>

      <p>
        <em>
          &quot;Signed government contracts that pay slowly create a timing problem
          more often than a growth problem.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
          Working capital vs growth capital for GovTech software
        </Link>
        )
      </p>

      <p>Size the gap first.</p>

      <p>
        <em>
          &quot;Your cash flow gap is a number, not a feeling.&quot;
        </em>{" "}
        (
        <Link href={`/blog/${CASH_FLOW_GAP_POST.slug}`}>
          The government contractor cash flow gap
        </Link>
        )
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
              <td data-label="If you have">A new agency and no payee record</td>
              <td data-label="It is likely">Timing you can fix</td>
              <td data-label="Use">The vendor setup routine</td>
            </tr>
            <tr>
              <td data-label="If you have">
                Recurring dated waits across customers
              </td>
              <td data-label="It is likely">Timing to fund</td>
              <td data-label="Use">
                <Link href={`/blog/${REVOLVING_LINE_POST.slug}`}>
                  A revolving line of credit
                </Link>
              </td>
            </tr>
            <tr>
              <td data-label="If you have">
                One large first invoice with a dated release
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
        A growth problem means demand you cannot serve without more people, product
        or reach. That is what growth capital is for.
      </p>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>

      <Faq items={GOVERNMENT_VENDOR_REGISTRATION_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>

      <ul>
        <li>
          <Link href={`/blog/${INVOICE_PAYMENT_STATUS_POST.slug}`}>
            Payment status tools
          </Link>
        </li>
        <li>
          <Link href={`/blog/${INVOICE_ACCEPTANCE_POST.slug}`}>
            Government invoice acceptance
          </Link>
        </li>
        <li>
          <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
            Prompt payment laws for GovTech vendors
          </Link>
        </li>
        <li>
          <Link href={`/blog/${SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug}`}>
            Subcontractor payment from the prime
          </Link>
        </li>
        <li>
          <Link href={`/blog/${WORKING_CAPITAL_VS_GROWTH_POST.slug}`}>
            Working capital vs growth capital for GovTech software
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
