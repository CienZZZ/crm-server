import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'admin',
        email: 'admin@poczta.fm',
        password: 'admin123',
      },
      {
        userId: 2,
        username: 'jacek',
        email: 'jacek@poczta.fm',
        password: 'secret123',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
