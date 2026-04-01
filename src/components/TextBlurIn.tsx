"use client";

import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

type TextBlurInProps = {
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  delayMs?: number;
  children: React.ReactNode;
};

export function TextBlurIn({
  as = "span",
  className,
  delayMs,
  children,
}: TextBlurInProps) {
  const Tag = as;
  return (
    <Reveal delayMs={delayMs} className="opacity-100 scale-100 translate-y-0">
      <Tag className={cn("animate-blur-in", className)}>{children}</Tag>
    </Reveal>
  );
}

