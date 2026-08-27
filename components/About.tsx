export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-900 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            From chemistry to
            <span className="block text-zinc-500">
              software engineering.
            </span>
          </h2>
        </div>

        {/* Current Focus */}
        <div className="relative mb-6 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/20 p-8 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/[0.02] blur-3xl" />

          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Current Focus
          </p>

          <h3 className="text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
            Backend Engineering
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "FastAPI",
              "Databases",
              "Distributed Systems",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary Areas */}
        <div className="grid gap-6 sm:grid-cols-2">
          <InfoBlock
            label="Background"
            items={["Chemistry → Software Engineering"]}
          />

          <InfoBlock
            label="Exploring"
            items={[
              "AI Agents",
              "Automation",
              "Intelligent Systems",
            ]}
          />
        </div>

        {/* Direction */}
        <div className="mt-6 border-t border-zinc-800 pt-8">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Direction
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Systems Architecture",
              "Agentic Software",
              "Scalable Backend Systems",
            ].map((item) => (
              <span
                key={item}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="border-t border-zinc-800 py-7">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>

      <div className="space-y-2">
        {items.map((item) => (
          <p
            key={item}
            className="text-lg tracking-tight text-zinc-300"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}