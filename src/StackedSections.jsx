import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StackedSections({ about, home }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /**
   * HOME animations (moves up, shrinks, fades)
   */
  const homeY = useTransform(scrollYProgress, [0, 0.5], [0, -180]);
  const homeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const homeOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  /**
   * ABOUT animations (comes from below, grows)
   */
  const aboutY = useTransform(scrollYProgress, [0.35, 0.85], [120, 0]);
  const aboutScale = useTransform(scrollYProgress, [0.35, 0.85], [0.92, 1]);
  const aboutOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[220vh] bg-[#020617]"
    >
      {/* ABOUT (behind, grows up) */}
      <motion.div
        style={{
          y: aboutY,
          scale: aboutScale,
          opacity: aboutOpacity,
        }}
        className="sticky top-0 min-h-screen z-10"
      >
        {about}
      </motion.div>

      {/* HOME (front, exits upward) */}
      <motion.div
        style={{
          y: homeY,
          scale: homeScale,
          opacity: homeOpacity,
        }}
        className="sticky top-0 min-h-screen z-20"
      >
        {home}
      </motion.div>
    </section>
  );
}
