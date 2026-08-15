export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment} mb-12`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink dark:text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink/65 dark:text-paper/65 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
