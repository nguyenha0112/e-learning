"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  PlayCircle, 
  Clock, 
  BookOpen, 
  CheckCircle,
  Lock,
  Download,
  Star,
  Volume2,
  FileText
} from "lucide-react";

export function BaiGiang() {
  const lectures = [
    {
      id: 1,
      title: "Unit 1: Greetings and Introductions",
      description: "Học cách chào hỏi và giới thiệu bản thân trong tiếng Anh",
      duration: "25 phút",
      course: "English for Beginners - A1",
      type: "video",
      completed: true,
      locked: false,
      rating: 4.8,
      materials: [
        { name: "Bài giảng PDF", type: "pdf" },
        { name: "File nghe", type: "audio" },
        { name: "Bài tập thực hành", type: "exercise" }
      ]
    },
    {
      id: 2,
      title: "Unit 2: Present Simple Tense",
      description: "Nắm vững thì hiện tại đơn và cách sử dụng trong giao tiếp",
      duration: "35 phút",
      course: "English for Beginners - A1",
      type: "video",
      completed: true,
      locked: false,
      rating: 4.9,
      materials: [
        { name: "Grammar Rules", type: "pdf" },
        { name: "Practice Exercises", type: "exercise" },
        { name: "Audio Examples", type: "audio" }
      ]
    },
    {
      id: 3,
      title: "Unit 3: Daily Routines Vocabulary",
      description: "Từ vựng về các hoạt động hàng ngày và cách diễn đạt",
      duration: "20 phút",
      course: "English for Beginners - A1",
      type: "video",
      completed: false,
      locked: false,
      rating: 4.7,
      materials: [
        { name: "Vocabulary List", type: "pdf" },
        { name: "Flashcards", type: "exercise" },
        { name: "Pronunciation Guide", type: "audio" }
      ]
    },
    {
      id: 4,
      title: "Unit 4: Asking for Directions",
      description: "Học cách hỏi đường và chỉ đường trong tiếng Anh",
      duration: "30 phút",
      course: "English for Beginners - A1",
      type: "video",
      completed: false,
      locked: true,
      rating: 4.6,
      materials: [
        { name: "Dialogue Examples", type: "pdf" },
        { name: "Map Exercises", type: "exercise" },
        { name: "Listening Practice", type: "audio" }
      ]
    },
    {
      id: 5,
      title: "Present Perfect vs Past Simple",
      description: "So sánh và phân biệt thì hiện tại hoàn thành và quá khứ đơn",
      duration: "40 phút",
      course: "English Intermediate - B1",
      type: "video",
      completed: true,
      locked: false,
      rating: 4.9,
      materials: [
        { name: "Grammar Comparison", type: "pdf" },
        { name: "Timeline Exercises", type: "exercise" },
        { name: "Example Sentences", type: "audio" }
      ]
    },
    {
      id: 6,
      title: "Business Email Writing",
      description: "Kỹ năng viết email chuyên nghiệp trong môi trường công việc",
      duration: "45 phút",
      course: "Business English Professional",
      type: "video",
      completed: false,
      locked: false,
      rating: 4.8,
      materials: [
        { name: "Email Templates", type: "pdf" },
        { name: "Writing Practice", type: "exercise" },
        { name: "Sample Emails", type: "pdf" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return PlayCircle;
      case "pdf": return FileText;
      case "audio": return Volume2;
      case "exercise": return BookOpen;
      default: return BookOpen;
    }
  };

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case "pdf": return FileText;
      case "audio": return Volume2;
      case "exercise": return BookOpen;
      default: return FileText;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Bài giảng</h1>
        <p className="text-gray-600">Xem và học các bài giảng từ khóa học của bạn</p>
      </div>

      {/* Course Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button variant="default" size="sm">Tất cả</Button>
        <Button variant="outline" size="sm">English for Beginners - A1</Button>
        <Button variant="outline" size="sm">English Intermediate - B1</Button>
        <Button variant="outline" size="sm">Business English</Button>
        <Button variant="outline" size="sm">IELTS Preparation</Button>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <PlayCircle className="h-5 w-5 text-blue-600" />
            </div>
            <h3>Tổng bài giảng</h3>
          </div>
          <p className="text-2xl mb-1">124</p>
          <p className="text-sm text-gray-600">Từ tất cả khóa học</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <h3>Đã hoàn thành</h3>
          </div>
          <p className="text-2xl mb-1">68</p>
          <p className="text-sm text-gray-600">Bài giảng đã xem</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <h3>Thời gian xem</h3>
          </div>
          <p className="text-2xl mb-1">45.5h</p>
          <p className="text-sm text-gray-600">Tổng thời gian</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Star className="h-5 w-5 text-purple-600" />
            </div>
            <h3>Đánh giá TB</h3>
          </div>
          <p className="text-2xl mb-1">4.8/5</p>
          <p className="text-sm text-gray-600">Từ học viên</p>
        </Card>
      </div>

      {/* Lectures List */}
      <div className="space-y-4">
        {lectures.map((lecture) => {
          const TypeIcon = getTypeIcon(lecture.type);
          
          return (
            <Card key={lecture.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                {/* Lecture Icon */}
                <div className={`p-3 rounded-lg ${
                  lecture.locked 
                    ? "bg-gray-100" 
                    : lecture.completed 
                      ? "bg-green-100" 
                      : "bg-blue-100"
                }`}>
                  {lecture.locked ? (
                    <Lock className="h-6 w-6 text-gray-500" />
                  ) : lecture.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <TypeIcon className={`h-6 w-6 ${
                      lecture.completed ? "text-green-600" : "text-blue-600"
                    }`} />
                  )}
                </div>

                {/* Lecture Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className={`text-lg mb-1 ${
                        lecture.locked ? "text-gray-500" : ""
                      }`}>
                        {lecture.title}
                      </h3>
                      <p className={`text-sm mb-2 ${
                        lecture.locked ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {lecture.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {lecture.completed && (
                        <Badge className="bg-green-100 text-green-800">
                          Đã hoàn thành
                        </Badge>
                      )}
                      {lecture.locked && (
                        <Badge className="bg-gray-100 text-gray-600">
                          Chưa mở khóa
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{lecture.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{lecture.course}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{lecture.rating}</span>
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-600">Tài liệu:</span>
                    <div className="flex gap-3">
                      {lecture.materials.map((material, index) => {
                        const MaterialIcon = getMaterialIcon(material.type);
                        return (
                          <div 
                            key={index}
                            className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                          >
                            <MaterialIcon className="h-3 w-3" />
                            <span>{material.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {lecture.locked ? (
                      <Button variant="outline" disabled>
                        <Lock className="h-4 w-4 mr-2" />
                        Chưa thể xem
                      </Button>
                    ) : lecture.completed ? (
                      <Button className="bg-green-600 hover:bg-green-700">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Xem lại
                      </Button>
                    ) : (
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Bắt đầu học
                      </Button>
                    )}
                    
                    {!lecture.locked && (
                      <>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Tải tài liệu
                        </Button>
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4 mr-1" />
                          Ghi chú
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" className="px-8">
          Xem thêm bài giảng
        </Button>
      </div>
    </div>
  );
}