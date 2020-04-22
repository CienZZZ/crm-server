import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { ContactService } from './services/contact.service';
import { ContactGateway } from './gateways/contact.gateway';
import { ContactController } from './controllers/contact.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ContactEntity])
    ],
    providers: [ContactService, ContactGateway],
    controllers: [ContactController]
})
export class ContactModule {}