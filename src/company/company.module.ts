import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './services/company.service';
import { CompanyGateway } from './gateways/company.gateway';
import { CompanyController } from './controllers/company.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([CompanyEntity])
    ],
    providers: [CompanyService, CompanyGateway],
    controllers: [CompanyController]
})
export class CompanyModule {}