import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-fuchsia-500 blur-3xl mix-blend-screen" />
        <div className="absolute -bottom-24 -right-24 size-[28rem] rounded-full bg-cyan-500 blur-3xl mix-blend-screen" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mx-auto mb-5 flex h-9 w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-xs text-white/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
          <span>We’d love to hear from you</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Whether you have a question, feedback, or just want to say hello, our team is here to help.
        </p>
      </div>
    </section>
  );
}
