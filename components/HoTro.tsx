"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  HelpCircle,
  Search,
  ChevronRight,
  ExternalLink,
  Video,
  FileText,
  Clock,
  CheckCircle,
  Users
} from "lucide-react";

export function HoTro() {
  const faqCategories = [
    {
      title: "Tài khoản & Đăng ký",
      questions: [
        {
          question: "Làm sao để đăng ký tài khoản mới?",
          answer: "Bạn có thể đăng ký tài khoản bằng cách click vào nút 'Đăng ký' ở góc phải màn hình, sau đó điền thông tin email và tạo mật khẩu."
        },
        {
          question: "Tôi quên mật khẩu, làm sao để lấy lại?",
          answer: "Click vào 'Quên mật khẩu' tại trang đăng nhập, nhập email của bạn và chúng tôi sẽ gửi link đặt lại mật khẩu."
        },
        {
          question: "Có thể thay đổi thông tin cá nhân không?",
          answer: "Có, bạn có thể cập nhật thông tin cá nhân trong mục 'Quản lý thông tin cá nhân' trên menu chính."
        }
      ]
    },
    {
      title: "Khóa học & Thanh toán",
      questions: [
        {
          question: "Làm sao để đăng ký khóa học?",
          answer: "Truy cập mục 'Khóa học', chọn khóa học phù hợp và click 'Đăng ký'. Sau đó làm theo hướng dẫn thanh toán."
        },
        {
          question: "Các hình thức thanh toán nào được hỗ trợ?",
          answer: "Chúng tôi hỗ trợ thanh toán qua thẻ tín dụng, ví điện tử (MoMo, ZaloPay), và chuyển khoản ngân hàng."
        },
        {
          question: "Có thể hoàn tiền không?",
          answer: "Bạn có thể yêu cầu hoàn tiền trong vòng 7 ngày đầu nếu chưa hoàn thành quá 20% khóa học."
        }
      ]
    },
    {
      title: "Kỹ thuật & Ứng dụng",
      questions: [
        {
          question: "Ứng dụng không tải được, tôi phải làm gì?",
          answer: "Hãy kiểm tra kết nối internet và thử tải lại trang. Nếu vẫn không được, hãy liên hệ bộ phận kỹ thuật."
        },
        {
          question: "Video bài giảng bị giật lag, làm sao khắc phục?",
          answer: "Thử giảm chất lượng video xuống 480p hoặc 720p. Đảm bảo kết nối internet ổn định ít nhất 5Mbps."
        },
        {
          question: "Có thể tải video về máy để xem offline không?",
          answer: "Hiện tại chúng tôi chưa hỗ trợ tính năng này. Tất cả nội dung cần xem online để đảm bảo bản quyền."
        }
      ]
    }
  ];

  const supportChannels = [
    {
      type: "chat",
      title: "Chat trực tuyến",
      description: "Trò chuyện ngay với nhân viên hỗ trợ",
      availability: "24/7",
      responseTime: "Ngay lập tức",
      icon: MessageSquare,
      color: "bg-blue-100 text-blue-600"
    },
    {
      type: "email",
      title: "Email hỗ trợ",
      description: "Gửi email đến support@studyengera.com",
      availability: "24/7",
      responseTime: "Trong 2-4 giờ",
      icon: Mail,
      color: "bg-green-100 text-green-600"
    },
    {
      type: "phone",
      title: "Hotline",
      description: "Gọi điện trực tiếp: 1900 1234",
      availability: "8:00 - 22:00",
      responseTime: "Ngay lập tức",
      icon: Phone,
      color: "bg-orange-100 text-orange-600"
    },
    {
      type: "video",
      title: "Hỗ trợ video",
      description: "Đặt lịch gọi video với chuyên gia",
      availability: "Theo lịch hẹn",
      responseTime: "Trong 24h",
      icon: Video,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const tutorials = [
    {
      title: "Hướng dẫn sử dụng cơ bản",
      description: "Tìm hiểu các tính năng chính của StudyEngEra",
      duration: "10 phút",
      type: "video",
      level: "Beginner"
    },
    {
      title: "Cách học hiệu quả nhất",
      description: "Phương pháp học tập được khuyến nghị",
      duration: "15 phút",
      type: "article",
      level: "All"
    },
    {
      title: "Sử dụng tính năng flashcard",
      description: "Tối ưu hóa việc học từ vựng",
      duration: "8 phút",
      type: "video",
      level: "Intermediate"
    },
    {
      title: "Theo dõi tiến độ học tập",
      description: "Cách xem và phân tích kết quả học",
      duration: "12 phút",
      type: "article",
      level: "All"
    }
  ];

  const recentTickets = [
    {
      id: "T001",
      subject: "Không thể truy cập khóa học IELTS",
      status: "resolved",
      date: "02/12/2024",
      priority: "high"
    },
    {
      id: "T002",
      subject: "Yêu cầu hoàn tiền khóa Business English",
      status: "in-progress",
      date: "01/12/2024",
      priority: "medium"
    },
    {
      id: "T003",
      subject: "Cập nhật thông tin thanh toán",
      status: "resolved",
      date: "28/11/2024",
      priority: "low"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "resolved": return "Đã giải quyết";
      case "in-progress": return "Đang xử lý";
      case "pending": return "Chờ xử lý";
      default: return "Không xác định";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl mb-2">Hỗ trợ</h1>
        <p className="text-gray-600">Chúng tôi sẵn sàng giúp đỡ bạn 24/7</p>
        
        {/* Search */}
        <div className="max-w-md mx-auto mt-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input 
            placeholder="Tìm kiếm câu hỏi, hướng dẫn..." 
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="faq" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">Câu hỏi thường gặp</TabsTrigger>
          <TabsTrigger value="contact">Liên hệ</TabsTrigger>
          <TabsTrigger value="guides">Hướng dẫn</TabsTrigger>
          <TabsTrigger value="tickets">Yêu cầu hỗ trợ</TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-6">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6">
              <h3 className="mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50">
                      <span className="font-medium">{faq.question}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </button>
                    <div className="px-4 pb-4 text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-6">
          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${channel.color}`}>
                    <channel.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{channel.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>Thời gian: {channel.availability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-3 w-3" />
                        <span>Phản hồi: {channel.responseTime}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="mb-4">Gửi yêu cầu hỗ trợ</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Họ và tên</label>
                  <Input placeholder="Nhập họ và tên" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <Input type="email" placeholder="Nhập email" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Chủ đề</label>
                <Input placeholder="Mô tả ngắn vấn đề của bạn" />
              </div>
              <div>
                <label className="block text-sm mb-1">Nội dung chi tiết</label>
                <Textarea 
                  placeholder="Vui lòng mô tả chi tiết vấn đề để chúng tôi hỗ trợ tốt hất..."
                  rows={4}
                />
              </div>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Gửi yêu cầu
                </Button>
                <Button variant="outline">
                  Đặt lịch hẹn
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Guides Tab */}
        <TabsContent value="guides" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    tutorial.type === "video" ? "bg-red-100" : "bg-blue-100"
                  }`}>
                    {tutorial.type === "video" ? (
                      <Video className="h-5 w-5 text-red-600" />
                    ) : (
                      <FileText className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{tutorial.title}</h4>
                      <Badge variant="outline" size="sm">{tutorial.level}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{tutorial.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Xem
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <Card className="p-6">
            <h3 className="mb-4">Liên kết hữu ích</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <p className="font-medium">Điều khoản sử dụng</p>
                  <p className="text-xs text-gray-600 mt-1">Quy định và chính sách</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <p className="font-medium">Chính sách bảo mật</p>
                  <p className="text-xs text-gray-600 mt-1">Bảo vệ thông tin cá nhân</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <p className="font-medium">Cộng đồng</p>
                  <p className="text-xs text-gray-600 mt-1">Tham gia group Facebook</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Tickets Tab */}
        <TabsContent value="tickets" className="space-y-6">
          {/* Create New Ticket */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3>Yêu cầu hỗ trợ của bạn</h3>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Tạo yêu cầu mới
              </Button>
            </div>
            
            {/* Tickets List */}
            <div className="space-y-3">
              {recentTickets.map((ticket) => (
                <div key={ticket.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">#{ticket.id}</Badge>
                      <h4 className="font-medium">{ticket.subject}</h4>
                    </div>
                    <Badge className={getStatusColor(ticket.status)}>
                      {getStatusText(ticket.status)}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Ngày tạo: {ticket.date}</span>
                    <span className={`${getPriorityColor(ticket.priority)} font-medium`}>
                      Độ ưu tiên: {ticket.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {recentTickets.length === 0 && (
              <div className="text-center py-8">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="mb-2">Chưa có yêu cầu hỗ trợ</h3>
                <p className="text-gray-600 mb-4">
                  Bạn chưa có yêu cầu hỗ trợ nào. Hãy tạo mới nếu cần giúp đỡ.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Tạo yêu cầu đầu tiên
                </Button>
              </div>
            )}
          </Card>

          {/* Support Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <h3>Tổng yêu cầu</h3>
              </div>
              <p className="text-2xl mb-1">{recentTickets.length}</p>
              <p className="text-sm text-gray-600">Đã tạo</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h3>Đã giải quyết</h3>
              </div>
              <p className="text-2xl mb-1">
                {recentTickets.filter(t => t.status === "resolved").length}
              </p>
              <p className="text-sm text-gray-600">Hoàn thành</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <h3>Thời gian TB</h3>
              </div>
              <p className="text-2xl mb-1">4.2h</p>
              <p className="text-sm text-gray-600">Phản hồi</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}