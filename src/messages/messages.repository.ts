import { Injectable } from '@nestjs/common';

import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs/promises';
import { MessagesMap } from './messages.types';

const MESSAGES_FILE = 'data/messages.json';

@Injectable()
export class MessagesRepository {
  private async readMessagesFromJsonFile(): Promise<MessagesMap> {
    const contents = await readFile(MESSAGES_FILE, 'utf8');
    return JSON.parse(contents) as MessagesMap;
  }

  private async writeMessagesToJsonFile(messages: MessagesMap): Promise<void> {
    await writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  }

  async getMessage(id: string) {
    const messages = await this.readMessagesFromJsonFile();
    return messages[id];
  }

  async getMessages() {
    const messages = await this.readMessagesFromJsonFile();
    return Object.values(messages);
  }

  async createMessage(content: string) {
    const messages = await this.readMessagesFromJsonFile();

    const id = randomUUID();
    messages[id] = { id, content };

    await this.writeMessagesToJsonFile(messages);
    return id;
  }

  async removeMessage(id: string) {
    const messages = await this.readMessagesFromJsonFile();

    if (!(id in messages)) {
      return false;
    }

    delete messages[id];
    await this.writeMessagesToJsonFile(messages);
    return true;
  }
}
