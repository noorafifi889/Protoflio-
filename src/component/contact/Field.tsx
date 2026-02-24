export function Field({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
  name?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium mb-3 text-slate-800 dark:text-white">
        {label}
      </label>
   <input
  type={type}
  placeholder={placeholder}
  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 mb-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:border-black/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/10"
/>
    </div>
  );
}