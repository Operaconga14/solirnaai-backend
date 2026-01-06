import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PasswordService } from 'src/utils/password.service';

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

const mockDatabase: User[] = [];

@Injectable()
export class AuthService {
  constructor(private readonly passwordService: PasswordService) {}

  async register(registerAuthDto: RegisterAuthDto) {
    try {
      // TODO: check the user exist implement registration logic (e.g., save user to database, hash password, send verification email, etc.)
      if (registerAuthDto.confirmPassword !== registerAuthDto.password) {
        throw new BadRequestException('Passwords do not match');
      }

      // Hash password before saving (pseudo-code)
      const hashedPassword = await this.passwordService.hashPassword(
        registerAuthDto.password,
      );

      mockDatabase.push({
        id: mockDatabase.length + 1,
        email: registerAuthDto.email,
        password: await hashedPassword,
        name: registerAuthDto.name,
      });

      return {
        message: 'Registration successful. check your email for verification.',
        user: mockDatabase,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    return 'This action logs in a user';
  }
}
