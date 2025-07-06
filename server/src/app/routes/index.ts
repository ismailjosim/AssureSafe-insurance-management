import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((singleRoute) => router.use(singleRoute.path, singleRoute.route));
export default router;
