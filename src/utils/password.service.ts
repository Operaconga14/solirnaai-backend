import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  hashPassword(password: string) {
    // Implement password hashing logic here
    const hashedpassword = bcrypt.hash(password, 10);
    return hashedpassword;
  }

  comparePasswords(plainTextPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }
}
