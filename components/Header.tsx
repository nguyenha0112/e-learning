"use client";
import { Button } from "./ui/button";
import { BookOpen, User, Settings } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">EnglishMaster</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Vocabulary
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Grammar
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Practice
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Progress
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}