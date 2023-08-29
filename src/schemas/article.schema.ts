import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  _id: string;
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'Author' })
  author: Types.ObjectId;

  @Prop([{ type: Types.ObjectId, ref: 'Commentaire' }])
  comments: Types.ObjectId[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
