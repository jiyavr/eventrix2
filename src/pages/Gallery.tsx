import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL EVENTS' },
    { id: 'corporate', label: 'CORPORATE' },
    { id: 'entertainment', label: 'ENTERTAINMENT' },
    { id: 'weddings', label: 'WEDDINGS' },
    { id: 'production', label: 'PRODUCTION' },
  ];

  const galleryItems = [
    { category: 'corporate', image: 'https://static.wixstatic.com/media/7b99b4_e15feb294b1145a7988839787b2ec412~mv2.jpeg/v1/fill/w_351,h_197,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_e15feb294b1145a7988839787b2ec412~mv2.jpeg', title: 'Annual Summit 2024' },
    { category: 'corporate', image: 'https://static.wixstatic.com/media/7b99b4_8175273accb64246a56cdcfaefe8fac3~mv2.jpg/v1/fill/w_351,h_263,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_8175273accb64246a56cdcfaefe8fac3~mv2.jpg', title: 'Product Launch' },
    { category: 'entertainment', image: 'https://static.wixstatic.com/media/7b99b4_20db4b08682944d1b9858ff479ae2232~mv2.jpg/v1/fill/w_372,h_248,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_20db4b08682944d1b9858ff479ae2232~mv2.jpg', title: 'Music Festival' },
    { category: 'entertainment', image: 'https://static.wixstatic.com/media/6c7cd2_7f0029e3a6db42cd970983c1547700a3~mv2.jpg/v1/fill/w_372,h_247,al_c,q_80,usm_0.66_1.00_0.01/6c7cd2_7f0029e3a6db42cd970983c1547700a3~mv2.jpg', title: 'Award Ceremony' },
    { category: 'weddings', image: 'https://static.wixstatic.com/media/7b99b4_3dacfe6f4f7b4b51920e30a7627f6138~mv2.jpeg/v1/fill/w_372,h_209,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_3dacfe6f4f7b4b51920e30a7627f6138~mv2.jpeg', title: 'Destination Wedding' },
    { category: 'weddings', image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.ptaufiqphotography.com/wp-content/uploads/2021/04/ptaufiq-indian-wedding-jaipur-india-sangeet1.jpg', title: 'Sangeet Night' },
    { category: 'production', image: 'https://designnews.co.za/wp-content/uploads/2015/12/Huis.jpg', title: 'Stage Production' },
    { category: 'production', image: 'https://hpro-web-assets.s3.amazonaws.com/insights/uploads/2020/12/Motion-City-Soundtrack.By-Alive-One-Coverage.jpg', title: 'Lighting Design' },
    { category: 'corporate', image: 'https://thumbs.dreamstime.com/b/decor-large-party-gala-dinner-purple-red-candles-lamps-corporate-event-114117225.jpg', title: 'Corporate Gala' },
    { category: 'entertainment', image: 'https://images.stockcake.com/public/a/3/e/a3e10fb4-9bdb-4829-b120-572bb2b7d1fb_large/live-concert-energy-stockcake.jpg', title: 'Live Concert' },
    { category: 'weddings', image: 'https://www.marriagecolours.com/wp-content/uploads/2025/10/Sarada-Prashant-Kailash-Resort-Reception-June-6-5.jpg', title: 'Reception Setup' },
    { category: 'production', image: 'https://tse4.mm.bing.net/th/id/OIP.kDTvtwT69wCarrG7Z68scQHaE0?pid=Api&P=0&h=180', title: 'LED Wall Production' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-black text-white">
      <HeroSection />
      <FilterSection
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <GalleryGrid items={filteredItems} />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#221333] to-black opacity-80"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=424,fit=crop,trim=475.37132352941177;0;164.99142156862746;0/YX4lwbZ5q8TgDJwk/jnr_meetingspic_generalsession_entertainment-2000x1333-A3Q2KwGPxZfJrxDZ.jpg')"
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          MOMENTS THAT
          <span className="text-[#df3311]"> MATTER</span>
        </h1>
        <p className="text-2xl text-gray-300 leading-relaxed">
          Visual stories from our most unforgettable productions
        </p>
      </div>
    </section>
  );
}

interface FilterSectionProps {
  categories: { id: string; label: string }[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

function FilterSection({ categories, selectedCategory, onSelectCategory }: FilterSectionProps) {
  return (
    <section className="py-12 bg-black sticky top-[72px] z-40 border-b border-[#df3311]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-8 py-3 rounded-full font-bold text-sm tracking-wider transition-all ${
                selectedCategory === category.id
                  ? 'bg-[#df3311] text-white'
                  : 'bg-[#221333] text-gray-400 hover:bg-[#df3311]/20 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

interface GalleryGridProps {
  items: { category: string; image: string; title: string }[];
}

function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#221333] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-bold text-[#df3311] mb-2 tracking-wider uppercase">
                  {item.category}
                </div>
                <h3 className="text-2xl font-black text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
