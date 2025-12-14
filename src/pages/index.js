import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Shield,
  Code,
  Terminal,
  ExternalLink,
  Smartphone,
  Globe,
  Menu,
  X,
  ChevronRight,
  Lock,
  Zap,
  AlertTriangle,
  Languages,
  CheckCircle2,
  Layout,
  Briefcase,
} from 'lucide-react';

/**
 * Home page component rendering the full portfolio. It supports language
 * toggling between English and Serbian, and uses TailwindCSS for styling.
 */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sr' : 'en'));

  // Language‑specific content dictionary
  const content = {
    en: {
      nav: {
        home: 'Home',
        achievement: 'Achievement',
        work: 'Work',
        contact: 'Contact',
      },
      hero: {
        status: 'Available for hire',
        name: 'MARK HOUSE',
        role: 'Full Stack Developer & Security Researcher.',
        subRole: 'Founder of Staklopati Team.',
        btnContact: 'Contact Me',
        btnWork: 'View Work',
      },
      achievement: {
        title: 'Major Achievement',
        awardTitle: 'Meta / Facebook Whitehat Acknowledgment',
        desc: 'Discovered and reported a critical <strong>2FA (Two-Factor Authentication) Bypass vulnerability</strong> in WhatsApp. The vulnerability allowed potential attackers to skip the second layer of security under specific conditions. Officially recognized and rewarded by the Meta Security Team.',
        year: '2024',
      },
      work: {
        title: 'Selected Work',
        subtitle: 'A showcase of my applications and security research.',
        project1: {
          title: 'Šta Klopati?',
          status: 'Active Production',
          type: 'Staklopati App',
          desc: 'A comprehensive local food guide application. Founder & Lead Developer. Features include restaurant listings, geolocation services, and a vlog integration. Built with modern web technologies and compiled to native Android using Capacitor.',
          stack: ['Next.js 14', 'React', 'Tailwind CSS', 'Capacitor Android', 'AdMob'],
          link1: 'View App',
          link2: 'Visit klopati.rs',
        },
        project2: {
          title: 'Client Web Solutions',
          status: 'Multiple Projects',
          type: 'Custom Development',
          desc: 'Designed and deployed 5+ custom websites for various clients. Focus on performance, SEO optimization, and responsive design. Includes e-commerce solutions and corporate landing pages.',
          stack: ['WordPress', 'JavaScript', 'CSS3', 'SEO'],
          link1: 'View Portfolio',
        },
      },
      stats: {
        cve: 'Major CVE/Bug Found',
        sites: 'Websites Launched',
        apps: 'Mobile App Published',
        passion: 'Passion',
      },
      footer: {
        title: "Let's Connect",
        desc: 'I am currently open to freelance projects, security consulting, or full-time opportunities.',
        copyright: '© 2025 Mark House (Dušan Balešević). All Rights Reserved.',
        langBtn: 'Prebaci na Srpski',
      },
    },
    sr: {
      nav: {
        home: 'Početna',
        achievement: 'Dostignuća',
        work: 'Radovi',
        contact: 'Kontakt',
      },
      hero: {
        status: 'Dostupan za rad',
        name: 'MARK HOUSE',
        role: 'Full Stack Developer & Security Researcher.',
        subRole: 'Osnivač Staklopati Tima.',
        btnContact: 'Kontaktiraj me',
        btnWork: 'Vidi Radove',
      },
      achievement: {
        title: 'Glavno Dostignuće',
        awardTitle: 'Meta / Facebook Whitehat Priznanje',
        desc: 'Otkrio i prijavio kritičnu ranjivost za <strong>zaobilaženje 2FA (Dvofaktorske Autentifikacije)</strong> u WhatsApp-u. Ranjivost je omogućavala napadačima da preskoče drugi sloj zaštite pod određenim uslovima. Zvanično priznato i nagrađeno od strane Meta Security Tima.',
        year: '2024',
      },
      work: {
        title: 'Izabrani Radovi',
        subtitle: 'Prikaz mojih aplikacija i sigurnosnih istraživanja.',
        project1: {
          title: 'Šta Klopati?',
          status: 'Aktivna Produkcija',
          type: 'Staklopati App',
          desc: 'Sveobuhvatna aplikacija za lokalni vodič kroz hranu. Osnivač i Glavni Developer. Funkcije uključuju liste restorana, geolokacijske servise i vlog integraciju. Izrađeno modernim web tehnologijama i kompajlirano za Android koristeći Capacitor.',
          stack: ['Next.js 14', 'React', 'Tailwind CSS', 'Capacitor Android', 'AdMob'],
          link1: 'Vidi Aplikaciju',
          link2: 'Poseti klopati.rs',
        },
        project2: {
          title: 'Web Rešenja za Klijente',
          status: 'Više Projekata',
          type: 'Custom Development',
          desc: 'Dizajnirao i objavio 5+ namenskih web sajtova za različite klijente. Fokus na performanse, SEO optimizaciju i responzivni dizajn. Uključuje e-commerce rešenja i korporativne stranice.',
          stack: ['WordPress', 'JavaScript', 'CSS3', 'SEO'],
          link1: 'Vidi Portfolio',
        },
      },
      stats: {
        cve: 'Glavni CVE/Bug Pronađen',
        sites: 'Sajtova Lansirano',
        apps: 'Mobilna Aplikacija',
        passion: 'Strast',
      },
      footer: {
        title: 'Povežimo se',
        desc: 'Trenutno sam otvoren za freelance projekte, sigurnosni konsalting ili full-time prilike.',
        copyright: '© 2025 Mark House (Dušan Balešević). Sva prava zadržana.',
        langBtn: 'Switch to English',
      },
    },
  };

  const t = content[lang];
  const socialLinks = [
    { icon: <Facebook size={20} />, url: 'https://www.facebook.com/markhouse369/', label: 'Facebook' },
    { icon: <Github size={20} />, url: 'https://github.com/MrHouse111', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/mrhouse111/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo(0, 0);
                }
              }}
            >
              <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20">
                <Terminal className="text-emerald-500 w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                MARK <span className="text-emerald-500">HOUSE</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {t.nav.home}
                </a>
                <a
                  href="#achievement"
                  className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t.nav.achievement}
                </a>
                <a
                  href="#work"
                  className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t.nav.work}
                </a>
                <a
                  href="#contact"
                  className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
              >
                {t.nav.home}
              </a>
              <a
                href="#achievement"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
              >
                {t.nav.achievement}
              </a>
              <a
                href="#work"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
              >
                {t.nav.work}
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-emerald-400 font-bold"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.hero.status}
          </div>
          <h2 className="text-emerald-500 font-bold tracking-widest text-sm mb-2 uppercase">{t.hero.name}</h2>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            {t.hero.role}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-light mb-8">{t.hero.subRole}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              {t.hero.btnContact}
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-semibold rounded-lg text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all"
            >
              {t.hero.btnWork}
            </a>
          </div>
        </div>
      </section>
      {/* Achievement Section */}
      <section id="achievement" className="py-16 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">{t.achievement.title}</h2>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" /> {t.achievement.awardTitle}
                </h3>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-mono">
                  {t.achievement.year}
                </span>
              </div>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-lg">
                <p dangerouslySetInnerHTML={{ __html: t.achievement.desc }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section id="work" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.work.title}</h2>
          <p className="mt-4 text-slate-400">{t.work.subtitle}</p>
        </div>
        <div className="space-y-16">
          {/* Project 1 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 bg-slate-900 rounded-2xl border border-slate-800 p-8 w-full hover:border-emerald-500/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {t.work.project1.status}
                </div>
                <Smartphone className="text-slate-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{t.work.project1.title}</h3>
              <p className="text-emerald-500 font-medium mb-4">{t.work.project1.type}</p>
              <p className="text-slate-400 mb-6 leading-relaxed">{t.work.project1.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {t.work.project1.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-950 border border-slate-800 rounded text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.staklopati.klopati"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white border-b border-emerald-500 hover:text-emerald-400 transition-colors pb-1 text-sm font-bold uppercase flex items-center gap-2"
                >
                  {t.work.project1.link1} <ExternalLink size={14} />
                </a>
                <a
                  href="https://klopati.rs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 border-b border-slate-700 hover:text-white transition-colors pb-1 text-sm font-bold uppercase flex items-center gap-2"
                >
                  {t.work.project1.link2} <Globe size={14} />
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
            <div className="flex-1 bg-slate-900 rounded-2xl border border-slate-800 p-8 w-full hover:border-blue-500/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {t.work.project2.status}
                </div>
                <Layout className="text-slate-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{t.work.project2.title}</h3>
              <p className="text-blue-500 font-medium mb-4">{t.work.project2.type}</p>
              <p className="text-slate-400 mb-6 leading-relaxed">{t.work.project2.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {t.work.project2.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-950 border border-slate-800 rounded text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="text-white border-b border-blue-500 hover:text-blue-400 transition-colors pb-1 text-sm font-bold uppercase flex items-center gap-2"
                >
                  {t.work.project2.link1} <Briefcase size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-emerald-900/10 border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">1</div>
              <div className="text-xs text-emerald-400 uppercase tracking-widest font-bold">
                {t.stats.cve}
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">6+</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                {t.stats.sites}
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">1</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                {t.stats.apps}
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-xs text-emerald-400 uppercase tracking-widest font-bold">
                {t.stats.passion}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">{t.footer.title}</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">{t.footer.desc}</p>
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 p-4 rounded-full text-slate-400 hover:text-white hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20 border border-slate-800"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="border-t border-slate-900 pt-8 flex flex-col items-center gap-6">
            <p className="text-slate-500 text-sm">{t.footer.copyright}</p>
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-xs font-bold uppercase tracking-wider"
            >
              <Languages size={14} /> {t.footer.langBtn}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}