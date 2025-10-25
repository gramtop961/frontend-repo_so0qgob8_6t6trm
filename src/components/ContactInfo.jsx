import { Mail, Phone, MapPin, Clock } from "lucide-react";

const info = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
    hint: "We typically respond within a business day.",
  },
  { icon: Phone, title: "Phone", value: "+1 (555) 012-3456", hint: "Mon–Fri, 9am–5pm" },
  { icon: MapPin, title: "Address", value: "123 Waterfront Ave, San Francisco, CA", hint: "Visit our studio" },
  { icon: Clock, title: "Hours", value: "Mon–Fri: 9am–6pm", hint: "Support always on email" },
];

export default function ContactInfo() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {info.map(({ icon: Icon, title, value, hint }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2.5 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-medium tracking-wide text-white/80">{title}</h3>
              </div>
              <p className="text-base font-medium text-white">{value}</p>
              <p className="mt-1 text-sm text-white/60">{hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
