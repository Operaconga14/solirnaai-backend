import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PasswordService } from 'src/utils/password.service';
import { MockdatabaseService } from 'src/utils/mockdatabase.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private mockDatabaseService: MockdatabaseService,
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    try {
      const existingUser = this.mockDatabaseService.getuserByEmail(
        registerAuthDto.email,
      );

      if (existingUser) throw new BadRequestException('Email already in use');

      if (registerAuthDto.confirmPassword !== registerAuthDto.password)
        throw new BadRequestException('Passwords do not match');

      const hashedPassword = await this.passwordService.hashPassword(
        registerAuthDto.password,
      );

      const newUser = this.mockDatabaseService.addUser({
        id: this.mockDatabaseService.getAllUsers().length + 1,
        email: registerAuthDto.email,
        password: hashedPassword,
        name: registerAuthDto.name,
      });

      return {
        message: 'Registration successful. Check your email for verification.',
        user: newUser,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    try {
      const user = this.mockDatabaseService.getuserByEmail(loginAuthDto.email);

      if (!user) throw new BadRequestException('Invalid email or password');

      const ispasswordMatched = await this.passwordService.comparePasswords(
        loginAuthDto.password,
        user.password,
      );

      if (!ispasswordMatched)
        throw new BadRequestException('Invalid email or password');

      return {
        message: 'Login successful',
        user: user,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
