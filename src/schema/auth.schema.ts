import { z } from 'zod';

export const registerSchema = z
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

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string(),
  });

export type LoginInput = z.infer<typeof loginSchema>;
