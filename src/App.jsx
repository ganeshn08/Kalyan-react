import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Products from './components/Products'
import Brands from './components/Brands'
import Photos from './components/Photos'
import WhyUs from './components/WhyUs'
import QuoteForm from './components/QuoteForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WaFab from './components/WaFab'

export default function App() {
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      setScrollPct(Math.min(pct, 100))
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9)
          el.classList.add('visible')
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    setTimeout(onScroll, 100)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div id="scroll-bar" style={{ width: `${scrollPct}%` }} />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Photos />
        <Products />
        <Brands />
        <WhyUs />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WaFab />
    </>
  )
}
