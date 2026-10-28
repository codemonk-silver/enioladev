import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 600;
      setVisible((previous) => previous === next ? previous : next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-dark-card border border-white/[0.12] text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-dark-card-alt transition-[opacity,transform] duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
