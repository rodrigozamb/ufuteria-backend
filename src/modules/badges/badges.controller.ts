import { Request, Response } from "express";
import { BadgesService } from "./badges.service";


class BadgesController{

    async create(request: Request, response: Response){

        try{
            const { nome, foto_url } = request.body;
            const badgesRepository = new BadgesService();

            const badge = await badgesRepository.create({nome, foto_url});

            return response.status(201).json(badge);

        }catch(err){
            return response.status(400).json({error: err.detail || err.message})
        }
    }

    async getAll(request: Request, response: Response){
        try{
            const badgesRepository = new BadgesService();

            const badges = await badgesRepository.getAll();

            return response.json(badges);

        }catch(err){
            return response.status(400).json(err.detail)
        } 
    }

    async getOne(request: Request, response: Response){
        try{
            const { id } = request.params;
            const badgesRepository = new BadgesService();

            const badge = await badgesRepository.findById(id);

            return response.json(badge);

        }catch(err){
            return response.status(400).json(err.detail)
        } 
    }

    async update(request: Request, response: Response){
        return response.json({message: 'Para atualizar algum dado fale com heitor'})
    
    }

    async delete(request: Request, response: Response){
        return response.json({message: 'Para deletar algum dado fale com heitor'})
    }
}

export {BadgesController}