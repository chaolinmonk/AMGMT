import { ApiProperty } from '@nestjs/swagger';

export class CreateRegisterDto {
  @ApiProperty({ example: 'juanito123' })
  nombre_usuario: string;

  @ApiProperty({ example: 'juan@mail.com' })
  email: string;

  @ApiProperty({ example: 'Password123!' })
  password: string;

  @ApiProperty({ example: 'Juan' })
  nombre: string;

  @ApiProperty({ example: 'Pérez' })
  apellido: string;
}