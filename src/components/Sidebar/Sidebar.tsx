"use client";

interface Props {
  activeSection: string;
  onNavigate: (section: string) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  activeSection,
  onNavigate,
  open,
  setOpen,
}: Props) {

  /* ================= NAVIGATION ================= */
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {

    e.preventDefault();

    // Navigate to section
    onNavigate(section);

    // Close sidebar after clicking nav item
    setOpen(false);
  };

  /* ================= TOGGLE SIDEBAR ================= */
  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* =====================================================
          NAV TOGGLER
      ===================================================== */}
      <div
        className={`nav-toggler ${open ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
      </div>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside className={`sidebar ${open ? "open" : ""}`}>

        {/* ================= LOGO ================= */}
        <div className="logo">
          <a
            href="#Home"
            onClick={(e) => handleNavigation(e, "Home")}
          >
            <span>A</span>mol
          </a>
        </div>

        {/* ================= NAVIGATION ================= */}
        <ul className="nav">

          {/* HOME */}
          <li>
            <a
              href="#Home"
              className={activeSection === "Home" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Home")}
            >
              <i className="fa fa-home"></i>
              Home
            </a>
          </li>

          {/* PROFILE */}
          <li>
            <a
              href="#Profile"
              className={activeSection === "Profile" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Profile")}
            >
              <i className="fa fa-user"></i>
              Profile
            </a>
          </li>

          {/* CERTIFICATIONS */}
          <li>
            <a
              href="#Certifications"
              className={activeSection === "Certifications" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Certifications")}
            >
              <i className="fa fa-certificate"></i>
              Certifications
            </a>
          </li>

          {/* TECH STACK */}
          <li>
            <a
              href="#TechStack"
              className={activeSection === "TechStack" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "TechStack")}
            >
              <i className="fa fa-code"></i>
              Tech Stack
            </a>
          </li>

          {/* SERVICES */}
          <li>
            <a
              href="#Services"
              className={activeSection === "Services" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Services")}
            >
              <i className="fa fa-list"></i>
              Services
            </a>
          </li>

          {/* PROJECTS */}
          <li>
            <a
              href="#Projects"
              className={activeSection === "Projects" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Projects")}
            >
              <i className="fa fa-briefcase"></i>
              Projects
            </a>
          </li>

          {/* CONNECT */}
          <li>
            <a
              href="#Connect"
              className={activeSection === "Connect" ? "active" : ""}
              onClick={(e) => handleNavigation(e, "Connect")}
            >
              <i className="fa fa-comments"></i>
              Connect
            </a>
          </li>

        </ul>
      </aside>
    </>
  );
}