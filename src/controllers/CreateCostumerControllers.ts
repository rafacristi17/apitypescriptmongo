import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCostumerServices} from '../services/CreateCostumerServices';

class CreateCostumerControllers{
    async handle(request:FastifyRequest, reply:FastifyReply){
            const {name, cpf, email, senha } = request.body as {name:string, cpf:number, email: string, senha:number};

            console.log(name)
            console.log(cpf)
            console.log(email)
            console.log(senha)
            

        const customerServices = new CreateCostumerServices()

        const customer = await customerServices.execute({name, cpf, email, senha});

        reply.send(customer)

    }
}
export{CreateCostumerControllers}