import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    cpf:number;
    email: string;
    senha:number;
}

class CreateCostumerServices{
    async execute({name, cpf, email, senha}: CreateCustomerProps){
        if(!name ||!cpf|| !email || !senha){
            throw new Error("Preencha todos os campos")
        }
        const customer= await prismaClient.customer.create({
            data:{
                name,
                cpf,
                email,
                senha
            }
        })
        return customer
    }
}

export{CreateCostumerServices}