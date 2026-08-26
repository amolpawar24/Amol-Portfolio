"use client";

import { techStackData } from "@/data/techStackData";
import TechStackCards from "./components/TechStackCards";

export default function TechStack() {
  return (
    <div className="container">

      {/* ================= SECTION TITLE ================= */}
      <div className="row">
        <div className="section-title">
          <h2>My Tech Stack</h2>
        </div>
      </div>

      {/* ================= TECH STACK ITEMS ================= */}
      <div className="row">
        {techStackData.map((tech, index) => (
          <TechStackCards key={index} tech={tech} />
        ))}
      </div>

    </div>
  );
}