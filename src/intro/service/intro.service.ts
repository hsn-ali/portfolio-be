import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IIntro, Intro } from '../schema/intro';

@Injectable()
export class IntroService {

    constructor(@InjectModel('Intro') private readonly introModel: Model<IIntro>) {}

    async insertIntro(intro: Intro) {
        const newIntro = new this.introModel(intro);
        const res = await newIntro.save();
        return {...res, id: res.id.toString()};
    }

    async fetchAll() {
        return await this.introModel.find();
    }

    async fetchById(id) {
        return await this.introModel.findById(id);
    }
}
