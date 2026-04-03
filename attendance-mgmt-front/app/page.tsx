"use client"
import Link from "next/link";
import Circle from "@/public/landing/circle.svg"
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#080c18] text-white font-sans overflow-x-hidden">
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Syne', sans-serif; }

        .grain::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 100;
          opacity: 0.35;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.18;
          pointer-events: none;
        }

        .feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 2rem;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .feature-card:hover {
          background: rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-4px);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.22s; }
        .delay-3 { animation-delay: 0.34s; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #4f46e5; color: #fff;
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.9rem; letter-spacing: 0.04em;
          padding: 14px 28px; border-radius: 8px; border: none;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          background: #4338ca; transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(79,70,229,0.4);
        }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #a5b4fc;
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.9rem; letter-spacing: 0.04em;
          padding: 14px 28px; border-radius: 8px;
          border: 1px solid rgba(165,180,252,0.3);
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost:hover {
          border-color: #a5b4fc;
          background: rgba(165,180,252,0.05);
        }

        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.3);
          color: #a5b4fc; font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 100px;
        }

        .h-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        }

        .stat-num {
          font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800;
          background: linear-gradient(135deg, #fff 30%, #a5b4fc);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 60px;
          background: rgba(8,12,24,0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        @media (max-width: 768px) {
          nav { padding: 16px 24px; }
          .hero-title { font-size: 2.75rem !important; }
          .hero-section { padding: 140px 24px 80px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .nav-links { display: none !important; }
          .section-pad { padding: 60px 24px !important; }
          .cta-pad { padding: 48px 24px !important; }
        }
      `}</style>

      <div className="grain" />

      {/* NAV */}
      <nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: "#4f46e5", borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.85rem", fontWeight: 800, fontFamily: "Syne, sans-serif",
          }}>A</div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.02em" }}>
            AssistanceMGMT
          </span>
        </div>

        <div className="nav-links" style={{ display: "flex", gap: 36 }}>
          {["Funciones", "Beneficios", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: "rgba(255,255,255,0.5)", fontSize: "0.875rem",
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >{item}</a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/login"    className="btn-ghost"   style={{ padding: "10px 20px", fontSize: "0.82rem" }}>Iniciar sesión</Link>
          <Link href="/register" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.82rem" }}>Comenzar →</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" style={{
        position: "relative", padding: "160px 60px 100px",
        maxWidth: 1100, margin: "0 auto",
      }}>
        <div className="blob" style={{ width: 600, height: 600, background: "#4f46e5", top: -100, left: -200 }} />
        <div className="blob" style={{ width: 400, height: 400, background: "#7c3aed", top: 100, right: -100 }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="badge fade-up" style={{ marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            Control de asistencia inteligente
          </div>

          <h1 className="font-display hero-title fade-up delay-1" style={{
            fontSize: "4.5rem", fontWeight: 800, lineHeight: 1.05,
            letterSpacing: "-0.03em", marginBottom: 28, maxWidth: 680,
          }}>
            Tu equipo,{" "}
            <span style={{
              background: "linear-gradient(135deg, #a5b4fc, #818cf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              siempre en punto.
            </span>
          </h1>

          <p className="fade-up delay-2" style={{
            color: "rgba(255,255,255,0.5)", fontSize: "1.15rem", lineHeight: 1.7,
            maxWidth: 520, marginBottom: 44, fontWeight: 300,
          }}>
            Registra entradas y salidas, detecta atrasos automáticamente, gestiona tus documents, obtén estadísticas en tiempo real y más, todo desde un solo panel.
          </p>

          <div className="fade-up delay-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/register" className="btn-primary">Crear cuenta gratis →</Link>
            <Link href="/login"    className="btn-ghost">Iniciar sesión</Link>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div className="h-line" />
      </div>

      {/* STATS */}
      <section className="section-pad" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 60px" }}>
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
          {[
            { num: "99.9%", label: "Uptime garantizado" },
            { num: "<1s",   label: "Tiempo de registro" },
            { num: "∞",     label: "Historial de asistencia" },
            { num: "100%",  label: "Precisión de datos" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="stat-num">{num}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>
        <div className="h-line" />
      </div>

      {/* FEATURES */}
      <section id="funciones" className="section-pad" style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="badge" style={{ marginBottom: 20 }}>Funciones</div>
          <h2 className="font-display" style={{
            fontSize: "2.75rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 480,
          }}>
            Todo lo que necesitas,<br />nada más.
          </h2>
        </div>

        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {[
            { icon: "/landing/circle.svg", title: "Registro en un clic",       desc: "Marca entrada o salida con un solo botón. La hora del sistema queda registrada de forma automática e inmutable." },
            { icon: "/landing/alert.svg", title: "Detección de atrasos",      desc: "Compara la hora de entrada con el horario asignado al usuario y marca automáticamente si llegó tarde." },
            { icon: "/landing/graphup.svg", title: "Estadísticas en tiempo real",desc: "Promedio de entrada, promedio de salida y conteo de atrasos actualizados con cada registro." },
            { icon: "/landing/lock.svg", title: "Autenticación segura",       desc: "Acceso protegido con JWT. Cada usuario ve únicamente sus propios datos de asistencia." },
            { icon: "/landing/notes.svg", title: "Historial completo",         desc: "Filtra, ordena y pagina todos tus registros. Busca cualquier día en segundos." },
            { icon: "/landing/user.svg", title: "Perfil por empleado",        desc: "Cada usuario tiene su horario esperado configurado. El sistema valida en base a eso, de forma individual." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div style={{ marginBottom: 14 }}>
                <img src={icon} alt={title} style={{ width: "1.75rem", height: "1.75rem" }} />
              </div>
              <h3 className="font-display" style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 10 }}>{title}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ maxWidth: 1100, margin: "0 auto 100px", padding: "0 60px" }}>
        <div className="cta-pad" style={{
          background: "linear-gradient(135deg, rgba(79,70,229,0.2), rgba(124,58,237,0.1))",
          border: "1px solid rgba(99,102,241,0.25)",
          borderRadius: 24, padding: "80px 60px",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div className="blob" style={{ width: 400, height: 400, background: "#4f46e5", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.12 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="font-display" style={{ fontSize: "2.75rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Empieza hoy, gratis.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: 420, margin: "0 auto 40px" }}>
              Crea tu cuenta en menos de un minuto y comienza a gestionar la asistencia de tu equipo.
            </p>
            <Link href="/register" className="btn-primary" style={{ fontSize: "1rem", padding: "16px 36px" }}>
              Crear cuenta gratis →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 60px", display: "flex",
        justifyContent: "space-between", alignItems: "center",
        maxWidth: 1100, margin: "0 auto", flexWrap: "wrap", gap: 12,
      }}>
        <span className="font-display" style={{ fontWeight: 700, fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>
          AssistanceMGMT
        </span>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} — Todos los derechos reservados
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "Inicio",    href: "/" },
            { label: "Login",     href: "/login" },
            { label: "Registro",  href: "/register" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{
              color: "rgba(255,255,255,0.3)", fontSize: "0.8rem",
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >{label}</Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
