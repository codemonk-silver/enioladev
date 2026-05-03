import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialLinks } from "../../data/site";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "E-Commerce", href: "#projects" },
      { label: "Dashboard", href: "#projects" },
      { label: "Portfolio Gen", href: "#projects" },
      { label: "Weather App", href: "#projects" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
      { label: "Email", href: "mailto:hello@eniola.dev", external: true },
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub className="w-4 h-4" />,
  LinkedIn: <FaLinkedin className="w-4 h-4" />,
  Twitter: <FaTwitter className="w-4 h-4" />,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-dark-bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-text-primary">
              Eniola Olajugbagbe
            </h3>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Frontend developer crafting premium interfaces with code, motion, and precision. Open to freelance and full-time opportunities.
            </p>
            <a
              href="mailto:hello@eniola.dev"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@eniola.dev
            </a>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} Eniola Olajugbagbe. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/[0.08] text-text-muted hover:text-text-primary hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                aria-label={link.name}
              >
                {iconMap[link.name]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
