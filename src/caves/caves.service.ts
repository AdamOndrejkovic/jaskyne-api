import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCaveDto } from './dto/create-cave.dto';
import { UpdateCaveDto } from './dto/update-cave.dto';
import { Cave } from './entities/cave.entity';
import { Model, Schema, Types } from 'mongoose';

@Injectable()
export class CavesService {
  constructor(@Inject('CAVES_MODEL') private cavesModel: Model<Cave>) {}

  create(createCaveDto: CreateCaveDto) {
    const cave = new this.cavesModel(createCaveDto);
    return cave.save();
  }

  findAll() {
    return this.cavesModel.find().exec();
  }

  async findOne(id: string) {
    const cave = await this.cavesModel.findOne({ _id: id }).exec();
    if (!cave) {
      throw new NotFoundException(`Cave #${id} not found`);
    }
    return cave;
  }

  async update(id: number, updateCaveDto: UpdateCaveDto) {
    const existingCave = await this.cavesModel
      .findOneAndUpdate({ _id: id }, { $set: updateCaveDto }, { new: true })
      .exec();

    if (!existingCave) {
      throw new NotFoundException(`Cave #${id} not found`);
    }
    return existingCave;
  }

  async remove(id: string) {
    const cave = await this.findOne(id);
    return cave.remove();
  }
}
