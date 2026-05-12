import { motion } from 'framer-motion'

const items = [
  'Parfums',
  '·',
  'Cosmétiques',
  '·',
  'Bijoux',
  '·',
  'Maroquinerie',
  '·',
  'Nancy',
  '·',
  'Femme & Homme',
  '·',
]

export default function Marquee() {
  return (
    <section className="relative bg-ink text-bone py-10 md:py-14 overflow-hidden border-y border-bone/10">
      <div className="marquee-mask">
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {[...items, ...items, ...items, ...items].map((t, i) => (
            <span
              key={i}
              className={`display text-5xl md:text-7xl tracking-tightest ${
                t === '·' ? 'text-gold' : ''
              }`}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
