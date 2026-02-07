import { Injectable } from '@nestjs/common';

import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs/promises';
import { Message } from './messages.types';

@Injectable()
export class MessagesRepository {
  async getMessage(id: string) {
    const contents = await readFile('data/messages.json', 'utf8');

    const messages = JSON.parse(contents) as Record<string, Message>;

    return messages[id];
  }

  async getMessages() {
    const contents = await readFile('data/messages.json', 'utf8');

    const messages = JSON.parse(contents) as Record<string, Message>;

    return Object.values(messages);
  }

  async createMessage(content: string) {
    const contents = await readFile('data/messages.json', 'utf8');

    const messages = JSON.parse(contents) as Record<string, Message>;

    const id = randomUUID();

    messages[id] = { id, content };

    await writeFile('data/messages.json', JSON.stringify(messages, null, 2));

    return id;
  }
}
