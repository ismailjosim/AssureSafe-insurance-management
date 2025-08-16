import { Request, Response } from 'express';
import { UserService } from './user.service';
import { UserModel } from './user.model';

const createUser = async (req: Request, res: Response) => {
  const user = new UserModel(req.body);
  const result = await UserService.createUserToDB(user);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: result,
  });
};

const getAllUsers = async (req: Request, res: Response) => {
  const result = await UserService.getAllUsersFromDB();
  res.status(201).json({
    success: true,
    message: 'User Retrieved successfully',
    data: result,
  });
};
const getSingleUser = async (req: Request, res: Response) => {
  const result = await UserService.getSingleUserFromDB(req.params.id);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: result,
  });
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
