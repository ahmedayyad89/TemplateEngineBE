import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TemplateEntity } from 'src/core/entity/TemplateEntity';
import { TemplateDto } from 'src/core/dto/template.dto';


@Injectable()
export class TemplateRepository {
  constructor(@InjectModel(TemplateEntity.name) private templateModel: Model<TemplateEntity>) {}

  async create(createTemplateDto: TemplateDto): Promise<TemplateEntity> {
    const createdTemplate = new this.templateModel(createTemplateDto);
    
    return createdTemplate.save();
  }

  async findAll(): Promise<TemplateEntity[]> {
    return this.templateModel.find().exec();
  }
  
  async findOneByCode(templateCode: string): Promise<TemplateEntity> {
    return this.templateModel.findOne({'templateCode': templateCode});
  }
  
  async deleteByCode(templateCode: string) {
    return this.templateModel.deleteOne({'templateCode': templateCode});
  }

  async update(updateTemplateDto: TemplateDto): Promise<TemplateEntity> {
    return this.templateModel.updateOne({'templateCode': updateTemplateDto.templateCode}, updateTemplateDto);
  }

}
