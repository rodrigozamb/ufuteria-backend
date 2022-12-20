import { Router } from 'express'
import badgesRoutes from './badges.routes';
import usersRoutes from './users.routes';
import usersBadgesRoutes from './usersBadges.routes';
const routes = Router();


routes.use('/badges',badgesRoutes);
routes.use('/users',usersRoutes);
routes.use('/user-badge',usersBadgesRoutes);

export default routes;