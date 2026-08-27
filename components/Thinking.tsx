const thoughts = [
  {
    number: "01",
    title: "Why AI Agents Need Systems, Not Just Models",
    category: "Agents • Architecture",
    description:
      "Exploring the infrastructure, tools, memory, and control layers required to make agentic software reliable.",
  },
  {
    number: "02",
    title: "From Automation to Agentic Systems",
    category: "Automation • AI",
    description:
      "Where deterministic workflows end and systems capable of reasoning, choosing tools, and acting begin.",
  },
  {
    number: "03",
    title: "Designing a Backend Before Writing Code",
    category: "Architecture • Backend",
    description:
      "A practical approach to understanding the problem, defining boundaries, and making architectural decisions before implementation.",
  },
];

export default function Thinking() {
  return (
    <section
      id="writing"
      className="border-t border-zinc-900 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Thinking
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Ideas, experiments, and
            <span className="block text-zinc-500">
              engineering notes.
            </span>
          </h2>
        </div>

        {/* Thoughts */}
        <div>
          {thoughts.map((thought) => (
            <article
              key={thought.number}
              className="group border-t border-zinc-800 py-9 transition-colors hover:border-zinc-600 sm:py-10"
            >
              <div className="grid gap-5 lg:grid-cols-[70px_1fr_auto] lg:items-start lg:gap-10">
                {/* Number */}
                <span className="font-mono text-xs text-zinc-600">
                  {thought.number}
                </span>

                {/* Content */}
                <div className="max-w-3xl">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                    {thought.category}
                  </p>

                  <h3 className="text-xl font-medium tracking-tight text-zinc-200 transition-colors group-hover:text-zinc-50 sm:text-2xl">
                    {thought.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                    {thought.description}
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 lg:pt-1">
                  <span className="h-2 w-2 rounded-full border border-zinc-700" />

                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    Coming Soon
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