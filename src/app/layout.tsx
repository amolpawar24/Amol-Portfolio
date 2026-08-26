import type { Metadata } from "next";
import "../scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Poppins, Clicker_Script } from "next/font/google";
import Cursor from "@/components/Cursor/Cursor";

// ============================================================
// LAYOUT — layout.tsx
// Root layout wrapping every page.
// Handles global fonts, styles, and HTML shell.
// ============================================================

// ── GOOGLE FONTS ─────────────────────────────────────────────
// Loaded via next/font for automatic optimization and zero layout shift.
// Injected as CSS variables so SCSS can consume them via var(--font-poppins) etc.

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins", // used in _typography.scss
  display: "swap",
});

const clicker = Clicker_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-clicker", // used for logo and decorative headings
  display: "swap",
});


// ── METADATA ─────────────────────────────────────────────────
// Page title and description shown in browser tab and search engines
export const metadata: Metadata = {
  title: "AMOL PAWAR",
  description: "Frontend Developer Portfolio",
};


// ── ROOT LAYOUT ──────────────────────────────────────────────
// Font variables are applied to <html> so all child components
// can access them via CSS variables anywhere in the tree.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${clicker.variable}`} // makes font CSS vars available globally
    >
      {/* ── BODY ───────────────────────────────────────────
          ThemeSwitcher.tsx adds theme and dark classes here
          at runtime e.g. <body class="theme-1 dark">
      ─────────────────────────────────────────────────── */}
      <body>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}