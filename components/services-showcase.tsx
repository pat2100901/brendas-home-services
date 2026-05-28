import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const serviceImages = {
  personalCare:       "/service-images/personal-care.jpg",
  companion:          "/service-images/companion-care.jpg",
  dailyLiving:        "/service-images/daily-living.jpg",
  homemaker:          "/service-images/homemaker.jpg",
  mealPrep:           "/service-images/meal-prep.jpg",
  medication:         "/service-images/medication-reminders.jpg",
  transportation:     "/service-images/transportation.jpg",
  community:          "/service-images/community-support.jpg",
  wellness:           "/service-images/wellness-monitoring.jpg",
  respite:            "/service-images/respite-support.jpg",
  privatePay:         "/service-images/private-pay.jpg",
  waiver:             "/service-images/waiver-support.jpg"
};

export const serviceCards = [
  {
    title: "Personal Care Assistance",
    tag: "Nonskilled ADL support",
    image: serviceImages.personalCare,
    alt: "Caregiver respectfully assisting an older adult with personal routines at home",
    copy: "Respectful one-on-one help with personal routines such as dressing, grooming, mobility, and comfort while preserving dignity and choice."
  },
  {
    title: "Companion Care",
    tag: "Warm presence",
    image: serviceImages.companion,
    alt: "Caregiver sharing tea and calm conversation with an older adult on a sofa",
    copy: "Conversation, presence, gentle prompting, and reassuring support for individuals who benefit from meaningful connection during the day."
  },
  {
    title: "Daily Living Support",
    tag: "Everyday routines",
    image: serviceImages.dailyLiving,
    alt: "Caregiver and older adult unpacking groceries and organizing the day's plan at the kitchen table",
    copy: "Practical support with the small daily tasks, routines, correspondence, and household flow that help home life feel steady."
  },
  {
    title: "Homemaker Assistance",
    tag: "Comfortable home life",
    image: serviceImages.homemaker,
    alt: "Caregiver tidying a living room with cleaning supplies for a calm, cared-for home",
    copy: "Light household help, laundry support, tidying, waste disposal, and safer home routines that keep the environment calm and cared for."
  },
  {
    title: "Meal Preparation",
    tag: "Preference-aware support",
    image: serviceImages.mealPrep,
    alt: "Caregiver and older adult preparing a fresh meal together in a welcoming home kitchen",
    copy: "Meal planning, preparation, serving support, and kitchen clean-up shaped around preferences, routines, and family guidance."
  },
  {
    title: "Medication Reminders",
    tag: "Reminders only",
    image: serviceImages.medication,
    alt: "Caregiver gently walking an older adult through a weekly pill organizer at home",
    copy: "Friendly non-medical reminders to self-administer medication as directed. Brenda’s Home Services does not administer medication."
  },
  {
    title: "Transportation Assistance",
    tag: "Nonmedical trips",
    image: serviceImages.transportation,
    alt: "Caregiver walking arm-in-arm with an older adult along a sunny neighborhood path",
    copy: "Support for errands, community activities, senior centers, and approved nonmedical destinations that help clients stay connected."
  },
  {
    title: "Community Support",
    tag: "Connection beyond home",
    image: serviceImages.community,
    alt: "Caregiver and older adult walking together outdoors near a community setting",
    copy: "Assistance with meaningful community participation, local resources, social routines, and person-centered activities."
  },
  {
    title: "Wellness Monitoring",
    tag: "Attentive check-ins",
    image: serviceImages.wellness,
    alt: "Caregiver calmly noting a wellness check-in with an older adult at a sunny table",
    copy: "Non-medical observation, routine check-ins, and family updates when day-to-day patterns or comfort needs appear to change."
  },
  {
    title: "Respite Support",
    tag: "Relief for caregivers",
    image: serviceImages.respite,
    alt: "Two caregivers sharing a warm, easy moment folding laundry together at home",
    copy: "Temporary or periodic support when a usual caregiver needs time to rest, handle responsibilities, or reset with peace of mind."
  },
  {
    title: "Private Pay Services",
    tag: "Flexible care options",
    image: serviceImages.privatePay,
    alt: "Caregiver walking an older couple through a private-pay care plan at their dining table",
    copy: "Personalized non-medical support for families who want added help beyond program-authorized services or a more flexible schedule."
  },
  {
    title: "Aged & Disabled Waiver Support",
    tag: "Indiana HCBS-style support",
    image: serviceImages.waiver,
    alt: "Caregiver and family discussing person-centered support options in a warm home setting",
    copy: "Support aligned with person-centered daily living needs for eligible Indiana waiver participants, based on approval and authorization."
  }
];

type ServicesShowcaseProps = {
  variant?: "home" | "page";
};

export function ServicesShowcase({ variant = "home" }: ServicesShowcaseProps) {
  const isPage = variant === "page";

  return (
    <section className={isPage ? "px-5 py-10 sm:px-8 lg:py-14" : "bg-white px-5 py-14 sm:px-8 lg:py-20"}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Non-medical support that fits real daily life."
          >
            Brenda’s Home Services provides one-on-one help with personal routines, companionship,
            homemaker needs, respite, and community connection while honoring dignity and independence.
          </SectionHeading>

          <div className="rounded-[2rem] border border-teal-100 bg-[linear-gradient(135deg,rgba(38,18,52,0.94),rgba(15,95,89,0.9))] p-6 text-white shadow-luxe">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold-300 text-plum-900">
                <ShieldCheck className="size-6" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-100">Non-medical care</p>
                <p className="mt-3 text-sm leading-7 text-plum-50">
                  Services are supportive, personal, and home-based. We do not provide skilled
                  nursing, medical treatment, therapy, or medication administration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, index) => (
            <article
              key={service.title}
              className="premium-card group overflow-hidden rounded-[2rem] border border-plum-100 bg-white shadow-soft"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <div
                  aria-label={service.alt}
                  role="img"
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,18,52,0.04)_0%,rgba(38,18,52,0.32)_62%,rgba(38,18,52,0.76)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/40 bg-white/88 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700 shadow-sm backdrop-blur">
                    {service.tag}
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-300 text-plum-900 shadow-sm">
                    <BadgeCheck className="size-5" />
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-3xl font-semibold tracking-normal text-plum-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink/68">{service.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="rounded-[2rem] border border-gold-200 bg-gold-100/45 p-6 text-sm font-semibold leading-7 text-plum-900">
            Brenda’s Home Services provides non-medical home support services. Service availability
            may depend on individual needs, family preferences, program rules, and authorization.
          </div>
          {!isPage ? (
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-plum-900 px-7 py-4 text-sm font-bold text-white shadow-luxe transition hover:-translate-y-0.5 hover:bg-plum-700"
            >
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
          ) : (
            <div className="rounded-[2rem] border border-teal-100 bg-white/84 p-6 shadow-soft">
              <div className="flex items-center gap-3 text-plum-900">
                <HeartHandshake className="size-6 text-teal-700" />
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Care planning</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/68">
                We shape support around routines, preferences, home safety, and family communication.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
