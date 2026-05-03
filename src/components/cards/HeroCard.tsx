import { motion } from "framer-motion";
import BaseCard from "./BaseCard";

const floatingTags = [
  "React", "TypeScript", "Next.js", "Tailwind", "Motion"
];

const easeValue: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroCard() {
  return (
    <BaseCard className="overflow-hidden relative" delay={0} hover={false}>
      <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-5 md:space-y-6 order-2 lg:order-1">
          {/* Availability Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: easeValue }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
            <span className="font-mono text-[11px] text-green-400 font-medium">
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-display font-bold text-3xl sm:text-4xl md:text-[52px] leading-[1.05] text-text-primary tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: easeValue }}
          >
            Eniola Olajugbagbe
          </motion.h1>

          {/* Title */}
          <motion.p
            className="font-display font-semibold text-lg md:text-[26px] text-text-secondary"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: easeValue }}
          >
            Frontend Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-base md:text-lg text-text-secondary max-w-[460px] leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: easeValue }}
          >
            Crafting premium, modern interfaces with code, motion, and precision.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-sm md:text-[15px] text-text-muted max-w-[420px] leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: easeValue }}
          >
            I create polished, accessible, high-performance interfaces with React, Next.js, TypeScript, and motion.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 md:gap-4 pt-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: easeValue }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 md:px-7 py-3 md:py-3.5 rounded-full bg-text-primary text-dark-bg font-display font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 md:px-7 py-3 md:py-3.5 rounded-full border border-white/20 text-text-primary font-display font-semibold text-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/30"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Mini Stat Row */}
          <motion.div
            className="flex items-center gap-3 md:gap-4 pt-3 font-mono text-[10px] md:text-[11px] text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6, ease: easeValue }}
          >
            <span>3+ Years</span>
            <span className="text-white/20">·</span>
            <span>40+ Projects</span>
            <span className="text-white/20">·</span>
            <span>React & TypeScript Expert</span>
          </motion.div>
        </div>

        {/* Right Visual — Profile Image */}
        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: easeValue }}
          >
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

            {/* Image container */}
            <div className="relative w-[220px] h-[280px] md:w-[260px] md:h-[320px] rounded-[28px] overflow-hidden border border-white/[0.10] bg-dark-bg-secondary shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img
                src="/assets/profile.jpg"
                alt="Eniola Olajugbagbe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Corner accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Floating Tags around image */}
            <div className="absolute inset-0 pointer-events-none">
              {floatingTags.map((tag, i) => {
                const positions = [
                  { x: -60, y: 40 },
                  { x: 220, y: 20 },
                  { x: 240, y: 160 },
                  { x: -50, y: 200 },
                  { x: 210, y: 260 },
                ];
                const pos = positions[i];
                return (
                  <motion.span
                    key={tag}
                    className="absolute px-3 py-1.5 rounded-full bg-dark-bg-secondary/90 border border-white/[0.10] font-mono text-[10px] text-text-muted whitespace-nowrap shadow-lg backdrop-blur-sm"
                    style={{
                      left: `${pos.x}px`,
                      top: `${pos.y}px`,
                    }}
                    initial={{ opacity: 0, scale: 0.6, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 1.0 + i * 0.12,
                      duration: 0.5,
                      ease: easeValue,
                    }}
                  >
                    {tag}
                  </motion.span>
                );
              })}
            </div>

            {/* Small decorative orb behind */}
            <motion.div
              className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </BaseCard>
  );
}
