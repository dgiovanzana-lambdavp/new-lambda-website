import type { ReactNode } from "react";

type TableWrapProps = {
  caption: string;
  children: ReactNode;
  /** When true, show a scroll cue between 768px and 1023px. */
  scrollable?: boolean;
};

export default function TableWrap({
  caption,
  children,
  scrollable = false,
}: TableWrapProps) {
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
      {children}
    </div>
  );
}
