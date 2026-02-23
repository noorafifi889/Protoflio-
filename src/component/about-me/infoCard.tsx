type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export function InfoCard({ icon, title, desc }: InfoCardProps) {
  return (
    <div
      className="
        rounded-2xl p-5 backdrop-blur-xl transition
        border border-slate-200/70 bg-white shadow-sm hover:bg-slate-50
        dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)] dark:hover:bg-white/[0.06]
      "
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300">
        {icon}
      </div>

      <h4 className="text-base font-semibold text-slate-900 dark:text-emerald-200">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
        {desc}
      </p>
    </div>
  );
}
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-xl">
      <div className="text-2xl font-semibold text-emerald-300 text-black dark:text-emerald-200">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-black/65 dark:text-white/65">{label}</div>
    </div>
  );
}