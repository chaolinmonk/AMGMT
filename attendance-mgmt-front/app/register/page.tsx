"use client"
import RegisterForm from "@/components/forms/RegisterForm";
export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 h-screen gap-2">
        <div className="row-span-1 col-span-6 bg-indigo-900 text-4xl nav">
        <p>AssistanceMGMT</p>
      </div>
      <RegisterForm/>
    </div>
  );
}
