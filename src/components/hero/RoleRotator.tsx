import {
  useEffect,
  useState,
} from "react";

import { rotatingRoles } from "../../data/recruiter";

export default function RoleRotator() {
  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    const interval = window.setInterval(
      () => {
        setIndex(
          (current) =>
            (current + 1) %
            rotatingRoles.length,
        );
      },
      2400,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <span className="size-2 animate-pulse rounded-full bg-cyan-400" />

      <span className="font-mono text-xs text-slate-600 sm:text-sm">
        currently presenting as:
      </span>

      <span className="font-mono text-xs font-bold text-cyan-300 sm:text-sm">
        {rotatingRoles[index]}
      </span>
    </div>
  );
}