"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/components/ui/utils";
import { 
  Target, 
  TrendingUp, 
  Award, 
  BarChart3,
  Clock,
  Star,
  BookOpen,
  Volume2,
  PenTool,
  MessageSquare,
  CheckCircle,
  PlayCircle
} from "lucide-react";

export default function DanhGiaNangLuc() {
  const skillLevels = {
    grammar: { name: "Ngữ pháp", level: 75, color: "bg-blue-500" },
    vocabulary: { name: "Từ vựng", level: 82, color: "bg-green-500" },
    listening: { name: "Nghe", level: 68, color: "bg-purple-500" },
    speaking: { name: "Nói", level: 61, color: "bg-orange-500" },
    reading: { name: "Đọc hiểu", level: 78, color: "bg-red-500" },
    writing: { name: "Viết", level: 58, color: "bg-pink-500" }
  };

  const assessmentHistory = [
    {
      id: 1,
      name: "Đánh giá đầu vào",
      date: "15/11/2024",
      type: "placement",
      score: 65,
      level: "B1 - Intermediate",
      skills: {
        grammar: 62,
        vocabulary: 68,
        listening: 60,
        speaking: 55,
        reading: 70,
        writing: 52
      }
    },
    {
      id: 2,
      name: "Kiểm tra giữa khóa",
      date: "01/12/2024",
      type: "progress",
      score: 72,
      level: "B1+ - Upper Intermediate",
      skills: {
        grammar: 75,
        vocabulary: 82,
        listening: 68,
        speaking: 61,
        reading: 78,
        writing: 58
      }
    }
  ];

  const recommendedTests = [
    {
      id: 1,
      name: "Grammar Assessment",
      description: "Đánh giá toàn diện kiến thức ngữ pháp",
      duration: "45 phút",
      questions: 50,
      difficulty: "Intermediate",
      focus: "grammar",
      icon: BookOpen
    },
    {
      id: 2,
      name: "Listening Skills Test",
      description: "Kiểm tra khả năng nghe hiểu tiếng Anh",
      duration: "30 phút",
      questions: 25,
      difficulty: "All Levels",
      focus: "listening",
      icon: Volume2
    },
    {
      id: 3,
      name: "Speaking Evaluation",
      description: "Đánh giá kỹ năng nói và phát âm",
      duration: "20 phút",
      questions: 10,
      difficulty: "Intermediate",
      focus: "speaking",
      icon: MessageSquare
    },
    {
      id: 4,
      name: "Writing Skills Assessment",
      description: "Kiểm tra khả năng viết luận và email",
      duration: "60 phút",
      questions: 3,
      difficulty: "Advanced",
      focus: "writing",
      icon: PenTool
    }
  ];

  const achievements = [
    {
      name: "Grammar Master",
      description: "Đạt 80% trong bài kiểm tra ngữ pháp",
      icon: Award,
      color: "text-yellow-600",
      earned: false
    },
    {
      name: "Vocabulary Expert",
      description: "Học được 1000+ từ vựng",
      icon: BookOpen,
      color: "text-green-600",
      earned: true
    },
    {
      name: "Listening Pro",
      description: "Đạt điểm cao trong bài kiểm tra nghe",
      icon: Volume2,
      color: "text-blue-600",
      earned: false
    },
    {
      name: "Consistent Learner",
      description: "Học liên tục 30 ngày",
      icon: Target,
      color: "text-purple-600",
      earned: true
    }
  ];

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "grammar": return BookOpen;
      case "vocabulary": return Star;
      case "listening": return Volume2;
      case "speaking": return MessageSquare;
      case "reading": return BookOpen;
      case "writing": return PenTool;
      default: return BookOpen;
    }
  };

  const getLevelColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 55) return "text-yellow-600";
    return "text-red-600";
  };

  const currentLevel = assessmentHistory[assessmentHistory.length - 1];
  const overallScore = currentLevel.score;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Đánh giá năng lực</h1>
        <p className="text-gray-600">Theo dõi tiến bộ và đánh giá khả năng tiếng Anh của bạn</p>
      </div>

      {/* Current Level Overview */}
      <Card className="p-8 mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl mb-2">Trình độ hiện tại</h2>
            <p className="text-gray-600">Dựa trên đánh giá gần nhất</p>
          </div>
          <Badge className="text-lg px-4 py-2 bg-blue-600 text-white">
            {currentLevel.level}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overall Score */}
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
              <svg className="w-32 h-32 -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray={`${overallScore}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-blue-600">{overallScore}%</span>
              </div>
            </div>
            <h3>Điểm tổng</h3>
            <p className="text-sm text-gray-600">Đánh giá tổng thể</p>
          </div>

          {/* Skills Breakdown */}
          <div className="md:col-span-2">
            <h3 className="mb-4">Phân tích kỹ năng</h3>
            <div className="space-y-4">
              {Object.entries(skillLevels).map(([key, skill]) => {
                const SkillIcon = getSkillIcon(key);
                return (
                  <div key={key} className="flex items-center gap-4">
                    <div className="flex items-center gap-3 w-32">
                      <SkillIcon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                    <div className="flex-1">
                      <Progress value={skill.level} className="h-2" />
                    </div>
                    <span className={`text-sm w-12 ${getLevelColor(skill.level)}`}>
                      {skill.level}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Assessment History & Recommended Tests */}
        <div className="lg:col-span-2">
          {/* Recommended Assessments */}
          <Card className="p-6 mb-8">
            <h3 className="mb-4">Bài kiểm tra đề xuất</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedTests.map((test) => (
                <div key={test.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <test.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{test.name}</h4>
                      <p className="text-xs text-gray-600">{test.difficulty}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{test.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{test.questions} câu</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Bắt đầu kiểm tra
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Assessment History */}
          <Card className="p-6">
            <h3 className="mb-4">Lịch sử đánh giá</h3>
            <div className="space-y-4">
              {assessmentHistory.map((assessment) => (
                <div key={assessment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium">{assessment.name}</h4>
                      <p className="text-sm text-gray-600">{assessment.date}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg ${getLevelColor(assessment.score)}`}>
                        {assessment.score}%
                      </div>
                      <Badge variant="outline">{assessment.level}</Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
              {Object.entries(assessment.skills).map(([skill, score]) => (
                <div key={skill} className="flex justify-between">
                  <span className="text-gray-600 capitalize">{skillLevels[skill as keyof typeof skillLevels]?.name}:</span>
                  <span className={getLevelColor(score)}>{score}%</span>
                </div>
              ))}
            </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Progress Stats */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Thống kê tiến bộ</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Cải thiện</span>
                </div>
                <span className="text-sm text-green-600">+7% tháng này</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Mục tiêu</span>
                </div>
                <span className="text-sm text-blue-600">B2 Level</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">Xếp hạng</span>
                </div>
                <span className="text-sm text-purple-600">Top 25%</span>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 mb-6">
            <h3 className="mb-4">Thành tích</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    achievement.earned ? "bg-green-50" : "bg-gray-50"
                  }`}
                >
                  <div className={`p-1 rounded ${
                    achievement.earned ? "bg-green-100" : "bg-gray-200"
                  }`}>
                    {achievement.earned ? (
                      <CheckCircle className={`h-4 w-4 ${achievement.color}`} />
                    ) : (
                      <achievement.icon className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      achievement.earned ? "text-green-800" : "text-gray-700"
                    }`}>
                      {achievement.name}
                    </p>
                    <p className={`text-xs ${
                      achievement.earned ? "text-green-600" : "text-gray-500"
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="mb-4">Hành động nhanh</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Target className="h-4 w-4 mr-2" />
                Đặt mục tiêu mới
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Xem báo cáo chi tiết
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Award className="h-4 w-4 mr-2" />
                Xem chứng chỉ
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}