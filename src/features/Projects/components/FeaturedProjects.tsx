"use client";

import { useMemo, useState } from "react";

//* Components
import ProjectFilters from "@/features/Projects/components/ProjectFilters";
import ProjectCards from "@/features/Projects/components/ProjectCards";
import Pagination from "@/components/Pagination/Pagination";

//* Data
import projectsData from "@/data/projectsData";

//* ================= PROJECT SETTINGS =================

const PROJECTS_PER_PAGE = 6;

const TECHNOLOGY_CATEGORIES = [
  "All",
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
  "Frontend",
  "Backend",
  "Full Stack",
];

//* ================= COMPONENT =================

export default function FeaturedProjects() {
  //* ================= STATE =================

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  //* ================= PROJECT COUNTS =================
  // Counts are calculated from the separate
  // `categories` field in projectsData.ts.

  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    TECHNOLOGY_CATEGORIES.forEach((category) => {
      //* All Projects
      if (category === "All") {
        counts[category] = projectsData.length;
        return;
      }

      //* Category Projects
      counts[category] = projectsData.filter((project) =>
        project.categories.some(
          (projectCategory) =>
            projectCategory.toLowerCase() ===
            category.toLowerCase()
        )
      ).length;
    });

    return counts;
  }, []);

  //* ================= FILTER PROJECTS =================
  // Filtering uses `categories`, NOT `tech`.
  //
  // `tech`     → Font Awesome icon classes
  // `categories` → Actual filter names

  const filteredProjects = useMemo(() => {
    //* Show all projects
    if (activeCategory === "All") {
      return projectsData;
    }

    //* Show selected category projects
    return projectsData.filter((project) =>
      project.categories.some(
        (projectCategory) =>
          projectCategory.toLowerCase() ===
          activeCategory.toLowerCase()
      )
    );
  }, [activeCategory]);

  //* ================= PAGINATION =================

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredProjects.length / PROJECTS_PER_PAGE
    )
  );

  //* ================= CURRENT PAGE PROJECTS =================

  const currentProjects = useMemo(() => {
    const startIndex =
      (currentPage - 1) * PROJECTS_PER_PAGE;

    const endIndex =
      startIndex + PROJECTS_PER_PAGE;

    return filteredProjects.slice(
      startIndex,
      endIndex
    );
  }, [currentPage, filteredProjects]);

  //* ================= CATEGORY CHANGE =================

  const handleCategoryChange = (
    category: string
  ) => {
    setActiveCategory(category);

    //* Always return to first page
    //* when filter changes.
    setCurrentPage(1);
  };

  //* ================= PAGE CHANGE =================

  const handlePageChange = (page: number) => {
    //* Prevent invalid page
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    //* Smoothly move back to projects section
    requestAnimationFrame(() => {
      const section = document.querySelector(
        ".featured-projects-wrapper"
      );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  //* ================= RETURN =================

  return (
    <div className="featured-projects-wrapper">

      {/* ================= FILTERS ================= */}

      <ProjectFilters
        categories={TECHNOLOGY_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        projectCounts={projectCounts}
      />

      {/* ================= PROJECT GRID ================= */}

      <div
        className="row featured-projects"
        aria-label="Featured projects"
      >
        {currentProjects.length > 0 ? (
          currentProjects.map(
            (project, index) => (
              <ProjectCards
                key={project.id}
                project={project}
                featured
                index={index}
              />
            )
          )
        ) : (
          <div className="projects-empty">
            <p>
              No projects found for{" "}
              <strong>
                {activeCategory}
              </strong>
              .
            </p>
          </div>
        )}
      </div>

      {/* ================= PAGINATION ================= */}

      {filteredProjects.length >
        PROJECTS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={
            filteredProjects.length
          }
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}