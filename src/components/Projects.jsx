import { useState } from 'react'
import { Github, ExternalLink, AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Automated IR Threat Intelligence Platform',
    status: 'completed',
    description:
      'Production-grade Python pipeline that ingests Wazuh alerts, enriches IOCs via VirusTotal, AbuseIPDB & Shodan, auto-generates NIST 800-61 IR reports, implements SOAR triage automation, and tracks MTTD/MTTR through a Grafana dashboard.',
    tech: ['Python', 'Wazuh', 'VirusTotal API', 'AbuseIPDB', 'Shodan', 'Grafana', 'Docker', 'NIST 800-61'],
    screenshots: [
      'https://raw.githubusercontent.com/ChandraVerse/automated-ir-threat-intelligence-platform/main/docs/screenshots/screenshot1_wazuh_alerts.png',
      'https://raw.githubusercontent.com/ChandraVerse/automated-ir-threat-intelligence-platform/main/docs/screenshots/screenshot2_ioc_enrichment.png',
      'https://raw.githubusercontent.com/ChandraVerse/automated-ir-threat-intelligence-platform/main/docs/screenshots/screenshot3_grafana_dashboard.png',
    ],
    screenshotLabels: ['Wazuh Alerts', 'IOC Enrichment', 'Grafana Dashboard'],
    github: 'https://github.com/ChandraVerse/automated-ir-threat-intelligence-platform',
    highlights: ['Wazuh + SOAR automation', 'Triple API enrichment pipeline', 'MTTD/MTTR tracking', 'Auto IR report generation'],
  },
  {
    id: 2,
    title: 'Enterprise Detection Engineering Lab',
    status: 'completed',
    description:
      'Production-grade Elastic SIEM detection lab with Sysmon telemetry, 10+ Sigma rules mapped to MITRE ATT&CK, KQL/SPL conversions, and adversary simulation using Atomic Red Team for end-to-end detection validation.',
    tech: ['Elastic SIEM', 'Sysmon', 'Sigma', 'KQL', 'SPL', 'Kibana', 'MITRE ATT&CK', 'Atomic Red Team', 'Python'],
    screenshots: [
      'https://raw.githubusercontent.com/ChandraVerse/enterprise-detection-engineering-lab/main/docs/screenshots/screenshot1_elastic_alerts.png',
      'https://raw.githubusercontent.com/ChandraVerse/enterprise-detection-engineering-lab/main/docs/screenshots/screenshot2_sysmon_event.png',
      'https://raw.githubusercontent.com/ChandraVerse/enterprise-detection-engineering-lab/main/docs/screenshots/screenshot3_kibana_discover.png',
    ],
    screenshotLabels: ['Elastic Alerts', 'Sysmon Events', 'Kibana Discover'],
    github: 'https://github.com/ChandraVerse/enterprise-detection-engineering-lab',
    highlights: ['10+ Sigma detection rules', 'Sysmon telemetry pipeline', 'KQL/SPL rule translations', 'Adversary simulation'],
  },
  {
    id: 3,
    title: 'Active Directory Penetration Test',
    status: 'completed',
    description:
      'Full-scope Active Directory penetration test on a self-built lab — OSINT recon, phishing initial access, CVE exploitation, privilege escalation, domain compromise, BloodHound attack path mapping, and a professional CVSS-scored pentest report.',
    tech: ['BloodHound', 'Mimikatz', 'Impacket', 'Nmap', 'Metasploit', 'PowerShell', 'LDAP', 'Kerberos', 'CVSS'],
    screenshots: [
      'https://raw.githubusercontent.com/ChandraVerse/active-directory-penetration-test/main/docs/screenshots/screenshot1_nmap_recon.png',
      'https://raw.githubusercontent.com/ChandraVerse/active-directory-penetration-test/main/docs/screenshots/screenshot2_asrep_roasting.png',
      'https://raw.githubusercontent.com/ChandraVerse/active-directory-penetration-test/main/docs/screenshots/screenshot3_bloodhound_path.png',
      'https://raw.githubusercontent.com/ChandraVerse/active-directory-penetration-test/main/docs/screenshots/screenshot4_mimikatz_dump.png',
      'https://raw.githubusercontent.com/ChandraVerse/active-directory-penetration-test/main/docs/screenshots/screenshot5_attack_timeline.png',
    ],
    screenshotLabels: ['Nmap Recon', 'ASREPRoasting', 'BloodHound Path', 'Mimikatz Dump', 'Attack Timeline'],
    github: 'https://github.com/ChandraVerse/active-directory-penetration-test',
    highlights: ['Full kill chain coverage', 'BloodHound attack paths', 'CVSS-scored findings', 'Domain admin compromise'],
  },
  {
    id: 4,
    title: 'XAI Network Intrusion Detection System',
    status: 'completed',
    description:
      'Production-grade Explainable AI Network IDS trained on CICIDS-2017 (2.8M flows, 14 attack classes). Combines Random Forest, XGBoost, and LSTM with a dual XAI layer — SHAP for tree models and LIME for all models including LSTM — surfaced in a live Streamlit dashboard. Ships with 42 passing tests, full CI/CD pipeline, and Docker deployment.',
    tech: ['Python', 'Random Forest', 'XGBoost', 'LSTM', 'SHAP', 'LIME', 'Streamlit', 'Docker', 'Scikit-learn', 'TensorFlow', 'CICIDS-2017', 'GitHub Actions'],
    screenshots: [
      'https://raw.githubusercontent.com/ChandraVerse/xai-network-intrusion-detection/main/docs/screenshots/screenshot1_streamlit_dashboard.png',
      'https://raw.githubusercontent.com/ChandraVerse/xai-network-intrusion-detection/main/docs/screenshots/screenshot2_model_comparison.png',
      'https://raw.githubusercontent.com/ChandraVerse/xai-network-intrusion-detection/main/docs/screenshots/screenshot3_shap_summary.png',
      'https://raw.githubusercontent.com/ChandraVerse/xai-network-intrusion-detection/main/docs/screenshots/screenshot4_dataset_distribution.png',
    ],
    screenshotLabels: ['Live Detection Dashboard', 'Model Comparison', 'SHAP Feature Importance', 'Dataset Distribution'],
    github: 'https://github.com/ChandraVerse/xai-network-intrusion-detection',
    highlights: ['Dual XAI layer — SHAP + LIME', '99.94% RF accuracy on CICIDS-2017', '42 tests · CI/CD green', 'Docker + Streamlit deployment'],
  },
  {
    id: 5,
    title: 'SOC Log Analysis Lab',
    status: 'completed',
    description:
      'Hands-on SOC analyst simulation lab for investigating real-world security events across multiple environment layers — SSH brute force, password spray attacks, suspicious SQL queries, and multi-vector log correlation.',
    tech: ['Log Analysis', 'Linux', 'Splunk', 'SIEM', 'SSH Forensics', 'SQL Injection Detection'],
    screenshots: [
      'https://raw.githubusercontent.com/ChandraVerse/Log-Analysis-Lab/main/SSH_Attacks.png',
      'https://raw.githubusercontent.com/ChandraVerse/Log-Analysis-Lab/main/Password_Spray_Suspected.png',
      'https://raw.githubusercontent.com/ChandraVerse/Log-Analysis-Lab/main/Suspecious_Query.png',
    ],
    screenshotLabels: ['SSH Attack Detection', 'Password Spray', 'Suspicious SQL Query'],
    github: 'https://github.com/ChandraVerse/Log-Analysis-Lab',
    highlights: ['Multi-vector attack analysis', 'SSH brute-force detection', 'Password spray investigation', 'SQL injection patterns'],
  },
  {
    id: 6,
    title: 'SOC L1 Alert Triage Lab',
    status: 'completed',
    description:
      'TryHackMe-based SOC L1 alert triage lab simulating real analyst workflows — investigating phishing, malware, and network anomaly alerts with structured escalation procedures and professional lab reporting.',
    tech: ['TryHackMe', 'Alert Triage', 'Phishing Analysis', 'Malware Investigation', 'SOC Workflow', 'Escalation'],
    screenshots: [
      'https://raw.githubusercontent.com/ChandraVerse/SOC-L1-Alert-Triage/main/Task%201.png',
      'https://raw.githubusercontent.com/ChandraVerse/SOC-L1-Alert-Triage/main/Task%202.png',
      'https://raw.githubusercontent.com/ChandraVerse/SOC-L1-Alert-Triage/main/Task%203.png',
      'https://raw.githubusercontent.com/ChandraVerse/SOC-L1-Alert-Triage/main/Task%204.png',
    ],
    screenshotLabels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    github: 'https://github.com/ChandraVerse/SOC-L1-Alert-Triage',
    highlights: ['Real SOC L1 workflow', 'Phishing investigation', 'Malware alert triage', 'TryHackMe badge earned'],
  },
  {
    id: 7,
    title: 'Network Traffic Monitoring Lab',
    status: 'completed',
    description:
      'Hands-on SOC lab capturing and analyzing real network traffic using Wireshark on a Linux VM — protocol analysis (TCP/UDP/HTTP), anomaly detection, packet inspection, and comprehensive investigation reporting.',
    tech: ['Wireshark', 'Linux', 'TCP/IP', 'UDP', 'HTTP Analysis', 'Packet Capture', 'Protocol Analysis'],
    screenshots: [
      'https://raw.githubusercontent.com/ChandraVerse/Monitoring-Network-Traffic/main/HTTP.png',
      'https://raw.githubusercontent.com/ChandraVerse/Monitoring-Network-Traffic/main/TCP.png',
      'https://raw.githubusercontent.com/ChandraVerse/Monitoring-Network-Traffic/main/UDP.png',
    ],
    screenshotLabels: ['HTTP Traffic', 'TCP Analysis', 'UDP Packets'],
    github: 'https://github.com/ChandraVerse/Monitoring-Network-Traffic',
    highlights: ['Wireshark deep dive', 'HTTP/TCP/UDP analysis', 'Anomaly identification', 'Formal investigation report'],
  },
]

