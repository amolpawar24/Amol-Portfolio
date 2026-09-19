"use client";

import Image from "next/image";

import { useTyped } from "@/hooks/useTyped";

interface Props {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: Props) {
  //* ================= TYPED.JS HOOK =================
  useTyped(".typing");

  const handleViewWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate("Projects");
  };

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
            Full Stack Developer building modern web applications with React,
            Next.js, Node.js and Java.
          </p>

          <div className="home-btns">
            <a href="#Projects" className="btn" onClick={handleViewWork}>View My Work</a>
            <a href="https://amolpawar24.carrd.co/" className="btn" target="_blank">Connect</a>
          </div>
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