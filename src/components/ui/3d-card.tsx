"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  className?: string;
}

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(
  (
    { title, subtitle, imageUrl, href, className },
    ref,
  ) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(
      springY,
      [-0.5, 0.5],
      ["10.5deg", "-10.5deg"],
    );
    const rotateY = useTransform(
      springX,
      [-0.5, 0.5],
      ["-10.5deg", "10.5deg"],
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseXVal = e.clientX - left;
      const mouseYVal = e.clientY - top;
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const external = isExternalHref(href);

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-[26rem] w-80 rounded-3xl bg-transparent shadow-premium",
          "border border-stroke",
          className,
        )}
      >
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 flex h-[calc(100%-2rem)] w-[calc(100%-2rem)] flex-col overflow-hidden rounded-3xl shadow-premium"
        >
          <Image
            src={imageUrl}
            alt={`${title}, ${subtitle}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 44vw, 352px"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/65" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

          <div className="relative flex flex-1 flex-col p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <motion.h3
                  style={{ transform: "translateZ(50px)" }}
                  className="truncate text-2xl font-semibold tracking-[-0.01em]"
                >
                  {title}
                </motion.h3>
                <motion.p
                  style={{ transform: "translateZ(40px)" }}
                  className="mt-1 truncate text-sm font-medium text-white/80"
                >
                  {subtitle}
                </motion.p>
              </div>

              <motion.a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.08, rotate: "2.5deg" }}
                whileTap={{ scale: 0.92 }}
                aria-label={`Ouvrir ${title}`}
                style={{ transform: "translateZ(60px)" }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/25"
              >
                <ArrowUpRight className="h-5 w-5 text-white" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  },
);

InteractiveTravelCard.displayName = "InteractiveTravelCard";

