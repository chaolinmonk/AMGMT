import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiProperty({ example: "John Doe" })
    nombre_usuario: string;

    @ApiProperty({ example: ""})
    email: string;

    @ApiProperty({ example: "Password123!" })
    password: string;
}
