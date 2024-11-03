"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./projects-card";
import { useRef } from "react";

const projects = [
  {
    title: "Prep Pal - AI Interview Copilot",
    description:
      "Developed an RAG application using LangChain and GPT for personalized interview coaching copilot. Achieved 92% accuracy in context-aware responses.",
    technologies: ["Python", "LangChain", "RAG", "FastAPI", "Pinecone"],
    projectUrl: "https://github.com/hackerdud3/PrepPalBot",
  },
  {
    title: "Picture Perfect",
    description:
      "Image sharing and marketplace application with highly available system using EC2 Auto Scaling and S3 for image processing, achieving 99.9% uptime.",
    technologies: ["React", "Django", "AWS", "Docker"],
    projectUrl: "https://github.com/hackerdud3/Picture-Perfect",
  },
  {
    title: "Pulse Events",
    description:
      "Event management platform with secure JWT authentication and role-based access control. Implemented automated CI/CD pipeline with Docker and Kubernetes.",
    technologies: ["Next.js", "TypeScript", "Spring Boot", "MongoDB"],
    projectUrl: "https://github.com/hackerdud3/PulseEvents",
  },
  {
    title: "Prayan",
    description:
      " Developed an AI travel planner app using React Native, integrating Google Places and Maps APIs for personalized itineraries, flight details, hotel recommendations, and location-based search.",
    technologies: [
      "React Native",
      "TypeScript",
      "Google Cloud",
      "Expo",
      "Google Gemini API",
    ],
    projectUrl: "https://github.com/hackerdud3/Prayan",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-20" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
