"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      // Cancel previous animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Use requestAnimationFrame for smooth updates
      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);

        // Check if hovering over interactive elements
        const target = e.target as HTMLElement;
        const isInteractive = Boolean(
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select") ||
          window.getComputedStyle(target).cursor === "pointer"
        );

        setIsHovering(isInteractive);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`cursor-follower ${isHovering ? "cursor-hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}

