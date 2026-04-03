"use client";
import { useForm } from "react-hook-form";
import DefaultInput from "../inputs/defaultInput";
import EmailInput from "../inputs/emailInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message ?? "Credenciales inválidas ❌");
        return;
      }

      // Guardar en el contexto (también persiste en localStorage)
      login(result.access_token, result.user);

      router.push("/mainpanel");
    } catch (error) {
      console.error(error);
      alert("Error de conexión ❌");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg bg-gray-100 font-sans text-black font-medium"
    >
      <div className="form">
        <h2 className="label">
          Iniciar Sesión
          <hr className="hr" />
        </h2>

        {/* Email */}
        <div>
          <p>Email</p>
          <EmailInput
            {...register("email", {
              required: "Email requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
            placeholder="Correo electrónico"
            style="w-full rounded-xs"
          />
          {errors.email && (
            <span className="text-slate-400 text-xs">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div>
          <p>Contraseña</p>
          <DefaultInput
            type="password"
            {...register("password", { required: "Contraseña requerida" })}
            placeholder="Escribe tu contraseña"
            style="w-full rounded-xs border-2 border-slate-400"
          />
          {errors.password && (
            <span className="text-slate-400 text-xs">{errors.password.message}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-indigo-900 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <label>¿No tienes cuenta?</label>
        <Link href="/register">
          <button type="button" className="bg-slate-400 text-black px-4 py-2 rounded">
            Registrarse
          </button>
        </Link>
      </div>
    </form>
  );
}
