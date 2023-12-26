// User interface
export interface User {
  id: string;
  email: string;
  password: string;
  role: "admin" | "client" | string;
}

// Product interface
export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  quantity: number;
  discount?: number;
  isHidden: boolean;
}

// Bag interface
export interface Bag {
  id?: string;
  userId: string;
}
