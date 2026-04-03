"use client";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import ButtonNavBar from "@/components/buttons/navbar";
import Caluga from "@/components/calugas/caluga";
import DefaultTable from "@/components/tables/DefaultTable";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// import "./page.css";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Asistencia = {
  id: number;
  usuarioId: string;
  fecha: string;
  tipo: string;
  esAtrasado: boolean;
};

// ─── Columnas ─────────────────────────────────────────────────────────────────

const columns: ColumnDef<Asistencia>[] = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "fecha",
    header: "Fecha y hora",
    cell: ({ getValue }) =>
      new Date(getValue<string>()).toLocaleString("es-CL"),
  },
  { accessorKey: "tipo", header: "Tipo" },
  {
    accessorKey: "esAtrasado",
    header: "Atrasado",
    cell: ({ getValue }) => (getValue<boolean>() ? "⚠️ Sí" : "✅ No"),
  },
];

// ─── Componente interno (ya sabe que hay sesión) ──────────────────────────────

function MainPanelContent() {
  const { user, token, logout } = useAuth();
  const router = useRouter();

  const [asistencias, setAsistencias] = useState<Asistencia[]>([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState<string | null>(null);
  const [registrando, setRegistrando] = useState(false);

  useEffect(() => {
    fetchAsistencias();
  }, []);

  // Trae solo las asistencias del usuario logueado
  const fetchAsistencias = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://minguipc:3000/assistance/usuario/${user!.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!response.ok) throw new Error("Error al obtener asistencias");
      const data = await response.json();
      setAsistencias(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Registra entrada o salida con la hora actual del sistema
  const registrarAsistencia = async (tipo: "entrada" | "salida") => {
    setRegistrando(true);
    try {
      const ahora = new Date().toISOString(); // hora actual del sistema

      const response = await fetch("http://localhost:3000/assistance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          usuarioId: user!.id,
          fecha: ahora,
          tipo,
          esAtrasado: false,
        }),
      });

      if (!response.ok) throw new Error("Error al registrar asistencia");

      // Recargar tabla tras registrar
      await fetchAsistencias();
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setRegistrando(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // ── Estadísticas ─────────────────────────────────────────────────────────
  const entradas  = asistencias.filter((a) => a.tipo === "entrada").length;
  const salidas   = asistencias.filter((a) => a.tipo === "salida").length;
  const atrasados = asistencias.filter((a) => a.esAtrasado).length;

  return (
    <div className="main h-screen w-screen bg-slate-300 font-sans grid grid-cols-10 grid-rows-12">
      {/* Header */}
      <div className="bg-indigo-900 text-4xl header flex justify-between items-center px-8 col-start-1 row-start-1 col-span-10 row-span-1">
        <p>AssistanceMGMT</p>
        <button
          onClick={handleLogout}
          className="text-sm bg-white text-indigo-900 px-4 py-2 rounded hover:bg-indigo-100 transition-colors"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Sidebar */}
      <div className="bg-gray-400 navegacion col-start-1 row-start-2 col-span-2 row-span-11">
        <div className="navegacionBtn">
          <ButtonNavBar to="mainpanel" label="Inicio" />
        </div>
        <div className="navegacionBtn">
          <ButtonNavBar to="login" label="Login" />
        </div>
      </div>

      {/* Panel principal */}
      <div className="panel p-6 space-y-6 col-start-3 row-start-2 col-span-8 row-span-11 grid grid-cols-1">
        {/* Bienvenida */}
        <h2 className="text-2xl font-bold text-white">
          Bienvenido, {user?.nombre_usuario} 👋
        </h2>

        {/* Botones de marca */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => registrarAsistencia("entrada")}
            disabled={registrando}
            className="bg-slate-400 text-slate-950 px-6 py-3 rounded font-semibold hover:scale-105 transition-transform disabled:opacity-50"
          >
            🟢 Registrar Entrada
          </button>
          <button
            onClick={() => registrarAsistencia("salida")}
            disabled={registrando}
            className="bg-indigo-900 text-white px-6 py-3 rounded font-semibold hover:scale-105 transition-transform disabled:opacity-50"
          >
            🔴 Registrar Salida
          </button>
          {registrando && (
            <span className="text-white text-sm animate-pulse">Registrando...</span>
          )}
        </div>

        {/* Hora actual visible */}
        <p className="text-slate-950 text-sm">
          Hora del sistema:{" "}
          <strong>{new Date().toLocaleString("es-CL")}</strong>
          {" "}— se usará al marcar entrada/salida.
        </p>

        {/* Calugas */}
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <Caluga label="Hora Promedio entrada"  valor={String(entradas)} />
          <Caluga label="Hora Promedio salidas"   valor={String(salidas)} />
          <Caluga label="Atrasados" valor={String(atrasados)} />
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-slate-800">
              Mis Asistencias
            </h3>
            <button
              onClick={fetchAsistencias}
              className="text-sm text-indigo-900 hover:underline"
            >
              🔄 Actualizar
            </button>
          </div>

          {loading && (
            <p className="text-slate-500 text-sm">Cargando asistencias...</p>
          )}
          {error && (
            <p className="text-red-500 text-sm">Error: {error}</p>
          )}
          {!loading && !error && (
            <DefaultTable
              data={asistencias}
              columns={columns}
              enableSorting
              enablePagination
              pageSize={8}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Export: envuelto en ProtectedRoute ───────────────────────────────────────

export default function MainPanel() {
  return (
    <ProtectedRoute>
      <MainPanelContent />
    </ProtectedRoute>
  );
}
