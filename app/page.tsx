import { Hero } from "./components/hero";
import { Experience } from "./components/exprience";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Achievements } from "./components/achievements";
import { Certifications } from "./components/certifications";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
    </div>
  );
}
