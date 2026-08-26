"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

import Home from "@/features/Home/index.Home";
import Profile from "@/features/Profile/index.Profile";
import TechStack from "@/features/TechStack/index.TechStack";
import Services from "@/features/Services/index.Services";
import Projects from "@/features/Projects/index.Projects";
import AllProjects from "@/features/Projects/AllProjects";
import Connect from "@/features/Connect/index.Connect";
import Certifications from "@/features/Certifications/index.Certifications";

export default function Main() {

  /* ================= STATE ================= */
  const [activeSection, setActiveSection] = useState("Home");
  const [prevSection, setPrevSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* ================= NAVIGATION ================= */
  const handleNavigate = (section: string) => {

    // Prevent re-render on same page click
    if (section === activeSection) {
      setSidebarOpen(false);
      return;
    }

    // Save previous section for animation
    setPrevSection(activeSection);

    // Set new active section
    setActiveSection(section);

    // Close sidebar automatically on mobile
    setSidebarOpen(false);
  };

  /* ================= SECTION CLASSES ================= */
  const sectionClass = (name: string, extra: string) => {

    // Current active page
    if (name === activeSection) {
      return `${extra} section active`;
    }

    // Previous page
    if (name === prevSection) {
      return `${extra} section back-section`;
    }

    // Hidden pages
    return `${extra} section`;
  };

  return (
    <main className="main-container">

      {/* ================= SIDEBAR ================= */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* ================= THEME SWITCHER ================= */}
      <ThemeSwitcher />

      {/* ================= HOME ================= */}
      <section
        className={sectionClass("Home", "home")}
        id="Home"
      >
        <Home />
      </section>

      {/* ================= PROFILE ================= */}
      <section
        className={sectionClass("Profile", "profile")}
        id="Profile"
      >
        <Profile />
      </section>

      {/* ================= CERTIFICATIONS ================== */}
      <section
        className={sectionClass("Certifications", "certifications")}
        id="Certifications"
      >
        <Certifications />
      </section>

      {/* ================= TECH STACK ================= */}
      <section
        className={sectionClass("TechStack", "techstack")}
        id="TechStack"
      >
        <TechStack />
      </section>

      {/* ================= SERVICES ================= */}
      <section
        className={sectionClass("Services", "services")}
        id="Services"
      >
        <Services />
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        className={sectionClass("Projects", "projects")}
        id="Projects"
      >
        <Projects
          onViewAll={() => handleNavigate("AllProjects")}
        />
      </section>

      {/* ================= ALL PROJECTS ================= */}
      <section
        className={sectionClass("AllProjects", "projects")}
        id="AllProjects"
      >
        <AllProjects
          onBack={() => handleNavigate("Projects")}
        />
      </section>

      {/* ================= CONNECT ================= */}
      <section
        className={sectionClass("Connect", "connect")}
        id="Connect"
      >
        <Connect />
      </section>

    </main>
  );
}