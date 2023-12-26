"use server";
import { revalidatePath } from "next/cache";
import { deleteProduct } from "@/prisma/queries/productQueries";

export default async function deleteProductById(id: string) {
  await deleteProduct(id);
  revalidatePath("/");
}
