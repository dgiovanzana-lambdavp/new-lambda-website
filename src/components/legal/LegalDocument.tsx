import type { LegalSection } from "@/lib/legal/content";
import { LEGAL_EFFECTIVE_DATE, LEGAL_OPERATOR } from "@/lib/legal/content";

type LegalDocumentProps = {
  title: string;
  sections: LegalSection[];
};

export default function LegalDocument({ title, sections }: LegalDocumentProps) {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <main className="section-padding">
        <div className="container-custom max-w-3xl">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted text-sm md:text-base">
              Effective {LEGAL_EFFECTIVE_DATE}. {LEGAL_OPERATOR}, a New Mexico
              limited liability company.
            </p>
          </header>

          <div className="space-y-10 text-foreground leading-relaxed">
            {sections.map((section) => (
              <section key={section.id} aria-labelledby={`${section.id}-heading`}>
                <h2
                  id={`${section.id}-heading`}
                  className="text-xl md:text-2xl font-semibold mb-4"
                >
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-muted mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}