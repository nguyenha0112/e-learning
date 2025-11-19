"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Book,
  Settings,
  Shield,
  Bell,
  CreditCard,
  Download,
  Upload,
  Edit3,
  Camera
} from "lucide-react";

export function QuanLyThongTin() {
  const userInfo = {
    fullName: "Nguyễn Văn A",
    email: "nguyen.van.a@email.com",
    phone: "0123 456 789",
    dateOfBirth: "15/08/1995",
    address: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
    joinDate: "15/11/2024",
    currentLevel: "B1 - Intermediate",
    avatar: null
  };

  const enrolledCourses = [
    {
      name: "English Intermediate - B1",
      progress: 68,
      startDate: "15/11/2024",
      status: "active"
    },
    {
      name: "IELTS Preparation Course",
      progress: 25,
      startDate: "01/12/2024",
      status: "active"
    },
    {
      name: "English for Beginners - A1",
      progress: 100,
      startDate: "01/10/2024",
      status: "completed"
    }
  ];

  const learningStats = {
    totalHours: 85.5,
    completedLessons: 124,
    currentStreak: 15,
    totalWords: 1248,
    certificatesEarned: 3
  };

  const notifications = [
    { type: "lesson", label: "Nhắc nhở bài học", enabled: true },
    { type: "assignment", label: "Thông báo bài tập", enabled: true },
    { type: "progress", label: "Báo cáo tiến độ", enabled: false },
    { type: "achievement", label: "Thành tích mới", enabled: true },
    { type: "marketing", label: "Tin tức khuyến mại", enabled: false }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "paused": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Đang học";
      case "completed": return "Đã hoàn thành";
      case "paused": return "Tạm dừng";
      default: return "Không xác định";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">Quản lý thông tin cá nhân</h1>
        <p className="text-base text-gray-700">Cập nhật và quản lý thông tin tài khoản của bạn</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="grid w-full grid-cols-5 bg-white border border-gray-200 rounded-lg mb-2 shadow-sm">
          <TabsTrigger value="profile" className="font-extrabold text-lg text-gray-800 data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg transition-all">Hồ sơ</TabsTrigger>
          <TabsTrigger value="courses" className="font-extrabold text-lg text-gray-800 data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg transition-all">Khóa học</TabsTrigger>
          <TabsTrigger value="progress" className="font-extrabold text-lg text-gray-800 data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg transition-all">Tiến độ</TabsTrigger>
          <TabsTrigger value="settings" className="font-extrabold text-lg text-gray-800 data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg transition-all">Cài đặt</TabsTrigger>
          <TabsTrigger value="security" className="font-extrabold text-lg text-gray-800 data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg transition-all">Bảo mật</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="p-8 bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Thông tin cá nhân</h3>
              <Button variant="outline" className="font-bold">
                <Edit3 className="h-4 w-4 mr-2" />
                Chỉnh sửa
              </Button>
            </div>

            <div className="flex items-start gap-10">
              {/* Avatar */}
              <div className="text-center">
                <div className="relative">
                  <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                    <User className="h-20 w-20 text-white" />
                  </div>
                  <button className="absolute bottom-4 right-0 bg-white border border-gray-300 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <Button variant="outline" size="sm" className="font-semibold mt-2">
                  <Upload className="h-4 w-4 mr-2" />
                  Đổi ảnh
                </Button>
              </div>

              {/* Personal Information */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <Label htmlFor="fullName" className="text-base font-semibold text-gray-800 mb-1">Họ và tên</Label>
                  <Input id="fullName" value={userInfo.fullName} readOnly className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 text-base font-medium" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-semibold text-gray-800 mb-1">Email</Label>
                  <Input id="email" value={userInfo.email} readOnly className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 text-base font-medium" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-semibold text-gray-800 mb-1">Số điện thoại</Label>
                  <Input id="phone" value={userInfo.phone} readOnly className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 text-base font-medium" />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth" className="text-base font-semibold text-gray-800 mb-1">Ngày sinh</Label>
                  <Input id="dateOfBirth" value={userInfo.dateOfBirth} readOnly className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 text-base font-medium" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address" className="text-base font-semibold text-gray-800 mb-1">Địa chỉ</Label>
                  <Textarea id="address" value={userInfo.address} readOnly className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 text-base font-medium" />
                </div>
              </div>
            </div>
          </Card>

          {/* Learning Profile */}
          <Card className="p-6 bg-white border border-gray-200 shadow-sm">
            <h3 className="mb-5 text-lg font-extrabold text-gray-900 tracking-tight">Hồ sơ học tập</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-800 mb-0.5">Trình độ hiện tại</p>
                  <p className="text-base text-blue-700 font-bold">{userInfo.currentLevel}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-800 mb-0.5">Ngày tham gia</p>
                  <p className="text-base text-green-700 font-bold">{userInfo.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-800 mb-0.5">Mục tiêu</p>
                  <p className="text-base text-purple-700 font-bold">B2 - Upper Intermediate</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses" className="space-y-6">
          <Card className="p-8 bg-white border border-gray-200 shadow-sm">
            <h3 className="mb-6 text-xl font-extrabold text-gray-900 tracking-tight">Khóa học đã đăng ký</h3>
            <div className="space-y-6">
              {enrolledCourses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6 bg-gray-50 hover:shadow-md transition">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-1">{course.name}</h4>
                      <p className="text-base text-gray-600 font-medium">Bắt đầu: {course.startDate}</p>
                    </div>
                    <Badge className={getStatusColor(course.status) + ' px-3 py-1 text-base font-semibold rounded-full shadow-sm'}>
                      {getStatusText(course.status)}
                    </Badge>
                  </div>
                  {course.status !== "completed" && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-base text-gray-700 font-semibold">Tiến độ</span>
                        <span className="text-base text-blue-700 font-bold">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-3 mt-2">
                    {course.status === "active" && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5">
                        Tiếp tục học
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="font-bold px-5">
                      Xem chi tiết
                    </Button>
                    {course.status === "completed" && (
                      <Button size="sm" variant="outline" className="font-bold px-5">
                        <Download className="h-4 w-4 mr-1" />
                        Chứng chỉ
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">Tổng giờ học</h3>
              </div>
              <p className="text-3xl font-bold text-blue-700 mb-1">{learningStats.totalHours}h</p>
              <p className="text-base text-gray-700 font-medium">Thời gian học tập</p>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">Bài học hoàn thành</h3>
              </div>
              <p className="text-3xl font-bold text-green-700 mb-1">{learningStats.completedLessons}</p>
              <p className="text-base text-gray-700 font-medium">Bài học đã xong</p>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">Chuỗi học tập</h3>
              </div>
              <p className="text-3xl font-bold text-orange-600 mb-1">{learningStats.currentStreak} ngày</p>
              <p className="text-base text-gray-700 font-medium">Học liên tiếp</p>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Book className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">Từ vựng</h3>
              </div>
              <p className="text-3xl font-bold text-purple-700 mb-1">{learningStats.totalWords}</p>
              <p className="text-base text-gray-700 font-medium">Từ đã học</p>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Book className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">Chứng chỉ</h3>
              </div>
              <p className="text-3xl font-bold text-yellow-600 mb-1">{learningStats.certificatesEarned}</p>
              <p className="text-base text-gray-700 font-medium">Đã nhận</p>
            </Card>

            <Card className="p-8 flex items-center justify-center bg-white border border-gray-200 shadow-sm">
              <Button className="w-full font-bold text-base">
                <Download className="h-4 w-4 mr-2" />
                Xuất báo cáo
              </Button>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="p-8 bg-white border border-gray-200 shadow-sm">
            <h3 className="mb-6 text-xl font-extrabold text-gray-900 tracking-tight">Cài đặt thông báo</h3>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <div className="flex items-center gap-4">
                    <Bell className="h-5 w-5 text-blue-600" />
                    <span className="text-base font-semibold text-gray-800">{notification.label}</span>
                  </div>
                  <Button 
                    variant={notification.enabled ? "default" : "outline"} 
                    size="sm"
                    className={notification.enabled ? "bg-blue-600 hover:bg-blue-700 text-white font-bold px-5" : "font-bold px-5"}
                  >
                    {notification.enabled ? "Bật" : "Tắt"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-white border border-gray-200 shadow-sm">
            <h3 className="mb-6 text-xl font-extrabold text-gray-900 tracking-tight">Cài đặt học tập</h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-800">Mục tiêu học tập hàng ngày</span>
                <Input className="w-24 bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 text-base font-medium" value="30" readOnly />
                <span className="text-base text-gray-700 font-medium">phút</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-800">Nhắc nhở học tập</span>
                <Input className="w-32 bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 text-base font-medium" value="19:00" readOnly />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-800">Chế độ tối</span>
                <Button variant="outline" size="sm" className="font-bold px-5">Tắt</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="p-8 bg-white border border-gray-200 shadow-sm">
            <h3 className="mb-6 text-xl font-extrabold text-gray-900 tracking-tight">Bảo mật tài khoản</h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50">
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="text-base font-semibold text-gray-800 mb-0.5">Mật khẩu</p>
                    <p className="text-sm text-gray-600">Đã cập nhật 30 ngày trước</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="font-bold px-5">Đổi mật khẩu</Button>
              </div>

              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-base font-semibold text-gray-800 mb-0.5">Email xác thực</p>
                    <p className="text-sm text-gray-600">Đã xác thực</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 px-4 py-1 text-base font-semibold rounded-full">Đã xác thực</Badge>
              </div>

              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-base font-semibold text-gray-800 mb-0.5">Số điện thoại</p>
                    <p className="text-sm text-gray-600">Chưa xác thực</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="font-bold px-5">Xác thực</Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white border border-gray-200 shadow-sm">
            <h3 className="mb-6 text-xl font-extrabold text-gray-900 tracking-tight">Phiên đăng nhập</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50">
                <div>
                  <p className="text-base font-semibold text-gray-800 mb-0.5">Thiết bị hiện tại</p>
                  <p className="text-sm text-gray-600">Windows • Chrome • TP.HCM</p>
                </div>
                <Badge className="bg-green-100 text-green-800 px-4 py-1 text-base font-semibold rounded-full">Đang hoạt động</Badge>
              </div>
              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50">
                <div>
                  <p className="text-base font-semibold text-gray-800 mb-0.5">iPhone</p>
                  <p className="text-sm text-gray-600">Safari • Hà Nội • 2 ngày trước</p>
                </div>
                <Button variant="outline" size="sm" className="font-bold px-5">Đăng xuất</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}