import { z } from 'zod';

export const createUserSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    name: z.string(),
    password: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type CreateUserInput = z.infer<typeof createUserSchema>;
