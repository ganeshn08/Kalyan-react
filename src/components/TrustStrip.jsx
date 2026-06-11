const items = [
  { icon: '🏆', label: 'Est. 2003 — 20+ Years' },
  { icon: '✅', label: '100% Genuine Products' },
  { icon: '🚜', label: 'Farmer-First Service' },
  { icon: '🏪', label: 'Walk-in Wholesale Store' },
  { icon: '📞', label: 'Expert Guidance' },
  { icon: '🌾', label: 'Phulambri Taluka Trusted' },
]

export default function TrustStrip() {
  return (
    <section id="trust" className="bg-kgreen text-white py-4 overflow-hidden">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-6 whitespace-nowrap text-sm font-semibold">
            <span>{item.icon}</span>
            <span>{item.label}</span>
            <span className="text-gold mx-2">•</span>
          </div>
        ))}
      </div>
    </section>
  )
}
