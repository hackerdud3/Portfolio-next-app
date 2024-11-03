"use client";

import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { FloatingSkills } from "./floating-skills";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 ">
      <FloatingSkills />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-6 z-10"
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Full Stack Developer
          <span className="block text-primary">& AI Engineer</span>
        </h1>
        <p className="text-lg text-default-500 max-w-[600px] mx-auto">
          Specialized in building accessible web applications and integrating
          AI/ML solutions. Strong experience in React, TypeScript, Python, and
          Java Spring ecosystem.
        </p>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button
            as={Link}
            href="#projects"
            color="primary"
            variant="shadow"
            radius="full"
            size="lg"
          >
            View My Work
          </Button>
          <div className="flex gap-4">
            <Button
              as={Link}
              href="https://github.com/hackerdud3"
              isExternal
              variant="bordered"
              size="lg"
              radius="full"
              startContent={<GitHubIcon />}
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/nandhi-kanti-vinay/"
              isExternal
              variant="bordered"
              size="lg"
              radius="full"
              startContent={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
