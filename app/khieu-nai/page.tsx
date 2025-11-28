"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertTriangle, 
  FileText, 
  Clock, 
  CheckCircle,
  XCircle,
  Calendar,
  User,
  MessageSquare,
  Upload,
  Send
} from "lucide-react";

export default function KhieuNai() {
  const [complaintForm, setComplaintForm] = useState({
    type: "",
    subject: "",
    description: "",
    priority: ""
  });

  const complaints = [
    {
      id: "C001",
      subject: "Chất lượng video bài giảng kém",
      type: "technical",
      description: "Video trong khóa học IELTS thường bị giật lag và âm thanh không đồng bộ",
      priority: "high",
      status: "in-progress",
      createdDate: "28/11/2024",
      updatedDate: "30/11/2024",
      assignedTo: "Phòng Kỹ thuật",
      responses: [
        {
          date: "29/11/2024",
          author: "Nguyễn Văn B - Kỹ thuật viên",
          message: "Chúng tôi đã nhận được phản ánh và đang kiểm tra server video. Cảm ơn bạn đã thông báo."
        },
        {
          date: "30/11/2024",
          author: "Trần Thị C - Quản lý",
          message: "Vấn đề đã được khắc phục. Vui lòng thử lại và cho chúng tôi biết nếu vẫn còn vấn đề."
        }
      ]
    },
    {
      id: "C002",
      subject: "Giảng viên không phản hồi câu hỏi",
      type: "service",
      description: "Đã gửi nhiều câu hỏi cho giảng viên khóa Business English nhưng không nhận được phản hồi",
      priority: "medium",
      status: "resolved",
      createdDate: "25/11/2024",
      updatedDate: "27/11/2024",
      assignedTo: "Phòng Học vụ",
      responses: [
        {
          date: "26/11/2024",
          author: "Lê Văn D - Phụ trách học vụ",
          message: "Chúng tôi đã liên hệ với giảng viên và sẽ có phản hồi trong 24h tới."
        },
        {
          date: "27/11/2024",
          author: "Ms. Sarah Johnson - Giảng viên",
          message: "Xin lỗi vì sự chậm trễ. Tôi đã trả lời tất cả câu hỏi của bạn qua email và discussion forum."
        }
      ]
    },
    {
      id: "C003",
      subject: "Không nhận được chứng chỉ sau khi hoàn thành khóa học",
      type: "certificate",
      description: "Đã hoàn thành 100% khóa English for Beginners nhưng chưa nhận được chứng chỉ",
      priority: "medium",
      status: "pending",
      createdDate: "01/12/2024",
      updatedDate: "01/12/2024",
      assignedTo: "Phòng Học vụ",
      responses: []
    }
  ];

  const complaintTypes = [
    { value: "technical", label: "Vấn đề kỹ thuật" },
    { value: "service", label: "Chất lượng dịch vụ" },
    { value: "billing", label: "Thanh toán & hóa đơn" },
    { value: "content", label: "Nội dung khóa học" },
    { value: "certificate", label: "Chứng chỉ" },
    { value: "instructor", label: "Giảng viên" },
    { value: "other", label: "Khác" }
  ];

  const priorities = [
    { value: "low", label: "Thấp" },
    { value: "medium", label: "Trung bình" },
    { value: "high", label: "Cao" },
    { value: "urgent", label: "Khẩn cấp" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "resolved": return "bg-green-100 text-green-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending": return "Chờ xử lý";
      case "in-progress": return "Đang xử lý";
      case "resolved": return "Đã giải quyết";
      case "rejected": return "Từ chối";
      default: return "Không xác định";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return Clock;
      case "in-progress": return AlertTriangle;
      case "resolved": return CheckCircle;
      case "rejected": return XCircle;
      default: return Clock;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low": return "text-green-600";
      case "medium": return "text-yellow-600";
      case "high": return "text-orange-600";
      case "urgent": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getTypeLabel = (type: string) => {
    const typeObj = complaintTypes.find(t => t.value === type);
    return typeObj ? typeObj.label : type;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Complaint submitted:", complaintForm);
    // Reset form
    setComplaintForm({
      type: "",
      subject: "",
      description: "",
      priority: ""
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Khiếu nại</h1>
        <p className="text-gray-600">Gửi phản hồi và khiếu nại để chúng tôi cải thiện dịch vụ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Complaint Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 mb-8">
            <h3 className="mb-4">Gửi khiếu nại mới</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Loại khiếu nại</label>
                  <Select 
                    value={complaintForm.type} 
                    onValueChange={(value) => setComplaintForm({...complaintForm, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn loại khiếu nại" />
                    </SelectTrigger>
                    <SelectContent>
                      {complaintTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Mức độ ưu tiên</label>
                  <Select 
                    value={complaintForm.priority} 
                    onValueChange={(value) => setComplaintForm({...complaintForm, priority: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn mức độ" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem key={priority.value} value={priority.value}>
                          {priority.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-1">Tiêu đề khiếu nại</label>
                <Input 
                  placeholder="Mô tả ngắn gọn vấn đề của bạn"
                  value={complaintForm.subject}
                  onChange={(e) => setComplaintForm({...complaintForm, subject: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Mô tả chi tiết</label>
                <Textarea 
                  placeholder="Vui lòng mô tả chi tiết về vấn đề bạn gặp phải, bao gồm thời gian, hoàn cảnh và những gì bạn mong muốn chúng tôi giải quyết..."
                  rows={6}
                  value={complaintForm.description}
                  onChange={(e) => setComplaintForm({...complaintForm, description: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Đính kèm file (tùy chọn)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Kéo thả file hoặc click để chọn
                  </p>
                  <p className="text-xs text-gray-500">
                    Hỗ trợ: JPG, PNG, PDF (tối đa 10MB)
                  </p>
                  <Button type="button" variant="outline" size="sm" className="mt-2">
                    Chọn file
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  <Send className="h-4 w-4 mr-2" />
                  Gửi khiếu nại
                </Button>
                <Button type="button" variant="outline">
                  Lưu nháp
                </Button>
              </div>
            </form>
          </Card>

          {/* Complaint History */}
          <Card className="p-6">
            <h3 className="mb-4">Lịch sử khiếu nại</h3>
            <div className="space-y-6">
              {complaints.map((complaint) => {
                const StatusIcon = getStatusIcon(complaint.status);
                return (
                  <div key={complaint.id} className="border border-gray-200 rounded-lg p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">#{complaint.id}</Badge>
                          <Badge className={getStatusColor(complaint.status)}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {getStatusText(complaint.status)}
                          </Badge>
                          <span className={`text-sm font-medium ${getPriorityColor(complaint.priority)}`}>
                            {complaint.priority.toUpperCase()}
                          </span>
                        </div>
                        <h4 className="text-lg mb-1">{complaint.subject}</h4>
                        <p className="text-sm text-gray-600 mb-2">{complaint.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            <span>{getTypeLabel(complaint.type)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Tạo: {complaint.createdDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{complaint.assignedTo}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Responses */}
                    {complaint.responses.length > 0 && (
                      <div className="border-t border-gray-200 pt-4">
                        <h5 className="font-medium mb-3 flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Phản hồi ({complaint.responses.length})
                        </h5>
                        <div className="space-y-3">
                          {complaint.responses.map((response, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-sm">{response.author}</span>
                                <span className="text-xs text-gray-500">{response.date}</span>
                              </div>
                              <p className="text-sm text-gray-700">{response.message}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="border-t border-gray-200 pt-4 mt-4 flex gap-2">
                      {complaint.status !== "resolved" && (
                        <Button size="sm" variant="outline">
                          Thêm thông tin
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        Xem chi tiết
                      </Button>
                      {complaint.status === "resolved" && (
                        <Button size="sm" variant="outline">
                          Đánh giá
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Statistics */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Thống kê khiếu nại</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Tổng số</span>
                <span className="font-medium">{complaints.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Đã giải quyết</span>
                <span className="font-medium text-green-600">
                  {complaints.filter(c => c.status === "resolved").length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Đang xử lý</span>
                <span className="font-medium text-blue-600">
                  {complaints.filter(c => c.status === "in-progress").length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Chờ xử lý</span>
                <span className="font-medium text-yellow-600">
                  {complaints.filter(c => c.status === "pending").length}
                </span>
              </div>
            </div>
          </Card>

          {/* Quick Guide */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Hướng dẫn khiếu nại</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-blue-600 font-medium">1.</span>
                <span>Mô tả rõ ràng vấn đề bạn gặp phải</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-medium">2.</span>
                <span>Cung cấp thông tin chi tiết (thời gian, hoàn cảnh)</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-medium">3.</span>
                <span>Đính kèm file minh chứng nếu có</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-medium">4.</span>
                <span>Chọn mức độ ưu tiên phù hợp</span>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-medium">5.</span>
                <span>Theo dõi tiến độ xử lý qua email</span>
              </div>
            </div>
          </Card>

          {/* Contact Info */}
          <Card className="p-6">
            <h3 className="mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Hotline khiếu nại</p>
                <p className="text-gray-600">1800 1234 (miễn phí)</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">complaints@studyengera.com</p>
              </div>
              <div>
                <p className="font-medium">Thời gian xử lý</p>
                <p className="text-gray-600">24-48 giờ làm việc</p>
              </div>
              <div>
                <p className="font-medium">Địa chỉ</p>
                <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}