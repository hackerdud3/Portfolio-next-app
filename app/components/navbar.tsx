"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ResumeButton } from "./resume-button";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 w-full z-50"
    >
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent"
        classNames={{
          wrapper: "px-4 sm:px-6 md:px-8 max-w-7xl mx-auto",
        }}
        height="4.5rem"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <Link
              className="font-bold text-inherit hover:text-primary transition-colors"
              href="/"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                NANDHIKANTI VINAY
              </motion.span>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ResumeButton />
        </motion.div>
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <div className="flex gap-4 items-center">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <NavbarItem>
                  <Link
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </NavbarItem>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                as={Link}
                href="mailto:nandhikantivinayk@gmail.com"
                variant="flat"
                color="primary"
                radius="full"
                className="font-medium text-sm text-primary"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </NavbarContent>

        <NavbarMenu className="bg-background/80 backdrop-blur-md mt-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <NavbarItem>
                <Link
                  className="w-full text-foreground/80 hover:text-primary transition-colors"
                  href={item.href}
                  size="lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            </motion.div>
          ))}
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
