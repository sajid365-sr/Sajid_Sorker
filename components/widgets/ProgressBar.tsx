"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  seconds?: number;
  onComplete?: () => void;
}

export default function ProgressBar({
  seconds = 5,
  onComplete,
}: ProgressBarProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000; // seconds
      const newWidth = Math.max(100 - (elapsed / seconds) * 100, 0);
      setWidth(newWidth);

      if (elapsed < seconds) {
        requestAnimationFrame(animate);
      } else {
        setTimeLeft(0);
        onComplete?.();
      }
    };

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    requestAnimationFrame(animate);

    return () => clearInterval(interval);
  }, [seconds, onComplete]);

  return (
    <div className="max-w-xs mx-auto">
      <motion.div
        style={{ width: `${width}%` }}
        className="h-1 bg-gradient-to-r from-[#4dd193] to-purple-500 rounded-full"
      />
      <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark mt-2">
        Redirecting in {timeLeft} second{timeLeft !== 1 ? "s" : ""}…
      </p>
    </div>
  );
}
