import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SceneTransitionOverlay() {
  const overlayRef =
    useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sections =
      gsap.utils.toArray<HTMLElement>(
        ".scene-section",
      );

    const overlay =
      overlayRef.current;

    if (!overlay) {
      return;
    }

    const triggers =
      sections.slice(1).map((section) =>
        ScrollTrigger.create({
          trigger: section,

          start: "top 85%",

          onEnter: () => {
            gsap
              .timeline()
              .set(overlay, {
                display: "block",
              })
              .fromTo(
                overlay,
                {
                  xPercent: -110,
                  opacity: 0,
                },
                {
                  xPercent: 0,
                  opacity: 0.85,
                  duration: 0.18,
                  ease: "power4.in",
                },
              )
              .to(overlay, {
                xPercent: 110,
                opacity: 0,
                duration: 0.28,
                ease: "power4.out",
              })
              .set(overlay, {
                display: "none",
              });
          },

          onEnterBack: () => {
            gsap
              .timeline()
              .set(overlay, {
                display: "block",
              })
              .fromTo(
                overlay,
                {
                  xPercent: 110,
                  opacity: 0,
                },
                {
                  xPercent: 0,
                  opacity: 0.75,
                  duration: 0.16,
                },
              )
              .to(overlay, {
                xPercent: -110,
                opacity: 0,
                duration: 0.25,
              })
              .set(overlay, {
                display: "none",
              });
          },
        }),
      );

    return () => {
      triggers.forEach((trigger) =>
        trigger.kill(),
      );
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[999]
        hidden
        bg-gradient-to-r
        from-cyan-400/0
        via-cyan-300/30
        to-violet-500/0
        backdrop-blur-[2px]
      "
    >
      <div
        className="
          absolute
          inset-y-0
          left-1/2
          w-[2px]
          bg-white/50
          shadow-[0_0_50px_rgba(34,211,238,.8)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          font-mono
          text-[10px]
          font-black
          uppercase
          tracking-[0.3em]
          text-white/70
        "
      >
        loading next system
      </div>
    </div>
  );
}