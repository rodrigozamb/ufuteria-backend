import { badgesRepository } from "../../repositories/badges.repository";


export class BadgesService{

    async create(data){
        const newBadge = badgesRepository.create(data);
        await badgesRepository.save(newBadge);
        return newBadge;
    }

    async getAll(){
        const badges = await badgesRepository.find();
        return badges;
    }

    async findById(id: string){
        const badge = await badgesRepository.findOne({where:{id}})
        return badge;
    }

}