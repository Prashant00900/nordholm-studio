import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import BlueprintMark from '../components/BlueprintMark.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { services, process } from '../data/services.js'
import { projects } from '../data/projects.js'
import { testimonials } from '../data/testimonials.js'
import { useState } from 'react'

const clientLogos = ['Aster Labs', 'Harbor Collective', 'Loom Health', 'Northfield Goods', 'Coverfield', 'Basalt']

export default function Home() {
  const [activeProject, setActiveProject] = useState(null)
  const featured = projects.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-fadeUp">
            <p className="eyebrow mb-5">Product design &amp; engineering studio</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink dark:text-paper">
              We build software that earns its place in someone's day.
            </h1>
            <p className="mt-6 text-lg text-ink/65 dark:text-paper/65 leading-relaxed max-w-lg">
              Nordholm is a nine-person studio pairing product design with frontend
              engineering — for founders who want fewer meetings and better decisions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-secondary">
                View our work
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block text-pine dark:text-pine-light">
            <BlueprintMark className="w-full h-auto" />
          </div>
        </div>

        {/* Client strip */}
        <div className="border-y border-ink/[0.07] dark:border-paper/10">
          <div className="container-page py-6 flex flex-wrap items-center justify-between gap-4">
            {clientLogos.map((name) => (
              <span
                key={name}
                className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-paper/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Four disciplines, one team"
          description="We keep design and engineering under the same roof so nothing gets lost between a sketch and shipped code."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={{ ...service, details: null, deliverables: null }} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink dark:bg-surface-dark text-paper py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A process built for momentum, not ceremony"
            description="No 40-slide kickoff decks. We work in weekly increments you can see and react to."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.title} className="border-t border-paper/20 pt-5">
                <span className="font-mono text-xs text-paper/40">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-paper/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Selected work"
            title="A few products we're proud of"
            description="From fintech dashboards to marketplace apps — case studies from the last two years."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink dark:text-paper hover:text-rust transition-colors mb-12"
          >
            See all projects <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page pb-24">
        <SectionHeading eyebrow="Client feedback" title="Don't just take our word for it" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-pine dark:bg-pine-dark text-paper px-8 py-16 sm:px-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl max-w-xl mx-auto leading-tight">
            Got a product that needs a clearer shape?
          </h2>
          <p className="mt-4 text-paper/75 max-w-md mx-auto">
            Tell us where it's stuck. We'll reply within one business day with next steps, no sales call required.
          </p>
          <Link
            to="/contact"
            className="btn-primary bg-paper text-ink hover:bg-gold hover:text-ink mt-8 inline-flex"
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  )
}
