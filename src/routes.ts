import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerControllers } from "./controllers/CreateCostumerControllers";
import {ListCustomerControllers} from './controllers/ListCustomerControllers';
import {DeleteCustomerController} from './controllers/DeleteCustomerController'

export async function routes(fastify: FastifyInstance, options:FastifyPluginOptions){
    fastify.get("/aluno", async(request:FastifyRequest, reply:FastifyReply)=>{
        return{ok: true}
    })

    fastify.post("./customer", async(request:FastifyRequest, reply:FastifyReply) => {
        return new CreateCostumerControllers().handle(request, reply)
    })

    fastify.get("./customers", async(request:FastifyRequest, reply:FastifyReply) => {
        return new ListCustomerControllers().handle(request, reply)
    })

    fastify.delete("./customers", async(request:FastifyRequest, reply:FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })
}