import { IsNotEmpty, Matches, MinLength } from 'class-validator';
import { EmailRegex, PasswordRegex } from 'src/interfaces/regrex.interface';

const emailValidator: EmailRegex = {
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

const passwordValidator: PasswordRegex = {
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export class RegisterAuthDto {
  @IsNotEmpty({ message: 'name should not be empty' })
  name: string;

  @IsNotEmpty({ message: 'email should not be empty' })
  @Matches(emailValidator.EMAIL_REGEX, {
    message: 'email must be a valid email address',
  })
  email: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  @MinLength(8, { message: 'password must be at least 8 characters long' })
  @Matches(passwordValidator.PASSWORD_REGEX, {
    message:
      'password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  password: string;

  @IsNotEmpty({ message: 'confirm password should not be empty' })
  confirmPassword: string;
}
