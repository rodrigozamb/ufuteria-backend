import { Router } from 'express'
import badgesRoutes from './badges.routes';
import usersRoutes from './users.routes';

const routes = Router();


routes.use('/badges',badgesRoutes);
routes.use('/users',usersRoutes);

export default routes;