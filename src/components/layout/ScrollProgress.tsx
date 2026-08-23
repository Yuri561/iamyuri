import {
  useEffect,
  useState,
} from "react";

export default function ScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (total <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        (window.scrollY / total) * 100,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}