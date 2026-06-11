const categories = [
  {
    title: 'Drip Irrigation',
    titleHi: 'ठिबक सिंचन',
    desc: 'Inline & Flat drip tapes, emitters, laterals for precision farming',
    brands: ['Finolex', 'Jain', 'Kothari', 'KP'],
    img: '/assets/images/kp-drip-photo.jpg',
    color: 'from-green-700 to-green-900',
  },
  {
    title: 'HDPE Lapeta Pipes',
    titleHi: 'लपेटा पाईप',
    desc: 'High-density polyethylene pipes for water distribution in fields',
    brands: ['Tiger', 'Vijay Kisan', 'KP Kalyan'],
    img: '/assets/images/lapeta-side.jpg',
    color: 'from-blue-700 to-blue-900',
  },
  {
    title: 'PVC Pipes & Fittings',
    titleHi: 'पीव्हीसी पाईप',
    desc: 'Rigid PVC pipes, elbows, tees, reducers, valves & accessories',
    brands: ['Finolex', 'Supreme', 'Astral'],
    img: '/assets/images/kp-product-1.png',
    color: 'from-gray-600 to-gray-800',
  },
  {
    title: 'Sprinkler Systems',
    titleHi: 'स्प्रिंकलर',
    desc: 'Pop-up & impact sprinklers, risers, connectors for wide-area coverage',
    brands: ['Jain', 'Finolex', 'NaanDanJain'],
    img: '/assets/images/kp-product-2.png',
    color: 'from-cyan-700 to-cyan-900',
  },
  {
    title: 'Mulching Film',
    titleHi: 'मल्चिंग फिल्म',
    desc: 'Black & silver mulch films for moisture retention and weed control',
    brands: ['Icon', 'KP'],
    img: '/assets/images/icon-mulch.jpg',
    color: 'from-yellow-700 to-yellow-900',
  },
  {
    title: 'Automation & Filters',
    titleHi: 'ऑटोमेशन',
    desc: 'Venturi injectors, screen filters, timer valves & fertigation systems',
    brands: ['Netafim', 'Rivulis', 'Jain'],
    img: '/assets/images/radhakrishna.png',
    color: 'from-purple-700 to-purple-900',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-kgreen-pale">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-kgreen/10 text-kgreen text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl lg:text-4xl font-black text-kgreen font-deva mb-2">आमची उत्पादने</h2>
          <p className="text-gray-600 text-lg">Our Products & Services</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="card-lift bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className={`hidden absolute inset-0 bg-gradient-to-br ${cat.color} items-center justify-center`}>
                  <span className="text-white/30 text-5xl font-black">{cat.title[0]}</span>
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className="bg-black/50 text-white text-xs px-2 py-0.5 rounded font-deva">{cat.titleHi}</span>
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
            </div>
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
    </section>
  )
}
