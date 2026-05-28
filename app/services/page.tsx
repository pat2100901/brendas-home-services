import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServicesShowcase } from "@/components/services-showcase";

const careNotes = [
  "Person-centered routines shaped around comfort, dignity, and independence",
  "Non-medical support for daily living, companionship, homemaker needs, and respite",
  "Indiana HCBS-style terminology kept clear for families without sounding clinical"
];

export default function ServicesPage() {
  return (
    <main>
      <section className="px-5 pt-10 pb-6 sm:px-8 lg:pt-14 lg:pb-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">Services</p>
            <h1 className="mt-3 max-w-4xl font-serif text-5xl font-semibold tracking-normal text-plum-900 sm:text-6xl">
              Support that feels practical, personal, and family-centered.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              Brenda’s Home Services offers non-medical one-on-one care for daily routines,
              personal support, companionship, home life, community connection, and family relief.
            </p>
          </div>
          <div className="rounded-[2rem] border border-plum-100 bg-white/84 p-6 shadow-soft">
            <div className="grid gap-4">
              {careNotes.map((note) => (
                <div key={note} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-700" />
                  <p className="text-sm font-semibold leading-7 text-plum-900">{note}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum-900 px-6 py-4 text-sm font-bold text-white shadow-luxe transition hover:-translate-y-0.5 hover:bg-plum-700"
            >
              Request Care
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <ServicesShowcase variant="page" />
    </main>
  );
}
