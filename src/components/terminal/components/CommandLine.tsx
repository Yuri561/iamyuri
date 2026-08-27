import type {
  ReactNode,
} from "react";

type Props = {
  children: ReactNode;
};

export default function CommandLine({
  children,
}: Props) {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-1.5

        sm:gap-2
      "
    >
      <span
        className="
          font-bold
          text-emerald-400
        "
      >
        visitor@yuri
      </span>

      <span className="text-slate-700">
        :
      </span>

      <span className="text-cyan-400">
        ~
      </span>

      <span className="text-white">
        $
      </span>

      <span className="text-white">
        {children}
      </span>
    </div>
  );
}