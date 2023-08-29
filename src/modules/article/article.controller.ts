import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";


@ApiTags('articles')
@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieves all blog articles' })
  @ApiResponse({
    status: 200,
    description: 'List of items successfully retrieved.',
  })
  findAll() {
    return this.articleService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new article' })
  @ApiResponse({ status: 201, description: 'Article successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid request.' })
  create(@Body() body) {
    return this.articleService.create(body);
  }
}
