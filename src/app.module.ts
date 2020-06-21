import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateService } from './service/template.service';
import { TemplateRepository } from './repository/template.repository';
import { TemplateController } from './api/template.controller';
import { TemplateEntity, TemplateSchema } from './core/entity/TemplateEntity';
import { RepositoryModule } from './repository/repository.module';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017/templateengine'), RepositoryModule], 
})
export class AppModule {}
