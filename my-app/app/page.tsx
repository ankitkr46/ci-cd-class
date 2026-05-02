"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex flex-col items-center justify-center text-center space-y-8 max-w-2xl">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl animate-bounce">
          <Image
            src="https://github.com/hkirat.png"
            alt="Harkirat Singh"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white drop-shadow-md">
            Happy Birthday,{" "}
            <span className="text-blue-600 dark:text-blue-400">Harkirat!</span> 🎂
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 font-medium">
            Keep shipping, keep teaching, and keep inspiring the 100Devs & 0-100
            cohort community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform">
            🚀 100Devs
          </div>
          <div className="px-6 py-3 bg-zinc-800 text-white rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform">
            💻 Cohort 3.0
          </div>
          <div className="px-6 py-3 bg-red-500 text-white rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform">
            🔥 Kirat Coding
          </div>
        </div>

        <div className="pt-8 text-zinc-500 dark:text-zinc-400 italic">
          "Duniya hilani hai" - Harkirat Singh (probably)
        </div>
      </main>
    </div>
  );
}
