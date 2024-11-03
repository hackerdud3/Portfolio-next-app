"use client";

import { Card, CardBody, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Award,
  Mouse,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  pdfUrl?: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    pdfUrl: "/certificates/aws-cloud-practitioner.pdf",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    title: "Google Cloud Certification",
    issuer: "Google Cloud",
    date: "2024",
    pdfUrl: "/certificates/google-cloud.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/ITJGKYLNZQQI",
  },
  {
    title: "Meta React and React Native",
    issuer: "Meta",
    date: "2022",
    pdfUrl: "/certificates/meta-react.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/S2EDWFSE77JW",
  },
  {
    title: "Java Programming",
    issuer: "Coding Ninjas",
    date: "2022",
    pdfUrl: "/certificates/java-codingninjas.pdf",
    credentialUrl:
      "https://ninjasfiles.s3.amazonaws.com/certificate1629007cd476f5a1ba9c12db0c0161b464dfc29.pdf",
  },
];

export function Certifications() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const CARD_WIDTH = 350;
  const CARD_GAP = 24;
  const VISIBLE_CARDS = 3; // Number of cards visible at once on desktop

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    };

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollDistance = CARD_WIDTH + CARD_GAP;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let targetScroll: number;
    if (direction === "left") {
      targetScroll = Math.max(0, currentScroll - scrollDistance);
    } else {
      targetScroll = Math.min(maxScroll, currentScroll + scrollDistance);
    }

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Certifications
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-default-500">
              <Mouse className="w-4 h-4" />
              <span className="text-sm">Scroll</span>
            </div>
            <div className="sm:flex items-center gap-2 text-default-500">
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          <div className="relative">
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scroll("left")}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm p-2 rounded-full border border-default-200 shadow-lg hover:scale-105 transition-transform"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="inline-flex gap-6 px-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="snap-start"
                    style={{ width: CARD_WIDTH, flexShrink: 0 }}
                  >
                    <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition-transform cursor-pointer h-full">
                      <CardBody className="p-0">
                        <div
                          className="relative w-full h-48 bg-primary/5 flex items-center justify-center"
                          onClick={() =>
                            window.open(cert.credentialUrl, "_blank")
                          }
                        >
                          <div className="flex flex-col items-center gap-4">
                            <Award size={48} className="text-primary/50" />
                            <div className="text-primary/50 font-medium text-sm">
                              {cert.issuer}
                            </div>
                          </div>
                        </div>
                        <div className="p-4 space-y-4">
                          <div
                            className="cursor-pointer group"
                            onClick={() =>
                              window.open(cert.credentialUrl, "_blank")
                            }
                          >
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-small text-default-500">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {cert.pdfUrl && (
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(cert.pdfUrl, "_blank");
                                }}
                                size="sm"
                                color="primary"
                                variant="flat"
                                className="flex-1 text-primary"
                                startContent={<FileText size={16} />}
                              >
                                View PDF
                              </Button>
                            )}
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(cert.credentialUrl, "_blank");
                              }}
                              size="sm"
                              variant="bordered"
                              className="flex-1"
                              startContent={<ExternalLink size={16} />}
                            >
                              Verify
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scroll("right")}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm p-2 rounded-full border border-default-200 shadow-lg hover:scale-105 transition-transform"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
