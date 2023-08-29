import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.articleService.create(body);
  }
}
