
import { usersRepository } from "../../repositories/users.repository";

export class UserService{


    
    async create(data){

        const userAlreadyExists = await this.findByCPF(data.cpf);
        
        if(!userAlreadyExists){
            const newUser = usersRepository.create(data);
            await usersRepository.save(newUser);
            return newUser;
        }else{
            throw new Error("User Already Exists!");
        }
    }

    async getAll(){
        const users = await usersRepository.find();
        return users;
    }

    async findById(id: string){
        const user = await usersRepository.findOne({where:{id}});
        return user;
    }
    
    async findByCPF(cpf: string){
        const user = await usersRepository.findOne({where:{cpf}});
        return user;
    }

    async update(id: string ,data){

        const userExists = await this.findById(id);

        if(userExists){
            const userUpdated = await usersRepository.update(id,{ ...data})
            if(userUpdated.affected > 0){
                return await this.findById(id);
            }
            return null;
        }else{
            throw new Error('User does not exits');
        }
    }
}