"use client"
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PartnerSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0); // posição atual em px (sempre negativa ou zero)

  // Lista de parceiros
  const partnerLogos = [
    { id: 1, name: "EDM", image: "/images/EDM.png" },
    { id: 2, name: "Pinto e Cruz", image: "/images/PEC.jpg" },
    { id: 3, name: "Lalgy", image: "/images/LALGY.png" },
    { id: 5, name: "MCNET", image: "/images/MCNET.png" },
    { id: 6, name: "Mio Reabilitação", image: "/images/VIVO.svg" },
  ];

  // Duplicar a lista para o efeito de loop infinito
  const logosLoop = [...partnerLogos, ...partnerLogos];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let lastTimestamp: number | null = null;
    const speed = 40; // px por segundo (ajusta a velocidade aqui)

    const totalWidth = slider.scrollWidth / 2; // largura de um "conjunto" de logos

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused) {
        offsetRef.current -= (speed * delta) / 1000;

        // Loop infinito: quando ultrapassa a largura de um conjunto, reseta
        if (Math.abs(offsetRef.current) >= totalWidth) {
          offsetRef.current += totalWidth;
        }

        slider.style.transform = `translateX(${offsetRef.current}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Move manualmente para a esquerda ou direita
  const handleManualScroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2;
    const step = 200; // px por clique (ajusta conforme o tamanho dos logos)

    if (direction === "left") {
      offsetRef.current += step;
      // Evita que o offset fique positivo (voltar demasiado para trás)
      if (offsetRef.current > 0) {
        offsetRef.current -= totalWidth;
      }
    } else {
      offsetRef.current -= step;
      if (Math.abs(offsetRef.current) >= totalWidth) {
        offsetRef.current += totalWidth;
      }
    }

    slider.style.transform = `translateX(${offsetRef.current}px)`;
  };

  return (
    <section className="py-12 bg-gradient-to-tr from-brand-main-light/5 via-white to-brand-main-light/10 dark:from-gray-900 dark:via-gray-800 dark:to-brand-main/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Nossos{" "}
          <span className="text-gray-800 dark:text-white">Parceiros</span>
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Seta esquerda */}
          <button
            type="button"
            aria-label="Deslizar para a esquerda"
            onClick={() => handleManualScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 dark:bg-gray-700/90 shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-white" />
          </button>

          {/* Seta direita */}
          <button
            type="button"
            aria-label="Deslizar para a direita"
            onClick={() => handleManualScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 dark:bg-gray-700/90 shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-white" />
          </button>

          <div
            ref={sliderRef}
            className="flex whitespace-nowrap will-change-transform"
          >
            {logosLoop.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex items-center justify-center mx-6 w-40 h-24 shrink-0"
              >
                <div className="partner-logo bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center p-3 shadow-md hover:shadow-lg transition-all duration-300">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={128}
                    height={64}
                    className="object-contain rounded-lg w-32 h-16"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = document.createElement("div");
                      fallback.className =
                        "flex items-center justify-center w-full h-full text-gray-500 text-xs font-medium text-center";
                      fallback.textContent = partner.name;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .partner-logo {
            filter: grayscale(100%);
            opacity: 0.7;
            transition: all 0.3s ease;
          }
          .partner-logo:hover {
            filter: grayscale(0);
            opacity: 1;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnerSlider;