/* eslint-disable react/no-unescaped-entities */
"use client";

import { profileData } from "@/data/profileData";

interface Props {
  onNavigate: (section: string) => void;
}

export default function Profile({ onNavigate }: Props) {

    const handleHireMe = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate("Connect");
  };


  return (
    <div className="container">
      {/* ===================== TITLE ===================== */}

      <div className="row">
        <div className="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>

      {/* ===================== CONTENT ===================== */}

      <div className="row">
        <div className="profile-content padd-15">
          {/* ===================== ABOUT TEXT ===================== */}

          <div className="row">
            <div className="profile-text">
              <h3>
                I'm {profileData.name} and
                <span> {profileData.role}</span>
              </h3>

              <p>{profileData.about}</p>
            </div>
          </div>

          {/* ===================== PERSONAL INFO ===================== */}

          <div className="row">
            <div className="personal-info padd-15">
              <div className="row">
                {profileData.personalInfo.map((item, index) => (
                  <div key={index} className="info-item padd-15">
                    <p>
                      {item.label} :<span> {item.value}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* ===================== BUTTONS ===================== */}

              <div className="row">
                <div className="buttons padd-15">
                  <a
                    href="/assets/resume/Resume 2/My Resume.pdf"
                    className="btn"
                    download
                  >
                    Download CV
                  </a>

                  <a href="#Connect" className="btn hire-me"
                    onClick={handleHireMe}
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== EDUCATION + COURSE ===================== */}

          <div className="row">
            {/* ===================== EDUCATION ===================== */}

            <div className="education padd-15">
              <h3 className="title">Education</h3>

              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    {profileData.education.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="circle-dot"></div>

                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>{" "}
                          {item.year}
                        </h3>

                        <h4 className="timeline-title">
                          {item.title}
                        </h4>

                        <p className="timeline-text">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ===================== COURSE ===================== */}

            <div className="course padd-15">
              <h3 className="title">Course</h3>

              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    {profileData.course.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="circle-dot"></div>

                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>{" "}
                          {item.year}
                        </h3>

                        <h4 className="timeline-title">
                          {item.title}
                        </h4>

                        <p className="timeline-text">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}