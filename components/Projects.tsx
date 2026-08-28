

const projects = [
  {
    number: "01",
    title: "Personal Knowledge & Media Agent",
    category: "AI • Agents • Automation",
    description:
      "A personal agent that helps users understand what they read, build a personal vocabulary, summarize articles, and discover media based on mood and preferences.",
  },
  {
    number: "02",
    title: "Personal Travel Agent",
    category: "AI • APIs • Agent Orchestration",
    description:
      "A travel assistant designed to help users discover destinations, compare routes and transportation options, and build practical travel plans.",
  },
  {
    number: "03",
    title: "Production-Grade Backend Platform",
    category: "FastAPI • PostgreSQL • Redis • Docker",
    description:
      "A backend platform focused on authentication, asynchronous processing, caching, background jobs, event-driven workflows, testing, and scalable architecture.",
  },
  {
    number: "04",
    title: "Intelligent Automation Platform",
    category: "Agents • Workflows • APIs",
    description:
      "An automation platform exploring the combination of deterministic workflows and agent-driven decision making, tool use, and execution.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-900 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Projects I&apos;m building to explore
            <span className="block text-zinc-500">
              backend systems, automation, and AI agents.
            </span>
          </h2>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-t border-zinc-800 py-10 transition-colors hover:border-zinc-600 sm:py-12"
            >
              <div className="grid gap-6 lg:grid-cols-[80px_1fr_auto] lg:items-start lg:gap-10">
                {/* Number */}
                <span className="font-mono text-xs text-zinc-600">
                  {project.number}
                </span>

                {/* Content */}
                <div className="max-w-3xl">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-zinc-500">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-medium tracking-tight text-zinc-100 transition-colors group-hover:text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 lg:pt-1">
                  <span className="h-2 w-2 rounded-full border border-zinc-600" />

                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                    Planned
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}