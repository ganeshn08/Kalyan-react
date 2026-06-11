const contacts = [
  { label: 'Ganesh Nage', role: 'Proprietor', phone: '9764298488', wa: true },
  { label: 'Karbhari Nage', role: 'Founder', phone: '9890378253', wa: false },
  { label: 'Office', role: 'General Enquiry', phone: '8421548488', wa: true },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-kgreen/10 text-kgreen text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Find Us</span>
          <h2 className="text-3xl lg:text-4xl font-black text-kgreen font-deva mb-2">संपर्क करा</h2>
          <p className="text-gray-600 text-lg">Contact & Location</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: contact info */}
          <div className="reveal-left space-y-6">
            {/* Address */}
            <div className="bg-kgreen-pale rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-kgreen text-white rounded-xl p-3 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-kgreen text-lg mb-1">Store Address</h3>
                  <p className="text-gray-700 font-medium">Kalyan Pipe Depot</p>
                  <p className="text-gray-600 text-sm">Phulambri, Chhatrapati Sambhajinagar</p>
                  <p className="text-gray-600 text-sm">Maharashtra, India — 431111</p>
                  <p className="text-gray-400 text-xs mt-1">GST: 27BKMPN8244C1ZY</p>
                  <a
                    href="https://maps.google.com/?cid=12512059049760139202"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-kgreen font-semibold text-sm underline underline-offset-2"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="space-y-3">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="bg-kgreen/10 rounded-full p-2.5">
                    <svg className="w-4 h-4 text-kgreen" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-kgreen text-sm">{c.label}</div>
                    <div className="text-gray-400 text-xs">{c.role}</div>
                  </div>
                  <div className="flex gap-2">
                    <a href={`tel:${c.phone}`} className="text-sm font-semibold text-kgreen hover:underline">{c.phone}</a>
                    {c.wa && (
                      <a href={`https://wa.me/91${c.phone}`} target="_blank" rel="noreferrer" className="text-green-500 text-xs font-bold">(WA)</a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <svg className="w-4 h-4 text-kgreen" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
              <a href="mailto:kalyanpolymers394@gmail.com" className="hover:text-kgreen">kalyanpolymers394@gmail.com</a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="reveal-right">
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 border border-gray-100">
              <iframe
                title="Kalyan Pipe Depot Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1!2d75.5!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbfc2335fc469%3A0xadc1f97314998bc2!2sKalyan%20Pipe%20Depot!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">Phulambri, Maharashtra</p>
          </div>
        </div>
      </div>
    </section>
  )
}
