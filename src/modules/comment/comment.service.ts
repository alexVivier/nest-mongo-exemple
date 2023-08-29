import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Comment } from "../../schemas/comment.schema";
import { AuthorService } from "../author/author.service";
import { Author } from "../../schemas/author.schema";
import { ArticleService } from "../article/article.service";

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
    private readonly authorService: AuthorService,
    private readonly articleService: ArticleService,
  ) {}

  findAll() {
    return 'All comments';
  }

  async create(body) {
    const newComment = new this.commentModel(body);
    const author = await this.authorService.findById(body.authorId);
    const article = await this.articleService.findById(body.articleId);
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    newComment.article = new Types.ObjectId(article._id);
    const savedComment = await newComment.save();

    await this.authorService.addComment(author._id, savedComment._id);
    await this.articleService.addComment(article._id, savedComment._id);
    return {
      comment: savedComment,
    };
  }
}
