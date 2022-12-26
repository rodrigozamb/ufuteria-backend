import { Router } from 'express';
import { ensureCaptain } from '../middlewares/ensureCaptain.middleware';
import { UsersController } from '../modules/users/users.controller';

const usersBadgesRoutes = Router()


const usersController = new UsersController();

usersBadgesRoutes.post('/assign', ensureCaptain, usersController.assign);
usersBadgesRoutes.post('/unassign', ensureCaptain, usersController.unassign);


export default usersBadgesRoutes;