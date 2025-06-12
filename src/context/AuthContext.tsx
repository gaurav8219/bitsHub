import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  loginWithPhone: (phone: string, otp: string) => Promise<boolean>;
  signup: (userData: Partial<User>) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  sendOTP: (phone: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setAuthState({ user, isAuthenticated: true });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.email === email);
      
      if (user && password === '1234567') {
        // Set admin status for specific email
        if (email === 'gauravsureel3551@gmail.com') {
          user.isAdmin = true;
        }
        
        setAuthState({ user, isAuthenticated: true });
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const loginWithPhone = async (phone: string, otp: string): Promise<boolean> => {
    try {
      if (otp === '123456') {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        let user = users.find((u: User) => u.phone === phone);
        
        if (!user) {
          user = {
            id: Date.now().toString(),
            name: 'User',
            email: '',
            phone,
            addresses: [],
            orders: [],
            wishlist: [],
          };
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));
        }
        
        setAuthState({ user, isAuthenticated: true });
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const signup = async (userData: Partial<User>): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((u: User) => u.email === userData.email);
      
      if (existingUser) return false;
      
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone,
        addresses: [],
        orders: [],
        wishlist: [],
        isAdmin: userData.email === 'gauravsureel3551@gmail.com',
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setAuthState({ user: newUser, isAuthenticated: true });
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      return true;
    } catch {
      return false;
    }
  };

  const sendOTP = async (phone: string): Promise<boolean> => {
    // Simulate OTP sending
    console.log(`OTP sent to ${phone}: 123456`);
    return true;
  };

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false });
    localStorage.removeItem('currentUser');
  };

  const updateUser = (userData: Partial<User>) => {
    if (!authState.user) return;
    
    const updatedUser = { ...authState.user, ...userData };
    setAuthState({ ...authState, user: updatedUser });
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((u: User) => u.id === authState.user!.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      loginWithPhone,
      signup,
      logout,
      updateUser,
      sendOTP,
    }}>
      {children}
    </AuthContext.Provider>
  );
};