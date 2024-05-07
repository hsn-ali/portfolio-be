import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export const IntroSchema = new mongoose.Schema({
    greeting: {type: String, required: true},
    name: {type: String, required: true},
    designation: {type: String, required: true},
    outline: {type: String, required: true},
    active: {type: Boolean, required: true, default: false},
    resume: {type: String},
    date: {type: String},
    social: {type: Array},
});

export class Intro {
    @ApiProperty()
    id: number;
    @ApiProperty()
    greeting: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    designation: string;
    @ApiProperty()
    outline: string;
    @ApiProperty()
    active?: boolean;
    @ApiProperty()
    resume?: string;
    @ApiProperty()
    date: string;
    @ApiProperty()
    social: [];
}

export interface IIntro {
    id?: number;
    greeting: string;
    name: string;
    designation: string;
    outline: string;
    active?: boolean;
    resume?: string;
    date: string;
    social: [];
}