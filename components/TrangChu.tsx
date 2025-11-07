"use client";
import { useState, useEffect } from "react";
import { StudyEngEraHeader } from "./StudyEngEraHeader";
import { AIChatBot } from "./AIChatBot";
import Footer from "./Footer";
import { Dashboard } from "./Dashboard";
import { useAuth } from "./AuthContext";
import { GuestWelcome } from "./GuestWelcome";

export function TrangChu() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <StudyEngEraHeader />
      {isAuthenticated ? <Dashboard /> : <GuestWelcome />}
      <Footer />
      <AIChatBot />
    </div>
  );
}