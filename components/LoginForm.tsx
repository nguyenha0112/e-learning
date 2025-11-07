"use client";
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert } from './ui/alert';
import { AlertDescription } from './ui/alert';
import { useAuth } from './AuthContext';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle } from 'lucide-react';

interface LoginFormProps {
  onClose: () => void;
}

export function LoginForm({ onClose }: LoginFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { login, signUp, demoLogin, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError('Mật khẩu xác nhận không khớp');
        return;
      }
      if (formData.password.length < 6) {
        setError('Mật khẩu phải có ít nhất 6 ký tự');
        return;
      }
      if (!formData.name.trim()) {
        setError('Vui lòng nhập họ và tên');
        return;
      }
    }

    if (isLogin) {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        onClose();
      } else {
        setError(result.error || 'Email hoặc mật khẩu không đúng');
      }
    } else {
      const result = await signUp(formData.email, formData.password, formData.name);
      if (result.success) {
        setSuccessMessage('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.');
        setIsLogin(true);
        setFormData({ email: formData.email, password: '', name: '', confirmPassword: '' });
      } else {
        setError(result.error || 'Đã xảy ra lỗi khi đăng ký');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
    if (successMessage) setSuccessMessage('');
  };

  const handleDemoLogin = async (userType: 'student' | 'teacher') => {
    setError('');
    setSuccessMessage('');
    
    // Use demo login from AuthContext
    const result = await demoLogin(userType);
    if (result.success) {
      onClose();
    } else {
      setError(result.error || 'Đã xảy ra lỗi khi đăng nhập demo');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">
              {isLogin ? 'Đăng nhập' : 'Đăng ký'}
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {isLogin 
              ? 'Đăng nhập vào tài khoản StudyEngEra của bạn'
              : 'Tạo tài khoản StudyEngEra mới'
            }
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên</Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Nhập mật khẩu"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập lại mật khẩu"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {successMessage && (
              <Alert className="border-green-200 bg-green-50">
                <AlertCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700">{successMessage}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading 
                ? 'Đang xử lý...' 
                : isLogin 
                ? 'Đăng nhập' 
                : 'Đăng ký'
              }
            </Button>

            {isLogin && (
              <div className="text-center space-y-2">
                <Button
                  type="button"
                  variant="link"
                  className="text-sm text-muted-foreground"
                >
                  Quên mật khẩu?
                </Button>
                
                {/* Demo Account Section */}
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Hoặc dùng tài khoản demo:</p>
                  <div className="space-y-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => handleDemoLogin('student')}
                      disabled={isLoading}
                    >
                      🎓 Demo - Học viên
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => handleDemoLogin('teacher')}
                      disabled={isLoading}
                    >
                      👨‍🏫 Demo - Giáo viên
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
                <Button
                  type="button"
                  variant="link"
                  className="ml-1 p-0 h-auto"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                    setSuccessMessage('');
                    setFormData({
                      email: formData.email,
                      password: '',
                      name: '',
                      confirmPassword: ''
                    });
                  }}
                >
                  {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
                </Button>
              </p>
            </div>
          </form>

          {isLogin && (
            <div className="mt-6 space-y-2">
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}