
"use client";
import { useAuth } from "@/components/AuthContext";
import { Dashboard } from "@/components/Dashboard";
import { GuestWelcome } from "@/components/GuestWelcome";


export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard /> : <GuestWelcome />;
}