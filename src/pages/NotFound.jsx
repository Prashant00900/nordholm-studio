import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import BlueprintMark from '../components/BlueprintMark.jsx'

export default function NotFound() {
  return (
    <div className="container-page py-24 sm:py-32 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
      <div>
        <p className="eyebrow mb-5">404</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink dark:text-paper">
          This page wandered off the blueprint.
        </h1>
        <p className="mt-6 text-lg text-ink/65 dark:text-paper/65 leading-relaxed max-w-md">
          The page you're looking for doesn't exist, or has moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
      <div className="hidden lg:block text-rust opacity-70">
        <BlueprintMark className="w-full h-auto" />
      </div>
    </div>
  )
}
