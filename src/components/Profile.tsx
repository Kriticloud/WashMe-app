import { motion } from 'motion/react';
import { Screen } from '../types';

interface ProfileProps {
  onNavigate: (screen: Screen) => void;
}

export default function Profile({ onNavigate }: ProfileProps) {
  const menuItems = [
    { title: 'Saved Addresses', icon: 'location_on', section: 'Account Settings' },
    { title: 'Payment Methods', icon: 'payments', section: 'Account Settings' },
    { title: 'Notifications', icon: 'notifications', section: 'Account Settings' },
    { title: 'Help & Support', icon: 'contact_support', section: 'Support & Info', color: 'muted' },
    { title: 'About WashMe', icon: 'info', section: 'Support & Info', color: 'muted' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto w-full"
    >
      <section className="flex flex-col items-center mb-12">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPGZWMixEBfcl6wJO2VBBWg2VZvtSAk3MrNeZulcsL1y3b6D5gI8Cog6FJgc7ZowA7_Q3mLdpoKu0lgINI_Fc9fNB0J5xQDv5kKixPkbX3blOZng1n_0YpSNuw9Qtl6dqMOsOQjm7SuDgjeVgtokZVEkSYK1dsfCgTUgb3PsbKlEof99jli85iPodYTP0y4l1UeZ55xSh798P57TEV0einOpgmUJeYvJUHmN-C2gjICtMWkN9QF6ase0z27hwnue53lCsjJ9XJh8Y" 
              alt="Marcus J." 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-lg text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-sm">edit</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold font-headline text-on-surface tracking-tight mb-1">Marcus J.</h2>
        <p className="text-on-surface-variant font-medium">+1 (555) 012-3456</p>
      </section>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-surface p-6 rounded-lg flex flex-col justify-center items-center text-center border border-outline-variant/10 shadow-sm">
          <span className="text-primary font-black text-2xl font-headline">12</span>
          <span className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Total Orders</span>
        </div>
        <div className="bg-surface p-6 rounded-lg flex flex-col justify-center items-center text-center border border-outline-variant/10 shadow-sm">
          <span className="text-secondary font-black text-2xl font-headline">VIP</span>
          <span className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Status</span>
        </div>
      </div>

      <nav className="space-y-3">
        {['Account Settings', 'Support & Info'].map((section) => (
          <div key={section} className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4 mt-8 px-2 text-left">
              {section}
            </h3>
            {menuItems.filter(item => item.section === section).map((item) => (
              <button 
                key={item.title}
                className="w-full flex items-center justify-between p-5 bg-surface rounded-lg hover:bg-outline-variant/5 transition-all group border border-outline-variant/10 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.color === 'muted' ? 'bg-outline-variant/10 text-on-surface-variant' : 'bg-primary/10 text-primary'
                  }`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="font-semibold text-on-surface">{item.title}</span>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            ))}
          </div>
        ))}

        <button className="w-full mt-8 flex items-center gap-4 p-5 bg-error-container/10 rounded-lg hover:bg-error-container/20 transition-colors group border border-error/10">
          <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
            <span className="material-symbols-outlined">logout</span>
          </div>
          <span className="font-bold text-error">Logout</span>
        </button>
      </nav>
    </motion.div>
  );
}
