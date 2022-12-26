
import { captainsRepository } from "../../repositories/captains.repository";
import { compare } from 'bcrypt'
import {sign, verify} from 'jsonwebtoken'
import auth from '../../config/auth'

interface IPayload{
    id: string;
}


export class CaptainService{


    async authenticate(data){
        
        const { email, password} = data;
        
        const { secret_token, expires_in_token } = auth

        const captain = await captainsRepository.findOne({where:{email}});
        
        if(!captain){
            throw new Error("Email or password incorrect..")
        }

        const passwordMatch = await compare(password,captain.password)
        if(!passwordMatch){
            throw new Error("Email or password incorrect..")
        }
        
        const token = sign({},secret_token,{
            subject:captain.id,
            expiresIn:expires_in_token
        })
        
        return {
            token,
            email: captain.email
        }
    }

}