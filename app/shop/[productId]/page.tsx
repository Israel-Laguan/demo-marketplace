import { redirect } from "next/navigation";
import { Suspense } from "react";
import getProductById from "@/actions/getProduct";
import Product from "./Product";

export default async function ProductPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  if (typeof productId !== "string") {
    redirect("/");
  }
  const product = await getProductById(productId);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Product product={product} />
    </Suspense>
  );
}
