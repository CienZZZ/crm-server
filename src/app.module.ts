import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { config } from './config';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.database),
    CompanyModule
  ],
  controllers: [AppController]
})
export class AppModule {}
