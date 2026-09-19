/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaArrowUp, FaArrowRight } from "react-icons/fa6";
import type { CSSProperties } from "react";

import { socialLinks } from "@/data/socialLinksData";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  /* ===================== SOCIAL LINKS ===================== */

  const footerSocialLinks = socialLinks.filter(
    (link) =>
      link.name !== "Email" &&
      link.name !== "Resume" &&
      link.name !== "Portfolio" &&
      link.url !== "#"
  );

  /* ===================== NAVIGATION ===================== */

  const handleNavigation = (section: string) => {
    onNavigate(section);
  };

  /* ===================== BACK TO TOP ===================== */

  const handleBackToTop = () => {
    onNavigate("Home");
  };

  return (
    <footer className="footer">
      <div className="container">

        {/* =====================================================
            MAIN FOOTER CARD
        ====================================================== */}

        <div className="footer-card">

          {/* ===================== DECORATIVE GLOW ===================== */}

          <span className="footer-glow footer-glow-one" />
          <span className="footer-glow footer-glow-two" />

          {/* =====================================================
              TOP AREA
          ====================================================== */}

          <div className="footer-main">

            {/* ===================== IDENTITY ===================== */}

            <div className="footer-brand">

              <div className="footer-logo">
                AP
              </div>

              <div className="footer-brand-content">

                <span className="footer-label">
                  PORTFOLIO
                </span>

                <h3>
                  Amol Pawar
                </h3>

                <p>
                  Full Stack Developer
                </p>

              </div>

            </div>

            {/* ===================== MESSAGE ===================== */}

            <div className="footer-message">

              <span className="footer-message-label">
                LET'S CONNECT
              </span>

              <h4>
                Let's build something
                <span> meaningful.</span>
              </h4>

              <p>
                Have a project, opportunity, or idea?
                Let's connect and make it happen.
              </p>

            </div>

          </div>

          {/* =====================================================
              DIVIDER
          ====================================================== */}

          <div className="footer-divider">
            <span />
          </div>

          {/* =====================================================
              LINKS AREA
          ====================================================== */}

          <div className="footer-links-area">

            {/* ===================== NAVIGATION ===================== */}

            <div className="footer-navigation">

              <span className="footer-heading">
                NAVIGATION
              </span>

              <div className="footer-nav">

                {/* HOME */}

                <button
                  type="button"
                  onClick={() => handleNavigation("Home")}
                >
                  <span>
                    Home
                  </span>

                  <FaArrowRight />
                </button>

                {/* ABOUT */}

                <button
                  type="button"
                  onClick={() => handleNavigation("Profile")}
                >
                  <span>
                    About
                  </span>

                  <FaArrowRight />
                </button>

                {/* SKILLS */}

                <button
                  type="button"
                  onClick={() => handleNavigation("TechStack")}
                >
                  <span>
                    Skills
                  </span>

                  <FaArrowRight />
                </button>

                {/* SERVICES */}

                <button
                  type="button"
                  onClick={() => handleNavigation("Services")}
                >
                  <span>
                    Services
                  </span>

                  <FaArrowRight />
                </button>

                {/* PROJECTS */}

                <button
                  type="button"
                  onClick={() => handleNavigation("Projects")}
                >
                  <span>
                    Projects
                  </span>

                  <FaArrowRight />
                </button>

                {/* CERTIFICATIONS */}

                <button
                  type="button"
                  onClick={() => handleNavigation("Certifications")}
                >
                  <span>
                    Certifications
                  </span>

                  <FaArrowRight />
                </button>

                {/* CONNECT */}

                <button
                  type="button"
                  onClick={() => handleNavigation("Connect")}
                >
                  <span>
                    Connect
                  </span>

                  <FaArrowRight />
                </button>

              </div>

            </div>

            {/* ===================== SOCIAL ===================== */}

            <div className="footer-social">

              <span className="footer-heading">
                FIND ME ONLINE
              </span>

              <div className="footer-social-grid">

                {footerSocialLinks.map((link) => {

                  const Icon = link.icon;

                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                      className="footer-social-link"
                      style={
                        {
                          "--brand-color": link.color,
                        } as CSSProperties
                      }
                    >
                      <Icon />
                    </a>
                  );

                })}

              </div>

            </div>

            {/* ===================== AVAILABILITY ===================== */}

            <div className="footer-availability">

              <span className="footer-heading">
                AVAILABILITY
              </span>

              <div className="availability-box">

                <span className="availability-dot" />

                <div>

                  <strong>
                    Open to opportunities
                  </strong>

                  <span>
                    Available for new projects
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              BOTTOM AREA
          ====================================================== */}

          <div className="footer-bottom">

            {/* ===================== COPYRIGHT ===================== */}

            <div className="footer-copyright">

              <span>
                © {currentYear} Amol Pawar
              </span>

              <span className="footer-dot">
                •
              </span>

              <span>
                All Rights Reserved
              </span>

            </div>

            {/* ===================== TECH STACK ===================== */}

            <div className="footer-stack">

              <span>
                Next.js
              </span>

              <span>
                TypeScript
              </span>

              <span>
                SCSS
              </span>

            </div>

            {/* ===================== BACK TO TOP ===================== */}

            <button
              type="button"
              className="back-to-top"
              onClick={handleBackToTop}
              aria-label="Back to top"
            >
              <span>
                BACK TO TOP
              </span>

              <FaArrowUp />

            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;