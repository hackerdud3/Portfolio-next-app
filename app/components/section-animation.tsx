"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionAnimationProps {
  children: ReactNode;
  className?: string;
}

export function SectionAnimation({
  children,
  className = "",
}: SectionAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
