"use client";
import { useEffect, useRef } from "react";

export default function HeroParallaxBg() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onMove(e: MouseEvent) {
      const currentEl = ref.current;
      if (!currentEl) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // -5 ~ 5
      const y = (e.clientY / innerHeight - 0.5) * 10; // -5 ~ 5
      currentEl.style.setProperty("--tx", `${x}px`);
      currentEl.style.setProperty("--ty", `${y}px`);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ transform: "translate3d(var(--tx,0), var(--ty,0), 0)" }}
      aria-hidden
    >
      <img
        src="/hero-3d-placeholder.svg"
        alt=""
        className="parallax-float absolute right-[-15%] top-[-20%] w-[900px] md:w-[1000px] lg:w-[1100px] max-w-none opacity-70"
      />
    </div>
  );
}

