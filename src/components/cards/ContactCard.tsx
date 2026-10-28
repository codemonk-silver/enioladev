import { Mail, Download } from "lucide-react";
import BaseCard from "./BaseCard";
import { socialLinks } from "../../data/site";

export default function ContactCard() {
  return (
    <BaseCard className="h-full flex flex-col" delay={0.55}>
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Label */}
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
          Contact
        </span>

        {/* Heading */}
        <h2 className="font-display font-semibold text-2xl md:text-[28px] text-text-primary leading-tight">
          Let's build something exceptional.
        </h2>

        {/* Subtext */}
        <p className="text-[15px] text-text-secondary leading-relaxed">
          I’m open to customer support, fintech product support, and frontend opportunities where I can combine clear communication, technical understanding, and user-focused problem solving.

          Whether it’s helping users understand a digital product, resolving support enquiries, or building clean interfaces, I care about making technology easier and more trustworthy for people.
        </p>

        {/* Email */}
        <a
          href="mailto:olajugbagbeeniola12@outlook.com"
          className="inline-flex items-center gap-2.5 text-base font-medium text-text-primary transition-colors duration-300 hover:text-silver group"
        >
          <Mail className="w-4 h-4 text-text-muted group-hover:text-silver transition-colors" />
          <span className="underline underline-offset-4 decoration-white/20 group-hover:decoration-white/40">
            olajugbagbeeniola12@outlook.com
          </span>
        </a>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/[0.08] font-mono text-xs text-text-secondary transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:text-text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
       <div className="mt-auto pt-4">
          <a
            href="/Eniola_Frontend_Engineer_CV.pdf"
            download="Eniola_Frontend_Engineer_CV.pdf"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-text-primary text-dark-bg font-display font-semibold text-sm transition-opacity duration-300 hover:opacity-90"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </BaseCard>
  );
}
