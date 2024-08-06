import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private readonly users = [
    { id: 1, username: 'username1', password: 'pass1', role: 'role 1' },
    { id: 2, username: 'username2', password: 'pass2', role: 'role 2' },
    { id: 3, username: 'username3', password: 'pass3', role: 'role 3' },
  ];
  async validateUser({ username, password }: LoginDto): Promise<any> {
    const findUser = this.users.find((user) => user.username === username);

    if (findUser && findUser.password === password) {
      const { password, ...result } = findUser;
      return this.jwtService.sign(result);
    }

    return null;
  }
}
