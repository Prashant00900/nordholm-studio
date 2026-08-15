import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="card group text-left p-0 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-rust"
    >
      <div
        className="h-44 w-full flex items-end p-5 transition-transform duration-500 group-hover:scale-[1.03]"
        style={{
          background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
        }}
      >
        <span className="font-display text-2xl text-paper/95">{project.title}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="eyebrow">{project.category}</span>
          <span className="text-xs text-ink/45 dark:text-paper/45">{project.year}</span>
        </div>
        <p className="text-sm text-ink/65 dark:text-paper/65 leading-relaxed mb-3">
          {project.summary}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-ink dark:text-paper group-hover:text-rust transition-colors">
          View case study <ArrowUpRight size={14} />
        </span>
      </div>
    </button>
  )
}
