"use client";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { useState } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  PlayCircle,
  ChevronRight,
  Filter,
  Search,
  X,
  CheckCircle,
  CreditCard,
  Calendar,
  Award,
} from "lucide-react";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { toast } from "sonner";

export function KhoaHoc() {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationStep, setRegistrationStep] = useState(1);
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([2, 4]); // Track enrolled course IDs
  const [selectedSchedule, setSelectedSchedule] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedSchedule, setAcceptedSchedule] = useState(false);

  const courses = [
    {
      id: 1,
      title: "English for Beginners - A1",
      description:
        "Khóa học dành cho người mới bắt đầu, học từ cơ bản đến nâng cao",
      level: "Beginner",
      duration: "40 giờ",
      lessons: 30,
      students: 1250,
      rating: 4.8,
      progress: 0,
      price: "Miễn phí",
      priceAmount: 0,
      image: "beginner",
      status: "available",
      instructor: "Cô Mai Anh",
    },
    {
      id: 2,
      title: "English Intermediate - B1",
      description:
        "Phát triển kỹ năng tiếng Anh trung cấp với nhiều chủ đề thực tế",
      level: "Intermediate",
      duration: "60 giờ",
      lessons: 45,
      students: 890,
      rating: 4.9,
      progress: 68,
      price: "1,200,000 VNĐ",
      priceAmount: 1200000,
      image: "intermediate",
      status: "enrolled",
      instructor: "Thầy John Smith",
    },
    {
      id: 3,
      title: "Business English Professional",
      description:
        "Tiếng Anh chuyên ngành cho môi trường công việc chuyên nghiệp",
      level: "Advanced",
      duration: "50 giờ",
      lessons: 38,
      students: 567,
      rating: 4.7,
      progress: 0,
      price: "2,500,000 VNĐ",
      priceAmount: 2500000,
      image: "business",
      status: "available",
      instructor: "Ms. Sarah Johnson",
    },
    {
      id: 4,
      title: "IELTS Preparation Course",
      description: "Khóa học luyện thi IELTS với đầy đủ 4 kỹ năng",
      level: "Advanced",
      duration: "80 giờ",
      lessons: 60,
      students: 2100,
      rating: 4.9,
      progress: 25,
      price: "3,000,000 VNĐ",
      priceAmount: 3000000,
      image: "ielts",
      status: "enrolled",
      instructor: "Cô Linh Nguyen",
    },
    {
      id: 5,
      title: "English Conversation Master",
      description:
        "Nâng cao kỹ năng giao tiếp tiếng Anh qua các tình huống thực tế",
      level: "Intermediate",
      duration: "35 giờ",
      lessons: 28,
      students: 1890,
      rating: 4.6,
      progress: 0,
      price: "1,800,000 VNĐ",
      priceAmount: 1800000,
      image: "conversation",
      status: "available",
      instructor: "Thầy Michael Brown",
    },
    {
      id: 6,
      title: "English Grammar Complete",
      description: "Nắm vững toàn bộ ngữ pháp tiếng Anh từ cơ bản đến nâng cao",
      level: "All Levels",
      duration: "45 giờ",
      lessons: 35,
      students: 1456,
      rating: 4.8,
      progress: 0,
      price: "1,500,000 VNĐ",
      priceAmount: 1500000,
      image: "grammar",
      status: "available",
      instructor: "Cô Hương Tran",
    },
  ];

  const [isChecked, setIsChecked] = useState(false);
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-blue-100 text-blue-800";
      case "Intermediate":
        return "bg-violet-100 text-violet-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "enrolled":
        return "Đang học";
      case "available":
        return "Có thể đăng ký";
      case "completed":
        return "Đã hoàn thành";
      default:
        return "Chưa xác định";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "enrolled":
        return "bg-blue-100 text-blue-800";
      case "available":
        return "bg-gray-100 text-gray-800";
      case "completed":
        return "bg-violet-100 text-violet-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Filter courses based on search term and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    const matchesStatus =
      statusFilter === "all" || course.status === statusFilter;

    return matchesSearch && matchesLevel && matchesStatus;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setLevelFilter("all");
    setStatusFilter("all");
  };

  const handleRegistration = (course: any) => {
    setSelectedCourse(course);
    setIsRegistering(true);
    setRegistrationStep(1);
    setAcceptedTerms(false);
    setAcceptedSchedule(false);
    setSelectedSchedule("");
  };

  const handleContinueCourse = (course: any) => {
    // Store course context and navigate to Bài Giảng
    localStorage.setItem("currentCourse", JSON.stringify(course));
    toast("Đang chuyển đến khóa học...", {
      description: `Tiếp tục học "${course.title}"`,
    });
    // Note: In a real app, this would use React Router
    // For now, we'll simulate navigation
    setTimeout(() => {
      toast("Đã vào khóa học!", {
        description: "Bạn có thể tiếp tục các bài học tại đây",
      });
    }, 1000);
  };

  const canProceedFromStep1 = () => {
    return acceptedTerms && acceptedSchedule;
  };

  const canProceedFromStep2 = () => {
    return selectedSchedule !== "";
  };

  const processRegistration = () => {
    if (registrationStep === 1 && !canProceedFromStep1()) {
      toast("Vui lòng đồng ý với các điều khoản", {
        description: "Bạn cần chấp nhận tất cả điều khoản để tiếp tục",
      });
      return;
    }

    if (registrationStep === 2 && !canProceedFromStep2()) {
      toast("Vui lòng chọn lịch học", {
        description: "Bạn cần chọn lịch học phù hợp để tiếp tục",
      });
      return;
    }

    if (registrationStep < 3) {
      setRegistrationStep(registrationStep + 1);
    } else {
      // Complete registration - update course status
      const updatedCourses = courses.map((course) =>
        course.id === selectedCourse?.id
          ? { ...course, status: "enrolled" }
          : course
      );

      // Add to enrolled courses
      setEnrolledCourses((prev) => [...prev, selectedCourse?.id]);

      toast("🎉 Đăng ký khóa học thành công!", {
        description: `Chúc mừng! Bạn đã đăng ký thành công khóa học "${selectedCourse?.title}". Khóa học sẽ bắt đầu vào tuần tới.`,
      });

      // Reset state
      setIsRegistering(false);
      setSelectedCourse(null);
      setRegistrationStep(1);
      setAcceptedTerms(false);
      setAcceptedSchedule(false);
      setSelectedSchedule("");
    }
  };

  const renderRegistrationStep = () => {
    switch (registrationStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="mb-2">Thông tin khóa học</h4>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Tên:</strong> {selectedCourse?.title}
                </p>
                <p>
                  <strong>Giảng viên:</strong> {selectedCourse?.instructor}
                </p>
                <p>
                  <strong>Thời lượng:</strong> {selectedCourse?.duration}
                </p>
                <p>
                  <strong>Số bài học:</strong> {selectedCourse?.lessons} bài
                </p>
                <p>
                  <strong>Học phí:</strong>{" "}
                  <span className="text-blue-600">{selectedCourse?.price}</span>
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    setIsChecked(checked === true);
                  }}
                />
                <label htmlFor="terms" className="text-sm">
                  Tôi đồng ý với điều khoản và điều kiện của khóa học
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    setIsChecked(checked === true);
                  }}
                />
                <label htmlFor="schedule" className="text-sm">
                  Tôi cam kết sẽ tham gia đầy đủ các buổi học
                </label>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="mb-2">Chọn lịch học</h4>
              <p className="text-sm text-gray-600 mb-4">
                Khóa học sẽ bắt đầu vào tuần tới. Bạn có thể thay đổi lịch học
                sau khi đăng ký.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={
                  selectedSchedule === "weekday-evening" ? "default" : "outline"
                }
                className="h-auto p-4"
                onClick={() => setSelectedSchedule("weekday-evening")}
              >
                <div>
                  <div className="font-medium">Thứ 2, 4, 6</div>
                  <div className="text-sm text-gray-600">19:00 - 21:00</div>
                </div>
              </Button>
              <Button
                variant={
                  selectedSchedule === "alternate-evening"
                    ? "default"
                    : "outline"
                }
                className="h-auto p-4"
                onClick={() => setSelectedSchedule("alternate-evening")}
              >
                <div>
                  <div className="font-medium">Thứ 3, 5, 7</div>
                  <div className="text-sm text-gray-600">18:30 - 20:30</div>
                </div>
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <CreditCard className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h4 className="mb-2">Thanh toán</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Học phí khóa học:</span>
                  <span>{selectedCourse?.price}</span>
                </div>
                {selectedCourse?.priceAmount > 0 && (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span>Giảm giá (Early Bird):</span>
                      <span className="text-red-600">-200,000 VNĐ</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center font-semibold">
                      <span>Tổng cộng:</span>
                      <span className="text-blue-600">
                        {selectedCourse?.priceAmount > 0
                          ? `${(
                              selectedCourse.priceAmount - 200000
                            ).toLocaleString()} VNĐ`
                          : selectedCourse?.price}
                      </span>
                    </div>
                  </>
                )}
              </div>
              {selectedCourse?.priceAmount === 0 ? (
                <p className="text-green-600">
                  Khóa học miễn phí - Không cần thanh toán
                </p>
              ) : (
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Thanh toán bằng thẻ
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Award className="h-4 w-4 mr-2" />
                    Chuyển khoản ngân hàng
                  </Button>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <ProtectedRoute message="Đăng nhập để xem và tham gia các khóa học tiếng Anh.">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Khóa học</h1>
          <p className="text-gray-600">
            Khám phá và đăng ký các khóa học tiếng Anh phù hợp với trình độ của
            bạn
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Dialog open={showFilters} onOpenChange={setShowFilters}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Bộ lọc
                {(levelFilter !== "all" || statusFilter !== "all") && (
                  <Badge variant="secondary" className="ml-2">
                    {
                      [
                        levelFilter !== "all" ? "1" : "",
                        statusFilter !== "all" ? "1" : "",
                      ].filter(Boolean).length
                    }
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Lọc khóa học</DialogTitle>
                <DialogDescription>
                  Tìm khóa học phù hợp với nhu cầu của bạn
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block">Trình độ</label>
                  <Select value={levelFilter} onValueChange={setLevelFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trình độ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả trình độ</SelectItem>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="All Levels">All Levels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block">Trạng thái</label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả trạng thái</SelectItem>
                      <SelectItem value="available">Có thể đăng ký</SelectItem>
                      <SelectItem value="enrolled">Đang học</SelectItem>
                      <SelectItem value="completed">Đã hoàn thành</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter className="flex gap-2 sm:gap-0">
                <Button variant="outline" onClick={clearFilters}>
                  Xóa bộ lọc
                </Button>
                <Button onClick={() => setShowFilters(false)}>Áp dụng</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Active Filters */}
        {(searchTerm || levelFilter !== "all" || statusFilter !== "all") && (
          <div className="flex flex-wrap gap-2 mb-6">
            {searchTerm && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Tìm kiếm: "{searchTerm}"
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setSearchTerm("")}
                />
              </Badge>
            )}
            {levelFilter !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Trình độ: {levelFilter}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setLevelFilter("all")}
                />
              </Badge>
            )}
            {statusFilter !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Trạng thái: {getStatusText(statusFilter)}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => setStatusFilter("all")}
                />
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-6"
            >
              Xóa tất cả
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Hiển thị {filteredCourses.length} trên {courses.length} khóa học
          </p>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="mb-2">Tổng khóa học</h3>
            <p className="text-2xl text-blue-600">24</p>
            <p className="text-sm text-gray-600">Khóa học có sẵn</p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2">Đang học</h3>
            <p className="text-2xl text-violet-600">2</p>
            <p className="text-sm text-gray-600">Khóa học hiện tại</p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2">Đã hoàn thành</h3>
            <p className="text-2xl text-purple-600">5</p>
            <p className="text-sm text-gray-600">Khóa học đã xong</p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2">Chứng chỉ</h3>
            <p className="text-2xl text-violet-600">3</p>
            <p className="text-sm text-gray-600">Chứng chỉ đã nhận</p>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Course Image */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
                <BookOpen className="h-16 w-16 text-white opacity-80" />
                {course.status === "enrolled" && (
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {getStatusText(course.status)}
                  </Badge>
                )}
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge className={getStatusColor(course.status)}>
                      {getStatusText(course.status)}
                    </Badge>
                  </div>
                  <h3 className="text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>

                {/* Course Info */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Giảng viên: {course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} bài</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} học viên</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Progress (if enrolled) */}
                {course.status === "enrolled" && course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Tiến độ</span>
                      <span className="text-sm text-gray-600">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg text-blue-600">{course.price}</p>
                  </div>
                  <div className="flex gap-2">
                    {course.status === "enrolled" ? (
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleContinueCourse(course)}
                      >
                        <PlayCircle className="h-4 w-4 mr-1" />
                        Tiếp tục
                      </Button>
                    ) : course.status === "available" ? (
                      <Button
                        variant="outline"
                        onClick={() => handleRegistration(course)}
                      >
                        Đăng ký
                      </Button>
                    ) : (
                      <Button variant="outline">Xem chi tiết</Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg mb-2">Không tìm thấy khóa học</h3>
            <p className="text-gray-600 mb-4">
              Không có khóa học nào phù hợp với bộ lọc hiện tại.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Xóa bộ lọc
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              Xem thêm khóa học
            </Button>
          </div>
        )}

        {/* Registration Dialog */}
        <Dialog open={isRegistering} onOpenChange={setIsRegistering}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                Đăng ký khóa học - Bước {registrationStep}/3
              </DialogTitle>
              <DialogDescription>
                {registrationStep === 1 &&
                  "Xem lại thông tin và điều khoản khóa học"}
                {registrationStep === 2 && "Chọn lịch học phù hợp với bạn"}
                {registrationStep === 3 && "Hoàn tất thanh toán để đăng ký"}
              </DialogDescription>
            </DialogHeader>

            {renderRegistrationStep()}

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  if (registrationStep > 1) {
                    setRegistrationStep(registrationStep - 1);
                  } else {
                    setIsRegistering(false);
                  }
                }}
              >
                {registrationStep > 1 ? "Quay lại" : "Hủy"}
              </Button>
              <Button onClick={processRegistration}>
                {registrationStep < 3
                  ? "Tiếp tục"
                  : selectedCourse?.priceAmount === 0
                  ? "Hoàn tất đăng ký"
                  : "Thanh toán"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ProtectedRoute>
  );
}

export default function KhoaHocPage() {
  return <KhoaHoc />;
}
