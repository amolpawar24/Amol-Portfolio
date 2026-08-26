"use client";

import Image from "next/image";

import { useTyped } from "@/hooks/useTyped";

export default function Home() {

  //* ================= TYPED.JS HOOK ================= 
  useTyped(".typing");

  return (
    <div className="container">
      <div className="row">

        {/* INFO */}
        <div className="home-info padd-15">
          <h3 className="hello">
            Hello, My name is <span className="name">Amol Pawar</span>
          </h3>

          <h3 className="my-profession">
            I&apos;m a <span className="typing"></span>
          </h3>

          <p>
            Frontend Developer with skills in web designing and development,
            producing quality work.
          </p>

          <a
            href="https://amolpawar24.carrd.co/"
            className="btn"
            target="_blank"
          >
            Connect
          </a>
        </div>

        {/* IMAGE */}
        <div className="home-img padd-15">
          <Image
            src="/assets/images/profile/Amol4.png"
            alt="Amol Pawar"
            width={410}
            height={350}
            priority
          />
        </div>
      </div>
    </div>
  );
}