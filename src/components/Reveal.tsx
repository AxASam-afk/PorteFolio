"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (!first) return;
        if (first.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={isVisible ? "true" : "false"}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "opacity-0 scale-[0.98] translate-y-2 will-change-transform will-change-opacity",
        "transition duration-700 ease-out",
        "data-[reveal=true]:opacity-100 data-[reveal=true]:scale-100 data-[reveal=true]:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

