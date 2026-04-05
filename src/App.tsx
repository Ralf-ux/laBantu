/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star,
  Menu,
  X,
  CheckCircle2,
  Camera,
  Users,
  PartyPopper,
  Briefcase
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface Realization {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// --- Data ---
const realizations: Realization[] = [
  {
    id: 1,
    title: "Réveillon Chic & Or",
    category: "Nouvel An",
    image: "../asserts/IMG-20260328-WA0070.jpg",
    description: "Une table de fête sophistiquée en noir et or pour un passage à l'an nouveau mémorable."
  },
  {
    id: 2,
    title: "Élégance Florale Bleue",
    category: "Décoration de Table",
    image: "../asserts/IMG-20260328-WA0071.jpg",
    description: "Harmonie de bleu et blanc avec des touches naturelles pour une réception raffinée."
  },
  {
    id: 3,
    title: "Anniversaire Passion Rouge",
    category: "Anniversaire",
    image: "../asserts/IMG-20260328-WA0072.jpg",
    description: "Une ambiance romantique et festive avec des roses rouges et des ballons en cœur."
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Mariée",
    content: "Lubantu Event a transformé mon mariage en un conte de fées. Chaque détail était parfait, de la décoration au timing. Merci infiniment !",
    rating: 5
  },
  {
    id: 2,
    name: "Jean-Paul K.",
    role: "Directeur Marketing",
    content: "Professionnalisme exemplaire. Notre événement d'entreprise a été un franc succès grâce à leur équipe créative et réactive.",
    rating: 5
  },
  {
    id: 3,
    name: "Aminata D.",
    role: "Maman d'anniversaire",
    content: "Une organisation sans faille pour les 10 ans de ma fille. Les enfants étaient ravis et les parents impressionnés.",
    rating: 4
  }
];

// --- Components ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Réalisations', href: '#realizations' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="../asserts/IMG-20260328-WA0068.jpg" alt="Lubantu Event Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-serif text-2xl font-bold tracking-tighter text-[#2C2C2C]">Lubantu <span className="text-[#D4AF37]">Event</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenModal}
            className="bg-[#D4AF37] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#B8962E] transition-all shadow-sm cursor-pointer"
          >
            Réserver
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium border-b border-gray-50 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="bg-[#D4AF37] text-white py-3 rounded-xl font-bold text-center"
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
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/event-hero/1920/1080" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#FAF9F6]"></div>
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4"
      >
        L'Excellence Événementielle
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="heading-serif mb-6"
      >
        Bienvenue sur <span className="text-[#D4AF37]">Lubantu Event</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
      >
        Votre partenaire idéal pour l’organisation d’événements inoubliables. 
        Nous transformons vos idées en expériences mémorables grâce à une équipe professionnelle et créative.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button 
          onClick={onOpenModal}
          className="bg-[#D4AF37] text-white px-10 py-4 rounded-full font-bold hover:bg-[#B8962E] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          Organiser mon événement <ChevronRight size={18} />
        </button>
        <a href="#realizations" className="bg-white text-[#2C2C2C] border border-gray-200 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center">
          Voir nos réalisations
        </a>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-auto-cols md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="../asserts/pexels-leeloothefirst-5038739.jpg"
            alt="Notre Équipe"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] p-8 rounded-2xl text-white hidden lg:block shadow-xl">
          <p className="text-4xl font-bold mb-1">10+</p>
          <p className="text-sm uppercase tracking-wider">Années d'Expérience</p>
        </div>
      </div>
      
      <div>
        <h2 className="heading-serif mb-8">À propos de nous</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Lubantu Event est une plateforme spécialisée dans la planification et la gestion d’événements. 
          Nous accompagnons nos clients de la conception à la réalisation avec une attention particulière aux détails.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Notre vision est de devenir une référence dans l’événementiel en Afrique en offrant des services innovants et personnalisés. 
          Nous proposons des services complets pour les mariages, anniversaires, événements corporatifs et autres célébrations.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: <CheckCircle2 className="text-[#D4AF37]" />, text: "Attention aux détails" },
            { icon: <CheckCircle2 className="text-[#D4AF37]" />, text: "Équipe créative" },
            { icon: <CheckCircle2 className="text-[#D4AF37]" />, text: "Services sur mesure" },
            { icon: <CheckCircle2 className="text-[#D4AF37]" />, text: "Gestion complète" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Realizations = () => (
  <section id="realizations" className="section-padding bg-[#FAF9F6]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="heading-serif mb-4">Nos Réalisations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos créations uniques à travers notre galerie. 
          Chaque événement est une œuvre d'art personnalisée pour nos clients.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {realizations.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 block">{item.category}</span>
              <h3 className="font-serif text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a 
          href="https://www.tiktok.com/@labantu2021" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:underline group"
        >
          Voir plus de réalisations sur TikTok 
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="heading-serif mb-4">Témoignages</h2>
        <p className="text-gray-600">Ce que nos clients disent de nous.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#FAF9F6] p-8 rounded-3xl relative">
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-6">"{t.content}"</p>
            <div>
              <p className="font-bold text-[#2C2C2C]">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="heading-serif mb-8">Contactez-nous</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Contactez-nous pour toute demande d’information ou de devis. 
            Notre équipe se fera un plaisir de vous accompagner dans la réalisation de votre événement.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FAF9F6] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">TikTok</p>
                <a href="https://www.tiktok.com/@labantu2021" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#D4AF37] transition-colors">@labantu2021</a>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://www.tiktok.com/@labantu2021" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <img
            src="../asserts/pexels-dupriez-annick-22208966-6659504.jpg"
            alt="Contact Visual 1"
            className="rounded-3xl w-full h-full object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col gap-4">
            <img
              src="../asserts/pexels-mutecevvil-24023469.jpg"
              alt="Contact Visual 2"
              className="rounded-3xl w-full h-full object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
            <img
              src="../asserts/pexels-imudruk-11985345.jpg"
              alt="Contact Visual 3"
              className="rounded-3xl w-full h-full object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#2C2C2C] text-white py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <img src="../asserts/IMG-20260328-WA0068.jpg" alt="Lubantu Event Logo" className="w-8 h-8 rounded-full object-cover" />
        <span className="font-serif text-xl font-bold tracking-tighter">Lubantu <span className="text-[#D4AF37]">Event</span></span>
      </div>
      
      <div className="text-sm text-gray-400">
        © 2026 Lubantu Event. Tous droits réservés.
      </div>
      
      <div className="flex gap-6 text-sm font-medium">
        <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#D4AF37] transition-colors">À propos</a>
        <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

const ReservationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl text-center"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={32} />
            </div>
            <h3 className="heading-serif text-3xl mb-4">Réserver maintenant</h3>
            <p className="text-gray-600 mb-8">
              Contactez-nous directement sur TikTok pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            
            <motion.a
              href="https://www.tiktok.com/@labantu2021"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: ["0 10px 25px rgba(212, 175, 55, 0.3)", "0 15px 35px rgba(212, 175, 55, 0.5)", "0 10px 25px rgba(212, 175, 55, 0.3)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center justify-center gap-3 w-full bg-[#D4AF37] text-white py-4 rounded-2xl font-bold hover:bg-[#B8962E] transition-all shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Suivez-nous sur TikTok
            </motion.a>
            
            <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest">
              Lubantu Event — Votre partenaire d'excellence
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <Realizations />
      <Testimonials />
      <Contact />
      <Footer />
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
