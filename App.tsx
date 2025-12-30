
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Smartphone,
  BookOpen,
  Users,
  Target,
  Award,
  ArrowRight,
  Shield,
  Play,
  Instagram
} from 'lucide-react';

const PORTFOLIO_ITEMS = [
  { type: 'image', src: '/portfolio 5.jpeg', alt: 'Portfolio 5' },
  { type: 'image', src: '/portfolio 4.jpeg', alt: 'Portfolio 4' },
  { type: 'video', src: '/video1.mp4' },
  { type: 'video', src: '/video2.mp4' },
  { type: 'video', src: '/video3.mp4' }
];

// Assets Constants
const IMAGES = {
  logo: '/logo.png',
  hero: 'https://replicate.delivery/xpedition/p/7872d8e0-f38b-49d9-b0c7-013cc4126786/output.png',
  about: '/portfolio 3.jpeg',
  training1: 'https://replicate.delivery/xpedition/p/ef923e42-99be-48e0-ae89-8d769399435b/output.png',
  training2: 'https://replicate.delivery/xpedition/p/46171549-3475-4c07-ba71-d68a98f79be7/output.png',
  training3: 'https://replicate.delivery/xpedition/p/db2e414f-6d53-4632-901b-9076046e7f8e/output.png',
  training4: 'https://replicate.delivery/xpedition/p/71120465-38b4-4694-855f-861f67b57b11/output.png',
  ebookCover: '/capa_ebook.png'
};

