"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ConnectedStars() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  if (!mounted) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 120,
        particles: {
          number: { value: 100, density: { enable: true, area: 1000 } },
          color: { value: ["#ffffff"] },
          shape: { type: "star" },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false },
          },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: false },
          },
          modes: {
            grab: {
              distance: 150, // how far hover affects
              links: {
                opacity: 2, // much brighter
                color: "#ffffff", // enforce bright white
                width: 1.5,    // slightly thicker
              },
            },
            attract: {
              distance: 100,
              duration: 0.3,
              speed: 0.5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
