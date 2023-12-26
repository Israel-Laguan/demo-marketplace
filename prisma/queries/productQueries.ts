import { Prisma } from "@prisma/client";
import { Product } from "../models";
import { prisma } from ".";

/**
 * Creates a new product in the database.
 *
 * @param {object} data The product data, including the name, description, and price.
 * @returns {Promise<Product>} The newly created product object.
 */
export async function createProduct(data: Product): Promise<Product> {
  return await prisma.product
    .create({
      data,
    })
    .then(async (product) => {
      await prisma.$disconnect();
      return product;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Reads products from the database.
 *
 * @param {object} where The Prisma query object used to filter the products.
 * @param {number} page The page number of the products to return.
 * @param {number} pageSize The number of products to return per page.
 * @returns {Promise<Product[]>} The array of products.
 */
export async function getProducts(
  where?: Prisma.ProductWhereInput,
  page: number = 1,
  pageSize: number = 10
): Promise<Product[]> {
  const skip = (page - 1) * pageSize;
  return await prisma.product
    .findMany({
      where,
      skip,
      take: pageSize,
    })
    .then(async (products) => {
      await prisma.$disconnect();
      return products;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Updates a product in the database.
 *
 * @param {string} id The ID of the product to update.
 * @param {object} data The data to update the product with.
 * @returns {Promise<Product>} The updated product object.
 */
export async function updateProduct(
  id: string,
  data: Partial<Product>
): Promise<Product> {
  return await prisma.product
    .update({
      where: { id },
      data,
    })
    .then(async (product) => {
      await prisma.$disconnect();
      return product;
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}

/**
 * Deletes a product from the database.
 *
 * @param {string} id The ID of the product to delete.
 * @returns {Promise<void>}
 */
export async function deleteProduct(id: string): Promise<void> {
  await prisma.product
    .delete({ where: { id } })
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (error) => {
      await prisma.$disconnect();
      throw error
    });
}
