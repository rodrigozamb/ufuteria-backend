import { Router } from 'express';
import { ensureCaptain } from '../middlewares/ensureCaptain.middleware';
import { UsersController } from '../modules/users/users.controller';

const usersRoutes = Router()


const usersController = new UsersController();

usersRoutes.get('/',usersController.getAll);
usersRoutes.get('/:cpf',usersController.getOne);
usersRoutes.post('/', ensureCaptain, usersController.create);
usersRoutes.patch('/:id', ensureCaptain, usersController.update);
usersRoutes.delete('/', ensureCaptain, usersController.delete);


export default usersRoutes;