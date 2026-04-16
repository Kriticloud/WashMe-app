import { motion } from 'motion/react';
import { CartItem, Screen } from '../types';

interface SelectItemsProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onNavigate: (screen: Screen) => void;
}

export default function SelectItems({ cart, onUpdateQuantity, onNavigate }: SelectItemsProps) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-40 px-6 max-w-2xl mx-auto w-full"
    >
      <section className="mb-10">
        <p className="font-headline text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">Category Selection</p>
        <h2 className="font-headline text-4xl font-extrabold tracking-tight leading-tight">
          What are we <span className="text-primary">washing</span> today?
        </h2>
      </section>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {cart.map((item) => (
          <div 
            key={item.id}
            className={`group relative bg-surface rounded-lg p-5 flex flex-col gap-4 transition-all hover:translate-y-[-4px] border border-outline-variant/10 shadow-sm ${item.category === 'Wide' ? 'col-span-2 flex-row items-center' : ''}`}
          >
            <div className={`${item.category === 'Wide' ? 'w-32 h-32' : 'aspect-square'} rounded-lg bg-outline-variant/10 overflow-hidden shrink-0`}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex-grow flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="font-headline font-bold text-lg">{item.name}</h3>
                {item.isPremium && (
                  <span className="bg-secondary-container text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Premium</span>
                )}
              </div>
              {item.description && <p className="text-on-surface-variant text-sm mb-1">{item.description}</p>}
              <p className="font-sans text-primary font-semibold">${item.price.toFixed(2)} / {item.id === 'bedsheets' ? 'set' : 'item'}</p>
            </div>

            <div className={`flex items-center justify-between mt-2 bg-outline-variant/10 rounded-full p-1 ${item.category === 'Wide' ? 'w-32' : ''}`}>
              <button 
                onClick={() => onUpdateQuantity(item.id, -1)}
                disabled={item.quantity === 0}
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-surface text-on-surface transition-colors ${item.quantity === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:text-white'}`}
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <span className="font-headline font-bold text-sm px-2">{item.quantity}</span>
              <button 
                onClick={() => onUpdateQuantity(item.id, 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:scale-110 transition-transform"
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="py-12 flex flex-col items-center text-center">
        <div className="w-16 h-1 bg-outline-variant/20 rounded-full mb-6"></div>
        <p className="font-sans text-on-surface-variant text-sm italic">"Your clothes, treated like ours."</p>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-10 pt-4 bg-gradient-to-t from-background via-background/90 to-transparent">
        <div className="max-w-2xl mx-auto glass-card rounded-lg p-4 shadow-[0_-20px_40px_rgba(0,97,164,0.08)] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">In your bag</span>
            <span className="font-headline font-extrabold text-xl">{totalItems} items</span>
          </div>
          <button 
            onClick={() => onNavigate('SCHEDULE_PICKUP')}
            disabled={totalItems === 0}
            className="liquid-gradient text-white px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-wide shadow-xl shadow-primary/30 flex items-center gap-3 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View Cart
            <span className="material-symbols-outlined text-lg">shopping_basket</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
