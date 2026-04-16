/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Screen, CartItem } from './types';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import SelectItems from './components/SelectItems';
import SchedulePickup from './components/SchedulePickup';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import LiveTracking from './components/LiveTracking';
import HelpCenter from './components/HelpCenter';
import Profile from './components/Profile';

const INITIAL_CART: CartItem[] = [
  { id: 'shirt', name: 'Shirt', price: 2.00, quantity: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFbF-rBxXxaY0CUv0M81lnvxFtc2qm7Omxn9eF93ZMqyi3tCSw5Zc-e1GGfh6_XIWxqc6UVYrZW3U_YGlm8qjkufWU250-ovpwX0UAFmIe5uscoidTmStoHqAlgYC7TYtLdBcRgJ-nf6VY_tojstYelH1WQBvxkAjm15X8cUFgBsar0bEKKXQFv7CiH8qq6ce4D7oucfDLH3EI9xNpFm2vEAjHRtbsFKZOuAqlF70bP3Z5t3UMBhOJMmkXcjLG3TH0vwUG8RUHQI', category: 'Standard' },
  { id: 'pants', name: 'Pants', price: 3.50, quantity: 0, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZOElMlSCtaLiweoMX03mxwE4WqvI25S2Kdt2dnagq1QQVhpspQmnC7n5nesgY1jPMf6bQTHbJHMEBh2YcN2YroUaPkP5YviodY8qtAg66trbqjIe7JxflvtLxWU0Dq4xnT6_VUBWJOyAk9j4aYYp0Nha1xrR5iwHbVhi10L5P6-vgBEVe5De9-Ub1KSmW0pBGFQlEbLQfWpQ90fGA62z7iF8kbWkVlfqXrGD6xuYosCOhgvtOH1VQc8oooDv9K7QTwHz9EMMDkm4', category: 'Standard' },
  { id: 'bedsheets', name: 'Bedsheets', price: 12.00, quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkLTvw2moFAVKS3NA9Rz6wPbOKudbAMtIhH4trmZym-t8-g_lwmQen0kh9n0Xjw-kgZC9Ignm9uhDY5zL0NN8LD0oTs0brS0sTtYKqJsMxULEYZd-tWvACUsWvPicJoCUbywiDnBQZ3QTnh1fVCGFNZtULSLZGD8_a0t2iT9PlWGIX0pB5yLZTJzKCbjs4wQkOW8WMOuyx6UYCwj14TWuEyq5AQFwcI4IwFRII1jeJIo94ls2Q5JKwM-o1n_pgXUNn67NzEK_TumE', category: 'Wide', description: 'King or Queen size' },
  { id: 'ethnic', name: 'Ethnic Wear', price: 8.00, quantity: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDodWneuaT8oBxQcz_KvTr4Y_4OAwff5z0afqUPQzMiQeQxCHvj-HfFlFX7jTabHY_RLDh6T1cY3OdSfC8OM3DeP6lM_BLdxHw0GNrmHYLTUPgJPqXjWfJCeRQVgIIKsU7CYc6oju5UUt7qymI6-O8iE1ahlXPT0NCsEbyFA-qocLId4jN-VyvGld13lU8uTzpWiBYUBgkcaP_2sWvrDPlMM4Wi79X9lQZjUtO4DRqmqMmwpnfEUedKyzsIbThA68O8vpJBCU5811w', category: 'Wide', description: 'Special delicate care', isPremium: true },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('ONBOARDING_1');
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART);

  const handleNavigate = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ));
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'ONBOARDING_1':
        return <Onboarding step={1} onNext={() => handleNavigate('ONBOARDING_2')} onSkip={() => handleNavigate('HOME')} />;
      case 'ONBOARDING_2':
        return <Onboarding step={2} onNext={() => handleNavigate('ONBOARDING_3')} onSkip={() => handleNavigate('HOME')} />;
      case 'ONBOARDING_3':
        return <Onboarding step={3} onNext={() => handleNavigate('HOME')} onSkip={() => handleNavigate('HOME')} />;
      case 'HOME':
        return <Home onNavigate={handleNavigate} />;
      case 'SELECT_ITEMS':
        return <SelectItems cart={cart} onUpdateQuantity={updateQuantity} onNavigate={handleNavigate} />;
      case 'SCHEDULE_PICKUP':
        return <SchedulePickup onNavigate={handleNavigate} />;
      case 'CHECKOUT':
        return <Checkout cart={cart} onNavigate={handleNavigate} />;
      case 'ORDER_HISTORY':
        return <OrderHistory onNavigate={handleNavigate} />;
      case 'LIVE_TRACKING':
        return <LiveTracking onNavigate={handleNavigate} />;
      case 'HELP_CENTER':
        return <HelpCenter onNavigate={handleNavigate} />;
      case 'PROFILE':
        return <Profile onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const getHeaderTitle = () => {
    switch (currentScreen) {
      case 'SELECT_ITEMS': return 'Select Items';
      case 'SCHEDULE_PICKUP': return 'Schedule Pickup';
      case 'CHECKOUT': return 'Checkout';
      case 'ORDER_HISTORY': return 'Order History';
      case 'LIVE_TRACKING': return 'Live Tracking';
      case 'HELP_CENTER': return 'Help Center';
      case 'PROFILE': return 'Profile';
      default: return 'WashMe';
    }
  };

  const showBack = ['SELECT_ITEMS', 'SCHEDULE_PICKUP', 'CHECKOUT', 'LIVE_TRACKING'].includes(currentScreen);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentScreen={currentScreen} 
        onNavigate={handleNavigate} 
        onBack={() => {
          if (currentScreen === 'SELECT_ITEMS') handleNavigate('HOME');
          if (currentScreen === 'SCHEDULE_PICKUP') handleNavigate('SELECT_ITEMS');
          if (currentScreen === 'CHECKOUT') handleNavigate('SCHEDULE_PICKUP');
          if (currentScreen === 'LIVE_TRACKING') handleNavigate('HOME');
        }}
        showBack={showBack}
        title={getHeaderTitle()}
      />
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </main>

      <Navigation currentScreen={currentScreen} onNavigate={handleNavigate} />
      
      {/* Decorative Background Elements */}
      <div className="fixed -top-24 -right-24 w-96 h-96 rounded-full bg-primary-container/5 blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed -bottom-48 -left-48 w-[32rem] h-[32rem] rounded-full bg-secondary-container/5 blur-3xl -z-10 pointer-events-none"></div>
    </div>
  );
}
