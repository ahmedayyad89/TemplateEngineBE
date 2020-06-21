import { Injectable, Inject } from '@nestjs/common';
import { TemplateRepository } from '../repository/template.repository'
import { TemplateDto } from 'src/core/dto/template.dto';
import { TemplateEntity } from 'src/core/entity/TemplateEntity';

@Injectable()
export class TemplateService {

    constructor(@Inject() private templateRepository: TemplateRepository) { }

    async create(createTemplateDTO: TemplateDto): Promise<TemplateEntity> {
        return this.templateRepository.create(createTemplateDTO);
    }

    async findAll(): Promise<TemplateEntity[]> {
        return this.templateRepository.findAll();
    }

    async findOneByCode(templateCode: string): Promise<TemplateEntity[]> {
        return this.templateRepository.findOneByCode(templateCode);
    }

}
