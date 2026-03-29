-- CreateTable
CREATE TABLE "Usuario" (
    "id" BIGSERIAL NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerfilUsuario" (
    "id" BIGSERIAL NOT NULL,
    "usuarioId" BIGINT NOT NULL,
    "pfp" TEXT NOT NULL,
    "id_empresa" BIGINT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "hora_entrada" TIMESTAMP(3) NOT NULL,
    "hora_salida" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PerfilUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" BIGSERIAL NOT NULL,
    "usuarioId" BIGINT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "esAtrasado" BOOLEAN NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PerfilUsuario_usuarioId_key" ON "PerfilUsuario"("usuarioId");

-- AddForeignKey
ALTER TABLE "PerfilUsuario" ADD CONSTRAINT "PerfilUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
