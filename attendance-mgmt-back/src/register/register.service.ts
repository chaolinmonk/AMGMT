import { Injectable, ConflictException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {
  constructor(private prisma: PrismaService) {}

  async create(createRegisterDto: CreateRegisterDto) {
    const { nombre_usuario, email, password, nombre, apellido } = createRegisterDto;

    // Verificar si el email ya existe
    const usuarioExistente = await this.prisma.usuario.findUnique({ where: { email } });
    if (usuarioExistente) throw new ConflictException('El email ya está registrado');

    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario y perfil en una sola transacción
    const resultado = await this.prisma.$transaction(async (tx) => {
      const usuario = await tx.usuario.create({
        data: {
          nombre_usuario,
          email,
          password: hashedPassword,
        },
      });

      const perfil = await tx.perfilUsuario.create({
        data: {
          usuarioId: usuario.id,
          nombre,
          apellido,
          pfp: '',
          id_empresa: BigInt(0),
          hora_entrada: new Date(),
          hora_salida: new Date(),
        },
      });

      return { usuario, perfil };
    });

    return {
      id: resultado.usuario.id.toString(),
      nombre_usuario: resultado.usuario.nombre_usuario,
      email: resultado.usuario.email,
      nombre: resultado.perfil.nombre,
      apellido: resultado.perfil.apellido,
    };
  }
}