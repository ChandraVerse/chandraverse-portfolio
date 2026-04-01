<div align="center">

<!-- Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=22d3ee&height=200&section=header&text=Chandra%20Sekhar%20Chakraborty&fontSize=36&fontColor=ffffff&fontAlignY=38&desc=SOC%20Analyst%20L1%20%7C%20Detection%20Engineer%20%7C%20Blue%20Teamer&descAlignY=60&descSize=16" width="100%" />

<!-- Live Badge -->
[![Portfolio Live](https://img.shields.io/badge/%F0%9F%8C%90%20Portfolio-Live-22d3ee?style=for-the-badge)](https://chandraverse.github.io/chandraverse-portfolio/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/ChandraVerse/chandraverse-portfolio/deploy.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=CI%2FCD&color=22d3ee)](https://github.com/ChandraVerse/chandraverse-portfolio/actions)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br/>

> **Production-grade cybersecurity portfolio** showcasing 7 real-world security projects across SOC operations,
> detection engineering, threat intelligence, and penetration testing.
> Built with React + Vite + Tailwind CSS. Auto-deployed via GitHub Actions.

[🌐 View Live Portfolio](https://chandraverse.github.io/chandraverse-portfolio/) &nbsp;·&nbsp;
[📄 Download Resume](https://raw.githubusercontent.com/ChandraVerse/PERSONAL/main/Resume.pdf) &nbsp;·&nbsp;
[📬 Contact Me](mailto:chakrabortychandrasekhar185@gmail.com)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Featured Projects](#-featured-projects)
- [Portfolio Sections](#-portfolio-sections)
- [Quick Start](#-quick-start)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Contact](#-contact)

---

## 👤 About

```yaml
Name     : Chandra Sekhar Chakraborty
Role     : Aspiring SOC Analyst L1 | Detection Engineer
Location : Baranagar, West Bengal, India
Target   : Worldwide (open to relocation — EU, UK, remote)
Grad     : B.Tech Computer Science — MAKAUT (2026)
Focus    : Blue Team | Threat Detection | Incident Response
Status   : Actively seeking SOC Analyst L1 positions (Available June 2026)
```

**Core expertise:** Elastic SIEM · Wazuh · Microsoft Sentinel · KQL · Sigma Rules ·
MITRE ATT&CK · Python · Incident Response · Log Analysis · Threat Intelligence

---

## 🌐 Live Demo

<div align="center">

| 🌐 Live URL | 🔁 Auto-Deploy | 📦 Build Tool |
|:-----------:|:--------------:|:-------------:|
| [chandraverse.github.io/chandraverse-portfolio](https://chandraverse.github.io/chandraverse-portfolio/) | Every push to `main` | Vite + GitHub Actions |

</div>

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + Vite 6 |
| **Styling** | Tailwind CSS 3 + Custom CSS Variables |
| **Fonts** | Space Grotesk · Inter · JetBrains Mono |
| **Icons** | Lucide React |
| **Animations** | IntersectionObserver · CSS Keyframes |
| **Deployment** | GitHub Actions → GitHub Pages |
| **CI/CD** | `.github/workflows/deploy.yml` (auto on push) |

---

## 💼 Featured Projects

| # | Project | Status | Key Technologies |
|---|---------|--------|------------------|
| 1 | [Automated IR Threat Intelligence Platform](https://github.com/ChandraVerse/automated-ir-threat-intelligence-platform) | ✅ Completed | Python · Wazuh · VirusTotal API · Grafana · Docker · NIST 800-61 |
| 2 | [Enterprise Detection Engineering Lab](https://github.com/ChandraVerse/enterprise-detection-engineering-lab) | ✅ Completed | Elastic SIEM · Sysmon · Sigma · KQL · Kibana · MITRE ATT&CK |
| 3 | [Active Directory Penetration Test](https://github.com/ChandraVerse/active-directory-penetration-test) | ✅ Completed | BloodHound · Mimikatz · Impacket · Nmap · Metasploit · CVSS |
| 4 | [XAI Network Intrusion Detection System](https://github.com/ChandraVerse/xai-network-intrusion-detection) | 🔄 In Progress | Python · XGBoost · LSTM · SHAP · Streamlit · Docker |
| 5 | [SOC Log Analysis Lab](https://github.com/ChandraVerse/Log-Analysis-Lab) | ✅ Completed | Log Analysis · Splunk · SIEM · SSH Forensics · Linux |
| 6 | [SOC L1 Alert Triage Lab](https://github.com/ChandraVerse/SOC-L1-Alert-Triage) | ✅ Completed | TryHackMe · Alert Triage · Phishing Analysis · SOC Workflow |
| 7 | [Network Traffic Monitoring Lab](https://github.com/ChandraVerse/Monitoring-Network-Traffic) | ✅ Completed | Wireshark · TCP/IP · UDP · HTTP Analysis · Packet Capture |

---

## 🗂️ Portfolio Sections

```
🏠 Hero          — Name, role typewriter animation, profile photo, CTA buttons
👤 About         — Bio, location, education, open-to-work status, platform badges
🔧 Skills        — Animated skill bars: KQL, Sigma, Python, MITRE ATT&CK, Elastic...
💼 Projects      — 7 project cards with real screenshots, filter by status, GitHub links
📬 Contact       — Email, GitHub, LinkedIn, Twitter, resume download
🔻 Footer        — Quick links + copyright
```

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/ChandraVerse/chandraverse-portfolio.git
cd chandraverse-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → http://localhost:5173/chandraverse-portfolio/

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🚀 Deployment

### GitHub Pages (Active — Auto-deploys on push)

This portfolio is live on GitHub Pages, auto-deployed via GitHub Actions on every push to `main`.

```yaml
# .github/workflows/deploy.yml
Trigger  : push to main
Build    : npm install && npm run build
Deploy   : actions/deploy-pages@v4
Live URL : https://chandraverse.github.io/chandraverse-portfolio/
```

**First-time setup:**
1. Go to **Settings → Pages**
2. Source → **GitHub Actions**
3. Save — every future push auto-deploys ✅

### Netlify (Alternative)

```
Build command : npm run build
Publish dir   : dist
Config file   : netlify.toml (already included)
```

---

## 📁 Project Structure

```
chandraverse-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── public/
│   └── favicon.svg             # Custom cybersecurity shield logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with active link tracking
│   │   ├── Hero.jsx             # Typewriter animation + hex profile photo
│   │   ├── About.jsx            # Bio, stats, open-to-work banner
│   │   ├── Skills.jsx           # Animated skill bars (IntersectionObserver)
│   │   ├── Projects.jsx         # 7 project cards with filter + screenshot carousel
│   │   ├── Contact.jsx          # Social links + contact form
│   │   └── Footer.jsx           # Footer with quick links
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Design tokens + global styles
├── index.html                   # SEO meta + Open Graph + font imports
├── tailwind.config.js           # Font families + cyber color palette
├── vite.config.js               # Base path set to /chandraverse-portfolio/
├── netlify.toml                 # Netlify deploy config
└── package.json                 # Dependencies
```

---

## 📬 Contact

<div align="center">

| Platform | Link |
|----------|------|
| 📧 Email | [chakrabortychandrasekhar185@gmail.com](mailto:chakrabortychandrasekhar185@gmail.com) |
| 🐙 GitHub | [github.com/ChandraVerse](https://github.com/ChandraVerse) |
| 💼 LinkedIn | [linkedin.com/in/chandrasekhar-chakraborty](https://linkedin.com/in/chandrasekhar-chakraborty) |
| 📄 Resume | [Download PDF](https://raw.githubusercontent.com/ChandraVerse/PERSONAL/main/Resume.pdf) |
| 🌐 Portfolio | [chandraverse.github.io/chandraverse-portfolio](https://chandraverse.github.io/chandraverse-portfolio/) |

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=22d3ee&height=100&section=footer" width="100%" />

**⭐ If this portfolio helped or inspired you, consider starring the repo!**

*Built with ❤️ by [Chandra Sekhar Chakraborty](https://github.com/ChandraVerse)*

</div>
