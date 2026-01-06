import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PasswordService } from './utils/password.service';
import { UsersModule } from './users/users.module';
import { MockdatabaseService } from './utils/mockdatabase.service';
import { TokenutilsService } from './utils/tokenutils.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule],
  providers: [PasswordService, MockdatabaseService, TokenutilsService],
})
export class AppModule {}
