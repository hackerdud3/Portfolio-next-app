"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import Script from "next/script";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

function LinkedInBadgeCompact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full lg:w-[330px] flex-shrink-0">
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="afterInteractive"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-transparent rounded-xl "
      >
        <style jsx global>{`
          .LI-profile-badge {
            width: 100% !important;
          }
          .LI-profile-badge.dark {
            background: transparent !important;
          }
          .LI-profile-badge .LI-profile-pic {
            display: none !important;
          }
          .dark-theme {
            background: transparent !important;
          }
        `}</style>
        <div
          className="badge-base LI-profile-badge pl-5"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="HORIZONTAL"
          data-vanity="nandhi-kanti-vinay"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/nandhi-kanti-vinay?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
            title="View Nandhi Kanti Vinay's profile on LinkedIn"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <Card className="bg-background/40 backdrop-blur-md border border-white/10">
            <CardBody className="gap-8">
              <p className="text-lg text-default-500">
                Full Stack Developer/Software Engineer with strong experience in
                React, TypeScript, Python, and Java Spring ecosystem.
                Specialized in building accessible web applications and
                integrating AI/ML solutions. Proven track record of optimizing
                application performance and implementing cloud-native solutions
                on AWS and GCP.
              </p>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="space-y-6 flex-grow">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-xl font-semibold mb-3">{category}</h3>
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
                    </div>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <LinkedInBadgeCompact />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
