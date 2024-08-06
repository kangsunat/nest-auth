import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt-strategy';
import { LocalGuard } from './local.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'Rahasia!@#123',
      signOptions: { expiresIn: '30s' },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalGuard],
})
export class AuthModule {}
