import { useState, useEffect, useRef } from 'react'

const photos = [
  { src: '/assets/images/pvc-pipes-stack.jpg', caption: 'PVC pipe stock ready for dispatch' },
  { src: '/assets/images/shop-interior-drip.jpg', caption: 'Mulching coils' },
  { src: '/assets/images/truck-drip-lapeta.jpg', caption: 'Tata Tomato Taar' },
  { src: '/assets/images/shop-interior-pumps.jpg', caption: 'Pump display at the store' },
  { src: '/assets/images/truck-pvc-pipes.jpg', caption: 'Bulk PVC pipe consignment' },
  { src: '/assets/images/shop-stock-coils.jpg', caption: 'Krushi mulching stock' },
  { src: '/assets/images/truck-loaded-goods.jpg', caption: 'LDPE pipe stock' },
  { src: '/assets/images/shop-interior-pumps-2.jpg', caption: 'Pumps & accessories range' },
]

export default function Photos() {
  const [active, setActive] = useState(null)
  const touchStartX = useRef(null)

  const next = () => setActive(a => (a + 1) % photos.length)
  const prev = () => setActive(a => (a - 1 + photos.length) % photos.length)

  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 45) {
      if (dx > 0) next()   // swipe right → next
      else prev()          // swipe left → previous
    }
    touchStartX.current = null
  }

  useEffect(() => {
    if (active === null) return
    const onKey = e => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="photos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-kgreen/10 text-kgreen text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Gallery</span>
          <h2 className="text-3xl lg:text-4xl font-black text-kgreen font-deva mb-2">आमचा फोटो गॅलरी</h2>
          <p className="text-gray-600 text-lg">A look at our store, stock & deliveries</p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-xl reveal aspect-[4/5] bg-gray-100"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs font-semibold leading-tight">{p.caption}</span>
              </div>
              <div className="absolute top-2 right-2 bg-white/90 text-kgreen text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                🔍
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 z-10 bg-white/15 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg transition-colors"
          >
            ✕
          </button>

          <button
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 text-white rounded-full w-11 h-11 flex items-center justify-center text-2xl transition-colors"
          >
            ‹
          </button>
          <button
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 text-white rounded-full w-11 h-11 flex items-center justify-center text-2xl transition-colors"
          >
            ›
          </button>

          <figure className="relative z-[1] max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].caption} className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl" />
            <figcaption className="text-white/90 text-sm mt-4 font-medium text-center">
              {photos[active].caption}
              <span className="text-white/50 ml-2">({active + 1}/{photos.length})</span>
              <span className="block sm:hidden text-white/40 text-xs mt-1">← swipe to browse →</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
