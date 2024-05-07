import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntroModule } from './intro/intro.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
import { MulterModule } from '@nestjs/platform-express';
import { SkillsModule } from './skills/skills.module';
import { UserModule } from './user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  // mongodb.net/portfolio -> here portfolio is my db

  // db pswd @4 -> ascii for @ is %40

  imports: [IntroModule, ProjectModule, SkillsModule, UserModule, MulterModule.register({storage: 'uploads/'}),
  MongooseModule.forRoot(
    'mongodb+srv://itzhazzan:Sergioramos%404@portfoliocluster.apkunrc.mongodb.net/portfolio?retryWrites=true&w=majority&appName=PortfolioCluster'
  ),MailerModule.forRoot({
    // transport: 'smtps://917f77c0b10889@sandbox.smtp.mailtrap.io:7d683a7d161f86@sandbox.smtp.mailtrap.io',
    transport: {
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "917f77c0b10889",
        pass: "7d683a7d161f86"
      }
    },
    defaults: {
      from: '"nest-modules" <modules@nestjs.com>',
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
