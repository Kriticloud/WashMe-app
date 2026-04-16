import { motion } from 'motion/react';
import { Screen } from '../types';

interface LiveTrackingProps {
  onNavigate: (screen: Screen) => void;
}

export default function LiveTracking({ onNavigate }: LiveTrackingProps) {
  const steps = [
    { title: 'Order Placed', time: '10:30 AM, Today', status: 'completed' },
    { title: 'Pickup Assigned', time: '11:15 AM, Today', status: 'completed' },
    { title: 'Clothes Picked', time: '11:45 AM, Today', status: 'completed' },
    { title: 'Washing in Progress', time: "We're handling your linens with care.", status: 'active' },
    { title: 'Out for Delivery', time: 'Expected at 2:00 PM', status: 'upcoming' },
    { title: 'Delivered', time: '', status: 'upcoming' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 w-full"
    >
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-primary-container/10 p-8 rounded-lg border-l-4 border-primary shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-left">
            <p className="font-headline font-bold text-primary-container text-sm uppercase tracking-widest mb-1">On its way</p>
            <h2 className="font-headline font-extrabold text-3xl text-on-surface">Estimated Delivery in 2 hours</h2>
          </div>
          <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full shadow-sm">
            <span className="material-symbols-outlined text-primary fill-1">timer</span>
            <span className="font-bold text-on-surface">14:45 PM</span>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] md:aspect-video rounded-lg overflow-hidden bg-outline-variant/10 shadow-inner">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH4hii8ngacFwtp8aJGH6OJwIqMB5aGcPtIQHKFD-J-nHAVqrfFAy4v7N6zanlbEa2KSbYoAJ3WKqGyw_Gh-MBqtq8kjFx7X-UkilZxNAuZ7G68sNoBYuJnTxJmL9t_NiIUzBlToM0CeXs_7y19CAoDsXmnmUYyus56_N8x3ls8Bzg-Pcqp4aDTSVZh5DCj9mSATOe4J_FaRyAET8oCes2AEBR9SVsDGP0u-4iFtrJvEPD8KYOJnO_Ba2Gyvg4Q3GI0WWr8WQb92U" 
            alt="Map" 
            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-150"></div>
              <div className="relative bg-primary-container text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <span className="material-symbols-outlined">electric_moped</span>
              </div>
            </div>
            <div className="mt-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-md text-xs font-bold text-center border border-primary/10">
              Rider: Marco
            </div>
          </div>

          <div className="absolute bottom-1/4 right-1/4">
            <div className="bg-on-surface text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <span className="material-symbols-outlined">home</span>
            </div>
          </div>

          <div className="absolute right-4 bottom-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button className="w-10 h-10 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-surface p-8 rounded-lg shadow-[0_20px_40px_rgba(0,97,164,0.04)] border border-outline-variant/10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline font-bold text-xl text-on-surface">Order Progress</h3>
            <span className="text-xs font-bold px-3 py-1 bg-secondary-container text-secondary rounded-full uppercase tracking-tighter">Live</span>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full mt-1.5 z-10 transition-all duration-500 ${
                    step.status === 'completed' ? 'bg-secondary' : 
                    step.status === 'active' ? 'bg-primary-container ring-4 ring-primary-container/20' : 
                    'bg-outline-variant/30'
                  }`} />
                  {i < steps.length - 1 && (
                    <div className={`w-0.5 h-12 transition-all duration-500 ${
                      step.status === 'completed' ? 'bg-secondary' : 'bg-outline-variant/20'
                    }`} />
                  )}
                </div>
                <div className="pb-6 text-left">
                  <p className={`font-bold text-sm ${step.status === 'active' ? 'text-primary-container' : step.status === 'completed' ? 'text-on-surface' : 'text-on-surface-variant/60'}`}>
                    {step.title}
                  </p>
                  {step.time && <p className="text-xs text-on-surface-variant">{step.time}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-outline-variant/10">
            <button className="w-full py-4 liquid-gradient text-white font-headline font-bold rounded-xl shadow-[0_20px_40px_rgba(0,97,164,0.15)] hover:scale-[1.02] transition-transform active:scale-95">
              Contact Support
            </button>
          </div>
        </div>

        <div className="bg-surface p-8 rounded-lg shadow-[0_20px_40px_rgba(0,97,164,0.04)] border border-outline-variant/10">
          <h3 className="font-headline font-bold text-xl text-on-surface mb-6 text-left">Order Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-on-surface-variant">Order ID</span>
              <span className="font-bold text-on-surface">#WM-8291</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-on-surface-variant">Items</span>
              <div className="text-right">
                <p className="text-sm font-bold text-on-surface">3x Laundry Bags</p>
                <p className="text-xs text-on-surface-variant">Standard Wash & Fold</p>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
              <span className="font-bold text-on-surface">Total Cost</span>
              <span className="text-xl font-black text-primary">$27.50</span>
            </div>
          </div>
        </div>

        <div className="bg-outline-variant/5 p-6 rounded-lg flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">local_laundry_service</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Order #WM-8291</p>
              <p className="text-sm font-bold text-on-surface">3x Laundry Bags • Standard</p>
            </div>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">Details</button>
        </div>
      </div>

      <div className="fixed bottom-10 right-10 z-[60] hidden md:block">
        <button className="bg-on-surface text-white p-5 rounded-full shadow-2xl flex items-center gap-3 hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">chat</span>
          <span className="font-bold pr-2">Chat with Rider</span>
        </button>
      </div>
    </motion.div>
  );
}
