"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { BookOpen, Brain, Target, Trophy, ChevronRight } from "lucide-react";

export function Dashboard() {
  const todayProgress = 65;
  const weeklyGoal = 7;
  const completedDays = 4;

  const studyOptions = [
    {
      title: "Vocabulary Builder",
      description: "Learn new words with interactive flashcards",
      icon: BookOpen,
      color: "bg-blue-500",
      progress: 75
    },
    {
      title: "Grammar Lessons",
      description: "Master English grammar rules step by step", 
      icon: Brain,
      color: "bg-green-500",
      progress: 60
    },
    {
      title: "Practice Quiz",
      description: "Test your knowledge with mixed exercises",
      icon: Target,
      color: "bg-purple-500", 
      progress: 45
    },
    {
      title: "Speaking Practice",
      description: "Improve pronunciation and fluency",
      icon: Trophy,
      color: "bg-orange-500",
      progress: 30
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl mb-2">Welcome back!</h2>
        <p className="text-gray-600">Continue your English learning journey</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="mb-2">Today's Progress</h3>
          <div className="mb-2">
            <Progress value={todayProgress} className="h-2" />
          </div>
          <p className="text-sm text-gray-600">{todayProgress}% complete</p>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2">Weekly Streak</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{completedDays}</span>
            <span className="text-gray-600">/ {weeklyGoal} days</span>
          </div>
          <p className="text-sm text-gray-600">Keep it up!</p>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2">Words Learned</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">248</span>
            <span className="text-sm text-green-600">+12 today</span>
          </div>
          <p className="text-sm text-gray-600">Total vocabulary</p>
        </Card>
      </div>

      {/* Study Options */}
      <div className="mb-8">
        <h3 className="text-2xl mb-6">What would you like to study?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyOptions.map((option, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${option.color} p-2 rounded-lg`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{option.title}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mb-3">
                <Progress value={option.progress} className="h-2" />
              </div>
              <p className="text-sm text-gray-600">{option.progress}% progress</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Continue Learning
        </Button>
        <Button variant="outline">
          Review Mistakes
        </Button>
        <Button variant="outline">
          Daily Challenge
        </Button>
      </div>
    </div>
  );
}