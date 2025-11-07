"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which sentence uses the present perfect tense correctly?",
    options: [
      "I have seen this movie yesterday.",
      "I have seen this movie before.",
      "I have see this movie before.",
      "I had seen this movie before."
    ],
    correctAnswer: 1,
    explanation: "Present perfect is used for experiences without specific time. 'Before' indicates an unspecified past time.",
    category: "Grammar"
  },
  {
    id: 2,
    question: "What does 'serendipity' mean?",
    options: [
      "A type of music",
      "Happy accident or fortunate discovery",
      "A feeling of sadness",
      "A scientific method"
    ],
    correctAnswer: 1,
    explanation: "Serendipity refers to pleasant surprises or fortunate discoveries that happen by chance.",
    category: "Vocabulary"
  },
  {
    id: 3,
    question: "Choose the correct conditional sentence:",
    options: [
      "If I will have money, I buy a car.",
      "If I have money, I will buy a car.",
      "If I would have money, I buy a car.",
      "If I had money, I will buy a car."
    ],
    correctAnswer: 1,
    explanation: "First conditional uses: If + present simple, will + base verb. This expresses a likely future situation.",
    category: "Grammar"
  },
  {
    id: 4,
    question: "Which article is correct: '__ honest person'?",
    options: [
      "a",
      "an",
      "the",
      "no article"
    ],
    correctAnswer: 1,
    explanation: "Use 'an' before words that start with a vowel sound. 'Honest' starts with a silent 'h', so it has a vowel sound.",
    category: "Grammar"
  },
  {
    id: 5,
    question: "What does 'eloquent' mean?",
    options: [
      "Difficult to understand",
      "Speaking or writing in a fluent, persuasive manner",
      "Very quiet",
      "Full of mistakes"
    ],
    correctAnswer: 1,
    explanation: "Eloquent describes someone who speaks or writes in a clear, expressive, and persuasive way.",
    category: "Vocabulary"
  }
];

export function PracticeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(30);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(30);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getScoreColor = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  if (quizCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="p-8 text-center">
          <h2 className="text-3xl mb-4">Quiz Complete!</h2>
          <div className={`text-6xl mb-4 ${getScoreColor()}`}>
            {score}/{quizQuestions.length}
          </div>
          <p className="text-xl mb-6">
            You scored {Math.round((score / quizQuestions.length) * 100)}%
          </p>
          
          <div className="mb-6">
            {score === quizQuestions.length && (
              <Badge className="bg-green-100 text-green-800 text-lg p-2">
                Perfect Score! 🎉
              </Badge>
            )}
            {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && (
              <Badge className="bg-yellow-100 text-yellow-800 text-lg p-2">
                Great Job! 👏
              </Badge>
            )}
            {score < quizQuestions.length * 0.8 && (
              <Badge className="bg-blue-100 text-blue-800 text-lg p-2">
                Keep Practicing! 💪
              </Badge>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
              Try Again
            </Button>
            <Button variant="outline">
              Review Answers
            </Button>
            <Button variant="outline">
              Back to Dashboard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl">Practice Quiz</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{timeLeft}s</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <Progress value={progress} className="flex-1 h-2" />
          <span className="text-sm text-gray-600">
            Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
          </span>
        </div>
      </div>

      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">{question.category}</Badge>
          <h3 className="text-xl mb-6">{question.question}</h3>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border transition-all ${
                selectedAnswer === index
                  ? showResult
                    ? index === question.correctAnswer
                      ? "bg-green-100 border-green-500 text-green-800"
                      : "bg-red-100 border-red-500 text-red-800"
                    : "bg-blue-100 border-blue-500"
                  : showResult && index === question.correctAnswer
                  ? "bg-green-100 border-green-500 text-green-800"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                {showResult && (
                  <>
                    {index === question.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {selectedAnswer === index && index !== question.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </>
                )}
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="mb-2">Explanation:</h4>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-center">
          {!showResult ? (
            <Button 
              onClick={handleSubmitAnswer} 
              disabled={selectedAnswer === null}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Submit Answer
            </Button>
          ) : (
            <div className="text-center">
              <p className="text-gray-600">
                {currentQuestion < quizQuestions.length - 1 
                  ? "Moving to next question..." 
                  : "Calculating final score..."
                }
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}