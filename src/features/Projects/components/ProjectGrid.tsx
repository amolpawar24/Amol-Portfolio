"use client";

import type { ProjectType } from "@/types/projectTypes";

import ProjectCards from "@/features/Projects/components/ProjectCards";

interface ProjectGridProps {
  projects: ProjectType[];
}

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (projects.length === 0) {
    return (
      <div className="project-grid-empty">
        <div className="project-grid-empty__icon">
          <i
            className="fas fa-folder-open"
            aria-hidden="true"
          />
        </div>

        <div className="project-grid-empty__content">
          <span className="project-grid-empty__label">
            No Results
          </span>

          <h3>
            No Projects Found
          </h3>

          <p>
            There are currently no projects available
            in this category.
          </p>
        </div>
      </div>
    );
  }

  /* =========================================================
     PROJECT GRID
  ========================================================= */

  return (
    <div
      className="project-grid"
      aria-label="Projects grid"
    >
      {projects.map((project) => (
        <ProjectCards
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}