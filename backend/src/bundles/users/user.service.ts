import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hash } from 'bcrypt';
import { UserSignUpRequestDto } from '../auth/dto/dto';
import { UserCreateResponseDto } from '../auth/dto/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { id },
      select: ['email', 'fullName'],
    });
  }

  async create(payload: UserSignUpRequestDto): Promise<UserCreateResponseDto> {
    const { password: userPassword, ...rest } = payload;
    const passwordHash = await hash(userPassword, 10);

    const user = await this.userRepository.save({
      ...rest,
      password: passwordHash,
    });
    const { password, updatedAt, createdAt, ...createdUser } = user;

    return createdUser;
  }
}
