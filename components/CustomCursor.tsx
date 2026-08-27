"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      setHovering(
        Boolean(
          target.closest(
            "a, button, input, textarea, select, [role='button']"
          )
        )
      );
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-400 transition-all duration-150 md:block ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        hovering
          ? "h-7 w-7 border-zinc-200 bg-zinc-200/10"
          : "bg-zinc-400/20"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}