"use client";

import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  index: number;
  projectUrl: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  projectUrl,
}: ProjectCardProps) {
  const handleClick = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card
      isPressable
      onClick={() => handleClick(projectUrl)}
      className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02]"
    >
      <CardHeader className="flex gap-2 px-4 pb-0 justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <ExternalLink size={16} />
      </CardHeader>
      <CardBody className="px-4 lg:h-44">
        <p className="text-default-500 mb-4">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <Chip
              key={tech}
              color="primary"
              classNames={{
                content: "text-white font-medium",
                base: "bg-primary/80 hover:bg-primary/90 transition-colors",
              }}
            >
              {tech}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
