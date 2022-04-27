import { ApiProperty } from '@nestjs/swagger';

export class CreatorDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}
