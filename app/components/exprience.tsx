"use client";

import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "San Francisco State University | YouDescribeX",
    period: "Jan 2024 – May 2024",
    description: [
      "Engineered YouDescribeX, an AI-powered video accessibility platform that uses human-in-the-loop machine learning.",
      "Revamped core React components of the existing web interface, simplifying the process of adding audio descriptions, significantly improving video accessibility for blind and visually impaired individuals.",
    ],
    technologies: ["React", "TypeScript", "MongoDB", "AWS Lambda", "S3"],
  },
  {
    title: "Software Engineer",
    company: "San Francisco State University | MyCareerChamp",
    period: "May 2023 - Dec 2023",
    description: [
      "Led development of AI resume builder using React.js and Python, serving 100+ university students.",
      "Architected modular frontend with 20+ reusable React components, reducing development time for new features by 60% and ensuring consistent UI/UX across the platform.",
      "Engineered custom React hooks and Context API, reducing global state management overhead by 35% ",
      "Integrated OpenAI API and developed Flask REST APIs using Python, automating ~70% of resume writing process through language model prompt engineering.",
      "Engineered an NLP-based resume evaluation system that improved content quality by >20% through automated feedback and suggestions.",
      "Designed efficient PostgreSQL schemas for complex JSON data storage and retrieval, supporting dynamic resume customization.",
    ],
    technologies: ["React", "JavaScript", "Python", "Flask", "PostgreSQL"],
  },

  {
    title: "Teaching Assistant",
    company: "SFSU Department of Computer Science ",
    period: "Sept 2023 – Dec 2023 ",
    description: [
      "Assisted in teaching Java programming concepts, React, Spring Framework fundamentals, and design patterns.",
      "Mentored 30+ students through programming assignments and group projects, providing code reviews and debugging support.",
    ],
    technologies: ["Java", "Communication", "Mentoring", "Code Review"],
  },
  {
    title: "Machine Learning Intern",
    company: "Ram Innovative Info-tech",
    period: "Jan 2022 - Jun 2022",
    description: [
      "Developed a real-time Drowsiness Detection System using OpenCV and Raspberry Pi, achieving 95% accuracy in detecting fatigue.",
      "Implemented an algorithm utilizing facial landmark detection to calculate eye aspect ratio (EAR), monitoring and analyzing eye closure patterns and triggering alerts when driver's eye closure exceeds a defined threshold.",
    ],
    technologies: ["Python", "OpenCV", "Raspberry Pi", "numpy", "dlib"],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="py-20" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                <Card className="bg-background/40 backdrop-blur-md border border-white/10">
                  <CardHeader className="flex flex-col sm:flex-row justify-between px-6">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <p className="text-default-500">{exp.period}</p>
                  </CardHeader>
                  <Divider />
                  <CardBody className="px-6">
                    {exp.description.map((desc) => (
                      <p key={desc} className="text-default-500 mb-2">
                        {desc}
                      </p>
                    ))}
                    <div className="flex gap-2 flex-wrap mt-2">
                      {exp.technologies.map((tech) => (
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
