import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class TokenutilsService {
  private readonly JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';

  generateToken(user: any) {
    const payload = { sub: user.id, email: user.email };
    return sign(payload, this.JWT_SECRET, {
      expiresIn: '1d',
    });
  }

  verifyToken(token: string) {
    try {
      const decoded = verify(token, this.JWT_SECRET);

      return decoded;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
