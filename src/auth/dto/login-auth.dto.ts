import { IsNotEmpty, Matches } from 'class-validator';
import { EmailRegex } from 'src/interfaces/regrex.interface';

const emailValidator: EmailRegex = {
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export class LoginAuthDto {
  @IsNotEmpty({ message: 'email should not be empty' })
  @Matches(emailValidator.EMAIL_REGEX, {
    message: 'email must be a valid email address',
  })
  email: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  password: string;
}
