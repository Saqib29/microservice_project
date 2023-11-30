import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ObjectId,
  ObjectIdColumn,
  Unique,
} from 'typeorm';

@Entity('user')
@Unique(['email'])
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @BeforeUpdate()
  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
