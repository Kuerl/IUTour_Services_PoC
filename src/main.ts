import { MainConfig } from './configs/config';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(MainConfig.mainPort);
}
bootstrap();
