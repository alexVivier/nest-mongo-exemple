import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/article/article.module';
import { AuthorModule } from './modules/author/author.module';
import { CommentModule } from './modules/comment/comment.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.HOST}:${process.env.PORT}/${process.env.DBNAME}`,
    ),
    ArticleModule,
    AuthorModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
