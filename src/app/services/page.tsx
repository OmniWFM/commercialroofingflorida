import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Roofing Services",
  description:
    "TPO, PVC, EPDM, metal roofing, coatings, restoration, and 24/7 emergency repair for commercial buildings across Florida.",
};

const services = [
  {
    title: "Commercial Re-Roofing",
    desc: "Full tear-off and replacement of aging or failing systems with modern, warrantied assemblies.",
  },
  {
    title: "TPO & PVC Single-Ply",
    desc: "Energy-efficient reflective membranes engineered for Florida heat and hurricane wind uplift.",
  },
  {
    title: "EPDM Systems",
    desc: "Proven, durable rubber roofing for long-term performance on low-slope commercial buildings.",
  },
  {
    title: "Metal Roofing",
    desc: "Standing-seam and architectural metal systems built to last decades in coastal conditions.",
  },
  {
    title: "Roof Coatings & Restoration",
    desc: "Seamless, reflective coatings that extend roof life and reduce cooling costs.",
  },
  {
    title: "Repair & 24/7 Emergency",
    desc: "Rapid, professional response to leaks and storm damage — day or night, statewide.",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-charcoal to-black" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-40">
          <span className="inline-block rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
            Our Services
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Complete commercial roofing solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            From new installations to emergency repairs, JR&amp;CO delivers precision roofing systems
            engineered for Florida&apos;s demanding climate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass group rounded-2xl p-7 transition hover:-translate-y-1 hover:border-brand-red/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 11l9-7 9 7M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-800" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Not sure what you need?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Get a free storm report and inspection. Our team will assess your roof and recommend the right
            system for your building and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition hover:bg-gray-100"
          >
            Request a Free Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
