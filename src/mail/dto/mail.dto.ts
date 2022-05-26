import { ApiProperty } from '@nestjs/swagger';

export class MailDto {
  @ApiProperty()
  sender: string;
  @ApiProperty()
  subject: string;
  @ApiProperty()
  message: string;
}
