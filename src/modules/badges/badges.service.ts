import { badgesRepository } from "../../repositories/badges.repository";


export class BadgesService{

    async create(data){

        const badgeAlreadyExists = await this.findByName(data.nome);

        if(!badgeAlreadyExists){
            const newBadge = badgesRepository.create(data);
            await badgesRepository.save(newBadge);
            return newBadge;
        }else{
            throw new Error('Badge Already Exists!');
        }
    }

    async getAll(){
        const badges = await badgesRepository.find();
        return badges;
    }

    async findById(id: string){
        const badge = await badgesRepository.findOne({where:{id}})
        return badge;
    }

    async findByName(nome: string){
        const badge = await badgesRepository.findOne({where:{nome}})
        return badge;
    }

}