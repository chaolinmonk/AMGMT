"use client";
import { useForm } from "react-hook-form";
import DefaultInput from "../inputs/defaultInput";
import EmailInput from "../inputs/emailInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
};

const rules = [
  { label: "mayúscula", regex: /[A-Z]/ },
  { label: "número", regex: /[0-9]/ },
  { label: "símbolo", regex: /[^A-Za-z0-9]/ },
];

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const validatePassword = (value: string) => {
    if (value.length < 8) return "Mínimo 8 caracteres";
    for (const rule of rules) {
      if (!rule.regex.test(value)) return `Debe contener ${rule.label}`;
    }
    return true;
  };

  const onSubmit = async (data: FormData) => {
    const payload = {
      nombre_usuario: `${data.nombre} ${data.apellido}`,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message ?? "Error al registrar ❌");
        return;
      }

      alert("Usuario registrado correctamente 🚀");
      router.push("/login");
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
        <h2 className="label">Registrar Usuario</h2>
        <hr className="hr" />

        {/* Nombre */}
        <div>
          <p>Nombre</p>
          <DefaultInput
            {...register("nombre", { required: "Nombre requerido" })}
            placeholder="Escribe tu nombre"
            style="rounded-xs border-2 border-slate-400 w-full"
          />
          {errors.nombre && (
            <span className="text-slate-400 text-xs">{errors.nombre.message}</span>
          )}
        </div>

        {/* Apellido */}
        <div>
          <p>Apellido</p>
          <DefaultInput
            {...register("apellido", { required: "Apellido requerido" })}
            placeholder="Escribe tu apellido"
            style="rounded-xs border-2 border-slate-400 w-full"
          />
          {errors.apellido && (
            <span className="text-slate-400 text-xs">{errors.apellido.message}</span>
          )}
        </div>

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
            {...register("password", { validate: validatePassword })}
            placeholder="Escribe tu contraseña"
            style="rounded-xs border-2 border-slate-400 w-full"
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
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>

        <label>¿Ya tienes cuenta?</label>
        <Link href="/login">
          <button type="button" className="bg-slate-400 text-black px-4 py-2 rounded">
            Iniciar sesión
          </button>
        </Link>
      </div>
    </form>
  );
}
