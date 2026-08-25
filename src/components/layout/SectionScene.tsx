import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction =
  | "left"
  | "right"
  | "up"
  | "down";

type SectionSceneProps = {
  children: React.ReactNode;
  direction?: Direction;
  id?: string;
  className?: string;
  glow?: "cyan" | "violet" | "green" | "none";
};

export default function SectionScene({
  children,
  direction = "right",
  id,
  className = "",
  glow = "cyan",
}: SectionSceneProps) {
  const sectionRef =
    useRef<HTMLElement>(null);

  const contentRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    const content =
      contentRef.current;

    if (!section || !content) {
      return;
    }

    const context = gsap.context(() => {
      const offset = {
        left: {
          x: -180,
          y: 0,
        },

        right: {
          x: 180,
          y: 0,
        },

        up: {
          x: 0,
          y: 140,
        },

        down: {
          x: 0,
          y: -140,
        },
      }[direction];

      gsap.fromTo(
        content,
        {
          x: offset.x,
          y: offset.y,
          opacity: 0,
          scale: 0.94,
          filter: "blur(18px)",
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",

          ease: "power4.out",

          scrollTrigger: {
            trigger: section,

            start: "top 82%",

            end: "top 25%",

            scrub: 0.8,

            toggleActions:
              "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        section,
        {
          "--scene-glow": 0,
        },
        {
          "--scene-glow": 1,

          scrollTrigger: {
            trigger: section,

            start: "top 70%",

            end: "center center",

            scrub: true,
          },
        },
      );
    }, section);

    return () => {
      context.revert();
    };
  }, [direction]);

  const glowClass = {
    cyan: "bg-cyan-400/[0.07]",
    violet: "bg-violet-500/[0.07]",
    green: "bg-emerald-400/[0.06]",
    none: "",
  }[glow];

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`
        scene-section
        relative
        isolate
        min-h-screen
        overflow-hidden
        ${className}
      `}
    >
      {/* atmospheric glow */}

      {glow !== "none" && (
        <div
          className={`
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -z-10
            size-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[160px]
            ${glowClass}
          `}
        />
      )}

      {/* moving side rail */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-400/20
          to-transparent
        "
      />

      {/* transition content */}

      <div
        ref={contentRef}
        className="relative"
      >
        {children}
      </div>
    </section>
  );
}