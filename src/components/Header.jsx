import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'News', href: '#success' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="py-8 px-6 lg:px-12 xl:px-24 border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a className="flex items-center gap-4" href="#">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.label}
              className="text-base font-medium text-gray-600 hover:text-[#111847] transition-colors tracking-wide"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white rounded-full hover:opacity-90 transition-all shadow-sm tracking-wide"
            style={{ backgroundColor: '#111847' }}
            href="#donate"
          >
            Donate
          </a>
        </div>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(v => !v)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                className="text-base font-medium text-gray-600 hover:text-[#111847] px-6"
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mx-6 mt-2 inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white rounded-full"
              style={{ backgroundColor: '#111847' }}
              href="#donate"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
