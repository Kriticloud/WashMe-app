import { motion } from 'motion/react';
import { Screen } from '../types';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    { id: 'wash-fold', title: 'Wash & Fold', desc: 'Pristine care for your everyday basics.', icon: 'laundry', size: 'large' },
    { id: 'dry-clean', title: 'Dry Cleaning', icon: 'dry_cleaning', size: 'small' },
    { id: 'ironing', title: 'Ironing', icon: 'iron', size: 'small' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-8 w-full"
    >
      <section className="space-y-1">
        <span className="text-primary font-headline font-bold tracking-widest text-xs uppercase">Your Fresh Start</span>
        <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">Good Morning, <br/>User.</h2>
      </section>

      <section className="relative overflow-hidden rounded-lg p-6 liquid-gradient text-white shadow-[0_20px_40px_rgba(0,97,164,0.15)]">
        <div className="relative z-10 space-y-2">
          <h3 className="font-headline font-bold text-2xl">First Wash 20% Off</h3>
          <p className="text-sm opacity-90 font-medium">Experience the pristine flow for less. Use code: FRESH20</p>
          <button className="mt-4 px-6 py-2 bg-white text-primary font-headline font-bold rounded-full text-sm hover:scale-105 transition-transform">
            Claim Now
          </button>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-20 rotate-12">
          <span className="material-symbols-outlined text-[12rem]">water_drop</span>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-headline font-bold text-lg">Active Order</h4>
          <button 
            onClick={() => onNavigate('LIVE_TRACKING')}
            className="text-xs font-bold text-primary uppercase tracking-widest"
          >
            Tracking
          </button>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-on-surface-variant text-sm font-medium">Order #1234</p>
              <p className="font-headline font-bold text-xl mt-1">Washing in Progress</p>
            </div>
            <div className="p-3 bg-primary/10 text-primary rounded-full">
              <span className="material-symbols-outlined fill-1">local_laundry_service</span>
            </div>
          </div>
          <div className="relative w-full h-2 bg-outline-variant/20 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[65%] liquid-gradient rounded-full"></div>
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Pickup</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Cleaning</span>
            <span className="text-[10px] font-bold text-on-surface-variant opacity-30 uppercase tracking-tighter">Delivery</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h4 className="font-headline font-bold text-lg">Our Services</h4>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate('SELECT_ITEMS')}
            className="col-span-1 bg-surface p-6 rounded-lg flex flex-col justify-between aspect-square hover:bg-outline-variant/5 transition-colors group text-left border border-outline-variant/10"
          >
            <span className="material-symbols-outlined text-primary text-3xl">laundry</span>
            <div>
              <h5 className="font-headline font-bold text-on-surface">Wash & Fold</h5>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Pristine care for your everyday basics.</p>
            </div>
          </button>
          
          <div className="col-span-1 space-y-4">
            <button className="w-full bg-outline-variant/10 p-6 rounded-lg flex flex-col justify-between h-[calc(50%-0.5rem)] hover:bg-outline-variant/20 transition-colors text-left">
              <span className="material-symbols-outlined text-primary">dry_cleaning</span>
              <h5 className="font-headline font-bold text-on-surface text-sm">Dry Cleaning</h5>
            </button>
            <button className="w-full bg-surface p-6 rounded-lg flex flex-col justify-between h-[calc(50%-0.5rem)] hover:bg-outline-variant/5 transition-colors text-left border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary">iron</span>
              <h5 className="font-headline font-bold text-on-surface text-sm">Ironing</h5>
            </button>
          </div>

          <button className="col-span-2 bg-secondary/5 p-6 rounded-lg flex items-center justify-between border-l-4 border-secondary group hover:bg-secondary/10 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full text-secondary shadow-sm">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div className="text-left">
                <h5 className="font-headline font-bold text-on-surface">Express Service</h5>
                <p className="text-xs text-on-surface-variant">Same-day cleaning & delivery</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant opacity-30 group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>
      </section>

      <section className="fixed bottom-24 left-0 w-full px-6 pointer-events-none md:relative md:bottom-0 md:px-0">
        <button 
          onClick={() => onNavigate('SELECT_ITEMS')}
          className="pointer-events-auto w-full py-5 liquid-gradient text-white rounded-xl font-headline font-bold text-lg shadow-[0_20px_40px_rgba(0,97,164,0.2)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">add_circle</span>
          Book Pickup
        </button>
      </section>
    </motion.div>
  );
}
