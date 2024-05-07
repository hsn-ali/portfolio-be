import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkillsService } from '../service/skills.service';
import { SkillDto } from '../schema/skills';

@ApiTags('Skills')
@Controller('skills')
export class SkillsController {

    constructor(private skillsService: SkillsService) {}

    @Get()
    async getAllSkills() {
        return await this.skillsService.fetchAll();
    }

    @Get(':id')
    async getSkillById(@Param('id') id: string) {
        return await this.skillsService.fetchById(id);
    }

    @Post()
    async addSkill(@Body() skill: SkillDto) {
        return await this.skillsService.insertSkill(skill);
    }
}
