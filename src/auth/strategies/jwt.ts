import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'Rahasia!@#123',
    });
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('jwtstrategi :', { username, password });
    const user = await this.authService.validateUser({ username, password });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
