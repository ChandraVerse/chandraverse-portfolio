import { Shield, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-cyan-400/5 bg-[#020818] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 border border-cyan-400/30 rounded flex items-center justify-center">
              <Shield size={14} className="text-cyan-400" />
            </div>
            <span className="font-display font-bold text-sm tracking-widest text-white">
              C<span className="text-cyan-400">S</span>C
            </span>
            <span className="text-slate-600 text-xs font-mono ml-2">Chandra Sekhar Chakraborty</span>
          </div>

          {/* Nav */}
          <nav className="flex gap-6">
            {['hero', 'about', 'skills', 'projects', 'contact'].map(section => (
              <Link
                key={section}
                to={section}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-mono text-xs ls-wide uppercase tracking-widest text-slate-600 hover:text-cyan-400 cursor-pointer transition-colors duration-200 capitalize"
              >
                {section === 'hero' ? 'Home' : section}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/ChandraVerse" target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-400 transition-colors duration-200">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/chandrasekhar-chakraborty" target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-400 transition-colors duration-200">
              <Linkedin size={16} />
            </a>
            <a href="https://twitter.com/CS_Chakraborty" target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-400 transition-colors duration-200">
              <Twitter size={16} />
            </a>
            <a href="mailto:chakrabortychandrasekhar185@gmail.com"
              className="text-slate-600 hover:text-cyan-400 transition-colors duration-200">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyan-400/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-slate-700">
            &copy; {year} Chandra Sekhar Chakraborty. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-700 flex items-center gap-1">
            Built with <Heart size={10} className="text-cyan-400" /> using React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
