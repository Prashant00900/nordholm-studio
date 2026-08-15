import SectionHeading from '../components/SectionHeading.jsx'
import TeamCard from '../components/TeamCard.jsx'
import StatCard from '../components/StatCard.jsx'
import { team, values, stats } from '../data/team.js'

export default function About() {
  return (
    <div>
      <section className="container-page pt-16 pb-20 sm:pt-24">
        <p className="eyebrow mb-5">About the studio</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink dark:text-paper max-w-2xl">
          We started Nordholm because most software felt rushed — and it showed.
        </h1>
        <p className="mt-6 text-lg text-ink/65 dark:text-paper/65 leading-relaxed max-w-2xl">
          Founded in 2017 by a designer and an engineer who kept getting hired
          separately to fix the same broken handoffs, Nordholm exists to close
          the gap between a good idea and a well-built product. We're a team
          of twelve working from Oslo and San Francisco.
        </p>
      </section>

      {/* Stats */}
      <section className="container-page pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-y border-ink/[0.08] dark:border-paper/10 py-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-page pb-24">
        <SectionHeading
          eyebrow="How we think"
          title="A few things we won't compromise on"
          description="These aren't values-page platitudes — they're the things clients notice in the first two weeks of working with us."
        />
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {values.map((v, i) => (
            <div key={v.title} className="flex gap-5">
              <span className="font-mono text-xs text-ink/35 dark:text-paper/35 pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink dark:text-paper mb-2">{v.title}</h3>
                <p className="text-sm text-ink/60 dark:text-paper/60 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-page pb-24">
        <SectionHeading
          eyebrow="The team"
          title="Twelve people, no account managers"
          description="You work directly with the designers and engineers on your project — from kickoff to handoff."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((person) => (
            <TeamCard key={person.name} person={person} />
          ))}
        </div>
      </section>
    </div>
  )
}
