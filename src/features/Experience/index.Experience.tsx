"use client";

import { useMemo, useState } from "react";

import { experiences } from "@/data/experiencesData";
import { ExperienceType } from "@/types/experience";

import ExperienceCard from "./components/ExperienceCard";
import ExperienceFilters from "./components/ExperienceFilters";
import ExperienceStats from "./components/ExperienceStats";

export default function Experience() {
  /* ================= FILTER STATE ================= */

  const [activeFilter, setActiveFilter] = useState<
    ExperienceType | "all"
  >("all");

  /* ================= FILTER EXPERIENCES ================= */

  const filteredExperiences = useMemo(() => {
    if (activeFilter === "all") {
      return experiences;
    }

    return experiences.filter(
      (experience) => experience.type === activeFilter
    );
  }, [activeFilter]);

  /* ================= RENDER ================= */

  return (
    <div className="container">
      <div className="experience-page">
        {/* ================= SECTION TITLE ================= */}

        <div className="section-title">
          <h2>Experience</h2>
        </div>

        {/* ================= INTRO ================= */}

        <div className="experience-intro">
          <div className="experience-intro-marker">
            <span />
          </div>

          <div className="experience-intro-content">
            <span className="experience-eyebrow">
              Professional Journey
            </span>

            <h1>
              Experience that shaped
              <span> my development journey.</span>
            </h1>

            <p>
              A collection of my professional experiences,
              responsibilities, technologies, and growth throughout
              my development career.
            </p>
          </div>

          <div
            className="experience-intro-index"
            aria-hidden="true"
          >
            <span>01</span>
            <i />
            <span>EXPERIENCE</span>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <ExperienceStats />

        {/* ================= EXPERIENCE EXPLORER ================= */}

        <div className="experience-explorer">
          <div className="experience-toolbar">
            <div className="experience-toolbar-heading">
              <div className="experience-toolbar-title">
                <span
                  className="experience-toolbar-line"
                  aria-hidden="true"
                />

                <div>
                  <span>Explore Experience</span>

                  <strong>
                    Professional Career Records
                  </strong>
                </div>
              </div>

              <small>
                {String(filteredExperiences.length).padStart(
                  2,
                  "0"
                )}{" "}
                {filteredExperiences.length === 1
                  ? "EXPERIENCE"
                  : "EXPERIENCES"}
              </small>
            </div>

            <ExperienceFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* ================= EXPERIENCE GRID ================= */}

          {filteredExperiences.length > 0 ? (
            <div className="experience-grid">
              {filteredExperiences.map(
                (experience, index) => (
                  <div
                    className="experience-item"
                    key={experience.id}
                    style={
                      {
                        "--experience-index": index,
                      } as React.CSSProperties
                    }
                  >
                    <ExperienceCard
                      experience={experience}
                      index={index}
                    />
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="experience-empty">
              <span
                className="experience-empty-number"
                aria-hidden="true"
              >
                00
              </span>

              <div>
                <strong>
                  No experience found.
                </strong>

                <span>
                  Try selecting another experience
                  category.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}