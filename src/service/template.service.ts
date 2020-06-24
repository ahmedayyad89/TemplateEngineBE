import { Injectable } from '@nestjs/common';
import { TemplateRepository } from '../repository/template.repository'
import { TemplateDto } from 'src/core/dto/template.dto';

@Injectable()
export class TemplateService {

    constructor(private templateRepository: TemplateRepository) { }

    async create(createTemplateDTO: TemplateDto): Promise<TemplateDto> {
        const templateEntity = await this.templateRepository.create(createTemplateDTO);
        return new TemplateDto(templateEntity.templateCode, templateEntity.templateBody);
    }

    async findAll(): Promise<TemplateDto[]> {
        const templateEntities = await this.templateRepository.findAll();
        return templateEntities.map(templateEntity => {
            return new TemplateDto(templateEntity.templateCode, templateEntity.templateBody,);
        })
    }

    async findOneByCode(templateCode: string): Promise<TemplateDto> {
        const templateEntity = await this.templateRepository.findOneByCode(templateCode);
        return new TemplateDto(templateEntity.templateCode, templateEntity.templateBody);
    }

    async deleteByCode(templateCode: string) {
        this.templateRepository.deleteByCode(templateCode);
    }

    async update(updateTemplateDto: TemplateDto): Promise<TemplateDto> {
        const templateEntity = await this.templateRepository.update(updateTemplateDto);
        return new TemplateDto(templateEntity.templateCode, templateEntity.templateBody);
    }

}
