import { Body, Controller, Get, Post } from '@nestjs/common';
import { IntroService } from '../service/intro.service';
import { IIntro } from '../schema/intro';

@Controller('intro')
export class IntroController {

    constructor(private introService: IntroService) {}

    @Post()
    async addIntro(@Body() intro: IIntro) {
        return await this.introService.insertIntro(intro);
    }

    @Get()
    async getAllIntro() {
        return await this.introService.fetchAll();
    }
}
