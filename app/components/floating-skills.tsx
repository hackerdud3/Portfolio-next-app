"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
  SiGooglecloud,
  SiAmazonwebservices,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const skillIcons = [
  {
    Icon: SiReact,
    color: "#61DAFB",
    position: { top: "25%", left: "20%" },
    animate: {
      y: ["0%", "-50%", "0%"],
      x: ["0%", "30%", "0%"],
    },
  },
  {
    Icon: SiAmazonwebservices,
    color: "#FF9900",
    position: { top: "10%", left: "40%" },
    animate: {
      y: ["0%", "-50%", "0%"],
      x: ["0%", "30%", "0%"],
    },
  },
  {
    Icon: SiSpringboot,
    color: "#6DB33F",
    position: { top: "10%", left: "60%" },
    animate: {
      y: ["0%", "50%", "0%"],
      x: ["0%", "70%", "0%"],
    },
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    position: { top: "30%", left: "80%" },
    animate: {
      y: ["0%", "50%", "0%"],
      x: ["0%", "-30%", "0%"],
    },
  },
  {
    Icon: SiPython,
    color: "#3776AB",
    position: { top: "55%", left: "17%" },
    animate: {
      y: ["0%", "40%", "0%"],
      x: ["0%", "50%", "0%"],
    },
  },
  {
    Icon: SiDocker,
    color: "#2496ED",
    position: { top: "80%", left: "30%" },
    animate: {
      y: ["0%", "-50%", "0%"],
      x: ["0%", "0%", "0%"],
    },
  },
  {
    Icon: SiMysql,
    color: "#3178C6",
    position: { top: "55%", left: "77%" },
    animate: {
      y: ["0%", "-30%", "0%"],
      x: ["0%", "30%", "0%"],
    },
  },
  {
    Icon: SiGooglecloud,
    color: "#4285F4",
    position: { top: "80%", left: "60%" },
    animate: {
      y: ["0%", "-50%", "0%"],
      x: ["0%", "50%", "0%"],
    },
  },
];

export function FloatingSkills() {
  return (
    <motion.div
      className="absolute inset-0 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {skillIcons.map(({ Icon, color, position, animate }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-[0.6]"
          initial={{ ...position, opacity: 0 }}
          animate={{
            ...animate,
            opacity: 0.6,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            opacity: { duration: 0.5, delay: index * 0.1 },
          }}
        >
          <Icon size={50} color={color} />
        </motion.div>
      ))}
    </motion.div>
  );
}
