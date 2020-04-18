import { Injectable } from '@nestjs/common';
import { CompanyEntity } from '../entities/company.entity';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyGateway } from '../gateways/company.gateway';

@Injectable()
export class CompanyService extends RepositoryService<CompanyEntity> {
    
    constructor(
        @InjectRepository(CompanyEntity) repo,
        private companyGateway: CompanyGateway
    ) {
        super(repo);
    }

    
}