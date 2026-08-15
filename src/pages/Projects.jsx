import { useMemo, useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Spinner from '../components/Spinner.jsx'
import { projects, categories } from '../data/projects.js'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const [loading, setLoading] = useState(true)

  // Simulate a brief load so the loading state is real and demonstrable.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery =
        query.trim() === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase()) ||
        p.client.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div>
      <section className="container-page pt-16 pb-10 sm:pt-24">
        <p className="eyebrow mb-5">Projects</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink dark:text-paper max-w-2xl">
          Case studies from nine years of practice.
        </h1>
        <p className="mt-6 text-lg text-ink/65 dark:text-paper/65 leading-relaxed max-w-2xl">
          Search by name, or filter by discipline. Click any project for the full story.
        </p>
      </section>

      {/* Search + filter controls */}
      <section className="container-page pb-10">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40 dark:text-paper/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="w-full rounded-full border border-ink/15 dark:border-paper/20 bg-transparent pl-10 pr-4 py-2.5 text-sm text-ink dark:text-paper placeholder:text-ink/40 dark:placeholder:text-paper/40 focus:outline-none focus:border-pine dark:focus:border-pine-light"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`rounded-full px-4 py-2 text-xs font-medium font-mono uppercase tracking-wide transition-colors duration-200 ${
                  category === cat
                    ? 'bg-ink dark:bg-paper text-paper dark:text-ink'
                    : 'bg-ink/5 dark:bg-paper/10 text-ink/60 dark:text-paper/60 hover:bg-ink/10 dark:hover:bg-paper/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container-page pb-24">
        {loading ? (
          <div className="flex items-center justify-center gap-3 py-24 text-ink/50 dark:text-paper/50">
            <Spinner />
            <span className="text-sm">Loading projects…</span>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
              ))
            ) : (
              <EmptyState
                title="No projects match your search"
                description="Try a different keyword, or clear the category filter."
                action={
                  <button
                    onClick={() => {
                      setQuery('')
                      setCategory('All')
                    }}
                    className="btn-secondary"
                  >
                    Clear filters
                  </button>
                }
              />
            )}
          </div>
        )}
      </section>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  )
}
