import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssistanceService } from './assistance.service';
import { CreateAssistanceDto } from './dto/create-assistance.dto';
import { UpdateAssistanceDto } from './dto/update-assistance.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('assistance')
@Controller('assistance')
export class AssistanceController {
  constructor(private readonly assistanceService: AssistanceService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar asistencia' })
  create(@Body() createAssistanceDto: CreateAssistanceDto) {
    return this.assistanceService.create(createAssistanceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las asistencias' })
  findAll() {
    return this.assistanceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener asistencia por ID' })
  findOne(@Param('id') id: string) {
    return this.assistanceService.findOne(+id);
  }

  @Get('usuario/:usuarioId')
  @ApiOperation({ summary: 'Obtener asistencias por usuario' })
  findByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.assistanceService.findByUsuario(+usuarioId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar asistencia' })
  update(@Param('id') id: string, @Body() updateAssistanceDto: UpdateAssistanceDto) {
    return this.assistanceService.update(+id, updateAssistanceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar asistencia' })
  remove(@Param('id') id: string) {
    return this.assistanceService.remove(+id);
  }
}