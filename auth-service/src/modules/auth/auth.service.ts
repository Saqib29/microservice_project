import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './Dto/login.dto';
// import { RegistrationDto } from './Dto/registration.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async login(credentials: LoginDto) {
    try {
      const user = await this.userRepository.findOne({
        where: { email: credentials.email },
      });

      if (user && (await bcrypt.compare(credentials.password, user.password))) {
        return user;
      } else {
        throw new Error('Incorrect credentials');
      }
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }

  async register(userData: any) {
    try {
      const newUser = this.userRepository.create(userData);
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new Error(error || 'Registration failed');
    }
  }
}
