import { Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card p-7">
      <Quote size={22} className="text-gold mb-4" />
      <p className="text-ink/75 dark:text-paper/75 leading-relaxed mb-6">
        “{testimonial.quote}”
      </p>
      <div>
        <p className="text-sm font-medium text-ink dark:text-paper">{testimonial.name}</p>
        <p className="text-xs text-ink/50 dark:text-paper/50">{testimonial.role}</p>
      </div>
    </div>
  )
}
