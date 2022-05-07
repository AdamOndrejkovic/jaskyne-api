import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CavesService } from './caves.service';
import { CreateCaveDto } from './dto/create-cave.dto';
import { UpdateCaveDto } from './dto/update-cave.dto';

@Controller('caves')
export class CavesController {
  constructor(private readonly cavesService: CavesService) {}

  @Post()
  create(@Body() createCaveDto: CreateCaveDto) {
    return this.cavesService.create(createCaveDto);
  }

  @Get()
  findAll() {
    return this.cavesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cavesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaveDto: UpdateCaveDto) {
    return this.cavesService.update(+id, updateCaveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cavesService.remove(+id);
  }
}
