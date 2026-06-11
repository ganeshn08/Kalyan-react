const reasons = [
  {
    icon: '🌾',
    title: 'Farmer-First Approach',
    titleHi: 'शेतकरी प्रथम',
    desc: 'We understand the real needs of farmers. Our staff speaks Marathi and provides free on-farm guidance.',
  },
  {
    icon: '💰',
    title: 'Wholesale Pricing',
    titleHi: 'घाऊक किंमती',
    desc: 'Direct from manufacturer to farmer — no middlemen. Best prices in Phulambri taluka, guaranteed.',
  },
  {
    icon: '✅',
    title: '100% Genuine Products',
    titleHi: 'खात्रीशीर माल',
    desc: 'Authorised dealer for Finolex, Jain, Kothari and more. No duplicates, no compromises on quality.',
  },
  {
    icon: '🚀',
    title: 'Quick Delivery',
    titleHi: 'जलद डिलिव्हरी',
    desc: 'Same-day dispatch for in-stock items. Delivery available across Phulambri taluka for bulk orders.',
  },
  {
    icon: '🛠',
    title: 'Installation Support',
    titleHi: 'इंस्टॉलेशन मदत',
    desc: 'Free drip system design & layout planning. Site visits available for large farms.',
  },
  {
    icon: '📞',
    title: '20+ Years Experience',
    titleHi: '२०+ वर्षांचा अनुभव',
    desc: 'Est. 2003 by Karbhari Nage. Two decades of trusted service to the farming community.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-kgreen text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blob-1 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold/10 blob-2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-gold/20 border border-gold/30 text-gold text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white font-deva mb-2">आम्हाला का निवडावे?</h2>
          <p className="text-gray-300 text-lg">Why Kalyan Pipe Depot</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-black text-white text-lg mb-0.5">{r.title}</h3>
              <div className="font-deva text-gold text-sm mb-2">{r.titleHi}</div>
              <p className="text-gray-300 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Shop photo */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center reveal">
          <div>
            <img src="/assets/images/shop-front.jpg" alt="Kalyan Pipe Depot store" className="rounded-2xl shadow-2xl w-full object-cover max-h-72" onError={e => e.target.style.display='none'} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white mb-3">Visit Our Store</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Walk in to our wholesale store in Phulambri. Browse our full range, get expert advice, and take home genuine irrigation products at the best prices.
            </p>
            <div className="font-deva text-gold text-lg font-bold">फुलंब्री, औरंगाबाद जिल्हा</div>
            <p className="text-gray-400 text-sm mt-1">Open Mon–Sat, 9 AM – 7 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
