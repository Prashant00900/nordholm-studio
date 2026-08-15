import { Compass, PenTool, Code2, LayoutGrid } from 'lucide-react'

export const services = [
  {
    icon: Compass,
    title: 'Discovery & Strategy',
    summary: 'We start by understanding the problem worth solving, not the feature list.',
    details:
      'Stakeholder interviews, competitive teardown, and a working prioritization framework so your roadmap reflects reality, not guesswork.',
    deliverables: ['Research synthesis', 'Product strategy brief', 'Prioritized roadmap'],
  },
  {
    icon: PenTool,
    title: 'Product Design',
    summary: 'Interfaces that respect the user\u2019s time, attention, and context.',
    details:
      'From low-fidelity flows to pixel-accurate screens, we design in the browser wherever possible so nothing gets lost in translation to code.',
    deliverables: ['UX flows & wireframes', 'High-fidelity UI', 'Interactive prototypes'],
  },
  {
    icon: LayoutGrid,
    title: 'Design Systems',
    summary: 'A shared visual language your whole team can build with confidently.',
    details:
      'Token-based, accessible-by-default component libraries built in Figma and code together, so design and engineering never drift apart.',
    deliverables: ['Component library', 'Design tokens', 'Documentation site'],
  },
  {
    icon: Code2,
    title: 'Frontend Engineering',
    summary: 'Production code, not just prototypes — fast, accessible, maintainable.',
    details:
      'React and modern tooling, performance budgets held from day one, and a codebase your in-house team can pick up without a handoff document.',
    deliverables: ['Production frontend', 'Performance audit', 'Handoff & training'],
  },
]

export const process = [
  { title: 'Listen', description: 'We spend the first week mostly asking questions, not answering them.' },
  { title: 'Sketch', description: 'Low-fidelity exploration in public — you see the thinking, not just the polish.' },
  { title: 'Build', description: 'Design and engineering move together in weekly shippable increments.' },
  { title: 'Hand off', description: 'Documentation and training so the work keeps moving after we leave.' },
]
