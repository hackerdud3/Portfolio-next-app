"use client";

import { Card, CardBody, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Award } from "lucide-react";
import { ChevronRight } from "lucide-react";

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
  const handleClick = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Certifications
          </h2>
          <div className="hidden sm:flex items-center gap-2 text-default-500">
            <span className="text-sm">Scroll</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>

          <div className="overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth snap-x snap-mandatory">
            <div className="inline-flex gap-6 pb-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition-transform cursor-pointer snap-center min-w-[350px]"
                >
                  <CardBody className="p-0">
                    <div
                      className="relative w-full h-48 bg-primary/5 flex items-center justify-center"
                      onClick={() => handleClick(cert.credentialUrl)}
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
                        onClick={() => handleClick(cert.credentialUrl)}
                      >
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-small text-default-500">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          {cert.pdfUrl && (
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleClick(cert.pdfUrl!);
                              }}
                              size="sm"
                              color="primary"
                              variant="flat"
                              className="w-full text-primary"
                            >
                              <FileText size={16} className="mr-1" />
                              View PDF
                            </Button>
                          )}
                        </div>
                        <div className="flex-1">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClick(cert.credentialUrl);
                            }}
                            size="sm"
                            variant="bordered"
                            className="w-full"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            Verify
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
