"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./projects-card";
import { useRef } from "react";

const projects = [
  {
    title: "Prep Pal - AI Interview Copilot",
    description:
      "A RAG application built using Python, LangChain, and GPT. PrepPal is an AI interview preparation assistant fine-tuned on extensive real-world interview data.  It gives authentic, reliable answers using frameworks like STAR and CARL to structure your responses. The assistant handles behavioral, situational, technical questions and many more, using golden rules. For non-resume questions, it gathers specific details to customize answers that align with job requirements. It also provides summary of the resume",
    technologies: ["Python", "LangChain", "RAG", "FastAPI", "Pinecone"],
    projectUrl: "https://preppalbot.onrender.com/",
  },
  {
    title: "My Career Champ",
    description:
      "AI resume builder using React.js and Python, serving 100+ university students at SF State. It takes minimal input from the users to build ATS friendly resumea, analyzes resumes for factors like keywords, formatting, and content, providing feedback and suggestions for improvement. It aims to increase the chances of a resume getting noticed by employers and ultimately securing interviews.",
    technologies: [
      "React",
      "Python",
      "Flask",
      "PostgreSQL",
      "OpenAI API",
      "Google Cloud",
    ],
    projectUrl: "https://www.mycareerchamp.org/sign-up",
  },
  {
    title: "Picture Perfect",
    description:
      "Picture Perfect is an image sharing and marketplace platform built with React and Django, enabling users to edit, share, and sell their images with seamless efficiency. Users can explore diverse categories including space, wildlife, nature, film, and animals, while having the ability to edit their images through features like cropping, resizing, and applying filters before uploading to specific categories. The application leverages AWS cloud services including EC2 Auto Scaling and S3 for image processing, maintaining 99.9% uptime. The platform features comprehensive image editing tools, content moderation, and advanced search functionality, with Jest test suites ensuring component reliability. Using MySQL for data management and Docker for containerization, the system delivers a scalable and reliable experience for users across the platform.",
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "Django",
      "MySQL",
      "AWS",
      "Docker",
    ],
    projectUrl: "https://github.com/hackerdud3/Picture-Perfect",
  },
  {
    title: "Pulse Events",
    description:
      "Full-stack event management platform using Next.js, Spring Boot, and PostgreSQL. The platform implements secure JWT authentication and role-based authorization through Spring Security, allowing users to create, manage, and discover events efficiently. Users can register for events and search through different filters including city, category, and dates, while admins can review and moderate content. The application integrates Google Maps and Places API for precise location services, with PostgreSQL handling complex data management. The modern, responsive interface ensures a smooth user experience across all devices.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Redis",
    ],
    projectUrl: "https://github.com/hackerdud3/PulseEvents",
  },
  {
    title: "Prayan",
    description:
      " AI travel planner app using React Native, integrating Google Places and Maps APIs for personalized itineraries, flight details, hotel recommendations, and location-based search.",
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
    <section id="projects" className="lg:py-20 py-10" ref={containerRef}>
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
                className="h-full" // Add this
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{
                  duration: 0.2,
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
