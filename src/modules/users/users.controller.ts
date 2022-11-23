import { Request, Response } from "express";



export class UsersController{

    async create(request: Request, response: Response){
        const {
            nome,
            data_nasc,
            curso,
            fone,
            apelido,
            cpf,
            plan,
            data_associacao,
            status,
            foto_url
        } = request.body;

        return response.json({
            nome,
            data_nasc,
            curso,
            fone,
            apelido,
            cpf,
            plan,
            data_associacao,
            status,
            foto_url
        });
    }

    async getAll(request: Request, response: Response){
        
    }

    async getOne(request: Request, response: Response){
        
    }

    async update(request: Request, response: Response){
        
    }


    async delete(request: Request, response: Response){
        
    }
}