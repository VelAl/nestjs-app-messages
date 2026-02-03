import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List of messages';
  }

  @Post()
  createMessage(@Body() body: any) {
    return 'Message created. Body: ' + JSON.stringify(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: number) {
    return `Message ${id}`;
  }
}
