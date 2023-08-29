import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.authorService.create(body);
  }
}
