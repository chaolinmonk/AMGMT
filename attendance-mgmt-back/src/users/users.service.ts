import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
  const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  return this.prisma.usuario.create({
    data: { ...createUserDto, password: hashedPassword },
  });
}

  findAll() {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!user) throw new NotFoundException(`Usuario #${id} no encontrado`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id); // valida que existe
    return this.prisma.usuario.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // valida que existe
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}