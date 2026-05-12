import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Footer() {
  return (
    <footer className="relative bg-bone text-ink overflow-hidden">
      <div className="px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease }}
          className="border-b border-ink/15 pb-16 md:pb-24"
        >
          <h3 className="display text-[18vw] md:text-[14vw] leading-[0.82] tracking-tightest text-ink">
            SCENTOR
          </h3>
        </motion.div>

        <div className="grid grid-cols-12 gap-y-12 gap-x-6 mt-14">
          <div className="col-span-12 md:col-span-4">
            <p className="label text-ink/50 mb-4">Maison</p>
            <p className="editorial text-2xl text-ink leading-snug">
              Parfums · Cosmétiques · Bijoux · Maroquinerie. <br />
              Une sélection mixte à Nancy — l’élégance accessible.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-7">
            <p className="label text-ink/50 mb-4">Contact</p>
            <ul className="space-y-2 text-ink">
              <li>
                <a
                  href="https://instagram.com/scentor"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-bordeaux transition-colors duration-500"
                >
                  Instagram · @scentor
                </a>
              </li>
              <li>
                <a
                  href="https://snapchat.com/add/scentor"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-bordeaux transition-colors duration-500"
                >
                  Snapchat · @scentor
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="label text-ink/50 mb-4">Boutique</p>
            <p className="text-ink leading-relaxed">
              Galerie Saint-Sébastien
              <br />
              13/15 rue Grand Rabbin
              <br />
              Haguenauer · 54000 Nancy
            </p>
          </div>

          <div className="col-span-12 md:col-span-2">
            <p className="label text-ink/50 mb-4">Horaires</p>
            <p className="text-ink leading-relaxed">
              Mar — Sam
              <br />
              10h — 19h
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4 label text-ink/50">
          <span>© SCENTOR · MMXXV — Tous droits réservés</span>
          <span>Site éditorial · Nancy, France</span>
        </div>
      </div>
    </footer>
  )
}