const WHATSAPP_PHONE = "556196047071";
const WHATSAPP_MSG = "Olá! Acessei seu site e gostaria de agendar uma aula";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const WHATSAPP_CONSULTORIA_MSG = "Olá, acessei seu site e gostaria de uma consultoria técnica";
const WHATSAPP_CONSULTORIA_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_CONSULTORIA_MSG)}`;

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{ type: string, src: string } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Reveal animations
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-navy/95 py-4 shadow-2xl backdrop-blur-md border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="Fabio Rocha Logo" className="h-10 md:h-12 w-auto" />
            <div>
              <span className="text-white font-serif text-lg sm:text-xl tracking-[0.1em] block leading-none">FABIO ROCHA</span>
              <span className="text-gold text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] font-bold uppercase mt-1 block">Tennis Specialist</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#sobre" className="text-white/80 hover:text-gold transition-colors nav-link text-xs font-bold uppercase tracking-widest">Sobre</a>
            <a href="#ideal" className="text-white/80 hover:text-gold transition-colors nav-link text-xs font-bold uppercase tracking-widest">Público</a>
            <a href="#metodo" className="text-white/80 hover:text-gold transition-colors nav-link text-xs font-bold uppercase tracking-widest">Método</a>
            <a href="#ebooks" className="text-white/80 hover:text-gold transition-colors nav-link text-xs font-bold uppercase tracking-widest">E-books</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-gold text-navy px-8 py-3 rounded-none hover:bg-white hover:text-navy transition-all text-xs font-black uppercase tracking-[0.2em] shadow-xl">
              Agendar Aula
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy border-t border-white/5 absolute top-full left-0 w-full p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-500 shadow-2xl">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-serif">Sobre o Especialista</a>
            <a href="#ideal" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-serif">Público-Alvo</a>
            <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-serif">Metodologia</a>
            <a href="#ebooks" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-serif">Material Técnico</a>
            <a href={WHATSAPP_CONSULTORIA_LINK} target="_blank" rel="noopener noreferrer" className="bg-gold text-navy text-center py-5 rounded-none font-black uppercase tracking-[0.2em]">
              Falar no WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Tennis Background"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl text-white font-serif leading-[1.1] mb-8">
              Tênis com <br />
              excelência, <span className="text-gold italic">método</span> <br />e autoridade
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl mb-12 leading-relaxed max-w-xl font-light">
              Treinamento de alto padrão para adultos que buscam evolução técnica impecável e uma experiência premium dentro e fora da quadra.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-gold text-navy px-12 py-6 rounded-none font-black uppercase tracking-wider text-sm hover:bg-white transition-all flex items-center justify-center gap-3 shadow-2xl group">
                <span>Agendar Aula Experimental</span> <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#ebooks" className="border border-white/20 text-white backdrop-blur-md px-12 py-6 rounded-none font-black uppercase tracking-wider text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <span>Materiais Técnicos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-light/50 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <div className="relative group">
                <div className="absolute -top-6 -left-6 w-full h-full border border-gold/20 z-0"></div>
                <img src={IMAGES.about} alt="Fábio Rocha Treinador" className="relative z-10 w-full h-[700px] object-cover object-top shadow-2xl transition-all duration-1000" />
                <div className="absolute top-12 -left-12 bg-gold text-navy p-6 hidden lg:block z-20 shadow-2xl">
                  <Shield size={32} />
                </div>
                <div className="absolute top-12 -right-12 bg-navy-light p-6 hidden lg:block z-20 shadow-2xl border-l-4 border-gold border-b-4 border-b-gold/20">
                  <p className="text-white font-serif text-2xl italic leading-relaxed">"Excelência é o único <br />padrão aceitável."</p>
                  <p className="text-gold mt-4 text-xs font-black uppercase tracking-[0.3em]">— Fábio Rocha</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-200">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">O Especialista</span>
              <h2 className="text-5xl md:text-6xl text-white font-serif mt-4 mb-10 leading-tight">Uma Trajetória Construída <br />Dentro da Quadra</h2>
              <div className="space-y-8">
                <p className="text-gray-400 text-xl leading-relaxed font-light">
                  Minha história no tênis começou aos 8 anos, catando bolas e aprendendo observando. Aos 10 anos, ingressei na Raw Tennis, sob a orientação de Edison Raw Júnior, treinando diariamente em um ambiente de disciplina, técnica e alto nível competitivo.
                </p>
                <p className="text-gray-400 text-xl leading-relaxed font-light">
                  Competi em nível nacional, conquistei títulos e vivi o circuito de torneios até os 17 anos, quando, por questões financeiras, direcionei minha carreira para o ensino e formação de jogadores.
                </p>
                <p className="text-gray-400 text-xl leading-relaxed font-light">
                  Hoje, aos 39 anos, sou sócio da Raw Tennis, com formação completa pela CBT, ITF, IFBT e diversos workshops nacionais e internacionais. Atuei como capitão das categorias 12 e 14 anos na Copa das Federações, sendo campeão e vice-campeão, e construí uma metodologia sólida baseada em processo, performance e tomada de decisão.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                <div className="flex flex-col gap-4 p-8 bg-navy-light/50 border border-white/5 hover:border-gold/30 transition-colors">
                  <div className="bg-gold w-12 h-12 flex items-center justify-center text-navy">
                    <Users size={24} />
                  </div>
                  <h4 className="font-black text-white uppercase text-xs tracking-[0.2em]">Exclusividade</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Atendimento focado para quem valoriza discrição e alta qualidade.</p>
                </div>
                <div className="flex flex-col gap-4 p-8 bg-navy-light/50 border border-white/5 hover:border-gold/30 transition-colors">
                  <div className="bg-gold w-12 h-12 flex items-center justify-center text-navy">
                    <Target size={24} />
                  </div>
                  <h4 className="font-black text-white uppercase text-xs tracking-[0.2em]">Alta Performance</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Resultados reais através de biomecânica e estratégia aplicada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="ideal" className="py-32 bg-navy-light relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Posicionamento</span>
            <h2 className="text-5xl md:text-6xl text-white font-serif mt-4 mb-8">Padrão de Elite</h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Desenhado para o perfil executivo e profissionais que buscam excelência em todos os aspectos da vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal delay-300">
            {[
              "Adultos que desejam aprender do jeito certo desde o início",
              "Jogadores que buscam corrigir vícios e evoluir com método",
              "Público que valoriza treinos objetivos e bem planejados",
              "Perfis que buscam qualidade, exclusividade e autoridade"
            ].map((item, idx) => (
              <div key={idx} className="bg-navy border border-white/10 p-10 hover:border-gold transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 -translate-y-12 translate-x-12 rounded-full"></div>
                <CheckCircle2 className="text-gold mb-10 group-hover:scale-125 transition-transform" size={40} />
                <p className="text-white text-xl font-serif leading-relaxed italic">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-navy-light overflow-hidden group/portfolio">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover/portfolio:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-shrink-0 w-[85vw] sm:w-96 h-[550px] overflow-hidden group border border-white/5 snap-center ${item.type === 'image' ? 'cursor-pointer' : ''}`}
                onClick={() => item.type === 'image' && setSelectedMedia(item)}
              >
                {item.type === 'image' ? (
                  <>
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-serif italic text-lg">Ver detalhes</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full relative bg-black">
                    <video
                      src={`${item.src}#t=0.001`}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover/portfolio:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight size={32} />
          </button>

        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodo" className="py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-2/5 reveal">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Metodologia</span>
              <h2 className="text-5xl text-white font-serif mt-4 mb-10 leading-tight">Clareza gera <br /><span className="text-gold italic">autoridade</span> em quadra</h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                Nossa abordagem elimina as incertezas. Cada movimento é analisado e ajustado para máxima eficiência técnica e tática.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-gold font-black uppercase tracking-[0.3em] text-[10px] hover:text-white transition-all group">
                Descobrir Processo de Elite <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 reveal delay-400">
              {[
                { title: "Diagnóstico", desc: "Mapeamento biomecânico e tático do seu jogo atual." },
                { title: "Estratégia", desc: "Plano de evolução desenhado para suas metas profissionais." },
                { title: "Execução", desc: "Treinos focados na repetição técnica e correção de elite." },
                { title: "Refinamento", desc: "Ajustes constantes para manter a performance no topo." }
              ].map((step, idx) => (
                <div key={idx} className="bg-navy-light/30 p-10 border border-white/5 hover:bg-navy-light hover:border-gold/50 transition-all duration-500 group">
                  <span className="text-gold font-serif text-5xl opacity-20 block mb-8 group-hover:opacity-100 transition-all">0{idx + 1}</span>
                  <h4 className="text-white font-black uppercase tracking-[0.2em] mb-4 text-xs">{step.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* E-books Section */}
      <section id="ebooks" className="py-32 bg-navy overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="bg-navy-light border border-white/5 rounded-none p-10 md:p-24 flex flex-col lg:flex-row items-center gap-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px]"></div>

            <div className="lg:w-1/2 reveal">
              <span className="bg-gold text-navy text-[9px] uppercase font-black tracking-[0.4em] px-4 py-2 mb-10 inline-block">Material de Elite</span>
              <h2 className="text-5xl md:text-6xl text-white font-serif mb-8 leading-tight">Excelência técnica <br />além da quadra</h2>
              <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
                Disponibilizo materiais técnicos exclusivos para jogadores que buscam dominar os fundamentos e acelerar a compreensão tática em tempo recorde.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Drills de biomecânica avançada",
                  "Controle e regularidade tática",
                  "Estratégia de jogo para duplas",
                  "Padrões de saque e devolução"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white/70">
                    <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
                    <span className="text-sm tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-navy px-12 py-6 rounded-none font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-navy hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] transition-all duration-300 flex items-center justify-center lg:justify-start gap-4 w-full lg:w-fit group shadow-2xl">
                Baixar Material de Drills <BookOpen size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="lg:w-1/2 relative group reveal delay-300">
              <div className="absolute inset-0 bg-gold/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src={IMAGES.ebookCover} alt="Ebook Cover" className="relative z-10 w-full max-w-md mx-auto shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/10 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute -bottom-8 -right-8 bg-gold text-navy p-10 shadow-2xl z-20 hidden md:block">
                <span className="block text-4xl font-serif italic mb-1">VIP</span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] block whitespace-nowrap">Full Technical Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 bg-navy text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
          <div className="mb-12 inline-block">
            <div className="p-8 border border-gold/30 rounded-full">
              <Award className="text-gold" size={72} />
            </div>
          </div>
          <h2 className="text-6xl md:text-8xl text-white font-serif mb-10 leading-tight">O seu jogo merece <br /><span className="text-gold">este nível</span></h2>
          <p className="text-gray-400 text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Agende sua consultoria técnica hoje e transforme seu desempenho com quem entende de exclusividade e resultado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href={WHATSAPP_CONSULTORIA_LINK} target="_blank" rel="noopener noreferrer" className="bg-gold text-navy px-16 py-8 rounded-none font-black uppercase tracking-[0.3em] hover:bg-white transition-all inline-flex items-center gap-4 shadow-2xl text-lg group">
              <Smartphone size={24} /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-6">
              <img src={IMAGES.logo} alt="Logo" className="h-16" />
              <div className="text-white text-left">
                <p className="font-serif text-2xl tracking-[0.05em] leading-none uppercase">Fábio Rocha</p>
                <p className="text-gold text-[9px] tracking-[0.4em] font-black uppercase mt-2">Tennis Specialist</p>
              </div>
            </div>

            <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
              <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
              <a href="#metodo" className="hover:text-gold transition-colors">Método</a>
              <a href="#ebooks" className="hover:text-gold transition-colors">Materiais</a>
            </div>

            <div className="flex gap-6">
              <a href="https://www.instagram.com/fabiotennnis" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all cursor-pointer group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
            <div className="text-gray-600 text-[10px] font-medium uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} Fábio Rocha Performance Academy. All rights reserved.
            </div>
            <div className="text-gray-600 text-[10px] font-medium uppercase tracking-[0.2em]">
              Made with excellence for tennis players.
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X size={40} />
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt="Portfolio Full" className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10" />
            ) : (
              <video src={selectedMedia.src} controls autoPlay className="max-w-full max-h-[90vh] shadow-2xl border border-white/10" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
