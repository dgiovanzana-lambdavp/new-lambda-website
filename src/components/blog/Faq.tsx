import type { FaqItem } from "@/lib/blog/types";

type FaqProps = {
  items: FaqItem[];
};

export default function Faq({ items }: FaqProps) {
  return (
    <div className="blog-faq">
      {items.map((item) => (
        <details key={item.question} className="blog-faq__item">
          <summary className="blog-faq__summary">{item.question}</summary>
          <p className="blog-faq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
