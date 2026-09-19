"use client";

import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({
  experience,
  index = 0,
}: ExperienceCardProps) {
  const responsibilityCount =
    experience.responsibilities?.length ?? 0;

  const achievementCount =
    experience.achievements?.length ?? 0;

  const technologyCount =
    experience.technologies?.length ?? 0;

  const visibleResponsibilities =
    experience.responsibilities?.slice(0, 4) ?? [];

  const visibleAchievements =
    experience.achievements?.slice(0, 4) ?? [];

  const visibleTechnologies =
    experience.technologies?.slice(0, 8) ?? [];

  const remainingResponsibilities = Math.max(
    responsibilityCount - 4,
    0
  );

  const remainingAchievements = Math.max(
    achievementCount - 4,
    0
  );

  const remainingTechnologies = Math.max(
    technologyCount - 8,
    0
  );

  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`experience-card ${
        experience.featured ? "featured" : ""
      }`}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="experience-card-glow" aria-hidden="true" />

      <div className="experience-card-grid" aria-hidden="true" />

      <span
        className="experience-background-number"
        aria-hidden="true"
      >
        {cardNumber}
      </span>

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="experience-top-bar">
        <div className="experience-index">
          <span>PROFESSIONAL EXPERIENCE</span>

          <strong>{cardNumber}</strong>
        </div>

        <div
          className={`experience-top-status ${
            experience.status === "ongoing"
              ? "ongoing"
              : "completed"
          }`}
        >
          <span className="experience-status-dot" />

          <span>
            {experience.status === "ongoing"
              ? "CURRENTLY WORKING"
              : "COMPLETED"}
          </span>
        </div>
      </div>

      {/* =====================================================
          HERO IDENTITY
      ===================================================== */}

      <div className="experience-identity">
        <div className="experience-company-logo">
          <div className="experience-logo-ring" />

          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={`${experience.company} logo`}
            />
          ) : (
            <span>
              {experience.company.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        <div className="experience-identity-content">
          <span className="experience-company-type">
            {experience.type}
          </span>

          <h3>{experience.company}</h3>

          <h4>{experience.role}</h4>

          <div className="experience-meta">
            <span>
              <i className="fa fa-calendar" />

              {experience.startDate} —{" "}
              {experience.endDate || "Present"}
            </span>

            {experience.location && (
              <span>
                <i className="fa fa-map-marker" />

                {experience.location}
              </span>
            )}
          </div>
        </div>

        {experience.featured && (
          <div className="experience-featured">
            <i className="fa fa-star" />

            <span>Featured</span>
          </div>
        )}
      </div>

      {/* =====================================================
          EXPERIENCE STATISTICS
      ===================================================== */}

      <div className="experience-stats">
        <div className="experience-stat">
          <span className="experience-stat-index">01</span>

          <strong>
            {String(technologyCount).padStart(2, "0")}
          </strong>

          <span className="experience-stat-label">
            Technologies
          </span>
        </div>

        <div className="experience-stat">
          <span className="experience-stat-index">02</span>

          <strong>
            {String(responsibilityCount).padStart(2, "0")}
          </strong>

          <span className="experience-stat-label">
            Responsibilities
          </span>
        </div>

        <div className="experience-stat">
          <span className="experience-stat-index">03</span>

          <strong>
            {String(achievementCount).padStart(2, "0")}
          </strong>

          <span className="experience-stat-label">
            Achievements
          </span>
        </div>
      </div>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      {experience.description && (
        <div className="experience-overview">
          <div className="experience-section-heading">
            <span className="experience-section-number">
              01
            </span>

            <div>
              <span>ROLE OVERVIEW</span>
              <strong>Experience Overview</strong>
            </div>
          </div>

          <p>{experience.description}</p>
        </div>
      )}

      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      {visibleTechnologies.length > 0 && (
        <div className="experience-tech">
          <div className="experience-section-heading">
            <span className="experience-section-number">
              02
            </span>

            <div>
              <span>TOOLS & TECHNOLOGIES</span>
              <strong>Technology Stack</strong>
            </div>

            <small>
              {String(technologyCount).padStart(2, "0")} ITEMS
            </small>
          </div>

          <div className="experience-tech-list">
            {visibleTechnologies.map(
              (technology, technologyIndex) => (
                <span
                  className="experience-tech-item"
                  key={`${experience.id}-${technology}`}
                >
                  <b>
                    {String(technologyIndex + 1).padStart(
                      2,
                      "0"
                    )}
                  </b>

                  {technology}
                </span>
              )
            )}

            {remainingTechnologies > 0 && (
              <span className="experience-tech-item more">
                +{remainingTechnologies}
              </span>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          DETAILS
      ===================================================== */}

      <div className="experience-details">
        {/* ================= RESPONSIBILITIES ================= */}

        {visibleResponsibilities.length > 0 && (
          <div className="experience-detail-column responsibilities">
            <div className="experience-detail-header">
              <div className="experience-detail-icon">
                <i className="fa fa-code" />
              </div>

              <div>
                <span>WHAT I WORKED ON</span>

                <strong>Responsibilities</strong>
              </div>

              <small>
                {String(responsibilityCount).padStart(2, "0")}
              </small>
            </div>

            <ol className="experience-responsibility-list">
              {visibleResponsibilities.map(
                (responsibility, responsibilityIndex) => (
                  <li
                    key={`${experience.id}-responsibility-${responsibilityIndex}`}
                  >
                    <span className="experience-list-number">
                      {String(
                        responsibilityIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    <span className="experience-list-text">
                      {responsibility}
                    </span>

                    <span className="experience-list-arrow">
                      ↗
                    </span>
                  </li>
                )
              )}
            </ol>

            {remainingResponsibilities > 0 && (
              <span className="experience-more">
                +{remainingResponsibilities} more responsibilities
              </span>
            )}
          </div>
        )}

        {/* ================= ACHIEVEMENTS ================= */}

        {visibleAchievements.length > 0 && (
          <div className="experience-detail-column achievements">
            <div className="experience-detail-header">
              <div className="experience-detail-icon">
                <i className="fa fa-trophy" />
              </div>

              <div>
                <span>PROFESSIONAL GROWTH</span>

                <strong>Key Achievements</strong>
              </div>

              <small>
                {String(achievementCount).padStart(2, "0")}
              </small>
            </div>

            <ul className="experience-achievement-list">
              {visibleAchievements.map(
                (achievement, achievementIndex) => (
                  <li
                    key={`${experience.id}-achievement-${achievementIndex}`}
                  >
                    <span className="experience-check">
                      <i className="fa fa-check" />
                    </span>

                    <span className="experience-list-text">
                      {achievement}
                    </span>
                  </li>
                )
              )}
            </ul>

            {remainingAchievements > 0 && (
              <span className="experience-more">
                +{remainingAchievements} more achievements
              </span>
            )}
          </div>
        )}
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="experience-footer">
        <div className="experience-footer-left">
          <span className="experience-footer-line">
            <span />
          </span>

          <span>Professional Experience</span>
        </div>

        <div className="experience-links">
          {experience.companyUrl && (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Company</span>

              <i className="fa fa-arrow-up-right-from-square" />
            </a>
          )}

          {experience.projectUrl && (
            <a
              href={experience.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Project</span>

              <i className="fa fa-arrow-up-right-from-square" />
            </a>
          )}
        </div>
      </div>

      {/* =====================================================
          ACCENT EDGE
      ===================================================== */}

      <span
        className="experience-accent-edge"
        aria-hidden="true"
      />
    </article>
  );
}