/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  ChevronRight, 
  Star,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  location?: string;
}

interface Realization {
  id: number;
  title: string;
  category: string;
  image: string;
}

const realizations: Realization[] = [
  {
    id: 1,
    title: "Réveillon Chic & Or",
    category: "Nouvel An",
    image: "/pexels-asadphoto-169191.jpg",
  },
  {
    id: 2,
    title: "Élégance Florale Bleue",
    category: "Décoration de Table",
    image: "/pexels-leeloothefirst-5038739.jpg",
  },
  {
    id: 3,
    title: "Passion Rouge",
    category: "Anniversaire",
    image: "/pexels-prince-nature-273406283-34389342.jpg",
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Mariée",
    location: "Yaoundé",
    content: "Labantu Event a transformé mon mariage en un conte de fées. Chaque détail était parfait, de la décoration au timing. Une équipe exceptionnelle !",
    rating: 5
  },
  {
    id: 2,
    name: "Jean-Paul K.",
    role: "Directeur Marketing",
    content: "Professionnalisme exemplaire. Notre événement d'entreprise a été un franc succès grâce à leur équipe créative et réactive. Recommandé sans hésitation.",
    rating: 5
  },
  {
    id: 3,
    name: "Aminata D.",
    role: "Maman d'anniversaire",
    content: "Une organisation sans faille pour les 10 ans de ma fille. Les enfants étaient ravis et les parents impressionnés. On les garde pour les prochaines occasions !",
    rating: 4
  }
];

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Réalisations', href: '#realizations' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const marqueeItems = [
  "Mariages", "Anniversaires", "Galas d'entreprise", "Baptêmes", "Cocktails", "Décoration florale", "Réveillons"
];

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-[#FAF8F3]/90 backdrop-blur-xl py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 md:w-9 h-8 md:h-9 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] flex items-center justify-center text-white font-semibold text-sm">
            L
          </div>
          <span className="font-display text-xl md:text-2xl font-semibold tracking-wide text-[#1A1612]">Labantu <span className="text-[#C9A84C]">Event</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-normal text-[#8C8278] hover:text-[#C9A84C] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenModal}
            className="bg-[#1A1612] text-[#E8C96A] px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#1A1612] transition-all"
          >
            Réserver
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#FAF8F3] border-b border-[#C9A84C]/20 px-6 py-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-normal text-[#1A1612] border-b border-[#C9A84C]/10 pb-3"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="bg-[#1A1612] text-[#E8C96A] py-3 rounded-full font-medium text-center mt-2"
            >
              Réserver
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section id="home" className="relative min-h-[90vh] flex flex-col md:flex-row overflow-hidden pt-20">
    <div className="md:w-1/2 px-6 md:px-12 lg:px-14 py-16 md:py-0 flex items-center relative z-10">
      <div className="max-w-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-6 h-px bg-[#C9A84C]"></span>
          <span className="text-xs font-medium tracking-[2.5px] uppercase text-[#C9A84C]">L'excellence événementielle</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1A1612] mb-6 leading-tight"
        >
          Vos rêves,<br/>
          notre <em className="text-[#C9A84C] italic">passion</em><br/>
          éternelle
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#8C8278] text-base leading-relaxed mb-10 max-w-sm"
        >
          Labantu Event crée des expériences uniques et inoubliables — mariages, anniversaires, galas d'entreprise — avec une attention absolue aux détails.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={onOpenModal}
            className="bg-[#C9A84C] text-[#1A1612] px-8 py-3.5 rounded-sm font-medium text-sm tracking-wide hover:bg-[#E8C96A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Organiser mon événement
          </button>
          <a 
            href="#realizations" 
            className="px-7 py-3.5 bg-transparent border border-[#1A1612]/25 text-[#1A1612] rounded-sm font-normal text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-center"
          >
            Voir nos réalisations
          </a>
        </motion.div>
      </div>
    </div>

      <div className="md:w-1/2 relative min-h-[50vh] md:min-h-auto">
      <div className="absolute inset-0 grid grid-rows-2">
        <div className="relative">
          <img src="/pexels-dupriez-annick-22208966-6659504.jpg" alt="Mariage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-5 left-6">
            <div className="text-[11px] tracking-[2px] uppercase text-[#C9A84C]/80 mb-1">Mariage</div>
            <div className="font-display text-xl text-white font-light">Salle de réception</div>
          </div>
        </div>
        <div className="relative">
          <img src="/pexels-mutecevvil-24023469.jpg" alt="Gala" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-5 left-6">
            <div className="text-[11px] tracking-[2px] uppercase text-[#C9A84C]/80 mb-1">Gala</div>
            <div className="font-display text-xl text-white font-light">Décoration de table</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-[#1A1612]/85 backdrop-blur-xl py-5 px-6 flex justify-around border-t border-[#C9A84C]/30">
        <div className="text-center">
          <span className="font-display text-2xl font-semibold text-[#E8C96A] block">10+</span>
          <span className="text-[10px] text-white/45 tracking-wider uppercase">Années</span>
        </div>
        <div className="text-center">
          <span className="font-display text-2xl font-semibold text-[#E8C96A] block">500+</span>
          <span className="text-[10px] text-white/45 tracking-wider uppercase">Événements</span>
        </div>
        <div className="text-center">
          <span className="font-display text-2xl font-semibold text-[#E8C96A] block">100%</span>
          <span className="text-[10px] text-white/45 tracking-wider uppercase">Satisfaction</span>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="bg-[#1A1612] py-3.5 border-y border-[#C9A84C]/20 overflow-hidden">
    <div className="animate-marquee flex">
      {[...marqueeItems, ...marqueeItems].map((item, i) => (
        <span key={i} className="font-display text-sm italic text-[#C9A84C]/70 tracking-wider px-10 flex items-center gap-4">
          {item}
          <span className="text-[#C9A84C] text-[8px]">◆</span>
        </span>
      ))}
    </div>
  </div>
);

const About = () => (
  <section id="about" className="section-padding bg-[#FAF8F3]">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-sm overflow-hidden">
          <img src="/pexels-yankrukov-8866790.jpg" alt="Notre équipe" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-[#C9A84C] flex flex-col items-center justify-center shadow-lg">
          <span className="font-display text-3xl font-semibold text-[#1A1612] leading-none">10+</span>
          <span className="text-[9px] font-medium tracking-[1.5px] uppercase text-[#2E2820] text-center mt-0.5">Ans d'expérience</span>
        </div>
      </div>
      
      <div>
        <span className="text-xs font-medium tracking-[3px] uppercase text-[#C9A84C] mb-4 block">Notre histoire</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1612] mb-8 leading-tight">
          L'art de créer des moments <em className="text-[#C9A84C] italic">magiques</em>
        </h2>
        <p className="text-[#8C8278] text-base leading-relaxed mb-4">
          Labantu Event est née d'une passion profonde pour la beauté et la célébration. Depuis plus de 10 ans, nous accompagnons nos clients dans la conception d'événements d'exception à travers le Cameroun et au-delà.
        </p>
        <p className="text-[#8C8278] text-base leading-relaxed mb-8">
          Notre vision : devenir la référence de l'événementiel africain en alliant tradition, modernité et excellence du service. Chaque projet est une œuvre d'art sur mesure.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            "Attention absolue aux détails",
            "Équipe créative & réactive",
            "Services entièrement sur mesure",
            "Gestion de A à Z"
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-[#F2EDE3] border-l-2 border-[#C9A84C] rounded-r-sm">
              <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-[#2E2820] leading-tight">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Realizations = () => (
  <section id="realizations" className="section-padding bg-[#1A1612]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <span className="text-xs font-medium tracking-[3px] uppercase text-[#C9A84C]/70 block mb-4">Nos créations</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#FAF8F3]">
            Réalisations <em className="text-[#C9A84C] italic">uniques</em>
          </h2>
        </div>
        <a 
          href="https://www.tiktok.com/@labantu2021" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-medium tracking-[1.5px] uppercase text-[#C9A84C] pb-1 border-b border-[#C9A84C]/40 hover:border-[#C9A84C] transition-colors"
        >
          Voir plus sur TikTok →
        </a>
      </div>
      
      <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-0.5">
        {realizations.map((item, index) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -8 }}
            className={`relative overflow-hidden cursor-pointer group ${index === 0 ? 'md:row-span-2' : ''}`}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 ? 'md:min-h-[480px]' : 'min-h-[240px]'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/90 via-[#1A1612]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span className="text-[11px] font-medium tracking-[2px] uppercase text-[#C9A84C] mb-1.5">{item.category}</span>
              <h3 className="font-display text-xl text-white font-normal">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-[#F2EDE3]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-medium tracking-[3px] uppercase text-[#C9A84C] inline-block mb-4">Avis clients</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1612]">
          Ils nous font <em className="text-[#C9A84C] italic">confiance</em>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <motion.div 
            key={t.id}
            whileHover={{ y: -4 }}
            className="bg-[#FAF8F3] border border-[#C9A84C]/15 rounded-sm p-8 hover:shadow-2xl transition-all"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 ${i < t.rating ? 'bg-[#C9A84C]' : 'bg-[#C9A84C]/30'}`}
                  style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
                />
              ))}
            </div>
            <span className="font-display text-5xl leading-none text-[#F5E9C8] font-semibold block mb-4">"</span>
            <p className="text-[#8C8278] text-sm italic leading-relaxed mb-6">{t.content}</p>
            <div>
              <p className="font-medium text-[#1A1612] text-sm">{t.name}</p>
              <p className="text-xs text-[#8C8278] tracking-wide">{t.role}{t.location ? ` — ${t.location}` : ''}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding bg-[#1A1612]">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
      <div>
        <span className="text-xs font-medium tracking-[3px] uppercase text-[#C9A84C]/70 block mb-4">Nous joindre</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#FAF8F3] mb-5 leading-tight">
          Parlons de votre<br/><em className="text-[#C9A84C] italic">prochain événement</em>
        </h2>
        <p className="text-white/45 text-sm leading-relaxed mb-10 max-w-md">
          Notre équipe est à votre écoute pour concevoir ensemble l'événement de vos rêves. Contactez-nous et recevez un devis personnalisé sous 24h.
        </p>
        
        <div className="flex flex-col gap-4">
          <a href="https://www.tiktok.com/@labantu2021" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 text-sm hover:text-[#C9A84C] transition-colors">
            <div className="w-9 h-9 rounded-lg border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.10z"/></svg>
            </div>
            <div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-white/35 mb-0.5">TikTok</div>
              <span>@labantu2021</span>
            </div>
          </a>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <div className="w-9 h-9 rounded-lg border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-white/35 mb-0.5">Téléphone</div>
              <span>+237 — Contactez-nous</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <div className="w-9 h-9 rounded-lg border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-white/35 mb-0.5">Localisation</div>
              <span>Yaoundé, Cameroun</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-sm overflow-hidden min-h-[320px]">
          <img src="/pexels-imudruk-11985345.jpg" alt="Event" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex-1 rounded-sm overflow-hidden">
            <img src="/pexels-bulat369-1243575272-33694037.jpg" alt="Event" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 rounded-sm overflow-hidden">
            <img src="/pexels-rdne-6519888.jpg" alt="Event" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0E0C09] py-8 px-6 border-t border-[#C9A84C]/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] flex items-center justify-center text-white font-semibold text-sm">
          L
        </div>
        <span className="font-display text-lg font-semibold text-white">Labantu <span className="text-[#C9A84C]">Event</span></span>
      </div>
      
      <div className="text-xs text-white/30 tracking-wide">
        © 2026 Labantu Event — Tous droits réservés.
      </div>
      
      <div className="flex gap-6 text-xs text-white/30">
        <a href="#home" className="hover:text-[#C9A84C] transition-colors">Accueil</a>
        <a href="#about" className="hover:text-[#C9A84C] transition-colors">À propos</a>
        <a href="#contact" className="hover:text-[#C9A84C] transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

const ReservationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1612]/70 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 12 }}
            className="relative bg-[#FAF8F3] rounded-sm p-12 max-w-md w-full shadow-2xl text-center"
            style={{ animation: '0.35s cubic-bezier(0.25,0.46,0.45,0.94)' }}
          >
            <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 border-none bg-[#F2EDE3] rounded-full cursor-pointer text-[#8C8278] flex items-center justify-center hover:bg-[#F5E9C8] transition-colors">
              ✕
            </button>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5E9C8] to-[#C9A84C] flex items-center justify-center mx-auto mb-6 text-2xl">
              📅
            </div>
            <h3 className="font-display text-3xl font-normal text-[#1A1612] mb-3">Réserver maintenant</h3>
            <p className="text-[#8C8278] text-sm leading-relaxed mb-8">
              Contactez-nous directement sur TikTok pour discuter de votre projet et recevoir un devis personnalisé sous 24h.
            </p>
            
            <motion.a
              href="https://www.tiktok.com/@labantu2021"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#1A1612] text-[#E8C96A] rounded-sm font-medium text-sm tracking-wide hover:bg-[#C9A84C] hover:text-[#1A1612] transition-all shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.10z"/></svg>
              Nous contacter sur TikTok
            </motion.a>
            
            <p className="mt-4 text-[11px] text-[#8C8278] tracking-[1.5px] uppercase">
              Labantu Event — Votre partenaire d'excellence
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.lbt-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          io.unobserve(e.target); 
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Marquee />
      <About />
      <Realizations />
      <Testimonials />
      <Contact />
      <Footer />
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}