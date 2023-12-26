import { hashPassword } from "@/services/cryptoService";
import { Prisma } from "@prisma/client";
import { User } from "../models";
import { prisma } from ".";

/**
 * Creates a new user in the database.
 *
 * @param {object} data The user data, including the name, email, and password.
 * @returns {Promise<User>} The newly created user object.
 */
export async function createUser(data: Omit<User, "id">): Promise<User> {
  return await prisma.user
    .create({
      data: {
        ...data,
        // Securely hash the password before saving
        password: await hashPassword(data.password),
      },
    })
    .then(async (user) => {
      await prisma.$disconnect();
      return user;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Reads users from the database.
 *
 * @param {object} where The Prisma query object used to filter the users.
 * @returns {Promise<User[]>} The array of users.
 */
export async function getUsers(where?: Prisma.UserWhereInput): Promise<User[]> {
  return await prisma.user
    .findMany({ where })
    .then(async (users) => {
      await prisma.$disconnect();
      return users;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Updates a user in the database.
 *
 * @param {string} id The ID of the user to update.
 * @param {object} data The data to update the user with.
 * @returns {Promise<User>} The updated user object.
 */
export async function updateUser(
  id: string,
  data: Partial<User>
): Promise<User> {
  return await prisma.user
    .update({
      where: { id },
      data: {
        ...data,
        // Securely hash the password if updated
        password: data.password ? await hashPassword(data.password) : undefined,
      },
    })
    .then(async (user) => {
      await prisma.$disconnect();
      return user;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Deletes a user from the database.
 *
 * @param {string} id The ID of the user to delete.
 * @returns {Promise<void>}
 */
export async function deleteUser(id: string): Promise<void> {
  await prisma.user
    .delete({ where: { id } })
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}
