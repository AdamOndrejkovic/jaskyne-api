import { Module } from '@nestjs/common';
import { AuthService } from '../domain/services/auth.service';
import { AuthController } from './auth.controller';
import { AuthRepositoryAdapter } from '../infrastructure/typeOrm/authRepository.adapter';
import { IAuthRepository } from '../domain/borders/authRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AUTH_REPOSITORY, AUTH_SERVICE } from '../common/cave.constants';
import { UserSchema } from '../infrastructure/typeOrm/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [AuthController],
  providers: [
    {
      provide: AUTH_REPOSITORY,
      useClass: AuthRepositoryAdapter,
    },
    {
      inject: [AUTH_REPOSITORY],
      provide: AUTH_SERVICE,
      useFactory: (authRepository: IAuthRepository) =>
        new AuthService(authRepository),
    },
  ],
})
export class AuthModule {}
