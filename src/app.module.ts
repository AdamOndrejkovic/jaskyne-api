import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './infrastructure/typeOrm/user.schema';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './domain/services/users.service';
import { AuthService } from './domain/services/auth.service';
import { IAuthRepository } from './domain/borders/authRepository.interface';
import { UserRepositoryAdapter } from './infrastructure/typeOrm/userRepository.adapter';
import { AuthRepositoryAdapter } from './infrastructure/typeOrm/authRepository.adapter';

@Module({
  imports: [
    PostsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([UserSchema]),
  ],
  controllers: [AuthController, UsersController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryAdapter,
    },
    {
      inject: ['UserRepository'],
      provide: 'UsersService',
      useFactory: () => {
        new UsersService();
      },
    },
    {
      provide: 'AuthRepository',
      useClass: AuthRepositoryAdapter,
    },
    {
      inject: ['AuthRepository'],
      provide: 'AuthService',
      useFactory: (authRepository: IAuthRepository) => {
        new AuthService(authRepository);
      },
    },
  ],
})
export class AppModule {}
