import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from '../../schemas/article.schema';
import { AuthorService } from '../author/author.service';
import { Author, AuthorSchema } from '../../schemas/author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Article.name, schema: ArticleSchema },
      { name: Author.name, schema: AuthorSchema },
    ]),
  ],
  providers: [ArticleService, AuthorService],
  controllers: [ArticleController],
  exports: [ArticleService],
})
export class ArticleModule {}
