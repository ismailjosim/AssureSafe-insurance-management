import { UserModel } from './user.model';

const createUserToDB = async (payload: any) => {
  const user = await UserModel.create(payload);
  return user;
};
const getAllUsersFromDB = async () => {
  const users = await UserModel.find();
  return users;
};

const getSingleUserFromDB = async (id: string) => {
  const user = await UserModel.findById(id);
  return user;
};

export const UserService = {
  createUserToDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
