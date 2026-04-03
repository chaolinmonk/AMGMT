import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserprofileDto } from './dto/create-userprofile.dto';
import { UpdateUserprofileDto } from './dto/update-userprofile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserprofileService {
  constructor(private prisma: PrismaService) {}

  async create(createUserprofileDto: CreateUserprofileDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: createUserprofileDto.usuarioId },
    });
    if (!usuario) throw new NotFoundException(`Usuario #${createUserprofileDto.usuarioId} no existe`);

    return this.prisma.perfilUsuario.create({
      data: createUserprofileDto,
    });
  }

  findAll() {
    return this.prisma.perfilUsuario.findMany({
      include: { usuario: true },
    });
  }

  async findOne(id: number) {
    const perfil = await this.prisma.perfilUsuario.findUnique({
      where: { id },
      include: { usuario: true },
    });
    if (!perfil) throw new NotFoundException(`Perfil #${id} no encontrado`);
    return perfil;
  }

  async findByUsuario(usuarioId: number) {
    const perfil = await this.prisma.perfilUsuario.findUnique({
      where: { usuarioId },
      include: { usuario: true },
    });
    if (!perfil) throw new NotFoundException(`Perfil del usuario #${usuarioId} no encontrado`);
    return perfil;
  }

  async update(id: number, updateUserprofileDto: UpdateUserprofileDto) {
    await this.findOne(id);
    return this.prisma.perfilUsuario.update({
      where: { id },
      data: updateUserprofileDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.perfilUsuario.delete({
      where: { id },
    });
  }
}