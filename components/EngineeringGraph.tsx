const nodes = [
  {
    id: "problem",
    label: "PROBLEM",
    description: "What are we actually trying to solve?",
    shape: "diamond",
  },
  {
    id: "understand",
    label: "UNDERSTAND",
    description: "Understand the context, constraints, and real need.",
    shape: "circle",
  },
  {
    id: "analyze",
    label: "ANALYZE",
    description: "Break the problem into smaller, meaningful parts.",
    shape: "diamond",
  },
  {
    id: "design",
    label: "DESIGN",
    description: "Shape the architecture before writing the code.",
    shape: "square",
  },
  {
    id: "build",
    label: "BUILD",
    description: "Turn the design into reliable software.",
    shape: "square",
  },
  {
    id: "automate",
    label: "AUTOMATE",
    description:
      "Remove repetitive work through systems and intelligent automation.",
    shape: "hexagon",
  },
  {
    id: "optimize",
    label: "OPTIMIZE",
    description: "Measure, debug, simplify, and improve performance.",
    shape: "triangle",
  },
  {
    id: "improve",
    label: "IMPROVE",
    description: "Feed what we learn back into the system.",
    shape: "circle",
  },
];

export default function EngineeringGraph() {
  return (
    <section id="engineering" className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Engineering Approach
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            How I think about
            <span className="block text-zinc-500">building systems.</span>
          </h2>
        </div>

        {/* Graph */}
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/20 p-6 sm:p-10 lg:p-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            {/* Problem */}
            <GraphNode node={nodes[0]} />

            <GraphConnector />

            {/* Understand */}
            <GraphNode node={nodes[1]} />

            <GraphConnector />

            {/* Analyze / Design */}
            <div className="grid w-full max-w-2xl grid-cols-2 gap-8">
              <GraphNode node={nodes[2]} />
              <GraphNode node={nodes[3]} />
            </div>

            {/* Merge */}
            <GraphConnector />

            {/* Build */}
            <GraphNode node={nodes[4]} />

            <div className="my-8 h-px w-full max-w-2xl bg-zinc-800" />

            {/* Automate / Optimize */}
            <div className="grid w-full max-w-2xl grid-cols-2 gap-8">
              <GraphNode node={nodes[5]} />
              <GraphNode node={nodes[6]} />
            </div>

            <GraphConnector />

            {/* Improve */}
            <GraphNode node={nodes[7]} />

            <div className="mt-8 h-10 w-px bg-zinc-800" />

            <p className="max-w-md text-center font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
              Continuous feedback → better systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GraphNode({
  node,
}: {
  node: {
    label: string;
    description: string;
    shape: string;
  };
}) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div
        className={`graph-node group/node relative flex h-24 w-24 items-center justify-center border border-zinc-800 bg-zinc-950 transition-all duration-500 group-hover:bg-zinc-900 ${
          node.shape === "circle"
            ? "rounded-full"
            : node.shape === "diamond"
              ? "rotate-45 rounded-lg"
              : node.shape === "triangle"
                ? "clip-triangle"
                : node.shape === "hexagon"
                  ? "clip-hexagon"
                  : "rounded-xl"
        }`}
      >
        <span
          className={`relative z-10 font-mono text-[10px] font-medium tracking-wider text-zinc-200 ${
            node.shape === "diamond" ? "-rotate-45" : ""
          }`}
        >
          {node.label}
        </span>
      </div>

      <p className="mt-4 max-w-[180px] text-xs leading-5 text-zinc-500 transition-colors group-hover:text-zinc-300">
        {node.description}
      </p>
    </div>
  );
}

function GraphConnector() {
  return (
    <div className="flex h-10 items-center justify-center">
      <div className="h-full w-px bg-zinc-800" />
    </div>
  );
}
