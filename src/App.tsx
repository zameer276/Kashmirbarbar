/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Scissors, 
  User, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Star, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_LINK = "https://wa.me/917006345743?text=Hi,%20I%20want%20to%20book%20an%20appointment";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-ink/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
          <Scissors className="text-gold w-6 h-6" />
          <span className="text-gold-gradient">KASHUR BARBER</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            className="px-6 py-2 bg-gold text-ink font-bold rounded-full text-sm hover:bg-gold-light transition-colors"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-ink border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-white/70"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            className="w-full py-3 bg-gold text-ink font-bold rounded-lg text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            BOOK ON WHATSAPP
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
          alt="Barber Shop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Luxury Grooming Experience
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            Crafting Confidence, <br />
            <span className="text-gold-gradient italic">One Cut at a Time</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
            Premium grooming experience in Kashmir. Experience the art of traditional barbering combined with modern luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={WHATSAPP_LINK} 
              className="group relative px-8 py-4 bg-gold text-ink font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              BOOK ON WHATSAPP
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
            >
              VIEW SERVICES
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
              </div>
              <span className="text-[10px] uppercase tracking-widest mt-1">Google Rating</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">10+</span>
              <span className="text-[10px] uppercase tracking-widest mt-1">Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Classic Haircut",
      desc: "Precision cut tailored to your face shape and style preference.",
      price: "₹300+",
      icon: <Scissors className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1621605815841-aa88c82b0281?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Beard Styling",
      desc: "Expert beard trimming, shaping, and hot towel finish.",
      price: "₹200+",
      icon: <User className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1593702295094-272a67d9963c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Luxury Hair Spa",
      desc: "Deep conditioning treatment with scalp massage for healthy hair.",
      price: "₹800+",
      icon: <Sparkles className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Facial & Skin Care",
      desc: "Rejuvenating facials designed specifically for men's skin.",
      price: "₹500+",
      icon: <Sparkles className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Kids Haircut",
      desc: "Gentle and stylish cuts for the little gentlemen.",
      price: "₹200+",
      icon: <User className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Full Grooming",
      desc: "The ultimate package: Haircut, Beard, Facial & Spa.",
      price: "₹1500+",
      icon: <Scissors className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our <span className="text-gold">Services</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">Elevate your look with our range of premium grooming services performed by master barbers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gold/10 rounded-xl text-gold">
                    {service.icon}
                  </div>
                  <span className="text-xl font-bold text-gold">{service.price}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/50 text-sm mb-6">{service.desc}</p>
                <a 
                  href={WHATSAPP_LINK} 
                  className="w-full py-3 border border-gold/30 rounded-lg text-center text-gold font-bold hover:bg-gold hover:text-ink transition-all inline-block"
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gold/80 font-medium italic mb-4">"Limited slots available today. Book now to secure your spot!"</p>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Master Barbers",
      desc: "Years of expertise in modern and classic styles.",
      icon: <User className="w-6 h-6" />
    },
    {
      title: "Hygienic Tools",
      desc: "Strict sterilization protocols for your safety.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Premium Products",
      desc: "We use only the finest grooming products.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Quick Service",
      desc: "Efficiency without compromising on quality.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why <span className="text-gold">Kashur Barber</span> is the Best Choice for You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-white/50">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000" 
              alt="Barber at work" 
              className="relative rounded-2xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl max-w-[200px]">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-sm font-bold italic">"Best grooming experience I've ever had in Kashmir!"</p>
              <p className="text-[10px] uppercase tracking-widest mt-2 text-white/50">- Sameer Ahmed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1599351431247-f13b283253c9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1622286332618-f28020ee7158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512690118294-7003db75ad8c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621605815841-aa88c82b0281?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1593702295094-272a67d9963c?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gold">Masterpieces</span></h2>
          <p className="text-white/50">Real transformations from our master barbers.</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img 
                src={img} 
                alt={`Work ${i}`} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center text-gold">
                  <Instagram className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Adil Bhat",
      text: "Kashur Barber is hands down the best in town. The attention to detail is incredible. Highly recommended!",
      rating: 5
    },
    {
      name: "Zaid Wani",
      text: "Professional service and very hygienic. The beard styling is top-notch. I've found my permanent spot.",
      rating: 5
    },
    {
      name: "Umar Farooq",
      text: "Great atmosphere and friendly staff. They really know what they're doing. Best haircut I've had in years.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-ink relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="text-gold">Clients Say</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="glass p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-white/70 italic mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  {r.name[0]}
                </div>
                <span className="font-bold">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="text-gold">Touch</span></h2>
            <p className="text-white/50 mb-10">Have questions or want to book a special session? Reach out to us directly.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-bold">+91 70063 45743</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Location</p>
                  <p className="text-xl font-bold">Srinagar, Kashmir</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Opening Hours</p>
                  <p className="text-xl font-bold">Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Instagram />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Facebook />
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
            <p className="text-white/60 mb-8">The fastest way to book is via WhatsApp. Click the button below to start a chat with us.</p>
            <a 
              href={WHATSAPP_LINK} 
              className="w-full py-4 bg-gold text-ink font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-gold-light transition-all text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              BOOK ON WHATSAPP
            </a>
            <p className="text-center text-xs text-white/30 mt-6">
              By clicking, you'll be redirected to WhatsApp to confirm your slot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-serif font-bold tracking-tighter flex items-center gap-2 justify-center md:justify-start">
            <Scissors className="text-gold w-5 h-5" />
            <span className="text-gold-gradient">KASHUR BARBER</span>
          </a>
          <p className="text-white/30 text-xs mt-2">© 2026 Kashur Barber. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-bold tracking-widest text-white/40">
          <a href="#" className="hover:text-gold">PRIVACY POLICY</a>
          <a href="#" className="hover:text-gold">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppSticky = () => {
  return (
    <motion.a 
      href={WHATSAPP_LINK}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20"
    >
      <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
      <span className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-bounce">1</span>
    </motion.a>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold" />
              <img 
                src="https://images.unsplash.com/photo-1512690118294-7003db75ad8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Kashur Barber Story" 
                className="rounded-lg shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Art of Grooming in the <span className="text-gold">Heart of Kashmir</span>
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Founded with a passion for traditional barbering and a vision for modern luxury, Kashur Barber has become the premier destination for grooming in Srinagar. We believe that a haircut is more than just a service—it's a ritual of confidence.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              Our master barbers combine years of local experience with global styling trends to ensure every client walks out feeling like their best self. We take pride in our roots and our commitment to providing a world-class experience right here in Kashmir.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-gold">1000+</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">10+</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Master Barbers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">5.0</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Kashur Barber",
    "image": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
    "@id": "",
    "url": window.location.href,
    "telephone": "+917006345743",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Market",
      "addressLocality": "Srinagar",
      "addressRegion": "Kashmir",
      "postalCode": "190001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0837,
      "longitude": 74.7973
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  return (
    <div className="bg-ink min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppSticky />
    </div>
  );
}
