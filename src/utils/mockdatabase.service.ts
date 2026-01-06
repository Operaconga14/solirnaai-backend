import { Injectable } from '@nestjs/common';
import { MocksUser } from 'src/interfaces/mocks.interface';

@Injectable()
export class MockdatabaseService {
  private mockDatabse: MocksUser[] = [];

  getAllUsers(): MocksUser[] {
    return this.mockDatabse;
  }

  addUser(user: MocksUser) {
    this.mockDatabse.push(user);
    return user;
  }

  getuserByEmail(email: string): MocksUser | undefined {
    return this.mockDatabse.find((user) => user.email === email);
  }

  removeUserById(userId: number): void {
    this.mockDatabse = this.mockDatabse.filter((user) => user.id !== userId);
  }
}
