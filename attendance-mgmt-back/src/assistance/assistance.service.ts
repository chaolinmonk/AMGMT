import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssistanceDto } from './dto/create-assistance.dto';
import { UpdateAssistanceDto } from './dto/update-assistance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssistanceService {
  constructor(private prisma: PrismaService) {}

  c
  async create(createAssistanceDto: CreateAssistanceDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: createAssistanceDto.usuarioId },
    });
    if (!usuario) throw new NotFoundException(`Usuario #${createAssistanceDto.usuarioId} no existe`);

    return this.prisma.asistencia.create({
      data: createAssistanceDto,
    });
  }

  findAll() {
    return this.prisma.asistencia.findMany({
      include: { usuario: true },
    });
  }

  async findOne(id: number) {
    const asistencia = await this.prisma.asistencia.findUnique({
      where: { id },
      include: { usuario: true },
    });
    if (!asistencia) throw new NotFoundException(`Asistencia #${id} no encontrada`);
    return asistencia;
  }

  async findByUsuario(usuarioId: number) {
    return this.prisma.asistencia.findMany({
      where: { usuarioId },
      orderBy: { fecha: 'desc' },
    });
  }

  async update(id: number, updateAssistanceDto: UpdateAssistanceDto) {
    await this.findOne(id);
    return this.prisma.asistencia.update({
      where: { id },
      data: updateAssistanceDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.asistencia.delete({
      where: { id },
    });
  }
}