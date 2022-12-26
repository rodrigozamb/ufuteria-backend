import { NextFunction, Request,Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";

interface IPayload{
    sub:string
}

export async function ensureCaptain(request:Request,response:Response,next:NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({error:'Missing session token...'})
    }

    const [,token] = authHeader.split(" ")
    
    try{
        const { secret_token } = auth;

        const {sub:user_id} = verify(
            token,
            secret_token
        ) as IPayload

  
        request.captain = {
            id:user_id
        }

        next()
    }catch(err){
        return response.status(401).json({error:'Invalid Token...'})
    }
    
}