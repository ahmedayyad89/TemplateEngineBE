import { TemplateEntity } from 'src/core/entity/TemplateEntity';
import { TemplateDto } from 'src/core/dto/template.dto';


export interface ITemplateRepository {

    create(createTemplateDto: TemplateDto): Promise<TemplateEntity>;

    findAll(): Promise<TemplateEntity[]>;

    findOneByCode(templateCode: string): Promise<TemplateEntity>;

    deleteByCode(templateCode: string): any;

    update(updateTemplateDto: TemplateDto): Promise<TemplateEntity>;
}