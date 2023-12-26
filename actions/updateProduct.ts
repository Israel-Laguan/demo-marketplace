"use server";
import { revalidatePath } from "next/cache";
import { updateProduct } from "@/prisma/queries/productQueries";
import { Product } from "@/prisma/models";

export default async function updateProductById(id: string, formData: Product) {
  await updateProduct(id, formData);
  revalidatePath("/");
}