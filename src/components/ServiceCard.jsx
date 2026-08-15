export default function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <div className="card p-7 hover:shadow-xl hover:shadow-ink/[0.04] hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine/10 text-pine dark:text-pine-light mb-5">
        <Icon size={20} />
      </div>
      <h3 className="font-display text-xl text-ink dark:text-paper mb-2">{service.title}</h3>
      <p className="text-sm text-ink/65 dark:text-paper/65 leading-relaxed mb-4">{service.summary}</p>
      {service.details && (
        <p className="text-sm text-ink/55 dark:text-paper/55 leading-relaxed mb-5">{service.details}</p>
      )}
      {service.deliverables && (
        <ul className="space-y-2 border-t border-ink/[0.07] dark:border-paper/10 pt-4">
          {service.deliverables.map((d) => (
            <li key={d} className="text-xs text-ink/60 dark:text-paper/60 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-rust" />
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
