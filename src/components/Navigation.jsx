import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Manifeste', href: '#manifeste' },
  { label: 'Collections', href: '#collections' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Boutique', href: '#boutique' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ease-luxe ${
          scrolled
            ? 'bg-bone/80 backdrop-blur-md border-b border-ink/5'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 py-5">
          <a
            href="#top"
            className={`display text-lg md:text-xl tracking-tightest transition-colors duration-700 ${
              scrolled ? 'text-ink' : 'text-bone mix-blend-difference'
            }`}
          >
            SCENTOR
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`label transition-colors duration-500 hover:text-bordeaux ${
                  scrolled ? 'text-ink/70' : 'text-bone mix-blend-difference'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#boutique"
            className={`hidden md:inline-flex label transition-colors duration-500 ${
              scrolled ? 'text-ink' : 'text-bone mix-blend-difference'
            }`}
          >
            Nancy · FR
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Menu"
            className={`md:hidden flex flex-col gap-[6px] p-2 ${
              scrolled ? 'text-ink' : 'text-bone mix-blend-difference'
            }`}
          >
            <span className="block w-6 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-ink text-bone flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="display text-lg">SCENTOR</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="label"
              >
                Fermer
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6 gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.08,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="display text-5xl tracking-tightest"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-6 py-8 label text-bone/60 flex justify-between">
              <span>Nancy · France</span>
              <span>@scentor</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
