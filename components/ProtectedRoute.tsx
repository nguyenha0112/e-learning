"use client";
import { ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Lock, LogIn } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { useState } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  message?: string;
}

export function ProtectedRoute({ children, message }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const [showLoginForm, setShowLoginForm] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Lock className="h-8 w-8 text-gray-600" />
            </div>
            <CardTitle>Yêu cầu đăng nhập</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              {message || "Bạn cần đăng nhập để truy cập tính năng này."}
            </p>
            <Button onClick={() => setShowLoginForm(true)}>
              <LogIn className="mr-2 h-4 w-4" />
              Đăng nhập ngay
            </Button>
          </CardContent>
        </Card>

        {/* Login Form Modal */}
        {showLoginForm && (
          <LoginForm onClose={() => setShowLoginForm(false)} />
        )}
      </div>
    );
  }

  return <>{children}</>;
}