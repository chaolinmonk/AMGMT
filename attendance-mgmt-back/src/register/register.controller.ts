import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('register')
@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar nuevo usuario' })
  create(@Body() createRegisterDto: CreateRegisterDto) {
    return this.registerService.create(createRegisterDto);
  }
}