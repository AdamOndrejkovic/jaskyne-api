import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongodbModule } from '../infrastructure/mongo/mongodb.module';
import { MongodbProvider } from '../infrastructure/mongo/mongodb.provider';

@Module({
  imports: [MongodbModule],
  controllers: [PostsController],
  providers: [PostsService, ...MongodbProvider],
})
export class PostsModule {}
