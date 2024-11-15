"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import LinkedInBadge from "./linkedin-badge";

const skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Redux",
  ],
  "Backend & Databases": [
    "Java",
    "Python",
    "Spring Boot",
    "Django",
    "Flask",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
  ],
  "Cloud & DevOps": ["AWS", "Google Cloud Platform", "Docker", "Kubernetes"],
  "AI/ML": ["LangChain", "Hugging Face", "OpenCV", "NLP"],
  "Testing & Tools": [
    "Jest",
    "Git",
    "CI/CD",
    "Linux",
    "Postman",
    "IntelliJ IDEA",
  ],
};

export function About() {
  return (
    <section id="about" className="lg:py-20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="transform-gpu">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
            <Card className="bg-background/40 backdrop-blur-md border border-white/10">
              <CardBody className="gap-8">
                <p className="text-lg text-default-500">
                  Full Stack Developer/Software Engineer with strong experience
                  in React, TypeScript, Python, and Java Spring ecosystem.
                  Specialized in building accessible web applications and
                  integrating AI/ML solutions. Proven track record of optimizing
                  application performance and implementing cloud-native
                  solutions on AWS and GCP.
                </p>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="space-y-6 flex-grow">
                    {Object.entries(skills).map(
                      ([category, skillList], index) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                          }}
                        >
                          <h3 className="text-xl font-semibold mb-3">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill) => (
                              <Chip
                                key={skill}
                                color="primary"
                                classNames={{
                                  content: "text-white font-medium",
                                  base: "bg-primary/80 hover:bg-primary/90 transition-colors",
                                }}
                              >
                                {skill}
                              </Chip>
                            ))}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                  <div className="w-full lg:w-auto flex justify-center items-start">
                    <motion.div
                      className="w-[300px] sm:w-[350px] lg:w-[300px] flex"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <LinkedInBadge />
                    </motion.div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
