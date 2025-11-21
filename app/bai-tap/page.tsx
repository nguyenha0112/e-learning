"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  CheckCircle,
  XCircle,
  Star,
  Target,
  TrendingUp,
  Filter,
  Play,
  RotateCcw
} from "lucide-react";

export default function HoTroPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const exercises = [
    { 
      id: 1,
      title: "Present Simple - Fill in the blanks",
      description: "Điền từ thích hợp vào chỗ trống với thì hiện tại đơn",
      category: "Grammar",
      difficulty: "Beginner",
      questions: 15,
      timeLimit: 20,
      completed: true,
      score: 13,
      maxScore: 15,
      attempts: 2,
      course: "English for Beginners - A1"
    },
    {
      id: 2,
      title: "Daily Routines Vocabulary Quiz",
      description: "Kiểm tra từ vựng về các hoạt động hàng ngày",
      category: "Vocabulary",
      difficulty: "Beginner",
      questions: 20,
      timeLimit: 25,
      completed: true,
      score: 18,
      maxScore: 20,
      attempts: 1,
      course: "English for Beginners - A1"
    },
    {
      id: 3,
      title: "Present Perfect vs Past Simple",
      description: "Phân biệt và sử dụng đúng hai thì này",
      category: "Grammar",
      difficulty: "Intermediate",
      questions: 12,
      timeLimit: 18,
      completed: false,
      score: 0,
      maxScore: 12,
      attempts: 0,
      course: "English Intermediate - B1"
    },
    {
      id: 4,
      title: "Business Email Reading Comprehension",
      description: "Đọc hiểu các email trong môi trường công việc",
      category: "Reading",
      difficulty: "Advanced",
      questions: 10,
      timeLimit: 30,
      completed: false,
      score: 0,
      maxScore: 10,
      attempts: 0,
      course: "Business English Professional"
    },
    {
      id: 5,
      title: "IELTS Listening Practice Test",
      description: "Bài tập luyện nghe cho kỳ thi IELTS",
      category: "Listening",
      difficulty: "Advanced",
      questions: 40,
      timeLimit: 40,
      completed: true,
      score: 32,
      maxScore: 40,
      attempts: 3,
      course: "IELTS Preparation Course"
    },
    {
      id: 6,
      title: "Conditional Sentences Practice",
      description: "Luyện tập các loại câu điều kiện",
      category: "Grammar",
      difficulty: "Intermediate",
      questions: 15,
      timeLimit: 20,
      completed: false,
      score: 0,
      maxScore: 15,
      attempts: 0,
      course: "English Intermediate - B1"
    }
  ];

  const categories = [
    { key: "all", label: "Tất cả", count: exercises.length },
    { key: "Grammar", label: "Ngữ pháp", count: exercises.filter(e => e.category === "Grammar").length },
    { key: "Vocabulary", label: "Từ vựng", count: exercises.filter(e => e.category === "Vocabulary").length },
    { key: "Reading", label: "Đọc hiểu", count: exercises.filter(e => e.category === "Reading").length },
    { key: "Listening", label: "Nghe", count: exercises.filter(e => e.category === "Listening").length },
    { key: "Writing", label: "Viết", count: exercises.filter(e => e.category === "Writing").length },
    { key: "Speaking", label: "Nói", count: exercises.filter(e => e.category === "Speaking").length }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Grammar": return "bg-blue-100 text-blue-800";
      case "Vocabulary": return "bg-purple-100 text-purple-800";
      case "Reading": return "bg-green-100 text-green-800";
      case "Listening": return "bg-orange-100 text-orange-800";
      case "Writing": return "bg-red-100 text-red-800";
      case "Speaking": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getScorePercentage = (score: number, maxScore: number) => {
    return Math.round((score / maxScore) * 100);
  };

  const filteredExercises = selectedCategory === "all" 
    ? exercises 
    : exercises.filter(exercise => exercise.category === selectedCategory);

  const completedExercises = exercises.filter(e => e.completed).length;
  const totalScore = exercises.filter(e => e.completed).reduce((sum, e) => sum + e.score, 0);
  const totalMaxScore = exercises.filter(e => e.completed).reduce((sum, e) => sum + e.maxScore, 0);
  const averageScore = totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-black">Bài tập</h1>
        <p className="text-gray-600">Luyện tập và kiểm tra kiến thức tiếng Anh của bạn</p>
      </div>

      {/* Statistics */}
      <div className="grid text-black grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Target className="h-5 w-5 text-blue-600" />
            </div>
            <h3>Tổng bài tập</h3>
          </div>
          <p className="text-2xl mb-1">{exercises.length}</p>
          <p className="text-sm text-gray-600">Bài tập có sẵn</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <h3>Đã hoàn thành</h3>
          </div>
          <p className="text-2xl mb-1">{completedExercises}</p>
          <p className="text-sm text-gray-600">Bài tập đã làm</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Star className="h-5 w-5 text-orange-600" />
            </div>
            <h3>Điểm trung bình</h3>
          </div>
          <p className="text-2xl mb-1">{averageScore}%</p>
          <p className="text-sm text-gray-600">Từ {completedExercises} bài tập</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <h3>Tiến bộ</h3>
          </div>
          <div className="mb-1">
            <Progress value={(completedExercises / exercises.length) * 100} className="h-2" />
          </div>
          <p className="text-sm text-gray-600">{Math.round((completedExercises / exercises.length) * 100)}% hoàn thành</p>
        </Card>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <h3 className="mb-4">Lọc theo danh mục</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={selectedCategory === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.key)}
              className="flex items-center gap-2"
            >
              {category.label}
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExercises.map((exercise) => (
          <Card key={exercise.id} className="p-6 hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getCategoryColor(exercise.category)}>
                    {exercise.category}
                  </Badge>
                  <Badge className={getDifficultyColor(exercise.difficulty)}>
                    {exercise.difficulty}
                  </Badge>
                  {exercise.completed && (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Hoàn thành
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg mb-2">{exercise.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{exercise.description}</p>
              </div>
            </div>

            {/* Exercise Info */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{exercise.questions} câu hỏi</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{exercise.timeLimit} phút</span>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <p>Khóa học: {exercise.course}</p>
            </div>

            {/* Score Progress (if completed) */}
            {exercise.completed && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Kết quả tốt nhất</span>
                  <span className="text-sm">
                    {exercise.score}/{exercise.maxScore} ({getScorePercentage(exercise.score, exercise.maxScore)}%)
                  </span>
                </div>
                <Progress 
                  value={getScorePercentage(exercise.score, exercise.maxScore)} 
                  className="h-2 mb-2" 
                />
                <p className="text-xs text-gray-500">Đã thử {exercise.attempts} lần</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              {exercise.completed ? (
                <>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Làm lại
                  </Button>
                  <Button variant="outline">
                    Xem kết quả
                  </Button>
                </>
              ) : (
                <>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Play className="h-4 w-4 mr-2" />
                    Bắt đầu
                  </Button>
                  <Button variant="outline">
                    Xem mẫu
                  </Button>
                </>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredExercises.length === 0 && (
        <Card className="p-12 text-center">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl mb-2">Không có bài tập nào</h3>
          <p className="text-gray-600 mb-6">
            Hiện tại không có bài tập nào trong danh mục này.
          </p>
          <Button onClick={() => setSelectedCategory("all")}>
            Xem tất cả bài tập
          </Button>
        </Card>
      )}

      {/* Load More */}
      {filteredExercises.length > 0 && (
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8">
            Xem thêm bài tập
          </Button>
        </div>
      )}
    </div>
  );
}