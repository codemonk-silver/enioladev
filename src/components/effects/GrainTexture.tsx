/** Tiny static noise tile instead of a full-screen SVG turbulence filter. */
export default function GrainTexture() {
  return (
    <div
      aria-hidden="true"
      className="grain-overlay pointer-events-none fixed inset-0 z-[40] opacity-[0.025]"
    />
  );
}
