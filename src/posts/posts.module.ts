import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongodbModule } from '../infrastructure/mongo/mongodb.module';
import { PostsProvider } from '../infrastructure/mongo/providers/posts.provider';

@Module({
  imports: [MongodbModule],
  controllers: [PostsController],
  providers: [PostsService, ...PostsProvider],
})
export class PostsModule {}
