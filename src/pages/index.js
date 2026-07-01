import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Facebook, Mail, Shield, Code, Terminal, ExternalLink, Smartphone, Globe, Menu, X, CheckCircle2, Layout, Briefcase, Cpu, Server, Database, ChevronRight
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sr' : 'en'));

  const content = {
    en: {
      nav: { home: 'Home', services: 'Services', work: 'Work', achievements: 'Achievements', contact: 'Contact' },
      hero: {
        status: 'Available for impact',
        name: 'DUŠAN BALEŠEVIĆ (MARK HOUSE)',
        role: 'AI-Native Developer & Security Architect',
        subRole: 'Crafting intelligent systems, secure infrastructure, and flawless digital experiences.',
        btnContact: 'Initiate Protocol',
        btnWork: 'View Systems',
      },
      skills: [
        'React', 'Next.js', 'Tailwind CSS', 'Firebase', 'Supabase', 'Python', 'Node.js', 'PostgreSQL', 
        'Google Cloud', 'Burp Suite', 'Metasploit', 'Nmap', 'AI Integration', 'AI-Driven Development'
      ],
      services: {
        title: 'Core Protocols',
        subtitle: 'What I bring to the table.',
        items: [
          {
            icon: <Cpu className="text-neon-cyan w-8 h-8 mb-4" />,
            title: 'AI-Driven Full-Stack',
            desc: 'Rapid development of web and mobile apps leveraging the latest AI models for maximum efficiency and flawless architecture.'
          },
          {
            icon: <Shield className="text-neon-emerald w-8 h-8 mb-4" />,
            title: 'Security Research & Audits',
            desc: 'Deep-dive penetration testing, uncovering critical vulnerabilities (like Meta 2FA bypass) before the bad actors do.'
          },
          {
            icon: <Server className="text-neon-purple w-8 h-8 mb-4" />,
            title: 'Cloud Architecture',
            desc: 'Building scalable, robust solutions relying on modern cloud infrastructure like Google Cloud, Firebase, and Supabase.'
          }
        ]
      },
      achievements: {
        title: 'Hall of Fame',
        items: [
          {
            badge: 'Meta / Facebook Whitehat',
            title: 'Critical 2FA Bypass Discovered',
            desc: 'Identified and reported a severe logic flaw allowing attackers to bypass Two-Factor Authentication on WhatsApp. Officially acknowledged and rewarded by the Meta Security Team.',
            year: '2024'
          },
          {
            badge: 'Google Certified',
            title: 'Google Cloud Developer',
            desc: 'Mastery in building, testing, and deploying scalable applications on Google Cloud Platform infrastructure.',
            year: 'Active'
          },
          {
            badge: 'Google Certified',
            title: 'Google AI Developer',
            desc: 'Expertise in integrating cutting-edge AI models, multimodal processing, and agentic workflows into modern applications.',
            year: 'Active'
          }
        ]
      },
      work: {
        title: 'Deployed Systems',
        subtitle: 'A showcase of my recent production environments.',
        project1: {
          title: 'Šta Klopati?',
          type: 'Full-Stack Ecosystem',
          desc: 'A comprehensive local food guide. Features restaurant listings, geolocation, and vlog integration. Built with modern web tech and compiled to native Android via Capacitor.',
          stack: ['Next.js 14', 'React', 'Tailwind', 'Capacitor', 'AdMob'],
        },
        project2: {
          title: 'Client Web Solutions',
          type: 'Custom Architecture',
          desc: 'Designed and deployed multiple bespoke websites. Laser focus on Core Web Vitals, SEO optimization, and responsive fluid design for corporate clients.',
          stack: ['WordPress', 'JavaScript', 'CSS3', 'SEO'],
        },
      },
      footer: {
        title: "Establish Connection",
        desc: 'Open for freelance architecture, security audits, or revolutionary full-time ventures.',
        copyright: '© 2026 Dušan Balešević (Mark House). All protocols secured.',
        langBtn: 'Prebaci na Srpski',
      },
    },
    sr: {
      nav: { home: 'Početna', services: 'Usluge', work: 'Radovi', achievements: 'Dostignuća', contact: 'Kontakt' },
      hero: {
        status: 'Dostupan za saradnju',
        name: 'DUŠAN BALEŠEVIĆ (MARK HOUSE)',
        role: 'Vibe Coder & Security Architect',
        subRole: 'Kreiranje inteligentnih sistema, sigurne infrastrukture i besprekornih digitalnih iskustava.',
        btnContact: 'Pokreni Protokol',
        btnWork: 'Pregledaj Sisteme',
      },
      skills: [
        'React', 'Next.js', 'Tailwind CSS', 'Firebase', 'Supabase', 'Python', 'Node.js', 'PostgreSQL', 
        'Google Cloud', 'Burp Suite', 'Metasploit', 'Nmap', 'AI Integracije', 'AI-Driven Development'
      ],
      services: {
        title: 'Osnovni Protokoli',
        subtitle: 'Šta tačno donosim u tim.',
        items: [
          {
            icon: <Cpu className="text-neon-cyan w-8 h-8 mb-4" />,
            title: 'AI-Driven Full-Stack',
            desc: 'Brzi razvoj web i mobilnih aplikacija korišćenjem najnovijih AI modela za maksimalnu efikasnost i savršenu arhitekturu.'
          },
          {
            icon: <Shield className="text-neon-emerald w-8 h-8 mb-4" />,
            title: 'Security Research & Audits',
            desc: 'Penetration testiranje i pronalaženje kritičnih ranjivosti (poput Meta 2FA bypass-a) pre nego što ih zlonamerni hakeri iskoriste.'
          },
          {
            icon: <Server className="text-neon-purple w-8 h-8 mb-4" />,
            title: 'Cloud Arhitektura',
            desc: 'Izgradnja skalabilnih, robusnih rešenja oslanjajući se na modernu infrastrukturu kao što su Google Cloud, Firebase i Supabase.'
          }
        ]
      },
      achievements: {
        title: 'Kuća Slavnih',
        items: [
          {
            badge: 'Meta / Facebook Whitehat',
            title: 'Otkriven Kritičan 2FA Bypass',
            desc: 'Identifikovao i prijavio ozbiljnu logičku grešku koja omogućava zaobilaženje dvofaktorske autentifikacije na WhatsApp-u. Zvanično nagrađeno od Meta Security Tima.',
            year: '2024'
          },
          {
            badge: 'Google Sertifikovan',
            title: 'Google Cloud Developer',
            desc: 'Majstorstvo u kreiranju, testiranju i postavljanju skalabilnih aplikacija na Google Cloud Platform infrastrukturi.',
            year: 'Aktivno'
          },
          {
            badge: 'Google Sertifikovan',
            title: 'Google AI Developer',
            desc: 'Ekspertiza u integraciji najmodernijih AI modela, multimodalne obrade i agentskih tokova u moderne aplikacije.',
            year: 'Aktivno'
          }
        ]
      },
      work: {
        title: 'Lansirani Sistemi',
        subtitle: 'Prikaz mojih najnovijih produkcionih okruženja.',
        project1: {
          title: 'Šta Klopati?',
          type: 'Full-Stack Ekosistem',
          desc: 'Sveobuhvatna aplikacija za lokalni vodič kroz hranu. Sadrži bazu restorana, geolokaciju i vlog integraciju. Izrađeno modernim tehnologijama za Web i Android (Capacitor).',
          stack: ['Next.js 14', 'React', 'Tailwind', 'Capacitor', 'AdMob'],
        },
        project2: {
          title: 'Web Rešenja za Klijente',
          type: 'Custom Arhitektura',
          desc: 'Dizajnirao i postavio više namenskih web sajtova. Oštar fokus na performanse (Core Web Vitals), SEO optimizaciju i fluidan dizajn za korporativne klijente.',
          stack: ['WordPress', 'JavaScript', 'CSS3', 'SEO'],
        },
      },
      footer: {
        title: "Uspostavi Koneciju",
        desc: 'Otvoren za freelance arhitekturu, sigurnosne provere ili revolucionarne full-time projekte.',
        copyright: '© 2026 Dušan Balešević (Mark House). Svi protokoli osigurani.',
        langBtn: 'Switch to English',
      },
    }
  };

  const t = content[lang];
  const socialLinks = [
    { icon: <Facebook size={20} />, url: 'https://www.facebook.com/markhouse369/', label: 'Facebook' },
    { icon: <Github size={20} />, url: 'https://github.com/MrHouse111', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/mrhouse111/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:dusanbalesevic7@gmail.com', label: 'Email' },
    { icon: <Smartphone size={20} />, url: 'tel:+381652583477', label: 'Phone' },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-neon-emerald selection:text-[#030712] overflow-x-hidden relative">
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-emerald/10 rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#030712]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                <Terminal className="text-neon-cyan w-6 h-6" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">
                MARK<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-emerald">HOUSE</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-neon-cyan text-slate-300 transition-colors px-3 py-2 text-sm font-semibold tracking-wide">{t.nav.home}</a>
                <a href="#services" className="hover:text-neon-cyan text-slate-300 transition-colors px-3 py-2 text-sm font-semibold tracking-wide">{t.nav.services}</a>
                <a href="#achievements" className="hover:text-neon-cyan text-slate-300 transition-colors px-3 py-2 text-sm font-semibold tracking-wide">{t.nav.achievements}</a>
                <a href="#work" className="hover:text-neon-cyan text-slate-300 transition-colors px-3 py-2 text-sm font-semibold tracking-wide">{t.nav.work}</a>
                <a href="#contact" className="hover:text-neon-cyan text-slate-300 transition-colors px-3 py-2 text-sm font-semibold tracking-wide">{t.nav.contact}</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#home" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/5 hover:text-neon-cyan">{t.nav.home}</a>
            <a href="#services" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/5 hover:text-neon-cyan">{t.nav.services}</a>
            <a href="#achievements" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/5 hover:text-neon-cyan">{t.nav.achievements}</a>
            <a href="#work" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-white/5 hover:text-neon-cyan">{t.nav.work}</a>
            <a href="#contact" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-neon-emerald font-bold">{t.nav.contact}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-screen justify-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-emerald"></span>
          </span>
          {t.hero.status}
        </div>
        
        <h2 className="text-neon-cyan font-black tracking-[0.2em] text-sm mb-4 uppercase">{t.hero.name}</h2>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight">
          <span className="block">{t.hero.role.split('&')[0]}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-emerald via-neon-cyan to-neon-purple pb-2">&amp; {t.hero.role.split('&')[1]}</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-400 font-light mb-12 max-w-3xl leading-relaxed">
          {t.hero.subRole}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
          <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] backdrop-blur-md">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-neon-emerald"></span>
            <span className="relative flex items-center gap-2">{t.hero.btnContact} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </a>
          <a href="#work" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 bg-transparent border border-white/10 rounded-2xl hover:text-white hover:border-neon-cyan/50 hover:bg-white/5 transition-all backdrop-blur-md">
            {t.hero.btnWork}
          </a>
        </div>
      </section>

      {/* Marquee Skills Section */}
      <div className="w-full bg-white/[0.02] border-y border-white/5 py-6 overflow-hidden relative flex z-10 backdrop-blur-sm">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...t.skills, ...t.skills].map((skill, i) => (
            <span key={i} className="mx-8 text-xl font-black tracking-widest text-slate-500 uppercase flex items-center gap-4">
              {skill} <span className="w-2 h-2 rounded-full bg-neon-cyan/50"></span>
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">{t.services.title}</h2>
            <p className="text-xl text-slate-400">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.map((srv, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 backdrop-blur-xl group">
                {srv.icon}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">{srv.title}</h3>
                <p className="text-slate-400 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-1.5 h-12 bg-neon-emerald rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">{t.achievements.title}</h2>
          </div>
          
          <div className="space-y-6">
            {t.achievements.items.map((ach, i) => (
              <div key={i} className="group relative bg-[#030712] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-emerald text-xs font-bold uppercase tracking-wider mb-4">
                      <Shield size={14} /> {ach.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-emerald transition-colors">{ach.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-3xl">{ach.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">{ach.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Projects Section */}
      <section id="work" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">{t.work.title}</h2>
            <p className="text-xl text-slate-400">{t.work.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 Bento */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:border-neon-cyan/30 transition-all duration-500 backdrop-blur-xl group flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-neon-cyan/10 text-neon-cyan px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-neon-cyan/20">
                  {t.work.project1.type}
                </div>
                <Smartphone className="text-white/20 group-hover:text-neon-cyan transition-colors w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black text-white mb-4">{t.work.project1.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-lg">{t.work.project1.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {t.work.project1.stack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-black/50 border border-white/5 rounded-xl text-sm text-slate-300 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-6 mt-auto">
                <a href="https://klopati.rs" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white font-bold hover:text-neon-cyan transition-colors group/link">
                  Visit App <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Project 2 Bento */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:border-neon-purple/30 transition-all duration-500 backdrop-blur-xl group flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-neon-purple/20">
                  {t.work.project2.type}
                </div>
                <Layout className="text-white/20 group-hover:text-neon-purple transition-colors w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black text-white mb-4">{t.work.project2.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-lg">{t.work.project2.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {t.work.project2.stack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-black/50 border border-white/5 rounded-xl text-sm text-slate-300 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-2xl pt-24 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">{t.footer.title}</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">{t.footer.desc}</p>
          
          <div className="flex justify-center gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-4 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 font-medium">{t.footer.copyright}</p>
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-xs font-black uppercase tracking-widest"
            >
              <Globe size={16} /> {t.footer.langBtn}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}