import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';
import { POST_MODEL } from '../common/cave.constants';

@Injectable()
export class PostsService {
  constructor(@Inject(POST_MODEL) private postModel: Model<Post>) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new this.postModel(createPostDto);
    return post.save();
  }

  findAll() {
    return this.postModel.find().exec();
  }

  findOne(id: number) {
    return this.postModel.findById(id).exec();
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const updatePost = new this.postModel(updatePostDto);
    return this.postModel.findByIdAndUpdate(id, updatePost);
  }

  remove(id: number) {
    return this.postModel.findByIdAndRemove(id).exec();
  }
}
