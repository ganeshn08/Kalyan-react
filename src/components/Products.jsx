import { useState, useEffect } from 'react'

const categories = [
  {
    title: 'Drip Irrigation',
    titleHi: 'ठिबक सिंचन',
    desc: 'Inline & Flat drip tapes, emitters, laterals for precision farming',
    brands: ['Kalyan Poly', 'Finolex', 'Icon', 'Kothari'],
    img: '/assets/images/finolex-drip-1.jpg',
    color: 'from-green-700 to-green-900',
    gallery: [
      '/assets/images/kp-drip-reel-front.jpg',
      '/assets/images/kp-drip-reel-side.jpg',
      '/assets/images/kp-drip-stock.jpg',
      '/assets/images/kp-drip-photo.jpg',
      '/assets/images/kp-drip-poster-rk.png',
      '/assets/images/finolex-drip-1.jpg',
      '/assets/images/finolex-drip-2.jpg',
      '/assets/images/finolex-ad.jpg',
      '/assets/images/icon-drip.jpg',
    ],
  },
  {
    title: 'HDPE Lapeta Pipes',
    titleHi: 'लपेटा पाईप',
    desc: 'High-density polyethylene pipes for water distribution in fields',
    brands: ['Tiger', 'Vijay Kisan', 'KP Kalyan'],
    img: '/assets/images/lapeta-side.jpg',
    color: 'from-blue-700 to-blue-900',
    gallery: [],
  },
  {
    title: 'PVC Pipes & Fittings',
    titleHi: 'पीव्हीसी पाईप',
    desc: 'Rigid PVC pipes, elbows, tees, reducers, valves & accessories',
    brands: ['Finolex', 'Supreme', 'Astral'],
    img: '/assets/images/kp-product-1.png',
    color: 'from-gray-600 to-gray-800',
    gallery: [],
  },
  {
    title: 'Sprinkler Systems',
    titleHi: 'स्प्रिंकलर',
    desc: 'Pop-up & impact sprinklers, risers, connectors for wide-area coverage',
    brands: ['Kalyan Poly', 'Finolex', 'Kothari'],
    img: '/assets/images/kp-product-2.png',
    color: 'from-cyan-700 to-cyan-900',
    gallery: [],
  },
  {
    title: 'Mulching Film',
    titleHi: 'मल्चिंग फिल्म',
    desc: 'Black & silver mulch films for moisture retention and weed control',
    brands: ['Icon', 'KP'],
    img: '/assets/images/icon-mulch.jpg',
    color: 'from-yellow-700 to-yellow-900',
    gallery: [],
  },
  {
    title: 'Automation & Filters',
    titleHi: 'ऑटोमेशन',
    desc: 'Venturi injectors, screen filters, timer valves & fertigation systems',
    brands: ['Netafim', 'Rivulis'],
    img: '/assets/images/radhakrishna.png',
    color: 'from-purple-700 to-purple-900',
    gallery: [],
  },
]

function GalleryModal({ category, onClose }) {
  const [active, setActive] = useState(0)
  const photos = category.gallery.length ? category.gallery : [category.img]

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setActive(a => (a + 1) % photos.length)
      if (e.key === 'ArrowLeft') setActive(a => (a - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [photos.length, onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideIn"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold transition-colors"
        >
          ✕
        </button>

        {/* Main image */}
        <div className="relative bg-gray-100">
          <img
            src={photos[active]}
            alt={category.title}
            className="w-full max-h-[55vh] object-contain"
          />
          {photos.length > 1 && (
            <>
              <button
                onClick={() => setActive(a => (a - 1 + photos.length) % photos.length)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => setActive(a => (a + 1) % photos.length)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {photos.length > 1 && (
          <div className="flex gap-2 px-5 pt-4 overflow-x-auto">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === active ? 'border-kgreen' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={p} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Info */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-black text-kgreen text-2xl">{category.title}</h3>
            <span className="font-deva text-gray-500 text-sm">{category.titleHi}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{category.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {category.brands.map(b => (
              <span key={b} className="bg-kgreen/10 text-kgreen text-xs font-semibold px-2.5 py-1 rounded-full">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/919764298488?text=${encodeURIComponent(`Hello, I want to know prices for ${category.title}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              Ask Price on WhatsApp
            </a>
            <a href="tel:9764298488" className="border-2 border-kgreen text-kgreen hover:bg-kgreen hover:text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="products" className="py-20 bg-kgreen-pale">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-kgreen/10 text-kgreen text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl lg:text-4xl font-black text-kgreen font-deva mb-2">आमची उत्पादने</h2>
          <p className="text-gray-600 text-lg">Our Products & Services — click a card to see photos</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelected(cat)}
              className="card-lift bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 reveal text-left cursor-pointer"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="bg-black/50 text-white text-xs px-2 py-0.5 rounded font-deva">{cat.titleHi}</span>
                </div>
                <div className="absolute top-2 right-2 bg-white/90 text-kgreen text-xs font-bold px-2 py-1 rounded-full shadow">
                  📷 View
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-black text-kgreen text-lg mb-1">{cat.title}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.brands.map(b => (
                    <span key={b} className="bg-kgreen/10 text-kgreen text-xs font-semibold px-2 py-0.5 rounded-full">{b}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-gray-600 mb-4">Need a bulk quote or specific product?</p>
          <a href="#quote" className="inline-flex items-center gap-2 bg-kgreen text-white font-bold px-6 py-3 rounded-full hover:bg-kgreen-mid transition-colors shadow-md">
            Get a Free Quote →
          </a>
        </div>
      </div>

      {selected && <GalleryModal category={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
