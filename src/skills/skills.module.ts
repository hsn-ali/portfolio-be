import { Module } from '@nestjs/common';
import { SkillsService } from './service/skills.service';
import { SkillsController } from './controller/skills.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from './schema/skills';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Skill', schema: SkillSchema}])],
  providers: [SkillsService],
  controllers: [SkillsController]
})
export class SkillsModule {}
