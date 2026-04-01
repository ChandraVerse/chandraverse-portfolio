import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020818]/90 backdrop-blur-md border-b border-cyan-400/10 shadow-lg shadow-cyan-400/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-cyan-400/40 rounded flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-300">
            <Shield size={16} className="text-cyan-400" />
          </div>
          <span className="font-display font-bold text-lg tracking-widest text-white">
            C<span className="text-cyan-400">S</span>C
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActive(link.to)}
                className={`nav-link px-4 py-2 text-sm font-medium font-body cursor-pointer ls-wide uppercase tracking-widest transition-colors duration-200 ${
                  active === link.to
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-cyan-300'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="https://raw.githubusercontent.com/ChandraVerse/PERSONAL/main/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2 border border-cyan-400/50 text-cyan-400 text-sm font-medium font-body ls-wide uppercase tracking-wider rounded hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)] transition-all duration-200"
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cyan-400 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#050e1f]/95 backdrop-blur-md border-b border-cyan-400/10 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 text-sm font-medium ls-wide uppercase tracking-widest cursor-pointer py-2 border-b border-cyan-400/5 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://raw.githubusercontent.com/ChandraVerse/PERSONAL/main/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-4 py-2 border border-cyan-400/50 text-cyan-400 text-sm rounded ls-wide uppercase tracking-wider"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
