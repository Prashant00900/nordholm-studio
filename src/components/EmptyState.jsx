import { SearchX } from 'lucide-react'

export default function EmptyState({ title = 'Nothing here yet', description, action }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/5 dark:bg-paper/10 text-ink/40 dark:text-paper/40 mb-5">
        <SearchX size={22} />
      </div>
      <h3 className="font-display text-xl text-ink dark:text-paper mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-ink/55 dark:text-paper/55 max-w-sm mb-5">{description}</p>
      )}
      {action}
    </div>
  )
}
