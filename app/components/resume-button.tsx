"use client";

import { Button } from "@nextui-org/react";
import { Download } from "lucide-react";

export function ResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/vinay_nandhikanti_swe.pdf";
    link.download = "Nandhikanti_Vinay_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      color="primary"
      variant="shadow"
      radius="full"
      size="md"
      startContent={<Download />}
      onClick={handleDownload}
      className="font-medium"
    >
      Download Resume
    </Button>
  );
}

export function MobileResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/vinay_nandhikanti_swe.pdf";
    link.download = "Nandhikanti_Vinay_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      color="primary"
      variant="shadow"
      radius="full"
      size="sm"
      startContent={<Download />}
      onClick={handleDownload}
      className="font-medium"
    >
      Resume
    </Button>
  );
}
