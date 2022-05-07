import { PartialType } from '@nestjs/swagger';
import { CreateCaveDto } from './create-cave.dto';

export class UpdateCaveDto extends PartialType(CreateCaveDto) {}
