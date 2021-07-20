import { MainConfig } from './configs/config';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  // app.setGlobalPrefix('api');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('PoC Services API')
    .setDescription('PoC Services API')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(MainConfig.mainPort);
}
bootstrap();
