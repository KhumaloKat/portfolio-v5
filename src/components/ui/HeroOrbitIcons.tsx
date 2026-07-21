"use client";

import {
  BrainCircuit,
  Code2,
  Cpu,
  Radar,
  Rocket,
  Satellite,
  Wrench,
} from "lucide-react";
import { memo, useEffect, useMemo, useRef, useState } from "react";

const ICONS = [Code2, BrainCircuit, Satellite, Radar, Cpu, Wrench, Rocket] as const;

function HeroOrbitIconsComponent() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(true);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = hostRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const items = useMemo(
    () =>
      ICONS.map((Icon, index) => {
        const startAngle = (360 / ICONS.length) * index;
        const radius = index % 2 === 0 ? 330 : 268;
        const opacity = 0.34 + (index % 3) * 0.18;
        const blur = index % 3 === 0 ? "blur-[1px]" : "blur-0";
        const size = index % 2 === 0 ? "w-[74px] h-[74px] md:w-[84px] md:h-[84px]" : "w-[66px] h-[66px] md:w-[74px] md:h-[74px]";
        const duration = 18 + index * 2.4;
        const delay = index * 0.25;

        return { Icon, startAngle, radius, opacity, blur, size, duration, delay };
      }),
    []
  );

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute inset-0 z-[12] overflow-visible"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const nx = (event.clientX - rect.left) / rect.width - 0.5;
        const ny = (event.clientY - rect.top) / rect.height - 0.5;
        setParallax({ x: nx * 14, y: ny * 10 });
      }}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
    >
      <div
        className="absolute inset-0 gpu-layer"
        style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
      >
        {items.map((item, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 gpu-layer"
          style={{
            transform: `rotate(${item.startAngle}deg)`,
            animation: isActive ? `hero-orbit ${item.duration}s linear ${item.delay}s infinite` : "none",
            ['--orbit-radius' as string]: `${item.radius}px`,
          }}
          aria-hidden="true"
        >
          <div className={`gpu-layer ${item.size} ${item.blur} rounded-full border border-white/25 bg-white/10 backdrop-blur-xl`} style={{ opacity: item.opacity }}>
            <div className="flex h-full w-full items-center justify-center text-white/80">
              <item.Icon size={32} strokeWidth={1.75} />
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default memo(HeroOrbitIconsComponent);
