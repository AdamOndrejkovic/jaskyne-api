import { ApiProperty } from '@nestjs/swagger';
import { CreatorDto } from './creator.dto';

export class CreatePostDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  data: string;
  @ApiProperty()
  createdBy: CreatorDto;
}
