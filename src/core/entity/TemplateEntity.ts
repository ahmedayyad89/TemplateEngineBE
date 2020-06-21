import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TemplateEntity extends Document {
  @Prop()
  templateCode: string;

  @Prop()
  templateString: string;

  @Prop()
  params: string[];
}

export const TemplateSchema = SchemaFactory.createForClass(TemplateEntity);