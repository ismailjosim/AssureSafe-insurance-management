export interface IUser {
  name: string;
  email: string;
  password?: string; // TODO: Password might not always be exposed in the interface, e.g., after login
  role: 'admin' | 'agent' | 'customer';
  photoUrl: string;
  lastLogin: Date;
  status: boolean;
  registrationDate: Date;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
