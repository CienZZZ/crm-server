import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    WebSocketGateway,
    WebSocketServer
} from '@nestjs/websockets';

import { Company } from '../models/company';
import {COMPANY_ACTIONS} from '../actions/company.actions';

@WebSocketGateway({
    namespace: '/company'
})
export class CompanyGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {

    @WebSocketServer() private server;

    afterInit() {
        console.log('socket initialized');
    }

    handleConnection(client) {
        console.log('client connected');
    }

    handleDisconnect(client) {
        console.log('client disconnected');
    }

    companyCreated(company: Company) {
        console.log('CT-GATEWAY: company created', company);
        this.server.emit(COMPANY_ACTIONS.LIVE_CREATED, company);
    }

    companyUpdated(company: Company) {
        console.log('CT-GATEWAY: company updated', company);
        this.server.emit(COMPANY_ACTIONS.LIVE_UPDATED, company);
    }

    companyDeleted(id: number) {
        console.log('CT-GATEWAY: company deleted', id);
        this.server.emit(COMPANY_ACTIONS.LIVE_DELETED, id);
    }
}
