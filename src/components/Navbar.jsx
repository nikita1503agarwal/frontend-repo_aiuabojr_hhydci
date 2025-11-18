import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30"></div>
          <span className="text-white font-semibold tracking-tight group-hover:text-blue-200 transition-colors">Analyst Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-slate-200 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">Hire Me</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded hover:bg-white/10">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-slate-200 hover:bg-white/10">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded bg-blue-500 text-white text-center">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
