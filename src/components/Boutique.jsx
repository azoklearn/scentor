import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1]

export default function Boutique() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '15%'])

  return (
    <section
      id="boutique"
      ref={ref}
      className="relative bg-ink text-bone py-32 md:py-44 overflow-hidden grain"
    >
      <div className="px-6 md:px-10 lg:px-16 mx-auto max-w-7xl grid grid-cols-12 gap-y-16 gap-x-6">
        <div className="col-span-12 md:col-span-5">
          <span className="label text-bone/50">N° 05 — Boutique</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease }}
            className="display text-[12vw] md:text-[6.4vw] tracking-editorial mt-6 leading-[0.9]"
          >
            L’écrin <br />
            <span className="editorial italic font-light text-gold">
              à Nancy.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="mt-12 max-w-md text-bone/75 text-base md:text-lg leading-relaxed font-light"
          >
            <p>
              Au cœur de Nancy, SCENTOR réunit parfums, cosmétiques, bijoux
              en acier inoxydable et maroquinerie. Une boutique pensée pour
              une clientèle mixte, où l’on découvre, essaie et choisit sans
              barrière — l’élégance, simplement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35, ease }}
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 max-w-md"
          >
            <div>
              <p className="label text-bone/50 mb-3">Adresse</p>
              <p className="text-bone leading-relaxed">
                Galerie Saint-Sébastien
                <br />
                13/15 rue Grand Rabbin Haguenauer
                <br />
                54000 Nancy
              </p>
            </div>
            <div>
              <p className="label text-bone/50 mb-3">Horaires</p>
              <p className="text-bone leading-relaxed">
                Mar — Sam
                <br />
                10h — 19h
              </p>
            </div>
            <div>
              <p className="label text-bone/50 mb-3">Sur rendez-vous</p>
              <p className="text-bone leading-relaxed">
                Conseils privés
                <br />
                Découverte olfactive
              </p>
            </div>
            <div>
              <p className="label text-bone/50 mb-3">Contact</p>
              <p className="text-bone leading-relaxed flex flex-col gap-1">
                <a
                  href="https://instagram.com/scentor"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors duration-500"
                >
                  Instagram · @scentor
                </a>
                <a
                  href="https://snapchat.com/add/scentor"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors duration-500"
                >
                  Snapchat · @scentor
                </a>
              </p>
            </div>
          </motion.div>

          <motion.a
            href="https://instagram.com/scentor"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="group mt-16 inline-flex items-center gap-4"
          >
            <span className="label text-bone group-hover:text-gold transition-colors duration-500">
              Nous suivre sur Instagram
            </span>
            <span className="h-px w-12 bg-bone/40 group-hover:w-24 group-hover:bg-gold transition-all duration-700 ease-luxe" />
          </motion.a>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              style={{ y }}
              src="https://lh3.googleusercontent.com/p/AF1QipOGwnxD9XrvJ12K4uw6m8nlIwuycpABuq_Bx4Rx=s1360-w1360-h1020-rw"
              alt="Boutique SCENTOR à Nancy — Galerie Saint-Sébastien"
              className="absolute inset-[-12%] h-[124%] w-[124%] object-cover will-change-transform"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-bone/10" />
            <div className="absolute bottom-5 left-5 right-5 flex justify-between label text-bone/80">
              <span>Nancy · 54</span>
              <span>48.6921° N · 6.1844° E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
