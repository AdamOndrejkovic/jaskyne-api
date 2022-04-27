import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UsersService } from '../domain/services/users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.usersService.update(
      +id,
      userDto.firstName,
      userDto.lastName,
      userDto.email,
      userDto.password,
      userDto.role,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
