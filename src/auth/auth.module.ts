import { Module } from '@nestjs/common';
import { AuthService } from '../domain/services/auth.service';
import { AuthController } from './auth.controller';
import { AuthRepositoryAdapter } from '../infrastructure/typeOrm/authRepository.adapter';
import { IAuthRepository } from '../domain/borders/authRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeORM/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [AuthController],
  providers: [
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
export class AuthModule {}
