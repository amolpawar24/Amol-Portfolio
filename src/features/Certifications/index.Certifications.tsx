"use client";

import { certificationData } from "@/data/certificationsData";
import CertificationCards from "./components/CertificationCards";

export default function Certifications() {

  return (

    <div className="container">

      {/* ================= SECTION TITLE ================= */}

      <div className="row">

        <div className="section-title padd-15">

          <h2>Certifications</h2>

        </div>

      </div>

      {/* ================= CERTIFICATION CARDS ================= */}

      <div className="row">

        {
          certificationData.map((certificate, index) => (

            <CertificationCards
              key={index}
              certificate={certificate}
            />
          ))
        }

      </div>

    </div>

  );
}