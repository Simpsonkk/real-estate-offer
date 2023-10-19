import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSignUpRequestDto } from './dto/user-sign-up-request-dto';
import { UserSignInRequestDto } from './dto/user-sign-in-request-dto';
import { ApiPath } from 'src/common/enums/api-path.enum';
import { AuthApiPath } from './enums/auth-api-path.enum';
import { AUTH_HEADER } from './constants/constants';

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

  @Get(AuthApiPath.CURRENT_USER)
  async getCurrentUser(@Headers(AUTH_HEADER) token: string) {
    return this.authService.getCurrentUser(token);
  }
}
