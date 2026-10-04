"use client";

import { useMemo, useState } from "react";

import projectsData from "@/data/projectsData";

import ProjectFilters from "@/features/Projects/components/ProjectFilters";
import ProjectGrid from "@/features/Projects/components/ProjectGrid";

import type { ProjectType } from "@/types/projectTypes";

interface Props {
  onBack: () => void;
}

/* =========================================================
   PROJECT FILTERS
========================================================= */

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React",
  "TypeScript",
  "ReduxToolkit",
  "TailwindCSS",
  "Scss",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "MySQL",
  "Python",
  "FastAPI",
] as const;

type ProjectCategory = (typeof categories)[number];

/* =========================================================
   TECHNOLOGY ALIASES
========================================================= */

const technologyAliases: Record<
  Exclude<ProjectCategory, "All" | "Frontend" | "Backend" | "Full Stack">,
  string[]
> = {
  HTML: [
    "html",
    "html5",
    "fa-html5",
  ],

  CSS: [
    "css",
    "css3",
    "fa-css3",
    "fa-css3-alt",
  ],

  JavaScript: [
    "javascript",
    "js",
    "ecmascript",
    "fa-js",
  ],

  Bootstrap: [
    "bootstrap",
    "fa-bootstrap",
  ],

  React: [
    "react",
    "reactjs",
    "react.js",
    "fa-react",
  ],

  TypeScript: [
    "typescript",
    "ts",
    "fa-typescript",
  ],

  ReduxToolkit: [
    "redux",
    "redux-toolkit",
    "fa-redux",
  ],

  "TailwindCSS": [
    "tailwind",
    "tailwindcss",
    "tailwind css",
    "fa-tailwind",
  ],

  Scss: [
    "scss",
    "sass",
    "fa-sass",
  ],

  "Next.js": [
    "next",
    "nextjs",
    "next.js",
  ],

  "Node.js": [
    "node",
    "nodejs",
    "node.js",
    "fa-node",
    "fa-node-js",
  ],

  "Express.js": [
    "express",
    "expressjs",
    "express.js",
  ],

  MongoDB: [
    "mongodb",
    "mongo",
    "mongo db",
  ],

  Java: [
    "java",
    "core java",
    "spring",
    "spring boot",
  ],

  MySQL: [
    "mysql",
    "my sql",
  ],

  Python: [
    "python",
    "python3",
    "python 3",
  ],

  FastAPI: [
    "fastapi",
    "fast api",
  ],
};

/* =========================================================
   BACKEND TECHNOLOGIES
========================================================= */

const backendTechnologies = [
  "node",
  "nodejs",
  "node.js",
  "express",
  "expressjs",
  "express.js",
  "mongodb",
  "mongo",
  "mongo db",
  "java",
  "core java",
  "J2ee",
  "spring",
  "spring boot",
  "mysql",
  "my sql",
  "python",
  "python3",
  "python 3",
  "fastapi",
  "fast api",
];

/* =========================================================
   NORMALIZE PROJECT CONTENT
========================================================= */

const getProjectContent = (
  project: ProjectType
): string => {
  return [
    project.title,
    project.description,
    ...project.tech,
  ]
    .join(" ")
    .toLowerCase()
    .replace(/[-_/.]/g, " ");
};

/* =========================================================
   CHECK TECHNOLOGY
========================================================= */

const projectUsesTechnology = (
  project: ProjectType,
  category: Exclude<
    ProjectCategory,
    "All" | "Frontend" | "Backend" | "Full Stack"
  >
): boolean => {
  const content = getProjectContent(project);

  const aliases = technologyAliases[category];

  return aliases.some((alias) => {
    const normalizedAlias = alias
      .toLowerCase()
      .replace(/[-_/.]/g, " ");

    return content.includes(normalizedAlias);
  });
};

/* =========================================================
   CHECK FULL STACK
========================================================= */

const isFullStackProject = (
  project: ProjectType
): boolean => {
  const content = getProjectContent(project);

  return backendTechnologies.some((technology) => {
    const normalizedTechnology = technology
      .toLowerCase()
      .replace(/[-_/.]/g, " ");

    return content.includes(normalizedTechnology);
  });
};

/* =========================================================
   CHECK FRONTEND
========================================================= */

const isFrontendProject = (
  project: ProjectType
): boolean => {
  return !isFullStackProject(project);
};

/* =========================================================
   CHECK BACKEND
========================================================= */

const isBackendProject = (
  project: ProjectType
): boolean => {
  return isFullStackProject(project);
};

/* =========================================================
   MATCH PROJECT WITH FILTER
========================================================= */

