import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CavesModule } from './caves/caves.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/jaskyne.db',
      synchronize: true,
      autoLoadEntities: true,
      retryAttempts: 10,
      retryDelay: 5000,
    }),
    PostsModule,
    CavesModule,
    ChatModule,
  ],
})
export class AppModule {}
