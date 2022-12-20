import { Router } from 'express';
import { UsersController } from '../modules/users/users.controller';

const usersBadgesRoutes = Router()


const usersController = new UsersController();

usersBadgesRoutes.post('/assign',usersController.assign);
usersBadgesRoutes.post('/unassign',usersController.unassign);


export default usersBadgesRoutes;