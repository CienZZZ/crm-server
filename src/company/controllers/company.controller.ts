import {Controller} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyService } from '../services/company.service';

@Crud(CompanyEntity, {
    routes: {
        deleteOneBase: {
            returnDeleted: true
        }
    }
})
@Controller('company')
export class CompanyController {

    constructor(public readonly service: CompanyService) {}
}
