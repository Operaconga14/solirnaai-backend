import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MockdatabaseService } from 'src/utils/mockdatabase.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, MockdatabaseService],
})
export class UsersModule {}
