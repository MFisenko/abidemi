import { useRef, useState, useEffect } from 'react'

const stories = [
  {
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    name: 'Amara O.',
    title: 'From Shelter to Homeowner',
    story:
      'After losing her apartment during a job loss, Amara enrolled in our housing-stability program. Within eight months, she secured steady employment through our job-placement network and purchased her first home. Today she volunteers as a peer mentor.',
  },
  {
    img: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=800&q=80',
    name: 'James & Kezia T.',
    title: 'A Family Reunited',
    story:
      "Separated by circumstance and miles, James and Kezia's family was stretched to a breaking point. Our emergency-relief fund covered temporary housing while our counselors connected them with local support networks, reuniting their household in under three weeks.",
  },
  {
    img: 'https://images.unsplash.com/photo-1509099927898-24886ccce4d3?auto=format&fit=crop&w=800&q=80',
    name: 'Dele M.',
    title: 'Tech Career Launched',
    story:
      'Dele came to us with ambition but no path forward. Through our digital-skills bootcamp, he earned a web-development certificate in 12 weeks and landed a junior developer role at a local startup, tripling his previous income.',
  },
  {
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
    name: 'Nkechi & Community',
    title: 'School Meals, Brighter Futures',
    story:
      'When Nkechi noticed children in her neighborhood going to school hungry, she partnered with our foundation to launch a morning-meal program. In its first year the initiative served over 400 students across three schools, improving attendance by 23%.',
  },
]

export default function SuccessHighlights() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  function scrollTo(index) {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (!card) return
    const trackLeft = track.getBoundingClientRect().left
    const cardLeft = card.getBoundingClientRect().left
    track.scrollBy({ left: cardLeft - trackLeft, behavior: 'smooth' })
    setActive(index)
  }

  function prev() { scrollTo(Math.max(0, active - 1)) }
  function next() { scrollTo(Math.min(stories.length - 1, active + 1)) }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    function onScroll() {
      const trackLeft = track.getBoundingClientRect().left
      let closest = 0
      let minDist = Infinity
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs(child.getBoundingClientRect().left - trackLeft)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setActive(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="success" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gradient inline-block">
              Impact Stories
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight" style={{ color: '#111847' }}>
              Real People,{' '}
              <span className="font-bold">Real Change</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 font-light max-w-xl">
              Behind every statistic is a person with a story. Here are a few of the lives your support has helped transform.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-8 mb-1">
            <button
              onClick={prev}
              disabled={active === 0}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all disabled:opacity-30"
              style={{ borderColor: '#111847', color: '#111847' }}
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={active === stories.length - 1}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30 text-white"
              style={{ background: 'linear-gradient(to right, #FF3385, #FFA933)' }}
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:-mx-12 lg:px-12 xl:-mx-24 xl:px-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((s, i) => (
            <div
              key={s.name}
              onClick={() => scrollTo(i)}
              className="snap-start flex-shrink-0 flex flex-col bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                width: 'clamp(300px, 38vw, 480px)',
                boxShadow: active === i
                  ? '0 20px 50px -8px rgba(0,0,0,0.18)'
                  : '0 4px 24px -6px rgba(0,0,0,0.10)',
                border: `1px solid ${active === i ? '#FF3385' : '#f3f4f6'}`,
                transform: active === i ? 'translateY(-4px)' : 'none',
              }}
            >
              <div className="w-full overflow-hidden bg-gray-100" style={{ height: '280px' }}>
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-gradient mb-3">{s.name}</p>
                <h3 className="text-xl font-semibold mb-4 leading-snug" style={{ color: '#111847' }}>{s.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed font-light flex-1">{s.story}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? '28px' : '8px',
                height: '8px',
                background: active === i ? 'linear-gradient(to right, #FF3385, #FFA933)' : '#e5e7eb',
              }}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
