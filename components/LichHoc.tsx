"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar } from "./ui/calendar";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  VideoIcon,
  BookOpen,
  Bell,
  ChevronLeft,
  ChevronRight,
  Plus
} from "lucide-react";

export function LichHoc() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<"week" | "month">("week");

  const scheduleItems = [
    {
      id: 1,
      title: "Grammar Lesson: Present Perfect",
      course: "English Intermediate - B1",
      type: "lesson",
      date: "2024-12-05",
      startTime: "09:00",
      endTime: "10:30",
      duration: "1h 30m",
      instructor: "Thầy John Smith",
      location: "Online - Zoom",
      status: "upcoming",
      reminder: true
    },
    {
      id: 2,
      title: "Speaking Practice Session",
      course: "English Conversation Master",
      type: "practice",
      date: "2024-12-05",
      startTime: "14:30",
      endTime: "15:30",
      duration: "1h",
      instructor: "Cô Mai Anh",
      location: "Classroom 201",
      status: "upcoming",
      reminder: true
    },
    {
      id: 3,
      title: "IELTS Writing Mock Test",
      course: "IELTS Preparation Course",
      type: "test",
      date: "2024-12-05",
      startTime: "19:00",
      endTime: "20:00",
      duration: "1h",
      instructor: "Cô Linh Nguyen",
      location: "Online - Teams",
      status: "upcoming",
      reminder: false
    },
    {
      id: 4,
      title: "Business Email Workshop",
      course: "Business English Professional",
      type: "workshop",
      date: "2024-12-06",
      startTime: "10:00",
      endTime: "12:00",
      duration: "2h",
      instructor: "Ms. Sarah Johnson",
      location: "Conference Room A",
      status: "upcoming",
      reminder: true
    },
    {
      id: 5,
      title: "Vocabulary Review Session",
      course: "English for Beginners - A1",
      type: "review",
      date: "2024-12-06",
      startTime: "15:00",
      endTime: "16:00",
      duration: "1h",
      instructor: "Cô Hương Tran",
      location: "Online - Zoom",
      status: "completed",
      reminder: false
    },
    {
      id: 6,
      title: "Group Discussion: Daily Routines",
      course: "English Conversation Master",
      type: "discussion",
      date: "2024-12-07",
      startTime: "09:30",
      endTime: "10:30",
      duration: "1h",
      instructor: "Thầy Michael Brown",
      location: "Classroom 305",
      status: "upcoming",
      reminder: true
    },
    {
      id: 7,
      title: "Weekly Progress Review",
      course: "All Courses",
      type: "assessment",
      date: "2024-12-07",
      startTime: "16:00",
      endTime: "17:00",
      duration: "1h",
      instructor: "Academic Team",
      location: "Online - Platform",
      status: "upcoming",
      reminder: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "lesson": return "bg-blue-100 text-blue-800";
      case "practice": return "bg-green-100 text-green-800";
      case "test": return "bg-red-100 text-red-800";
      case "workshop": return "bg-purple-100 text-purple-800";
      case "review": return "bg-yellow-100 text-yellow-800";
      case "discussion": return "bg-orange-100 text-orange-800";
      case "assessment": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "lesson": return BookOpen;
      case "practice": return Users;
      case "test": return Clock;
      case "workshop": return VideoIcon;
      case "review": return BookOpen;
      case "discussion": return Users;
      case "assessment": return Clock;
      default: return BookOpen;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "ongoing": return "bg-green-100 text-green-800";
      case "completed": return "bg-gray-100 text-gray-600";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming": return "Sắp diễn ra";
      case "ongoing": return "Đang diễn ra";
      case "completed": return "Đã hoàn thành";
      case "cancelled": return "Đã hủy";
      default: return "Không xác định";
    }
  };

  // Filter schedule for today
  const today = new Date().toISOString().split('T')[0];
  const todaySchedule = scheduleItems.filter(item => item.date === today);
  const upcomingSchedule = scheduleItems.filter(item => 
    item.date >= today && item.status === "upcoming"
  ).slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Lịch học</h1>
        <p className="text-gray-600">Quản lý và theo dõi lịch học tập của bạn</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <CalendarIcon className="h-5 w-5 text-blue-600" />
            </div>
            <h3>Hôm nay</h3>
          </div>
          <p className="text-2xl mb-1">{todaySchedule.length}</p>
          <p className="text-sm text-gray-600">Buổi học</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-green-600" />
            </div>
            <h3>Tuần này</h3>
          </div>
          <p className="text-2xl mb-1">12</p>
          <p className="text-sm text-gray-600">Buổi học</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Bell className="h-5 w-5 text-orange-600" />
            </div>
            <h3>Nhắc nhở</h3>
          </div>
          <p className="text-2xl mb-1">8</p>
          <p className="text-sm text-gray-600">Thông báo</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <h3>Tham gia</h3>
          </div>
          <p className="text-2xl mb-1">85%</p>
          <p className="text-sm text-gray-600">Tỷ lệ</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar and Today's Schedule */}
        <div className="lg:col-span-2">
          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <Button 
                variant={viewMode === "week" ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewMode("week")}
              >
                Tuần
              </Button>
              <Button 
                variant={viewMode === "month" ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewMode("month")}
              >
                Tháng
              </Button>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Thêm lịch học
            </Button>
          </div>

          {/* Today's Schedule */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Lịch học hôm nay ({new Date().toLocaleDateString('vi-VN')})</h3>
            {todaySchedule.length > 0 ? (
              <div className="space-y-4">
                {todaySchedule.map((item) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        <TypeIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <Badge className={getStatusColor(item.status)}>
                            {getStatusText(item.status)}
                          </Badge>
                          {item.reminder && (
                            <Bell className="h-4 w-4 text-orange-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{item.course}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{item.startTime} - {item.endTime}</span>
                          <span>•</span>
                          <span>{item.duration}</span>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Tham gia
                      </Button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Không có lịch học nào hôm nay</p>
                <p className="text-sm text-gray-500 mt-2">Hãy thư giãn và chuẩn bị cho ngày mai!</p>
              </div>
            )}
          </Card>

          {/* Weekly Schedule Overview */}
          <Card className="p-6">
            <h3 className="mb-4">Lịch học tuần này</h3>
            <div className="space-y-3">
              {["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"].map((day, index) => {
                const daySchedule = scheduleItems.filter(item => {
                  const itemDate = new Date(item.date);
                  const dayIndex = itemDate.getDay();
                  return dayIndex === (index + 1) % 7;
                });
                
                return (
                  <div key={day} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="w-20 font-medium">{day}</div>
                    <div className="flex-1">
                      {daySchedule.length > 0 ? (
                        <div className="flex gap-2">
                          {daySchedule.map((item, idx) => (
                            <Badge key={idx} className={getTypeColor(item.type)} size="sm">
                              {item.startTime} {item.title.split(':')[0]}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-500 text-sm">Không có lịch học</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      {daySchedule.length} buổi
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Calendar Widget */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Lịch</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </Card>

          {/* Upcoming Events */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Sự kiện sắp tới</h3>
            <div className="space-y-3">
              {upcomingSchedule.map((item) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-1 rounded ${getTypeColor(item.type)}`}>
                      <TypeIcon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-600">
                        {new Date(item.date).toLocaleDateString('vi-VN')} - {item.startTime}
                      </p>
                    </div>
                    {item.reminder && (
                      <Bell className="h-4 w-4 text-orange-500" />
                    )}
                  </div>
                );
              })}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Xem tất cả
            </Button>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="mb-4">Hành động nhanh</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Đặt lịch học riêng
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Cài đặt nhắc nhở
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Xuất lịch học
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Đăng ký lớp mới
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}