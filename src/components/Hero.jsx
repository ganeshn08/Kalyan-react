import { useEffect, useRef, useState } from 'react'

const bgImages = [
  // Center-pivot sprinklers spraying over lush green corn field
  'https://images.unsplash.com/photo-1692369584496-3216a88f94c1?w=1920&q=85',
  // Sprinklers spraying over green crop rows
  'https://images.unsplash.com/photo-1645727527942-f12e14a0c841?w=1920&q=85',
  // Micro-sprinklers watering young crops
  'https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?w=1920&q=85',
  // Young green corn rows close-up
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=85',
  // Aerial green farmland rows
  'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=85',
  // Rain gun irrigating field at golden hour
  'https://images.unsplash.com/photo-1743742566156-f1745850281a?w=1920&q=85',
]

const stats = [
  { value: 20, suffix: '+', label: 'Years of Trust' },
  { value: 500, suffix: '+', label: 'Farmers Served' },
  { value: 15, suffix: '+', label: 'Top Brands' },
  { value: 100, suffix: '%', label: 'Genuine Products' },
]

export default function Hero() {
  const counterRefs = useRef([])
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    bgImages.forEach(src => { const img = new Image(); img.src = src })
    const timer = setInterval(() => setBgIndex(i => (i + 1) % bgImages.length), 7000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const end = parseInt(el.dataset.val)
        const suffix = el.dataset.suffix
        let start = 0
        const step = Math.ceil(end / 40)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { el.textContent = end + suffix; clearInterval(timer) }
          else el.textContent = start + suffix
        }, 35)
        observer.unobserve(el)
      })
    }, { threshold: 0.5 })
    counterRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Rotating background farm images */}
      {bgImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms]"
          style={{ backgroundImage: `url('${src}')`, opacity: i === bgIndex ? 1 : 0 }}
        />
      ))}
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-kgreen/90 via-kgreen/80 to-black/70" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-gold/10 blur-3xl blob-1 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-kgreen-mid/40 blur-3xl blob-2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase animate-fadeUp">
            Phulambri • Since 2003
          </div>
          <h1 className="font-black text-white leading-tight mb-3 animate-fadeUp" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', animationDelay:'.1s' }}>
            Kalyan Pipe Depot
          </h1>
          <p className="text-gray-200 text-base lg:text-lg max-w-xl mb-8 animate-fadeUp" style={{ animationDelay:'.3s' }}>
            Wholesale supplier of drip irrigation, HDPE pipes, PVC fittings & irrigation automation. Trusted by farmers across Phulambri taluka.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fadeUp" style={{ animationDelay:'.4s' }}>
            <a href="#products" className="bg-gold hover:bg-gold-dark text-kgreen font-bold px-6 py-3 rounded-full transition-colors shadow-lg shadow-gold/30 text-sm">
              View Products
            </a>
            <a href="https://wa.me/919764298488" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-full transition-colors text-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.1 1.507 5.832L0 24l6.337-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.374l-.359-.213-3.72.871.934-3.621-.234-.373A9.77 9.77 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-3 animate-fadeUp" style={{ animationDelay:'.5s' }}>
          {stats.map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 text-center min-w-[120px]">
              <div
                className="text-gold font-black text-3xl"
                data-val={s.value}
                data-suffix={s.suffix}
                ref={el => counterRefs.current[i] = el}
              >
                0{s.suffix}
              </div>
              <div className="text-gray-300 text-xs mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll chevron */}
      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors z-10 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
