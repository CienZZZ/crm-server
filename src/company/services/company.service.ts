import { Injectable } from '@nestjs/common';
import { CompanyEntity } from '../entities/company.entity';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyGateway } from '../gateways/company.gateway';
import { FilterParamParsed, UpdateOneRouteOptions, DeleteOneRouteOptions } from '@nestjsx/crud/interfaces';
import { DeepPartial } from 'typeorm';

@Injectable()
export class CompanyService extends RepositoryService<CompanyEntity> {
    
    constructor(
        @InjectRepository(CompanyEntity) repo,
        private companyGateway: CompanyGateway
    ) {
        super(repo);
    }

    async createOne(data: CompanyEntity, params: FilterParamParsed[]): Promise<CompanyEntity> {
        const company = await super.createOne(data, params);
        this.companyGateway.companyCreated(company);
        return company;
    }

    async updateOne(data: DeepPartial<CompanyEntity>, params: FilterParamParsed[], routeOptions?: UpdateOneRouteOptions): Promise<CompanyEntity> {
        const company = await super.updateOne(data, params, routeOptions);
        this.companyGateway.companyUpdated(company);
        return company;
    }

    async deleteOne(params: FilterParamParsed[], routeOptions?: DeleteOneRouteOptions): Promise<void | CompanyEntity> {
        await super.deleteOne(params, routeOptions);
        this.companyGateway.companyDeleted(params[0].value);
        return undefined;
    }
}