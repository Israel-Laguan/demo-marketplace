"use server";
import { revalidatePath } from "next/cache";
import { getProducts } from "@/prisma/queries/productQueries";

export default async function getProductById(id: string) {
  const [product] = await getProducts({ id }, 1, 1);
  revalidatePath("/edit/" + id);
  return product;
}
