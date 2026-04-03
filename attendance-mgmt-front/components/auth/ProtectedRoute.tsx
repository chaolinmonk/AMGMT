"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-screen items-center justify-center bg-indigo-900">
        <p className="text-white text-xl animate-pulse">Cargando...</p>
      </div>
    );
  }

  if (!user) return null; // evita flash antes del redirect

  return <>{children}</>;
}
