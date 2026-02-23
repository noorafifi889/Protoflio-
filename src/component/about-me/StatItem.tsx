
export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-xl">
      <div className="text-2xl font-semibold text-emerald-300">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-white/60">{label}</div>
    </div>
  );
}