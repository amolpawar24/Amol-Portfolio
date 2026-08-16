"use client";

import Image from "next/image";

type ProjectProps = {
  project: {
    id: number;
    image: string;
    title: string;
    description: string;
    liveDemo: string;
    code: string;
    tech: string[];
  };
};

export default function ProjectCards({
  project,
}: ProjectProps) {
  const {
    image,
    title,
    description,
    liveDemo,
    code,
    tech,
  } = project;

  return (
    <div className="projects-item padd-15">

      {/* ================= PROJECT CARD ================= */}

      <div className="projects-item-inner shadow-dark">

        {/* ================= PROJECT IMAGE ================= */}

        <div className="projects-img">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
          />
        </div>

        {/* ================= OVERLAY ================= */}

        <div className="overlay">

          <h1>{title}</h1>

          <p>{description}</p>

          {/* ================= TECHNOLOGY ICONS ================= */}

          <div className="tech-icons">

            {tech.map((icon, index) => (
              <span key={index}>
                <i className={icon}></i>
              </span>
            ))}

          </div>

        </div>

      </div>

      {/* ================= PROJECT BUTTONS ================= */}

      <div className="projects-buttons">

        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="button-1"
        >
          Live Demo
        </a>

        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="button-2"
        >
          Code {"</>"}
        </a>

      </div>

    </div>
  );
}