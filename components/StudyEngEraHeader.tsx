'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  BookOpen, 
  User, 
  Settings, 
  Bell,
  Search,
  Menu,
  LogOut,
  LogIn
} from "lucide-react";
import { useAuth } from "./AuthContext";
import { LoginForm } from "./LoginForm";

export function StudyEngEraHeader() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  
  const navigationItems = [
    { key: "trang-chu", label: "Trang chủ", href: "/" },
    { key: "khoa-hoc", label: "Khóa học", href: "/khoa-hoc" },
    { key: "bai-giang", label: "Bài giảng", href: "/bai-giang" },
    { key: "bai-tap", label: "Bài tập", href: "/bai-tap" },
    { key: "lich-hoc", label: "Lịch học", href: "/lich-hoc" },
    { key: "danh-gia-nang-luc", label: "Đánh giá năng lực", href: "/danh-gia-nang-luc" },
  ];

  const userMenuItems = [
    { key: "thong-tin", label: "Thông tin cá nhân", href: "/quan-ly-thong-tin" },
    { key: "ho-tro", label: "Hỗ trợ", href: "/ho-tro" },
    { key: "khieu-nai", label: "Khiếu nại", href: "/khieu-nai" },
  ];

  const handleLogout = () => {
    logout();
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl text-gray-900">StudyEngEra</h1>
              <p className="text-xs text-gray-500">Nền tảng học tiếng Anh</p>
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors hover:text-blue-600 ${
                  isActive(item.href)
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>

            {/* Notifications - Only show when authenticated */}
            {isAuthenticated && (
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
            )}

            {/* Authentication Area */}
            {isAuthenticated ? (
              /* User Menu */
              <div className="relative group">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>
                      {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline text-sm">{user?.name}</span>
                </Button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg text-left"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200">
                    <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                      <Settings className="h-4 w-4 inline mr-2" />
                      Cài đặt
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-b-lg text-left"
                    >
                      <LogOut className="h-4 w-4 inline mr-2" />
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Login Button */
              <Button 
                onClick={() => setShowLoginForm(true)}
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Đăng nhập</span>
              </Button>
            )}

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Login Form Modal */}
      {showLoginForm && (
        <LoginForm onClose={() => setShowLoginForm(false)} />
      )}
    </header>
  );
}