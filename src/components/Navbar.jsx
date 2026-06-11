import { useState, useEffect } from 'react'

const links = ['Home','Products','Brands','Why Us','Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const href = (l) => `#${l.toLowerCase().replace(/\s+/g,'-')}`

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-white/80 backdrop-blur py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/assets/images/kp-logo.jpg" alt="Kalyan Pipe Depot" className="h-12 w-auto rounded" />
          <div className="hidden sm:block">
            <div className="font-deva font-bold text-kgreen text-base leading-tight">कल्याण पाईप डेपो</div>
            <div className="text-xs text-gray-500 font-semibold tracking-wide uppercase">Wholesale Irrigation & PVC</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l} href={href(l)} className="text-sm font-semibold text-gray-700 hover:text-kgreen transition-colors">{l}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="tel:9764298488" className="hidden md:inline-flex items-center gap-2 bg-kgreen text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-kgreen-mid transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call Now
        </a>

        {/* Hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-kgreen transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-kgreen mt-1.5 transition-all ${open ? 'opacity-0' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-kgreen mt-1.5 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l} href={href(l)} onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-kgreen">{l}</a>
          ))}
          <a href="tel:9764298488" className="inline-flex items-center gap-2 bg-kgreen text-white text-sm font-bold px-4 py-2 rounded-full w-fit">
            Call: 97642 98488
          </a>
        </div>
      )}
    </header>
  )
}
