import { Terminal, MapPin, GraduationCap, Target, Award } from 'lucide-react'

const stats = [
  { value: '7+', label: 'Security Projects' },
  { value: '10+', label: 'MITRE Techniques' },
  { value: '3',   label: 'SIEM Platforms' },
  { value: '2026', label: 'Graduating' },
]

const certBadges = [
  'TryHackMe', 'Hack The Box', 'LetsDefend',
  'MITRE ATT\u0026CK Navigator', 'VirusTotal', 'Shodan',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-16">
          <p className="font-mono text-cyan-400 text-sm ls-wider uppercase tracking-widest mb-2">&gt; whoami</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.06em' }}>
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Bio */}
          <div className="reveal space-y-5">
            <div className="bg-[#050e1f] border border-cyan-400/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-cyan-400" />
                <span className="font-mono text-xs text-cyan-400/70 ls-wide">bio.txt</span>
              </div>
              <p className="text-slate-300 leading-relaxed" style={{ fontSize: '0.95rem' }}>
                I&apos;m a final-year B.Tech Computer Science student (MAKAUT, 2026) with a deep
                passion for{' '}
                <span className="text-cyan-400 font-medium">Blue Team cybersecurity</span>.
                I build production-grade security labs, write detection rules, and simulate
                adversary behaviour to understand the full kill chain from both attacker and
                defender perspectives.
              </p>
            </div>

            <div className="bg-[#050e1f] border border-cyan-400/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-cyan-400" />
                <span className="font-mono text-xs text-cyan-400/70 ls-wide">mission.txt</span>
              </div>
              <p className="text-slate-300 leading-relaxed" style={{ fontSize: '0.95rem' }}>
                My focus is on{' '}
                <span className="text-cyan-400 font-medium">
                  SOC operations, threat detection engineering, and incident response
                </span>.
                I work hands-on with Elastic SIEM, Wazuh, Microsoft Sentinel, and write KQL /
                Sigma rules mapped directly to the MITRE ATT&amp;CK framework.
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex items-start gap-3 text-slate-400" style={{ fontSize: '0.9rem' }}>
                <MapPin size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  Bhātpāra, West Bengal, India —{' '}
                  <span className="text-cyan-400">targeting Europe &amp; UK</span>
                </span>
              </div>
              <div className="flex items-start gap-3 text-slate-400" style={{ fontSize: '0.9rem' }}>
                <GraduationCap size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>B.Tech Computer Science — MAKAUT (Final Year, 2026)</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400" style={{ fontSize: '0.9rem' }}>
                <Target size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  Seeking{' '}
                  <span className="text-cyan-400 font-medium">SOC Analyst L1</span>{' '}
                  roles in Poland, Portugal, Germany, UK
                </span>
              </div>
              <div className="flex items-start gap-3 text-slate-400" style={{ fontSize: '0.9rem' }}>
                <Award size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Available for relocation — open to remote &amp; hybrid arrangements</span>
              </div>
            </div>
          </div>

          {/* Right — Stats + platforms */}
          <div className="reveal">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#050e1f] border border-cyan-400/10 rounded-xl p-6 text-center card-hover"
                >
                  <div
                    className="font-display font-bold text-cyan-400 text-glow mb-1"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
                  >
                    {s.value}
                  </div>
                  <div className="font-mono text-slate-500 text-xs ls-wide uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Platforms */}
            <div className="bg-[#050e1f] border border-cyan-400/10 rounded-xl p-5 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-slate-400 ls-wide">Platforms &amp; Learning</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {certBadges.map(p => (
                  <span
                    key={p}
                    className="px-3 py-1 bg-[#080f24] border border-cyan-400/15 rounded text-xs font-mono text-slate-400 hover:border-cyan-400/30 hover:text-slate-300 transition-all duration-200 cursor-default"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Open to work banner */}
            <div className="bg-gradient-to-r from-cyan-400/5 to-indigo-500/5 border border-cyan-400/20 rounded-xl p-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="font-mono text-xs text-cyan-400 ls-wide uppercase tracking-wider">Open to Work</p>
                <p className="text-slate-400 text-xs mt-0.5">Actively seeking SOC Analyst L1 positions — available June 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
