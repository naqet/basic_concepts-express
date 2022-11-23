import { User } from "@prisma/client";
import IUserPayload from "../../types/IUserPayload";
import db from "../../utils/db";

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await db.user.findFirst({ where: { email } });
};

export const getUser = async (id: number): Promise<User | null> => {
  return await db.user.findFirst({ where: { id } });
};

export const getAllUsers = async (): Promise<User[]> => {
  return await db.user.findMany();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  return await db.user.create({
    data: {
      email: payload.email,
      name: payload.name,
      passwordHash: payload.passwordHash,
    },
  });
};

export const deleteUser = async (id: number): Promise<User> => {
  return await db.user.delete({ where: { id } });
};
