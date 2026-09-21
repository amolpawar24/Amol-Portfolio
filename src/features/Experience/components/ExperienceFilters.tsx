"use client";

import { ExperienceType } from "@/types/experienceTypes";

interface ExperienceFiltersProps {
  activeFilter: ExperienceType | "all";
  onFilterChange: (filter: ExperienceType | "all") => void;
}

const filters: {
  label: string;
  value: ExperienceType | "all";
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Professional",
    value: "professional",
  },
  {
    label: "Internship",
    value: "internship",
  },
  {
    label: "Freelance",
    value: "freelance",
  },
];

export default function ExperienceFilters({
  activeFilter,
  onFilterChange,
}: ExperienceFiltersProps) {
  return (
    <div
      className="experience-filters"
      role="group"
      aria-label="Filter experience"
    >
      <span className="experience-filters-label">
        Filter by
      </span>

      <div className="experience-filter-list">
        {filters.map((filter, index) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              className={`experience-filter ${
                isActive ? "active" : ""
              }`}
              onClick={() => onFilterChange(filter.value)}
              aria-pressed={isActive}
            >
              <span className="experience-filter-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="experience-filter-dot" />

              <span className="experience-filter-text">
                {filter.label}
              </span>

              <span className="experience-filter-arrow">
                ↗
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}