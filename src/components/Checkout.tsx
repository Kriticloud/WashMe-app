import { motion } from 'motion/react';
import { CartItem, Screen } from '../types';
import { useState } from 'react';

interface CheckoutProps {
  cart: CartItem[];
  onNavigate: (screen: Screen) => void;
}

export default function Checkout({ cart, onNavigate }: CheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceFee = 3.50;
  const total = subtotal + serviceFee;

  const paymentOptions = [
    { id: 'upi', title: 'UPI', sub: 'Google Pay, PhonePe, Paytm', icon: 'account_balance_wallet' },
    { id: 'card', title: 'Credit / Debit Card', sub: 'Visa, Mastercard, Amex', icon: 'credit_card' },
    { id: 'cod', title: 'Cash on Delivery', sub: 'Pay when you receive items', icon: 'payments' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-8 w-full"
    >
      <section>
        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Review Order</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Checkout</h2>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface p-8 rounded-lg flex flex-col justify-between min-h-[200px] border border-outline-variant/10 shadow-sm">
          <div>
            <span className="material-symbols-outlined text-primary text-4xl mb-4 fill-1">local_laundry_service</span>
            <h3 className="text-xl font-bold tracking-tight">Wash & Fold</h3>
            <p className="text-on-surface-variant text-sm mt-1">Premium Care Protocol</p>
          </div>
          <div className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-sm">verified</span>
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Antiseptic Wash Incl.</span>
          </div>
        </div>

        <div className="bg-outline-variant/10 p-8 rounded-lg space-y-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Order Items</p>
            <ul className="space-y-2">
              {cart.filter(i => i.quantity > 0).map(item => (
                <li key={item.id} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.quantity} {item.name}s</span>
                  <span className="text-xs text-on-surface-variant">{item.id === 'shirt' ? 'Formal Wear' : item.id === 'pants' ? 'Denim & Chinos' : 'Delicate'}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-outline-variant/20">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Scheduled Pickup</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <div className="text-left">
                <p className="text-sm font-bold">Tomorrow, Oct 24</p>
                <p className="text-xs text-on-surface-variant">09:00 AM - 11:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-outline-variant/5 rounded-lg p-8 border border-outline-variant/10">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-left">Payment Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-on-surface-variant">
            <span className="text-sm">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span className="text-sm">Service Fee</span>
            <span className="font-medium">${serviceFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span className="text-sm">Pickup & Delivery</span>
            <span className="text-secondary text-xs font-bold uppercase">Free</span>
          </div>
          <div className="pt-6 mt-2 border-t-2 border-dashed border-outline-variant/30 flex justify-between items-end">
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Total Amount</p>
              <p className="text-3xl font-black tracking-tighter">${total.toFixed(2)}</p>
            </div>
            <div className="bg-primary-container/10 px-3 py-1 rounded-full">
              <p className="text-[10px] font-bold text-primary tracking-tighter">TAX INCLUDED</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest px-2 text-left">Payment Method</h3>
        <div className="space-y-3">
          {paymentOptions.map((option) => (
            <label 
              key={option.id}
              className={`relative flex items-center p-4 rounded-lg cursor-pointer transition-colors border-2 ${
                paymentMethod === option.id ? 'border-primary bg-surface shadow-sm' : 'border-transparent bg-surface hover:bg-outline-variant/5'
              }`}
            >
              <input 
                type="radio" 
                name="payment" 
                className="hidden" 
                checked={paymentMethod === option.id}
                onChange={() => setPaymentMethod(option.id)}
              />
              <div className={`flex items-center gap-4 w-full ${paymentMethod === option.id ? 'text-primary' : ''}`}>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-outline-variant/10">
                  <span className="material-symbols-outlined">{option.icon}</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold">{option.title}</p>
                  <p className="text-xs text-on-surface-variant">{option.sub}</p>
                </div>
                <span className={`material-symbols-outlined text-primary transition-opacity ${paymentMethod === option.id ? 'opacity-100' : 'opacity-0'}`}>
                  check_circle
                </span>
              </div>
            </label>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-center gap-2 py-4 grayscale opacity-50">
        <span className="material-symbols-outlined text-sm">lock</span>
        <p className="text-[10px] font-bold uppercase tracking-widest">Secure 256-bit SSL Checkout</p>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl px-6 pb-8 pt-4">
        <button 
          onClick={() => onNavigate('ORDER_HISTORY')}
          className="w-full liquid-gradient text-white py-5 rounded-xl font-bold text-lg shadow-[0_20px_40px_rgba(0,97,164,0.15)] active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          Place Order
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </motion.div>
  );
}
