import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'SIEM & Detection',
    icon: '🛡️',
    skills: [
      { name: 'Microsoft Sentinel',          level: 85 },
      { name: 'Elastic SIEM / Kibana',        level: 88 },
      { name: 'Wazuh',                        level: 82 },
      { name: 'Sigma Rules',                  level: 86 },
      { name: 'KQL (Kusto Query Language)',   level: 84 },
    ],
  },
  {
    category: 'Threat Intelligence',
    icon: '🔍',
    skills: [
      { name: 'MITRE ATT\u0026CK Framework',       level: 90 },
      { name: 'IOC Enrichment (VT, AbuseIPDB)', level: 83 },
      { name: 'Threat Hunting',                level: 78 },
      { name: 'BloodHound / AD Analysis',      level: 80 },
      { name: 'OSINT Techniques',              level: 79 },
    ],
  },
  {
    category: 'Incident Response',
    icon: '⚡',
    skills: [
      { name: 'NIST 800-61 IR Process',      level: 85 },
      { name: 'Log Analysis & Triage',        level: 90 },
      { name: 'Alert Triage & Escalation',    level: 87 },
      { name: 'Wireshark / Packet Analysis',  level: 80 },
      { name: 'Forensic Investigation',       level: 74 },
    ],
  },
  {
    category: 'Development & Tools',
    icon: '⚙️',
    skills: [
      { name: 'Python (Automation)',          level: 86 },
      { name: 'Bash / Shell Scripting',       level: 80 },
      { name: 'Docker',                       level: 75 },
      { name: 'Git / GitHub Actions',         level: 88 },
      { name: 'Sysmon / Windows Event Logs',  level: 83 },
    ],
  },
]

const techBadges = [
  'Python', 'Bash', 'KQL', 'SPL', 'Sigma', 'YARA',
  'Elastic Stack', 'Wazuh', 'Sentinel', 'Grafana',
  'Docker', 'Linux', 'Windows AD', 'BloodHound',
  'Nmap', 'Wireshark', 'Metasploit', 'Mimikatz',
  'MITRE ATT\u0026CK', 'NIST', 'OWASP', 'VirusTotal',
  'AbuseIPDB', 'Shodan', 'Atomic Red Team', 'Sysmon',
]

function SkillBar({ name, level }) {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${level}%`
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(bar.parentElement)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-slate-300" style={{ fontSize: '0.875rem' }}>{name}</span>
        <span className="font-mono text-cyan-400/70" style={{ fontSize: '0.75rem' }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[#0c1a35] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
          style={{
            width: '0%',
            boxShadow: '0 0 8px rgba(34,211,238,0.4)',
            transition: 'width 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050e1f]/50 relative">
      <div className="max-w-6xl mx-auto">

        <div className="reveal mb-16">
          <p className="font-mono text-cyan-400 text-sm ls-wider uppercase tracking-widest mb-2">&gt; skills --list</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.06em' }}>
            Technical <span className="text-cyan-400">Arsenal</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="reveal bg-[#050e1f] border border-cyan-400/10 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{group.icon}</span>
                <h3
                  className="font-display font-semibold text-white ls-wide uppercase tracking-widest"
                  style={{ fontSize: '0.8rem' }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map(s => <SkillBar key={s.name} {...s} />)}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="reveal">
          <p className="font-mono text-xs text-slate-500 ls-wider uppercase tracking-widest mb-4">&gt; tech --badges</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map(badge => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-[#050e1f] border border-cyan-400/15 rounded text-xs font-mono text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
