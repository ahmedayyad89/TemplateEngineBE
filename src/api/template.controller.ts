import { Controller, Inject, Get, Post, Param } from '@nestjs/common';
import { TemplateDto } from 'src/core/dto/template.dto';
import { TemplateRepository } from 'src/repository/template.repository';

@Controller('template')
export class TemplateController {

    constructor(@Inject() private templateRepository: TemplateRepository){
        
    }

    @Get()
    findAll() {
        return this.templateRepository.findAll();
    }

    @Post()
    createTemplate(templateDto: TemplateDto){
        return this.templateRepository.create(templateDto);
    }

    @Get('/:templateCode') 
    findByTemplateCode(@Param('templateCode') templateCode: string) {
        return this.templateRepository.findOneByCode(templateCode);
    }
}
