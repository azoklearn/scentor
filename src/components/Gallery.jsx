import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1]

const tiles = [
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipOGwnxD9XrvJ12K4uw6m8nlIwuycpABuq_Bx4Rx=s1360-w1360-h1020-rw',
    span: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
    parallax: 70,
  },
  {
    src: 'https://www.bfragrance.fr/cdn/shop/files/LIQUID_BRUN.jpg?v=1752947496&width=1100',
    span: 'md:col-span-5',
    aspect: 'aspect-[16/10]',
    parallax: 50,
  },
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipMDLBew7AhyRn0oW6_g_FBTwP8DKUHNlFACE8fL=w141-h235-n-k-no-nu',
    span: 'md:col-span-4',
    aspect: 'aspect-[3/5]',
    parallax: 80,
  },
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipO7yrs_s--Og_jf05HuUwjlxyDWa6cF98UK6bvl=w141-h141-n-k-no-nu',
    span: 'md:col-span-4',
    aspect: 'aspect-[1/1]',
    parallax: 40,
  },
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipOLJYyDw4KFzLcask4TtLKItUCkrYR39dvhPx7q=w141-h176-n-k-no-nu',
    span: 'md:col-span-4',
    aspect: 'aspect-[4/5]',
    parallax: 60,
  },
  {
    src: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1400&q=80',
    span: 'md:col-span-5',
    aspect: 'aspect-[4/5]',
    parallax: 50,
  },
  {
    src: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-3',
    aspect: 'aspect-[3/4]',
    parallax: 30,
  },
  {
    src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-4',
    aspect: 'aspect-[4/5]',
    parallax: 70,
  },
]

function Tile({ src, span, aspect, parallax, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.4, delay: index * 0.06, ease }}
      className={`group relative overflow-hidden col-span-12 ${span} ${aspect}`}
    >
      <motion.div style={{ y }} className="absolute inset-[-12%] will-change-transform">
        <motion.img
          src={src}
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.06 }}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 2, ease }}
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 ring-1 ring-inset ring-ink/5" />
    </motion.figure>
  )
}

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="relative bg-bone text-ink py-32 md:py-44 overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-16 mx-auto max-w-[1500px]">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
          <div className="col-span-12 md:col-span-6">
            <span className="label text-ink/50">N° 04 — Galerie</span>
            <h2 className="display text-[12vw] md:text-[7vw] lg:text-[5.4vw] tracking-editorial mt-6 leading-[0.9]">
              Lumières <br />
              <span className="editorial text-bordeaux italic font-light">
                & matières.
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pb-4">
            <p className="text-ink/65 text-base md:text-lg font-light leading-relaxed max-w-md">
              L’intérieur de la boutique, les pièces, les détails — une
              écriture visuelle où la lumière chaude, les matières et les
              flacons composent le décor.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 auto-rows-auto gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <Tile key={i} index={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
