import { Injectable, Inject } from '@nestjs/common';
import { TemplateDto } from 'src/core/dto/template.dto';
import { ITemplateRepository } from 'src/repository/itemplate.repository';
import { ITemplateService } from './itemplate.service';

@Injectable()
export class TemplateService implements ITemplateService {

    constructor(@Inject('ITemplateRepository') private templateRepository: ITemplateRepository) { }

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
