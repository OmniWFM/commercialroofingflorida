import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
            Florida&apos;s trusted commercial roofing contractor. Over four decades of veteran-owned,
            family-operated craftsmanship protecting buildings across the Sunshine State.
          </p>
          <a href="tel:8335726872" className="mt-5 inline-block text-lg font-bold text-white">
            833-JRCO-USA
          </a>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Orlando</li>
            <li>Fort Myers</li>
            <li>Tallahassee</li>
            <li>Statewide Florida</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} JR&amp;CO Commercial Roofing Florida. All rights reserved.
      </div>
    </footer>
  );
}
