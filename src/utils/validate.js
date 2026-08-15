export function validateContactForm(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please tell us your name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.budget) {
    errors.budget = 'Select an estimated budget.'
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us a little about the project.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please add a bit more detail (20+ characters).'
  }

  return errors
}
