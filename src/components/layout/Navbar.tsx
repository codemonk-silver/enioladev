import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** CSS transitions keep navigation responsive without loading an animation runtime. */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = navLinks.map(({ href }) => href.slice(1));
    const targets = ids.map((id) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      const nextScrolled = window.scrollY > 50;
      setScrolled((prev) => prev === nextScrolled ? prev : nextScrolled);
      for (let i = ids.length - 1; i >= 0; i--) {
        if (targets[i] && targets[i].getBoundingClientRect().top <= 120) {
          setActiveSection((prev) => prev === ids[i] ? prev : ids[i]);
          break;
        }
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <>
      <nav aria-label="Main navigation" className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden w-full max-w-4xl px-4 md:block">
        <div className={`flex items-center justify-center gap-1 px-2 py-2 rounded-full border transition-colors duration-200 ${scrolled ? "bg-dark-bg-secondary/95 border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : "bg-dark-bg-secondary/80 border-white/[0.08]"} backdrop-blur-md`}>
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={active ? "location" : undefined}
                className={`relative px-5 py-2 rounded-full font-display font-medium text-sm transition-colors duration-200 ${active ? "text-text-primary bg-white/[0.07] border border-white/[0.08]" : "text-text-muted hover:text-text-secondary border border-transparent"}`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="w-px h-4 bg-white/[0.1] mx-1" />
          <a href="/Eniola_Frontend_Engineer_CV.pdf" download="Eniola_Frontend_Engineer_CV.pdf" className="flex items-center gap-1.5 px-5 py-2 rounded-full border border-white/[0.12] font-mono text-[11px] uppercase tracking-wider text-text-secondary transition-colors duration-200 hover:bg-white/[0.08] hover:text-text-primary">
            Resume <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </nav>

      <nav aria-label="Mobile navigation" className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className={`flex items-center justify-between px-5 py-4 transition-colors duration-200 ${scrolled || menuOpen ? "bg-dark-bg-secondary border-b border-white/[0.08]" : "bg-transparent"}`}>
          <a href="#home" onClick={() => setMenuOpen(false)} className={`flex items-center gap-3 transition-opacity duration-150 ${menuOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}>
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/[0.12] ring-2 ring-white/[0.04]">
              <img src="/assets/profile-96.webp" width="36" height="48" alt="" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm text-text-primary leading-tight">Eniola</span>
              <span className="font-mono text-[10px] text-text-muted tracking-wide">Frontend Dev</span>
            </div>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.10] text-text-secondary active:scale-95 transition-transform duration-150"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-[opacity,visibility] duration-200 ${menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-black/75" onClick={() => setMenuOpen(false)} />
        <div
          id="mobile-navigation"
          inert={!menuOpen}
          className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-dark-bg border-l border-white/[0.08] flex flex-col transition-transform duration-200 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-white/[0.06]">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/[0.12]">
              <img src="/assets/profile-96.webp" width="40" height="53" alt="" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-text-primary">Eniola Olajugbagbe</p>
              <p className="font-mono text-[10px] text-text-muted">Available for work</p>
            </div>
          </div>
          <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "location" : undefined}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-display font-medium text-base transition-colors duration-150 ${active ? "text-text-primary bg-white/[0.06] border border-white/[0.08]" : "text-text-muted hover:text-text-secondary hover:bg-white/[0.03]"}`}
                >
                  <span>{link.label}</span>
                  {active && <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-text-primary" />}
                </a>
              );
            })}
          </div>
          <div className="px-6 py-6 border-t border-white/[0.06] space-y-3">
            <a href="/Eniola_Frontend_Engineer_CV.pdf" download="Eniola_Frontend_Engineer_CV.pdf" className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-text-primary text-dark-bg font-display font-semibold text-sm active:scale-[0.98]">
              Download Resume <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
