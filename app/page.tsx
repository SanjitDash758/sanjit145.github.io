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
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400 sm:text-xs">
              Python • FastAPI • Systems & Architecture
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-50 sm:text-6xl lg:text-8xl">
              Backend Engineer
            </h1>

            <p className="mt-7 max-w-lg text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-7">
              I build reliable backend systems and explore how automation and AI
              agents can turn software from systems that respond into systems
              that can reason and act.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-medium text-zinc-950 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
              >
                View Projects
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 px-6 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900"
              >
                Let&apos;s Talk
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
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
