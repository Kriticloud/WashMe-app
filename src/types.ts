export type Screen = 
  | 'ONBOARDING_1' 
  | 'ONBOARDING_2' 
  | 'ONBOARDING_3' 
  | 'HOME' 
  | 'SELECT_ITEMS' 
  | 'SCHEDULE_PICKUP' 
  | 'CHECKOUT' 
  | 'ORDER_HISTORY' 
  | 'LIVE_TRACKING' 
  | 'HELP_CENTER' 
  | 'PROFILE';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  description?: string;
  isPremium?: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: 'DELIVERED' | 'WASHING' | 'PICKUP' | 'OUT_FOR_DELIVERY';
  total: number;
  items: string;
  icon: string;
}
