import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntroModule } from './intro/intro.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // mongodb.net/portfolio -> here portfolio is my db

  // db pswd @4 -> ascii for @ is %40

  imports: [IntroModule,
  MongooseModule.forRoot(
    'mongodb+srv://itzhazzan:Sergioramos%404@portfoliocluster.apkunrc.mongodb.net/portfolio?retryWrites=true&w=majority&appName=PortfolioCluster'
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
