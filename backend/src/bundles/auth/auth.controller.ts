import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSignUpRequestDto } from './types/user-sign-up-request-dto';
import { UserSignInRequestDto } from './types/user-sign-in-request-dto';
import { ApiPath } from 'src/common/enums/api-path.enum';
import { AuthApiPath } from './enums/auth-api-path.enum';
import { JwtGuard } from './guards/guards';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '../users/user.entity';

@Controller(ApiPath.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AuthApiPath.SIGN_UP)
  @UsePipes(new ValidationPipe({ transform: true }))
  async signUp(@Body() user: UserSignUpRequestDto) {
    return this.authService.signUp(user);
  }

  @Post(AuthApiPath.SIGN_IN)
  @UsePipes(new ValidationPipe({ transform: true }))
  async signIn(@Body() user: UserSignInRequestDto) {
    return this.authService.verifyLoginCredentials(user);
  }

  @UseGuards(JwtGuard)
  @Get(AuthApiPath.CURRENT_USER)
  async getCurrentUser(@GetUser() user: User) {
    return user;
  }
}
