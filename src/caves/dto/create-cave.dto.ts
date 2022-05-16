import { ApiProperty } from '@nestjs/swagger';
import { RegionEnum } from '../region.enum';
import { DifficultyEnum } from '../difficulty.enum';

export class CreateCaveDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  region: RegionEnum;
  @ApiProperty()
  difficulty: DifficultyEnum;
  @ApiProperty()
  duration: string;
  @ApiProperty()
  image: string;
}
