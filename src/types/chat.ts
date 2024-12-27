
export interface User {
  id?: string;
  name: string;
  email: string;
  phone: string; 
  avatar: string;
  location: string;
  isOnline?: boolean;
  revenue: string;
  webVisits?: string;
  orders: string;
  tags: string[];
  message?: string;
  time?: string;
  platform: "messenger" | "whatsapp" | "instagram";
  isRead: boolean; 
}

export interface Message {
  id: number;
  sender: string;
  content: string;
  type: 'system' | 'user' | 'smart-response' | 'reply' | 'notification' | 'purchase';
  timestamp?: string;
  avatar?: string;
  purchaseDetails?: {
    buyer: string;
    price: string;
    product: string;
  };
}
