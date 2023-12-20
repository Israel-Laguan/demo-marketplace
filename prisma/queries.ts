import { hashPassword } from '@/services/cryptoService';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create user
export async function createUser(data: User): Promise<User> {
  const user = await prisma.user.create({
    data: {
      ...data,
      // Securely hash the password before saving
      password: await hashPassword(data.password),
    },
  });
  return user;
}

// Read users
export async function getUsers(where?: Prisma.UserWhereInput): Promise<User[]> {
  const users = await prisma.user.findMany({ where });
  return users;
}

// Update user
export async function updateUser(id: string, data: Partial<User>): Promise<User> {
  const user = await prisma.user.update({
    where: { id },
    data: {
      ...data,
      // Securely hash the password if updated
      password: data.password ? await hashPassword(data.password) : undefined,
    },
  });
  return user;
}

// Delete user
export async function deleteUser(id: string): Promise<void> {
  await prisma.user.delete({ where: { id } });
}

// Create product
export async function createProduct(data: Product): Promise<Product> {
  const product = await prisma.product.create({
    data,
  });
  return product;
}

// Read products
export async function getProducts(where?: Prisma.ProductWhereInput): Promise<Product[]> {
  const products = await prisma.product.findMany({ where });
  return products;
}

// Update product
export async function updateProduct(id: string, data: Partial<Product>): Promise<Product> {
  const product = await prisma.product.update({
    where: { id },
    data,
  });
  return product;
}

// Delete product
export async function deleteProduct(id: string): Promise<void> {
  await prisma.product.delete({ where: { id } });
}

// Create bag
export async function createBag(data: Bag): Promise<Bag> {
  const bag = await prisma.bag.create({
    data,
  });
  return bag;
}

// Read bags
export async function getBags(where?: Prisma.BagWhereInput): Promise<Bag[]> {
  const bags = await prisma.bag.findMany({ where });
  return bags;
}

// Update bag
export async function updateBag(id: string, data: Partial<Bag>): Promise<Bag> {
  const bag = await prisma.bag.update({
    where: { id },
    data,
  });
  return bag;
}

// Delete bag
export async function deleteBag(id: string): Promise<void> {
  await prisma.bag.delete({ where: { id } });
}
