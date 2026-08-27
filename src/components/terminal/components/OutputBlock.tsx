import type {
  ReactNode,
} from "react";

import TypewriterText from "./TypewriterText";

type Props = {
  label: string;

  children: ReactNode;
};

export default function OutputBlock({
  label,
  children,
}: Props) {
  return (
    <div
      className="
        border-l
        border-cyan-400/[0.16]
        pl-4

        sm:pl-5
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-white/[0.04]
          pb-3
        "
      >
        <span
          className="
            size-1.5
            animate-pulse
            rounded-full
            bg-cyan-400
          "
        />

        <TypewriterText
          text={label}
          speed={12}
          cursor={false}
          className="
            text-[9px]
            font-black
            uppercase
            tracking-[0.18em]
            text-cyan-500
          "
        />
      </div>

      {children}
    </div>
  );
}