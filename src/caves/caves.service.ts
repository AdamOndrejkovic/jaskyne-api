import { Inject, Injectable } from '@nestjs/common';
import { CreateCaveDto } from './dto/create-cave.dto';
import { UpdateCaveDto } from './dto/update-cave.dto';
import { Cave } from './entities/cave.entity';
import { Model } from 'mongoose';

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

  findOne(id: number) {
    return this.cavesModel.findById(id).exec();
  }

  update(id: number, updateCaveDto: UpdateCaveDto) {
    const updateCaves = new this.cavesModel(updateCaveDto);
    return this.cavesModel.findByIdAndUpdate(id, updateCaves);
  }

  remove(id: number) {
    return this.cavesModel.findByIdAndRemove(id).exec();
  }
}
