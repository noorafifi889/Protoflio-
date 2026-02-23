type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export function InfoCard({ icon, title, desc }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl transition hover:bg-white/[0.06]">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
        {icon}
      </div>
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-white/65">{desc}</p>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-xl">
      <div className="text-2xl font-semibold text-emerald-300">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-white/60">{label}</div>
    </div>
  );
}