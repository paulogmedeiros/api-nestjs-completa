import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Configuração do CORS
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforma a entrada em objetos do tipo correto
      whitelist: true, // Remove propriedades adicionais que não estão no DTO
      forbidNonWhitelisted: true, // Lança erro se propriedades adicionais forem enviadas
    }),
  );

  await app.listen(process.env.PORT);
}
bootstrap();
