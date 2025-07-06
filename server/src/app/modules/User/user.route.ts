import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

// all user routes
router.get('/create-user', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getSingleUser);

export const UserRoutes = router;
