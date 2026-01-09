import { useState, FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <ContactFormSection />
      <ContactInfoSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#221333] to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          LET'S CREATE
          <span className="text-[#df3311]"> TOGETHER</span>
        </h1>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        guestCount: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#221333] to-black p-8 md:p-12 rounded-3xl border border-[#df3311]/20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">START YOUR EVENT</h2>
          <p className="text-gray-400 mb-10">
            Share your vision with us. We'll get back to you within 24 hours.
          </p>

          {submitSuccess ? (
            <div className="bg-[#df3311]/20 border border-[#df3311] rounded-2xl p-8 text-center">
              <div className="text-[#df3311] text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-black mb-2">MESSAGE SENT!</h3>
              <p className="text-gray-400">We'll be in touch shortly to discuss your event.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                    PHONE *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                    EVENT TYPE *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors"
                  >
                    <option value="">Select Type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="entertainment">Entertainment & Live Event</option>
                    <option value="wedding">Wedding & Social Event</option>
                    <option value="virtual">Virtual & Hybrid Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                    EVENT DATE
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                    LOCATION
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors"
                    placeholder="Mumbai, India"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                    EXPECTED GUEST COUNT
                  </label>
                  <input
                    type="text"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors"
                    placeholder="e.g., 200-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 tracking-wider text-gray-400">
                  TELL US ABOUT YOUR EVENT *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#df3311] focus:outline-none transition-colors resize-none"
                  placeholder="Share your vision, requirements, and any specific details..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#df3311] text-white font-bold py-4 rounded-lg hover:bg-[#b82a0e] transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    SENDING...
                  </>
                ) : (
                  <>
                    SEND INQUIRY
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#221333]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-black p-8 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all group">
            <Phone size={32} className="text-[#df3311] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black mb-3">CALL US</h3>
            <a href="tel:+919876543210" className="text-gray-400 hover:text-[#df3311] transition-colors">
              +91 98765 43210
            </a>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all group">
            <Mail size={32} className="text-[#df3311] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black mb-3">EMAIL US</h3>
            <a href="mailto:info@eventrix.com" className="text-gray-400 hover:text-[#df3311] transition-colors">
              info@eventrix.com
            </a>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all group">
            <MapPin size={32} className="text-[#df3311] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black mb-3">VISIT US</h3>
            <p className="text-gray-400">
              Mumbai, India
            </p>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-[#df3311]/20 hover:border-[#df3311] transition-all group">
            <MessageCircle size={32} className="text-[#df3311] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black mb-3">WHATSAPP</h3>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#df3311] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#b82a0e] transition-colors"
            >
              CHAT NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
