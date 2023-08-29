// Author.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AuthorDocument = Document & Author;

@Schema()
export class Author {
  _id: string;
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop([{ type: Types.ObjectId, ref: 'Article' }])
  articles: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Comment' }])
  comments: Types.ObjectId[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
