import type { ReactNode } from "react";
import Link from "next/link";
import TableWrap from "./TableWrap";
import Faq from "./Faq";
import {
  ASSIGNMENT_OF_CLAIMS_FAQ,
  ASSIGNMENT_OF_CLAIMS_HEADINGS,
  GOVTECH_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  UPFRONT_PAYMENT_POST,
  VENTURE_DEBT_POST,
} from "@/lib/blog/posts";

const H = Object.fromEntries(
  ASSIGNMENT_OF_CLAIMS_HEADINGS.map((h) => [h.text, h.id]),
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

export default function AssignmentOfClaimsPostContent() {
  return (
    <div className="blog-prose">
      <p>
        <strong>
          A signed government contract is your most valuable asset. Whether you
          can borrow against it depends on a law most software founders have
          never read.
        </strong>
      </p>
      <p>
        The Assignment of Claims Act lets a federal contractor assign the money
        due under a contract to a bank or other financing institution, typically
        as security for a loan. The contract itself is not assigned, only the
        right to be paid. Under FAR 32.802 the contract must total $1,000 or
        more and must not prohibit assignment, and the assignee must send
        written notice to the contracting officer, any surety, and the
        disbursing officer. After that, payments go to the assignee until a
        release is filed. State and local contracts follow their own law and
        contract terms.
      </p>
      <p>
        <em>
          This article is general information, not legal, tax, or investment
          advice. Have counsel review any assignment.
        </em>
      </p>

      <h2 id={H["What the Assignment of Claims Act is"]}>
        What the Assignment of Claims Act is
      </h2>
      <p>
        When founders first hear the phrase, we usually explain it as permission.
        By default, a contractor cannot simply pledge what the federal
        government owes it the way it might pledge a commercial receivable. The
        Act creates a defined path to do that.
      </p>
      <p>
        The rules sit in the Federal Acquisition Regulation, which opens its
        subpart on the topic this way: &quot;This subpart prescribes policies
        and procedures for the assignment of claims under the Assignment of
        Claims Act of 1940, as amended, (31 U.S.C. 3727, 41 U.S.C. 6305)&quot; (
        <ExtLink href="https://www.acquisition.gov/far/subpart-32.8">
          FAR subpart 32.8
        </ExtLink>
        ) In plain terms, the Act is the law, and FAR subpart 32.8 is how
        agencies apply it.
      </p>

      <h2 id={H["The conditions an assignment has to meet"]}>
        The conditions an assignment has to meet
      </h2>
      <p>
        What surprises most CEOs we talk to is how specific the conditions are.
        FAR 32.802 says &quot;a contractor may assign moneys due or to become
        due under a contract if all the following conditions are met,&quot; and
        then lists them (
        <ExtLink href="https://www.acquisition.gov/far/subpart-32.8">
          FAR 32.802
        </ExtLink>
        ):
      </p>
      <ol>
        <li>The contract specifies payments aggregating $1,000 or more.</li>
        <li>
          The assignment is made to a bank, trust company, or other financing
          institution, including any federal lending agency.
        </li>
        <li>The contract does not prohibit the assignment.</li>
        <li>
          Unless the contract expressly permits otherwise, the assignment covers
          all unpaid amounts under the contract, is made to only one party (or
          to one party acting as agent or trustee for several), and is not
          subject to further assignment.
        </li>
        <li>
          The assignee sends a written notice of assignment, with a true copy of
          the assignment instrument, to the contracting officer or agency head,
          the surety on any bond, and the disbursing officer.
        </li>
      </ol>
      <p>
        The fourth condition matters more than it looks. By default, you cannot
        assign a slice of one contract&apos;s payments; it is all unpaid amounts
        or nothing, unless the contract says otherwise.
      </p>

      <h2 id={H["How the process works, step by step"]}>
        How the process works, step by step
      </h2>
      <p>
        Our own way of picturing the process is as paperwork that changes the
        payee on file. Here is the sequence the regulation describes:
      </p>
      <ol>
        <li>
          <strong>The financing institution reviews the contract.</strong>{" "}
          Whether the contract prohibits assignment is the first question.
        </li>
        <li>
          <strong>The contractor signs an assignment instrument.</strong> It
          transfers the right to be paid under that contract.
        </li>
        <li>
          <strong>The assignee sends notice.</strong> The written notice and a
          true copy of the instrument go to the contracting officer or agency
          head, any surety, and the disbursing officer.
        </li>
        <li>
          <strong>The government acknowledges it.</strong> From then on,
          payments under the contract go to the assignee.
        </li>
        <li>
          <strong>A release ends it.</strong> When the financing institution
          releases the contractor, the contractor files a written notice of
          release and a copy of the release instrument with the same offices,
          and payments return to the contractor.
        </li>
      </ol>

      <h2 id={H["What changes for your company after an assignment"]}>
        What changes for your company after an assignment
      </h2>
      <p>
        From the inside, we have found that very little changes day to day. Your
        team still delivers the software, supports users, and invoices on the
        same schedule. The difference is where the money lands.
      </p>
      <p>
        One term is worth knowing by name: the no setoff commitment. The
        regulation defines it as a contract term under which payments to the
        assignee will not be reduced to liquidate the contractor&apos;s debts to
        the government. An agency may include it only after a determination of
        need, so many contracts will not carry one. When a contract has no such
        commitment, the government keeps its usual right to apply setoffs. For
        how late payment interest works on federal invoices, see our post on{" "}
        <Link href={`/blog/${PROMPT_PAYMENT_POST.slug}`}>
          prompt payment laws for GovTech vendors
        </Link>
        .
      </p>

      <h2 id={H["State and local contracts work differently"]}>
        State and local contracts work differently
      </h2>
      <p>
        This is the section we would want every state and local vendor to read
        twice. The Assignment of Claims Act governs federal contracts only.
        State and local contracts follow state law and the assignment clause in
        the contract itself.
      </p>
      <p>
        Before assuming a state or local receivable can be pledged, read the
        assignment clause and have counsel review it.
      </p>

      <h2 id={H["How assignment fits with the payment wait"]}>
        How assignment fits with the payment wait
      </h2>
      <p>
        Long payment cycles are the reason this topic comes up at all, and we see
        them in nearly every GovTech company we talk to. For many federal
        invoices, the due date is the later of the 30th day after a proper
        invoice is received or the 30th day after acceptance, under{" "}
        <ExtLink href="https://www.acquisition.gov/far/subpart-32.9">
          FAR 32.904
        </ExtLink>
        . State and local timelines vary.
      </p>
      <p>
        For more on the options, see{" "}
        <Link href={`/blog/${GOVTECH_POST.slug}`}>
          government contract financing for software companies
        </Link>
        ,{" "}
        <Link href={`/blog/${IMPLEMENTATION_MILESTONES_POST.slug}`}>
          implementation payment milestones
        </Link>
        , and{" "}
        <Link href={`/blog/${UPFRONT_PAYMENT_POST.slug}`}>
          upfront SaaS payment
        </Link>
        .
      </p>

      <h2
        id={H["Federal vs state and local assignment of contract payments"]}
      >
        Federal vs state and local assignment of contract payments
      </h2>
      <p>
        <em>
          Based on the sources cited; rules vary by jurisdiction and contract.
        </em>
      </p>

      <TableWrap
        caption="Federal vs state and local assignment of contract payments"
        scrollable
      >
        <table className="blog-table blog-table--options">
          <caption>
            Federal vs state and local assignment of contract payments
          </caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Federal contracts</th>
              <th scope="col">State and local contracts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Row">Governing rule</td>
              <td data-label="Federal contracts">
                Assignment of Claims Act and FAR subpart 32.8
              </td>
              <td data-label="State and local contracts">
                State law and the contract&apos;s assignment clause
              </td>
            </tr>
            <tr>
              <td data-label="Row">Who can be assignee</td>
              <td data-label="Federal contracts">
                Bank, trust company, or other financing institution
              </td>
              <td data-label="State and local contracts">
                Depends on jurisdiction and contract
              </td>
            </tr>
            <tr>
              <td data-label="Row">Contract must allow it</td>
              <td data-label="Federal contracts">
                Yes; the contract must not prohibit assignment
              </td>
              <td data-label="State and local contracts">
                Depends on the contract&apos;s assignment clause
              </td>
            </tr>
            <tr>
              <td data-label="Row">Notice</td>
              <td data-label="Federal contracts">
                Written notice to contracting officer, surety, and disbursing
                officer
              </td>
              <td data-label="State and local contracts">
                Agency consent where the contract requires it
              </td>
            </tr>
            <tr>
              <td data-label="Row">What is assigned</td>
              <td data-label="Federal contracts">
                The right to be paid, not the contract
              </td>
              <td data-label="State and local contracts">Varies by contract</td>
            </tr>
            <tr>
              <td data-label="Row">How it ends</td>
              <td data-label="Federal contracts">
                Notice of release filed with the same offices
              </td>
              <td data-label="State and local contracts">Varies by contract</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2 id={H["Frequently asked questions"]}>Frequently asked questions</h2>
      <Faq items={ASSIGNMENT_OF_CLAIMS_FAQ} />

      <h2 id={H["Related reading"]}>Related reading</h2>
      <ul>
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
        <li>
          <Link href={`/blog/${VENTURE_DEBT_POST.slug}`}>
            Venture Debt vs Venture Capital for GovTech
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
        If you are thinking about how to fund the gap on a government contract,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
      <p>We read every note and reply to founders directly.</p>
    </div>
  );
}
