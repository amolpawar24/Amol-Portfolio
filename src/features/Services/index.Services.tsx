"use client";

import { servicesData } from "@/data/servicesData";
import ServicesCard from "./components/servicesCard";

export default function Services() {
  return (
    <div className="container">

      {/* SECTION TITLE */}
      <div className="row">
        <div className="section-title">
          <h2>Services</h2>
        </div>
      </div>

      {/* SERVICES ITEMS */}
      <div className="row">

        {servicesData.map((service, index) => (
          <div className="services-item padd-15" key={index}>

            <ServicesCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />

          </div>
        ))}

      </div>

    </div>
  );
}