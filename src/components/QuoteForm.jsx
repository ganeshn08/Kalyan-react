import { useState } from 'react'

const products = ['Drip Irrigation', 'HDPE Lapeta Pipes', 'PVC Pipes & Fittings', 'Sprinkler System', 'Mulching Film', 'Automation & Filters', 'Other']

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', product: '', acres: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = e => {
    e.preventDefault()
    const text = encodeURIComponent(
      `*Quote Request — Kalyan Pipe Depot*\n\nName: ${form.name}\nPhone: ${form.phone}\nProduct: ${form.product}\nArea: ${form.acres} acres\nMessage: ${form.message || 'N/A'}`
    )
    window.open(`https://wa.me/919764298488?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="quote" className="py-20 bg-kgreen-pale">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <span className="inline-block bg-kgreen/10 text-kgreen text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Free Quote</span>
          <h2 className="text-3xl lg:text-4xl font-black text-kgreen font-deva mb-2">कोटेशन मागवा</h2>
          <p className="text-gray-600">Get a price quote via WhatsApp instantly</p>
        </div>

        <form onSubmit={submit} className="bg-white rounded-3xl shadow-xl p-8 reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
              <input
                required
                value={form.name}
                onChange={e => set('name', e.target.value)}
                placeholder="e.g. Ramesh Jadhav"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kgreen focus:ring-2 focus:ring-kgreen/20 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kgreen focus:ring-2 focus:ring-kgreen/20 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Needed *</label>
              <select
                required
                value={form.product}
                onChange={e => set('product', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kgreen focus:ring-2 focus:ring-kgreen/20 transition bg-white"
              >
                <option value="">Select a product</option>
                {products.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Farm Size (acres)</label>
              <input
                value={form.acres}
                onChange={e => set('acres', e.target.value)}
                placeholder="e.g. 5"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kgreen focus:ring-2 focus:ring-kgreen/20 transition"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Message</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={e => set('message', e.target.value)}
              placeholder="Any specific requirements, quantities, or questions..."
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kgreen focus:ring-2 focus:ring-kgreen/20 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-kgreen hover:bg-kgreen-mid text-white font-bold py-3.5 rounded-xl transition-colors text-base shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.1 1.507 5.832L0 24l6.337-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.374l-.359-.213-3.72.871.934-3.621-.234-.373A9.77 9.77 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/>
            </svg>
            {sent ? 'Sent! Check WhatsApp ✓' : 'Send Quote on WhatsApp'}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">We respond within 1 hour during business hours</p>
        </form>
      </div>
    </section>
  )
}
