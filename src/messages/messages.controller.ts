import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List of messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return 'Message created. Body: ' + JSON.stringify(body);
  }

  @Get('/:id')
  getMessage(@Param('id', ParseIntPipe) id: number) {
    return `Message ${id}`;
  }
}
