"use client";

import { useEffect, useRef, useState } from "react";
import useCursor from "@/hooks/useCursor";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const { pos } = useCursor();

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile once
  useEffect(() => {
    const check = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [isMobile, pos]);

  // 🚫 DO NOT render cursor on mobile
  if (isMobile) return null;

  return <div ref={cursorRef} className="neon-cursor" />;
}