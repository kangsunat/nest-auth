import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';
import { CobaModule } from './coba/coba.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, CobaModule],
})
export class AppModule {}
