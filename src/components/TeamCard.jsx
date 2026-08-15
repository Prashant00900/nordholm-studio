export default function TeamCard({ person }) {
  return (
    <div className="card p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/[0.04]">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pine text-paper font-display text-lg mb-5">
        {person.initials}
      </div>
      <h3 className="font-display text-lg text-ink dark:text-paper">{person.name}</h3>
      <p className="text-xs eyebrow mt-1 mb-3">{person.role}</p>
      <p className="text-sm text-ink/60 dark:text-paper/60 leading-relaxed">{person.bio}</p>
    </div>
  )
}
