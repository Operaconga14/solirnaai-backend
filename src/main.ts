import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT') || 3000;
  const globalPrefix = configService.get('GLOBAL_PREFIX');
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('SolirnaAI Backend API')
    .setDescription(
      'SolirnaAI  is an intelligent platform that helps solo entrepreneurs and small startup teams plan their business, generate Product Requirement Documents (PRDs), create business documentation, and manage their startup journey from idea to execution.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`/docs`, app, document);

  await app.listen(PORT);
  console.log(
    `Application is running on: http://localhost:${PORT}/${globalPrefix}`,
  );
}
bootstrap();
