import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local-strategy';
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
  providers: [AuthService, LocalStrategy, LocalGuard],
})
export class AuthModule {}
