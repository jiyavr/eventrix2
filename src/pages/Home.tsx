import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Award, Globe, Lightbulb, Music, Video, Radio, Camera } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <CountersSection />
      <PositioningSection />
      <EventCategoriesSection />
      <CapabilitySection />
      <TechnicalExcellenceSection />
      <DJAbbySection />
      <FeaturedMomentsSection />
      <TrustedBySection />
      <PhilosophySection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#221333] via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="overflow-hidden mb-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter animate-fade-in-up">
            CRAFT THE
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-[#df3311] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            UNFORGETTABLE
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Where vision meets execution. From concept to curtain call, we create experiences that resonate.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-[#df3311] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#b82a0e] transition-all hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          START YOUR EVENT
          <ArrowRight size={20} />
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function CountersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const counters = [
    { value: '20+', label: 'YEARS OF EXCELLENCE' },
    { value: '5000+', label: 'EVENTS EXECUTED' },
    { value: '50K+', label: 'ATTENDEES IMPACTED' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black to-[#221333]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-5xl md:text-6xl font-black text-[#df3311] mb-4">
                {counter.value}
              </div>
              <div className="text-sm font-bold text-gray-400 tracking-widest">
                {counter.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PositioningSection() {
  return (
    <section className="py-32 bg-[#221333]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
          WE DON'T JUST ORGANIZE EVENTS.
          <span className="text-[#df3311]"> WE CREATE WORLDS.</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          For over two decades, Eventrix has been the force behind India's most memorable experiences.
          From intimate gatherings to stadium-scale productions, we blend creative vision with technical mastery
          to deliver events that don't just happen—they transform spaces, captivate audiences, and leave lasting impressions.
        </p>
      </div>
    </section>
  );
}

function EventCategoriesSection() {
  const categories = [
    {
      title: 'CORPORATE EVENTS',
      description: 'Conferences, product launches, team building, corporate galas',
      icon: Award,
      gradient: 'from-[#df3311] to-[#b82a0e]',
      image: 'https://static.wixstatic.com/media/7b99b4_3426feaf4bc84de89500cd409ef256ca~mv2.jpeg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_3426feaf4bc84de89500cd409ef256ca~mv2.jpeg',
    },
    {
      title: 'LIVE & ENTERTAINMENT',
      description: 'Concerts, festivals, award shows, celebrity performances',
      icon: Music,
      gradient: 'from-[#221333] to-[#441355]',
      image: 'https://static.wixstatic.com/media/7b99b4_a1a8f98bc8e44da8bfaab8086ee310bd~mv2.jpg/v1/fill/w_372,h_248,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_a1a8f98bc8e44da8bfaab8086ee310bd~mv2.jpg',
    },
    {
      title: 'WEDDINGS & SOCIAL',
      description: 'Destination weddings, receptions, private celebrations',
      icon: Sparkles,
      gradient: 'from-[#df3311] to-[#221333]',
      image: 'https://static.wixstatic.com/media/7b99b4_0fc79bc332664482b1c072d20fc7f6aa~mv2.jpeg/v1/fill/w_372,h_209,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_0fc79bc332664482b1c072d20fc7f6aa~mv2.jpeg',
    },
    {
      title: 'VIRTUAL & HYBRID',
      description: 'Digital events, hybrid experiences, virtual productions',
      icon: Globe,
      gradient: 'from-[#221333] to-[#df3311]',
      image: 'https://static.wixstatic.com/media/7b99b4_88fdb0716f5e4d9c9e2def08da511b3d~mv2.jpeg/v1/fill/w_372,h_209,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_88fdb0716f5e4d9c9e2def08da511b3d~mv2.jpeg',
    },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20">
          EVERY <span className="text-[#df3311]">OCCASION</span>, PERFECTED
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[2px] hover:scale-[1.02] transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${category.gradient})` }}
              >
                <div className="bg-black rounded-2xl h-full flex flex-col overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <Icon size={48} className="text-[#df3311] mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-3xl font-black mb-4 tracking-tight">{category.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{category.description}</p>
                    <div className="mt-auto pt-6">
                      <Link
                        to="/events"
                        className="inline-flex items-center gap-2 text-[#df3311] font-bold hover:gap-4 transition-all"
                      >
                        EXPLORE
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-[#221333]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              CREATIVE VISION
              <span className="text-[#df3311]"> + PRODUCTION POWER</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Our in-house creative team conceptualizes experiences that break boundaries,
              while our production crew brings those visions to life with precision and flair.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              From initial sketches to final execution, we control every detail—ensuring your event
              is not just flawless, but unforgettable.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#df3311] to-[#221333] rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
                alt="Creative Production"
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#df3311] text-white px-8 py-6 rounded-2xl">
              <div className="text-4xl font-black">360°</div>
              <div className="text-sm font-bold tracking-wider">PRODUCTION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalExcellenceSection() {
  const technical = [
    { icon: Lightbulb, label: 'LIGHTING DESIGN' },
    { icon: Music, label: 'SOUND SYSTEMS' },
    { icon: Video, label: 'LED & VIDEO WALLS' },
    { icon: Camera, label: 'STAGE DESIGN' },
    { icon: Zap, label: 'SPECIAL EFFECTS' },
    { icon: Radio, label: 'LIVE STREAMING' },
  ];

  return (
    <section className="py-32 bg-[#221333]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20">
          TECHNICAL <span className="text-[#df3311]">EXCELLENCE</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technical.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#df3311] transition-colors">
                  <Icon size={32} className="text-[#df3311] group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-bold text-gray-400 tracking-wider">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DJAbbySection() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#221333] to-black rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-square bg-gradient-to-br from-[#df3311]/20 to-transparent">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                alt="DJ Abby"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-block bg-[#df3311] text-white text-xs font-bold px-4 py-2 rounded-full mb-6 w-fit">
                BRAND DIFFERENTIATOR
              </div>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                FEATURING
                <span className="text-[#df3311]"> DJ ABBY</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                An internationally acclaimed performer and our creative director, DJ Abby brings
                unmatched energy and musical mastery to every event.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From Bollywood nights to global EDM sets, his performances transform events into
                experiences that audiences talk about for years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedMomentsSection() {
  const moments = [
    { image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg', title: 'Corporate Gala 2024' },
    { image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg', title: 'Music Festival' },
    { image: 'https://images.pexels.com/photos/2306203/pexels-photo-2306203.jpeg', title: 'Product Launch' },
    { image: 'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg', title: 'Destination Wedding' },
    { image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg', title: 'Award Show' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-[#221333]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black mb-4">
          FEATURED <span className="text-[#df3311]">MOMENTS</span>
        </h2>
        <p className="text-gray-400 mb-16 text-lg">Snapshots from our recent productions</p>

        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 snap-center group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white">{moment.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 text-[#df3311] text-lg font-bold hover:gap-5 transition-all"
          >
            VIEW FULL GALLERY
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="py-32 bg-[#221333]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-20">
          TRUSTED BY THE <span className="text-[#df3311]">BEST</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="flex items-center justify-center h-20">
              <div className="text-3xl font-black text-white">BRAND {item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
          WHY EVENTRIX <span className="text-[#df3311]">WORKS</span>
        </h2>

        <div className="space-y-8 text-left">
          <div className="border-l-4 border-[#df3311] pl-8">
            <h3 className="text-2xl font-black mb-3">WE LISTEN FIRST</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every event starts with understanding your vision, goals, and audience. We don't impose templates—we craft custom solutions.
            </p>
          </div>

          <div className="border-l-4 border-[#df3311] pl-8">
            <h3 className="text-2xl font-black mb-3">WE OBSESS OVER DETAILS</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              From venue acoustics to lighting angles, every element is meticulously planned and executed to perfection.
            </p>
          </div>

          <div className="border-l-4 border-[#df3311] pl-8">
            <h3 className="text-2xl font-black mb-3">WE DELIVER EXPERIENCES</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Not just events, but moments that connect, inspire, and resonate long after the curtains close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-[#221333]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
          READY TO CREATE
          <span className="text-[#df3311]"> MAGIC?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Let's turn your vision into an unforgettable experience.
          Whether it's a corporate milestone or a personal celebration, we're ready to make it extraordinary.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-[#df3311] px-12 py-6 rounded-full text-xl font-bold hover:bg-[#b82a0e] transition-all hover:scale-105"
        >
          LET'S TALK
          <ArrowRight size={24} />
        </Link>
      </div>
    </section>
  );
}
