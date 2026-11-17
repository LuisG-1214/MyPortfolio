import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Stack } from "../sections/Stack";
import { Services } from "../sections/Services";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Stack />
      <About />
      <Contact />
    </>
  );
}
