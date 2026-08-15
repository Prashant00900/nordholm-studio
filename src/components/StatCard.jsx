export default function StatCard({ value, label }) {
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-4xl sm:text-5xl text-ink dark:text-paper">{value}</p>
      <p className="mt-1 text-sm text-ink/55 dark:text-paper/55">{label}</p>
    </div>
  )
}
