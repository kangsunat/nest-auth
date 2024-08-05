import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    { id: 1, username: 'username1', password: 'password1' },
    { id: 2, username: 'username2', password: 'password2' },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
