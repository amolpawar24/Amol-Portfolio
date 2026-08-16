"use client";

import { useState } from "react";

import ProjectCards from "@/features/Projects/components/ProjectCards";
import Pagination from "@/components/Pagination/Pagination";

import projectsData from "@/data/projectsData";

type Props = {
  onBack: () => void;
};

const ITEMS_PER_PAGE = 6;

export default function AllProjects({ onBack }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  // ================= TOTAL RECORDS =================

  const totalRecords = projectsData.length;

  // ================= TOTAL PAGES =================

  const totalPages = Math.ceil(
    totalRecords / ITEMS_PER_PAGE
  );

  // ================= START INDEX =================

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  // ================= CURRENT PROJECTS =================

  const currentProjects = projectsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // ================= PAGE CHANGE =================

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    // Scroll back to projects section
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">

      {/* ================= SECTION TITLE ================= */}
      <div className="row">
        <div className="section-title">
          <h2>All Projects</h2>
        </div>
      </div>

      {/* ================= HEADING ================= */}
      <div className="row">
        <div className="projects-heading padd-15">
          <h2>My Complete Projects :</h2>
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

      {/* ================= PAGINATION ================= */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalRecords={totalRecords}
        onPageChange={handlePageChange}
      />

      {/* ================= MAIN MENU BUTTON ================= */}
      <div className="projects-all">
        <button
          type="button"
          className="view-all"
          onClick={onBack}
        >
          Main Menu
        </button>
      </div>

    </div>
  );
}