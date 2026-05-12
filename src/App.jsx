import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Collections from './components/Collections.jsx'
import Marquee from './components/Marquee.jsx'
import Gallery from './components/Gallery.jsx'
import Boutique from './components/Boutique.jsx'
import Footer from './components/Footer.jsx'
import useSmoothScroll from './hooks/useSmoothScroll.js'

export default function App() {
  useSmoothScroll()

  return (
    <main className="bg-bone text-ink antialiased">
      <Navigation />
      <Hero />
      <Manifesto />
      <Collections />
      <Marquee />
      <Gallery />
      <Boutique />
      <Footer />
    </main>
  )
}
