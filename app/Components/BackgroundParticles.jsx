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
        fpsLimit: 120,
        particles: {
          number: { value: 100, density: { enable: true, area: 1000 } },
          color: { value: "#ffffff" },
          shape: { type: "star" },
          opacity: {
            value: 1,
            random: { enable: true, minimumValue: 0.3 },
            animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false },
          },
          size: { value: { min: 0.5, max: 2 } },
          move: {
            enable: true,
            speed: 0.5,
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // optional hover effect
            onClick: { enable: false },
          },
          modes: {
            grab: {
              distance: 200, 
              links: {
                opacity: 1,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}