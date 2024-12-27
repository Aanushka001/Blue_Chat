export interface User {
  message: any;
  time: any;
  platform: any;
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: string;
  isOnline: boolean;
  revenue?: string;  
  webVisits?: string;  
  orders?: string;  
  tags?: string[];  
  phone?: string;
  isRead?: boolean;  
}

export interface Message {
  id: number;
  sender: string;
  content: string;
  type: 'user' | 'smart-response';
  timestamp: string;
  avatar: string;
}
