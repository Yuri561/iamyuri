 import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export default function SectionLabel({
  children,
}: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-cyan-400" />

      <span className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300">
        {children}
      </span>
    </div>
  );
}