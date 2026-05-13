const HERO_IMG = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-32">
      <div className="absolute inset-0 z-0">
        <img
          alt="Family smiling together outside their home"
          className="w-full h-full object-cover object-center"
          src={HERO_IMG}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div
          className="max-w-2xl bg-white/95 backdrop-blur-sm p-12 lg:p-16 rounded-3xl"
          style={{ boxShadow: '0 25px 60px -12px rgba(0,0,0,0.15)' }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 relative flex-shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8C24 8 18 2 12 2C6 2 2 6 2 12C2 18 10 26 24 40C38 26 46 18 46 12C46 6 42 2 36 2C30 2 24 8 24 8Z" fill="url(#hero-logo)" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="hero-logo" x1="2" x2="46" y1="2" y2="40">
                    <stop stopColor="#FF3385" />
                    <stop offset="1" stopColor="#FFA933" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight uppercase leading-none mb-1" style={{ color: '#111847' }}>Abidemi</span>
              <span className="text-[0.65rem] font-semibold tracking-widest uppercase leading-none" style={{ color: '#111847', letterSpacing: '.15em' }}>Hope &amp; Empowerment</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Empowering Lives.<br />
            Creating Opportunities.<br />
            <span className="font-bold" style={{ color: '#111847' }}>Building a Better Tomorrow.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-5 mt-16">
            <a
              className="bg-gradient-btn text-white px-8 py-4 rounded-full text-lg hover:shadow-lg transition-all text-center tracking-wide w-full sm:w-auto font-bold"
              href="#get-involved"
            >
              How to Help
            </a>
            <a
              className="text-white px-8 py-4 rounded-full text-lg hover:opacity-90 transition-all shadow-md text-center tracking-wide w-full sm:w-auto font-bold"
              style={{ backgroundColor: '#111847' }}
              href="#help"
            >
              Get Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
