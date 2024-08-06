import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(JwtGuard)
  @Get('status')
  status(@Req() req: Request) {
    console.log(req.user);
    return;
  }
}
