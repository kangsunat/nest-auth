import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'jangan pakai kode rahasia ini 123 !@#!@#',
      signOptions: { expiresIn: '10s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
