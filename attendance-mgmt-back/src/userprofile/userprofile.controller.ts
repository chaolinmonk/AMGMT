import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserprofileService } from './userprofile.service';
import { CreateUserprofileDto } from './dto/create-userprofile.dto';
import { UpdateUserprofileDto } from './dto/update-userprofile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('userprofile')
@Controller('userprofile')
export class UserprofileController {
  constructor(private readonly userprofileService: UserprofileService) {}

  @Post()
  @ApiOperation({ summary: 'Crear perfil de usuario' })
  create(@Body() createUserprofileDto: CreateUserprofileDto) {
    return this.userprofileService.create(createUserprofileDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los perfiles' })
  findAll() {
    return this.userprofileService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener perfil por ID' })
  findOne(@Param('id') id: string) {
    return this.userprofileService.findOne(+id);
  }

  @Get('usuario/:usuarioId')
  @ApiOperation({ summary: 'Obtener perfil por ID de usuario' })
  findByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.userprofileService.findByUsuario(+usuarioId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar perfil' })
  update(@Param('id') id: string, @Body() updateUserprofileDto: UpdateUserprofileDto) {
    return this.userprofileService.update(+id, updateUserprofileDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar perfil' })
  remove(@Param('id') id: string) {
    return this.userprofileService.remove(+id);
  }
}