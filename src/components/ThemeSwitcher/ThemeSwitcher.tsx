"use client";

import { useEffect, useState } from "react";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";

type BackgroundStyle =
  | "none"
  | "grid"
  | "balls"
  | "music"
  | "circuit"
  | "dots"
  | "diagonal"
  | "aurora"
  | "rain"
  | "stars"
  | "waves"
  | "scan"
  | "particles";

const backgroundStyles: {
  id: Exclude<BackgroundStyle, "none">;
  name: string;
}[] = [
  { id: "grid", name: "Grid" },
  { id: "balls", name: "Floating Balls" },
  { id: "music", name: "Music Equalizer" },
  { id: "circuit", name: "Circuit" },
  { id: "dots", name: "Dots" },
  { id: "diagonal", name: "Flow" },
  { id: "aurora", name: "Aurora" },
  { id: "rain", name: "Rain" },
  { id: "stars", name: "Stars" },
  { id: "waves", name: "Waves" },
  { id: "scan", name: "Scan" },
  { id: "particles", name: "Particles" },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const [backgroundStyle, setBackgroundStyle] =
    useState<BackgroundStyle>("none");

  const {
    setTheme,
    darkMode,
    setDarkMode,
    colors,
  } = useThemeSwitcher();

  // =========================================================
  // APPLY BACKGROUND STYLE
  // =========================================================

  useEffect(() => {
    const root = document.documentElement;

    const backgroundClasses = [
      "section-bg-grid",
      "section-bg-balls",
      "section-bg-music",
      "section-bg-circuit",
      "section-bg-dots",
      "section-bg-diagonal",
      "section-bg-aurora",
      "section-bg-rain",
      "section-bg-stars",
      "section-bg-waves",
      "section-bg-scan",
      "section-bg-particles",
    ];

    root.classList.remove(...backgroundClasses);

    if (backgroundStyle !== "none") {
      root.classList.add(`section-bg-${backgroundStyle}`);
    }

    return () => {
      root.classList.remove(...backgroundClasses);
    };
  }, [backgroundStyle]);

  // =========================================================
  // CHANGE BACKGROUND
  // =========================================================

  const handleBackgroundChange = (
    style: Exclude<BackgroundStyle, "none">
  ) => {
    setBackgroundStyle((current) =>
      current === style ? "none" : style
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className={`style-switcher ${
        open ? "open" : ""
      }`}
    >
      {/* =====================================================
          SETTINGS TOGGLER
      ===================================================== */}

      <button
        type="button"
        className="style-switcher-toggler s-icon"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open theme settings"
        aria-expanded={open}
      >
        <i className="fas fa-cog fa-spin" />
      </button>

      {/* =====================================================
          DAY / NIGHT
      ===================================================== */}

      <button
        type="button"
        className="day-night s-icon"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={
          darkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      >
        <i
          className={`fas ${
            darkMode ? "fa-sun" : "fa-moon"
          }`}
        />
      </button>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="style-switcher-content">

        {/* ===================================================
            THEME COLORS
        =================================================== */}

        <section className="theme-color-section">
          <h4>Theme Colors</h4>

          <div className="colors">
            {colors.map((color) => (
              <button
                type="button"
                key={color}
                className={color}
                onClick={() => setTheme(color)}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
        </section>

        {/* ===================================================
            BACKGROUND STYLE
        =================================================== */}

        <section className="background-style-section">

          <div className="section-heading-row">
            <h4>Background Style</h4>

            {/* CLEAR BUTTON */}

            {backgroundStyle !== "none" && (
              <button
                type="button"
                className="background-reset"
                onClick={() =>
                  setBackgroundStyle("none")
                }
                aria-label="Remove background effect"
              >
                Clear
              </button>
            )}
          </div>

          {/* =================================================
              BACKGROUND OPTIONS
          ================================================= */}

          <div className="background-styles">

            {backgroundStyles.map((style) => (
              <button
                type="button"
                key={style.id}
                className={`background-style ${
                  backgroundStyle === style.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleBackgroundChange(style.id)
                }
                aria-label={`${style.name} background`}
                aria-pressed={
                  backgroundStyle === style.id
                }
              >
                {/* ===========================================
                    BACKGROUND PREVIEW
                =========================================== */}

                <span
                  className={`background-preview ${style.id}-preview`}
                >

                  {/* =========================================
                      1. GRID
                      ONLY GRID LINES
                  ========================================= */}

                  {style.id === "grid" && (
                    <span className="grid-lines" />
                  )}

                  {/* =========================================
                      2. FLOATING BALLS
                      11 SMALL BALLS
                      NO GRID
                  ========================================= */}

                  {style.id === "balls" && (
                    <>
                      <span className="ball ball-1" />
                      <span className="ball ball-2" />
                      <span className="ball ball-3" />
                      <span className="ball ball-4" />
                      <span className="ball ball-5" />
                      <span className="ball ball-6" />
                      <span className="ball ball-7" />
                      <span className="ball ball-8" />
                      <span className="ball ball-9" />
                      <span className="ball ball-10" />
                      <span className="ball ball-11" />
                    </>
                  )}

                  {/* =========================================
                      3. MUSIC EQUALIZER
                  ========================================= */}

                  {style.id === "music" && (
                    <span className="equalizer">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  )}

                  {/* =========================================
                      4. CIRCUIT
                  ========================================= */}

                  {style.id === "circuit" && (
                    <>
                      <span className="circuit-line circuit-line-1" />
                      <span className="circuit-line circuit-line-2" />
                      <span className="circuit-line circuit-line-3" />

                      <span className="circuit-node circuit-node-1" />
                      <span className="circuit-node circuit-node-2" />
                      <span className="circuit-node circuit-node-3" />
                    </>
                  )}

                  {/* =========================================
                      5. DOTS
                  ========================================= */}

                  {style.id === "dots" && (
                    <span />
                  )}

                  {/* =========================================
                      6. FLOW
                  ========================================= */}

                  {style.id === "diagonal" && (
                    <span />
                  )}

                  {/* =========================================
                      7. AURORA
                  ========================================= */}

                  {style.id === "aurora" && (
                    <span />
                  )}

                  {/* =========================================
                      8. RAIN
                  ========================================= */}

                  {style.id === "rain" && (
                    <>
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </>
                  )}

                  {/* =========================================
                      9. STARS
                  ========================================= */}

                  {style.id === "stars" && (
                    <>
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </>
                  )}

                  {/* =========================================
                      10. WAVES
                  ========================================= */}

                  {style.id === "waves" && (
                    <>
                      <span />
                      <span />
                      <span />
                    </>
                  )}

                  {/* =========================================
                      11. SCAN
                  ========================================= */}

                  {style.id === "scan" && (
                    <span />
                  )}

                  {/* =========================================
                      12. PARTICLES
                  ========================================= */}

                  {style.id === "particles" && (
                    <>
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </>
                  )}

                </span>

                {/* ===========================================
                    BACKGROUND NAME
                =========================================== */}

                <span className="background-style-name">
                  {style.name}
                </span>
              </button>
            ))}

          </div>
        </section>
      </div>
    </div>
  );
}