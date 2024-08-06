import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { JwtGuard } from './guards/jwt.guard';
import { LocalStrategy } from './strategies/local';
import { JwtStrategy } from './strategies/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'Rahasia!@#123',
      signOptions: { expiresIn: '30s' },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, LocalGuard, JwtGuard],
})
export class AuthModule {}
