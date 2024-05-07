import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProject, ProjectDto } from '../schema/project';

@Injectable()
export class ProjectService {

    constructor(@InjectModel('Project') private readonly projectModel: Model<IProject>) {}

    async insertProject(project: ProjectDto) {
        const newProject = new this.projectModel(project);
        const res = await newProject.save();
        return {...res, id: res.id};
    }

    async fetchAll() {
        return await this.projectModel.find();
    }

    async fetchById(id) {
        try {
            return await this.projectModel.findById(id);
        } catch {
            throw new NotFoundException('Data not found');
        }
    }
}
