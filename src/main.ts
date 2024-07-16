import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de usuarios')
    .setDescription(
      'A API de gerenciamento de usuários e seus cards de informções pessoais',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