const FILTERS = [
  { val: 'all',         label: 'All Projects' },
  { val: 'completed',   label: 'Completed' },
  { val: 'in-progress', label: 'In Progress' },
]

function getCount(val) {
  if (val === 'all') return projects.length
  return projects.filter(p => p.status === val).length
}

function ProjectCard({ project }) {
  const [imgIdx, setImgIdx] = useState(0)
  const total = project.screenshots.length

  const prev = (e) => { e.stopPropagation(); setImgIdx(i => (i - 1 + total) % total) }
  const next = (e) => { e.stopPropagation(); setImgIdx(i => (i + 1) % total) }

  return (
    <div className="bg-[#050e1f] border border-cyan-400/10 rounded-xl overflow-hidden card-hover flex flex-col h-full">
      {/* Screenshot area */}
      <div className="relative h-52 bg-[#080f24] flex items-center justify-center overflow-hidden flex-shrink-0">
        {total > 0 ? (
          <>
            <img
              src={project.screenshots[imgIdx]}
              alt={project.screenshotLabels[imgIdx] || project.title}
              className="w-full h-full object-cover"
              width="600" height="208"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050e1f] to-transparent h-16 flex items-end px-4 pb-2">
              <span className="font-mono text-xs text-cyan-400/70">{project.screenshotLabels[imgIdx]}</span>
            </div>
            {total > 1 && (
              <>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#020818]/80 border border-cyan-400/20 rounded flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200" aria-label="Previous screenshot">
                  <ChevronLeft size={14} />
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#020818]/80 border border-cyan-400/20 rounded flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200" aria-label="Next screenshot">
                  <ChevronRight size={14} />
                </button>
                <div className="absolute top-2 right-3 flex gap-1">
                  {project.screenshots.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setImgIdx(i) }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === imgIdx ? 'bg-cyan-400' : 'bg-slate-600'}`}
                      aria-label={`Screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 text-slate-600 p-8 text-center">
            <div className="w-16 h-16 border-2 border-dashed border-cyan-400/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔬</span>
            </div>
            <p className="font-mono text-xs text-cyan-400/50 uppercase tracking-wider">In Development</p>
            <p className="text-xs text-slate-600">Screenshots coming soon</p>
          </div>
        )}
        {/* Status badge */}
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono ${
          project.status === 'completed'
            ? 'bg-green-400/10 border border-green-400/30 text-green-400'
            : 'bg-amber-400/10 border border-amber-400/30 text-amber-400'
        }`}>
          {project.status === 'completed'
            ? <><CheckCircle2 size={10} />&nbsp;Completed</>
            : <><AlertCircle size={10} />&nbsp;In Progress</>
          }
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white mb-2 leading-tight" style={{ fontSize: '1.05rem', letterSpacing: '0.03em' }}>
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-4 flex-1" style={{ fontSize: '0.875rem' }}>
          {project.description}
        </p>
        <ul className="space-y-1 mb-5">
          {project.highlights.map(h => (
            <li key={h} className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-0.5 bg-[#080f24] border border-cyan-400/10 rounded text-xs font-mono text-slate-500">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-cyan-400/5">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-xs font-mono transition-colors duration-200">
            <Github size={14} /> View on GitHub
          </a>
          <ExternalLink size={12} className="text-slate-700" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.status === filter)

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header — reveal is fine here, it never re-renders */}
        <div className="reveal mb-8">
          <p className="font-mono text-cyan-400 text-sm uppercase tracking-widest mb-2">&gt; ls -la ~/projects/</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.06em' }}>
            Security <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        {/* Filter buttons — no reveal class */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map(({ val, label }) => (
            <button
              key={val}
              type="button"
              onClick={() => setFilter(val)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded border transition-all duration-200 ${
                filter === val
                  ? 'bg-cyan-400/10 border-cyan-400/50 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.1)]'
                  : 'bg-transparent border-slate-700 text-slate-500 hover:border-cyan-400/30 hover:text-slate-300'
              }`}
            >
              {label} ({getCount(val)})
            </button>
          ))}
        </div>

        {/* Grid — cards rendered WITHOUT reveal wrapper so filter changes always show */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-slate-600 text-sm">No projects found.</p>
          </div>
        )}
      </div>
    </section>
  )
}
