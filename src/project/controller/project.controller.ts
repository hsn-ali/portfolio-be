import { Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProjectDto } from '../schema/project';
import { ApiTags } from '@nestjs/swagger';
import { ProjectService } from '../service/project.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('Project')
@Controller('project')
export class ProjectController {

    constructor(private projectService: ProjectService) {}

    @Post()
    async addProject(@Body() project: ProjectDto) {
        return await this.projectService.insertProject(project);
    }

    @Get()
    async getAllProjects() {
        return await this.projectService.fetchAll();
    }

    @Get(':id')
    async getProjectById(@Param('id') id: number) {
        return await this.projectService.fetchById(id);
    }

    @Post('upload-picture')
    @UseInterceptors(FilesInterceptor('file'))
    uploadFile(@UploadedFiles() img: Array<Express.Multer.File>) {
        console.log(img);
    }
}
