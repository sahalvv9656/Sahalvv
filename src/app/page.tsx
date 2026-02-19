import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-purple-500/30">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Connect />
    </main>
  );
}
