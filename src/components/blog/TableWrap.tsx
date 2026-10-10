import type { ReactNode } from "react";

type TableWrapProps = {
  caption: string;
  children: ReactNode;
};

export default function TableWrap({ caption, children }: TableWrapProps) {
  return (
    <div
      className="blog-table-wrap"
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
