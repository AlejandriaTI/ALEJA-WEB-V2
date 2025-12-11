"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const cycleDuration = 3 * 60 * 60 * 1000;
    const cycleStart = Math.floor(now / cycleDuration) * cycleDuration;
    const endTime = cycleStart + cycleDuration;
    return Math.floor((endTime - now) / 1000);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          const now = Date.now();
          const cycleDuration = 3 * 60 * 60 * 1000;
          const cycleStart = Math.floor(now / cycleDuration) * cycleDuration;
          const endTime = cycleStart + cycleDuration;
          return Math.floor((endTime - now) / 1000);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <TimeUnit value={hours} label="Horas" />
      <TimeUnit value={minutes} label="Minutos" />
      <TimeUnit value={seconds} label="Segundos" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-secondary/50 border border-border rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
        <span className="text-2xl md:text-4xl font-bold font-mono">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2">
        {label}
      </span>
    </div>
  );
}
