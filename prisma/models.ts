// User interface
interface User {
  id: string;
  email: string;
  password: string;
  role: 'admin' | 'client' | string;
}

// Product interface
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  quantity: number;
  isHidden: boolean;
}

// Bag interface
interface Bag {
  id: string;
  userId: string;
}