import { ApiProperty } from '@nestjs/swagger';

export class CreateAssistanceDto {
  @ApiProperty({ example: '1' })
  usuarioId: bigint;

  @ApiProperty({ example: '2026-04-02T08:00:00.000Z' })
  fecha: Date;

  @ApiProperty({ example: 'entrada' })
  tipo: string;

  @ApiProperty({ example: false })
  esAtrasado: boolean;
}