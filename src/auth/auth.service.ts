import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private readonly fakeUser = [
    { id: 1, username: 'username1', password: 'pass1' },
    { id: 2, username: 'username2', password: 'pass2' },
  ];

  validateUser(body: LoginDto) {
    const getUser = this.fakeUser.find(
      (user) => user.username == body.username,
    );

    if (getUser && getUser.password === body.password) {
      const { password, ...result } = getUser;
      return this.jwtService.sign(result);
    }

    return null;
  }
}
