"use client";

import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  "Awarded President's Leadership Fellowship certificate for contributions to inclusive campus leadership. Led initiatives to promote diversity in student leadership. Mentored incoming fellows through leadership development workshops",
  "Volunteer facilitator for GenAI workshops on AWS SageMaker and Bedrock at AWS Community Day 2024, Bay Area",
  // Add more achievements
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-background/40 backdrop-blur-md border border-white/10"
              >
                <CardBody className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-default-500">{achievement}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
