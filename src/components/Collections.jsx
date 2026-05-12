import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const collections = [
  {
    n: '01',
    name: 'Parfums',
    sub: 'Sillages choisis, pour elle & pour lui',
    img: 'https://www.bfragrance.fr/cdn/shop/files/LIQUID_BRUN.jpg?v=1752947496&width=1100',
    note: 'Femme · Homme',
  },
  {
    n: '02',
    name: 'Cosmétiques',
    sub: 'Soin, parure, gestes du quotidien',
    img: 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=1600&q=80',
    note: 'Visage · Corps',
  },
  {
    n: '03',
    name: 'Bijoux',
    sub: 'Acier inoxydable, finitions tenues dans le temps',
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=80',
    note: 'Acier 316L',
  },
  {
    n: '04',
    name: 'Maroquinerie',
    sub: 'Pièces durables, lignes nettes, usage quotidien',
    img: 'https://images.unsplash.com/photo-1590739225497-56c1c987d309?auto=format&fit=crop&w=1600&q=80',
    note: 'Sacs · Petite maroquinerie',
  },
]

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative bg-stone text-ink py-32 md:py-44 overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-16 mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <span className="label text-ink/50">N° 03 — Collections</span>
            <h2 className="display text-[12vw] md:text-[7vw] lg:text-[5.4vw] tracking-editorial mt-6">
              La sélection
            </h2>
          </div>
          <span className="hidden md:block editorial text-ink/60 text-lg max-w-xs text-right">
            Quatre univers, une même exigence — l’élégance accessible.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {collections.map((c, i) => (
            <motion.a
              key={c.n}
              href="#galerie"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, delay: i * 0.12, ease }}
              className="group relative block overflow-hidden bg-ink"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.6, ease }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                <div className="absolute top-5 left-5 right-5 flex justify-between text-bone">
                  <span className="label text-bone/80">{c.n}</span>
                  <span className="label text-bone/80">{c.note}</span>
                </div>

                <div className="absolute bottom-6 left-5 right-5 text-bone">
                  <h3 className="display text-3xl md:text-4xl tracking-tightest">
                    {c.name}
                  </h3>
                  <div className="overflow-hidden mt-2">
                    <motion.p
                      className="text-bone/80 text-sm font-light"
                      initial={{ y: '110%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 + i * 0.1, ease }}
                    >
                      {c.sub}
                    </motion.p>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="label text-bone/70 group-hover:text-gold transition-colors duration-500">
                      Découvrir
                    </span>
                    <span className="h-px w-8 bg-bone/40 group-hover:w-16 group-hover:bg-gold transition-all duration-700 ease-luxe" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
