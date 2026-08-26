"use client";

import { useEffect } from "react";
import Typed from "typed.js";

export function useTyped(selector: string) {
  useEffect(() => {
    const typed = new Typed(selector, {
      strings: [
        "Web Designer",
        "Web Developer",
        "Java Developer",
        "Full Stack Developer",
        "Gamer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, [selector]);
}