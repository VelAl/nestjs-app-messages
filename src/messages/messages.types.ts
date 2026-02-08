export type Message = {
  id: string;
  content: string;
};

export type MessagesMap = Record<string, Message>;
