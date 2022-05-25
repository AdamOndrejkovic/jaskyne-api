import { Module } from '@nestjs/common';
import { UsersService } from '../domain/services/users.service';
import { UsersController } from './users.controller';
import { UserRepositoryAdapter } from '../infrastructure/typeOrm/userRepository.adapter';
import { IUsersRepository } from '../domain/borders/usersRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeORM/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryAdapter,
    },
    {
      inject: ['UserRepository'],
      provide: 'UsersService',
      useFactory: (userRepository: IUsersRepository) =>
        new UsersService(userRepository),
    },
  ],
})
export class UsersModule {}
