import {Controller} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ContactEntity } from '../entities/contact.entity';
import { ContactService } from '../services/contact.service';

@Crud(ContactEntity, {
    routes: {
        deleteOneBase: {
            returnDeleted: true
        }
    }
})
@Controller('contact')
export class ContactController {

    constructor(public readonly service: ContactService) {}
}
