"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

interface StatItem {
  value: number;
  label: string;
  subLabel: string;
  index: string;
  position: "top-right" | "left" | "bottom-right";
}

const stats: StatItem[] = [
  {
    value: 1,
    label: "Company",
    subLabel: "Professional Company",
    index: "02",
    position: "top-right",
  },
  {
    value: 14,
    label: "Technologies",
    subLabel: "Tools & Technologies",
    index: "03",
    position: "left",
  },
  {
    value: 2,
    label: "Projects",
    subLabel: "Professional Projects",
    index: "04",
    position: "bottom-right",
  },
];

const coreAreas = [
  "React",
  "State Management",
  "API Integration",
  "UI Development",
];

/* ============================================================
   ANIMATED NUMBER
============================================================ */

function AnimatedNumber({
  value,
  start,
}: {
  value: number;
  start: boolean;
}) {
  const [current, setCurrent] = useState(0);

  const animationFrameRef =
    useRef<number | null>(null);

  useEffect(() => {
    if (!start) {
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 4);

      setCurrent(
        Math.round(value * eased)
      );

      if (progress < 1) {
        animationFrameRef.current =
          requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (
        animationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [value, start]);

  return (
    <span className="experience-signal-number">
      {String(current).padStart(2, "0")}
    </span>
  );
}

/* ============================================================
   METRIC NODE
============================================================ */

function MetricNode({
  stat,
  visible,
}: {
  stat: StatItem;
  visible: boolean;
}) {
  return (
    <div
      className={`experience-signal-node ${stat.position}`}
      aria-label={`${stat.value} ${stat.label}`}
    >
      <div className="experience-signal-node-top">
        <span className="experience-signal-node-index">
          {stat.index}
        </span>

        <span className="experience-signal-node-line" />
      </div>

      <AnimatedNumber
        value={stat.value}
        start={visible}
      />

      <div className="experience-signal-node-label">
        <span>{stat.label}</span>

        <small>{stat.subLabel}</small>
      </div>

      <span
        className="experience-signal-node-dot"
        aria-hidden="true"
      />
    </div>
  );
}

/* ============================================================
   EXPERIENCE STATS
============================================================ */

export default function ExperienceStats() {
  const sectionRef =
    useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] =
    useState(false);

  /* ==========================================================
     INTERSECTION OBSERVER
  ========================================================== */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);

            observer.disconnect();
          }
        },
        {
          threshold: 0.2,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`experience-signal ${
        visible ? "is-visible" : ""
      }`}
    >
      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div
        className="experience-signal-grid"
        aria-hidden="true"
      />

      <div
        className="experience-signal-grid-glow"
        aria-hidden="true"
      />

      <div
        className="experience-signal-noise"
        aria-hidden="true"
      />

      <span
        className="experience-signal-background-text"
        aria-hidden="true"
      >
        CAREER
      </span>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="experience-signal-header">
        <div className="experience-signal-heading">
          <span
            className="experience-signal-heading-line"
            aria-hidden="true"
          />

          <div>
            <span>
              CAREER SIGNAL
            </span>

            <small>
              PROFESSIONAL EXPERIENCE OVERVIEW
            </small>
          </div>
        </div>

        <div className="experience-signal-header-meta">
          <span>01</span>

          <i aria-hidden="true" />

          <span>04 METRICS</span>
        </div>
      </header>

      {/* =====================================================
          VISUAL SYSTEM
      ===================================================== */}

      <div
        className="experience-signal-stage"
        aria-label="Professional experience statistics"
      >
        {/* ===================================================
            SYSTEM AXIS
        =================================================== */}

        <div
          className="experience-signal-axis"
          aria-hidden="true"
        />

        <div
          className="experience-signal-horizontal"
          aria-hidden="true"
        />

        <div
          className="experience-signal-sweep"
          aria-hidden="true"
        />

        {/* ===================================================
            CENTRAL EXPERIENCE
        =================================================== */}

        <div
          className="experience-signal-core"
          aria-label="1 plus years of professional experience"
        >
          <div
            className="experience-signal-core-ring ring-one"
            aria-hidden="true"
          />

          <div
            className="experience-signal-core-ring ring-two"
            aria-hidden="true"
          />

          <div className="experience-signal-core-content">
            <span className="experience-signal-core-index">
              01 / 04
            </span>

            <div className="experience-signal-core-value">
              <AnimatedNumber
                value={1}
                start={visible}
              />

              <span className="experience-signal-core-plus">
                +
              </span>
            </div>

            <div className="experience-signal-core-label">
              <span>
                YEARS EXPERIENCE
              </span>

              <strong>
                Professional Development
              </strong>
            </div>
          </div>

          <span
            className="experience-signal-core-dot"
            aria-hidden="true"
          />
        </div>

        {/* ===================================================
            CONNECTED METRICS
        =================================================== */}

        {stats.map((stat) => (
          <MetricNode
            key={stat.index}
            stat={stat}
            visible={visible}
          />
        ))}

        {/* ===================================================
            CORE AREAS
        =================================================== */}

        <div className="experience-signal-core-areas">
          <div className="experience-signal-core-areas-header">
            <span>04</span>

            <div>
              <strong>
                CORE AREAS
              </strong>

              <small>
                PROFESSIONAL FOCUS
              </small>
            </div>
          </div>

          <div className="experience-signal-core-areas-list">
            {coreAreas.map(
              (area, index) => (
                <span key={area}>
                  <b>
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </b>

                  {area}
                </span>
              )
            )}
          </div>
        </div>

        {/* ===================================================
            CAREER PERIOD
        =================================================== */}

        <div className="experience-signal-period">
          <div className="experience-signal-period-line">
            <span />
          </div>

          <div className="experience-signal-period-content">
            <span>
              CAREER PERIOD
            </span>

            <strong>
              DEC 2024

              <i aria-hidden="true" />

              NOV 2025
            </strong>
          </div>
        </div>

        {/* ===================================================
            MICRO MARKERS
        =================================================== */}

        <span
          className="experience-signal-marker marker-one"
          aria-hidden="true"
        />

        <span
          className="experience-signal-marker marker-two"
          aria-hidden="true"
        />

        <span
          className="experience-signal-marker marker-three"
          aria-hidden="true"
        />
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="experience-signal-footer">
        <div className="experience-signal-status">
          <span
            className="experience-signal-status-dot"
            aria-hidden="true"
          />

          <span>
            PROFESSIONAL EXPERIENCE
          </span>
        </div>

        <div className="experience-signal-footer-line" />

        <div className="experience-signal-footer-meta">
          <span>2024</span>

          <i aria-hidden="true" />

          <span>2025</span>
        </div>

        <span
          className="experience-signal-footer-arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </footer>
    </div>
  );
}