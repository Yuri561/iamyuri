import type { CareerStage } from "../../types/portfolio";

type Props = {
  stage: CareerStage;
  active: boolean;
  onClick: () => void;
};

export default function CareerStageCard({
  stage,
  active,
  onClick,
}: Props) {
  const Icon = stage.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[72px] w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
        active
          ? "border-cyan-400/30 bg-cyan-400/[0.06]"
          : "border-white/[0.06] bg-white/[0.02]"
      }`}
    >
      <div
        className={`grid size-10 shrink-0 place-items-center rounded-xl ${
          active
            ? "bg-cyan-400/10 text-cyan-400"
            : "bg-white/[0.03] text-slate-600"
        }`}
      >
        <Icon className="size-4" />
      </div>

      <div>
        <p className="text-sm font-black">
          {stage.title}
        </p>

        <p className="mt-1 text-xs text-slate-600">
          {stage.subtitle}
        </p>
      </div>
    </button>
  );
}