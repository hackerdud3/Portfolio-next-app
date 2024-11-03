import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UiProvider } from "@/providers/ui-provider";
import { NavBar } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nandhikanti Vinay | Full Stack Developer",
  description:
    "Full Stack Developer specialized in React, TypeScript, Python, and Java Spring ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <UiProvider>
          <div className="fixed inset-0 bg-gradient-to-b from-primary-600/10 via-background to-background" />
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="relative min-h-screen ontainer mx-auto pt-16 pb-24">
            <NavBar />
            <main>{children}</main>
          </div>
        </UiProvider>
      </body>
    </html>
  );
}
