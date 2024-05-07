import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../service/user.service';
import { UserDTO } from '../schema/user';

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('signup')
    async addUser(@Body() user: UserDTO) {
        return await this.userService.insertUser(user);
    }

    @Get('verifyemail/:token')
    async verifyUser(@Param('token') token: string) {
        await this.userService.findUserByToken(token);
    }
}
