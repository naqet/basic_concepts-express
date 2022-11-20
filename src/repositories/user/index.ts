import { User } from "@prisma/client";
import db from "../../utils/db";

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await db.user.findFirst({ where: { email } });
};

export const getAllUsers = async (): Promise<User[]> => {
  return await db.user.findMany();
};

export const createUser = async (
  email: string,
  name?: string
): Promise<User> => {
  return await db.user.create({ data: { email, name } });
};

export const deleteUser = async (id: number): Promise<User> => {
  return await db.user.delete({ where: { id } });
};
