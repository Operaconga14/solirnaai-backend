import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { MockdatabaseService } from 'src/utils/mockdatabase.service';

@Injectable()
export class UsersService {
  constructor(private readonly mockdatabaseServeice: MockdatabaseService) {}

  async myDetails(req: any) {
    try {
      const userId = req.user.id;

      const user = await this.mockdatabaseServeice.getUserById(userId);

      if (!user) throw new NotFoundException('User not found');

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
