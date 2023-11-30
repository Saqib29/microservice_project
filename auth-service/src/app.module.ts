import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config.module';
import { DbConnection } from './database/database.connection';
import { LoaderModule } from './loaders/loader.module';

@Module({
  imports: [AppConfigModule, DbConnection.forRoot(), LoaderModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
