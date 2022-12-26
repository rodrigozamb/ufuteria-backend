import { Request, Response } from "express";
import { usersRepository } from "../../repositories/users.repository";
import { BadgesService } from "../badges/badges.service";
import { UserService } from "./users.service";



export class UsersController{



    async create(request: Request, response: Response){
        
        try{
            const {
                nome,
                data_nasc,
                curso,
                fone,
                apelido,
                cpf,
                plan,
                foto_url
            } = request.body;
            
            const userService = new UserService();
    
            const user = await userService.create({ 
                nome,
                data_nasc,
                curso,
                fone,
                apelido,
                cpf,
                plan,
                data_associacao: new Date(),
                status: 'active',
                foto_url
            })
            return response.json(user);
            
        }catch(err){
            
            return response.status(400).json({error: err.detail || err.message})
        }
    }

    async getAll(request: Request, response: Response){
        try{
            
            const userService = new UserService();
    
            const users = await userService.getAll()
            return response.json(users);
            
        }catch(err){
            
            return response.status(400).json({error: err.detail})
        }
    }

    async getOne(request: Request, response: Response){
        try{
            const {cpf} = request.params;
            const userService = new UserService();
            
            const user = await userService.findByCPF(cpf)

            if(user)
                return response.json(user);
            else
                return response.status(400).json({message:"User not found"})
        }catch(err){
            
            return response.status(400).json({error: err.detail})
        }
    }

    async update(request: Request, response: Response){
        try{
            const data = request.body;
            const { id } = request.params;
            const userService = new UserService();
            const user = await userService.update(id,data);

            if(user != null){
                return response.json(user);
            }else{
                return response.status(400).json({message: 'User not found'})
            }
            
        }catch(err){
            return response.status(400).json({error: err.detail})
        }
    }


    async delete(request: Request, response: Response){
        return response.json({message: 'Para deletar algum dado fale com heito'})
    }

    async assign(request: Request, response: Response){
        try{
            const {badge_id, user_id} = request.body;
            const userService = new UserService();
            const badgeService = new BadgesService();
            
            const user = await userService.findById(user_id);
            const badge = await badgeService.findById(badge_id);

            if(!user){
                return response.status(400).json({message: 'User not found'});
            }
            if(!badge){
                return response.status(400).json({message: 'Badge not found'});    
            }

            const oldBadges = user.badges.filter((bad)=>{
                return bad.id == badge.id;
            });

            if(oldBadges.length > 0){
                return response.status(200).json(user);
            }

            user.badges.push(badge);
            await usersRepository.save(user);
            
            return response.json(user);
            
        }catch(err){
            return response.status(400).json(err.detail)
        }

    }

    async unassign(request: Request, response: Response){
        try{


            const {badge_id, user_id} = request.body;
            const userService = new UserService();
            const badgeService = new BadgesService();
            
            const user = await userService.findById(user_id);
            const badge = await badgeService.findById(badge_id);

            if(!user){
                return response.status(400).json({message: 'User not found'});
            }
            if(!badge){
                return response.status(400).json({message: 'Badge not found'});    
            }

            const newBadges = user.badges.filter((bad)=>{
                return bad.id != badge.id;
            });

            user.badges = newBadges;

            await usersRepository.save(user);

            return response.json(user);

        }catch(err){
            return response.status(400).json(err.detail)
        }
    }
}