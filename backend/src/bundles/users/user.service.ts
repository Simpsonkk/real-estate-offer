import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hash } from 'bcrypt';
import { UserSignUpRequestDto } from '../auth/types/types';
import { UserCreateResponseDto } from '../auth/types/types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) {}

  findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  findById(id: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      select: ['email', 'fullName'],
    });
  }

  async create(payload: UserSignUpRequestDto): Promise<UserCreateResponseDto> {
    const { password: userPassword, ...rest } = payload;

    const hashSalt = this.configService.get('PASSWORD_SALT_ROUNDS');
    const passwordHash = await hash(userPassword, +hashSalt);

    const user = await this.userRepository.save({
      ...rest,
      password: passwordHash,
    });
    const { password, updatedAt, createdAt, ...createdUser } = user;

    return createdUser;
  }
}
