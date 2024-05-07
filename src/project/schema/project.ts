import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export const ProjectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    outline: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    imageB64: {type: String},
    url: {type: String, required: false},
    active: {type: Boolean, required: false},
    date: {type: String, required: true}
})

export interface IProject {
    id?: number;
    title: string;
    outline: string;
    description: string;
    image: string;
    url: string;
    active: boolean;
    date: string;
}

export class ProjectDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    outline: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    image: Express.Multer.File;
    @ApiProperty()
    url: string;
    @ApiProperty()
    active: boolean;
    @ApiProperty()
    date: string;
    imageB64: string;
}