import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Document & Comment;

@Schema()
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'Author' })
  author: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Article', required: true })
  article: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