const projectMatchesCategory = (
  project: ProjectType,
  category: ProjectCategory
): boolean => {
  /* -------------------------------------------------------
     ALL
  ------------------------------------------------------- */

  if (category === "All") {
    return true;
  }

  /* -------------------------------------------------------
     FRONTEND
  ------------------------------------------------------- */

  if (category === "Frontend") {
    return isFrontendProject(project);
  }
  /* -------------------------------------------------------
     BACKEND
  ------------------------------------------------------- */

  if (category === "Backend") {
    return isBackendProject(project);
  }

  /* -------------------------------------------------------
     FULL STACK
  ------------------------------------------------------- */

  if (category === "Full Stack") {
    return isFullStackProject(project);
  }


  /* -------------------------------------------------------
     TECHNOLOGY
  ------------------------------------------------------- */

  return projectUsesTechnology(
    project,
    category
  );
};

/* =========================================================
   ALL PROJECTS
========================================================= */

export default function AllProjects({
  onBack,
}: Props) {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");

  /* =======================================================
     PROJECT COUNTS
  ======================================================= */

  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    categories.forEach((category) => {
      counts[category] = projectsData.filter(
        (project) =>
          projectMatchesCategory(
            project,
            category
          )
      ).length;
    });

    return counts;
  }, []);

  /* =======================================================
     FILTERED PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      projectMatchesCategory(
        project,
        activeCategory
      )
    );
  }, [activeCategory]);

  /* =======================================================
     ACTIVE CATEGORY LABEL
  ======================================================= */

  const activeCategoryLabel =
    activeCategory === "All"
      ? "All Technologies"
      : activeCategory;

  /* =======================================================
     HANDLE FILTER CHANGE
  ======================================================= */

  const handleCategoryChange = (
    category: string
  ) => {
    if (
      categories.includes(
        category as ProjectCategory
      )
    ) {
      setActiveCategory(
        category as ProjectCategory
      );
    }
  };

  return (
    <div className="container">

      {/* ===================================================
          BACK BUTTON
      =================================================== */}

      <div className="row">
        <div className="projects-back padd-15">

          <button
            type="button"
            onClick={onBack}
            className="projects-back__button"
            aria-label="Back to featured projects"
          >
            <span className="projects-back__icon">
              <i
                className="fas fa-arrow-left"
                aria-hidden="true"
              />
            </span>

            <span>
              Back to Projects
            </span>

          </button>

        </div>
      </div>


      {/* ===================================================
          SECTION TITLE
      =================================================== */}

      <div className="row">
        <div className="section-title">
          <h2>
            All Projects
          </h2>
        </div>
      </div>


      {/* ===================================================
          PROJECT ARCHIVE HEADING
      =================================================== */}

      <div className="row">
        <div className="projects-heading padd-15">

          <div className="projects-heading-content">

            <div className="projects-heading-meta">

              <span className="projects-heading-line" />

              <span className="projects-heading-label">
                PROJECT ARCHIVE
              </span>

            </div>

            <h2>
              Explore My Projects
            </h2>

            <p>
              A collection of projects, experiments,
              and development work built throughout
              my learning journey.
            </p>

          </div>

        </div>
      </div>


      {/* ===================================================
          PROJECT FILTERS
      =================================================== */}

      <div className="row">
        <div className="padd-15">

          <ProjectFilters
            categories={[
              ...categories,
            ]}
            activeCategory={
              activeCategory
            }
            onCategoryChange={
              handleCategoryChange
            }
            projectCounts={
              projectCounts
            }
          />

        </div>
      </div>


      {/* ===================================================
          PROJECT RESULTS HEADER
      =================================================== */}

      <div className="row">
        <div className="projects-count padd-15">

          <div className="projects-count__content">

            <span className="projects-count__indicator">
              <span />
            </span>

            <span>
              Showing{" "}
              <strong>
                {filteredProjects.length}
              </strong>{" "}
              {filteredProjects.length === 1
                ? "Project"
                : "Projects"}
            </span>

          </div>


          {/* ===============================================
              ACTIVE FILTER
          =============================================== */}

          <span
            className="projects-count__category"
            aria-label={`Active filter: ${activeCategoryLabel}`}
          >

            <span
              className="projects-count__category-icon"
              aria-hidden="true"
            >
              <i
                className={
                  activeCategory === "All"
                    ? "fas fa-layer-group"
                    : activeCategory ===
                      "Frontend"
                    ? "fas fa-laptop-code"
                    : activeCategory ===
                      "Full Stack"
                    ? "fas fa-code"
                    : "fas fa-filter"
                }
              />
            </span>

            <span>
              {activeCategoryLabel}
            </span>

          </span>

        </div>
      </div>


      {/* ===================================================
          PROJECT GRID
      =================================================== */}

      <div className="row">

        <ProjectGrid
          projects={
            filteredProjects
          }
        />

      </div>

    </div>
  );
}