import TypewriterText from "./TypewriterText";

export function DataRow({
  keyName,
  value,
  success = false,
  delay = 0,
}: {
  keyName: string;
  value: string;
  success?: boolean;
  delay?: number;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[120px_1fr]
        gap-3
        py-1
      "
    >
      <TypewriterText
        text={keyName}
        speed={8}
        delay={delay}
        cursor={false}
        className="text-slate-700"
      />

      <TypewriterText
        text={value}
        speed={10}
        delay={delay + 120}
        cursor={false}
        className={
          success
            ? "text-emerald-400"
            : "text-slate-300"
        }
      />
    </div>
  );
}

export function ContinueCommand({
  command,
  delay = 0,
}: {
  command: string;
  delay?: number;
}) {
  return (
    <p className="mt-7 text-slate-700">
      <TypewriterText
        text={`recommended_next = ${command}`}
        delay={delay}
        speed={12}
        cursor={false}
      />
    </p>
  );
}

export function CommandHelp({
  command,
  text,
  delay = 0,
}: {
  command: string;
  text: string;
  delay?: number;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[115px_1fr]
        gap-2
      "
    >
      <TypewriterText
        text={command}
        speed={8}
        delay={delay}
        cursor={false}
        className="text-cyan-300"
      />

      <TypewriterText
        text={text}
        speed={7}
        delay={delay + 100}
        cursor={false}
        className="text-slate-600"
      />
    </div>
  );
}

export function Trace({
  n,
  text,
  delay = 0,
}: {
  n: string;
  text: string;
  delay?: number;
}) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        text-slate-400
      "
    >
      <TypewriterText
        text={n}
        delay={delay}
        speed={8}
        cursor={false}
        className="text-[8px] text-cyan-800"
      />

      <TypewriterText
        text={text}
        delay={delay + 80}
        speed={10}
        cursor={false}
      />
    </div>
  );
}

export function Metric({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <div
      className="
        border-b
        border-white/[0.04]
        py-3
      "
    >
      <TypewriterText
        text={label}
        delay={delay}
        speed={8}
        cursor={false}
        className="
          text-[8px]
          uppercase
          tracking-[0.14em]
          text-slate-700
        "
      />

      <div className="mt-1">
        <TypewriterText
          text={value}
          delay={delay + 100}
          speed={10}
          cursor={false}
          className="
            text-sm
            font-bold
            text-white
          "
        />
      </div>
    </div>
  );
}