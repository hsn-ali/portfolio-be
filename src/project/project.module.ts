import { Module } from '@nestjs/common';
import { ProjectController } from './controller/project.controller';
import { ProjectService } from './service/project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './schema/project';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Project', schema: ProjectSchema}])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
