"use client";

import { Card } from "@nextui-org/react";

export function SectionDivider() {
  return (
    <div className="relative w-full py-1">
      <Card className="h-10 bg-background/40 backdrop-blur-md border-t-1 border-b-1 border-white/10 overflow-hidden rounded-none" />
    </div>
  );
}
