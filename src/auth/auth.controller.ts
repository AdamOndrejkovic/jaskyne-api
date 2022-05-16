import { Controller, Post, Body, Inject } from '@nestjs/common';
import { AuthService } from '../domain/services/auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '../core/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AuthService') private readonly authService: AuthService,
  ) {}

  @Post('/register')
  register(@Body() registerUser: RegisterUserDto): Promise<User> {
    console.log(registerUser);
    return this.authService.register(
      registerUser.firstName,
      registerUser.lastName,
      registerUser.email,
      registerUser.password,
      registerUser.role,
    );
  }

  @Post('/login')
  login(@Body() loginUser: LoginUserDto): Promise<User> {
    return this.authService.login(loginUser.email, loginUser.password);
  }
}
