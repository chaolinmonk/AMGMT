import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Attendance Management API')
    .setDescription('API para gestión de asistencia')
    .setVersion('1.0')
    .addTag('attendance')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document); 
  // URL: http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();