"use client";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  projectCounts?: Record<string, number>;
}

interface TechnologyConfig {
  name: string;
  icon: string;
}

const technologyConfig: Record<
  string,
  TechnologyConfig
> = {
  All: {
    name: "All Technologies",
    icon: "fas fa-layer-group",
  },

  HTML: {
    name: "HTML",
    icon: "fab fa-html5",
  },

  CSS: {
    name: "CSS",
    icon: "fab fa-css3-alt",
  },

  JavaScript: {
    name: "JavaScript",
    icon: "fab fa-js",
  },

  Bootstrap: {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
  },

  React: {
    name: "React",
    icon: "fab fa-react",
  },

  Typescript: {
    name: "TypeScript",
    icon: "fas fa-code",
  },

  ReduxToolkit: {
    name: "Redux Toolkit",
    icon: "fas fa-sync-alt",
  },

  TailwindCSS: {
    name: "Tailwind CSS",
    icon: "fas fa-wind",
  },

  scss: {
    name: "SCSS",
    icon: "fas fa-palette",
  },

  "Next.js": {
    name: "Next.js",
    icon: "fas fa-n",
  },

  "Node.js": {
    name: "Node.js",
    icon: "fab fa-node-js",
  },

  "Express.js": {
    name: "Express.js",
    icon: "fas fa-server",
  },

  MongoDB: {
    name: "MongoDB",
    icon: "fas fa-database",
  },

  Java: {
    name: "Java",
    icon: "fab fa-java",
  },

  MySQL: {
    name: "MySQL",
    icon: "fas fa-database",
  },

  Python: {
    name: "Python",
    icon: "fab fa-python",
  },

  FastAPI: {
    name: "FastAPI",
    icon: "fas fa-bolt",
  },

  Frontend: {
    name: "Frontend",
    icon: "fas fa-laptop-code",
  },

  Backend: {
    name: "Backend",
    icon: "fas fa-server",
  },

  "Full Stack": {
    name: "Full Stack",
    icon: "fas fa-code",
  },
};

export default function ProjectFilters(props: ProjectFiltersProps) {

  // Destructure props for easier access
  const {categories, activeCategory, onCategoryChange, projectCounts ={}} = props;

  return (
    <div
      className="project-filters"
      aria-label="Project technology filters"
    >
      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="project-filters__top">
        <div className="project-filters__intro">
          <div className="project-filters__intro-icon">
            <i
              className="fas fa-sliders"
              aria-hidden="true"
            />
          </div>

          <div className="project-filters__intro-content">
            <span className="project-filters__eyebrow">
              Explore My Work
            </span>

            <h3 className="project-filters__title">
              Filter By Technology
            </h3>

            <p className="project-filters__description">
              Browse projects by the technologies used to
              build them.
            </p>
          </div>
        </div>

        <div className="project-filters__summary">
          <span className="project-filters__summary-label">
            Technologies
          </span>

          <strong className="project-filters__summary-count">
            {categories.length}
          </strong>
        </div>
      </div>

      {/* =====================================================
          TECHNOLOGY FILTERS
      ===================================================== */}

      <div className="project-filters__divider">
        <span />
        <span>SELECT TECHNOLOGY</span>
        <span />
      </div>

      <div
        className="project-filters__list"
        role="group"
        aria-label="Project technologies"
      >
        {categories.map((category, index) => {
          const isActive =
            activeCategory === category;

          const technology =
            technologyConfig[category] ?? {
              name: category,
              icon: "fas fa-code",
            };

          const count =
            projectCounts[category] ?? 0;

          return (
            <button
              key={category}
              type="button"
              className={`project-filters__button ${
                isActive
                  ? "project-filters__button--active"
                  : ""
              }`}
              onClick={() =>
                onCategoryChange(category)
              }
              aria-pressed={isActive}
            >
              {/* Number */}

              <span className="project-filters__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Technology Icon */}

              <span className="project-filters__tech-icon">
                <i
                  className={technology.icon}
                  aria-hidden="true"
                />
              </span>

              {/* Technology Name */}

              <span className="project-filters__name">
                {technology.name}
              </span>

              {/* Project Count */}

              {count > 0 && (
                <span className="project-filters__project-count">
                  {String(count).padStart(2, "0")}
                </span>
              )}

              {/* Arrow */}

              <span
                className="project-filters__arrow"
                aria-hidden="true"
              >
                <i
                  className={
                    isActive
                      ? "fas fa-arrow-up-right-from-square"
                      : "fas fa-arrow-right"
                  }
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* =====================================================
          ACTIVE FILTER
      ===================================================== */}

      <div className="project-filters__active">
        <span className="project-filters__active-dot" />

        <span className="project-filters__active-label">
          Active Filter
        </span>

        <strong>
          {technologyConfig[activeCategory]?.name ??
            activeCategory}
        </strong>

        <span className="project-filters__active-line" />
      </div>
    </div>
  );
}