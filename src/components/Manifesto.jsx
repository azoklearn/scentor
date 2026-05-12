import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: i * 0.08, ease },
  }),
}

const words = [
  'Rendre',
  'le',
  'raffinement',
  'accessible —',
  'parfums,',
  'cosmétiques,',
  'bijoux',
  'en',
  'acier',
  'inoxydable',
  'et',
  'maroquinerie,',
  'choisis',
  'pour',
  'leur',
  'style',
  'et',
  'leur',
  'durabilité.',
]

export default function Manifesto() {
  return (
    <section
      id="manifeste"
      className="relative bg-bone text-ink py-32 md:py-48 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-y-16 gap-x-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="col-span-12 md:col-span-3 flex md:flex-col gap-3 md:items-start"
        >
          <span className="label text-ink/50">N° 02</span>
          <span className="label text-ink/50">Manifeste</span>
        </motion.div>

        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="display text-ink text-[10vw] md:text-[6vw] lg:text-[4.6vw] leading-[0.92] tracking-editorial"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                custom={i * 0.5}
                className="inline-block mr-[0.22em] align-baseline"
              >
                {w === 'accessible —' ? (
                  <span className="editorial text-bordeaux font-light italic mr-2">
                    accessible —
                  </span>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="mt-16 max-w-2xl text-ink/65 text-lg md:text-xl leading-relaxed font-light"
          >
            SCENTOR est une boutique nancéienne dédiée à une sélection
            mixte — femmes et hommes — pensée pour allier élégance,
            accessibilité et diversité. Chaque pièce est choisie avec soin,
            sans compromis sur le style ni sur la qualité.
          </motion.p>

          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {[
              {
                k: '01',
                t: 'Sélection',
                d: 'Une curation rigoureuse — chaque article est choisi pour son caractère, sa matière et son rapport qualité-prix.',
              },
              {
                k: '02',
                t: 'Mixité',
                d: 'Femmes & hommes, à parts égales. Une offre pensée pour toutes les sensibilités, sans cloisonnement.',
              },
              {
                k: '03',
                t: 'Accessibilité',
                d: 'Le raffinement, à portée de main. Des prix justes, une qualité affirmée, un style qui dure.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease }}
                className="border-t border-ink/15 pt-6"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="label text-ink/50">{item.k}</span>
                  <span className="h-px w-6 bg-gold" />
                </div>
                <h3 className="display text-2xl md:text-3xl mb-4">
                  {item.t}
                </h3>
                <p className="text-ink/65 text-[0.95rem] leading-relaxed font-light">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
