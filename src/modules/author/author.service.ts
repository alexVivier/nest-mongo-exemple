import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from '../../schemas/author.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}
  findAll(): Promise<Author[]> {
    return this.authorModel.find();
  }

  create(body): Promise<Author> {
    const authorCreated = new this.authorModel(body);
    return authorCreated.save();
  }

  addArticle(id, articleId): Promise<Author> {
    return this.authorModel.findByIdAndUpdate(id, {
      $push: { articles: articleId },
    });
  }

  addComment(id, commentId): Promise<Author> {
    return this.authorModel.findByIdAndUpdate(id, {
      $push: { comments: commentId },
    });
  }

  findById(id): Promise<Author> {
    return this.authorModel.findById(id);
  }
}
