"use client";

import Image from "next/image";

import type { ProjectType } from "@/types/projectTypes";

interface ProjectCardsProps {
  project: ProjectType;
  featured?: boolean;
  index?: number;
}

export default function ProjectCards(props: ProjectCardsProps) {

  // Props Destructuring and Default Values
  const {project, featured = false, index = 0} = props;

  const hasLiveDemo =
    Boolean(project.liveDemo) &&
    project.liveDemo !== "#";

  const hasCode =
    Boolean(project.code) &&
    project.code !== "#";

  const projectNumber = String(
    featured ? index + 1 : project.id
  ).padStart(2, "0");

  return (
    <div
      className={`projects-item ${
        featured
          ? "projects-item--featured"
          : "projects-item--grid"
      }`}
    >
      <article
        className="project-card"
        aria-label={`${project.title} project`}
      >
        {/* =================================================
            BACK DEPTH
        ================================================= */}

        <span
          className="project-card__depth project-card__depth--one"
          aria-hidden="true"
        />

        <span
          className="project-card__depth project-card__depth--two"
          aria-hidden="true"
        />

        {/* =================================================
            MAIN CARD
        ================================================= */}

        <div className="project-card__main">

          {/* =================================================
              CARD HEADER
          ================================================= */}

          <header className="project-card__header">

            <div className="project-card__identity">

              <span className="project-card__number">
                {projectNumber}
              </span>

              <span className="project-card__identity-line" />

              <span className="project-card__identity-label">
                {featured
                  ? "Featured Project"
                  : "Project"}
              </span>

            </div>

            <span className="project-card__status">
              <span className="project-card__status-dot" />
              Available
            </span>

          </header>

          {/* =================================================
              PROJECT IMAGE
          ================================================= */}

          <div className="project-card__media">

            <div className="project-card__media-frame">

              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes={
                  featured
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
                priority={
                  featured && index === 0
                }
                className="project-card__image"
              />

              <span
                className="project-card__image-overlay"
                aria-hidden="true"
              />

              <span
                className="project-card__image-shine"
                aria-hidden="true"
              />

              {/* IMAGE LABEL */}

              <div className="project-card__image-label">
                <span>
                  PROJECT PREVIEW
                </span>
              </div>

              {/* IMAGE ACTION */}

              {hasLiveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__image-action"
                  aria-label={`Open live demo of ${project.title}`}
                >
                  <i
                    className="fas fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <span
                  className="project-card__image-action project-card__image-action--disabled"
                  aria-label="Live demo unavailable"
                >
                  <i
                    className="fas fa-eye-slash"
                    aria-hidden="true"
                  />
                </span>
              )}

            </div>

          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="project-card__body">

            {/* CATEGORY */}

            <div className="project-card__category">

              <span className="project-card__category-line" />

              <span>
                {featured
                  ? "Selected Work"
                  : "Development"}
              </span>

              <span className="project-card__category-dot" />

              <span>
                {project.tech.length} Technologies
              </span>

            </div>

            {/* TITLE */}

            <div className="project-card__title-wrapper">

              <h3 className="project-card__title">
                {project.title}
              </h3>

              <span
                className="project-card__title-icon"
                aria-hidden="true"
              >
                <i className="fas fa-arrow-up-right" />
              </span>

            </div>

            {/* DESCRIPTION */}

            <p className="project-card__description">
              {project.description}
            </p>

            {/* =================================================
                TECHNOLOGIES
            ================================================= */}

            {project.tech.length > 0 && (
              <div className="project-card__tech-wrapper">

                <span className="project-card__tech-label">
                  Built With
                </span>

                <div
                  className="project-card__tech"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tech
                    .slice(0, 5)
                    .map(
                      (
                        technology,
                        technologyIndex
                      ) => (
                        <span
                          key={`${project.id}-${technology}-${technologyIndex}`}
                          className="project-card__tech-item"
                          title={`Technology ${
                            technologyIndex + 1
                          }`}
                        >
                          <i
                            className={technology}
                            aria-hidden="true"
                          />
                        </span>
                      )
                    )}

                  {project.tech.length > 5 && (
                    <span className="project-card__tech-more">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

              </div>
            )}

            {/* =================================================
                FOOTER
            ================================================= */}

            <footer className="project-card__footer">

              <div
                className="project-card__footer-line"
                aria-hidden="true"
              />

              {/* ONLY TWO BUTTONS */}

              <div className="project-card__links">

                {/* =================================================
                    LIVE DEMO
                ================================================= */}

                {hasLiveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--demo"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <span className="project-card__link-icon">
                      <i
                        className="fas fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="project-card__link-text">
                      <strong>
                        Live Demo
                      </strong>

                      <small>
                        View Project
                      </small>
                    </span>

                    <span className="project-card__link-arrow">
                      <i
                        className="fas fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                ) : (
                  <span
                    className="project-card__link project-card__link--disabled"
                    aria-disabled="true"
                  >
                    <span className="project-card__link-icon">
                      <i
                        className="fas fa-eye-slash"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="project-card__link-text">
                      <strong>
                        Live Demo
                      </strong>

                      <small>
                        Unavailable
                      </small>
                    </span>
                  </span>
                )}

                {/* =================================================
                    GITHUB
                ================================================= */}

                {hasCode ? (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--github"
                    aria-label={`View GitHub repository of ${project.title}`}
                  >
                    <span className="project-card__link-icon">
                      <i
                        className="fab fa-github"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="project-card__link-text">
                      <strong>
                        GitHub
                      </strong>

                      <small>
                        View Source
                      </small>
                    </span>

                    <span className="project-card__link-arrow">
                      <i
                        className="fas fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                ) : (
                  <span
                    className="project-card__link project-card__link--disabled"
                    aria-disabled="true"
                  >
                    <span className="project-card__link-icon">
                      <i
                        className="fab fa-github"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="project-card__link-text">
                      <strong>
                        GitHub
                      </strong>

                      <small>
                        Unavailable
                      </small>
                    </span>
                  </span>
                )}

              </div>

            </footer>

          </div>

        </div>

        {/* =================================================
            GLOW
        ================================================= */}

        <span
          className="project-card__glow"
          aria-hidden="true"
        />

      </article>
    </div>
  );
}