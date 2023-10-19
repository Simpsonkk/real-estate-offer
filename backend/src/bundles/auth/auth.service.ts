import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { ErrorMessage } from 'src/common/enums/enums';
import { UserGetResponseDto, UserSignUpRequestDto } from './dto/dto';
import { JwtService } from '@nestjs/jwt';
import { UserSignUpResponseDto } from './dto/dto';
import { UserSignInRequestDto } from './dto/dto';
import { UserSignInResponseDto } from './dto/dto';
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
      token: this.jwtService.sign({ id }),
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
      token: this.jwtService.sign({ id }),
    };
  }

  async getCurrentUser(authHeader: string): Promise<UserGetResponseDto> {
    const [, token] = authHeader.split(' ');

    if (!token) {
      throw new HttpException(
        ErrorMessage.INVALID_TOKEN,
        HttpStatus.UNAUTHORIZED,
      );
    }

    try {
      const { id } = await this.jwtService.verifyAsync(token);
      const user = await this.userService.findById(id);

      if (!user) {
        throw new HttpException(
          ErrorMessage.USER_NOT_FOUND,
          HttpStatus.NOT_FOUND,
        );
      }

      return user;
    } catch (error) {
      throw new HttpException(
        ErrorMessage.TOKEN_INVALID_OR_EXPIRED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
