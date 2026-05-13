const programs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Housing Stability',
    description: 'Emergency shelter placement, rental assistance, and long-term housing navigation to help individuals and families secure safe, stable homes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Education & Skills',
    description: 'GED prep, digital literacy, vocational training, and college-readiness programs that open doors to lasting economic opportunity.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Career Placement',
    description: 'Resume workshops, interview coaching, and direct employer partnerships that connect job-seekers with living-wage positions in growing industries.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Family Wellness',
    description: 'Counseling referrals, parenting support, childcare access, and mental-health resources that strengthen the whole family unit.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Food Security',
    description: 'Community pantries, school meal programs, and nutrition education ensuring no child or adult in our network goes to bed hungry.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Mentorship Network',
    description: 'One-to-one mentoring that pairs participants with community leaders who provide guidance, accountability, and lived-experience wisdom.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gradient inline-block">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight" style={{ color: '#111847' }}>
            Programs Built for{' '}
            <span className="font-bold">Lasting Change</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map(p => (
            <div
              key={p.title}
              className="group p-8 rounded-3xl border border-gray-100 hover:border-transparent transition-all duration-300"
              style={{ boxShadow: '0 2px 15px -4px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 50px -12px rgba(0,0,0,0.12)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 15px -4px rgba(0,0,0,0.06)'}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ backgroundColor: 'rgba(17,24,71,0.06)', color: '#111847' }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#111847' }}>{p.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
