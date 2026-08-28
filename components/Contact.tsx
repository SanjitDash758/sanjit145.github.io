export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-900 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Let&apos;s Build
          </p>

          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            Have a problem
            <span className="block text-zinc-500">
              worth solving?
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            I&apos;m interested in backend systems, automation, and
            intelligent software.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-7 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02]"
          >
            Get in touch
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col gap-5 border-t border-zinc-800 pt-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-zinc-400">
              Sanjit
            </p>

            <p className="mt-1 font-mono">
              Python • FastAPI • Systems
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-zinc-300"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition-colors hover:text-zinc-300"
            >
              LinkedIn
            </a>

            <span>© 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}