import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IntroModule } from './intro/intro.module';
import { ProjectModule } from './project/project.module';
import { SkillsModule } from './skills/skills.module';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Portfolio')
  .setDescription('Rest Apis for Dynamic portfolio developed in Nest.js with Mongo DB | Mongoose')
  .setVersion('1,0')
  .addTag('Intro')
  .build();

  const document = SwaggerModule.createDocument(app, config, 
    {include: [IntroModule, ProjectModule, SkillsModule, UserModule]});
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
