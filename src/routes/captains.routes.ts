import { Router } from 'express';
import { CaptainsController } from '../modules/captains/captain.controller';

const captainsRoutes = Router()

const captainsController = new CaptainsController()

captainsRoutes.post('/auth', captainsController.auth)


export default captainsRoutes