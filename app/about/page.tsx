import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

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

const steps = [
  {
    label: "Step 1",
    title: "A first conversation",
    copy: "We listen first. Share what daily life looks like, what feels heavy right now, and what would help the home feel calmer."
  },
  {
    label: "Step 2",
    title: "A simple care plan",
    copy: "We shape support around real routines, preferences, and family communication — not a generic checklist."
  },
  {
    label: "Step 3",
    title: "A matched caregiver",
    copy: "We introduce a caregiver whose presence and pace fit the client. Comfort, dignity, and consistency lead the match."
  },
  {
    label: "Step 4",
    title: "Steady, family-rooted care",
    copy: "We stay in touch, adjust as needs change, and keep families informed with calm, respectful communication."
  }
];

const promises = [
  "Non-medical, in-home support only",
  "One-on-one care, not rotating strangers",
  "Family-rooted communication",
  "Indiana HCBS-style support language families understand",
  "Background-checked, trained caregivers",
  "Calm, premium concierge feel from first call"
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

export default function AboutPage() {
  return (
    <main>
      {/* Hero / intro */}
      <section className="px-5 pt-12 sm:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="About" title="Family-rooted support, shaped around real life.">
            Brenda&rsquo;s Home Services provides one-on-one non-medical home support for
            individuals and families across Central Indiana. The experience is calm, personal,
            and grounded in respect.
          </SectionHeading>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Style of care", value: "One-on-one" },
              { label: "Approach", value: "Non-medical" },
              { label: "Service area", value: "Central Indiana" },
              { label: "Tone", value: "Calm & personal" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-plum-100 bg-white/84 p-5 shadow-soft"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
                  {stat.label}
                </p>
                <p className="mt-3 font-serif text-2xl font-semibold text-plum-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-plum-100 shadow-luxe">
            <Image
              src="/images/brendas-hero.png"
              alt="Caregiver offering warm, respectful support at home"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,18,52,0.05)_0%,rgba(38,18,52,0.35)_100%)]" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-plum-900 shadow-sm backdrop-blur">
                Family-rooted care
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-gold-300 text-plum-900 shadow-sm">
                <HeartHandshake className="size-5" />
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
              A note from Brenda
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-normal text-plum-900 sm:text-4xl lg:text-5xl">
              Care should feel like family showed up &mdash; not a shift.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/72 sm:leading-8">
              Brenda&rsquo;s Home Services was built for the moments families know well: a
              parent who needs a little more help with daily routines, a loved one who deserves
              steady companionship, a household that just needs a calmer rhythm. Our promise is
              simple &mdash; respectful, non-medical home support that honors independence and
              dignity at every visit.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-plum-900 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-plum-700"
              >
                Request care
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-6 py-3 text-sm font-bold text-plum-900 transition hover:-translate-y-0.5 hover:border-teal-300"
              >
                See services
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Philosophy */}
      <section className="bg-[linear-gradient(135deg,rgba(255,250,245,0.95)_0%,rgba(255,250,245,0.6)_60%,rgba(15,95,89,0.08)_100%)] px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What guides us"
            title="The reason families trust Brenda&rsquo;s Home Services."
          >
            Three quiet commitments that shape every conversation, every match, and every
            visit.
          </SectionHeading>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`premium-card rounded-[2rem] border p-8 shadow-soft ${
                  index === 0
                    ? "border-plum-800 bg-plum-900 text-white"
                    : "border-plum-100 bg-white/86 text-plum-900"
                }`}
              >
                <div
                  className={`grid size-11 place-items-center rounded-full ${
                    index === 0 ? "bg-white/10 text-gold-200" : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <Check className="size-5" />
                </div>
                <h2 className="mt-6 font-serif text-3xl font-semibold">{value.title}</h2>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 0 ? "text-plum-100" : "text-ink/68"
                  }`}
                >
                  {value.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How care works */}
      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading eyebrow="How it works" title="A calm path from first call to steady care.">
              Four small steps. No pressure, no high-tempo intake. We move at the pace the
              family needs.
            </SectionHeading>
            <div className="rounded-[2rem] border border-teal-100 bg-white/86 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold-300 text-plum-900">
                  <Sparkles className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-500">
                    Our promise
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink/72">
                    Steady, respectful support &mdash; never rushed, never clinical. The
                    same warm tone every visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="premium-card relative rounded-[2rem] border border-plum-100 bg-white/86 p-7 shadow-soft"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="inline-flex rounded-full bg-plum-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-plum-800">
                  {step.label}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-plum-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Promises strip */}
      <section className="px-5 pb-14 sm:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#261234_0%,#3b1c4e_54%,#0f5f59_100%)] px-7 py-10 text-white shadow-luxe sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-200">
                Care promises
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
                Six quiet commitments families notice immediately.
              </h2>
              <p className="mt-5 text-base leading-7 text-plum-100 sm:leading-8">
                The little things make care feel premium &mdash; tone, consistency, follow-through,
                respect for the home.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {promises.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white backdrop-blur"
                >
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-gold-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="px-5 pb-14 sm:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-plum-100 bg-white/84 p-7 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
                Service area
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-normal text-plum-900 sm:text-3xl lg:text-4xl">
                Proudly serving families across Central Indiana.
              </h2>
              <p className="mt-5 text-sm leading-8 text-ink/68">
                Based in Indianapolis with caregivers across nearby counties. Don&rsquo;t see
                your area? Reach out anyway &mdash; we&rsquo;ll let you know what&rsquo;s possible.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-plum-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
                <ShieldCheck className="size-4 text-gold-200" />
                Non-medical support
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {counties.map((county) => (
                <div
                  key={county}
                  className="rounded-2xl border border-plum-100 bg-white/86 p-4 text-sm font-bold text-plum-900 shadow-sm"
                >
                  {county} County
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
