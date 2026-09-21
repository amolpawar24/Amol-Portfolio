"use client";

import FeaturedProjects from "@/features/Projects/components/FeaturedProjects";

interface Props {
  onViewAll: () => void;
}

export default function Projects({
  onViewAll,
}: Props) {
  return (
    <div className="container">

      {/* =====================================================
          SECTION TITLE
      ===================================================== */}

      <div className="row">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
      </div>


      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="row">
        <div className="projects-heading padd-15">

          <div className="projects-heading-content">

            <div className="projects-heading-meta">

              <span className="projects-heading-line" />

              <span className="projects-heading-label">
                MY WORK
              </span>

            </div>


            <h2>
              My Latest Projects
            </h2>


            <p>
              A selection of projects I have built while
              learning, experimenting, and growing as a
              developer.
            </p>

          </div>

        </div>
      </div>


      {/* =====================================================
          FEATURED PROJECTS
          FILTERS + CARDS + PAGINATION
      ===================================================== */}

      <FeaturedProjects />


      {/* =====================================================
          VIEW ALL PROJECTS
      ===================================================== */}

      <div className="projects-all">

        <button
          type="button"
          className="view-all"
          onClick={onViewAll}
          aria-label="View all projects"
        >

          <span>
            View All Projects
          </span>

          <i
            className="fas fa-arrow-right"
            aria-hidden="true"
          />

        </button>

      </div>

    </div>
  );
}