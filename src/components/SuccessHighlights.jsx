const stories = [
  {
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    name: 'Amara O.',
    title: 'From Shelter to Homeowner',
    story:
      'After losing her apartment during a job loss, Amara enrolled in our housing-stability program. Within eight months, she secured steady employment through our job-placement network and purchased her first home. Today she volunteers as a peer mentor.',
  },
  {
    img: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600&q=80',
    name: 'James & Kezia T.',
    title: 'A Family Reunited',
    story:
      'Separated by circumstance and miles, James and Kezia\'s family was stretched to a breaking point. Our emergency-relief fund covered temporary housing while our counselors connected them with local support networks, reuniting their household in under three weeks.',
  },
  {
    img: 'https://images.unsplash.com/photo-1509099927898-24886ccce4d3?auto=format&fit=crop&w=600&q=80',
    name: 'Dele M.',
    title: 'Tech Career Launched',
    story:
      'Dele came to us with ambition but no path forward. Through our digital-skills bootcamp, he earned a web-development certificate in 12 weeks and landed a junior developer role at a local startup, tripling his previous income.',
  },
  {
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
    name: 'Nkechi & Community',
    title: 'School Meals, Brighter Futures',
    story:
      'When Nkechi noticed children in her neighborhood going to school hungry, she partnered with our foundation to launch a morning-meal program. In its first year the initiative served over 400 students across three schools, improving attendance by 23%.',
  },
]

export default function SuccessHighlights() {
  return (
    <section id="success" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gradient inline-block">
            Impact Stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight" style={{ color: '#111847' }}>
            Real People,{' '}
            <span className="font-bold">Real Change</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-light max-w-xl mx-auto">
            Behind every statistic is a person with a story. Here are a few of the lives your support has helped transform.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {stories.map(s => (
            <div
              key={s.name}
              className="snap-start flex-shrink-0 w-72 lg:w-auto bg-white rounded-3xl overflow-hidden flex flex-col"
              style={{ boxShadow: '0 4px 30px -8px rgba(0,0,0,0.12)', border: '1px solid #f3f4f6' }}
            >
              <div className="w-full h-52 overflow-hidden bg-gray-100">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-gradient mb-2">{s.name}</p>
                <h3 className="text-lg font-semibold mb-3 leading-snug" style={{ color: '#111847' }}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">{s.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
