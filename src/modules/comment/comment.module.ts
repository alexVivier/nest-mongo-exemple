import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from '../../schemas/comment.schema';
import { AuthorService } from '../author/author.service';
import { Author, AuthorSchema } from '../../schemas/author.schema';
import { ArticleService } from '../article/article.service';
import { Article, ArticleSchema } from '../../schemas/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  providers: [CommentService, AuthorService, ArticleService],
  controllers: [CommentController],
  exports: [CommentService],
})
export class CommentModule {}
