const stats = [
  { value: '2,400+', label: 'Lives Impacted' },
  { value: '18', label: 'Community Programs' },
  { value: '12', label: 'Years of Service' },
  { value: '340+', label: 'Active Volunteers' },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gradient inline-block">
              About Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-8" style={{ color: '#111847' }}>
              A Foundation Built on{' '}
              <span className="font-bold">Hope and Dignity</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              Abidemi Hope &amp; Empowerment Foundation was established with a single, unwavering belief:
              that every person deserves the opportunity to thrive. For over a decade, we have worked
              alongside individuals and families facing adversity — providing not just resources, but
              genuine pathways to lasting independence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              Our approach is rooted in dignity and community. We listen first, then act — pairing
              emergency relief with long-term education, job-readiness training, and mentorship programs
              that address the root causes of hardship rather than just the symptoms.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              From our first neighborhood food drive to today's city-wide network of services, we remain
              committed to the communities that trusted us from the beginning. Every program we run,
              every partnership we forge, and every dollar we steward serves one purpose: to make sure
              no one walks their hardest road alone.
            </p>
          </div>

          <div className="space-y-8">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 50px -12px rgba(0,0,0,0.12)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
                alt="Community members gathered together"
                className="w-full h-72 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(stat => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 text-center"
                  style={{ boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)' }}
                >
                  <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
