"use client"
import LoginForm from "@/components/forms/LoginForm";
import './login.css'

export default function Home() {
  return (
    <div className="">
        <div className=" bg-indigo-900 header">
        <p>AssistanceMGMT</p>
      </div>
      <div className="main">
      <div className="">
        <LoginForm/>
      </div>
    </div>
    </div>
  );
}
