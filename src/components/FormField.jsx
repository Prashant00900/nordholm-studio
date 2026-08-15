export default function FormField({
  label,
  id,
  error,
  as = 'input',
  children,
  ...props
}) {
  const baseClass = `w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-ink dark:text-paper placeholder:text-ink/35 dark:placeholder:text-paper/35 transition-colors duration-200 focus:outline-none ${
    error
      ? 'border-rust focus:border-rust'
      : 'border-ink/15 dark:border-paper/20 focus:border-pine dark:focus:border-pine-light'
  }`

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink dark:text-paper mb-2">
        {label}
      </label>

      {as === 'textarea' ? (
        <textarea id={id} className={`${baseClass} min-h-[140px] resize-y`} aria-invalid={!!error} {...props} />
      ) : as === 'select' ? (
        <select id={id} className={baseClass} aria-invalid={!!error} {...props}>
          {children}
        </select>
      ) : (
        <input id={id} className={baseClass} aria-invalid={!!error} {...props} />
      )}

      {error && (
        <p className="mt-1.5 text-xs text-rust" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
