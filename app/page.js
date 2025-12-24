"use client";
import Navbar from "./Components/Navbar";
import { useState,useEffect } from "react";
import Hero from "@/app/Components/Hero";
import Skills from "@/app/Components/Skills";
import About from "./Components/About";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="text-white " >
      <div
        className="pointer-events-none fixed rounded-full blur-3xl opacity-60 bg-blue-900 transition-transform duration-100"
        style={{
          width: "200px",
          height: "200px",
          left: position.x - 100,
          top: position.y - 100,
        }}
      ></div>
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col gap-10">
        <Hero />
        <About/>
        <Skills/>
      </div>
      
    </div>
  );
}
