import { Request, response, Response } from "express";
import { CaptainService } from "./captain.service";



export class CaptainsController{

    async auth(req: Request, res: Response){
        try{

            const {email, password} = req.body;

            const captainService = new CaptainService();

            const login = await captainService.authenticate({email,password});
            return res.json(login)

        }catch(err){
            return res.status(400).json( err.message || err.details )
        }
    }
}