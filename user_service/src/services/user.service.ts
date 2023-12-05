import { AppDataSource } from "../database/db-connection";
import { User } from "../entities/user.entity";
export class UserService {
  constructor(
    private readonly userRepository = AppDataSource.getRepository(User)
  ) {}

  async getUsers() {
    return await this.userRepository.find();
  }

  async getUser(id: string) {
    return await this.userRepository.findOneBy({ id });
  }
}
