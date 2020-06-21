import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateEntity, TemplateSchema } from 'src/core/entity/TemplateEntity';
import { TemplateRepository } from './template.repository';
import { TemplateController } from 'src/api/template.controller';

@Module({
    
    imports: [MongooseModule.forFeature([{ name: TemplateEntity.name, schema: TemplateSchema }])],
    providers: [TemplateRepository],
    controllers: [TemplateController]

})
export class RepositoryModule {}
