import { useState } from 'react';
import { ChevronDown, Award, Music, Sparkles, Globe, Camera, Zap } from 'lucide-react';

export default function Events() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <OverviewSection />
      <ServicesSections />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#221333] to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          EVENTS THAT
          <span className="text-[#df3311]"> RESONATE</span>
        </h1>
        <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          From concept to curtain call, we deliver experiences across every format and scale.
        </p>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xl text-gray-300 leading-relaxed">
          Whether you're launching a product, celebrating a milestone, or creating a cultural moment,
          our comprehensive event services cover every aspect of production and execution.
        </p>
      </div>
    </section>
  );
}

function ServicesSections() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const services = [
    {
      icon: Award,
      title: 'CORPORATE EVENTS',
      tagline: 'Professional excellence meets creative brilliance',
      services: [
        'Annual Conferences & Summits',
        'Product Launches & Brand Activations',
        'Corporate Galas & Award Ceremonies',
        'Team Building & Offsites',
        'Shareholder Meetings & Town Halls',
        'Trade Shows & Exhibitions',
      ],
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    },
    {
      icon: Music,
      title: 'ENTERTAINMENT & LIVE EVENTS',
      tagline: 'Where spectacle meets substance',
      services: [
        'Concerts & Music Festivals',
        'Award Shows & Ceremonies',
        'Celebrity Performances & Meet-and-Greets',
        'Cultural Events & Exhibitions',
        'Film Premieres & Red Carpet Events',
        'Live Streaming Productions',
      ],
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    },
    {
      icon: Camera,
      title: 'FASHION & BRAND SHOWS',
      tagline: 'Runway-ready production perfection',
      services: [
        'Fashion Week Productions',
        'Designer Showcases',
        'Brand Launch Events',
        'Influencer & Media Events',
        'Luxury Retail Experiences',
        'Pop-up Events & Installations',
      ],
      image: 'https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg',
    },
    {
      icon: Sparkles,
      title: 'WEDDINGS & SOCIAL EVENTS',
      tagline: 'Personal moments, professionally crafted',
      services: [
        'Destination Weddings',
        'Multi-day Wedding Celebrations',
        'Reception & Sangeet Productions',
        'Intimate Private Parties',
        'Milestone Celebrations',
        'Anniversary & Birthday Galas',
      ],
      image: 'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg',
    },
    {
      icon: Globe,
      title: 'VIRTUAL & HYBRID EVENTS',
      tagline: 'Seamlessly blending physical and digital',
      services: [
        'Virtual Conferences & Webinars',
        'Hybrid Event Productions',
        'Live Streaming & Broadcasting',
        'Interactive Digital Experiences',
        'Virtual Product Launches',
        'Global Multi-location Events',
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    },
    {
      icon: Zap,
      title: 'PRODUCTION & SPECIAL EFFECTS',
      tagline: 'Technical wizardry at scale',
      services: [
        'Stage Design & Construction',
        'LED Walls & Video Production',
        'Lighting Design & Programming',
        'Sound Engineering & Acoustics',
        'Pyrotechnics & Special Effects',
        'Projection Mapping & Holograms',
      ],
      image: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-[#221333]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20">
          OUR <span className="text-[#df3311]">SERVICES</span>
        </h2>

        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-black to-[#221333] border-2 rounded-2xl overflow-hidden transition-all duration-500 ${
                  isExpanded ? 'border-[#df3311]' : 'border-[#df3311]/20 hover:border-[#df3311]/50'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className={`p-4 rounded-xl transition-all ${
                      isExpanded ? 'bg-[#df3311]' : 'bg-black group-hover:bg-[#df3311]'
                    }`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={32}
                    className={`text-[#df3311] transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ${
                    isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[#df3311] font-bold text-sm mb-4 tracking-wider">
                          WHAT WE DELIVER
                        </h4>
                        <ul className="space-y-3">
                          {service.services.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-[#df3311] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
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
