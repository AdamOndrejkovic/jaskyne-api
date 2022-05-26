import { Module } from '@nestjs/common';
import { UsersService } from '../domain/services/users.service';
import { UsersController } from './users.controller';
import { UserRepositoryAdapter } from '../infrastructure/typeOrm/userRepository.adapter';
import { IUsersRepository } from '../domain/borders/usersRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USER_REPOSITORY, USER_SERVICE } from '../common/cave.constants';
import { UserSchema } from '../infrastructure/typeOrm/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryAdapter,
    },
    {
      inject: [USER_REPOSITORY],
      provide: USER_SERVICE,
      useFactory: (userRepository: IUsersRepository) =>
        new UsersService(userRepository),
    },
  ],
})
export class UsersModule {}
