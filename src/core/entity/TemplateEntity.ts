import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TemplateEntity extends Document {
  @Prop()
  templateCode: string;

  @Prop()
  templateBody: string;

}

export const TemplateSchema = SchemaFactory.createForClass(TemplateEntity);