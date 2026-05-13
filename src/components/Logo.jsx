export default function Logo({ size = 6 }) {
  return (
    <div className={`flex items-center gap-2 group`}>
      <div className={`w-${size} h-${size} relative flex-shrink-0`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8C24 8 18 2 12 2C6 2 2 6 2 12C2 18 10 26 24 40C38 26 46 18 46 12C46 6 42 2 36 2C30 2 24 8 24 8Z" fill="url(#logo-gradient)" />
          <path d="M16 18C16 18 12 12 8 12C4 12 2 16 2 20C2 24 10 32 24 40C24 40 16 32 16 18Z" fill="#3B82F6" />
          <path d="M32 18C32 18 36 12 40 12C44 12 46 16 46 20C46 24 38 32 24 40C24 40 32 32 32 18Z" fill="#10B981" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="logo-gradient" x1="2" x2="46" y1="2" y2="40">
              <stop stopColor="#FF3385" />
              <stop offset="1" stopColor="#FFA933" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold tracking-tight uppercase leading-none mb-0.5" style={{ color: '#111847' }}>Abidemi</span>
        <span className="text-[0.6rem] font-semibold tracking-widest uppercase leading-none" style={{ color: '#111847', letterSpacing: '.15em' }}>Hope &amp; Empowerment</span>
      </div>
    </div>
  )
}
