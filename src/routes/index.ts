import { Router } from 'express'
import badgesRoutes from './badges.routes';
import usersRoutes from './users.routes';
import usersBadgesRoutes from './usersBadges.routes';
import captainsRoutes from './captains.routes';
const routes = Router();


routes.use('/badges',badgesRoutes);
routes.use('/users',usersRoutes);
routes.use('/user-badge',usersBadgesRoutes);
routes.use('/captains',captainsRoutes);

export default routes;