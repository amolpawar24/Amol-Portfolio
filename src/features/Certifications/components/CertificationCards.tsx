"use client";

import Image from "next/image";

type CertificationCardProps = {

  certificate: {
    title: string;
    provider: string;
    year: string;
    image: string;
    description: string;
  };
};

export default function CertificationCards({
  certificate,
}: CertificationCardProps) {

  return (

    <div className="Certifications-item padd-15">

      <div className="Certifications-item-inner">

        {/* ================= IMAGE ================= */}

        <div className="certificate-image">

          <Image
            src={certificate.image}
            alt={certificate.title}
            width={500}
            height={300}
          />

        </div>

        {/* ================= CONTENT ================= */}

        <div className="certificate-content">

          <h4>{certificate.title}</h4>

          <span>
            {certificate.provider} • {certificate.year}
          </span>

          <p>{certificate.description}</p>

        </div>

      </div>

    </div>
  );
}