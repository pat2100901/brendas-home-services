import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { ServicesShowcase } from "@/components/services-showcase";

const reasons = [
  "One-on-one support that feels personal instead of rushed",
  "A warm, family-rooted approach to daily living assistance",
  "Clear communication for families and loved ones",
  "Non-medical care delivered with respect and consistency",
  "Premium, boutique service with a calm concierge feel",
  "Central Indiana roots with a compassionate local presence"
];

const counties = [
  "Boone",
  "Hamilton",
  "Hancock",
  "Hendricks",
  "Henry",
  "Johnson",
  "Madison",
  "Marion",
  "Morgan",
  "Shelby"
];

const values = [
  {
    title: "Mission",
    copy: "Our mission is to provide compassionate, dependable, and respectful home support services that help individuals maintain comfort, dignity, independence, and quality of life within their own homes and communities."
  },
  {
    title: "Vision",
    copy: "Our vision is to become a trusted leader in non-medical home support by building meaningful relationships, empowering families, and delivering care that feels personal, reliable, and family-centered."
  },
  {
    title: "Philosophy",
    copy: "We believe great care begins with compassion, respect, and human connection. Every individual deserves support that honors their independence, routines, preferences, and personal dignity."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,250,245,0.98)_0%,rgba(255,250,245,0.9)_34%,rgba(255,250,245,0.3)_62%,rgba(38,18,52,0.32)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fffaf5] to-transparent" />
        <Image
          src="/images/brendas-hero.png"
          alt="Professional caregiver providing warm non-medical support at home"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:py-24">
          <div className="min-w-0 max-w-2xl soft-reveal">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold-200/80 bg-white/86 px-4 py-2 text-sm font-bold leading-5 text-plum-900 shadow-sm backdrop-blur">
              <Sparkles className="size-4 shrink-0 text-gold-500" />
              <span className="min-w-0">Indiana non-medical home support</span>
            </div>
            <h1 className="mt-7 font-serif text-4xl font-semibold tracking-normal text-plum-900 sm:text-6xl lg:text-7xl">
              Care that feels personal.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/75 sm:text-xl sm:leading-8">
              Compassionate support, right at home. Brenda’s Home Services provides dependable
              non-medical home support for individuals and families across Central Indiana.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-plum-900 px-7 py-4 text-sm font-bold text-white shadow-luxe transition hover:-translate-y-0.5 hover:bg-plum-700"
              >
                Request Care
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 bg-white/86 px-7 py-4 text-sm font-bold text-plum-900 shadow-sm transition hover:-translate-y-0.5 hover:border-gold-300 hover:text-teal-700"
              >
                Join Our Team
                <BriefcaseBusiness className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["One-on-one care", "Family-rooted", "Non-medical support"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/80 bg-white/78 p-4 text-sm font-bold text-plum-900 shadow-sm backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About Brenda’s"
              title="A boutique home support experience with family at the center."
            >
              Brenda’s Home Services is built for individuals and families who want steady,
              personal, non-medical support in a calm and welcoming way.
            </SectionHeading>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-500"
            >
              Learn about us
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-5">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`premium-card rounded-[2rem] border p-7 shadow-soft ${
                  index === 0
                    ? "border-plum-800 bg-plum-900 text-white"
                    : "border-plum-100 bg-white/86 text-plum-900"
                }`}
              >
                <div className={`grid size-11 place-items-center rounded-full ${index === 0 ? "bg-white/10 text-gold-200" : "bg-teal-50 text-teal-700"}`}>
                  <Check className="size-5" />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-semibold">{value.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-plum-100" : "text-ink/68"}`}>
                  {value.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServicesShowcase />

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading eyebrow="Why families choose us" title="Calm, personal support families can feel.">
            The experience is designed to feel warm, organized, and human from the first call to
            every visit in the home.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={reason} className="premium-card rounded-[1.6rem] border border-white bg-white/84 p-6 shadow-soft">
                <div className="grid size-11 place-items-center rounded-full bg-plum-50 text-sm font-bold text-plum-800">
                  0{index + 1}
                </div>
                <p className="mt-6 text-lg font-semibold leading-7 text-plum-900">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#261234_0%,#3b1c4e_54%,#0f5f59_100%)] px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-200">Counties we serve</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Proudly serving families across Central Indiana.
            </h2>
            <p className="mt-5 text-lg leading-8 text-plum-100">
              Based in Indianapolis, Brenda’s Home Services supports clients and families across
              nearby communities with one-on-one non-medical home support.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {counties.map((county) => (
              <div key={county} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-bold text-white backdrop-blur">
                {county} County
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto overflow-hidden rounded-[2.5rem] bg-plum-900 shadow-luxe">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.78fr]">
            <div className="p-7 text-white sm:p-10 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-200">Careers</p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
                Meaningful work for compassionate caregivers.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-plum-100">
                Join a supportive environment where warm presence, reliability, and respect matter.
                Brenda’s Home Services welcomes caregivers who want flexible scheduling and work
                that makes a real difference for families.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Compassionate team", "Flexible scheduling", "Supportive environment"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold text-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-7 sm:p-10 lg:p-14">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white">
                <BriefcaseBusiness className="size-10 text-gold-200" />
                <h3 className="mt-7 font-serif text-3xl font-semibold">Apply to join the team</h3>
                <p className="mt-4 text-sm leading-7 text-plum-100">
                  Share your availability, experience, and references. Our caregiver application
                  takes about five minutes and goes straight to the Brenda&rsquo;s hiring inbox.
                </p>
                <Link href="/careers" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-4 text-sm font-bold text-plum-900 transition hover:-translate-y-0.5 hover:bg-gold-200">
                  Start application
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Contact" title="Start a thoughtful care conversation.">
              Tell us what kind of non-medical support would help your family feel more steady,
              comfortable, and connected at home.
            </SectionHeading>
            <div className="mt-8 grid gap-4">
              <a href="tel:3172229557" className="premium-card flex items-center gap-4 rounded-[1.5rem] border border-plum-100 bg-white/86 p-5 shadow-soft">
                <span className="grid size-11 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Phone</span>
                  <span className="block text-lg font-semibold text-plum-900">317-222-9557</span>
                </span>
              </a>
              <a href="mailto:info@brendashomeservices.com" className="premium-card flex items-center gap-4 rounded-[1.5rem] border border-plum-100 bg-white/86 p-5 shadow-soft">
                <span className="grid size-11 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Email</span>
                  <span className="block text-base font-semibold text-plum-900 sm:text-lg">info@brendashomeservices.com</span>
                </span>
              </a>
              <div className="premium-card flex items-start gap-4 rounded-[1.5rem] border border-plum-100 bg-white/86 p-5 shadow-soft">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Address</span>
                  <span className="block text-lg font-semibold leading-7 text-plum-900">
                    47 S Meridian St<br />Indianapolis, IN 46204
                  </span>
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
