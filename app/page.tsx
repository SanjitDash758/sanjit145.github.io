import Navbar from "@/components/Navbar";
import SystemVisualization from "@/components/SystemVisualization";
import Projects from "@/components/Projects";
import EngineeringGraph from "@/components/EngineeringGraph";
import About from "@/components/About";
import Thinking from "@/components/Thinking";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
              Python • FastAPI • Systems & Architecture
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Backend Engineer
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I build reliable backend systems and explore how automation and AI
              agents can turn software from systems that respond into systems
              that can reason and act.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 px-6 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* System Visualization */}
          <div className="flex justify-center lg:justify-end">
            <SystemVisualization />
          </div>
        </div>
      </section>
      <Projects />
      <EngineeringGraph />
      <About />
      <Thinking />
      <Contact />
    </main>
  );
}
