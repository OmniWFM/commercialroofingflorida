import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "JR&CO is a veteran-owned, family-operated commercial roofing contractor with over four decades of experience protecting Florida's buildings.",
};

const values = [
  {
    title: "Relationships First",
    desc: "We build lasting partnerships through trust, transparency, and doing what we say we'll do.",
  },
  {
    title: "Uncompromising Safety",
    desc: "An industry-leading EMR and a culture where every crew member goes home safe, every day.",
  },
  {
    title: "Craftsmanship",
    desc: "Manufacturer-certified crews and precise workmanship that stands up to Florida's toughest weather.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-charcoal to-black" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-40">
          <span className="inline-block rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
            About JR&amp;CO
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Four decades of building the best tomorrow
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            JR&amp;CO is a veteran-owned, family-operated construction company specializing in roofing,
            cladding, and solar installation. From complex commercial projects to innovative systems, no
            job is outside our wheelhouse — we bring experience, precision, and a commitment to delivering
            the best solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">Who we are</h2>
            <p className="mt-5 leading-relaxed text-gray-300">
              Guided by a culture of care for our employees and customers, we prioritize relationships,
              professionalism, and unmatched expertise. At JR&amp;CO, we don&apos;t just build structures —
              we build lasting relationships through trust, craftsmanship, and exceptional service.
            </p>
            <p className="mt-5 leading-relaxed text-gray-300">
              Across Florida, building owners and facility managers rely on us to protect their most
              valuable assets. Whether it&apos;s a new roof system, a full restoration, or a middle-of-the-night
              storm emergency, our team shows up ready to perform.
            </p>
          </div>
          <div className="grid gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-7">
                <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-800" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Let&apos;s protect your building</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Ready to work with a roofing partner who treats your property like their own?
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition hover:bg-gray-100"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
