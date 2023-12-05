import bcrypt from "bcrypt";
import { BeforeInsert, Column, Entity } from "typeorm";
import Model from "./model.entity";

@Entity("users")
export class User extends Model {
  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  static async comparePassword(
    candidatePassword: string,
    hashedPassword: string
  ) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }

  toJSON() {
    return {
      ...this,
      password: undefined
    }
  }
}
