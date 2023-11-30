import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './Dto/login.dto';
// import { RegistrationDto } from './Dto/registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: LoginDto) {
    try {
      return await this.authService.login(credentials);
    } catch (error) {
      throw new BadRequestException(`issue: ${error.message}`);
    }
  }

  @Post('register')
  async register(@Body() userData: any) {
    try {
      return await this.authService.register(userData);
    } catch (error) {
      console.error(`Error during register ${error.message}`);
      throw new BadRequestException(error.message);
    }
  }
}
