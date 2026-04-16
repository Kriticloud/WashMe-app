import { Menu, User } from 'lucide-react';
import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onBack?: () => void;
  showBack?: boolean;
  title?: string;
}

export default function Header({ currentScreen, onNavigate, onBack, showBack, title }: HeaderProps) {
  const isAuthFlow = ['ONBOARDING_1', 'ONBOARDING_2', 'ONBOARDING_3'].includes(currentScreen);
  
  if (isAuthFlow) {
    return (
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <div className="text-primary-container text-2xl font-black tracking-tighter font-headline">WashMe</div>
        <button 
          onClick={() => onNavigate('HOME')}
          className="text-on-surface-variant font-medium text-sm hover:opacity-60 transition-opacity"
        >
          Skip
        </button>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-outline-variant/10">
      <div className="flex items-center gap-4">
        {showBack ? (
          <button onClick={onBack} className="hover:opacity-80 transition-opacity p-2 -ml-2">
            <span className="material-symbols-outlined text-primary text-2xl">arrow_back</span>
          </button>
        ) : (
          <button className="hover:opacity-80 transition-opacity scale-95 active:transition-all text-on-surface">
            <Menu size={24} />
          </button>
        )}
        <h1 className="font-headline font-bold tracking-tight text-2xl text-primary-container tracking-tighter">
          {title || 'WashMe'}
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        {!showBack && (
          <div className="text-right md:block hidden">
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Good Morning,</p>
            <p className="font-headline font-bold text-on-surface">User</p>
          </div>
        )}
        <button 
          onClick={() => onNavigate('PROFILE')}
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20"
        >
          <img 
            alt="Profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASyCxaJN1fQEqi7v38xTYp2-8YT-lwe-mzGUfIxrKYgg9pUmKpJFfz628skJ0QwCyZ8E7_rx_Xih6kPT5J_8zN0x2fYOjc65qAn1kUyT__cFJQbk1hW1x3I2w5xuXNAa3SUo2f-RaiWAKRMoHb7r6xFx59yDJVt4tUrUZAZ45Fq9x24qu3wLRCCDlfvB4PF_31tfuzLKGWNw8YfqIjmk9e7ysqfYm65dKEtxFn8SrlK9FdwDJRfXNn4tDKBeijvFrVQ9gYe5i3jVQ"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
