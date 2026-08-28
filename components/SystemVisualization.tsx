"use client";

import type { CSSProperties } from "react";

export default function SystemVisualization() {
  return (
    <div className="w-full max-w-lg [perspective:1200px]">
      <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-5 shadow-2xl backdrop-blur-sm transition-transform duration-700 hover:rotate-0 sm:p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              System Flow
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Backend → Agent → Automation
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="font-mono text-[10px] text-zinc-600">ONLINE</span>
          </div>
        </div>

        {/* System Flow */}
        <div className="flex flex-col items-center">
          <SystemNode
            label="REQUEST"
            description="Incoming operation"
            delay="0ms"
            activeDelay="0ms"
          />

          <Connector delay="700ms" />

          <SystemNode
            label="FASTAPI"
            description="API layer"
            highlighted
            delay="900ms"
            activeDelay="900ms"
          />

          <Connector delay="1600ms" />

          <div className="grid w-full grid-cols-2 gap-3">
            <SystemNode
              label="DATABASE"
              description="Persistent state"
              delay="1800ms"
              activeDelay="1800ms"
            />

            <SystemNode
              label="AGENT"
              description="Reason + tools"
              highlighted
              delay="2100ms"
              activeDelay="2100ms"
            />
          </div>

          <div className="flex w-full justify-end">
            <div className="mr-[25%] h-7 w-px bg-zinc-800" />
          </div>

          <SystemNode
            label="TOOLS"
            description="External capabilities"
            delay="2600ms"
            activeDelay="2600ms"
          />

          <Connector delay="3200ms" />

          <SystemNode
            label="AUTOMATION"
            description="Execute + act"
            highlighted
            delay="3400ms"
            activeDelay="3400ms"
          />
        </div>

        {/* Animated system signal */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
          <span className="system-signal" />
        </div>
      </div>
    </div>
  );
}

function SystemNode({
  label,
  description,
  highlighted = false,
  delay,
  activeDelay,
}: {
  label: string;
  description: string;
  highlighted?: boolean;
  delay: string;
  activeDelay: string;
}) {
  return (
    <div
      style={
        {
          animationDelay: delay,
          "--active-delay": activeDelay,
        } as CSSProperties
      }
      className={`system-node relative z-10 w-full rounded-xl border px-4 py-3 ${
        highlighted
          ? "border-zinc-700 bg-zinc-800/80"
          : "border-zinc-800 bg-zinc-950/70"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs font-medium tracking-wide text-zinc-200">
          {label}
        </span>

        <span className="text-[10px] text-zinc-600">{description}</span>
      </div>
    </div>
  );
}

function Connector({ delay }: { delay: string }) {
  return (
    <div
      style={{ animationDelay: delay }}
      className="system-connector relative z-10 flex h-6 items-center justify-center"
    >
      <div className="h-full w-px bg-zinc-800" />
    </div>
  );
}
