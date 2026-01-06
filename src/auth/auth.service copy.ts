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
      // TODO: check the user exist implement registration logic (e.g., save user to database, hash password, send verification email, etc.)
      // const existingUser = mockDatabase.find(
      // (user) => user.email === registerAuthDto.email,
      // );
      // if (existingUser)
      // throw new BadRequestException('User with this email already exists');
      // if (registerAuthDto.confirmPassword !== registerAuthDto.password) {
      // throw new BadRequestException('Passwords do not match');
      // }
      // Hash password before saving (pseudo-code)
      // const hashedPassword = await this.passwordService.hashPassword(
      // registerAuthDto.password,
      // );
      // mockDatabase.push({
      // id: mockDatabase.length + 1,
      // email: registerAuthDto.email,
      // password: await hashedPassword,
      // name: registerAuthDto.name,
      // });
      // return {
      // message: 'Registration successful. check your email for verification.',
      // user: mockDatabase,
      // };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    return 'This action logs in a user';
  }
}
