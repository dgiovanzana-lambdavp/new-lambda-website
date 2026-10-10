"use client";

import { useEffect, useRef } from "react";
import type { BlogHeading } from "@/lib/blog/types";

type JumpListProps = {
  headings: BlogHeading[];
};

export default function JumpList({ headings }: JumpListProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      if (mq.matches) {
        details.removeAttribute("open");
      } else {
        details.setAttribute("open", "");
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <nav aria-label="In this post" className="blog-jump">
      <details ref={detailsRef} open className="blog-jump__details">
        <summary className="blog-jump__summary">In this post</summary>
        <ol className="blog-jump__list">
          {headings.map((heading, index) => (
            <li key={heading.id} className="blog-jump__item">
              <a href={`#${heading.id}`} className="blog-jump__link">
                <span className="blog-jump__num" aria-hidden="true">
                  {index + 1}.
                </span>
                <span>{heading.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}
