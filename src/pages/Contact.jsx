import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import FormField from '../components/FormField.jsx'
import FAQItem from '../components/FAQItem.jsx'
import Spinner from '../components/Spinner.jsx'
import { validateContactForm } from '../utils/validate.js'
import { faqs } from '../data/faqs.js'

const initialValues = { name: '', email: '', budget: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e2) => ({ ...e2, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true)
      // Simulated submission — no backend wired up in this frontend-only build.
      setTimeout(() => {
        setSubmitting(false)
        setSubmitted(true)
        setValues(initialValues)
      }, 1200)
    }
  }

  return (
    <div>
      <section className="container-page pt-16 pb-16 sm:pt-24">
        <p className="eyebrow mb-5">Contact</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink dark:text-paper max-w-2xl">
          Tell us what you're building.
        </h1>
        <p className="mt-6 text-lg text-ink/65 dark:text-paper/65 leading-relaxed max-w-2xl">
          We read every message ourselves — no forms disappearing into a CRM.
          Expect a reply within one business day.
        </p>
      </section>

      <section className="container-page pb-24 grid lg:grid-cols-[1fr_1.3fr] gap-14">
        {/* Contact info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <Mail size={18} className="text-pine dark:text-pine-light mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink dark:text-paper">Email</p>
              <p className="text-sm text-ink/60 dark:text-paper/60">hello@nordholm.studio</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone size={18} className="text-pine dark:text-pine-light mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink dark:text-paper">Phone</p>
              <p className="text-sm text-ink/60 dark:text-paper/60">+1 (415) 555‑0148</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin size={18} className="text-pine dark:text-pine-light mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink dark:text-paper">Studio</p>
              <p className="text-sm text-ink/60 dark:text-paper/60">San Francisco, CA · Oslo, NO</p>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="eyebrow mb-4">Frequently asked</h2>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="card p-7 sm:p-9">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 size={40} className="text-pine dark:text-pine-light mb-4" />
              <h2 className="font-display text-2xl text-ink dark:text-paper mb-2">Message sent</h2>
              <p className="text-sm text-ink/60 dark:text-paper/60 max-w-xs mb-6">
                Thanks for reaching out — we'll get back to you within one business day.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Your name"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Jordan Lee"
                  autoComplete="name"
                />
                <FormField
                  label="Email address"
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="jordan@company.com"
                  autoComplete="email"
                />
              </div>

              <FormField
                label="Estimated budget"
                id="budget"
                name="budget"
                as="select"
                value={values.budget}
                onChange={handleChange}
                error={errors.budget}
              >
                <option value="">Select a range</option>
                <option value="under-10k">Under $10k</option>
                <option value="10k-30k">$10k – $30k</option>
                <option value="30k-75k">$30k – $75k</option>
                <option value="75k-plus">$75k+</option>
              </FormField>

              <FormField
                label="Tell us about the project"
                id="message"
                name="message"
                as="textarea"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="What are you building, and what's the timeline?"
              />

              <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-70">
                {submitting ? (
                  <>
                    <Spinner /> Sending…
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
