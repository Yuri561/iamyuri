import { motion } from 'framer-motion';
import React from 'react';

const YuriSigniture: React.FC = () => {
  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 10,
    filter: "blur(6px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
    delay: 0.25,
  }}
  className="
    relative
    mb-8
    hidden
    overflow-hidden
    sm:block
  "
>
  <div
    className="
      pointer-events-none
      absolute
      -left-20
      top-1/2
      h-32
      w-[520px]
      -translate-y-1/2
      bg-cyan-400/[0.04]
      blur-[70px]
    "
  />

  <motion.pre
  initial={{
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  }}
  animate={{
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
  }}
  transition={{
    duration: 1.1,
    delay: 0.3,
    ease: "easeOut",
  }}
  className="
    relative
    select-none
    whitespace-pre
    text-[8px]
    font-black
    leading-[0.95]
    tracking-[-0.08em]
    text-cyan-400/70

    md:text-[10px]
    lg:text-[12px]
    xl:text-[14px]
    2xl:text-[16px]
  "
>
{`██╗   ██╗██╗   ██╗██████╗ ██╗
╚██╗ ██╔╝██║   ██║██╔══██╗██║
 ╚████╔╝ ██║   ██║██████╔╝██║
  ╚██╔╝  ██║   ██║██╔══██╗██║
   ██║   ╚██████╔╝██║  ██║██║
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝`}
</motion.pre>

  <div
    className="
      mt-4
      flex
      items-center
      gap-3
    "
  >
    <span
      className="
        h-px
        w-10
        bg-cyan-400/40
      "
    />

    <span
      className="
        text-[8px]
        font-black
        uppercase
        tracking-[0.24em]
        text-slate-700
      "
    >
      ENGINEERING SYSTEMS PROFILE
    </span>
  </div>
</motion.div>
  );
};

export default YuriSigniture;