import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/article/article.module';
import { AuthorModule } from './modules/author/author.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog-exemple'),
    ArticleModule,
    AuthorModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
