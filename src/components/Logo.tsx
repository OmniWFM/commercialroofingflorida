export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="6" fill="#111418" />
        <path d="M6 22 L20 10 L34 22" stroke="#C8102E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M9 22 V31 H31 V22" stroke="#F5F6F8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-white">
          JR<span className="text-brand-red">&amp;</span>CO
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Commercial Roofing FL
        </span>
      </span>
    </span>
  );
}
