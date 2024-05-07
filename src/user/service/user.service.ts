import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser, UserDTO } from '../schema/user';
import * as bcrypt from 'bcrypt';
// import { sendEmail } from 'src/utils/mailer';
import { MailerService } from '@nestjs-modules/mailer';
import { env } from 'process';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>, private readonly mailerService: MailerService) {}

    async insertUser(user: UserDTO) {

        const salt = await bcrypt.genSalt(10);
        const hashPswd = await bcrypt.hash(user.password, salt);

        user.password = hashPswd;
        const newUser = new this.userModel(user);
        const res = await newUser.save();
        console.log(res);

        const hash = await bcrypt.hash(res._id.toString(), 10);
        console.log(res._id);
        
        const asdd = await newUser.updateOne({_id: new ObjectId(res._id)}, {$set: {fullName: 'itzhazzan'}}).exec();
        const nas = await newUser.updateOne({_id: res._id,}, {$set: {verifyToken: hash, verifyTokenExpiry: Date.now() + 360000}}).exec();
        console.log('updated token = >');
        console.log(nas);
        
        console.log('updated name = >');
        console.log(asdd);
        
        
        this.mailerService.sendMail(
            {
                from: 'itzhazzan@gmail.com',
            to: user.email,
            subject: 'Verify Your Email',
            html: `<p>Click <a href="${process.env.DOMAIN}/user/verifyemail?token=${hash}">here</a> to verify you email</p>`,
          
              })
              .then(() => {})
              .catch(() => {});
        
        return res;
    }

    async findUserByToken(token) {
        const user = await this.userModel.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});
        const us = await this.userModel.findOne({verifyToken: token});
        console.log(token);
        
        console.log(user);
        console.log(us);
        if (user) {
            user.isVerified = true;
            user.verifyToken = undefined;
            user.verifyTokenExpiry = undefined;
            return await user.save();
        } else {
            return new NotFoundException('User not found');
        }
    }

    async login(userParam: UserDTO) {
        const user = await this.userModel.findOne({email: userParam.email});
        if (user) {
            const isValid = bcrypt.compare(userParam.password, user.password);
            if (!isValid) {
                return new NotFoundException('Wrong Password');
            }
            return user;
        } else {
            return new NotFoundException('User not Found');
        }
    }
}
