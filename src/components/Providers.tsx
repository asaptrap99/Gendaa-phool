"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

// LazyMotion keeps the animation bundle small. MotionConfig honours reduced motion.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
