import { FastifyRequest, FastifyReply } from "fastify";
import {ListCustomerService} from '../services/ListCustomerService';



class ListCustomerControllers{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerService = new ListCustomerService();

        const customers=await listCustomerService.execute();

        reply.send(customers);
    }
}

export {ListCustomerControllers}