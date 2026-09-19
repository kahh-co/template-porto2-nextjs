import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <About />
      <Projects />
      <Skills />
      <Process />
      <Archive />
      <Contact />
    </>
  );
}
