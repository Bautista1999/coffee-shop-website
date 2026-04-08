export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastry' | 'sandwich' | 'other';
  image?: string;
  popular?: boolean;
  available?: boolean;
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
