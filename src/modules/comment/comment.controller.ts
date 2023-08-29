import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommentService } from './comment.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiTags('comments')
@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieves all comments' })
  @ApiResponse({
    status: 200,
    description: 'List of successfully recovered comments.',
  })
  findAll() {
    return this.commentService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new comment' })
  @ApiResponse({ status: 201, description: 'Comment created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid request.' })
  create(@Body() body) {
    return this.commentService.create(body);
  }
}
