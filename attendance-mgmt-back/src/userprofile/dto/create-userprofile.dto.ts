import { ApiProperty } from '@nestjs/swagger';

export class CreateUserprofileDto {
  @ApiProperty({ example: '1' })
  usuarioId: bigint;

  @ApiProperty({ example: 'https://example.com/foto.jpg' })
  pfp: string;

  @ApiProperty({ example: '1' })
  id_empresa: bigint;

  @ApiProperty({ example: 'Juan' })
  nombre: string;

  @ApiProperty({ example: 'Pérez' })
  apellido: string;

  @ApiProperty({ example: '2026-04-02T08:00:00.000Z' })
  hora_entrada: Date;

  @ApiProperty({ example: '2026-04-02T17:00:00.000Z' })
  hora_salida: Date;
}