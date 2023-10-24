import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { ErrorMessage } from 'src/common/enums/enums';
import { UserSignUpRequestDto } from './types/types';
import { JwtService } from '@nestjs/jwt';
import { UserSignUpResponseDto } from './types/types';
import { UserSignInRequestDto } from './types/types';
import { UserSignInResponseDto } from './types/types';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(
    userRequestDto: UserSignUpRequestDto,
  ): Promise<UserSignUpResponseDto> {
    const userByEmail = await this.userService.findByEmail(
      userRequestDto.email,
    );

    if (userByEmail) {
      throw new HttpException(
        ErrorMessage.USER_ALREADY_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }

    const { id, ...user } = await this.userService.create(userRequestDto);

    return {
      ...user,
      token: await this.jwtService.signAsync({ id }),
    };
  }

  public async verifyLoginCredentials(
    userRequestDto: UserSignInRequestDto,
  ): Promise<UserSignInResponseDto> {
    const user = await this.userService.findByEmail(userRequestDto.email);

    if (!user) {
      throw new HttpException(
        ErrorMessage.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }

    const isEqualPassword = await compare(
      userRequestDto.password,
      user.password,
    );

    if (!isEqualPassword) {
      throw new HttpException(
        ErrorMessage.PASSWORDS_NOT_MATCH,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const { id, email, fullName } = user;

    return {
      email,
      fullName,
      token: await this.jwtService.signAsync({ id }),
    };
  }
}
