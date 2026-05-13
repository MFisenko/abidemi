import { useState } from 'react'

const INITIAL = { name: '', email: '', phone: '', need: '', message: '', consent: false }

export default function GetHelp() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  function handle(e) {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function submit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="help" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gradient inline-block">
              Get Support
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6" style={{ color: '#111847' }}>
              You Don&apos;t Have to{' '}
              <span className="font-bold">Face It Alone</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              Whether you need immediate relief, long-term guidance, or simply someone to talk to —
              we&apos;re here. Fill out the form and one of our case workers will reach out within 24 hours.
            </p>
            <ul className="space-y-4">
              {[
                'Housing & emergency shelter assistance',
                'Food security &  nutrition programs',
                'Job training and career placement',
                'Mental health counseling referrals',
                'Children & family support services',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-btn flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10" style={{ boxShadow: '0 20px 50px -12px rgba(0,0,0,0.10)' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-btn mx-auto flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#111847' }}>We&apos;ve Received Your Request</h3>
                <p className="text-gray-500 font-light">A case worker will contact you within 24 hours. You are not alone.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-8" style={{ color: '#111847' }}>Request Support</h3>
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handle}
                        type="text"
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        required
                        name="email"
                        value={form.email}
                        onChange={handle}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Type of Support Needed *</label>
                    <select
                      required
                      name="need"
                      value={form.need}
                      onChange={handle}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition bg-white"
                    >
                      <option value="">Select a category</option>
                      <option>Housing &amp; Shelter</option>
                      <option>Food Security</option>
                      <option>Job Training &amp; Employment</option>
                      <option>Mental Health Support</option>
                      <option>Family &amp; Children Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell Us More</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={4}
                      placeholder="Briefly describe your situation and what kind of help you need..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handle}
                      required
                      className="mt-0.5 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-500 font-light">
                      I consent to Abidemi storing my information to process this support request and contact me.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gradient-btn text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all tracking-wide"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
