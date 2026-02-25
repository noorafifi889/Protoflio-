export function StatLine({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-start gap-4">
      {/* line */}
      <span className="h-15 w-[3px] rounded-full bg-emerald-400" />

      {/* content */}
      <div>
        <p className="text-2xl font-semibold text-emerald-400">{value}</p>
        <p className="mt-1 text-sm text-black/60 dark:text-white/60">{label}</p>
      </div>
    </div>
  );
}