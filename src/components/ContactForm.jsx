import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    // Basic client-side validation
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }

    setStatus("Thanks! Your message has been captured locally.");
    form.reset();
  };

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Send us a message</h2>
            <p className="mt-2 max-w-prose text-white/70">
              Fill out the form and we’ll get back to you soon. Your information stays private and is used only to contact you back.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/80">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:border-fuchsia-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:border-fuchsia-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-white/80">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:border-fuchsia-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-y rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:border-fuchsia-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/60">{status || "We’ll reply by email."}</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
              >
                <Send className="h-4 w-4" />
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
