import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenutilsService {
  generateToken(): string {
    // Token generation logic here
    return 'generated-token';
  }
}
