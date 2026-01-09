import { Target, Lightbulb, Trophy, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <HeroSection />
      <TimelineSection />
      <PhilosophySection />
      <StrengthsSection />
      <LeadershipSection />
    </div>
  );
}

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#221333] via-black to-black"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 animate-pulse-slow"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg')"
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="overflow-hidden mb-6">
          <h1 
            className={`text-6xl md:text-8xl font-black leading-tight transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            TWO DECADES OF
            <span className="text-[#df3311] block mt-2"> EXCELLENCE</span>
          </h1>
        </div>
        <div className="overflow-hidden">
          <p 
            className={`text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            Built on passion, driven by perfection, defined by unforgettable experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const milestones = [
    {
      year: '2004',
      title: 'THE BEGINNING',
      description: 'Founded with a vision to revolutionize event experiences in India. Started with intimate gatherings and corporate events.',
    },
    {
      year: '2010',
      title: 'SCALING UP',
      description: 'Expanded to large-scale concerts and festivals. Established partnerships with international artists and brands.',
    },
    {
      year: '2015',
      title: 'TECHNICAL MASTERY',
      description: 'Invested in cutting-edge production equipment. Became known for stadium-scale shows and complex technical setups.',
    },
    {
      year: '2020',
      title: 'DIGITAL EVOLUTION',
      description: 'Pioneered virtual and hybrid event experiences during global changes. Merged physical and digital seamlessly.',
    },
    {
      year: '2024',
      title: 'INDUSTRY LEADERS',
      description: 'Over 5000 events executed. Recognized as one of India\'s premier event production companies.',
    },
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#df3311] via-[#df3311]/50 to-transparent transform -translate-x-1/2 hidden md:block"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="overflow-hidden mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-center transform transition-all duration-1000">
            OUR <span className="text-[#df3311]">JOURNEY</span>
          </h2>
        </div>

        <div className="space-y-24 relative">
          {milestones.map((milestone, index) => {
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`flex flex-col md:flex-row gap-8 items-start relative ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-12 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full bg-[#df3311] border-4 border-black transform transition-all duration-700 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}></div>
                  <div className={`absolute inset-0 rounded-full bg-[#df3311] animate-ping ${
                    isVisible ? 'opacity-75' : 'opacity-0'
                  }`}></div>
                </div>

                <div 
                  className={`md:w-1/3 flex-shrink-0 transform transition-all duration-1000 ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : isEven 
                        ? '-translate-x-20 opacity-0' 
                        : 'translate-x-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="text-7xl font-black text-[#df3311] transform transition-transform duration-500 hover:scale-110">
                      {milestone.year}
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#df3311] rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div 
                  className={`md:w-2/3 transform transition-all duration-1000 ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : isEven 
                        ? 'translate-x-20 opacity-0' 
                        : '-translate-x-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="bg-gradient-to-br from-[#221333] via-[#221333] to-black p-8 rounded-2xl border-l-4 border-[#df3311] relative overflow-hidden group hover:border-[#df3311] hover:shadow-[0_0_30px_rgba(223,51,17,0.3)] transition-all duration-500">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <h3 className="text-3xl font-black mb-4 relative z-10 group-hover:text-[#df3311] transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                      {milestone.description}
                    </p>
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

function PhilosophySection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const philosophies = [
    {
      title: 'THINK DIFFERENT',
      description: 'We reject cookie-cutter solutions. Every client deserves a bespoke experience that reflects their unique vision and brand identity.',
    },
    {
      title: 'EXECUTE FLAWLESSLY',
      description: 'Creative brilliance means nothing without precision. Our team ensures every detail is meticulously planned and perfectly executed.',
    },
    {
      title: 'INNOVATE CONSTANTLY',
      description: 'Technology evolves. Trends change. We stay ahead by continuously exploring new tools, techniques, and creative approaches.',
    },
    {
      title: 'CREATE IMPACT',
      description: 'Beyond logistics and production, we craft moments that move people, create connections, and leave lasting impressions.',
    },
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-black to-[#221333] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#df3311] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#221333] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="overflow-hidden mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-center transform transition-all duration-1000">
            THE EVENTRIX <span className="text-[#df3311]">PHILOSOPHY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((philosophy, index) => {
            const isVisible = visibleItems.has(index);
            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`group relative transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-gradient-to-br from-[#221333]/50 to-black/50 p-8 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all duration-500 hover:shadow-[0_0_40px_rgba(223,51,17,0.2)] hover:scale-[1.02] backdrop-blur-sm">
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#df3311]/0 via-[#df3311]/20 to-[#df3311]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#df3311] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full"></div>
                  
                  <h3 className="text-3xl font-black mb-4 text-[#df3311] group-hover:scale-105 transition-transform duration-300 inline-block">
                    {philosophy.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {philosophy.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#df3311] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StrengthsSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const strengths = [
    {
      icon: Lightbulb,
      title: 'CREATIVE EXCELLENCE',
      description: 'In-house creative team with decades of combined experience in conceptualizing breakthrough event experiences.',
      gradient: 'from-[#df3311] to-[#b82a0e]',
    },
    {
      icon: Trophy,
      title: 'PRODUCTION MASTERY',
      description: 'State-of-the-art equipment and technical crew capable of executing events from intimate to stadium-scale.',
      gradient: 'from-[#221333] to-[#441355]',
    },
    {
      icon: Target,
      title: 'FLAWLESS EXECUTION',
      description: 'Detailed planning, rigorous coordination, and on-ground expertise ensure nothing is left to chance.',
      gradient: 'from-[#df3311] to-[#221333]',
    },
    {
      icon: Users,
      title: 'CLIENT PARTNERSHIP',
      description: 'We work as an extension of your team, understanding your goals and delivering beyond expectations.',
      gradient: 'from-[#221333] to-[#df3311]',
    },
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-32 bg-[#221333] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #df3311 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="overflow-hidden mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-center transform transition-all duration-1000">
            CORE <span className="text-[#df3311]">STRENGTHS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`group relative transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-black p-10 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all duration-500 hover:shadow-[0_0_50px_rgba(223,51,17,0.3)] overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon container with animated glow */}
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className="relative bg-[#221333] p-4 rounded-xl border border-[#df3311]/30 group-hover:border-[#df3311] transition-all duration-500">
                      <Icon 
                        size={48} 
                        className="text-[#df3311] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" 
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 relative z-10 group-hover:text-[#df3311] transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                    {strength.description}
                  </p>
                  
                  {/* Animated corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#df3311]/0 to-[#df3311]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ performances: 0, countries: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const incrementPerf = 1000 / steps;
          const incrementCountries = 15 / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            setCounters({
              performances: Math.min(Math.floor(currentStep * incrementPerf), 1000),
              countries: Math.min(Math.floor(currentStep * incrementCountries), 15),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#df3311] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#221333] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="overflow-hidden mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-center transform transition-all duration-1000">
            LEADERSHIP & <span className="text-[#df3311]">CREATIVE DIRECTION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`relative transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#df3311] to-[#221333] rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
              
              <div className="aspect-[3/4] bg-gradient-to-br from-[#df3311] to-[#221333] rounded-3xl overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                  alt="DJ Abby"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#df3311] text-white px-6 py-4 rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <div className="text-2xl font-black">20+</div>
                <div className="text-xs font-bold tracking-wider">YEARS</div>
              </div>
            </div>
          </div>

          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="inline-block bg-[#df3311] text-white text-sm font-bold px-6 py-3 rounded-full mb-6 transform hover:scale-110 transition-transform duration-300">
              CREATIVE DIRECTOR
            </div>
            <h3 className="text-5xl font-black mb-6 transform hover:scale-105 transition-transform duration-300 inline-block">
              DJ ABBY
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p className="transform hover:text-gray-300 transition-colors duration-300">
                As the creative force behind Eventrix, DJ Abby brings a unique blend of artistic
                vision and technical expertise to every project.
              </p>
              <p className="transform hover:text-gray-300 transition-colors duration-300">
                With international performance experience spanning multiple continents and genres,
                he understands what moves audiences and how to create unforgettable moments.
              </p>
              <p className="transform hover:text-gray-300 transition-colors duration-300">
                His dual role as performer and creative director ensures that every Eventrix event
                has that special energy that transforms good events into legendary experiences.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#221333] to-black p-6 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all duration-500 group">
                <div className="text-4xl font-black text-[#df3311] mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {counters.performances}+
                </div>
                <div className="text-sm text-gray-500 font-bold group-hover:text-gray-400 transition-colors duration-300">
                  PERFORMANCES
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#221333] to-black p-6 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all duration-500 group">
                <div className="text-4xl font-black text-[#df3311] mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {counters.countries}+
                </div>
                <div className="text-sm text-gray-500 font-bold group-hover:text-gray-400 transition-colors duration-300">
                  COUNTRIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
