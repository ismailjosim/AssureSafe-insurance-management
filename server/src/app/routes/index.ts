import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((singleRoute) => router.use(singleRoute.path, singleRoute.route));
export default router;
