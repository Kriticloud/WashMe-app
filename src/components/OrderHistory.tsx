import { motion } from 'motion/react';
import { Order, Screen } from '../types';

interface OrderHistoryProps {
  onNavigate: (screen: Screen) => void;
}

export default function OrderHistory({ onNavigate }: OrderHistoryProps) {
  const orders: Order[] = [
    { id: '#8821', date: 'Oct 24, 2023', status: 'DELIVERED', total: 24.50, items: 'Wash & Fold', icon: 'local_laundry_service' },
    { id: '#8794', date: 'Oct 18, 2023', status: 'DELIVERED', total: 42.00, items: 'Dry Cleaning', icon: 'checkroom' },
    { id: '#8755', date: 'Oct 12, 2023', status: 'DELIVERED', total: 18.25, items: 'Ironing', icon: 'dry_cleaning' },
    { id: '#8710', date: 'Sep 30, 2023', status: 'DELIVERED', total: 31.50, items: 'Wash & Fold', icon: 'iron' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 px-6 max-w-2xl mx-auto w-full pb-32"
    >
      <section className="mb-10 text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Order History</h1>
        <p className="text-on-surface-variant font-medium">Tracking your freshness across time.</p>
      </section>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-surface p-6 rounded-lg flex flex-col justify-between h-32 border border-outline-variant/10 shadow-sm">
          <span className="material-symbols-outlined text-primary text-3xl">task_alt</span>
          <div className="text-left">
            <div className="text-2xl font-bold font-headline">24</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Total Cleanups</div>
          </div>
        </div>
        <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between h-32 shadow-[0_20px_40px_rgba(0,97,164,0.1)]">
          <span className="material-symbols-outlined text-3xl fill-1">stars</span>
          <div className="text-left">
            <div className="text-2xl font-bold font-headline">Elite</div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Member Status</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div 
            key={order.id}
            className="bg-surface p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-outline-variant/5 border border-outline-variant/10 shadow-sm"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl fill-1">{order.icon}</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary tracking-wide">{order.id}</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="text-xs font-medium text-on-surface-variant">{order.date}</span>
                </div>
                <div className="text-lg font-bold font-headline text-on-surface">${order.total.toFixed(2)}</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">{order.status}</span>
                </div>
              </div>
            </div>
            <button className="bg-outline-variant/10 text-on-surface px-6 py-3 rounded-full text-sm font-bold font-headline hover:bg-primary hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">replay</span>
              Reorder
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
