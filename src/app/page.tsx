import Loader from "@/components/Loader";
import Background3D from "@/components/Background3D";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-accent-blue/30 selection:text-white">
      <Loader />
      <Background3D />
      <Hero />
      <About />
      <Projects />
      
      {/* Footer / Contact snippet */}
      <footer className="relative z-10 py-10 border-t border-white/10 text-center text-white/50 glass-card mt-32">
        <p className="font-mono text-sm">
          © 2026 Pawan Kumar. All systems operational. Designed in Siddharthnagar.
        </p>
      </footer>
    </main>
  );
}
