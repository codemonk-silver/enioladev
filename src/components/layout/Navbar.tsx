import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const easeValue: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar — Floating Pill */}
      <motion.nav
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden w-full max-w-4xl px-4 md:block"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeValue }}
      >
        <div
          className={`flex items-center justify-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-dark-bg-secondary/95 border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-dark-bg-secondary/80 border-white/[0.08]"
          } backdrop-blur-[24px]`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className={`relative px-5 py-2 rounded-full font-display font-medium text-sm transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/[0.08]"
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}

          <div className="w-px h-4 bg-white/[0.1] mx-1" />

          <a
            href="#"
            className="flex items-center gap-1.5 px-5 py-2 rounded-full border border-white/[0.12] font-mono text-[11px] uppercase tracking-wider text-text-secondary transition-all duration-300 hover:bg-white/[0.08] hover:text-text-primary hover:border-white/20"
          >
            Resume
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </motion.nav>

      {/* Mobile Navbar — Full-width Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeValue }}
      >
        <div
          className={`flex items-center justify-between px-5 py-4 transition-all duration-500 ${
            scrolled
              ? "bg-dark-bg-secondary/95 border-b border-white/[0.08] backdrop-blur-[24px]"
              : "bg-transparent"
          }`}
        >
          {/* Brand */}
            <a
              href="#home"
              className={`flex items-center gap-3 transition-opacity duration-200 ${
                menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-white/[0.12] ring-2 ring-white/[0.04]">
                <img
                  src="/assets/profile.jpg"
                  alt="Eniola"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-display font-semibold text-sm text-text-primary leading-tight">
                  Eniola
                </span>
                <span className="font-mono text-[10px] text-text-muted tracking-wide">
                  Frontend Dev
                </span>
              </div>
            </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.10] text-text-secondary active:scale-95 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-screen Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Panel from Right */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-dark-bg border-l border-white/[0.08] flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: easeValue }}
            >
              {/* Drawer Header */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/[0.12]">
                  <img
                    src="/assets/profile.jpg"
                    alt="Eniola"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-text-primary">
                    Eniola Olajugbagbe
                  </p>
                  <p className="font-mono text-[10px] text-text-muted">
                    Available for work
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-4 py-6 space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-display font-medium text-base transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "text-text-primary bg-white/[0.06] border border-white/[0.08]"
                        : "text-text-muted hover:text-text-secondary hover:bg-white/[0.03]"
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.07, duration: 0.4, ease: easeValue }}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-text-primary"
                        layoutId="mobile-indicator"
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="px-6 py-6 border-t border-white/[0.06] space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-text-primary text-dark-bg font-display font-semibold text-sm transition-transform active:scale-[0.98]"
                >
                  Download Resume
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
                  <span>Open to opportunities</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
