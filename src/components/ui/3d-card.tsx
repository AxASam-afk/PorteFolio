"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  /** Contenu affiché au verso (détails lisibles). */
  details: React.ReactNode;
  className?: string;
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(({ title, subtitle, imageUrl, details, className }, ref) => {
  const [flipped, setFlipped] = React.useState(false);

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

  React.useEffect(() => {
    if (flipped) {
      mouseX.set(0);
      mouseY.set(0);
    }
  }, [flipped, mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (flipped) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height, left, top } = rect;
    const mouseXVal = e.clientX - left;
    const mouseYVal = e.clientY - top;
    mouseX.set(mouseXVal / width - 0.5);
    mouseY.set(mouseYVal / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const openDetails = () => setFlipped(true);
  const closeDetails = () => setFlipped(false);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        flipped
          ? { transformStyle: "preserve-3d" }
          : { rotateX, rotateY, transformStyle: "preserve-3d" }
      }
      animate={{
        scale: flipped ? 1.04 : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={cn(
        "relative min-w-0 rounded-3xl bg-transparent shadow-premium",
        "border border-stroke",
        flipped && "z-20",
        flipped ? "w-[min(32rem,calc(100vw-1.5rem))]" : "w-80",
        className,
      )}
    >
      <div
        className="mx-4 my-4 [perspective:1200px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="relative min-h-[22rem]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Face avant */}
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl shadow-premium [backface-visibility:hidden] [transform:translateZ(1px)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={imageUrl}
              alt={`${title}, ${subtitle}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 44vw, 512px"
              priority={false}
            />
            <div className="absolute inset-0 min-h-full bg-gradient-to-b from-black/20 via-transparent to-black/65" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

            <div className="relative z-10 flex min-h-[22rem] flex-col p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1 pr-2">
                  <h3 className="text-balance text-2xl font-semibold leading-snug tracking-[-0.01em] break-words whitespace-normal">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white/80 break-words whitespace-normal">
                    {subtitle}
                  </p>
                </div>

                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openDetails();
                  }}
                  whileHover={{ scale: 1.08, rotate: "2.5deg" }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={`Voir les détails de ${title}`}
                  style={{ transform: "translateZ(60px)" }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/25"
                >
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Face arrière */}
          <div
            className="absolute inset-0 overflow-y-auto rounded-3xl border border-stroke bg-surface shadow-premium [backface-visibility:hidden]"
            style={{
              transform: "rotateY(180deg) translateZ(1px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex min-h-[22rem] flex-col p-6 text-ink">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-balance text-xl font-semibold leading-snug tracking-[-0.01em]">
                  {title}
                </h3>
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeDetails();
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Revenir à la vue projet"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stroke bg-bg/60 text-ink shadow-premium transition hover:bg-bg"
                >
                  <RotateCcw className="h-5 w-5" />
                </motion.button>
              </div>
              <div className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                {details}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

InteractiveTravelCard.displayName = "InteractiveTravelCard";
