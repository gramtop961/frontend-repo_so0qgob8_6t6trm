import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import LocationMap from "./components/LocationMap";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}
