import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalStrategy } from './local-strategy';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.validateUser(body);
  }
}
