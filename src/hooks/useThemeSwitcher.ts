"use client";

import { useEffect, useState } from "react";


// Available theme color classes
const colors = [
  "color-1",
  "color-2",
  "color-3",
  "color-4",
  "color-5",
] as const;


// Creates a type from colors array
type ThemeColor = (typeof colors)[number];


// Custom hook for theme + dark mode management
export function useThemeSwitcher() {

  // Default theme during SSR
  const [theme, setTheme] =
    useState<ThemeColor>("color-1");

  // Default dark mode during SSR
  const [darkMode, setDarkMode] =
    useState(false);

  // Prevent hydration mismatch
  const [mounted, setMounted] =
    useState(false);


  // Load saved values after client mounts
  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme") as ThemeColor;

    const savedDarkMode =
      localStorage.getItem("darkMode");

    if (savedTheme) {
      setTheme(savedTheme);
    }

    if (savedDarkMode === "true") {
      setDarkMode(true);
    }

    setMounted(true);

  }, []);


  // Apply selected theme
  useEffect(() => {

    if (!mounted) return;

    document.body.classList.remove(...colors);

    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);

  }, [theme, mounted]);


  // Apply dark mode
  useEffect(() => {

    if (!mounted) return;

    document.body.classList.toggle(
      "dark",
      darkMode
    );

    localStorage.setItem(
      "darkMode",
      darkMode.toString()
    );

  }, [darkMode, mounted]);


  return {
    theme,
    setTheme,
    darkMode,
    setDarkMode,
    colors,
    mounted,
  };
}