import { Request, Response } from 'express';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  console.log('From User Controller: ', user);
  const result = await UserService.createUserToDB(user);
  console.log('From User Controller: ', result);
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
