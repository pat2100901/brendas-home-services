import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <main className="px-5 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Request care or ask a question.">
            Share what kind of non-medical support would help your family. Brenda’s Home
            Services can follow up with next steps.
          </SectionHeading>
          <div className="mt-8 grid gap-4">
            <a href="tel:3172229557" className="flex items-center gap-4 rounded-2xl bg-white/84 p-5 text-plum-900 shadow-soft">
              <Phone className="size-5 text-teal-700" /> 317-222-9557
            </a>
            <a href="mailto:info@brendashomeservices.com" className="flex items-center gap-4 rounded-2xl bg-white/84 p-5 text-plum-900 shadow-soft">
              <Mail className="size-5 text-teal-700" /> info@brendashomeservices.com
            </a>
            <div className="flex items-start gap-4 rounded-2xl bg-white/84 p-5 text-plum-900 shadow-soft">
              <MapPin className="mt-1 size-5 shrink-0 text-teal-700" />
              <span>47 S Meridian St<br />Indianapolis, IN 46204</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
