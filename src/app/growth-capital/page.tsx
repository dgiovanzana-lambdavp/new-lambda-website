"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is Lambda Capital?",
    answer:
      "Lambda Capital is a permanent capital holding company that invests in mission-critical technology and partners with software companies for the long term.",
  },
  {
    question: "Do you offer growth capital?",
    answer:
      "Yes. Lambda Capital provides growth capital and hands-on help to US software companies, with a focus on businesses at roughly $2M-$10M revenue.",
  },
  {
    question: "What revenue stage do you focus on?",
    answer:
      "We focus on US software companies at roughly $2M-$10M in revenue. If you are outside that band, still reach out. Fit matters more than a hard cutoff.",
  },
  {
    question: "Is this a loan, equity, or permanent capital?",
    answer:
      "Lambda Capital is structured as a permanent capital holding company. We are not a short-term loan product. Exact instrument and terms depend on the company and are discussed in diligence.",
  },
  {
    question: "Do you help with operations?",
    answer:
      "Yes. We take a hands-on approach to helping portfolio companies grow, become more efficient, and achieve better outcomes. Capital and operating partnership go together.",
  },
  {
    question: "How many companies do you invest in?",
    answer:
      "We invest in at most 1-2 companies per year. The partnership is concentrated on purpose.",
  },
  {
    question: "Who should reach out?",
    answer:
      "US software CEOs, founders, owners, and partners, bootstrapped or venture-backed, who want growth capital and hands-on help should start at the contact form on lambdavp.com.",
  },
  {
    question: "How do I start?",
    answer: (
      <>
        Go to{" "}
        <a
          href="https://www.lambdavp.com/contact"
          className="text-accent underline underline-offset-2 hover:text-accent/80"
        >
          lambdavp.com/contact
        </a>
        , tell us what brings you here, and we will take it from there.
      </>
    ),
  },
  {
    question:
      "Can bootstrapped founders raise growth capital with you without giving up control?",
    answer:
      "We work with bootstrapped and venture-backed founders who want growth capital without giving up how the company is run.",
  },
  {
    question:
      "Is Lambda Capital the same as non-dilutive or revenue-based financing?",
    answer:
      "No. Lambda Capital is not a revenue-based financing or short-term loan product. We are a permanent capital holding company that partners long term.",
  },
  {
    question:
      "How do you compare to revenue-based financing or growth equity?",
    answer:
      "Revenue-based financing and similar lenders are usually loan-style products. Growth equity and traditional PE often come with an exit timeline. Lambda Capital is a permanent capital holding company that also helps operate. We partner with at most 1-2 companies a year and do not run on a forced flip clock.",
  },
];

const processSteps = [
  {
    title: "Intro call",
    body: "Tell us what brings you here. We learn the business and whether there is a fit.",
  },
  {
    title: "Diligence",
    body: "We dig into the company together with concentrated time, not a spray-and-pray process.",
  },
  {
    title: "Terms",
    body: "Exact instrument and terms depend on the company and are discussed in diligence.",
  },
  {
    title: "Partner",
    body: "Capital and operating partnership go together. We stay for the long term.",
  },
  {
    title: "At most 1-2 companies a year",
    body: "We invest in at most 1-2 companies per year. The partnership is concentrated on purpose.",
  },
];

const whatYouGet = [
  {
    title: "Growth capital",
    body: "Capital sized for companies in the roughly $2M-$10M revenue band.",
  },
  {
    title: "Permanent capital",
    body: "Structured as a permanent capital holding company, not a forced exit clock.",
  },
  {
    title: "Hands-on help",
    body: "We help portfolio companies grow, become more efficient, and achieve better outcomes.",
  },
  {
    title: "Concentrated partnership",
    body: "At most 1-2 companies per year. The partnership is concentrated on purpose.",
  },
];

