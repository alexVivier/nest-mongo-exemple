import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthorService } from './author.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('authors')
@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieves all authors' })
  @ApiResponse({
    status: 200,
    description: 'List of successfully recovered authors.',
  })
  findAll() {
    return this.authorService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new author' })
  @ApiResponse({ status: 201, description: 'Successfully created author.' })
  @ApiResponse({ status: 400, description: 'Invalid request.' })
  create(@Body() body) {
    return this.authorService.create(body);
  }
}
