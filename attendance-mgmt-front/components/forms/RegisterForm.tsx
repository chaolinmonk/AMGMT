import { useForm } from "react-hook-form";
import DefaultInput from "../inputs/defaultInput";
import EmailInput from "../inputs/emailInput";
import Link from "next/link";

type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>();

  const password = watch("password");

  const rules = [
    { label: "mayúscula", regex: /[A-Z]/ },
    { label: "número", regex: /[0-9]/ },
    { label: "símbolo", regex: /[^A-Za-z0-9]/ }
  ];

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const validatePassword = (value: string) => {
    if (value.length < 8) return "Mínimo 8 caracteres";

    for (let rule of rules) {
      if (!rule.regex.test(value)) {
        return `Debe contener ${rule.label}`;
      }
    }

    return true;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="col-start-3 col-span-2 row-start-2 row-span-3 rounded-lg bg-gray-100 
      flex justify-center
      font-sans text-black font-medium"
    >
      <div className="w-4/5 grid grid-cols-1 grid-rows-6">
        <div className="row-span-1 flex items-center justify-center">
          Registrarse
        </div>

        {/* Nombre */}
        <div className="row-span-1 flex flex-col justify-center">
          <p className=" h-20">Nombre</p>
          <div className="flex justify-center h-50">
            <DefaultInput
              {...register("nombre", { required: "Nombre requerido" })}
              placeholder="Escribe tu nombre"
              style="rounded-xs border-2 border-slate-400 w-1/1"
            />
          </div>
          {errors.nombre && <span className="text-slate-400 text-xs h-30">{errors.nombre.message}</span>}
        </div>

        {/* Apellido */}
        <div className="row-span-1 flex flex-col justify-center">
          <p className=" h-20">Apellido</p>
          <div className="flex justify-center h-50">
            <DefaultInput
              {...register("apellido", { required: "Apellido requerido" })}
              placeholder="Escribe tu apellido"
              style=" rounded-xs border-2 border-slate-400 w-1/1"
            />
          </div>
          {errors.apellido && <span className="text-slate-400 text-xs h-30">{errors.apellido.message}</span>}
        </div>

        {/* Email */}
        <div className="row-span-1 flex flex-col justify-center">
          <p className=" h-20">Email</p>
          <div className="flex justify-center h-50">
            <EmailInput
              {...register("email", {
                required: "Email requerido",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido"
                }
              })}
              placeholder="tu Email con @"
              style="w-1/1 rounded-xs"
            />
          </div>
          {errors.email && <span className=" text-slate-400 text-xs h-30">{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div className="row-span-1 flex flex-col justify-center">
          <p className=" h-20">Contraseña</p>
          <div className="flex justify-center h-50">
            <DefaultInput
              type="password"
              {...register("password", {
                validate: validatePassword
              })}
              placeholder="Escribe tu contraseña"
              style={` w-1/1 rounded-xs border-2 ${
                errors.password ? "border-red-500" : "border-slate-400"
              }`}
            />
          </div>
          {errors.password && <span className=" text-slate-400 text-xs h-30">{errors.password.message}</span>}
        </div>

        {/* Submit */}
        <div className="flex justify-evenly items-center">
          <button
            type="submit"
            className="bg-indigo-900 text-white px-4 py-2 rounded"
          >
            Registrarse
          </button>
          <Link href="/login">
            <button
              className="bg-slate-400 text-black px-4 py-2 rounded"
              >
              Ya tengo cuenta
            </button>
          </Link>
        </div>
      </div>

    </form>
  );
}