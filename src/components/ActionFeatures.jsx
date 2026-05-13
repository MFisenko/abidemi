export default function ActionFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 relative">
          <div className="flex flex-col group">
            <div className="flex items-center gap-5 mb-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#111847' }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight" style={{ color: '#111847' }}>How to Help</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed font-light pr-8">
              Your contribution empowers communities. Volunteer, Donate, or Advocate.
            </p>
          </div>

          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-200 -translate-x-1/2" />

          <div className="flex flex-col group md:pl-8">
            <div className="flex items-center gap-5 mb-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#111847' }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight" style={{ color: '#111847' }}>Get Support</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Find resources, education, and empowerment programs for your future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
