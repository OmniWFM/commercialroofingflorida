import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Free Inspection",
  description:
    "Request a free commercial roof storm report and inspection from JR&CO. Call 833-JRCO-USA or send us a message. 24/7 emergency service across Florida.",
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-charcoal to-black" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-40">
          <span className="inline-block rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
            Contact Us
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Get your free storm report &amp; inspection
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Tell us about your building and we&apos;ll be in touch fast. For emergencies, call us any time —
            our team responds 24/7 across Florida.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">Reach us directly</h2>
            <div className="mt-8 space-y-6">
              <div className="glass rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-gray-400">Phone</p>
                <a href="tel:8335726872" className="mt-1 block text-xl font-bold text-white">
                  833-JRCO-USA
                </a>
              </div>
              <div className="glass rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-gray-400">Service Area</p>
                <p className="mt-1 text-lg font-semibold text-white">Statewide Florida</p>
                <p className="text-sm text-gray-400">Orlando · Fort Myers · Tallahassee &amp; beyond</p>
              </div>
              <div className="glass rounded-2xl p-6">
                <p className="text-sm uppercase tracking-wider text-gray-400">Emergency</p>
                <p className="mt-1 text-lg font-semibold text-white">24/7 Rapid Response</p>
              </div>
            </div>
          </div>

          <form className="glass rounded-3xl p-8">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-brand-red"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-brand-red"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-brand-red"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">How can we help?</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-brand-red"
                  placeholder="Tell us about your building and roofing needs"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Request Free Inspection
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
