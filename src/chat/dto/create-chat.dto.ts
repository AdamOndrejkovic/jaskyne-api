import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  room: string;
}
