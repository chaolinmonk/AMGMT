"use client"
import LoginForm from "@/components/forms/LoginForm";
export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 h-screen gap-2">
      <LoginForm/>
    </div>
  );
}
