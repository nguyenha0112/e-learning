"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { RotateCcw, Volume2, ChevronLeft, ChevronRight } from "lucide-react";

interface VocabularyWord {
  word: string;
  pronunciation: string;
  definition: string;
  example: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  partOfSpeech: string;
}

const vocabularyData: VocabularyWord[] = [
  {
    word: "serendipity",
    pronunciation: "/ˌserənˈdipədē/",
    definition: "The occurrence and development of events by chance in a happy or beneficial way",
    example: "Meeting my best friend was pure serendipity.",
    difficulty: "advanced",
    partOfSpeech: "noun"
  },
  {
    word: "eloquent",
    pronunciation: "/ˈeləkwənt/",
    definition: "Fluent or persuasive in speaking or writing",
    example: "The speaker gave an eloquent presentation.",
    difficulty: "intermediate",
    partOfSpeech: "adjective"
  },
  {
    word: "perseverance",
    pronunciation: "/ˌpərsəˈvɪrəns/",
    definition: "Persistence in doing something despite difficulty or delay",
    example: "Her perseverance helped her succeed.",
    difficulty: "intermediate",
    partOfSpeech: "noun"
  },
  {
    word: "abundance",
    pronunciation: "/əˈbʌndəns/",
    definition: "A very large quantity of something",
    example: "There was an abundance of food at the party.",
    difficulty: "beginner",
    partOfSpeech: "noun"
  }
];

export function VocabularyCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownWords, setKnownWords] = useState<number[]>([]);

  const currentWord = vocabularyData[currentIndex];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % vocabularyData.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + vocabularyData.length) % vocabularyData.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const markAsKnown = () => {
    if (!knownWords.includes(currentIndex)) {
      setKnownWords([...knownWords, currentIndex]);
    }
    nextCard();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-3xl mb-2">Vocabulary Flashcards</h2>
        <p className="text-gray-600">
          Card {currentIndex + 1} of {vocabularyData.length} • {knownWords.length} words learned
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* Flashcard */}
        <div className="relative w-full max-w-lg mb-8">
          <Card 
            className={`h-80 p-8 cursor-pointer transition-all duration-300 transform ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={flipCard}
          >
            {!isFlipped ? (
              // Front of card
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Badge className={`mb-4 ${getDifficultyColor(currentWord.difficulty)}`}>
                  {currentWord.difficulty}
                </Badge>
                <h3 className="text-4xl mb-2">{currentWord.word}</h3>
                <p className="text-gray-600 mb-4">{currentWord.pronunciation}</p>
                <Badge variant="outline" className="mb-4">
                  {currentWord.partOfSpeech}
                </Badge>
                <p className="text-sm text-gray-500">Click to see definition</p>
              </div>
            ) : (
              // Back of card
              <div className="flex flex-col justify-center h-full">
                <h4 className="text-xl mb-4">Definition:</h4>
                <p className="mb-6">{currentWord.definition}</p>
                <h4 className="text-xl mb-2">Example:</h4>
                <p className="italic text-gray-700">"{currentWord.example}"</p>
              </div>
            )}
          </Card>
          
          {knownWords.includes(currentIndex) && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-sm">
              Known ✓
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={prevCard}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          
          <Button variant="outline" size="sm" onClick={flipCard}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Flip Card
          </Button>
          
          <Button variant="outline" size="sm">
            <Volume2 className="h-4 w-4 mr-1" />
            Pronounce
          </Button>
          
          <Button variant="outline" size="sm" onClick={nextCard}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={nextCard}
          >
            Need Practice
          </Button>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={markAsKnown}
          >
            I Know This
          </Button>
        </div>
      </div>
    </div>
  );
}