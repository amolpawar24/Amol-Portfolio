"use client";

import { useState } from "react";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";

export default function ThemeSwitcher() {
  // Toggle switcher panel open/close
  const [open, setOpen] = useState(false);

  // Theme and dark mode controls from custom hook
  const {
    theme,
    setTheme,
    darkMode,
    setDarkMode,
    colors,
  } = useThemeSwitcher();

  return (
    <div className={`style-switcher ${open ? "open" : ""}`}>
      
      {/* Open / Close Switcher */}
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setOpen(!open)}
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>

      {/* Dark / Light Mode Toggle */}
      <div
        className="day-night s-icon"
        onClick={() => setDarkMode(!darkMode)}
      >
        <i
          className={`fas ${
            darkMode ? "fa-sun" : "fa-moon"
          }`}
        />
      </div>

      {/* Theme Switcher Title */}
      <h4>Theme Colors</h4>

      {/* Available Theme Colors */}
      <div className="colors">
        {colors.map((color) => (
          <span
            key={color}
            className={color}
            onClick={() => setTheme(color)}
          />
        ))}
      </div>
    </div>
  );
}