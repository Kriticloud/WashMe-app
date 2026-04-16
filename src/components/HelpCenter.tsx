import { motion } from 'motion/react';
import { Screen } from '../types';
import { useState } from 'react';

interface HelpCenterProps {
  onNavigate: (screen: Screen) => void;
}

export default function HelpCenter({ onNavigate }: HelpCenterProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const faqs = [
    { id: 0, q: 'Delivery Time', a: 'Most orders are completed and delivered within 24 to 48 hours. Express services are available for same-day delivery in selected zones.' },
    { id: 1, q: 'Pricing', a: 'We offer transparent pricing per KG or per piece. Standard washing starts at $2.50/kg. You can view the full price list in your orders dashboard.' },
    { id: 2, q: 'Damage Policy', a: 'In the unlikely event of damage, we provide full insurance coverage for up to 10x the service cost of the item. Quality is our guarantee.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 px-6 max-w-2xl mx-auto space-y-8 w-full pb-32"
    >
      <section className="space-y-2 text-left">
        <p className="text-primary font-headline font-bold text-sm uppercase tracking-widest">Help Center</p>
        <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">How can we help?</h1>
        <p className="text-on-surface-variant leading-relaxed">Our support team is available 24/7 to ensure your experience is as fresh as your laundry.</p>
      </section>

      <section className="relative group cursor-pointer">
        <div className="absolute -inset-0.5 liquid-gradient rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative flex items-center justify-between p-6 bg-surface rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">forum</span>
            </div>
            <div className="text-left">
              <h3 className="font-headline font-bold text-lg">Start Live Chat</h3>
              <p className="text-sm text-on-surface-variant">Instant response from our team</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary">chevron_right</span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-headline font-bold px-1 text-left">Common Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className={`rounded-lg p-5 transition-all border ${
                activeFaq === faq.id ? 'bg-surface border-primary/10 shadow-sm' : 'bg-outline-variant/5 border-transparent'
              }`}
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
              >
                <span className={`font-semibold ${activeFaq === faq.id ? 'text-primary' : 'text-on-surface'}`}>{faq.q}</span>
                <span className="material-symbols-outlined text-primary">
                  {activeFaq === faq.id ? 'remove' : 'add'}
                </span>
              </div>
              {activeFaq === faq.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-3 text-sm text-on-surface-variant leading-relaxed text-left"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-3 liquid-gradient text-white p-6 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-[0_20px_40px_rgba(0,97,164,0.08)]">
          <span className="material-symbols-outlined">call</span>
          Call Support
        </button>
        <button className="flex items-center justify-center gap-3 bg-outline-variant/10 text-on-surface p-6 rounded-xl font-headline font-bold text-lg hover:bg-outline-variant/20 transition-all active:scale-95">
          <span className="material-symbols-outlined text-secondary">chat</span>
          WhatsApp Support
        </button>
      </section>

      <section className="py-6">
        <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jthcyjqQkLFkwALC1H71Ab_RI5efsnBYBpgeVAWaSG9D0Z8bTC5G7c4uV7o24t8dWETYfL15cHR9ZUiBEGnBfg0gWUgNiAHISZBa5hTfCW_mb1ptAf6bCOGaSqTroysMAO-bwVJ_osXJwnVSWpabIpw6Y-A-GgxVE2KOHKyn867kp5k0Lk61wHOPOB3h2tkhqPr-D7Me9SgiPa8DsrHINjlbW_1JSkYpy6-NnsbklzRW-eANIgy8bCmyf-TY1GzFXFzr5c7EK7Y" 
            alt="Laundry facility" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <p className="text-white/90 text-sm font-medium italic">"Quality care for your most delicate fabrics."</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
