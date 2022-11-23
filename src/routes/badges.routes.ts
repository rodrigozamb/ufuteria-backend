import { Router } from 'express';
import { BadgesController } from '../modules/badges/badges.controller';

const badgesRoutes = Router()

const badgesController = new BadgesController();

badgesRoutes.get('/',badgesController.getAll);
badgesRoutes.get('/:id',badgesController.getOne);
badgesRoutes.post('/',badgesController.create);
badgesRoutes.patch('/:id',badgesController.update);
badgesRoutes.delete('/',badgesController.delete);

export default badgesRoutes;