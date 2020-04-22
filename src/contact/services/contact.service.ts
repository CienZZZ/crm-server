import { Injectable } from '@nestjs/common';
import { ContactEntity } from '../entities/contact.entity';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactGateway } from '../gateways/contact.gateway';
import { FilterParamParsed, UpdateOneRouteOptions, DeleteOneRouteOptions } from '@nestjsx/crud/interfaces';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ContactService extends RepositoryService<ContactEntity> {
    
    constructor(
        @InjectRepository(ContactEntity) repo,
        private contactGateway: ContactGateway
    ) {
        super(repo);
    }

    async createOne(data: ContactEntity, params: FilterParamParsed[]): Promise<ContactEntity> {
        const contact = await super.createOne(data, params);
        this.contactGateway.contactCreated(contact);
        return contact;
    }

    async updateOne(data: DeepPartial<ContactEntity>, params: FilterParamParsed[], routeOptions?: UpdateOneRouteOptions): Promise<ContactEntity> {
        const contact = await super.updateOne(data, params, routeOptions);
        this.contactGateway.contactUpdated(contact);
        return contact;
    }

    async deleteOne(params: FilterParamParsed[], routeOptions?: DeleteOneRouteOptions): Promise<void | ContactEntity> {
        await super.deleteOne(params, routeOptions);
        this.contactGateway.contactDeleted(params[0].value);
        return undefined;
    }
}