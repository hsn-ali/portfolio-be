import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";


export const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isVerified: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    forgotPasswordToken: {type: String},
    forgotPasswordTokenExpiry: {type: String},
    verifyToken: {type: String},
    verifyTokenExpiry: {type: Date},
});

export interface IUser {
    id?: number;
    fullName: string;
    email: string;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    forgotPasswordToken: string;
    forgotPasswordTokenExpiry: string;
    verifyToken: string;
    verifyTokenExpiry: string;
}

export class UserDTO {
    @ApiProperty()
    fullName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}