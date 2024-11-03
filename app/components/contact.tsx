"use client";

import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email",
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="lg:py-20 py-10">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-default-500 text-center mb-8">
            Feel free to reach out for opportunities or just to say hi!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <Card className="bg-background/40 backdrop-blur-md border hover:scale-[1.02] border-white/10">
              <CardBody className="flex flex-row items-center gap-4 py-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-default-500 text-sm">Phone</p>
                  <a
                    href="tel:+16282763863"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +1 (628)-276-3863
                  </a>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02]">
              <CardBody className="flex flex-row items-center gap-4 py-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-default-500 text-sm">Email</p>
                  <a
                    href="mailto:nandhikantivinayk@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    nandhikantivinayk@gmail.com
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>

          <Card className="bg-background/40 backdrop-blur-md border border-white/10">
            <CardBody className="gap-6">
              {status.message && (
                <div
                  className={`p-3 rounded-lg ${
                    status.type === "success"
                      ? "bg-success/10 text-success"
                      : "bg-danger/10 text-danger"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  label="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  variant="bordered"
                  radius="sm"
                  isRequired
                  classNames={{
                    input: "text-white",
                    label: "text-white/80",
                  }}
                />
                <Input
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  variant="bordered"
                  radius="sm"
                  isRequired
                  classNames={{
                    input: "text-white",
                    label: "text-white/80",
                  }}
                />
                <Textarea
                  label="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  variant="bordered"
                  radius="sm"
                  minRows={4}
                  isRequired
                  classNames={{
                    input: "text-white",
                    label: "text-white/80",
                  }}
                />
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  radius="full"
                  className="w-full font-medium"
                  startContent={<Send className="w-4 h-4" />}
                  isLoading={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
