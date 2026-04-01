import { useState } from 'react'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, ExternalLink } from 'lucide-react'

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@ChandraVerse',
    url: 'https://github.com/ChandraVerse',
    description: '22 repositories · Security projects & labs',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Chandra Sekhar Chakraborty',
    url: 'https://linkedin.com/in/chandrasekhar-chakraborty',
    description: 'Professional network & experience',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@CS_Chakraborty',
    url: 'https://twitter.com/CS_Chakraborty',
    description: 'Cybersecurity discussions & updates',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'chakrabortychandrasekhar185@gmail.com',
    url: 'mailto:chakrabortychandrasekhar185@gmail.com',
    description: 'Direct contact for opportunities',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:chakrabortychandrasekhar185@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#050e1f]/50 relative">
      <div className="max-w-6xl mx-auto">

        <div className="reveal mb-16">
          <p className="font-mono text-cyan-400 text-sm ls-wider uppercase tracking-widest mb-2">&gt; contact --open</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.06em' }}>
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
          <p className="mt-4 text-slate-400 max-w-xl" style={{ fontSize: '0.95rem' }}>
            Open to <span className="text-cyan-400 font-medium">SOC Analyst L1</span> opportunities in Europe & UK.
            Reach out for collaborations, opportunities, or just to talk security.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — Social links */}
          <div className="reveal space-y-4">
            {socials.map(({ icon: Icon, label, handle, url, description }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#050e1f] border border-cyan-400/10 rounded-lg card-hover group"
              >
                <div className="w-10 h-10 border border-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/5 transition-all duration-200">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-semibold text-white text-sm ls-wide uppercase tracking-wider">{label}</span>
                    <ExternalLink size={11} className="text-slate-600 group-hover:text-cyan-400/50 transition-colors duration-200" />
                  </div>
                  <p className="font-mono text-cyan-400/70 text-xs truncate">{handle}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{description}</p>
                </div>
              </a>
            ))}

            {/* Location note */}
            <div className="flex items-start gap-3 p-4 bg-[#050e1f] border border-amber-400/10 rounded-lg">
              <MapPin size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-xs text-amber-400/70 ls-wide uppercase tracking-wider mb-1">Location</p>
                <p className="text-slate-300 text-sm">Currently in West Bengal, India</p>
                <p className="text-slate-500 text-xs mt-0.5">Willing to relocate to Europe & UK for the right opportunity</p>
              </div>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-[#050e1f] border border-cyan-400/10 rounded-xl p-7 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-red-400 rounded-full" />
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="font-mono text-xs text-slate-600 ml-2">contact_form.jsx</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-500 ls-wide uppercase tracking-wider mb-1.5" htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#080f24] border border-cyan-400/10 rounded-lg px-4 py-2.5 text-slate-300 text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 ls-wide uppercase tracking-wider mb-1.5" htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#080f24] border border-cyan-400/10 rounded-lg px-4 py-2.5 text-slate-300 text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-500 ls-wide uppercase tracking-wider mb-1.5" htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  value={form.subject} onChange={handleChange}
                  placeholder="SOC Analyst L1 Opportunity"
                  className="w-full bg-[#080f24] border border-cyan-400/10 rounded-lg px-4 py-2.5 text-slate-300 text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-500 ls-wide uppercase tracking-wider mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about the opportunity..."
                  className="w-full bg-[#080f24] border border-cyan-400/10 rounded-lg px-4 py-2.5 text-slate-300 text-sm font-body placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-400 text-[#020818] font-display font-bold text-sm ls-wide uppercase tracking-wider rounded-lg hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] active:scale-[0.98] transition-all duration-200"
              >
                {sent ? 'Opening Email Client…' : <><Send size={14} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