export default function GrowthCapitalPage() {
  return (
    <div className="min-h-screen">
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-navy-blue via-dark-navy to-[#1e2d4a] pt-28 pb-20 md:pt-36 md:pb-28 text-white"
      >
        <div
          className="pointer-events-none absolute inset-auto -right-[10%] -bottom-[40%] left-[40%] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(0,107,214,0.22),transparent_70%)]"
          aria-hidden="true"
        />
        <div className="container-custom relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-light-blue">
              Growth capital
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Growth capital for software companies at $2M-$10M revenue
            </h1>
            <p className="mb-5 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
              Permanent capital and hands-on help for US software CEOs,
              founders, owners, and partners, bootstrapped or venture-backed.
            </p>
            <p className="mb-6 max-w-2xl text-base font-medium leading-relaxed text-white/95 md:text-lg">
              Lambda Capital provides growth capital and hands-on help to US
              software companies at roughly $2M-$10M revenue.
            </p>
            <p className="mb-8 max-w-xl border-l-[3px] border-light-blue pl-4 text-lg font-semibold leading-snug text-off-white md:text-xl">
              We date before we get married. Start with a real working
              relationship, then a long-term permanent capital partnership.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" size="lg">
                Talk to Lambda Capital
              </Button>
              <Button href="/portfolio" variant="white" size="lg">
                See our portfolio
              </Button>
            </div>
            <p className="mt-8 max-w-2xl border-t border-white/20 pt-7 text-base leading-relaxed text-white/80">
              We are a permanent capital holding company. We partner with a
              small number of companies each year and stay focused on durable
              growth, not a forced exit clock.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="who-for" className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              Who this is for
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Built for operators in the $2M-$10M band
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              If you run a US software company and want growth capital with
              someone who will work alongside you, not just wire money, we
              should talk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                A strong fit looks like
              </h3>
              <ul className="space-y-3">
                {(
                  [
                    "CEO, founder, owner, or partner of a US software company (B2B SaaS or vertical tech)",
                    "Roughly $2M-$10M in revenue",
                    <>
                      Want growth capital <em>and</em> operating help
                    </>,
                    "Bootstrapped or venture-backed, and you care about control",
                  ] as React.ReactNode[]
                ).map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-foreground"
                  >
                    <span
                      className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M6.2 11.2 2.8 7.8l1.1-1.1 2.3 2.3 5-5 1.1 1.1z" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-red-200 bg-[#FBF7F6] p-7 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#E44E3C]">
                Not a fit
              </h3>
              <ul className="space-y-3">
                {[
                  "Earlier stage than the $2M-$10M revenue band",
                  "Looking only for a short-term loan product",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-foreground">
                    <span
                      className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#E44E3C]/15 text-[#E44E3C]"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-2.5 w-2.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted">
                Outside the band? Still reach out. Fit matters more than a hard
                cutoff. Start at the{" "}
                <a
                  href="/contact"
                  className="text-accent underline underline-offset-2"
                >
                  contact form
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              What you get
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Capital and partnership, sized for this stage
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Four things we put on the table when we partner: capital
              structure, patience, operating help, and concentration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatYouGet.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="mb-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-navy-blue">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-9">
            <Button href="/contact" variant="primary" size="lg">
              Talk to Lambda Capital
            </Button>
          </div>
        </div>
      </section>

      <section id="comparison" className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              How we compare
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What founders look for, and where Lambda Capital fits
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Founders hear many names when they look for growth capital. Here
              is how we compare with the options founders weigh most often.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="bg-navy-blue px-4 py-4 font-semibold text-white">
                    What founders look for
                  </th>
                  <th className="bg-navy-blue px-4 py-4 font-semibold text-white">
                    Names they hear
                  </th>
                  <th className="bg-accent px-4 py-4 font-semibold text-white">
                    Lambda Capital
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">
                    Non-dilutive loan / RBF
                  </td>
                  <td className="px-4 py-4 text-muted">
                    Founderpath, Novel, Lighter, Bigfoot, SaaS Capital
                  </td>
                  <td className="bg-accent/5 px-4 py-4 font-medium text-foreground">
                    Permanent capital holding company plus operating
                    partnership, not a pure lending product
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">
                    Growth equity / PE exit timeline
                  </td>
                  <td className="px-4 py-4 text-muted">Traditional PE</td>
                  <td className="bg-accent/5 px-4 py-4 font-medium text-foreground">
                    Patient holding company. No forced flip clock.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold text-foreground">
                    Capital plus someone in the business
                  </td>
                  <td className="px-4 py-4 text-muted">Varies</td>
                  <td className="bg-accent/5 px-4 py-4 font-medium text-foreground">
                    Hands-on. At most 1-2 new companies per year.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="proof" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              A concentrated track record
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We meet hundreds of companies a year and invest in very few. That
              concentration is intentional.
            </p>
          </motion.div>

          <div className="mb-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { value: "~4x", label: "Avg. ARR growth per company" },
              {
                value: "$186M",
                label: (
                  <>
                    Invested
                    <br />
                    Career total
                  </>
                ),
              },
              {
                value: "$5B+",
                label: (
                  <>
                    Total transaction value
                    <br />
                    Career total
                  </>
                ),
              },
              { value: "400+", label: "Companies met per year" },
              { value: "1-2", label: "Companies invested per year" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl border border-border bg-white px-3 py-5 text-center"
              >
                <div className="mb-1.5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs leading-snug text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-6">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.06em] text-accent">
                Investment
              </p>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                SafeTraces
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Selected as Prime Performer for the ARPA-H BREATHE program on a
                multi-year other transaction agreement for up to $39 million.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-white p-6">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.06em] text-accent">
                Investment
              </p>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Databento
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Closed $10M in additional funding to accelerate growth and expand
                market data capabilities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="section-padding bg-navy-blue text-white">
        <div className="container-custom">
          <div className="mb-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-light-blue">
                How it works
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                From intro to partnership
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/15 bg-white/5 p-5"
              >
                <div className="mb-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {step.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Common questions
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Straight answers for founders comparing growth capital options.
            </p>
          </motion.div>

          <div className="flex max-w-3xl flex-col gap-2.5">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group overflow-hidden rounded-[10px] border border-border bg-white"
                open={index === 0}
              >
                <summary className="relative cursor-pointer list-none px-5 py-4 pr-12 text-[15px] font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-xl font-medium text-accent group-open:hidden"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span
                    className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-xl font-medium text-accent group-open:inline"
                    aria-hidden="true"
                  >
                    -
                  </span>
                </summary>
                <div className="border-t border-border px-5 pb-4 pt-3.5 text-[15px] leading-relaxed text-muted">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mx-auto mb-3 max-w-xl text-3xl font-bold text-foreground md:text-4xl">
              Ready to talk about growth capital for your software company?
            </h2>
            <p className="mx-auto mb-7 max-w-md text-base text-muted">
              Tell us what brings you here. We will take it from there.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Talk to Lambda Capital
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See our portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
