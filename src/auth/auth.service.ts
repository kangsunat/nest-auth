import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly fakeUser = [
    { id: 1, username: 'nama username', password: 'pass1' },
  ];
  validateUser(body: LoginDto) {
    const getUser = this.fakeUser.find(
      (user) => user.username == body.username,
    );

    if (getUser && getUser.password === body.password) return getUser;

    throw new UnauthorizedException();
  }
}
