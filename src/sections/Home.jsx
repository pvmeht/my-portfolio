import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";
import { Ripple } from "@/components/ui/ripple";
import DotGrid from '@/components/ui/DotGrid';

// Terminal demo component for initial load animation
function TerminalIntro() {
  return (
    <Terminal className="mb-8 w-full max-w-2xl mx-auto">
      <TypingAnimation delay={0}>$ whoami</TypingAnimation>
      <AnimatedSpan delay={800} className="text-green-500">
        {profile.fullName}
      </AnimatedSpan>
      <TypingAnimation delay={1600}>$ echo $ROLE</TypingAnimation>
      <AnimatedSpan delay={2400} className="text-blue-500">
        {profile.tagline.join(" · ")}
      </AnimatedSpan>
      <TypingAnimation delay={3200}>$ cat summary.txt</TypingAnimation>
      <AnimatedSpan delay={4000} className="text-purple-500">
        {profile.summary}
      </AnimatedSpan>
    </Terminal>
  );
}

export default function Home() {
  // Scroll animation variants for upward motion
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#1A1A2E] overflow-hidden relative pt-12 pb-4" // Smooth dark theme
    >
      {/* Background Pattern - Dot Pattern for subtle animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <DotGrid
    dotSize={3}
    gap={32}
    baseColor="#271E37"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />

  {/* magic ui */}
  {/* <DotPattern 
          width={32}
          height={32}
          cx={2}
          cy={2}
          cr={1}
          className="opacity-15" // Removed animate-pulse-slow if not supported
        /> */}
      </div>

      <div className="flex flex-col md:flex-row items-end md:items-center w-full max-w-6xl px-6 md:px-12 gap-10 md:gap-16 relative z-10">
        {/* LEFT - Text Content with Animations */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 space-y-6 pb-10 md:pb-0"
        >
          {/* TerminalIntro */}
          {/* <TerminalIntro /> */}

          <h1 className="text-3xl md:text-5xl font-extrabold text-[#C9ADA7]">
            Hi, I'm{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="text-[#F2E9E4] drop-shadow inline-block"
            >
              {profile.firstName} {profile.lastName}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-[#F2E9E4] font-light"
          >
            {profile.tagline.join(" · ")}
          </motion.p>

          <div className="text-md md:text-lg text-[#C9ADA7] leading-relaxed">
            {profile.summary}
          </div>
        </motion.div>

        {/* RIGHT - Image with Glow and Ripple Effect */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative md:w-1/2 flex justify-center items-end"
          style={{ minHeight: "295px" }}
        >
          {/* Ripple Background for subtle interaction */}
          <div className="absolute inset-0 z-0">
            <Ripple className="opacity-20" />
          </div>

          <div className="relative z-10">
            {/* White Glow */}
            <div
              className="absolute top-1/2 left-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)",
                filter: "blur(60px)",
                borderRadius: "50%",
              }}
            />
            {/* Previous background blur */}
            <div
              className="absolute top-1/2 left-1/2 w-[500px] h-[580px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 mix-blend-soft-light"
              style={{
                filter: "blur(90px)",
                background:
                  "radial-gradient(circle at 50% 60%, rgba(201,173,167,0.4), rgba(34,34,59,0.1), transparent 70%)",
                opacity: 0.8,
              }}
            />
            {/* Profile Image */}
            <img
              src={profile.photo}
              alt={`${profile.fullName} photo`}
              className="z-20 relative w-[310px] h-[360px] md:w-[410px] md:h-[480px] object-cover rounded-3xl"
              style={{ aspectRatio: "5/6" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}