import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  @ApiProperty({ example: 'juan@mail.com' })
  email: string;

  @ApiProperty({ example: 'Password123!' })
  password: string;
}