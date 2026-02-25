export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        rounded-2xl border border-black/10 bg-white/60 px-6 py-4 text-center backdrop-blur-xl
        shadow-[0_8px_24px_rgba(0,0,0,0.05)]
        dark:border-white/10 dark:bg-white/[0.04]
        dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]
      "
    >
      <div className="text-2xl font-semibold text-emerald-500">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-black/50 dark:text-white/60">
        {label}
      </div>
    </div>
  );
}