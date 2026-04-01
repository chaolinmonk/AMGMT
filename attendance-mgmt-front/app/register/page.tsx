"use client"
import RegisterForm from "@/components/forms/RegisterForm";
export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 h-screen gap-2">
      <RegisterForm/>
    </div>
  );
}
