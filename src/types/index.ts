export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  photo?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
  isAdmin?: boolean;
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  isDefault: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'laptops' | 'accessories' | 'headphones';
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryAddress: Address;
  trackingNumber?: string;
  paymentMethod?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}