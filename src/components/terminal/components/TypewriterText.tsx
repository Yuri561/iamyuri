import {
  useEffect,
  useState,
} from "react";

type Props = {
  text: string;

  speed?: number;

  delay?: number;

  className?: string;

  cursor?: boolean;

  onComplete?: () => void;
};

export default function TypewriterText({
  text,
  speed = 14,
  delay = 0,
  className = "",
  cursor = true,
  onComplete,
}: Props) {
  const [
    displayed,
    setDisplayed,
  ] = useState("");

  const [
    finished,
    setFinished,
  ] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setFinished(false);

    let index = 0;

    let interval:
      | number
      | undefined;

    const timeout =
      window.setTimeout(() => {
        interval =
          window.setInterval(() => {
            index += 1;

            setDisplayed(
              text.slice(
                0,
                index,
              ),
            );

            if (
              index >= text.length
            ) {
              if (interval) {
                window.clearInterval(
                  interval,
                );
              }

              setFinished(true);

              onComplete?.();
            }
          }, speed);
      }, delay);

    return () => {
      window.clearTimeout(
        timeout,
      );

      if (interval) {
        window.clearInterval(
          interval,
        );
      }
    };
  }, [
    text,
    speed,
    delay,
    onComplete,
  ]);

  return (
    <span className={className}>
      {displayed}

      {cursor && !finished && (
        <span
          className="
            ml-0.5
            animate-pulse
            text-cyan-300
          "
        >
          █
        </span>
      )}
    </span>
  );
}