import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-ink/[0.08] dark:border-paper/10 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-medium text-ink dark:text-paper">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink/50 dark:text-paper/50 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-ink/65 dark:text-paper/65 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}
