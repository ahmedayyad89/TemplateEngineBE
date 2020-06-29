import { TemplateDto } from "src/core/dto/template.dto";

export interface ITemplateService {
    create(createTemplateDTO: TemplateDto): Promise<TemplateDto>;

    findAll(): Promise<TemplateDto[]>;

    findOneByCode(templateCode: string): Promise<TemplateDto>;

    deleteByCode(templateCode: string): any;

    update(updateTemplateDto: TemplateDto): Promise<TemplateDto>;
}