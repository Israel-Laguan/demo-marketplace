"use server";
import { getProducts } from "@/prisma/queries/productQueries";

export default async function getApparelSectionsData() {
  const apparelSections = await getProducts({});
  return apparelSections;
}
