import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from 'src/utils/password.service';
import { MockdatabaseService } from 'src/utils/mockdatabase.service';
import { TokenutilsService } from 'src/utils/tokenutils.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PasswordService,
    MockdatabaseService,
    TokenutilsService,
  ],
})
export class AuthModule {}
