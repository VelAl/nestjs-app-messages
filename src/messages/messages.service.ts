import { Injectable } from '@nestjs/common';

import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  getMessages() {
    return this.messagesRepo.getMessages();
  }

  getMessage(id: string) {
    return this.messagesRepo.getMessage(id);
  }

  createMessage(message: string) {
    return this.messagesRepo.createMessage(message);
  }
}
