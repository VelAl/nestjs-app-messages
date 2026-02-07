import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';

import { CreateMessageDto } from './dtos';

import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.getMessages();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.createMessage(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id', ParseUUIDPipe) id: string) {
    const meessage = await this.messagesService.getMessage(id);

    if (!meessage) {
      throw new NotFoundException(`Messge with id ${id} not found.`);
    }

    return meessage;
  }
}
