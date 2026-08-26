"use client";

import { useEffect, useRef } from "react";

export default function useCursor() {
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // track mouse position
    const move = (e : MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    // animation loop (smooth + fast)
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.35;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.35;

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return { mouse, pos };
}