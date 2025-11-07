"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { CheckCircle, Circle, BookOpen, ChevronRight } from "lucide-react";

interface GrammarLesson {
  id: number;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  completed: boolean;
  content: {
    explanation: string;
    examples: string[];
    rules: string[];
  };
}

const grammarLessons: GrammarLesson[] = [
  {
    id: 1,
    title: "Present Perfect Tense",
    description: "Learn when and how to use present perfect tense",
    difficulty: "intermediate",
    completed: true,
    content: {
      explanation: "The present perfect tense is used to describe actions that happened at an unspecified time before now, or actions that started in the past and continue to the present.",
      examples: [
        "I have lived in this city for five years.",
        "She has just finished her homework.",
        "They have never been to Paris."
      ],
      rules: [
        "Form: have/has + past participle",
        "Use with 'just', 'already', 'yet', 'ever', 'never'",
        "Use for experiences without specific time",
        "Use for actions continuing to present"
      ]
    }
  },
  {
    id: 2,
    title: "Conditional Sentences",
    description: "Master first, second, and third conditional structures",
    difficulty: "advanced",
    completed: false,
    content: {
      explanation: "Conditional sentences express situations that depend on a certain condition. There are four main types: zero, first, second, and third conditionals.",
      examples: [
        "If it rains, I will stay home. (First conditional)",
        "If I were rich, I would travel the world. (Second conditional)",
        "If I had studied harder, I would have passed. (Third conditional)"
      ],
      rules: [
        "First conditional: If + present simple, will + base verb",
        "Second conditional: If + past simple, would + base verb", 
        "Third conditional: If + past perfect, would have + past participle",
        "Zero conditional: If + present simple, present simple"
      ]
    }
  },
  {
    id: 3,
    title: "Articles (a, an, the)",
    description: "Understanding when to use definite and indefinite articles",
    difficulty: "beginner",
    completed: true,
    content: {
      explanation: "Articles are words that define a noun as specific or unspecific. 'A' and 'an' are indefinite articles, while 'the' is the definite article.",
      examples: [
        "I saw a dog in the park. (first mention, then specific)",
        "An apple a day keeps the doctor away.",
        "The sun rises in the east."
      ],
      rules: [
        "Use 'a' before consonant sounds",
        "Use 'an' before vowel sounds",
        "Use 'the' for specific/known items",
        "No article for general plural or uncountable nouns"
      ]
    }
  },
  {
    id: 4,
    title: "Modal Verbs",
    description: "Express ability, possibility, permission, and obligation",
    difficulty: "intermediate",
    completed: false,
    content: {
      explanation: "Modal verbs are auxiliary verbs that express necessity, possibility, permission, or ability. They include can, could, may, might, must, shall, should, will, would.",
      examples: [
        "I can speak three languages. (ability)",
        "You must complete this assignment. (obligation)",
        "It might rain tomorrow. (possibility)"
      ],
      rules: [
        "Modal + base form of verb (no 'to')",
        "No -s in third person singular",
        "Use 'not' after modal for negatives",
        "Invert modal and subject for questions"
      ]
    }
  }
];

export function GrammarLessons() {
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);
  
  const completedLessons = grammarLessons.filter(lesson => lesson.completed).length;
  const progressPercentage = (completedLessons / grammarLessons.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (selectedLesson) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedLesson(null)}
            className="mb-4"
          >
            ← Back to Lessons
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl">{selectedLesson.title}</h2>
            <Badge className={getDifficultyColor(selectedLesson.difficulty)}>
              {selectedLesson.difficulty}
            </Badge>
          </div>
          <p className="text-gray-600">{selectedLesson.description}</p>
        </div>

        <Card className="p-8">
          <div className="mb-6">
            <h3 className="text-xl mb-4">Explanation</h3>
            <p className="leading-relaxed">{selectedLesson.content.explanation}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-4">Key Rules</h3>
            <ul className="space-y-2">
              {selectedLesson.content.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl mb-4">Examples</h3>
            <div className="space-y-3">
              {selectedLesson.content.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="italic">"{example}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Practice Exercises
            </Button>
            <Button variant="outline">
              Mark as Complete
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl mb-2">Grammar Lessons</h2>
        <p className="text-gray-600 mb-4">Master English grammar step by step</p>
        
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span>Overall Progress</span>
            <span>{completedLessons}/{grammarLessons.length} completed</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </Card>
      </div>

      <div className="grid gap-4">
        {grammarLessons.map((lesson) => (
          <Card 
            key={lesson.id} 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedLesson(lesson)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {lesson.completed ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-400" />
                )}
                
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg">{lesson.title}</h3>
                    <Badge className={getDifficultyColor(lesson.difficulty)}>
                      {lesson.difficulty}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{lesson.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gray-400" />
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}