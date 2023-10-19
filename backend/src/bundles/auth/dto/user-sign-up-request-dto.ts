import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

class UserSignUpRequestDto {
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsNotEmpty({ message: 'Full name is required' })
  fullName: string;
}

export { UserSignUpRequestDto };
