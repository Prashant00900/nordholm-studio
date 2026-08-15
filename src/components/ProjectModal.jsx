import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-fadeUp"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-paper dark:bg-surface-dark border border-ink/10 dark:border-paper/10 shadow-2xl animate-fadeUp">
        <div
          className="h-40 sm:h-52 w-full flex items-end p-6"
          style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)` }}
        >
          <h2 id="project-modal-title" className="font-display text-3xl text-paper">
            {project.title}
          </h2>
        </div>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 dark:bg-night/90 text-ink dark:text-paper hover:bg-rust hover:text-paper transition-colors"
        >
          <X size={16} />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
            <div>
              <span className="text-ink/45 dark:text-paper/45">Client — </span>
              <span className="text-ink dark:text-paper font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-ink/45 dark:text-paper/45">Category — </span>
              <span className="text-ink dark:text-paper font-medium">{project.category}</span>
            </div>
            <div>
              <span className="text-ink/45 dark:text-paper/45">Year — </span>
              <span className="text-ink dark:text-paper font-medium">{project.year}</span>
            </div>
          </div>

          <p className="text-ink/75 dark:text-paper/75 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-ink/5 dark:bg-paper/10 text-ink/70 dark:text-paper/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
