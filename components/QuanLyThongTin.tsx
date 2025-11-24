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
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Quản lý thông tin cá nhân</h1>
        <p className="text-gray-600">Cập nhật và quản lý thông tin tài khoản của bạn</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
          <TabsTrigger value="courses">Khóa học</TabsTrigger>
          <TabsTrigger value="progress">Tiến độ</TabsTrigger>
          <TabsTrigger value="settings">Cài đặt</TabsTrigger>
          <TabsTrigger value="security">Bảo mật</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Thông tin cá nhân</h3>
              <Button variant="outline">
                <Edit3 className="h-4 w-4 mr-2" />
                Chỉnh sửa
              </Button>
            </div>

            <div className="flex items-start gap-8">
              {/* Avatar */}
              <div className="text-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <button className="absolute bottom-4 right-0 bg-white border border-gray-300 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Đổi ảnh
                </Button>
              </div>

              {/* Personal Information */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Họ và tên</Label>
                  <Input id="fullName" value={userInfo.fullName} readOnly />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={userInfo.email} readOnly />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" value={userInfo.phone} readOnly />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Ngày sinh</Label>
                  <Input id="dateOfBirth" value={userInfo.dateOfBirth} readOnly />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Địa chỉ</Label>
                  <Textarea id="address" value={userInfo.address} readOnly />
                </div>
              </div>
            </div>
          </Card>

          {/* Learning Profile */}
          <Card className="p-6">
            <h3 className="mb-4">Hồ sơ học tập</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Book className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Trình độ hiện tại</p>
                  <p>{userInfo.currentLevel}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Ngày tham gia</p>
                  <p>{userInfo.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <User className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mục tiêu</p>
                  <p>B2 - Upper Intermediate</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Khóa học đã đăng ký</h3>
            <div className="space-y-4">
              {enrolledCourses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium">{course.name}</h4>
                      <p className="text-sm text-gray-600">Bắt đầu: {course.startDate}</p>
                    </div>
                    <Badge className={getStatusColor(course.status)}>
                      {getStatusText(course.status)}
                    </Badge>
                  </div>
                  {course.status !== "completed" && (
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Tiến độ</span>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-2">
                    {course.status === "active" && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Tiếp tục học
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      Xem chi tiết
                    </Button>
                    {course.status === "completed" && (
                      <Button size="sm" variant="outline">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Book className="h-5 w-5 text-blue-600" />
                </div>
                <h3>Tổng giờ học</h3>
              </div>
              <p className="text-2xl mb-1">{learningStats.totalHours}h</p>
              <p className="text-sm text-gray-600">Thời gian học tập</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <h3>Bài học hoàn thành</h3>
              </div>
              <p className="text-2xl mb-1">{learningStats.completedLessons}</p>
              <p className="text-sm text-gray-600">Bài học đã xong</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
                <h3>Chuỗi học tập</h3>
              </div>
              <p className="text-2xl mb-1">{learningStats.currentStreak} ngày</p>
              <p className="text-sm text-gray-600">Học liên tiếp</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Book className="h-5 w-5 text-purple-600" />
                </div>
                <h3>Từ vựng</h3>
              </div>
              <p className="text-2xl mb-1">{learningStats.totalWords}</p>
              <p className="text-sm text-gray-600">Từ đã học</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Book className="h-5 w-5 text-yellow-600" />
                </div>
                <h3>Chứng chỉ</h3>
              </div>
              <p className="text-2xl mb-1">{learningStats.certificatesEarned}</p>
              <p className="text-sm text-gray-600">Đã nhận</p>
            </Card>

            <Card className="p-6 flex items-center justify-center">
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Xuất báo cáo
              </Button>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Cài đặt thông báo</h3>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="h-4 w-4 text-gray-600" />
                    <span>{notification.label}</span>
                  </div>
                  <Button 
                    variant={notification.enabled ? "default" : "outline"} 
                    size="sm"
                  >
                    {notification.enabled ? "Bật" : "Tắt"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Cài đặt học tập</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Mục tiêu học tập hàng ngày</span>
                <Input className="w-20" value="30" readOnly />
                <span className="text-sm text-gray-600">phút</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Nhắc nhở học tập</span>
                <Input className="w-32" value="19:00" readOnly />
              </div>
              <div className="flex items-center justify-between">
                <span>Chế độ tối</span>
                <Button variant="outline" size="sm">Tắt</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Bảo mật tài khoản</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-green-600" />
                  <div>
                    <p>Mật khẩu</p>
                    <p className="text-sm text-gray-600">Đã cập nhật 30 ngày trước</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Đổi mật khẩu
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <div>
                    <p>Email xác thực</p>
                    <p className="text-sm text-gray-600">Đã xác thực</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Đã xác thực</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <div>
                    <p>Số điện thoại</p>
                    <p className="text-sm text-gray-600">Chưa xác thực</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Xác thực
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Phiên đăng nhập</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p>Thiết bị hiện tại</p>
                  <p className="text-sm text-gray-600">Windows • Chrome • TP.HCM</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Đang hoạt động</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p>iPhone</p>
                  <p className="text-sm text-gray-600">Safari • Hà Nội • 2 ngày trước</p>
                </div>
                <Button variant="outline" size="sm">
                  Đăng xuất
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}