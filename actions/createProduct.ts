"use server";
import { revalidatePath } from "next/cache";
import { createProduct } from "@/prisma/queries/productQueries";
import { Product } from "@/prisma/models";

export default async function getApparelSectionsData(formData: Product) {
  await createProduct(formData);
  revalidatePath("/");
}