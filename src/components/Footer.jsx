import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.07] dark:border-paper/10 mt-32">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pine text-paper font-display text-sm">
                N
              </span>
              <span className="font-display text-lg text-ink dark:text-paper">Nordholm</span>
            </Link>
            <p className="text-sm text-ink/60 dark:text-paper/60 max-w-xs leading-relaxed">
              A small studio designing and building software products for founders who care about the details.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Studio</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-ink/70 dark:text-paper/70 hover:text-rust transition-colors">About</Link></li>
              <li><Link to="/services" className="text-ink/70 dark:text-paper/70 hover:text-rust transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-ink/70 dark:text-paper/70 hover:text-rust transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-ink/70 dark:text-paper/70 hover:text-rust transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-ink/70 dark:text-paper/70">
              <li>hello@nordholm.studio</li>
              <li>+1 (415) 555‑0148</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Follow</h3>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 dark:border-paper/20 text-ink/70 dark:text-paper/70 hover:border-rust hover:text-rust transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink/[0.07] dark:border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink/50 dark:text-paper/50">
            © {new Date().getFullYear()} Nordholm Studio. All rights reserved.
          </p>
          <a
            href="mailto:hello@nordholm.studio"
            className="inline-flex items-center gap-1 text-xs text-ink/60 dark:text-paper/60 hover:text-rust transition-colors"
          >
            Say hello <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
