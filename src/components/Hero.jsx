import { useEffect, useRef } from 'react'

const stats = [
  { value: 20, suffix: '+', label: 'Years of Trust' },
  { value: 500, suffix: '+', label: 'Farmers Served' },
  { value: 15, suffix: '+', label: 'Top Brands' },
  { value: 100, suffix: '%', label: 'Genuine Products' },
]

export default function Hero() {
  const counterRefs = useRef([])

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
      {/* Background farm image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')" }}
      />
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
          <h1 className="font-deva font-black text-white leading-tight mb-3 animate-fadeUp" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', animationDelay:'.1s' }}>
            कल्याण पाईप डेपो
          </h1>
          <p className="text-gold font-bold text-xl lg:text-2xl mb-2 animate-fadeUp" style={{ animationDelay:'.2s' }}>
            Kalyan Pipe Depot
          </p>
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
