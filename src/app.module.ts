import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateService } from './service/template.service';
import { TemplateRepository } from './repository/template.repository';
import { TemplateController } from './api/template.controller';
import { TemplateEntity, TemplateSchema } from './core/entity/TemplateEntity';
import { ParserController } from './api/parser.controller';
import { ParserService } from './service/parser.service';

const templateRepository = { provide: 'ITemplateRepository', useClass: TemplateRepository };
const templateService = { provide: 'ITemplateService', useClass: TemplateService };
const parserService = { provide: 'IParserService', useClass: ParserService };

@Module({
    imports: [MongooseModule.forRoot('mongodb://recommender:recommender@localhost:27017/recommendation'), 
    MongooseModule.forFeature([{ name: TemplateEntity.name, schema: TemplateSchema }])],
    providers: [templateRepository, templateService, parserService],
    controllers: [TemplateController, ParserController], 
})
export class AppModule {}
