import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { config } from './config';
import { CompanyModule } from './company/company.module';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.database),
    CompanyModule,
    ContactModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
