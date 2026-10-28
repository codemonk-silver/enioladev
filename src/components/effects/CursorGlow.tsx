import { useEffect, useRef } from "react";

/** Desktop-only decoration. Move a DOM layer at most once per frame without React renders. */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      glow.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
    };
    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onVisibilityChange = () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    const configure = () => {
      const enabled = canHover.matches && !reducedMotion.matches;
      glow.hidden = !enabled;
      window.removeEventListener("pointermove", onPointerMove);
      if (enabled) window.addEventListener("pointermove", onPointerMove, { passive: true });
      if (!enabled && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    configure();
    canHover.addEventListener("change", configure);
    reducedMotion.addEventListener("change", configure);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      canHover.removeEventListener("change", configure);
      reducedMotion.removeEventListener("change", configure);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      hidden
      className="pointer-events-none fixed left-0 top-0 z-[45] h-[400px] w-[400px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)" }}
    />
  );
}
