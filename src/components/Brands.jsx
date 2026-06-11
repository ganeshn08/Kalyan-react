const brands = [
  { name: 'Finolex Drip', img: '/assets/images/finolex-drip-1.jpg' },
  { name: 'Jain Irrigation', img: '/assets/images/kp-drip-poster.png' },
  { name: 'Kothari Group', img: '/assets/images/kothari-rates.jpg' },
  { name: 'KP Kalyan Polymers', img: '/assets/images/kp-logo.jpg' },
  { name: 'Tiger Lapeta', img: '/assets/images/tiger-lapeta.jpg' },
  { name: 'Vijay Kisan', img: '/assets/images/vijay-kisan-lapeta.jpg' },
  { name: 'Icon Irrigation', img: '/assets/images/icon-drip.jpg' },
  { name: 'Radhakrishna', img: '/assets/images/radhakrishna.png' },
]

export default function Brands() {
  const all = [...brands, ...brands]

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <span className="inline-block bg-gold/20 text-gold-dark text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Our Partners</span>
          <h2 className="text-2xl lg:text-3xl font-black text-kgreen">Brands We Stock</h2>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track items-center py-2">
          {all.map((b, i) => (
            <div key={i} className="flex items-center gap-3 bg-kgreen-pale border border-kgreen/10 rounded-xl px-4 py-3 min-w-max mx-2 shadow-sm">
              <img
                src={b.img}
                alt={b.name}
                className="w-10 h-10 rounded-lg object-cover"
                onError={e => e.target.style.display = 'none'}
              />
              <span className="text-kgreen font-bold text-sm whitespace-nowrap">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
