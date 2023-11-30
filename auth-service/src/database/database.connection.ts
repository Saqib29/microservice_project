import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import dbConnectinString from './database.config';

@Module({})
export class DbConnection {
  static forRoot(): DynamicModule {
    return {
      module: DbConnection,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: dbConnectinString,
          entities: [join(__dirname, '../entities', '*.entity.{ts,js}')],
          synchronize: true,
        }),
      ],
    };
  }
}
