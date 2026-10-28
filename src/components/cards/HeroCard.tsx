import BaseCard from "./BaseCard";

const floatingTags = [
  { label: "React", left: -60, top: 40 },
  { label: "TypeScript", left: 170, top: 20 },
  { label: "Next.js", left: 198, top: 160 },
  { label: "Tailwind", left: -50, top: 200 },
  { label: "Motion", left: 210, top: 260 },
];

/** Critical above-the-fold content appears immediately, especially on mobile. */
export default function HeroCard() {
  return (
    <BaseCard className="overflow-hidden relative" delay={0} hover={false}>
      <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-14 items-center">
        <div className="space-y-5 md:space-y-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
            <span className="font-mono text-[11px] text-green-400 font-medium">Available for work</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-[52px] leading-[1.05] text-text-primary tracking-tight">
            Eniola Olajugbagbe
          </h1>
          <p className="font-display font-semibold text-lg md:text-[26px] text-text-secondary">
            Frontend Developer with a Customer Support Mindset
          </p>
          <p className="text-base md:text-lg text-text-secondary max-w-[460px] leading-relaxed">
            Crafting premium, modern interfaces with code, motion, and precision.
          </p>
          <p className="text-sm md:text-[15px] text-text-muted max-w-[420px] leading-relaxed">
            I am focused on clear communication, problem-solving, technical troubleshooting, and helping users feel supported when using digital financial platforms.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
            <a href="#projects" className="inline-flex items-center px-6 md:px-7 py-3 md:py-3.5 rounded-full bg-text-primary text-dark-bg font-display font-semibold text-sm transition-colors duration-200 hover:opacity-90">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center px-6 md:px-7 py-3 md:py-3.5 rounded-full border border-white/20 text-text-primary font-display font-semibold text-sm transition-colors duration-200 hover:bg-white/[0.06] hover:border-white/30">
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-4 pt-3 font-mono text-[10px] md:text-[11px] text-text-muted">
            <span>3+ Years</span><span className="text-white/20">·</span>
            <span>40+ Projects</span><span className="text-white/20">·</span>
            <span>React &amp; TypeScript Expert</span><span className="text-white/20">·</span>
            <span>Customer Support Rep</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <div className="relative group">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative w-[220px] h-[280px] md:w-[260px] md:h-[320px] rounded-[28px] overflow-hidden border border-white/[0.10] bg-dark-bg-secondary shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img
                src="/assets/profile-320.webp"
                srcSet="/assets/profile-320.webp 320w, /assets/profile-640.webp 640w"
                sizes="(min-width: 768px) 260px, 220px"
                width="640"
                height="857"
                alt="Eniola Olajugbagbe"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden md:block">
              {floatingTags.map((tag) => (
                <span
                  key={tag.label}
                  className="absolute px-3 py-1.5 rounded-full bg-dark-bg-secondary/90 border border-white/[0.10] font-mono text-[10px] text-text-muted whitespace-nowrap shadow-lg"
                  style={{ left: tag.left, top: tag.top }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
