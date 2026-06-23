"use client";

import { useState, useEffect } from "react";

export function useCountUp(target: number, duration: number): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (duration === 0) return;

    const startTime = performance.now();
    const endTime = startTime + duration;

    const updateCount = (currentTime: number) => {
      if (currentTime >= endTime) {
        setCount(target);
        return;
      }
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      requestAnimationFrame(updateCount);
    };

    const rafId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return count;
}
