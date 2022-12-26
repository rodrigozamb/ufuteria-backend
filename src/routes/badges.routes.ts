import { Router } from 'express';
import { ensureCaptain } from '../middlewares/ensureCaptain.middleware';
import { BadgesController } from '../modules/badges/badges.controller';

const badgesRoutes = Router()

const badgesController = new BadgesController();

badgesRoutes.get('/',badgesController.getAll);
badgesRoutes.get('/:id',badgesController.getOne);
badgesRoutes.post('/', ensureCaptain, badgesController.create);
badgesRoutes.patch('/:id', ensureCaptain, badgesController.update);
badgesRoutes.delete('/', ensureCaptain, badgesController.delete);

export default badgesRoutes;