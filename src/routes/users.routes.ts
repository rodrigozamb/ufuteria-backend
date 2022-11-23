import { Router } from 'express';
import { UsersController } from '../modules/users/users.controller';

const usersRoutes = Router()


const usersController = new UsersController();

usersRoutes.get('/',usersController.getAll);
usersRoutes.get('/:id',usersController.getOne);
usersRoutes.post('/',usersController.create);
usersRoutes.patch('/:id',usersController.update);
usersRoutes.delete('/',usersController.delete);


export default usersRoutes;