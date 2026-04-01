import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { Github, Linkedin, Twitter, ChevronDown, Download } from 'lucide-react'

const roles = [
  'SOC Analyst L1',
  'Detection Engineer',
  'Threat Intelligence Analyst',
  'Blue Teamer',
  'Incident Responder',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIdx]
    if (!deleting) {
      if (charIdx < current.length) {
        timeoutRef.current = setTimeout(() => setCharIdx(c => c + 1), 60)
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (charIdx > 0) {
        timeoutRef.current = setTimeout(() => setCharIdx(c => c - 1), 35)
      } else {
        setDeleting(false)
        setRoleIdx(r => (r + 1) % roles.length)
      }
    }
    setDisplayed(current.substring(0, charIdx))
    return () => clearTimeout(timeoutRef.current)
  }, [charIdx, deleting, roleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen grid-bg flex items-center overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — Text */}
          <div className="flex-1 text-left">
            <p className="text-cyan-400 font-mono text-sm ls-wider uppercase tracking-widest mb-4 opacity-0 animate-[fadeInUp_0.6s_ease_0.1s_forwards]">
              &gt; Hello, I&apos;m
            </p>

            <h1 className="font-display font-bold leading-none mb-2 opacity-0 animate-[fadeInUp_0.6s_ease_0.25s_forwards]">
              <span
                className="block text-white"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.08em' }}
              >
                Chandra Sekhar
              </span>
              <span
                className="block text-cyan-400 text-glow"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.08em' }}
              >
                Chakraborty
              </span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 mt-4 mb-6 opacity-0 animate-[fadeInUp_0.6s_ease_0.4s_forwards]">
              <span className="font-mono text-slate-400 text-sm ls-wider uppercase tracking-widest">/ /</span>
              <span
                className="font-display font-semibold text-slate-200 ls-wider uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', minHeight: '1.6em' }}
              >
                {displayed}
                <span className="cursor-blink" />
              </span>
            </div>

            <p className="text-slate-400 font-body leading-relaxed max-w-lg mb-8 opacity-0 animate-[fadeInUp_0.6s_ease_0.55s_forwards]" style={{ fontSize: '1rem' }}>
              Blue Teamer in the making 🛡️ — building real-world SOC labs, crafting detection rules
              with Sigma & KQL, and hunting threats across the MITRE ATT&amp;CK matrix.
              Seeking <span className="text-cyan-400 font-medium">SOC L1 roles in Europe & UK</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10 opacity-0 animate-[fadeInUp_0.6s_ease_0.7s_forwards]">
              <Link
                to="projects"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer px-7 py-3 bg-cyan-400 text-[#020818] font-display font-bold text-sm ls-wide uppercase tracking-wider rounded hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-all duration-200"
              >
                View Projects
              </Link>
              <a
                href="https://raw.githubusercontent.com/ChandraVerse/PERSONAL/main/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 border border-cyan-400/50 text-cyan-400 font-display font-semibold text-sm ls-wide uppercase tracking-wider rounded hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-200"
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5 opacity-0 animate-[fadeInUp_0.6s_ease_0.85s_forwards]">
              <a href="https://github.com/ChandraVerse" target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/chandrasekhar-chakraborty" target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/CS_Chakraborty" target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
            </div>
          </div>

          {/* RIGHT — Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-[fadeIn_0.8s_ease_0.5s_forwards]">
            <div className="relative">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-400/20"
                style={{ transform: 'scale(1.12)' }}
              />
              <div
                className="absolute inset-0 rounded-full border border-dashed border-cyan-400/15"
                style={{ transform: 'scale(1.22)', animation: 'spin 20s linear infinite' }}
              />

              {/* Hex frame */}
              <div
                className="relative w-64 h-64 lg:w-80 lg:h-80 animate-[float_4s_ease-in-out_infinite]"
              >
                {/* Outer glow hex */}
                <div
                  className="absolute inset-0 hex-clip bg-gradient-to-br from-cyan-400/20 to-indigo-500/20"
                  style={{ transform: 'scale(1.04)' }}
                />
                {/* Inner border hex */}
                <div
                  className="absolute inset-0 hex-clip bg-[#050e1f]"
                  style={{ transform: 'scale(1.01)' }}
                />
                {/* Profile photo */}
                <img
                  src="https://raw.githubusercontent.com/ChandraVerse/PERSONAL/main/Selfi.jpeg"
                  alt="Chandra Sekhar Chakraborty"
                  className="hex-clip w-full h-full object-cover"
                  width="320"
                  height="320"
                  loading="eager"
                />

                {/* Scan line effect */}
                <div className="absolute inset-0 hex-clip bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#050e1f] border border-cyan-400/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-[0_0_12px_rgba(34,211,238,0.15)]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-400">Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center opacity-0 animate-[fadeIn_0.6s_ease_1.1s_forwards]">
          <Link to="about" smooth={true} offset={-80} duration={500} className="cursor-pointer flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-400 transition-colors duration-200">
            <span className="font-mono text-xs ls-wider uppercase">Scroll</span>
            <ChevronDown size={18} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
