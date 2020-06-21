import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TemplateEntity } from 'src/core/entity/TemplateEntity';
import { TemplateDto } from 'src/core/dto/template.dto';


@Injectable()
export class TemplateRepository {
  // @InjectModel(TemplateEntity.name)
  private templateModel: Model<TemplateEntity>
  constructor( ) {}

  async create(createCatDto: TemplateDto): Promise<TemplateEntity> {
    const createdTemplate = new this.templateModel(createCatDto);
    return createdTemplate.save();
  }

  async findAll(): Promise<TemplateEntity[]> {
    return this.templateModel.find().exec();
  }
  
  async findOneByCode(templateCode: string): Promise<TemplateEntity[]> {
    return this.templateModel.find().where('templateCode').equals(templateCode).exec();
  }


}
