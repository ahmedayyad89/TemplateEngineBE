import { Controller, Get, Post, Param, Body, Put, Delete, Inject } from '@nestjs/common';
import { TemplateDto } from 'src/core/dto/template.dto';
import { ITemplateService } from 'src/service/itemplate.service';

@Controller('template')
export class TemplateController {

    constructor(@Inject('ITemplateService') private templateService: ITemplateService){
        
    }

    @Get()
    findAll() {
        return this.templateService.findAll();
    }

    @Post()
    createTemplate(@Body() templateDto: TemplateDto){
        return this.templateService.create(templateDto);
    }
    
    @Put()
    updateTemplate(@Body() templateDto: TemplateDto){
        return this.templateService.update(templateDto);
    }

    @Get('/:templateCode') 
    findByTemplateCode(@Param('templateCode') templateCode: string) {
        return this.templateService.findOneByCode(templateCode);
    }

    @Delete('/:templateCode') 
    deleteByTemplateCode(@Param('templateCode') templateCode: string) {
        return this.templateService.deleteByCode(templateCode);
    }
}
