import { motion } from 'motion/react';
import { Screen } from '../types';
import { useState } from 'react';

interface SchedulePickupProps {
  onNavigate: (screen: Screen) => void;
}

export default function SchedulePickup({ onNavigate }: SchedulePickupProps) {
  const [selectedDate, setSelectedDate] = useState(23);
  const [selectedSlot, setSelectedSlot] = useState('morning');

  const dates = [
    { day: 'Mon', date: 23 },
    { day: 'Tue', date: 24 },
    { day: 'Wed', date: 25 },
    { day: 'Thu', date: 26 },
    { day: 'Fri', date: 27 },
  ];

  const slots = [
    { id: 'morning', title: 'Morning', time: '8:00 AM – 11:00 AM', icon: 'light_mode' },
    { id: 'afternoon', title: 'Afternoon', time: '12:00 PM – 3:00 PM', icon: 'wb_sunny' },
    { id: 'evening', title: 'Evening', time: '4:00 PM – 8:00 PM', icon: 'dark_mode' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto w-full"
    >
      <div className="mb-10">
        <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">Service Scheduling</span>
        <h2 className="text-4xl font-extrabold tracking-tight leading-tight text-on-surface">
          Choose your <br/><span className="text-primary-container">pickup time.</span>
        </h2>
      </div>

      <section className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-bold text-lg">Select Date</h3>
          <span className="text-primary text-sm font-semibold">October 2023</span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {dates.map((d) => (
            <button 
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`flex-shrink-0 w-20 h-28 rounded-xl flex flex-col items-center justify-center transition-all ${
                selectedDate === d.date 
                  ? 'bg-primary-container text-white scale-105 shadow-[0_20px_40px_rgba(0,97,164,0.15)]' 
                  : 'bg-surface text-on-surface hover:bg-outline-variant/10 border border-outline-variant/10'
              }`}
            >
              <span className={`text-xs font-medium uppercase tracking-wider mb-1 ${selectedDate === d.date ? '' : 'opacity-60'}`}>{d.day}</span>
              <span className={`text-2xl ${selectedDate === d.date ? 'font-black' : 'font-bold'}`}>{d.date}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="font-bold text-lg mb-4">Available Slots</h3>
        <div className="grid grid-cols-1 gap-4">
          {slots.map((slot) => (
            <label 
              key={slot.id}
              className={`relative flex items-center p-5 rounded-lg cursor-pointer group transition-all border ${
                selectedSlot === slot.id ? 'bg-primary-container/5 border-primary-container' : 'bg-surface border-outline-variant/10 hover:bg-outline-variant/5'
              }`}
            >
              <input 
                type="radio" 
                name="timeslot" 
                className="hidden" 
                checked={selectedSlot === slot.id}
                onChange={() => setSelectedSlot(slot.id)}
              />
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform ${
                selectedSlot === slot.id ? 'bg-primary-container/10 text-primary' : 'bg-outline-variant/10 text-on-surface-variant'
              }`}>
                <span className="material-symbols-outlined">{slot.icon}</span>
              </div>
              <div className="flex-grow text-left">
                <p className="font-bold text-on-surface">{slot.title}</p>
                <p className="text-sm text-on-surface-variant">{slot.time}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedSlot === slot.id ? 'border-primary-container bg-primary-container' : 'border-outline-variant'
              }`}>
                <div className={`w-2 h-2 rounded-full bg-white transition-opacity ${selectedSlot === slot.id ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </label>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Pickup Location</h3>
          <button className="text-primary font-bold text-sm hover:underline">Edit Address</button>
        </div>
        <div className="bg-surface p-6 rounded-lg flex items-start gap-4 border border-outline-variant/10 shadow-sm">
          <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
            <span className="material-symbols-outlined fill-1">home</span>
          </div>
          <div className="text-left">
            <h4 className="font-bold text-on-surface">Home Address</h4>
            <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">24 Pristine Avenue, Suite 402<br/>Ocean View, CA 90210</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="font-bold text-lg mb-4">Special Instructions</h3>
        <div className="relative">
          <textarea 
            className="w-full bg-outline-variant/10 border-none rounded-lg p-5 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-on-surface-variant/60" 
            placeholder="E.g. Use organic detergent, gate code is 1234..." 
            rows={3}
          ></textarea>
          <div className="absolute right-4 bottom-4 text-on-surface-variant/40">
            <span className="material-symbols-outlined text-lg">edit_note</span>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full p-6 bg-background/90 backdrop-blur-md z-40">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={() => onNavigate('CHECKOUT')}
            className="w-full py-5 liquid-gradient text-white font-bold rounded-xl shadow-[0_20px_40px_rgba(0,97,164,0.2)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <span className="text-lg">Confirm Schedule</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
