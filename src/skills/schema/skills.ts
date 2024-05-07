import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export const SkillSchema = new mongoose.Schema({
    outline: String,
    name: String,
    placeholder: String,
    image: String,
    category: String
});

export class SkillDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    outline: string;
    @ApiProperty()
    placeholder: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    category: string;
}

export interface ISkill {
    id?: string;
    name: string;
    outline: string;
    placeholder: string;
    image: string;
    category: string;
}