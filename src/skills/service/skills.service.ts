import { Catch, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISkill, SkillDto } from '../schema/skills';

@Injectable()
export class SkillsService {

    constructor(@InjectModel('Skill') private readonly skillModel: Model<ISkill>) {}

    async insertSkill(skill: SkillDto) {
        const newSkill = new this.skillModel(skill);
        const res = await newSkill.save();
        return {...res, id: res.id};
    }

    async fetchAll() {
        return await this.skillModel.find();
    }

    async fetchById(id: string) {
        try {
            return await this.skillModel.findById(id);
        } catch {
            throw new NotFoundException(`Skill you're tying to found isn't present`);
        }
    }
}
