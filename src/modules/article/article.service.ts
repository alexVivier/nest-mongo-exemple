import { Injectable, NotFoundException } from "@nestjs/common";
import { Article } from '../../schemas/article.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorService } from '../author/author.service';
import { FindOptions } from "@nestjs/schematics";

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
    private readonly authorService: AuthorService,
  ) {}

  findById(id) {
    return this.articleModel.findById(id);
  }

  findAll() {
    return this.articleModel.find();
  }

  async create(body) {
    const author = await this.authorService.findById(body.authorId);
    if (!author) {
      throw new NotFoundException('Author not found');
    }

    const newArticle = new this.articleModel({
      title: body.title,
      content: body.content,
      author: author._id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedArticle = await newArticle.save();

    await this.authorService.addArticle(author._id, savedArticle._id);

    return {
      article: await this.articleModel.findById(savedArticle._id),
    };
  }

  addComment(id, commentId) {
    return this.articleModel.findByIdAndUpdate(id, {
      $push: { comments: commentId },
    });
  }
}
