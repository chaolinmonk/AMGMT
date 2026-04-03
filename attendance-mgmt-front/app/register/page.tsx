"use client"
import RegisterForm from "@/components/forms/RegisterForm";
import './register.css'
export default function Home() {
  
  
  return (
    <div className="">
        <div className=" bg-indigo-900 header">
        <p>AssistanceMGMT</p>
      </div>
      <div className="main">
      <div className="">
      <RegisterForm/>
    </div>
     </div>
    </div>
  );
}
