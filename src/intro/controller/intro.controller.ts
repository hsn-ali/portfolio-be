import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { IntroService } from '../service/intro.service';
import { IIntro, Intro } from '../schema/intro';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Intro')
@Controller('intro')
export class IntroController {

    constructor(private introService: IntroService) {}

    @Post()
    async addIntro(@Body() intro: Intro) {
        return await this.introService.insertIntro(intro);
    }

    @Get()
    async getAllIntro() {
        return await this.introService.fetchAll();
    }

    @Get(':id')
    async getIntroById(@Param('id') id: number) {
        try {
            return await this.introService.fetchById(id);
        } catch {
        throw new NotFoundException('Data not found');
        }
    }
}
