import { BadgeCheck } from "lucide-react";
import { CaregiverApplication } from "@/components/caregiver-application";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  "Meaningful one-on-one support",
  "Flexible scheduling",
  "Supportive environment",
  "Compassionate team culture"
];

const expectations = [
  "Warm, respectful presence with clients and families",
  "Reliable scheduling and clear communication",
  "Comfort with non-medical home support routines",
  "Willingness to complete background check and trainings"
];

export default function CareersPage() {
  return (
    <main className="px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Careers" title="Bring warmth, patience, and reliability to families.">
            Brenda&rsquo;s Home Services welcomes compassionate caregivers who want meaningful work,
            flexible scheduling, and a professional team that values human connection.
          </SectionHeading>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/84 p-4 text-sm font-semibold text-plum-900 shadow-sm"
              >
                <BadgeCheck className="size-5 text-teal-700" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-teal-100 bg-white/86 p-6 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
              What we look for
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/72">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-[2rem] bg-plum-900 p-6 text-white shadow-luxe">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-200">
              Application tips
            </p>
            <p className="mt-3 text-sm leading-7 text-plum-100">
              The application takes about five minutes. Required fields are name, contact,
              position interest, and consent &mdash; the rest helps us match you to the right
              clients and schedules.
            </p>
          </div>
        </div>

        <CaregiverApplication />
      </div>
    </main>
  );
}
