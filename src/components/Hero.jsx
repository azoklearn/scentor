import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const overlay = useTransform(scrollYProgress, [0, 1], [0.25, 0.75])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-bone grain"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="/hero.png"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-ink"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/70" />

      {/* Top label row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.2, ease }}
        className="absolute top-24 md:top-28 inset-x-0 z-10 flex justify-between px-6 md:px-10 lg:px-16 label text-bone/70"
      >
        <span>Maison fondée à Nancy</span>
        <span className="hidden md:inline">Édition · MMXXV</span>
      </motion.div>

      {/* Massive logo */}
      <motion.div
        style={{ y: titleY }}
        className="relative z-10 h-full w-full flex items-center justify-center px-6"
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.4, ease }}
            className="overflow-hidden"
          >
            <h1 className="display text-bone text-[22vw] md:text-[18vw] lg:text-[15vw] leading-[0.82] tracking-tightest">
              SCENTOR
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease }}
            className="mt-8 md:mt-10 flex flex-col items-center gap-4"
          >
            <p className="label text-bone/80">
              Parfums · Cosmétiques · Bijoux · Maroquinerie
            </p>
            <p className="editorial text-bone/85 text-xl md:text-2xl max-w-xl">
              Le raffinement, à portée de tous.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#manifeste"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.4, ease }}
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-3 text-bone"
      >
        <span className="label">Explorer</span>
        <span className="relative block h-12 w-px bg-bone/40 overflow-hidden">
          <motion.span
            className="absolute inset-0 bg-bone"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 2.4,
              ease: 'easeInOut',
            }}
          />
        </span>
      </motion.a>

      {/* Bottom edge meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.6, ease }}
        className="absolute bottom-6 inset-x-0 px-6 md:px-10 lg:px-16 z-10 flex justify-between label text-bone/60"
      >
        <span>N° 01</span>
        <span>Sélection — automne / hiver</span>
      </motion.div>
    </section>
  )
}
