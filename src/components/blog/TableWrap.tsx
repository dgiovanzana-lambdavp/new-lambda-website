import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

type TableWrapProps = {
  caption: string;
  children: ReactNode;
  /** When true, show a scroll cue between 768px and 1023px. */
  scrollable?: boolean;
};

/**
 * Wraps a blog <table> in .blog-table-wrap (overflow-x: auto) and ensures
 * the table element itself has className="blog-table" for shared styling.
 */
export default function TableWrap({
  caption,
  children,
  scrollable = false,
}: TableWrapProps) {
  const enhanced = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== "table") return child;
    const el = child as ReactElement<{ className?: string }>;
    const existing = el.props.className ?? "";
    if (/\bblog-table\b/.test(existing)) return el;
    return cloneElement(el, {
      className: ["blog-table", existing].filter(Boolean).join(" "),
    });
  });

  return (
    <div
      className={
        scrollable
          ? "blog-table-wrap blog-table-wrap--scrollable"
          : "blog-table-wrap"
      }
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      {enhanced}
    </div>
  );
}
