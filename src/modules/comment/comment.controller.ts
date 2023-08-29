import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.commentService.create(body);
  }
}
