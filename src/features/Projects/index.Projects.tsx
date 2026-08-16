"use client";

import ProjectCards from "@/features/Projects/components/ProjectCards";

import projectsData from "@/data/projectsData";

type Props = {
  onViewAll: () => void;
};

const ITEMS_PER_PAGE = 6;

export default function Projects({ onViewAll }: Props) {
  // Show only first 6 projects
  const currentProjects = projectsData.slice(
    0,
    ITEMS_PER_PAGE
  );

  return (
    <div className="container">

      {/* ================= SECTION TITLE ================= */}
      <div className="row">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
      </div>

      {/* ================= HEADING ================= */}
      <div className="row">
        <div className="projects-heading padd-15">
          <h2>My Latest Projects :</h2>
        </div>
      </div>

      {/* ================= PROJECT ITEMS ================= */}
      <div className="row">
        {currentProjects.map((project) => (
          <ProjectCards
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {/* ================= VIEW ALL BUTTON ================= */}
      <div className="projects-all">
        <button
          type="button"
          className="view-all"
          onClick={onViewAll}
        >
          View All
        </button>
      </div>

    </div>
  );
}