import { Screen } from '../types';
import { cn } from '../lib/utils';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const isAuthFlow = ['ONBOARDING_1', 'ONBOARDING_2', 'ONBOARDING_3'].includes(currentScreen);
  const isTransactional = ['SELECT_ITEMS', 'SCHEDULE_PICKUP', 'CHECKOUT'].includes(currentScreen);

  if (isAuthFlow || isTransactional) return null;

  const navItems = [
    { id: 'HOME', label: 'Home', icon: 'home' },
    { id: 'ORDER_HISTORY', label: 'Orders', icon: 'local_laundry_service' },
    { id: 'HELP_CENTER', label: 'Support', icon: 'contact_support' },
    { id: 'PROFILE', label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-background/80 backdrop-blur-xl rounded-t-[2rem] shadow-[0_-20px_40px_rgba(0,97,164,0.08)]">
      {navItems.map((item) => {
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Screen)}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-200",
              isActive 
                ? "text-primary-container bg-primary-container/10 rounded-full px-4 py-2 scale-105" 
                : "text-on-surface opacity-60 hover:scale-105"
            )}
          >
            <span className={cn("material-symbols-outlined", isActive && "fill-1")}>
              {item.icon}
            </span>
            <span className="font-headline font-medium text-[10px] uppercase tracking-widest mt-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
