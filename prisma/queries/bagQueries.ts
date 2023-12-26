import { Prisma } from "@prisma/client";
import { Bag } from "../models";
import { prisma } from ".";

/**
 * Creates a new bag in the database.
 *
 * @param {object} data The bag data, including the user ID, product ID, and quantity.
 * @returns {Promise<Bag>} The newly created bag object.
 */
export async function createBag(data: Bag): Promise<Bag> {
  return await prisma.bag
    .create({
      data,
    })
    .then(async (bag) => {
      await prisma.$disconnect();
      return bag;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Reads bags from the database.
 *
 * @param {object} where The Prisma query object used to filter the bags.
 * @param {number} page The page number of the bags to return.
 * @param {number} pageSize The number of bags to return per page.
 * @returns {Promise<Bag[]>} The array of bags.
 */
export async function getBags(
  where?: Prisma.BagWhereInput,
  page: number = 0,
  pageSize: number = 10
): Promise<Bag[]> {
  const skip = (page - 1) * pageSize;
  return await prisma.bag
    .findMany({ where, skip, take: pageSize })
    .then(async (bags) => {
      await prisma.$disconnect();
      return bags;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Updates a bag in the database.
 *
 * @param {string} id The ID of the bag to update.
 * @param {object} data The data to update the bag with.
 * @returns {Promise<Bag>} The updated bag object.
 */
export async function updateBag(id: string, data: Partial<Bag>): Promise<Bag> {
  return await prisma.bag
    .update({
      where: { id },
      data,
    })
    .then(async (bag) => {
      await prisma.$disconnect();
      return bag;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Deletes a bag from the database.
 *
 * @param {string} id The ID of the bag to delete.
 * @returns {Promise<void>}
 */
export async function deleteBag(id: string): Promise<void> {
  await prisma.bag
    .delete({ where: { id } })
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}
