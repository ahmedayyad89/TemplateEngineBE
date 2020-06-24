import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateService } from './service/template.service';
import { TemplateRepository } from './repository/template.repository';
import { TemplateController } from './api/template.controller';
import { TemplateEntity, TemplateSchema } from './core/entity/TemplateEntity';
import { ParserController } from './api/parser.controller';
import { ParserService } from './service/parser.service';

@Module({
    imports: [MongooseModule.forRoot('mongodb://recommender:recommender@localhost:27017/recommendation'), 
    MongooseModule.forFeature([{ name: TemplateEntity.name, schema: TemplateSchema }])],
    providers: [TemplateRepository, TemplateService, ParserService],
    controllers: [TemplateController, ParserController], 
})
export class AppModule {}
