import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export function SiteFooter() {
  return (
    <footer className="bg-plum-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_0.7fr_1.05fr]">
        <div>
          <Logo inverse />
          <p className="mt-6 max-w-md text-sm leading-7 text-plum-100">
            Family-rooted non-medical home support designed to help clients feel respected,
            steady, and cared for in the comfort of home and community.
          </p>
          <p className="mt-5 inline-flex rounded-full border border-gold-200/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-200">
            Non-medical home support
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-gold-200">Explore</h2>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-plum-100 hover:text-gold-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-gold-200">Contact</h2>
          <div className="mt-5 grid gap-4 text-sm text-plum-100">
            <a className="flex items-center gap-3 hover:text-gold-200" href="tel:3172229557">
              <Phone className="size-4 text-gold-200" /> 317-222-9557
            </a>
            <a className="flex items-center gap-3 hover:text-gold-200" href="mailto:info@brendashomeservices.com">
              <Mail className="size-4 text-gold-200" /> info@brendashomeservices.com
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold-200" />
              <span>47 S Meridian St<br />Indianapolis, IN 46204</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-plum-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Brenda’s Home Services. All Rights Reserved.</p>
          <p>Designed by Gobex</p>
        </div>
      </div>
    </footer>
  );
}
