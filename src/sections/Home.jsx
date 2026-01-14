import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1C1C3A] via-[#22223B] to-[#1C1C3A] overflow-hidden pt-12 pb-4"
    >
      <div className="flex flex-col md:flex-row items-end md:items-center w-full max-w-6xl px-6 md:px-12 gap-10 md:gap-16 relative">
        {/* LEFT - Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-6 pb-10 md:pb-0"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#C9ADA7]">
            Hi, I'm{" "}
            <span className="text-[#F2E9E4] drop-shadow">
              {profile.firstName} {profile.lastName}
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-[#F2E9E4] font-light">
            {profile.tagline.join(" · ")}
          </p>
          <div className="text-md md:text-lg text-[#C9ADA7] leading-relaxed">
            {profile.summary}
          </div>
        </motion.div>

        {/* RIGHT - Image with Glow */}
        <motion.div
          initial={{ x: 90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative md:w-1/2 flex justify-center items-end"
          style={{ minHeight: "295px" }}
        >
          <div className="relative">
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
              className="z-10 relative w-[310px] h-[360px] md:w-[410px] md:h-[480px] object-cover rounded-3xl"
              style={{ aspectRatio: "5/6" }}
            />
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
