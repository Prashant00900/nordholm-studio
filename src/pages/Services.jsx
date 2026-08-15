import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services, process } from '../data/services.js'

export default function Services() {
  return (
    <div>
      <section className="container-page pt-16 pb-16 sm:pt-24">
        <p className="eyebrow mb-5">Services</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink dark:text-paper max-w-2xl">
          Everything between a rough idea and a maintainable product.
        </h1>
        <p className="mt-6 text-lg text-ink/65 dark:text-paper/65 leading-relaxed max-w-2xl">
          Engage us for a single sprint of discovery, or the full path through
          design and engineering. Every engagement ends with something your
          team can run without us.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-ink dark:bg-surface-dark text-paper py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our process"
            title="What working with us actually looks like"
            description="A simple, repeatable rhythm — not a black box."
          />
          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-paper/15 hidden sm:block" />
            <div className="space-y-10">
              {process.map((step, i) => (
                <div key={step.title} className="flex gap-6 items-start">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper text-ink font-mono text-xs">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-1.5">{step.title}</h3>
                    <p className="text-sm text-paper/60 leading-relaxed max-w-md">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-ink dark:text-paper max-w-lg mx-auto">
          Not sure which service fits your stage?
        </h2>
        <p className="mt-4 text-ink/60 dark:text-paper/60 max-w-md mx-auto">
          Tell us where you're stuck and we'll recommend a starting point — no obligation.
        </p>
        <Link to="/contact" className="btn-primary mt-8 inline-flex">
          Talk to us <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
