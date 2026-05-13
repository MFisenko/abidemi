import { useState } from 'react'

const AMOUNTS = [25, 50, 100, 250]
const INITIAL = { firstName: '', lastName: '', email: '', amount: 50, custom: '', frequency: 'once', message: '' }

export default function Donate() {
  const [form, setForm] = useState(INITIAL)
  const [useCustom, setUseCustom] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handle(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function selectAmount(amt) {
    setUseCustom(false)
    setForm(f => ({ ...f, amount: amt, custom: '' }))
  }

  function submit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const displayAmount = useCustom ? (form.custom || '?') : form.amount

  return (
    <section id="donate" className="py-24 lg:py-32 bg-white" style={{ background: 'linear-gradient(to bottom, #ffffff, #f9fafb)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white rounded-3xl p-8 lg:p-10 order-2 lg:order-1" style={{ boxShadow: '0 20px 50px -12px rgba(0,0,0,0.10)' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6" style={{ background: 'linear-gradient(to right, #FF3385, #FFA933)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#111847' }}>Thank You, {form.firstName}!</h3>
                <p className="text-gray-500 font-light mb-2">Your ${displayAmount} donation is making a real difference.</p>
                <p className="text-gray-400 text-sm">A receipt will be sent to {form.email}</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-8" style={{ color: '#111847' }}>Make a Donation</h3>
                <form onSubmit={submit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Donation Frequency</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['once', 'monthly', 'annually'].map(freq => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setForm(f => ({ ...f, frequency: freq }))}
                          className="py-2.5 rounded-xl text-sm font-semibold capitalize transition-all border"
                          style={form.frequency === freq
                            ? { background: 'linear-gradient(to right, #FF3385, #FFA933)', color: '#fff', borderColor: 'transparent' }
                            : { borderColor: '#e5e7eb', color: '#6b7280', background: '#fff' }
                          }
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount</label>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {AMOUNTS.map(amt => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => selectAmount(amt)}
                          className="py-3 rounded-xl text-sm font-semibold transition-all border"
                          style={!useCustom && form.amount === amt
                            ? { background: 'linear-gradient(to right, #FF3385, #FFA933)', color: '#fff', borderColor: 'transparent' }
                            : { borderColor: '#e5e7eb', color: '#6b7280', background: '#fff' }
                          }
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">$</span>
                      <input
                        name="custom"
                        value={form.custom}
                        onChange={e => { setUseCustom(true); handle(e) }}
                        onFocus={() => setUseCustom(true)}
                        type="number"
                        min="1"
                        placeholder="Other amount"
                        className="w-full rounded-xl border border-gray-200 pl-8 pr-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition"
                        style={useCustom ? { borderColor: '#FF3385', boxShadow: '0 0 0 2px rgba(255,51,133,0.15)' } : {}}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                      <input
                        required
                        name="firstName"
                        value={form.firstName}
                        onChange={handle}
                        type="text"
                        placeholder="First"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                      <input
                        required
                        name="lastName"
                        value={form.lastName}
                        onChange={handle}
                        type="text"
                        placeholder="Last"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Personal Message <span className="text-gray-400 font-normal">(optional)</span></label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={3}
                      placeholder="Share why you're giving today..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#FF3385] focus:ring-2 focus:ring-[#FF3385]/20 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all tracking-wide text-base"
                    style={{ background: 'linear-gradient(to right, #FF3385, #FFA933)' }}
                  >
                    Donate ${displayAmount} {form.frequency !== 'once' && `/ ${form.frequency}`}
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Secure &amp; encrypted. Abidemi is a registered 501(c)(3) nonprofit.
                  </p>
                </form>
              </>
            )}
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gradient inline-block">
              Donate
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6" style={{ color: '#111847' }}>
              Your Gift Moves{' '}
              <span className="font-bold">Mountains</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              Every dollar you give goes directly to programs that lift people out of crisis and into
              stability. No overhead fluff — just impact.
            </p>
            <div className="space-y-5">
              {[
                { amount: '$25', impact: 'Provides a week of nutritious meals for one child.' },
                { amount: '$50', impact: 'Covers job-training materials for one participant.' },
                { amount: '$100', impact: 'Funds one month of emergency housing support.' },
                { amount: '$250', impact: 'Sponsors a full mentorship cycle for one family.' },
              ].map(item => (
                <div key={item.amount} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 text-white text-sm font-bold px-4 py-2 rounded-full"
                    style={{ background: 'linear-gradient(to right, #FF3385, #FFA933)' }}
                  >
                    {item.amount}
                  </div>
                  <p className="text-gray-600 font-light pt-1.5">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
