import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  content: string;
}
