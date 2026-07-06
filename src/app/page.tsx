import Link from "next/link";

const stats = [
  { value: "40+", label: "Years of Roofing Experience" },
  { value: "12", label: "States Serviced" },
  { value: "0.61", label: "Safety Rating (EMR)" },
];

const services = [
  {
    title: "TPO & PVC Systems",
    desc: "Energy-efficient single-ply membranes built for Florida heat, UV, and hurricane-force wind uplift.",
  },
  {
    title: "Metal Roofing",
    desc: "Durable standing-seam and architectural metal systems engineered for decades of Florida performance.",
  },
  {
    title: "Roof Coatings & Restoration",
    desc: "Extend roof life and cut cooling costs with reflective, seamless coating systems.",
  },
  {
    title: "Repair & 24/7 Service",
    desc: "Rapid, professional emergency response when storms hit — day or night, statewide.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-charcoal to-black" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 22px)",
          }}
        />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
              Veteran-Owned · Family-Operated · Statewide FL
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Relentless in our pursuit to{" "}
              <span className="gradient-text">build the best tomorrow.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              For over four decades, JR&amp;CO has protected Florida&apos;s commercial buildings with
              precision roofing, cladding, and restoration. We don&apos;t just build structures — we build
              lasting relationships through trust, craftsmanship, and exceptional service.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-brand-red px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Get a Free Storm Report &amp; Inspection
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-brand-charcoal">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl font-extrabold gradient-text">{s.value}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Building envelope solutions</h2>
          <p className="mt-4 text-gray-400">
            From complex commercial re-roofs to rapid emergency repairs, no job is outside our wheelhouse.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Why us */}
      <section className="border-y border-white/10 bg-brand-charcoal">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Trusted to protect what matters
            </h2>
            <p className="mt-5 leading-relaxed text-gray-300">
              Guided by a culture of care for our employees and customers, we prioritize relationships,
              professionalism, and unmatched expertise. From the first inspection to the final warranty
              walkthrough, you get a partner who treats your building like our own.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Industry-leading safety record & EMR",
                "Manufacturer-certified installation crews",
                "Transparent scopes and warranty support",
                "24/7 emergency storm response statewide",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <span className="mt-1 text-brand-red">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass flex flex-col justify-center rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white">24/7 Emergency Service</h3>
            <p className="mt-3 text-gray-400">
              Rapid, professional response when Florida weather strikes. Call now and our team mobilizes.
            </p>
            <a
              href="tel:8335726872"
              className="mt-6 inline-block rounded-full bg-brand-red px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Call 833-JRCO-USA
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-800" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get your free storm report &amp; inspection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Join the thousands of clients who trust JR&amp;CO for their building needs. Whether you&apos;re
            starting a new project or maintaining an existing structure, our team is ready.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition hover:bg-gray-100"
          >
            Schedule a Free Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
