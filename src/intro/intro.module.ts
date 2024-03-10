import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IntroSchema } from './schema/intro';
import { IntroController } from './controller/intro.controller';
import { IntroService } from './service/intro.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Intro', schema: IntroSchema}])],
  controllers: [IntroController],
  providers: [IntroService]
})
export class IntroModule {}
