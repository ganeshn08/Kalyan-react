const quickLinks = ['Products', 'Brands', 'Why Us', 'Contact']

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-kgreen text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/assets/images/kp-logo.jpg" alt="Kalyan Pipe Depot" className="h-12 w-12 rounded-lg object-cover" onError={e => e.target.style.display='none'} />
            <div>
              <div className="font-deva font-black text-lg leading-tight">कल्याण पाईप डेपो</div>
              <div className="text-xs text-gray-400">Kalyan Pipe Depot</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Wholesale supplier of drip irrigation, HDPE pipes & PVC fittings. Serving farmers since 2003.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://wa.me/919764298488" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.1 1.507 5.832L0 24l6.337-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.374l-.359-.213-3.72.871.934-3.621-.234-.373A9.77 9.77 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/></svg>
            </a>
            <a href="tel:9764298488" className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} className="text-gray-400 hover:text-gold text-sm transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Phulambri, Chhatrapati Sambhajinagar</li>
            <li><a href="tel:9764298488" className="hover:text-gold transition-colors">📞 97642 98488</a></li>
            <li><a href="tel:9890378253" className="hover:text-gold transition-colors">📞 98903 78253</a></li>
            <li><a href="mailto:kalyanpolymers394@gmail.com" className="hover:text-gold transition-colors">✉ kalyanpolymers394@gmail.com</a></li>
            <li className="text-xs text-gray-500 pt-1">GST: 27BKMPN8244C1ZY</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {year} Kalyan Pipe Depot, Phulambri. All rights reserved.
      </div>
    </footer>
  )
}
