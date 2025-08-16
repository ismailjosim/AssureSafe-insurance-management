import z from 'zod';

const createUserValidation = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  role: z.enum(['admin', 'agent', 'customer'], {
    errorMap: () => ({ message: "Role must be one of 'admin', 'agent', or 'customer'" }),
  }),
  photoUrl: z.string().url('Invalid URL format').optional(),
  lastLogin: z.date().optional(),
  status: z.boolean().optional(),
  registrationDate: z.date().optional(),
  isDeleted: z.boolean().optional(),
});
