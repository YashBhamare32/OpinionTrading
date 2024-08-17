import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Opinion Trading')
    .setDescription('Opinion Trading platform')
    .setVersion('1.0')
    .addTag('Opinion')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('/api/v1')
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
