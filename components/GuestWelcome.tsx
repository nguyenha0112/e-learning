"use client";
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BookOpen, Users, Award, Clock, Star, ArrowRight, Play } from 'lucide-react';
import { LoginForm } from './LoginForm';

export function GuestWelcome() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Khóa học đa dạng",
      description: "Từ cơ bản đến nâng cao, phù hợp mọi trình độ"
    },
    {
      icon: Users,
      title: "Giáo viên chuyên nghiệp",
      description: "Đội ngũ giảng viên bản ngữ và có kinh nghiệm"
    },
    {
      icon: Award,
      title: "Chứng chỉ uy tín",
      description: "Được công nhận bởi các tổ chức quốc tế"
    },
    {
      icon: Clock,
      title: "Học mọi lúc mọi nơi",
      description: "Linh hoạt thời gian, học trên mọi thiết bị"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Học viên" },
    { number: "100+", label: "Khóa học" },
    { number: "200+", label: "Giáo viên" },
    { number: "4.9/5", label: "Đánh giá" }
  ];

  const testimonials = [
    {
      name: "Trần Minh An",
      role: "Sinh viên",
      content: "StudyEngEra đã giúp tôi cải thiện tiếng Anh rất nhiều. Các bài giảng rất dễ hiểu và thực tế.",
      rating: 5
    },
    {
      name: "Nguyễn Thị Hương",
      role: "Nhân viên văn phòng",
      content: "Nhờ StudyEngEra, tôi đã có thể giao tiếp tự tin hơn trong công việc.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Học tiếng Anh
                <span className="block text-yellow-300">hiệu quả nhất</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Nền tảng học tiếng Anh trực tuyến hàng đầu Việt Nam với phương pháp giảng dạy hiện đại và tương tác cao.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  onClick={() => setShowLoginForm(true)}
                >
                  Bắt đầu học ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Xem video giới thiệu
                </Button>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl mb-6">Tại sao chọn StudyEngEra?</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl mb-2 text-yellow-300">{stat.number}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Tính năng nổi bật</h2>
            <p className="text-xl text-gray-600">
              Những ưu điểm vượt trội của nền tảng StudyEngEra
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Học viên nói gì về chúng tôi</h2>
            <p className="text-xl text-gray-600">
              Những phản hồi tích cực từ cộng đồng học viên
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Sẵn sàng bắt đầu hành trình học tiếng Anh?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Đăng ký ngay hôm nay để nhận được khóa học miễn phí và bắt đầu cải thiện tiếng Anh của bạn
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            onClick={() => setShowLoginForm(true)}
          >
            Đăng ký miễn phí ngay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Login Form Modal */}
      {showLoginForm && (
        <LoginForm onClose={() => setShowLoginForm(false)} />
      )}
    </div>
  );
}