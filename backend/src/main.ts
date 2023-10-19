import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = new ConfigService();
  const globalPrefix = configService.get('API_ORIGIN_URL');
  const port = configService.get('APP_PORT');

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);
}
bootstrap();
