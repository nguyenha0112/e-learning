"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  isDemo?: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  demoLogin: (userType: 'student' | 'teacher') => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('studyengera_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation
      if (email && password) {
        const userData: User = {
          id: 'user-' + Date.now(),
          email,
          name: email.split('@')[0],
          isDemo: false
        };
        
        setUser(userData);
        localStorage.setItem('studyengera_user', JSON.stringify(userData));
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, error: 'Email và mật khẩu không được để trống' };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Đã xảy ra lỗi khi đăng nhập' };
    }
  };

  const signUp = async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password && name) {
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, error: 'Vui lòng điền đầy đủ thông tin' };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Đã xảy ra lỗi khi đăng ký' };
    }
  };

  const demoLogin = async (userType: 'student' | 'teacher'): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    const demoUsers = {
      student: {
        id: 'demo-student-001',
        email: 'demo.hocvien@studyengera.com',
        name: 'Nguyễn Văn A',
        avatar: undefined,
        isDemo: true
      },
      teacher: {
        id: 'demo-teacher-001', 
        email: 'demo.giaovien@studyengera.com',
        name: 'Trần Thị Demo',
        avatar: undefined,
        isDemo: true
      }
    };

    const demoUser = demoUsers[userType];
    
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser(demoUser);
    localStorage.setItem('studyengera_user', JSON.stringify(demoUser));
    setIsLoading(false);
    
    return { success: true };
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('studyengera_user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signUp,
    demoLogin,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}