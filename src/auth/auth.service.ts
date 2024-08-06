import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private readonly users = [
    { id: 1, username: 'username1', password: 'pass1' },
    { id: 2, username: 'username2', password: 'pass2' },
    { id: 3, username: 'username3', password: 'pass3' },
  ];
  validateUser(payload: LoginDto) {
    const findUser = this.users.find(
      (user) => user.username === payload.username,
    );

    if (findUser && findUser.password === payload.password) {
      const { password, ...result } = findUser;
      console.log('needs :', result, process.env.SECRET_KEY);

      const accessToken = this.jwtService.sign(result);
      return accessToken;
    }

    return null;
  }
}
